// New static implementation using minimal protobuf.js API
// This replaces the reflection-based approach with static code

import * as protobuf from '@exodus/protobufjs/src/index-minimal'; // minimal API only
import Long from 'long';

import type { EncodeResult, MessageResponse } from './generated-messages';

const Messages = require('../generated-messages');

// Configure Long.js for the minimal API
protobuf.util.Long = Long;
protobuf.configure();

// Message type mapping from the generated code
const MESSAGE_TYPES = Messages.MessageType;
const MESSAGE_TYPES_BY_ID = (Messages.MessageType as any).valuesById;

/**
 * Parse/configure function - now a no-op since we use static code
 * Kept for API compatibility
 */
export const parseConfigure = (data: any) => data;

/**
 * Load definitions - now a no-op since everything is statically compiled
 * Kept for API compatibility
 */
export const loadDefinitions = async () => {
    // No-op for static code - everything is already compiled
};

// Export the Messages for compatibility
export { Messages };

/**
 * Transform data for encoding (same logic as the original encode.ts)
 */
function transformForEncoding(data: Record<string, unknown>): Record<string, unknown> {
    const transformed: Record<string, unknown> = {};

    Object.keys(data).forEach(key => {
        const value = data[key];

        if (value === undefined) {
            return;
        }

        // Handle bytes fields
        if (typeof value === 'string' && key.includes('bytes')) {
            // Special edge case for empty strings
            if (!value) {
                transformed[key] = value;
            } else {
                transformed[key] = Buffer.from(value, 'hex');
            }
        }
        // Handle number safety
        else if (typeof value === 'number' && !Number.isSafeInteger(value)) {
            throw new RangeError('field value is not within safe integer range');
        }
        // Handle arrays
        else if (Array.isArray(value)) {
            transformed[key] = value.map(item => {
                if (typeof item === 'object' && item !== null) {
                    return transformForEncoding(item as Record<string, unknown>);
                }

                return item;
            });
        }
        // Handle nested objects
        else if (typeof value === 'object' && value !== null) {
            transformed[key] = transformForEncoding(value as Record<string, unknown>);
        } else {
            transformed[key] = value;
        }
    });

    return transformed;
}

/**
 * Transform data for decoding (same logic as the original decode.ts)
 */
function transformForDecoding(data: any): any {
    if (!data || typeof data !== 'object') {
        return data;
    }

    const transformed: any = {};

    Object.keys(data).forEach(key => {
        const value = data[key];

        if (value === undefined) {
            return;
        }

        // Handle bytes fields - convert to hex string
        if (value instanceof Uint8Array || Buffer.isBuffer(value)) {
            transformed[key] = Buffer.from(value).toString('hex');
        }
        // Handle Long values
        else if (value && typeof value.toNumber === 'function') {
            if (Number.isSafeInteger(value.toNumber())) {
                transformed[key] = value.toNumber();
            } else {
                transformed[key] = value.toString();
            }
        }
        // Handle arrays
        else if (Array.isArray(value)) {
            transformed[key] = value.map(item => transformForDecoding(item));
        }
        // Handle nested objects
        else if (typeof value === 'object' && value !== null) {
            transformed[key] = transformForDecoding(value);
        } else {
            // Handle optional fields that should be null instead of undefined
            transformed[key] = value;
        }
    });

    return transformed;
}

/**
 * Encode a message using static code generation
 */
export const encodeMessage = (
    _: any,
    messageName: string,
    data: Record<string, unknown>,
): EncodeResult => {
    // Get the static message class
    const MessageClass = (Messages as any)[messageName];
    if (!MessageClass) {
        throw new Error(`Unknown message type: ${messageName}`);
    }

    // Apply Trezor-specific transformations
    const transformedData = transformForEncoding(data);

    // Create and encode the message using static methods
    const message = MessageClass.create(transformedData);
    const encoded = MessageClass.encode(message).finish();
    const messageType = MESSAGE_TYPES[messageName as keyof typeof MESSAGE_TYPES];

    if (typeof messageType !== 'number') {
        throw new Error(`Unknown message type ID for: ${messageName}`);
    }

    return { messageType, message: Buffer.from(encoded) };
};

/**
 * Decode a message using static code generation
 */
export const decodeMessage = (
    _: any,
    messageType: number | string,
    data: Buffer,
): MessageResponse => {
    const messageName =
        typeof messageType === 'string' ? messageType : MESSAGE_TYPES_BY_ID[messageType];

    if (!messageName) {
        throw new Error(`Unknown message type: ${messageType}`);
    }

    const MessageClass = (Messages as any)[messageName];
    if (!MessageClass) {
        throw new Error(`Unknown message class: ${messageName}`);
    }

    // Decode using static methods
    const decoded = MessageClass.decode(data);
    const messageObject = MessageClass.toObject(decoded);

    // Apply Trezor-specific transformations
    const transformedMessage = transformForDecoding(messageObject);

    return { type: messageName, message: transformedMessage };
};
