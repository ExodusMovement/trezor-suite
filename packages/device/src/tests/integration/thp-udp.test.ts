import { UdpTransport } from '@trezor/transport';

import { DeviceManager } from '../../index';

describe('THP UDP Integration', () => {
    let deviceManager: DeviceManager;
    let transport: UdpTransport;

    beforeAll(async () => {
        if (!process.env.RUN_INTEGRATION_TESTS) {
            return;
        }

        transport = new UdpTransport({
            messages: {} as any,
            id: 'test-udp-transport',
        });

        deviceManager = new DeviceManager(transport);
        await deviceManager.initialize();

        const devicePaths = await deviceManager.enumerateDevices();
        if (devicePaths.length === 0) {
            throw new Error('No devices founds');
        }
        await deviceManager.acquire(devicePaths[0]);
        await deviceManager.establishThpChannel();
    }, 30000);

    afterAll(() => {
        if (!process.env.RUN_INTEGRATION_TESTS) return;
        deviceManager.stop();
    });

    it('should call GetFeatures', async () => {
        if (!process.env.RUN_INTEGRATION_TESTS) {
            return;
        }

        expect(deviceManager.getIsInitialized()).toBe(true);
        expect(deviceManager.isSessionAcquired()).toBe(true);
        expect(deviceManager.isPaired()).toBe(true);

        const response = await deviceManager.sendMessage({
            name: 'GetFeatures',
            data: {},
        });

        expect(response).toBeDefined();
        expect(response.success).toBe(true);

        if (!response.success) {
            throw new Error('Response was not successful');
        }

        expect(response.payload).toBeDefined();
        expect((response.payload as any).type).toBe('Features');

        const features = (response.payload as any).message;
        expect(features).toBeDefined();
        expect(typeof features.vendor).toBe('string');
        expect(typeof features.device_id).toBe('string');
        expect(typeof features.major_version).toBe('number');
        expect(typeof features.minor_version).toBe('number');
        expect(typeof features.patch_version).toBe('number');

        const serializedState = deviceManager.serializeThpState();
        expect(serializedState).toBeDefined();
        expect(typeof serializedState).toBe('object');
        expect(serializedState.channel).toBeDefined();
        expect(typeof serializedState.sendBit).toBe('number');
        expect(typeof serializedState.recvBit).toBe('number');
    }, 30000);

    it('should release and re-acquire', async () => {
        if (!process.env.RUN_INTEGRATION_TESTS) {
            return;
        }

        expect(deviceManager.getIsInitialized()).toBe(true);
        expect(deviceManager.isSessionAcquired()).toBe(true);
        expect(deviceManager.isPaired()).toBe(true);

        await deviceManager.release();
        expect(deviceManager.getIsInitialized()).toBe(true);
        expect(deviceManager.isSessionAcquired()).toBe(false);
        expect(deviceManager.isPaired()).toBe(false);

        const devicePaths = await deviceManager.enumerateDevices();
        if (devicePaths.length === 0) {
            throw new Error('No devices founds');
        }
        await deviceManager.acquire(devicePaths[0]);

        expect(deviceManager.getIsInitialized()).toBe(true);
        expect(deviceManager.isSessionAcquired()).toBe(true);
        expect(deviceManager.isPaired()).toBe(false);

        await deviceManager.establishThpChannel();

        expect(deviceManager.getIsInitialized()).toBe(true);
        expect(deviceManager.isSessionAcquired()).toBe(true);
        expect(deviceManager.isPaired()).toBe(true);
    }, 30000);

    it('should stop and restart', async () => {
        if (!process.env.RUN_INTEGRATION_TESTS) {
            return;
        }

        expect(deviceManager.getIsInitialized()).toBe(true);
        expect(deviceManager.isSessionAcquired()).toBe(true);
        expect(deviceManager.isPaired()).toBe(true);

        deviceManager.stop();
        expect(deviceManager.getIsInitialized()).toBe(false);
        expect(deviceManager.isSessionAcquired()).toBe(false);
        expect(deviceManager.isPaired()).toBe(false);

        await expect(deviceManager.initialize()).rejects.toThrow('Transport is stopped');
        expect(deviceManager.getIsInitialized()).toBe(false);
        expect(deviceManager.isSessionAcquired()).toBe(false);
        expect(deviceManager.isPaired()).toBe(false);

        transport = new UdpTransport({
            messages: {} as any,
            id: 'test-udp-transport',
        });

        deviceManager = new DeviceManager(transport);
        await deviceManager.initialize();
        const devicePaths = await deviceManager.enumerateDevices();
        if (devicePaths.length === 0) {
            throw new Error('No devices founds');
        }
        await deviceManager.acquire(devicePaths[0]);
        await deviceManager.establishThpChannel();

        expect(deviceManager.getIsInitialized()).toBe(true);
        expect(deviceManager.isSessionAcquired()).toBe(true);
        expect(deviceManager.isPaired()).toBe(true);
    }, 30000);
});
