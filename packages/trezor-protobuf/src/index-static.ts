// New static implementation using minimal protobuf.js API
// This replaces the reflection-based approach with static code

import * as protobuf from '@exodus/protobufjs/src/index-minimal'; // minimal API only
import Long from 'long';

import type { EncodeResult, MessageResponse } from './generated-messages';

const Messages = require('../generated-messages');
const messagesJson = require('../messages.json');

// Configure Long.js for the minimal API
protobuf.util.Long = Long;
protobuf.configure();

// Message type mapping from the generated code
const MESSAGE_TYPES = Messages.MessageType;
const MESSAGE_TYPES_BY_ID = (Messages.MessageType as any).valuesById;

// THP message type IDs that are not in the generated code
const THP_MESSAGE_TYPES: Record<string, number> = {
    ThpCreateNewSession: 1000,
    ThpPairingRequest: 1008,
    ThpPairingRequestApproved: 1009,
    ThpSelectMethod: 1010,
    ThpPairingPreparationsFinished: 1011,
    ThpCredentialRequest: 1016,
    ThpCredentialResponse: 1017,
    ThpEndRequest: 1018,
    ThpEndResponse: 1019,
    ThpCodeEntryCommitment: 1024,
    ThpCodeEntryChallenge: 1025,
    ThpCodeEntryCpaceTrezor: 1026,
    ThpCodeEntryCpaceHostTag: 1027,
    ThpCodeEntrySecret: 1028,
    ThpQrCodeTag: 1032,
    ThpQrCodeSecret: 1033,
    ThpNfcTagHost: 1040,
    ThpNfcTagTrezor: 1041,
};

/**
 * Parse/configure function - now a no-op since we use static code
 * Kept for API compatibility
 */
export const parseConfigure = (data: any) => data;

/**
 * Load definitions - merge additional package definitions into messages
 * For static code, this merges THP definitions when needed
 */
export const loadDefinitions = async (
    messages: any,
    packageName: string,
    packageLoader: () => any,
) => {
    if (packageName === 'thp' && packageLoader) {
        try {
            const thpDefinitions = packageLoader();
            if (thpDefinitions && typeof thpDefinitions === 'object') {
                // Merge THP definitions into the messages object
                Object.assign(messages, thpDefinitions);
            }
        } catch (error) {
            console.error('Failed to load THP definitions:', error);
            throw error;
        }
    }
};

// Export the Messages for compatibility
export { Messages };

/**
 * Check if a field is a bytes field that needs hex-to-buffer conversion
 * This is specifically for THP messages that require proper bytes encoding
 */
function isBytesField(messageName: string, fieldName: string): boolean {
    // THP-specific bytes fields that need proper hex-to-buffer conversion
    const thpBytesFields: Record<string, string[]> = {
        ThpHandshakeCompletionReqNoisePayload: ['host_pairing_credential'],
        ThpHandshakeCompletionResponse: ['trezor_state'],
        ThpHandshakeCompletionReq: ['noise_payload'],
        // Add other THP bytes fields as needed
    };

    const messageFields = thpBytesFields[messageName];
    if (messageFields && messageFields.includes(fieldName)) {
        return true;
    }

    // For non-THP messages, only convert fields that explicitly contain 'bytes' in the name
    // This preserves the original behavior for protocol v1 fields like session_id
    return fieldName.includes('bytes');
}

/**
 * Transform data for encoding (same logic as the original encode.ts)
 */
function transformForEncoding(
    data: Record<string, unknown>,
    messageName: string,
): Record<string, unknown> {
    const transformed: Record<string, unknown> = {};

    Object.keys(data).forEach(key => {
        const value = data[key];

        if (value === undefined) {
            return;
        }

        // Handle bytes fields
        if (typeof value === 'string' && isBytesField(messageName, key)) {
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
                    // For nested objects in arrays, we can't determine the exact message type
                    // so we'll use a generic approach or the field name as a hint
                    return transformForEncoding(item as Record<string, unknown>, key);
                }

                return item;
            });
        }
        // Handle nested objects
        else if (typeof value === 'object' && value !== null) {
            // For nested objects, we can't determine the exact message type
            // so we'll use the field name as a hint
            transformed[key] = transformForEncoding(value as Record<string, unknown>, key);
        } else {
            transformed[key] = value;
        }
    });

    return transformed;
}

/**
 * Convert enum numeric values to string names
 */
function convertEnumValue(messageName: string, fieldName: string, value: number): string | number {
    try {
        const messageDefinition = messagesJson.nested?.[messageName];
        if (!messageDefinition?.fields?.[fieldName]) {
            return value;
        }

        const fieldType = messageDefinition.fields[fieldName].type;

        // Check if this field type is an enum
        const enumDefinition =
            messageDefinition.nested?.[fieldType] || messagesJson.nested?.[fieldType];
        if (enumDefinition?.values) {
            // Find the enum name for this numeric value
            for (const [enumName, enumValue] of Object.entries(enumDefinition.values)) {
                if (enumValue === value) {
                    return enumName;
                }
            }
        }

        return value;
    } catch (e) {
        return value;
    }
}

