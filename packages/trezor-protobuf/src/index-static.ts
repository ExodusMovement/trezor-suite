// New static implementation using minimal protobuf.js API
// This replaces the reflection-based approach with static code

import * as protobuf from '@exodus/protobufjs/src/index-minimal'; // minimal API only
import Long from 'long';

import type { EncodeResult, MessageResponse } from './generated-messages';

const Messages = require('../generated-messages');
const messagesJson = require('../messages.json');

// Patch buggy encode functions in generated-messages.js
// These should use .bytes() for nested messages but incorrectly use .string()
function patchBuggyEncoders() {
    // Get list of all message types that have nested message fields
    const messagesToPatch: Record<string, string[]> = {};

    Object.keys(messagesJson.nested || {}).forEach(messageName => {
        const messageDefinition = messagesJson.nested[messageName];
        if (!messageDefinition?.fields) return;

        Object.keys(messageDefinition.fields).forEach(fieldName => {
            const fieldDef = messageDefinition.fields[fieldName];
            const fieldType = fieldDef.type;

            // Check if this field type is a nested message
            // Could be top-level (Messages[fieldType]) or nested in parent (messageDefinition.nested[fieldType])
            const isNestedMessage = Messages[fieldType] || messageDefinition.nested?.[fieldType];

            if (isNestedMessage) {
                if (!messagesToPatch[messageName]) {
                    messagesToPatch[messageName] = [];
                }
                messagesToPatch[messageName].push(fieldName);
            }
        });
    });

    // Patch encode functions for messages with nested message fields
    Object.keys(messagesToPatch).forEach(messageName => {
        const MessageClass = Messages[messageName];
        if (!MessageClass || !MessageClass.encode) return;

        const originalEncode = MessageClass.encode;
        MessageClass.encode = function (message: any, writer: any) {
            // For nested message fields that are Buffers, we need to call .bytes() not .string()
            // Create a proxy writer that intercepts .string() calls
            const writerProxy = new Proxy(writer || protobuf.Writer.create(), {
                get(target, prop) {
                    if (prop === 'string') {
                        return function (value: any) {
                            // If value is a Buffer, use .bytes() instead
                            if (Buffer.isBuffer(value) || value instanceof Uint8Array) {
                                return target.bytes(value);
                            }

                            return target.string(value);
                        };
                    }

                    return target[prop];
                },
            });

            return originalEncode.call(this, message, writerProxy);
        };
    });
}

// Apply patches on module load
patchBuggyEncoders();

// Import protobuf patches
const RULE_PATCH: Record<string, string> = {
    'BackupDevice.groups': 'optional',
    'MultisigRedeemScriptType.nodes': 'optional',
    'MultisigRedeemScriptType.address_n': 'optional',
    'TxRequestDetailsType.request_index': 'required',
    'TxRequest.request_type': 'required',
    'TxRequest.details': 'required',
    'PaymentRequest.memos': 'optional',
    'CardanoPoolOwnerType.staking_key_path': 'optional',
    'CardanoPoolOwner.staking_key_path': 'optional',
    'CardanoTxCertificateType.path': 'optional',
    'CardanoTxCertificate.path': 'optional',
    'CardanoTxInputType.address_n': 'optional',
    'CardanoTxWithdrawal.path': 'optional',
    'CardanoNativeScript.scripts': 'optional',
    'CardanoNativeScript.key_path': 'optional',
    'CardanoTxRequiredSigner.key_path': 'optional',
    'CardanoCVoteRegistrationParametersType.delegations': 'optional',
    'Success.message': 'required',
    'SignedIdentity.address': 'required',
    'EosAuthorizationKey.key': 'required',
    'EosAuthorizationKey.type': 'optional',
    'EosAuthorizationKey.address_n': 'optional',
    'EthereumAddress.address': 'required',
    'Features.vendor': 'required',
    'Features.bootloader_mode': 'required',
    'Features.device_id': 'required',
    'Features.major_version': 'required',
    'Features.minor_version': 'required',
    'Features.patch_version': 'required',
    'Features.pin_protection': 'required',
    'Features.passphrase_protection': 'required',
    'Features.language': 'required',
    'Features.label': 'required',
    'Features.initialized': 'required',
    'Features.revision': 'required',
    'Features.bootloader_hash': 'required',
    'Features.imported': 'required',
    'Features.unlocked': 'required',
    'Features.firmware_present': 'required',
    'Features.backup_availability': 'required',
    'Features.flags': 'required',
    'Features.fw_major': 'required',
    'Features.fw_minor': 'required',
    'Features.fw_patch': 'required',
    'Features.fw_vendor': 'required',
    'Features.model': 'required',
    'Features.internal_model': 'required',
    'Features.unfinished_backup': 'required',
    'Features.no_backup': 'required',
    'Features.recovery_status': 'required',
    'Features.backup_type': 'required',
    'Features.sd_card_present': 'required',
    'Features.sd_protection': 'required',
    'Features.wipe_code_protection': 'required',
    'Features.session_id': 'required',
    'Features.passphrase_always_on_device': 'required',
    'Features.safety_checks': 'required',
    'Features.auto_lock_delay_ms': 'required',
    'Features.display_rotation': 'required',
    'Features.experimental_features': 'required',
    'GetOwnershipProof.ownership_ids': 'optional',
    'NEMTransactionCommon.address_n': 'optional',
    'NEMTransfer.mosaics': 'optional',
    'NEMMosaicDefinition.networks': 'optional',
    'NEMAggregateModification.modifications': 'optional',
    'StellarAssetType.code': 'required',
    'StellarPathPaymentStrictReceiveOp.paths': 'optional',
    'StellarPathPaymentStrictSendOp.paths': 'optional',
    'ThpHandshakeCompletionReqNoisePayload.host_pairing_credential': 'optional',
    'ThpCredentialRequest.credential': 'optional',
};

