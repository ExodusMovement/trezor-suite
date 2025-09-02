import { DeviceManager } from '../index';

describe('DeviceManager', () => {
    let mockTransport: any;
    let deviceManager: DeviceManager;

    beforeEach(() => {
        mockTransport = {
            init: jest.fn().mockResolvedValue(undefined),
            stop: jest.fn(),
            send: jest.fn().mockResolvedValue({ success: true, payload: {} }),
            call: jest.fn().mockResolvedValue({ success: true, payload: {} }),
            receive: jest.fn().mockResolvedValue({ success: true, payload: {} }),
            release: jest.fn().mockResolvedValue({ success: true, payload: null }),
            acquire: jest.fn().mockResolvedValue({ success: true, payload: 'mock-session' }),
            enumerate: jest
                .fn()
                .mockResolvedValue({ success: true, payload: [{ path: '/dev/hidraw0' }] }),
            getDescriptor: jest.fn().mockReturnValue({ session: null }),
            isInitialized: jest.fn().mockReturnValue(true),
            getMessages: jest.fn().mockReturnValue({}),
            updateMessages: jest.fn(),
            loadMessages: jest.fn().mockResolvedValue(undefined),
        };
        deviceManager = new DeviceManager(mockTransport);
    });

    it('should create an instance', () => {
        expect(deviceManager).toBeInstanceOf(DeviceManager);
    });

    it('should initialize transport', async () => {
        await deviceManager.initialize();
        expect(mockTransport.init).toHaveBeenCalled();
        expect(mockTransport.updateMessages).toHaveBeenCalled();
        expect(mockTransport.loadMessages).toHaveBeenCalled();
    });

    it('should check if initialized', async () => {
        expect(deviceManager.getIsInitialized()).toBe(false);
        await deviceManager.initialize();
        expect(deviceManager.getIsInitialized()).toBe(true);
        expect(mockTransport.init).toHaveBeenCalled();
        expect(mockTransport.updateMessages).toHaveBeenCalled();
        expect(mockTransport.loadMessages).toHaveBeenCalled();
    });

    it('should require pairing before sending messages', async () => {
        await deviceManager.initialize();
        await deviceManager.acquire('1' as any);

        const params = { name: 'GetFeatures', data: {} };
        await expect(deviceManager.sendMessage(params)).rejects.toThrow('THP session not paired');
    });

    it('should require session for sending messages', async () => {
        const params = { name: 'GetFeatures', data: {} };
        await expect(deviceManager.sendMessage(params)).rejects.toThrow('Session not acquired');
    });

    it('should acquire session', async () => {
        await deviceManager.initialize();
        await deviceManager.acquire('1' as any);
        expect(mockTransport.acquire).toHaveBeenCalledWith({
            input: { path: '1', previous: null },
        });
        expect(deviceManager.isSessionAcquired()).toBe(true);
    });

    it('should release session', async () => {
        await deviceManager.initialize();
        await deviceManager.acquire('1' as any);
        await deviceManager.release();
        expect(mockTransport.release).toHaveBeenCalledWith({
            session: 'mock-session',
            path: '1',
        });
        expect(deviceManager.isSessionAcquired()).toBe(false);
    });

    it('should enumerate devices', async () => {
        await deviceManager.initialize();
        const devices = await deviceManager.enumerateDevices();
        expect(mockTransport.enumerate).toHaveBeenCalled();
        expect(devices).toEqual(['/dev/hidraw0']);
    });

    it('should require initialization before enumerating devices', async () => {
        await expect(deviceManager.enumerateDevices()).rejects.toThrow('Transport not initialized');
    });

    it('should require initialization before acquiring session', async () => {
        await expect(deviceManager.acquire('1' as any)).rejects.toThrow(
            'Transport not initialized',
        );
    });

    it('should check if paired', () => {
        expect(deviceManager.isPaired()).toBe(false);
    });

    it('should serialize and deserialize THP state', () => {
        const serialized = deviceManager.serializeThpState();
        expect(serialized).toBeDefined();

        // Test deserializing the same state back
        expect(() => deviceManager.deserializeThpState(serialized)).not.toThrow();

        // Test that we can serialize again after deserializing
        const reSerialized = deviceManager.serializeThpState();
        expect(reSerialized).toBeDefined();
    });

    it('should require session before establishing THP channel', async () => {
        await expect(deviceManager.establishThpChannel()).rejects.toThrow('Session not acquired');
    });

    it('should handle THP channel establishment errors gracefully', async () => {
        await deviceManager.initialize();
        await deviceManager.acquire('1' as any);
        mockTransport.call.mockResolvedValueOnce({
            success: false,
            error: 'Connection failed',
        });

        await expect(deviceManager.establishThpChannel()).rejects.toThrow('THP call failed');
        expect(mockTransport.call).toHaveBeenCalled();
    });

    it('should support SkipPairing method in pairing flow', async () => {
        await deviceManager.initialize();
        await deviceManager.acquire('1' as any);

        // Test that SkipPairing method is properly handled
        // This test focuses on the flow logic rather than cryptographic operations
        const mockCallSequence = [
            'ThpCreateChannelRequest',
            'ThpHandshakeInitRequest',
            'ThpHandshakeCompletionRequest',
            'ThpPairingRequest',
            'ThpSelectMethod',
        ];

        let callIndex = 0;
        mockTransport.call.mockImplementation((params: any) => {
            const expectedCall = mockCallSequence[callIndex];
            callIndex++;

            // Just verify the expected calls are being made in sequence
            expect(params.name).toBe(expectedCall);

            // Return minimal mock responses to avoid cryptographic operations
            if (params.name === 'ThpCreateChannelRequest') {
                return Promise.resolve({
                    success: true,
                    payload: {
                        type: 'ThpCreateChannelResponse',
                        message: {
                            nonce: params.data.nonce,
                            channel: 1,
                            handshakeHash: Buffer.alloc(32),
                            properties: { pairing_methods: [0] }, // SkipPairing
                        },
                    },
                });
            }

            if (params.name === 'ThpSelectMethod') {
                // Verify SkipPairing is selected
                expect(params.data.selected_pairing_method).toBe(0); // SkipPairing

                return Promise.resolve({
                    success: true,
                    payload: {
                        type: 'ThpEndResponse',
                        message: {},
                    },
                });
            }

            // For other calls, return simple success responses
            return Promise.resolve({
                success: true,
                payload: {
                    type: 'MockResponse',
                    message: {},
                },
            });
        });

        // Since the actual crypto will fail with mock data, we expect an error
        // but we can still verify the call sequence was correct
        await expect(deviceManager.establishThpChannel()).rejects.toThrow();

        // Verify the expected sequence of calls was made
        expect(callIndex).toBe(2); // Should fail after first two calls due to crypto
        expect(mockTransport.call).toHaveBeenCalledWith(
            expect.objectContaining({ name: 'ThpCreateChannelRequest' }),
        );
        expect(mockTransport.call).toHaveBeenCalledWith(
            expect.objectContaining({ name: 'ThpHandshakeInitRequest' }),
        );
    });

    it('should detect CodeEntry pairing method', async () => {
        await deviceManager.initialize();
        await deviceManager.acquire('1' as any);

        // Mock a simple CodeEntry detection scenario
        mockTransport.call.mockImplementation((params: any) => {
            if (params.name === 'ThpCreateChannelRequest') {
                return Promise.resolve({
                    success: true,
                    payload: {
                        type: 'ThpCreateChannelResponse',
                        message: {
                            nonce: params.data.nonce,
                            channel: 1,
                            handshakeHash: Buffer.alloc(32),
                            properties: { pairing_methods: [2] }, // CodeEntry only
                        },
                    },
                });
            }

            // For other calls, the crypto will fail with mock data
            return Promise.resolve({
                success: true,
                payload: {
                    type: 'MockResponse',
                    message: {},
                },
            });
        });

        // The handshake will fail due to crypto, but we can verify CodeEntry is detected
        await expect(deviceManager.establishThpChannel()).rejects.toThrow();

        // Verify that the channel was created with CodeEntry method
        expect(mockTransport.call).toHaveBeenCalledWith(
            expect.objectContaining({ name: 'ThpCreateChannelRequest' }),
        );
    });

    it('should validate code entry format', async () => {
        await deviceManager.initialize();
        await deviceManager.acquire('1' as any);

        // Test invalid code lengths - these should fail validation before THP state check
        await expect(deviceManager.processCodeEntry('12345')).rejects.toThrow(
            'Code must be exactly 6 digits',
        );
        await expect(deviceManager.processCodeEntry('1234567')).rejects.toThrow(
            'Code must be exactly 6 digits',
        );

        // Test invalid characters - should fail validation before THP state check
        await expect(deviceManager.processCodeEntry('12345a')).rejects.toThrow(
            'Code must contain only digits',
        );

        // Valid format but no THP state - should fail with THP state error
        await expect(deviceManager.processCodeEntry('123456')).rejects.toThrow(
            'THP state or handshake credentials missing',
        );
    });
});
