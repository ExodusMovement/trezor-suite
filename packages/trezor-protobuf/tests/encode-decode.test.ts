import * as ProtoBuf from '@exodus/protobufjs/src/index-minimal';
import Long from 'long';

import { decodeMessage, encodeMessage } from '../src/index-static';

// Configure Long.js for protobuf
ProtoBuf.util.Long = Long;
ProtoBuf.configure();

describe('encode/decode', () => {
    test('basic message encoding and decoding', () => {
        const testData = {
            message: 'Hello Trezor!',
            button_protection: true,
        };

        const encoded = encodeMessage(null, 'Ping', testData);
        const decoded = decodeMessage(null, encoded.messageType, encoded.message);

        expect(decoded.type).toEqual('Ping');
        expect(decoded.message).toMatchObject(testData);
    });

    test('empty message encoding and decoding', () => {
        const encoded = encodeMessage(null, 'Initialize', {});
        const decoded = decodeMessage(null, encoded.messageType, encoded.message);

        expect(decoded.type).toEqual('Initialize');
        expect(decoded.message).toEqual({});
    });

    test('message with various field types', () => {
        // Test with a message that has different field types
        const testData = {
            message: 'test string',
            button_protection: false,
        };

        const encoded = encodeMessage(null, 'Ping', testData);
        const decoded = decodeMessage(null, encoded.messageType, encoded.message);

        expect(decoded.type).toEqual('Ping');
        expect(decoded.message).toMatchObject(testData);
    });

    test('round-trip consistency', () => {
        const messages = [
            { name: 'Initialize', data: {} },
            { name: 'Ping', data: { message: 'test' } },
            { name: 'Ping', data: { message: 'test', button_protection: true } },
        ];

        messages.forEach(({ name, data }) => {
            const encoded = encodeMessage(null, name, data);
            const decoded = decodeMessage(null, encoded.messageType, encoded.message);

            expect(decoded.type).toEqual(name);
            expect(decoded.message).toMatchObject(data);
        });
    });
});
