import { randomBytes } from 'crypto';

import { encodeMessage } from '@trezor/protobuf';
import messages from '@trezor/protobuf/messages.json';
import {
    ThpState,
    ThpStateSerialized,
    thp as protocolThp,
    v2 as protocolV2,
} from '@trezor/protocol';
import { Session, Transport } from '@trezor/transport';
import type { PathPublic } from '@trezor/transport/src/types';

export class DeviceManager {
    private isStopped = false;
    private isInitialized = false;
    private transport: Transport;
    private thpState: ThpState;
    private session?: Session;
    private currentPath?: PathPublic;

    constructor(transport: Transport) {
        this.transport = transport;
        this.thpState = new protocolThp.ThpState();
    }

    getIsInitialized() {
        return this.isInitialized;
    }

    async initialize(): Promise<void> {
        if (this.isStopped) {
            throw new Error('Transport is stopped');
        }

        await this.transport.init();
        this.transport.updateMessages(messages);
        await this.transport.loadMessages('thp', protocolThp.getProtobufDefinitions);
        this.isInitialized = true;
    }

    stop(): void {
        if (this.isStopped) {
            return;
        }

        this.isStopped = true;
        this.isInitialized = false;
        this.transport.stop();
        this.thpState.resetState();
        this.session = undefined;
        this.currentPath = undefined;
    }

    async enumerateDevices(): Promise<PathPublic[]> {
        if (!this.isInitialized) {
            throw new Error('Transport not initialized');
        }

        const result = await this.transport.enumerate();
        if (!result.success) {
            throw new Error(`Failed to enumerate devices: ${result.error}`);
        }

        const devices = result.payload;

        return devices.map(device => device.path);
    }

    isSessionAcquired(): boolean {
        return !!this.session;
    }

    async acquire(path: PathPublic): Promise<void> {
        if (!this.isInitialized) {
            throw new Error('Transport not initialized');
        }

        const previous = this.transport.getDescriptor(path)?.session ?? null;
        const result = await this.transport.acquire({
            input: { path, previous },
        });

        if (!result.success) {
            throw new Error(`Failed to acquire session: ${result.error}`);
        }

        this.session = result.payload;
        this.currentPath = path;
    }

    async release(): Promise<void> {
        if (!this.session || !this.currentPath) {
            return;
        }

        const result = await this.transport.release({
            session: this.session,
            path: this.currentPath,
        });

        if (!result.success) {
            throw new Error(`Failed to release session: ${result.error}`);
        }

        this.session = undefined;
        this.currentPath = undefined;
        this.thpState.resetState();
    }

    isPaired(): boolean {
        return this.thpState.isPaired;
    }

