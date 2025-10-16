#!/usr/bin/env tsx

import * as fs from 'fs';
import * as path from 'path';

// Read the existing messages.json file
const messagesJsonPath = path.join(__dirname, '..', 'messages.json');
const messagesJson = JSON.parse(fs.readFileSync(messagesJsonPath, 'utf8'));

function getWireType(fieldType: string, enumTypes: Set<string>): number {
    switch (fieldType) {
        case 'bool':
        case 'int32':
        case 'int64':
        case 'uint32':
        case 'uint64':
        case 'sint32':
        case 'sint64':
            return 0; // Varint
        case 'fixed64':
        case 'sfixed64':
        case 'double':
            return 1; // 64-bit
        case 'string':
        case 'bytes':
            return 2; // Length-delimited
        case 'fixed32':
        case 'sfixed32':
        case 'float':
            return 5; // 32-bit
        default:
            // Check if this is an enum type
            if (enumTypes.has(fieldType)) {
                return 0; // Enums are encoded as varints
            }

            return 2; // Default to length-delimited for messages
    }
}

function getWriteMethod(fieldType: string, enumTypes: Set<string>): string {
    switch (fieldType) {
        case 'bool':
            return 'bool';
        case 'int32':
            return 'int32';
        case 'int64':
            return 'int64';
        case 'uint32':
            return 'uint32';
        case 'uint64':
            return 'uint64';
        case 'sint32':
            return 'sint32';
        case 'sint64':
            return 'sint64';
        case 'fixed32':
            return 'fixed32';
        case 'fixed64':
            return 'fixed64';
        case 'sfixed32':
            return 'sfixed32';
        case 'sfixed64':
            return 'sfixed64';
        case 'float':
            return 'float';
        case 'double':
            return 'double';
        case 'string':
            return 'string';
        case 'bytes':
            return 'bytes';
        default:
            // Check if this is an enum type
            if (enumTypes.has(fieldType)) {
                return 'int32'; // Enums are encoded as int32 varints
            }

            return 'string'; // Default for unknown types
    }
}

function getReadMethod(fieldType: string, enumTypes: Set<string>): string {
    return getWriteMethod(fieldType, enumTypes); // Same methods for reading
}

