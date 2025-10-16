import * as protobuf from '@exodus/protobufjs/src/index-minimal';
import Long from 'long';

import { decodeMessage, encodeMessage } from '../src/index-static';

// Configure Long.js for protobuf
protobuf.util.Long = Long;
protobuf.configure();

describe('messages', () => {
    test('static implementation can encode/decode GetAddress', () => {
        // Test that we can work with complex message types that have type IDs
        const testData = {
            address_n: [44, 0, 0, 0, 0], // BIP44 path
            coin_name: 'Bitcoin',
        };

        // This should not throw
        expect(() => {
            const encoded = encodeMessage(null, 'GetAddress', testData);
            const decoded = decodeMessage(null, encoded.messageType, encoded.message);
            expect(decoded.type).toEqual('GetAddress');
        }).not.toThrow();
    });

    test('static implementation handles Initialize message', () => {
        const encoded = encodeMessage(null, 'Initialize', {});
        const decoded = decodeMessage(null, encoded.messageType, encoded.message);

        expect(decoded.type).toEqual('Initialize');
        expect(decoded.message).toEqual({});
    });

    test('static implementation handles message type by number and name', () => {
        const testData = {};

        // Encode using message name
        const encoded = encodeMessage(null, 'Initialize', testData);

        // Decode using message type number
        const decodedByNumber = decodeMessage(null, encoded.messageType, encoded.message);

        // Decode using message type name
        const decodedByName = decodeMessage(null, 'Initialize', encoded.message);

        expect(decodedByNumber.type).toEqual(decodedByName.type);
        expect(decodedByNumber.message).toEqual(decodedByName.message);
    });
});