const ENUM_KEYS = [
    'InputScriptType',
    'OutputScriptType',
    'RequestType',
    'BackupType',
    'Capability',
    'SafetyCheckLevel',
    'ButtonRequestType',
    'PinMatrixRequestType',
    'WordRequestType',
    'HomescreenFormat',
    'RecoveryStatus',
    'BackupAvailability',
    'RecoveryType',
    'DisplayRotation',
    'FailureType',
    'CardanoTxWitnessType',
];

// Note: TYPE_PATCH is primarily used for TypeScript type definitions
// and is applied during the type generation process, not at runtime

// Helper function to check if a field should be treated as optional based on patches
function isFieldOptional(messageName: string, fieldName: string, originalRule?: string): boolean {
    const patchKey = `${messageName}.${fieldName}`;
    const patchRule = RULE_PATCH[patchKey];

    if (patchRule) {
        return patchRule === 'optional';
    }

    // Default protobuf behavior
    return originalRule !== 'required';
}

// Helper function to apply definition patches (validation logic)
function applyDefinitionPatch(messageName: string, data: any): any {
    switch (messageName) {
        case 'ThpCreateNewSession':
            // Validate ThpCreateNewSession union type constraint
            const hasPassphrase = data.passphrase !== undefined && data.passphrase !== null;
            const hasOnDevice = data.on_device !== undefined && data.on_device !== null;

            if (!hasPassphrase && !hasOnDevice) {
                throw new Error(
                    'ThpCreateNewSession: either passphrase or on_device must be provided',
                );
            }
            if (hasPassphrase && hasOnDevice) {
                throw new Error(
                    'ThpCreateNewSession: cannot provide both passphrase and on_device',
                );
            }
            break;

        // Add other definition patches as needed
        default:
            break;
    }

    return data;
}

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
    // Check the actual field type from the message definition
    const messageDefinition = getMessageDefinition(messageName);
    if (messageDefinition?.fields?.[fieldName]?.type === 'bytes') {
        return true;
    }

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

    // Fallback: For non-THP messages, only convert fields that explicitly contain 'bytes' in the name
    // This preserves the original behavior for protocol v1 fields like session_id
    return fieldName.includes('bytes');
}

/**
 * Look up a message definition by name, checking both top-level and nested definitions
 * Recursively searches through all levels of nesting
 */
function getMessageDefinition(messageName: string): any {
    // First check top-level
    if (messagesJson.nested?.[messageName]) {
        return messagesJson.nested[messageName];
    }

    // Recursively search in nested definitions
    function searchNested(obj: any): any {
        if (!obj || typeof obj !== 'object') return null;

        if (obj.nested) {
            // Check direct children
            if (obj.nested[messageName]) {
                return obj.nested[messageName];
            }

            // Recursively search each child
            for (const childName of Object.keys(obj.nested)) {
                const found = searchNested(obj.nested[childName]);
                if (found) return found;
            }
        }

        return null;
    }

    // Search through all top-level messages
    for (const parentName of Object.keys(messagesJson.nested || {})) {
        const found = searchNested(messagesJson.nested[parentName]);
        if (found) return found;
    }

    return null;
}