/**
 * Transform data for decoding (same logic as the original decode.ts)
 */
function transformForDecoding(data: any, messageName?: string): any {
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
            const hexString = Buffer.from(value).toString('hex');
            // Special handling for session_id: if it's empty or zero-length, convert to null
            if (key === 'session_id' && (hexString === '' || value.length === 0)) {
                transformed[key] = null;
            } else {
                transformed[key] = hexString;
            }
        }
        // Handle Base64 strings from protobuf toObject (bytes fields are converted to base64)
        else if (
            typeof value === 'string' &&
            (key.endsWith('_id') ||
                key.includes('hash') ||
                key.includes('signature') ||
                key.includes('payload') ||
                key.includes('data') ||
                key === 'session_id')
        ) {
            // Check if this looks like a base64 string (contains base64 characters and proper padding)
            if (/^[A-Za-z0-9+/]*={0,2}$/.test(value) && value.length % 4 === 0) {
                try {
                    const buffer = Buffer.from(value, 'base64');
                    const hexString = buffer.toString('hex');
                    // Special handling for session_id: if it's empty, convert to null
                    if (key === 'session_id' && (hexString === '' || buffer.length === 0)) {
                        transformed[key] = null;
                    } else {
                        transformed[key] = hexString;
                    }
                } catch (e) {
                    // If base64 decode fails, keep as string
                    transformed[key] = value;
                }
            } else {
                transformed[key] = value;
            }
        }
        // Handle Long values
        else if (value && typeof value.toNumber === 'function') {
            if (Number.isSafeInteger(value.toNumber())) {
                transformed[key] = value.toNumber();
            } else {
                transformed[key] = value.toString();
            }
        }
        // Handle enum values (convert numeric to string names)
        else if (typeof value === 'number' && messageName) {
            const enumValue = convertEnumValue(messageName, key, value);
            transformed[key] = enumValue;
        }
        // Handle arrays
        else if (Array.isArray(value)) {
            transformed[key] = value.map(item => transformForDecoding(item, messageName));
        }
        // Handle nested objects
        else if (typeof value === 'object' && value !== null) {
            transformed[key] = transformForDecoding(value, key);
        } else {
            // Only include the field if it's not undefined (null is a valid value)
            if (value !== undefined) {
                transformed[key] = value;
            }
        }
    });

    return transformed;
}

/**
 * Create a message class for THP messages that are not in the static generated code
 */
function createThpMessageClass(messageName: string) {
    const messageDefinition = messagesJson.nested?.[messageName];
    if (!messageDefinition?.fields) {
        return null;
    }

    return {
        create: (props: any) => props,
        encode: (message: any) => {
            const writer = protobuf.Writer.create();

            // Encode fields based on the message definition
            Object.entries(messageDefinition.fields).forEach(
                ([fieldName, fieldDef]: [string, any]) => {
                    const value = message[fieldName];
                    if (value === undefined) return;

                    const fieldId = fieldDef.id;
                    const fieldType = fieldDef.type;
                    const isRequired = fieldDef.rule === 'required';
                    const isRepeated = fieldDef.rule === 'repeated';

                    // Calculate wire type and tag
                    const tag = (fieldId << 3) | getWireTypeForField(fieldType);

                    if (isRepeated && Array.isArray(value)) {
                        value.forEach((item: any) => {
                            writeFieldValue(writer, tag, item, fieldType);
                        });
                    } else if (value !== undefined || isRequired) {
                        writeFieldValue(writer, tag, value, fieldType);
                    }
                },
            );

            return { finish: () => writer.finish() };
        },
    };
}

/**
 * Get wire type for a field type
 */
function getWireTypeForField(fieldType: string): number {
    switch (fieldType) {
        case 'bool':
        case 'int32':
        case 'uint32':
        case 'sint32':
        case 'ThpPairingMethod': // enum
            return 0; // Varint
        case 'string':
        case 'bytes':
            return 2; // Length-delimited
        default:
            return 0; // Default to varint
    }
}

/**
 * Write a field value to the protobuf writer
 */
