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
    private async performPairing(): Promise<void> {
        const { thpState } = this;
        if (!thpState?.handshakeCredentials) {
            throw new Error('THP state or handshake credentials missing');
        }

        // State HH2 and HH3 combined
        // if thpState.isPaired then transition to HC0 (credentials) otherwise transition to HP0 (pairing)
        if (
            thpState.isPaired &&
            thpState.pairingMethod !== protocolThp.ThpPairingMethod.SkipPairing
        ) {
            // State HC0
            if (!thpState.isAutoconnectPaired) {
                // device is paired but credentials may not be persistent
                // get new credentials to enforce ButtonRequest.thp_connection_request flow if necessary
                if (!thpState?.handshakeCredentials) {
                    throw new Error('THP state or handshake credentials missing');
                }

                const autoconnect = false;
                const credentials = await this.thpCall('ThpCredentialRequest', {
                    autoconnect,
                    host_static_public_key:
                        thpState.handshakeCredentials.hostStaticPublicKey.toString('hex'),
                    credential: thpState.pairingCredentials[0]?.credential,
                });

                return { ...credentials.message, autoconnect };
            }

            // State HC1 -> HC2 pairing complete
            this.thpState.setPhase('paired');

            return await this.thpCall('ThpEndRequest', {});
        }

        // For DeviceManager, we only support SkipPairing method for now
        // Use SkipPairing as the selected pairing method
        const selected_pairing_method = protocolThp.ThpPairingMethod.SkipPairing;
        thpState.setPairingMethod(selected_pairing_method);

        // State HP0
        // ThpPairingRequest will trigger ButtonRequest.thp_pairing_request flow
        await this.thpCall('ThpPairingRequest', {
            host_name: 'DeviceManager Host',
            app_name: 'DeviceManager App',
        });

        // State HP1
        const selectMethod = await this.thpCall('ThpSelectMethod', { selected_pairing_method });

        // selected_pairing_method === ThpPairingMethod.SkipPairing
        if (selectMethod.type === 'ThpEndResponse') {
            thpState.setIsPaired(true);
            thpState.setPhase('paired');

            return;
        }

        // For SkipPairing, we should get ThpEndResponse directly
        // If we get anything else, it means SkipPairing is not supported or there's an error
        throw new Error(`Unexpected response to SkipPairing: ${selectMethod.type}`);
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
    ThpCredentialRequest: any;
    ThpEndRequest: any;
    ThpCreateNewSession: any;
    ButtonAck: any;
};