/**
 * Look up a Message class by name, checking both top-level and nested classes
 * Recursively searches through all levels of nesting
 */
function getMessageClass(messageName: string): any {
    // First check top-level
    if (Messages[messageName]) {
        return Messages[messageName];
    }

    // Recursively search in nested classes
    function searchNested(obj: any): any {
        if (!obj || typeof obj !== 'object') return null;

        // Check if this object has the message class we're looking for
        if (obj[messageName] && typeof obj[messageName] === 'function') {
            return obj[messageName];
        }

        // Recursively search each property
        for (const key of Object.keys(obj)) {
            if (key !== messageName && typeof obj[key] === 'object') {
                const found = searchNested(obj[key]);
                if (found) return found;
            }
        }

        return null;
    }

    // Search through all top-level message classes
    for (const parentName of Object.keys(Messages)) {
        const found = searchNested(Messages[parentName]);
        if (found) return found;
    }

    return null;
}

/**
 * Manually encode a message using its definition from messages.json
 * This is needed because generated-messages.js doesn't create classes for nested message types
 */
function manuallyEncodeMessage(messageName: string, data: Record<string, unknown>): Buffer {
    const messageDefinition = getMessageDefinition(messageName);
    if (!messageDefinition?.fields) {
        throw new Error(`Cannot find definition for message: ${messageName}`);
    }

    const writer = protobuf.Writer.create();

    Object.keys(messageDefinition.fields).forEach(fieldName => {
        const fieldDef = messageDefinition.fields[fieldName];
        const value = data[fieldName];

        if (value === undefined) return;

        const fieldId = fieldDef.id;
        const fieldType = fieldDef.type;
        const isRepeated = fieldDef.rule === 'repeated';

        if (isRepeated && Array.isArray(value)) {
            value.forEach(item => {
                if (item !== undefined) {
                    writeField(writer, fieldId, item, fieldType);
                }
            });
        } else if (value !== undefined) {
            writeField(writer, fieldId, value, fieldType);
        }
    });

    return Buffer.from(writer.finish());
}

/**
 * Write a single field to the protobuf writer
 */
function writeField(writer: any, fieldId: number, value: any, fieldType: string) {
    // If value is already a Buffer (pre-encoded nested message), write it as bytes
    if (Buffer.isBuffer(value)) {
        const tag = (fieldId << 3) | 2; // length-delimited
        writer.uint32(tag);
        writer.bytes(value);

        return;
    }

    // Check if this is a nested message type that needs recursive encoding
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        // Try to get the message definition
        const messageDef = getMessageDefinition(fieldType);
        if (messageDef) {
            // This is a nested message - recursively encode it
            const encoded = manuallyEncodeMessage(fieldType, value as Record<string, unknown>);
            const tag = (fieldId << 3) | 2; // length-delimited
            writer.uint32(tag);
            writer.bytes(encoded);

            return;
        }
    }

    // Calculate wire type based on field type
    let wireType = 0; // varint by default
    if (fieldType === 'string' || fieldType === 'bytes') {
        wireType = 2; // length-delimited
    }

    const tag = (fieldId << 3) | wireType;
    writer.uint32(tag);

    // Write the value based on type
    if (fieldType === 'string') {
        writer.string(value || '');
    } else if (fieldType === 'bytes') {
        if (typeof value === 'string') {
            writer.bytes(Buffer.from(value, 'hex'));
        } else {
            writer.bytes(value || Buffer.alloc(0));
        }
    } else if (fieldType === 'bool') {
        writer.bool(!!value);
    } else if (fieldType === 'uint64' || fieldType === 'int64') {
        // Convert string numbers to actual numbers
        const numValue = typeof value === 'string' ? parseInt(value, 10) : value;
        writer.uint64(numValue || 0);
    } else if (fieldType === 'sint64') {
        const numValue = typeof value === 'string' ? parseInt(value, 10) : value;
        writer.sint64(numValue || 0);
    } else if (fieldType === 'uint32') {
        const numValue = typeof value === 'string' ? parseInt(value, 10) : value;
        writer.uint32(numValue || 0);
    } else if (fieldType === 'int32') {
        const numValue = typeof value === 'string' ? parseInt(value, 10) : value;
        writer.int32(numValue || 0);
    } else if (fieldType === 'sint32') {
        const numValue = typeof value === 'string' ? parseInt(value, 10) : value;
        writer.sint32(numValue || 0);
    } else {
        // For other types (including enums), write as varint
        const numValue = typeof value === 'string' ? parseInt(value, 10) : value;
        writer.uint32(numValue || 0);
    }
}