function writeFieldValue(writer: any, tag: number, value: any, fieldType: string) {
    writer.uint32(tag);

    switch (fieldType) {
        case 'string':
            writer.string(value || '');
            break;
        case 'bytes':
            if (typeof value === 'string') {
                // Convert hex string to buffer
                const buffer = Buffer.from(value, 'hex');
                writer.bytes(buffer);
            } else {
                writer.bytes(value || Buffer.alloc(0));
            }
            break;
        case 'bool':
            writer.bool(!!value);
            break;
        case 'int32':
        case 'uint32':
            writer.uint32(value || 0);
            break;
        case 'sint32':
            writer.sint32(value || 0);
            break;
        case 'ThpPairingMethod':
            // Handle enum - convert string to number if needed
            let enumValue = value;
            if (typeof value === 'string') {
                const enumMap: Record<string, number> = {
                    SkipPairing: 1,
                    CodeEntry: 2,
                    QrCode: 3,
                    NFC: 4,
                };
                enumValue = enumMap[value] || 1;
            }
            writer.int32(enumValue);
            break;
        default:
            // Default handling
            if (typeof value === 'number') {
                writer.uint32(value);
            } else if (typeof value === 'string') {
                writer.string(value);
            }
            break;
    }
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
    let MessageClass = (Messages as any)[messageName];

    // Handle THP messages that might not be in the static generated code
    if (!MessageClass && messageName.startsWith('Thp')) {
        MessageClass = createThpMessageClass(messageName);
    }

    if (!MessageClass) {
        throw new Error(`Unknown message type: ${messageName}`);
    }

    // Apply Trezor-specific transformations
    const transformedData = transformForEncoding(data, messageName);

    // Create and encode the message using static methods
    const message = MessageClass.create(transformedData);
    const encoded = MessageClass.encode(message).finish();

    // Get message type ID from either regular MESSAGE_TYPES or THP_MESSAGE_TYPES
    let messageType = MESSAGE_TYPES[messageName as keyof typeof MESSAGE_TYPES];
    if (typeof messageType !== 'number' && messageName.startsWith('Thp')) {
        messageType = THP_MESSAGE_TYPES[messageName];
    }

    if (typeof messageType !== 'number') {
        throw new Error(`Unknown message type ID for: ${messageName}`);
    }

    return { messageType, message: Buffer.from(encoded) };
};

/**
 * Create a decode message class for THP messages that are not in the static generated code
 */
function createThpDecodeMessageClass(messageName: string) {
    const messageDefinition = messagesJson.nested?.[messageName];
    if (!messageDefinition?.fields) {
        return null;
    }

    return {
        decode: (data: Buffer) => {
            const reader = protobuf.Reader.create(data);
            const message: any = {};
            const end = reader.len;

            while (reader.pos < end) {
                const tag = reader.uint32();
                const fieldId = tag >>> 3;
                const wireType = tag & 7;

                // Find the field definition
                const fieldDef = Object.values(messageDefinition.fields).find(
                    (field: any) => field.id === fieldId,
                );
                if (!fieldDef) {
                    reader.skipType(wireType);
                    continue;
                }

                const fieldName = Object.keys(messageDefinition.fields).find(
                    name => (messageDefinition.fields as any)[name].id === fieldId,
                );
                if (!fieldName) {
                    reader.skipType(wireType);
                    continue;
                }

                const fieldType = (fieldDef as any).type;
                const isRepeated = (fieldDef as any).rule === 'repeated';

                const value = readFieldValue(reader, fieldType, wireType);

                if (isRepeated) {
                    if (!message[fieldName]) message[fieldName] = [];
                    message[fieldName].push(value);
                } else {
                    message[fieldName] = value;
                }
            }

            return message;
        },
        toObject: (decoded: any) => decoded,
    };
}

/**
 * Read a field value from the protobuf reader
 */
function readFieldValue(reader: any, fieldType: string, wireType: number): any {
    switch (fieldType) {
        case 'string':
            return reader.string();
        case 'bytes':
            return reader.bytes();
        case 'bool':
            return reader.bool();
        case 'int32':
        case 'sint32':
            return reader.int32();
        case 'uint32':
            return reader.uint32();
        case 'ThpPairingMethod':
            return reader.int32(); // enum as int32
        default:
            // Default handling based on wire type
            switch (wireType) {
                case 0: // Varint
                    return reader.uint32();
                case 2: // Length-delimited
                    return reader.bytes();
                default:
                    reader.skipType(wireType);

                    return undefined;
            }
    }
}

/**
 * Decode a message using static code generation
 */
export const decodeMessage = (
    _: any,
    messageType: number | string,
    data: Buffer,
): MessageResponse => {
    let messageName: string;

    if (typeof messageType === 'string') {
        messageName = messageType;
    } else {
        // Try regular MESSAGE_TYPES_BY_ID first
        messageName = MESSAGE_TYPES_BY_ID[messageType];

        // If not found, try THP message types
        if (!messageName) {
            const thpMessageName = Object.keys(THP_MESSAGE_TYPES).find(
                name => THP_MESSAGE_TYPES[name] === messageType,
            );
            if (thpMessageName) {
                messageName = thpMessageName;
            }
        }
    }

    if (!messageName) {
        throw new Error(`Unknown message type: ${messageType}`);
    }

    let MessageClass = (Messages as any)[messageName];

    // Handle THP messages that might not be in the static generated code
    if (!MessageClass && messageName.startsWith('Thp')) {
        MessageClass = createThpDecodeMessageClass(messageName);
    }

    if (!MessageClass) {
        throw new Error(`Unknown message class: ${messageName}`);
    }

    // Decode using static methods
    const decoded = MessageClass.decode(data);
    const messageObject = MessageClass.toObject(decoded);

    // Apply Trezor-specific transformations
    const transformedMessage = transformForDecoding(messageObject, messageName);

    return { type: messageName, message: transformedMessage };
};
