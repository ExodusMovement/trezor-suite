import * as ProtoBuf from '@exodus/protobufjs/src/index-minimal';
import Long from 'long';

import { loadDefinitions } from '../src/index-static';

// Configure Long.js for protobuf
ProtoBuf.util.Long = Long;
ProtoBuf.configure();

describe('loadDefinitions', () => {
    it('static loadDefinitions function exists and works', async () => {
        // In the static implementation, loadDefinitions is a no-op
        // since all definitions are pre-loaded
        await expect(loadDefinitions()).resolves.toBeUndefined();
    });

    it('static implementation has pre-loaded definitions', () => {
        // Test that we can use various message types without loading definitions
        const { encodeMessage, decodeMessage } = require('../src/index-static');

        // Test Initialize message
        expect(() => {
            const encoded = encodeMessage(null, 'Initialize', {});
            const decoded = decodeMessage(null, encoded.messageType, encoded.message);
            expect(decoded.type).toEqual('Initialize');
        }).not.toThrow();

        // Test Ping message
        expect(() => {
            const encoded = encodeMessage(null, 'Ping', { message: 'test' });
            const decoded = decodeMessage(null, encoded.messageType, encoded.message);
            expect(decoded.type).toEqual('Ping');
        }).not.toThrow();
    });
});