/**
 * Convert enum string values to numeric values for encoding
 */
function convertEnumStringToNumber(
    messageName: string,
    fieldName: string,
    value: string | number,
): string | number {
    // If already a number, return as-is
    if (typeof value !== 'string') {
        return value;
    }

    try {
        const messageDefinition = getMessageDefinition(messageName);
        if (!messageDefinition?.fields?.[fieldName]) {
            return value;
        }

        const fieldType = messageDefinition.fields[fieldName].type;

        // Check if this field type is an enum (could be nested or top-level)
        let enumDefinition = messageDefinition.nested?.[fieldType];
        if (!enumDefinition) {
            // Check top-level
            const topLevelDef = messagesJson.nested?.[fieldType];
            if (topLevelDef?.values) {
                enumDefinition = topLevelDef;
            }
        }

        if (enumDefinition?.values) {
            // Convert string enum value to numeric value
            const enumValue = enumDefinition.values[value];
            if (enumValue !== undefined) {
                return enumValue;
            }
        }

        return value;
    } catch (e) {
        return value;
    }
}

/**
 * Transform data for encoding (same logic as the original encode.ts)
 */
function transformForEncoding(
    data: Record<string, unknown>,
    messageName: string,
): Record<string, unknown> {
    const transformed: Record<string, unknown> = {};

    // Look up the message definition (may be nested)
    const messageDefinition = getMessageDefinition(messageName);

    Object.keys(data).forEach(key => {
        const value = data[key];

        if (value === undefined) {
            return;
        }

        // Handle bytes fields - check field type first, regardless of value type
        if (isBytesField(messageName, key)) {
            if (typeof value === 'string') {
                // Special edge case for empty strings
                if (!value) {
                    transformed[key] = value;
                } else {
                    transformed[key] = Buffer.from(value, 'hex');
                }
            } else if (Buffer.isBuffer(value) || value instanceof Uint8Array) {
                // Already a buffer, keep as-is
                transformed[key] = value;
            } else {
                // Unexpected type for bytes field - pass through as-is
                // The encoder will handle it or error appropriately
                transformed[key] = value;
            }
        }
        // Handle number safety
        else if (typeof value === 'number' && !Number.isSafeInteger(value)) {
            throw new RangeError('field value is not within safe integer range');
        }
        // Handle enum string values (convert to numbers)
        else if (typeof value === 'string') {
            transformed[key] = convertEnumStringToNumber(messageName, key, value);
        }
        // Handle arrays
        else if (Array.isArray(value)) {
            // Get the field type for array items
            const fieldType = messageDefinition?.fields?.[key]?.type;

            transformed[key] = value.map(item => {
                if (typeof item === 'object' && item !== null) {
                    // Check if this is a nested message type
                    const NestedMessageClass = getMessageClass(fieldType);
                    if (fieldType && NestedMessageClass) {
                        // Recursively transform and create the nested message
                        const nestedTransformed = transformForEncoding(
                            item as Record<string, unknown>,
                            fieldType,
                        );
                        const nestedMessage = NestedMessageClass.create(nestedTransformed);
                        // Pre-encode to bytes to work around generated-messages.js bugs
                        const encoded = NestedMessageClass.encode(nestedMessage).finish();

                        return Buffer.from(encoded);
                    } else if (fieldType && getMessageDefinition(fieldType)) {
                        // No generated class but we have a definition - manually encode it
                        const nestedTransformed = transformForEncoding(
                            item as Record<string, unknown>,
                            fieldType,
                        );

                        return manuallyEncodeMessage(fieldType, nestedTransformed);
                    } else {
                        // Recursively transform unknown nested objects
                        return transformForEncoding(
                            item as Record<string, unknown>,
                            fieldType || messageName,
                        );
                    }
                }

                return item;
            });
        }
        // Handle nested objects
        else if (typeof value === 'object' && value !== null) {
            // Get the field type to check if it's a nested message
            const fieldType = messageDefinition?.fields?.[key]?.type;
            const NestedMessageClass = getMessageClass(fieldType);

            if (fieldType && NestedMessageClass) {
                // This is a nested message type - recursively transform and create it
                const nestedTransformed = transformForEncoding(
                    value as Record<string, unknown>,
                    fieldType,
                );
                const nestedMessage = NestedMessageClass.create(nestedTransformed);
                // Pre-encode to bytes to work around generated-messages.js bugs
                const encoded = NestedMessageClass.encode(nestedMessage).finish();
                transformed[key] = Buffer.from(encoded);
            } else if (fieldType && getMessageDefinition(fieldType)) {
                // No generated class but we have a definition - manually encode it
                const nestedTransformed = transformForEncoding(
                    value as Record<string, unknown>,
                    fieldType,
                );
                transformed[key] = manuallyEncodeMessage(fieldType, nestedTransformed);
            } else {
                // Recursively transform unknown nested objects
                transformed[key] = transformForEncoding(
                    value as Record<string, unknown>,
                    fieldType || messageName,
                );
            }
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
        const messageDefinition = getMessageDefinition(messageName);
        if (!messageDefinition?.fields?.[fieldName]) {
            return value;
        }

        const fieldType = messageDefinition.fields[fieldName].type;

        // Check if this field type is an enum (could be nested or top-level)
        let enumDefinition = messageDefinition.nested?.[fieldType];
        if (!enumDefinition) {
            // Check top-level
            const topLevelDef = messagesJson.nested?.[fieldType];
            if (topLevelDef?.values) {
                enumDefinition = topLevelDef;
            }
        }

        if (enumDefinition?.values) {
            // Find the enum name for this numeric value
            for (const [enumName, enumValue] of Object.entries(enumDefinition.values)) {
                if (enumValue === value) {
                    // Only convert to string if this enum type is in ENUM_KEYS
                    if (ENUM_KEYS.includes(fieldType)) {
                        return enumName;
                    }

                    // For other enums, return the numeric value
                    return value;
                }
            }
        }

        return value;
    } catch (e) {
        return value;
    }
}

/**
 * Manually convert a decoded protobuf message to a plain object
 * This avoids the corruption that toObject() causes with bytes fields
 */
function decodeMessageToObject(decoded: any, messageName: string): any {
    const messageDefinition = getMessageDefinition(messageName);
    if (!messageDefinition?.fields) {
        return decoded;
    }

    const obj: any = {};

    Object.keys(messageDefinition.fields).forEach(fieldName => {
        const fieldDef = messageDefinition.fields[fieldName];
        const value = decoded[fieldName];

        if (value === undefined || value === null) {
            return;
        }

        const fieldType = fieldDef.type;

        // Check if this is a bytes field
        if (fieldType === 'bytes') {
            // Keep as Buffer/Uint8Array - don't convert to string yet
            obj[fieldName] = value;
        }
        // Check if this is a nested message (will appear as an object)
        else if (
            typeof value === 'object' &&
            !Buffer.isBuffer(value) &&
            !(value instanceof Uint8Array)
        ) {
            // It's a nested message - keep as-is for now, will be fixed by fixNestedMessages
            obj[fieldName] = value;
        }
        // Everything else
        else {
            obj[fieldName] = value;
        }
    });

    return obj;
}

/**
 * Manually decode a message from a protobuf Reader using its definition
 */
function manuallyDecodeMessage(reader: any, messageName: string): any {
    const messageDefinition = getMessageDefinition(messageName);
    if (!messageDefinition?.fields) {
        throw new Error(`Cannot find definition for message: ${messageName}`);
    }

    const message: any = {};
    const end = reader.len;

    while (reader.pos < end) {
        const tag = reader.uint32();
        const fieldId = tag >>> 3;
        const wireType = tag & 7;

        // Find the field definition by id
        let fieldName: string | undefined;
        let fieldDef: any;

        for (const fname of Object.keys(messageDefinition.fields)) {
            if (messageDefinition.fields[fname].id === fieldId) {
                fieldName = fname;
                fieldDef = messageDefinition.fields[fname];
                break;
            }
        }

        if (!fieldName || !fieldDef) {
            // Unknown field, skip it
            reader.skipType(wireType);
            continue;
        }

        const fieldType = fieldDef.type;
        const isRepeated = fieldDef.rule === 'repeated';

        // Decode based on wire type and field type
        if (wireType === 2) {
            // Length-delimited (string, bytes, nested messages)
            if (fieldType === 'string') {
                // string() method reads its own length
                const value = reader.string();
                if (isRepeated) {
                    if (!message[fieldName]) message[fieldName] = [];
                    message[fieldName].push(value);
                } else {
                    message[fieldName] = value;
                }
            } else {
                // For bytes and nested messages, read the length
                const length = reader.uint32();
                if (fieldType === 'bytes') {
                    // Read exactly 'length' bytes
                    const bytesValue = reader.buf.slice(reader.pos, reader.pos + length);
                    if (isRepeated) {
                        if (!message[fieldName]) message[fieldName] = [];
                        message[fieldName].push(bytesValue);
                    } else {
                        message[fieldName] = bytesValue;
                    }
                    reader.pos += length;
                } else {
                    // Check if it's a nested message type
                    const nestedMessageDef = getMessageDefinition(fieldType);
                    if (nestedMessageDef) {
                        // Recursively decode the nested message
                        const nestedData = reader.buf.slice(reader.pos, reader.pos + length);
                        const nestedReader = protobuf.Reader.create(nestedData);
                        const nestedMessage = manuallyDecodeMessage(nestedReader, fieldType);
                        if (isRepeated) {
                            if (!message[fieldName]) message[fieldName] = [];
                            message[fieldName].push(nestedMessage);
                        } else {
                            message[fieldName] = nestedMessage;
                        }
                        reader.pos += length;
                    } else {
                        // Unknown nested type, skip
                        reader.pos += length;
                    }
                }
            }
        } else if (wireType === 0) {
            // Varint (int32, uint32, int64, uint64, bool, enum)
            let value;
            if (fieldType === 'uint32') {
                value = reader.uint32();
            } else if (fieldType === 'int32') {
                value = reader.int32();
            } else if (fieldType === 'uint64' || fieldType === 'int64') {
                value = reader.uint64();
            } else if (fieldType === 'bool') {
                value = reader.bool();
            } else {
                // Default: read as uint32 for enums, etc.
                value = reader.uint32();
            }

            if (isRepeated) {
                if (!message[fieldName]) message[fieldName] = [];
                message[fieldName].push(value);
            } else {
                message[fieldName] = value;
            }
        } else {
            // Unknown wire type, skip
            reader.skipType(wireType);
        }
    }

    return message;
}

/**
 * Transform data for decoding (same logic as the original decode.ts)
 */
function transformForDecoding(data: any, messageName?: string): any {
    if (!data || typeof data !== 'object') {
        return data;
    }

    const transformed: any = {};

    // Look up the message definition if we have a messageName
    const messageDefinition = messageName ? getMessageDefinition(messageName) : null;

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
            // Get the field type for array items
            const fieldType = messageDefinition?.fields?.[key]?.type;
            transformed[key] = value.map(item =>
                transformForDecoding(item, fieldType || messageName),
            );
        }
        // Handle nested objects
        else if (typeof value === 'object' && value !== null) {
            // Get the actual field type for nested objects
            const fieldType = messageDefinition?.fields?.[key]?.type;
            transformed[key] = transformForDecoding(value, fieldType || key);
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
                    const isRequired = !isFieldOptional(messageName, fieldName, fieldDef.rule);
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

    // Apply definition patches (validation)
    applyDefinitionPatch(messageName, transformedData);

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

    // Decode the raw protobuf data manually to avoid corruption from generated code
    let messageObject: any;

    try {
        // Try manual decoding first for messages we know have issues
        const reader = protobuf.Reader.create(data);
        messageObject = manuallyDecodeMessage(reader, messageName);
    } catch (e) {
        // Fallback to generated code if manual decoding fails
        console.log(`Manual decode failed for ${messageName}, falling back to generated code:`, e);
        const decoded = MessageClass.decode(data);
        messageObject = decodeMessageToObject(decoded, messageName);
    }

    // Apply Trezor-specific transformations
    const transformedMessage = transformForDecoding(messageObject, messageName);

    return { type: messageName, message: transformedMessage };
};