    /**
     * Establish THP channel and perform handshake
     * Note: Currently only supports SkipPairing method
     */
    async establishThpChannel(): Promise<void> {
        // Ensure we have a session before establishing THP channel
        if (!this.session) {
            throw new Error('Session not acquired - call acquire() first');
        }

        try {
            if (this.thpState.phase === 'handshake') {
                // Set default channel and create random nonce
                this.thpState.setChannel(protocolThp.constants.THP_DEFAULT_CHANNEL);
                const nonce = randomBytes(8);

                const createChannelResponse = await this.thpCall('ThpCreateChannelRequest', {
                    nonce,
                });
                const { properties, ...resp } = createChannelResponse.message;

                // Validate nonce
                if (nonce.compare(resp.nonce) !== 0) {
                    throw new Error(
                        `Nonce mismatch: expected ${nonce.toString('hex')}, got ${resp.nonce.toString('hex')}`,
                    );
                }

                // Update THP state
                this.thpState.setThpProperties(properties);
                this.thpState.setChannel(resp.channel);
                this.thpState.updateHandshakeCredentials({
                    pairingMethods: properties.pairing_methods || [],
                    handshakeHash: resp.handshakeHash,
                });

                // Generate static key if not provided
                const hostStaticKey = randomBytes(32);
                const hostStaticKeys = protocolThp.getCurve25519KeyPair(hostStaticKey);

                // Generate ephemeral key pair
                const hostEphemeralKeys = protocolThp.getCurve25519KeyPair(randomBytes(32));

                // Send handshake initiation request
                const handshakeInitResponse = await this.thpCall('ThpHandshakeInitRequest', {
                    key: hostEphemeralKeys.publicKey,
                });

                // Process handshake credentials
                const handshakeCredentials = protocolThp.handleHandshakeInit({
                    handshakeInitResponse: handshakeInitResponse.message,
                    thpState: this.thpState,
                    hostStaticKeys,
                    hostEphemeralKeys,
                    knownCredentials: [], // Empty for now, could be loaded from storage
                    protobufEncoder: (name, data) =>
                        encodeMessage(this.transport.getMessages(), name, data),
                });

                // Update THP state with handshake results
                this.thpState.updateHandshakeCredentials({
                    trezorEncryptedStaticPubkey:
                        handshakeInitResponse.message.trezorEncryptedStaticPubkey,
                    hostEncryptedStaticPubkey: handshakeCredentials.hostEncryptedStaticPubkey,
                    handshakeHash: handshakeCredentials.handshakeHash,
                    trezorKey: handshakeCredentials.trezorKey,
                    hostKey: handshakeCredentials.hostKey,
                    staticKey: hostStaticKey,
                    hostStaticPublicKey: hostStaticKeys.publicKey,
                });

                // Complete handshake
                const handshakeCompletionResponse = await this.thpCall(
                    'ThpHandshakeCompletionRequest',
                    {
                        hostPubkey: handshakeCredentials.hostEncryptedStaticPubkey,
                        encryptedPayload: handshakeCredentials.encryptedPayload,
                    },
                );

                this.thpState.setIsPaired(!!handshakeCompletionResponse.message.state);
                this.thpState.setPhase('pairing');

                // If already paired and autoconnect is available, finish pairing
                if (this.thpState.isPaired && this.thpState.isAutoconnectPaired) {
                    await this.thpCall('ThpEndRequest', {});
                    this.thpState.setPhase('paired');
                }
            }

            if (this.thpState.phase === 'pairing') {
                await this.performPairing();
            }
        } catch (error) {
            this.thpState.resetState();
            throw error;
        }
    }

    /**
     * Perform complete THP pairing flow
     */
    private async performPairing(
        pairingMethod: protocolThp.ThpPairingMethod = protocolThp.ThpPairingMethod.CodeEntry,
    ): Promise<void> {
        const { thpState } = this;

        thpState.setPairingMethod(pairingMethod);

        // State HP0
        // ThpPairingRequest will trigger ButtonRequest.thp_pairing_request flow
        await this.thpCall('ThpPairingRequest', {
            host_name: 'Exodus',
            app_name: 'Integration Test',
        });

        // State HP1
        const selectMethod = await this.thpCall('ThpSelectMethod', {
            selected_pairing_method: pairingMethod,
        });

        // Handle different pairing method responses
        if (selectMethod.type === 'ThpEndResponse') {
            // SkipPairing method - device is immediately paired
            thpState.setIsPaired(true);
            thpState.setPhase('paired');

            return;
        }

        if (selectMethod.type === 'ThpCodeEntryCommitment') {
            // CodeEntry method - handle the code entry flow
            await this.handleCodeEntryPairing(selectMethod);

            return;
        }

        // Other pairing methods not yet supported
        throw new Error(`Unsupported pairing method response: ${selectMethod.type}`);
    }

    /**
     * Handle CodeEntry pairing method
     */
    private async handleCodeEntryPairing(selectMethodResponse: any): Promise<void> {
        const { thpState } = this;
        if (!thpState?.handshakeCredentials) {
            throw new Error('THP state or handshake credentials missing');
        }

        // State HP2 - Store handshake commitment and challenge
        const codeEntryChallenge = randomBytes(32);
        const handshakeCommitment = Buffer.from(selectMethodResponse.message.commitment, 'hex');

        thpState.updateHandshakeCredentials({
            handshakeCommitment,
            codeEntryChallenge,
        });

        // State HP3a - Send challenge to device
        const codeEntryCpace = await this.thpCall('ThpCodeEntryChallenge', {
            challenge: codeEntryChallenge.toString('hex'),
        });

        // Store Trezor's CPACE public key
        thpState.updateHandshakeCredentials({
            trezorCpacePublicKey: Buffer.from(
                codeEntryCpace.message.cpace_trezor_public_key,
                'hex',
            ),
        });
    }

