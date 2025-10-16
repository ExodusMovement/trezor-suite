import * as ProtoBuf from '@exodus/protobufjs/src/index-minimal';
import Long from 'long';

import { decodeMessage, encodeMessage } from '../src/index-static';

// Configure Long.js for protobuf
ProtoBuf.util.Long = Long;
ProtoBuf.configure();

// Test fixtures for basic Trezor message encoding/decoding
const basicFixtures = [
    {
        name: 'Ping with string message',
        messageName: 'Ping',
        data: { message: 'Hello Trezor!' },
        expectedFields: { message: 'Hello Trezor!' },
    },
    {
        name: 'Ping with boolean fields',
        messageName: 'Ping',
        data: {
            message: 'Test',
            button_protection: true,
        },
        expectedFields: {
            message: 'Test',
            button_protection: true,
        },
    },
    {
        name: 'Initialize message',
        messageName: 'Initialize',
        data: {},
        expectedFields: {},
    },
];

describe('basic concepts', () => {
    describe('static implementation encode/decode', () => {
        basicFixtures.forEach(f => {
            test(f.name, () => {
                // Encode using static implementation
                const encoded = encodeMessage(null, f.messageName, f.data);
                expect(encoded.messageType).toBeDefined();
                expect(encoded.message).toBeInstanceOf(Buffer);

                // Decode using static implementation
                const decoded = decodeMessage(null, encoded.messageType, encoded.message);
                expect(decoded.type).toEqual(f.messageName);
                expect(decoded.message).toMatchObject(f.expectedFields);
            });
        });
    });

    describe('large integer handling', () => {
        // These are the specific tests that were failing before
        test('Uint64 large number as string', () => {
            const testMessage = {
                message: '166054873161269248', // Large number as string
            };

            const encoded = encodeMessage(null, 'Ping', testMessage);
            const decoded = decodeMessage(null, encoded.messageType, encoded.message);

            expect(decoded.message.message).toEqual('166054873161269248');
        });

        test('Sint64 negative large number as string', () => {
            const testMessage = {
                message: '-166054873161269248', // Large negative number as string
            };

            const encoded = encodeMessage(null, 'Ping', testMessage);
            const decoded = decodeMessage(null, encoded.messageType, encoded.message);

            expect(decoded.message.message).toEqual('-166054873161269248');
        });
    });
});