// Generate static encoder/decoder functions for each message type
function generateStaticCode(definitions: any): string {
    const code: string[] = [];

    code.push('// @ts-nocheck');
    code.push('// Generated static protobuf code for Trezor messages');
    code.push('// This code uses only the minimal protobuf.js API');
    code.push('');
    code.push('const $protobuf = require("@exodus/protobufjs/src/index-minimal");');
    code.push('const $Writer = $protobuf.Writer;');
    code.push('const $Reader = $protobuf.Reader;');
    code.push('const $util = $protobuf.util;');
    code.push('');
    code.push('const $root = {};');
    code.push('');

    // Collect all enum types for proper handling
    const enumTypes = new Set<string>();

    function collectEnums(obj: any, parentPath: string = '') {
        if (obj && typeof obj === 'object') {
            if (obj.values && typeof obj.values === 'object') {
                // This is an enum - add both the full path and just the type name
                if (parentPath) {
                    enumTypes.add(parentPath);
                    // Also add just the last part (e.g., "FailureType" from "Failure.FailureType")
                    const typeName = parentPath.split('.').pop();
                    if (typeName) {
                        enumTypes.add(typeName);
                    }
                }
            }
            if (obj.nested) {
                Object.entries(obj.nested).forEach(([key, value]) => {
                    const newPath = parentPath ? `${parentPath}.${key}` : key;
                    collectEnums(value, newPath);
                });
            }
        }
    }

    collectEnums(definitions);

    // Extract MessageType enum first
    const messageTypes = definitions.nested?.MessageType?.values || {};
    code.push('// MessageType enum');
    code.push('$root.MessageType = {');
    Object.entries(messageTypes).forEach(([name, id]) => {
        code.push(`    ${name}: ${id},`);
    });
    code.push('};');
    code.push('');

    // Generate reverse mapping
    code.push('$root.MessageType.valuesById = {};');
    Object.entries(messageTypes).forEach(([name, id]) => {
        code.push(`$root.MessageType.valuesById[${id}] = "${name}";`);
    });
    code.push('');

    // Generate message classes
    Object.entries(definitions.nested || {}).forEach(
        ([messageName, messageDefinition]: [string, any]) => {
            if (messageName === 'MessageType' || !messageDefinition.fields) {
                return; // Skip enums and non-message types
            }

            code.push(`// ${messageName} message`);
            code.push(`$root.${messageName} = (function() {`);
            code.push(`    function ${messageName}(properties) {`);
            code.push(`        if (properties) {`);
            code.push(
                `            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {`,
            );
            code.push(`                if (properties[keys[i]] != null) {`);
            code.push(`                    this[keys[i]] = properties[keys[i]];`);
            code.push(`                }`);
            code.push(`            }`);
            code.push(`        }`);
            code.push(`    }`);
            code.push('');

            // Create method
            code.push(`    ${messageName}.create = function create(properties) {`);
            code.push(`        return new ${messageName}(properties);`);
            code.push(`    };`);
            code.push('');

            // Encode method
            code.push(`    ${messageName}.encode = function encode(message, writer) {`);
            code.push(`        if (!writer) writer = $Writer.create();`);

            Object.entries(messageDefinition.fields || {}).forEach(
                ([fieldName, fieldDef]: [string, any]) => {
                    const fieldId = fieldDef.id;
                    const fieldType = fieldDef.type;
                    const isRepeated = fieldDef.rule === 'repeated';

                    if (isRepeated) {
                        code.push(
                            `        if (message.${fieldName} != null && message.${fieldName}.length) {`,
                        );
                        code.push(
                            `            for (var i = 0; i < message.${fieldName}.length; ++i) {`,
                        );
                        code.push(
                            `                writer.uint32(${(fieldId << 3) | getWireType(fieldType, enumTypes)}).${getWriteMethod(fieldType, enumTypes)}(message.${fieldName}[i]);`,
                        );
                        code.push(`            }`);
                        code.push(`        }`);
                    } else {
                        code.push(
                            `        if (message.${fieldName} != null && Object.hasOwnProperty.call(message, "${fieldName}")) {`,
                        );
                        code.push(
                            `            writer.uint32(${(fieldId << 3) | getWireType(fieldType, enumTypes)}).${getWriteMethod(fieldType, enumTypes)}(message.${fieldName});`,
                        );
                        code.push(`        }`);
                    }
                },
            );

            code.push(`        return writer;`);
            code.push(`    };`);
            code.push('');

            // Decode method
            code.push(`    ${messageName}.decode = function decode(reader, length) {`);
            code.push(`        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);`);
            code.push(`        var end = length === undefined ? reader.len : reader.pos + length;`);
            code.push(`        var message = new $root.${messageName}();`);
            code.push(`        while (reader.pos < end) {`);
            code.push(`            var tag = reader.uint32();`);
            code.push(`            switch (tag >>> 3) {`);

            Object.entries(messageDefinition.fields || {}).forEach(
                ([fieldName, fieldDef]: [string, any]) => {
                    const fieldId = fieldDef.id;
                    const fieldType = fieldDef.type;
                    const isRepeated = fieldDef.rule === 'repeated';

                    code.push(`            case ${fieldId}:`);
                    if (isRepeated) {
                        code.push(
                            `                if (!(message.${fieldName} && message.${fieldName}.length)) message.${fieldName} = [];`,
                        );
                        code.push(
                            `                message.${fieldName}.push(reader.${getReadMethod(fieldType, enumTypes)}());`,
                        );
                    } else {
                        code.push(
                            `                message.${fieldName} = reader.${getReadMethod(fieldType, enumTypes)}();`,
                        );
                    }
                    code.push(`                break;`);
                },
            );

            code.push(`            default:`);
            code.push(`                reader.skipType(tag & 7);`);
            code.push(`                break;`);
            code.push(`            }`);
            code.push(`        }`);
            code.push(`        return message;`);
            code.push(`    };`);
            code.push('');

            // toObject method
            code.push(`    ${messageName}.toObject = function toObject(message, options) {`);
            code.push(`        if (!options) options = {};`);
            code.push(`        var object = {};`);

            Object.entries(messageDefinition.fields || {}).forEach(
                ([fieldName, fieldDef]: [string, any]) => {
                    const fieldType = fieldDef.type;
                    const isRepeated = fieldDef.rule === 'repeated';

                    if (isRepeated) {
                        code.push(
                            `        if (message.${fieldName} && message.${fieldName}.length) {`,
                        );
                        code.push(`            object.${fieldName} = [];`);
                        code.push(
                            `            for (var j = 0; j < message.${fieldName}.length; ++j) {`,
                        );
                        if (fieldType === 'bytes') {
                            code.push(
                                `                object.${fieldName}[j] = $util.base64.encode(message.${fieldName}[j], 0, message.${fieldName}[j].length);`,
                            );
                        } else {
                            code.push(
                                `                object.${fieldName}[j] = message.${fieldName}[j];`,
                            );
                        }
                        code.push(`            }`);
                        code.push(`        }`);
                    } else {
                        code.push(
                            `        if (message.${fieldName} != null && message.hasOwnProperty("${fieldName}")) {`,
                        );
                        if (fieldType === 'bytes') {
                            code.push(
                                `            object.${fieldName} = $util.base64.encode(message.${fieldName}, 0, message.${fieldName}.length);`,
                            );
                        } else {
                            code.push(`            object.${fieldName} = message.${fieldName};`);
                        }
                        code.push(`        }`);
                    }
                },
            );

            code.push(`        return object;`);
            code.push(`    };`);
            code.push('');

            code.push(`    return ${messageName};`);
            code.push(`})();`);
            code.push('');
        },
    );

    code.push('module.exports = $root;');

    return code.join('\n');
}

// Generate the static code
const staticCode = generateStaticCode(messagesJson);

// Write to file (outside src directory to avoid TypeScript processing)
const outputPath = path.join(__dirname, '..', 'generated-messages.js');
fs.writeFileSync(outputPath, staticCode);