    /**
     * Process a 6-digit code entry for CodeEntry pairing
     */
    async processCodeEntry(code: string): Promise<void> {
        if (code.length !== 6) {
            throw new Error('Code must be exactly 6 digits');
        }

        if (!/^\d{6}$/.test(code)) {
            throw new Error('Code must contain only digits');
        }

        const { thpState } = this;
        if (!thpState?.handshakeCredentials) {
            throw new Error('THP state or handshake credentials missing');
        }

        const codeValue = Buffer.from(code, 'ascii');

        // Generate host CPACE keys
        const hostKeys = protocolThp.getCpaceHostKeys(
            codeValue,
            thpState.handshakeCredentials.handshakeHash,
        );

        // Calculate shared secret and tag
        if (!thpState.handshakeCredentials.trezorCpacePublicKey) {
            throw new Error('Trezor CPACE public key not available');
        }

        const tag = protocolThp
            .getSharedSecret(
                thpState.handshakeCredentials.trezorCpacePublicKey,
                hostKeys.privateKey,
            )
            .toString('hex');

        // Send host tag to device
        const codeEntrySecret = await this.thpCall('ThpCodeEntryCpaceHostTag', {
            tag,
            cpace_host_public_key: hostKeys.publicKey.toString('hex'),
        });

        // Validate the code entry tag
        protocolThp.validateCodeEntryTag(
            thpState.handshakeCredentials,
            code,
            codeEntrySecret.message.secret,
        );

        // Generate and send credentials
        const credentials = await this.thpCall('ThpCredentialRequest', {
            host_static_public_key:
                thpState.handshakeCredentials.hostStaticPublicKey.toString('hex'),
            credential: thpState.pairingCredentials[0]?.credential,
        });
        thpState.setPairingCredentials([credentials.message]);
        thpState.setIsPaired(true);

        // End pairing process
        await this.thpCall('ThpEndRequest', {});
        thpState.setPhase('paired');
    }

    /**
     * Perform THP call with proper error handling
     */
    private async thpCall<T extends keyof ThpTypedCall>(messageType: T, data: any): Promise<any> {
        const result = await this.transport.call({
            name: messageType,
            data,
            session: this.session!,
            protocol: protocolV2,
            thpState: this.thpState,
        });

        if (!result.success) {
            throw new Error(`THP call failed: ${result.error || 'Unknown error'}`);
        }

        // Handle button requests and other interactive responses
        if (result.payload && (result.payload as any).type === 'ButtonRequest') {
            // In a full implementation, this would emit events for UI handling
            // For now, we'll automatically acknowledge
            return this.thpCall('ButtonAck' as T, {});
        }

        if (result.payload && (result.payload as any).type === 'Failure') {
            throw new Error(
                `THP failure: ${(result.payload as any).message?.message || 'Unknown failure'}`,
            );
        }

        if (result.payload && (result.payload as any).type === 'ThpError') {
            throw new Error(
                `THP error: ${(result.payload as any).message?.message || 'Unknown THP error'}`,
            );
        }

        return result.payload;
    }

    serializeThpState(): ThpStateSerialized {
        return this.thpState.serialize();
    }

    deserializeThpState(serializedState: ThpStateSerialized): void {
        this.thpState.deserialize(serializedState);
    }

    async sendMessage(params: { name: string; data: Record<string, unknown> }) {
        if (!this.session) {
            throw new Error('Session not acquired - call acquire() first');
        }

        if (!this.thpState.isPaired) {
            throw new Error('THP session not paired - call establishThpChannel() first');
        }

        return await this.transport.call({
            ...params,
            session: this.session,
            protocol: protocolV2,
            thpState: this.thpState,
        });
    }
}

// Type definitions for THP calls (simplified version)
type ThpTypedCall = {
    ThpCreateChannelRequest: any;
    ThpHandshakeInitRequest: any;
    ThpHandshakeCompletionRequest: any;
    ThpPairingRequest: any;
    ThpSelectMethod: any;
    ThpCodeEntryChallenge: any;
    ThpCodeEntryCpaceHostTag: any;
    ThpCredentialRequest: any;
    ThpEndRequest: any;
    ThpCreateNewSession: any;
    ButtonAck: any;
};
