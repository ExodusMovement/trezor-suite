// @ts-nocheck
// Generated static protobuf code for Trezor messages
// This code uses only the minimal protobuf.js API

const $protobuf = require("@exodus/protobufjs/src/index-minimal");
const $Writer = $protobuf.Writer;
const $Reader = $protobuf.Reader;
const $util = $protobuf.util;

const $root = {};

// MessageType enum
$root.MessageType = {
    Initialize: 0,
    Ping: 1,
    Success: 2,
    Failure: 3,
    ChangePin: 4,
    WipeDevice: 5,
    GetEntropy: 9,
    Entropy: 10,
    LoadDevice: 13,
    ResetDevice: 14,
    SetBusy: 16,
    Features: 17,
    PinMatrixRequest: 18,
    PinMatrixAck: 19,
    Cancel: 20,
    LockDevice: 24,
    ApplySettings: 25,
    ButtonRequest: 26,
    ButtonAck: 27,
    ApplyFlags: 28,
    GetNonce: 31,
    Nonce: 33,
    BackupDevice: 34,
    EntropyRequest: 35,
    EntropyAck: 36,
    PaymentRequest: 37,
    EntropyCheckReady: 994,
    EntropyCheckContinue: 995,
    PassphraseRequest: 41,
    PassphraseAck: 42,
    RecoveryDevice: 45,
    WordRequest: 46,
    WordAck: 47,
    GetFeatures: 55,
    SdProtect: 79,
    ChangeWipeCode: 82,
    EndSession: 83,
    DoPreauthorized: 84,
    PreauthorizedRequest: 85,
    CancelAuthorization: 86,
    RebootToBootloader: 87,
    GetFirmwareHash: 88,
    FirmwareHash: 89,
    UnlockPath: 93,
    UnlockedPathRequest: 94,
    ShowDeviceTutorial: 95,
    UnlockBootloader: 96,
    AuthenticateDevice: 97,
    AuthenticityProof: 98,
    ChangeLanguage: 990,
    DataChunkRequest: 991,
    DataChunkAck: 992,
    SetBrightness: 993,
    SetU2FCounter: 63,
    GetNextU2FCounter: 80,
    NextU2FCounter: 81,
    Deprecated_PassphraseStateRequest: 77,
    Deprecated_PassphraseStateAck: 78,
    FirmwareErase: 6,
    FirmwareUpload: 7,
    FirmwareRequest: 8,
    ProdTestT1: 32,
    BleUnpair: 8001,
    GetPublicKey: 11,
    PublicKey: 12,
    SignTx: 15,
    TxRequest: 21,
    TxAck: 22,
    GetAddress: 29,
    Address: 30,
    SignMessage: 38,
    VerifyMessage: 39,
    MessageSignature: 40,
    GetOwnershipId: 43,
    OwnershipId: 44,
    GetOwnershipProof: 49,
    OwnershipProof: 50,
    AuthorizeCoinJoin: 51,
    CipherKeyValue: 23,
    CipheredKeyValue: 48,
    SignIdentity: 53,
    SignedIdentity: 54,
    GetECDHSessionKey: 61,
    ECDHSessionKey: 62,
    PaymentNotification: 52,
    DebugLinkDecision: 100,
    DebugLinkGetState: 101,
    DebugLinkState: 102,
    DebugLinkStop: 103,
    DebugLinkLog: 104,
    DebugLinkMemoryRead: 110,
    DebugLinkMemory: 111,
    DebugLinkMemoryWrite: 112,
    DebugLinkFlashErase: 113,
    DebugLinkLayout: 9001,
    DebugLinkReseedRandom: 9002,
    DebugLinkRecordScreen: 9003,
    DebugLinkEraseSdCard: 9005,
    DebugLinkWatchLayout: 9006,
    DebugLinkResetDebugEvents: 9007,
    DebugLinkOptigaSetSecMax: 9008,
    DebugLinkGetGcInfo: 9009,
    DebugLinkGcInfo: 9010,
    DebugLinkGetPairingInfo: 9011,
    DebugLinkPairingInfo: 9012,
    EthereumGetPublicKey: 450,
    EthereumPublicKey: 451,
    EthereumGetAddress: 56,
    EthereumAddress: 57,
    EthereumSignTx: 58,
    EthereumSignTxEIP1559: 452,
    EthereumTxRequest: 59,
    EthereumTxAck: 60,
    EthereumSignMessage: 64,
    EthereumVerifyMessage: 65,
    EthereumMessageSignature: 66,
    EthereumSignTypedData: 464,
    EthereumTypedDataStructRequest: 465,
    EthereumTypedDataStructAck: 466,
    EthereumTypedDataValueRequest: 467,
    EthereumTypedDataValueAck: 468,
    EthereumTypedDataSignature: 469,
    EthereumSignTypedHash: 470,
    NEMGetAddress: 67,
    NEMAddress: 68,
    NEMSignTx: 69,
    NEMSignedTx: 70,
    NEMDecryptMessage: 75,
    NEMDecryptedMessage: 76,
    TezosGetAddress: 150,
    TezosAddress: 151,
    TezosSignTx: 152,
    TezosSignedTx: 153,
    TezosGetPublicKey: 154,
    TezosPublicKey: 155,
    StellarSignTx: 202,
    StellarTxOpRequest: 203,
    StellarGetAddress: 207,
    StellarAddress: 208,
    StellarCreateAccountOp: 210,
    StellarPaymentOp: 211,
    StellarPathPaymentStrictReceiveOp: 212,
    StellarManageSellOfferOp: 213,
    StellarCreatePassiveSellOfferOp: 214,
    StellarSetOptionsOp: 215,
    StellarChangeTrustOp: 216,
    StellarAllowTrustOp: 217,
    StellarAccountMergeOp: 218,
    StellarManageDataOp: 220,
    StellarBumpSequenceOp: 221,
    StellarManageBuyOfferOp: 222,
    StellarPathPaymentStrictSendOp: 223,
    StellarClaimClaimableBalanceOp: 225,
    StellarSignedTx: 230,
    CardanoGetPublicKey: 305,
    CardanoPublicKey: 306,
    CardanoGetAddress: 307,
    CardanoAddress: 308,
    CardanoTxItemAck: 313,
    CardanoTxAuxiliaryDataSupplement: 314,
    CardanoTxWitnessRequest: 315,
    CardanoTxWitnessResponse: 316,
    CardanoTxHostAck: 317,
    CardanoTxBodyHash: 318,
    CardanoSignTxFinished: 319,
    CardanoSignTxInit: 320,
    CardanoTxInput: 321,
    CardanoTxOutput: 322,
    CardanoAssetGroup: 323,
    CardanoToken: 324,
    CardanoTxCertificate: 325,
    CardanoTxWithdrawal: 326,
    CardanoTxAuxiliaryData: 327,
    CardanoPoolOwner: 328,
    CardanoPoolRelayParameters: 329,
    CardanoGetNativeScriptHash: 330,
    CardanoNativeScriptHash: 331,
    CardanoTxMint: 332,
    CardanoTxCollateralInput: 333,
    CardanoTxRequiredSigner: 334,
    CardanoTxInlineDatumChunk: 335,
    CardanoTxReferenceScriptChunk: 336,
    CardanoTxReferenceInput: 337,
    CardanoSignMessageInit: 338,
    CardanoMessageDataRequest: 339,
    CardanoMessageDataResponse: 340,
    CardanoMessageSignature: 341,
    RippleGetAddress: 400,
    RippleAddress: 401,
    RippleSignTx: 402,
    RippleSignedTx: 403,
    EosGetPublicKey: 600,
    EosPublicKey: 601,
    EosSignTx: 602,
    EosTxActionRequest: 603,
    EosTxActionAck: 604,
    EosSignedTx: 605,
    SolanaGetPublicKey: 900,
    SolanaPublicKey: 901,
    SolanaGetAddress: 902,
    SolanaAddress: 903,
    SolanaSignTx: 904,
    SolanaTxSignature: 905,
    EvoluGetNode: 2100,
    EvoluNode: 2101,
};

$root.MessageType.valuesById = {};
$root.MessageType.valuesById[0] = "Initialize";
$root.MessageType.valuesById[1] = "Ping";
$root.MessageType.valuesById[2] = "Success";
$root.MessageType.valuesById[3] = "Failure";
$root.MessageType.valuesById[4] = "ChangePin";
$root.MessageType.valuesById[5] = "WipeDevice";
$root.MessageType.valuesById[9] = "GetEntropy";
$root.MessageType.valuesById[10] = "Entropy";
$root.MessageType.valuesById[13] = "LoadDevice";
$root.MessageType.valuesById[14] = "ResetDevice";
$root.MessageType.valuesById[16] = "SetBusy";
$root.MessageType.valuesById[17] = "Features";
$root.MessageType.valuesById[18] = "PinMatrixRequest";
$root.MessageType.valuesById[19] = "PinMatrixAck";
$root.MessageType.valuesById[20] = "Cancel";
$root.MessageType.valuesById[24] = "LockDevice";
$root.MessageType.valuesById[25] = "ApplySettings";
$root.MessageType.valuesById[26] = "ButtonRequest";
$root.MessageType.valuesById[27] = "ButtonAck";
$root.MessageType.valuesById[28] = "ApplyFlags";
$root.MessageType.valuesById[31] = "GetNonce";
$root.MessageType.valuesById[33] = "Nonce";
$root.MessageType.valuesById[34] = "BackupDevice";
$root.MessageType.valuesById[35] = "EntropyRequest";
$root.MessageType.valuesById[36] = "EntropyAck";
$root.MessageType.valuesById[37] = "PaymentRequest";
$root.MessageType.valuesById[994] = "EntropyCheckReady";
$root.MessageType.valuesById[995] = "EntropyCheckContinue";
$root.MessageType.valuesById[41] = "PassphraseRequest";
$root.MessageType.valuesById[42] = "PassphraseAck";
$root.MessageType.valuesById[45] = "RecoveryDevice";
$root.MessageType.valuesById[46] = "WordRequest";
$root.MessageType.valuesById[47] = "WordAck";
$root.MessageType.valuesById[55] = "GetFeatures";
$root.MessageType.valuesById[79] = "SdProtect";
$root.MessageType.valuesById[82] = "ChangeWipeCode";
$root.MessageType.valuesById[83] = "EndSession";
$root.MessageType.valuesById[84] = "DoPreauthorized";
$root.MessageType.valuesById[85] = "PreauthorizedRequest";
$root.MessageType.valuesById[86] = "CancelAuthorization";
$root.MessageType.valuesById[87] = "RebootToBootloader";
$root.MessageType.valuesById[88] = "GetFirmwareHash";
$root.MessageType.valuesById[89] = "FirmwareHash";
$root.MessageType.valuesById[93] = "UnlockPath";
$root.MessageType.valuesById[94] = "UnlockedPathRequest";
$root.MessageType.valuesById[95] = "ShowDeviceTutorial";
$root.MessageType.valuesById[96] = "UnlockBootloader";
$root.MessageType.valuesById[97] = "AuthenticateDevice";
$root.MessageType.valuesById[98] = "AuthenticityProof";
$root.MessageType.valuesById[990] = "ChangeLanguage";
$root.MessageType.valuesById[991] = "DataChunkRequest";
$root.MessageType.valuesById[992] = "DataChunkAck";
$root.MessageType.valuesById[993] = "SetBrightness";
$root.MessageType.valuesById[63] = "SetU2FCounter";
$root.MessageType.valuesById[80] = "GetNextU2FCounter";
$root.MessageType.valuesById[81] = "NextU2FCounter";
$root.MessageType.valuesById[77] = "Deprecated_PassphraseStateRequest";
$root.MessageType.valuesById[78] = "Deprecated_PassphraseStateAck";
$root.MessageType.valuesById[6] = "FirmwareErase";
$root.MessageType.valuesById[7] = "FirmwareUpload";
$root.MessageType.valuesById[8] = "FirmwareRequest";
$root.MessageType.valuesById[32] = "ProdTestT1";
$root.MessageType.valuesById[8001] = "BleUnpair";
$root.MessageType.valuesById[11] = "GetPublicKey";
$root.MessageType.valuesById[12] = "PublicKey";
$root.MessageType.valuesById[15] = "SignTx";
$root.MessageType.valuesById[21] = "TxRequest";
$root.MessageType.valuesById[22] = "TxAck";
$root.MessageType.valuesById[29] = "GetAddress";
$root.MessageType.valuesById[30] = "Address";
$root.MessageType.valuesById[38] = "SignMessage";
$root.MessageType.valuesById[39] = "VerifyMessage";
$root.MessageType.valuesById[40] = "MessageSignature";
$root.MessageType.valuesById[43] = "GetOwnershipId";
$root.MessageType.valuesById[44] = "OwnershipId";
$root.MessageType.valuesById[49] = "GetOwnershipProof";
$root.MessageType.valuesById[50] = "OwnershipProof";
$root.MessageType.valuesById[51] = "AuthorizeCoinJoin";
$root.MessageType.valuesById[23] = "CipherKeyValue";
$root.MessageType.valuesById[48] = "CipheredKeyValue";
$root.MessageType.valuesById[53] = "SignIdentity";
$root.MessageType.valuesById[54] = "SignedIdentity";
$root.MessageType.valuesById[61] = "GetECDHSessionKey";
$root.MessageType.valuesById[62] = "ECDHSessionKey";
$root.MessageType.valuesById[52] = "PaymentNotification";
$root.MessageType.valuesById[100] = "DebugLinkDecision";
$root.MessageType.valuesById[101] = "DebugLinkGetState";
$root.MessageType.valuesById[102] = "DebugLinkState";
$root.MessageType.valuesById[103] = "DebugLinkStop";
$root.MessageType.valuesById[104] = "DebugLinkLog";
$root.MessageType.valuesById[110] = "DebugLinkMemoryRead";
$root.MessageType.valuesById[111] = "DebugLinkMemory";
$root.MessageType.valuesById[112] = "DebugLinkMemoryWrite";
$root.MessageType.valuesById[113] = "DebugLinkFlashErase";
$root.MessageType.valuesById[9001] = "DebugLinkLayout";
$root.MessageType.valuesById[9002] = "DebugLinkReseedRandom";
$root.MessageType.valuesById[9003] = "DebugLinkRecordScreen";
$root.MessageType.valuesById[9005] = "DebugLinkEraseSdCard";
$root.MessageType.valuesById[9006] = "DebugLinkWatchLayout";
$root.MessageType.valuesById[9007] = "DebugLinkResetDebugEvents";
$root.MessageType.valuesById[9008] = "DebugLinkOptigaSetSecMax";
$root.MessageType.valuesById[9009] = "DebugLinkGetGcInfo";
$root.MessageType.valuesById[9010] = "DebugLinkGcInfo";
$root.MessageType.valuesById[9011] = "DebugLinkGetPairingInfo";
$root.MessageType.valuesById[9012] = "DebugLinkPairingInfo";
$root.MessageType.valuesById[450] = "EthereumGetPublicKey";
$root.MessageType.valuesById[451] = "EthereumPublicKey";
$root.MessageType.valuesById[56] = "EthereumGetAddress";
$root.MessageType.valuesById[57] = "EthereumAddress";
$root.MessageType.valuesById[58] = "EthereumSignTx";
$root.MessageType.valuesById[452] = "EthereumSignTxEIP1559";
$root.MessageType.valuesById[59] = "EthereumTxRequest";
$root.MessageType.valuesById[60] = "EthereumTxAck";
$root.MessageType.valuesById[64] = "EthereumSignMessage";
$root.MessageType.valuesById[65] = "EthereumVerifyMessage";
$root.MessageType.valuesById[66] = "EthereumMessageSignature";
$root.MessageType.valuesById[464] = "EthereumSignTypedData";
$root.MessageType.valuesById[465] = "EthereumTypedDataStructRequest";
$root.MessageType.valuesById[466] = "EthereumTypedDataStructAck";
$root.MessageType.valuesById[467] = "EthereumTypedDataValueRequest";
$root.MessageType.valuesById[468] = "EthereumTypedDataValueAck";
$root.MessageType.valuesById[469] = "EthereumTypedDataSignature";
$root.MessageType.valuesById[470] = "EthereumSignTypedHash";
$root.MessageType.valuesById[67] = "NEMGetAddress";
$root.MessageType.valuesById[68] = "NEMAddress";
$root.MessageType.valuesById[69] = "NEMSignTx";
$root.MessageType.valuesById[70] = "NEMSignedTx";
$root.MessageType.valuesById[75] = "NEMDecryptMessage";
$root.MessageType.valuesById[76] = "NEMDecryptedMessage";
$root.MessageType.valuesById[150] = "TezosGetAddress";
$root.MessageType.valuesById[151] = "TezosAddress";
$root.MessageType.valuesById[152] = "TezosSignTx";
$root.MessageType.valuesById[153] = "TezosSignedTx";
$root.MessageType.valuesById[154] = "TezosGetPublicKey";
$root.MessageType.valuesById[155] = "TezosPublicKey";
$root.MessageType.valuesById[202] = "StellarSignTx";
$root.MessageType.valuesById[203] = "StellarTxOpRequest";
$root.MessageType.valuesById[207] = "StellarGetAddress";
$root.MessageType.valuesById[208] = "StellarAddress";
$root.MessageType.valuesById[210] = "StellarCreateAccountOp";
$root.MessageType.valuesById[211] = "StellarPaymentOp";
$root.MessageType.valuesById[212] = "StellarPathPaymentStrictReceiveOp";
$root.MessageType.valuesById[213] = "StellarManageSellOfferOp";
$root.MessageType.valuesById[214] = "StellarCreatePassiveSellOfferOp";
$root.MessageType.valuesById[215] = "StellarSetOptionsOp";
$root.MessageType.valuesById[216] = "StellarChangeTrustOp";
$root.MessageType.valuesById[217] = "StellarAllowTrustOp";
$root.MessageType.valuesById[218] = "StellarAccountMergeOp";
$root.MessageType.valuesById[220] = "StellarManageDataOp";
$root.MessageType.valuesById[221] = "StellarBumpSequenceOp";
$root.MessageType.valuesById[222] = "StellarManageBuyOfferOp";
$root.MessageType.valuesById[223] = "StellarPathPaymentStrictSendOp";
$root.MessageType.valuesById[225] = "StellarClaimClaimableBalanceOp";
$root.MessageType.valuesById[230] = "StellarSignedTx";
$root.MessageType.valuesById[305] = "CardanoGetPublicKey";
$root.MessageType.valuesById[306] = "CardanoPublicKey";
$root.MessageType.valuesById[307] = "CardanoGetAddress";
$root.MessageType.valuesById[308] = "CardanoAddress";
$root.MessageType.valuesById[313] = "CardanoTxItemAck";
$root.MessageType.valuesById[314] = "CardanoTxAuxiliaryDataSupplement";
$root.MessageType.valuesById[315] = "CardanoTxWitnessRequest";
$root.MessageType.valuesById[316] = "CardanoTxWitnessResponse";
$root.MessageType.valuesById[317] = "CardanoTxHostAck";
$root.MessageType.valuesById[318] = "CardanoTxBodyHash";
$root.MessageType.valuesById[319] = "CardanoSignTxFinished";
$root.MessageType.valuesById[320] = "CardanoSignTxInit";
$root.MessageType.valuesById[321] = "CardanoTxInput";
$root.MessageType.valuesById[322] = "CardanoTxOutput";
$root.MessageType.valuesById[323] = "CardanoAssetGroup";
$root.MessageType.valuesById[324] = "CardanoToken";
$root.MessageType.valuesById[325] = "CardanoTxCertificate";
$root.MessageType.valuesById[326] = "CardanoTxWithdrawal";
$root.MessageType.valuesById[327] = "CardanoTxAuxiliaryData";
$root.MessageType.valuesById[328] = "CardanoPoolOwner";
$root.MessageType.valuesById[329] = "CardanoPoolRelayParameters";
$root.MessageType.valuesById[330] = "CardanoGetNativeScriptHash";
$root.MessageType.valuesById[331] = "CardanoNativeScriptHash";
$root.MessageType.valuesById[332] = "CardanoTxMint";
$root.MessageType.valuesById[333] = "CardanoTxCollateralInput";
$root.MessageType.valuesById[334] = "CardanoTxRequiredSigner";
$root.MessageType.valuesById[335] = "CardanoTxInlineDatumChunk";
$root.MessageType.valuesById[336] = "CardanoTxReferenceScriptChunk";
$root.MessageType.valuesById[337] = "CardanoTxReferenceInput";
$root.MessageType.valuesById[338] = "CardanoSignMessageInit";
$root.MessageType.valuesById[339] = "CardanoMessageDataRequest";
$root.MessageType.valuesById[340] = "CardanoMessageDataResponse";
$root.MessageType.valuesById[341] = "CardanoMessageSignature";
$root.MessageType.valuesById[400] = "RippleGetAddress";
$root.MessageType.valuesById[401] = "RippleAddress";
$root.MessageType.valuesById[402] = "RippleSignTx";
$root.MessageType.valuesById[403] = "RippleSignedTx";
$root.MessageType.valuesById[600] = "EosGetPublicKey";
$root.MessageType.valuesById[601] = "EosPublicKey";
$root.MessageType.valuesById[602] = "EosSignTx";
$root.MessageType.valuesById[603] = "EosTxActionRequest";
$root.MessageType.valuesById[604] = "EosTxActionAck";
$root.MessageType.valuesById[605] = "EosSignedTx";
$root.MessageType.valuesById[900] = "SolanaGetPublicKey";
$root.MessageType.valuesById[901] = "SolanaPublicKey";
$root.MessageType.valuesById[902] = "SolanaGetAddress";
$root.MessageType.valuesById[903] = "SolanaAddress";
$root.MessageType.valuesById[904] = "SolanaSignTx";
$root.MessageType.valuesById[905] = "SolanaTxSignature";
$root.MessageType.valuesById[2100] = "EvoluGetNode";
$root.MessageType.valuesById[2101] = "EvoluNode";

// MultisigRedeemScriptType message
$root.MultisigRedeemScriptType = (function() {
    function MultisigRedeemScriptType(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    MultisigRedeemScriptType.create = function create(properties) {
        return new MultisigRedeemScriptType(properties);
    };

    MultisigRedeemScriptType.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.pubkeys != null && message.pubkeys.length) {
            for (var i = 0; i < message.pubkeys.length; ++i) {
                writer.uint32(10).string(message.pubkeys[i]);
            }
        }
        if (message.signatures != null && message.signatures.length) {
            for (var i = 0; i < message.signatures.length; ++i) {
                writer.uint32(18).bytes(message.signatures[i]);
            }
        }
        if (message.m != null && Object.hasOwnProperty.call(message, "m")) {
            writer.uint32(24).uint32(message.m);
        }
        if (message.nodes != null && message.nodes.length) {
            for (var i = 0; i < message.nodes.length; ++i) {
                writer.uint32(34).string(message.nodes[i]);
            }
        }
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(40).uint32(message.address_n[i]);
            }
        }
        if (message.pubkeys_order != null && Object.hasOwnProperty.call(message, "pubkeys_order")) {
            writer.uint32(48).int32(message.pubkeys_order);
        }
        return writer;
    };

    MultisigRedeemScriptType.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.MultisigRedeemScriptType();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.pubkeys && message.pubkeys.length)) message.pubkeys = [];
                message.pubkeys.push(reader.string());
                break;
            case 2:
                if (!(message.signatures && message.signatures.length)) message.signatures = [];
                message.signatures.push(reader.bytes());
                break;
            case 3:
                message.m = reader.uint32();
                break;
            case 4:
                if (!(message.nodes && message.nodes.length)) message.nodes = [];
                message.nodes.push(reader.string());
                break;
            case 5:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 6:
                message.pubkeys_order = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    MultisigRedeemScriptType.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.pubkeys && message.pubkeys.length) {
            object.pubkeys = [];
            for (var j = 0; j < message.pubkeys.length; ++j) {
                object.pubkeys[j] = message.pubkeys[j];
            }
        }
        if (message.signatures && message.signatures.length) {
            object.signatures = [];
            for (var j = 0; j < message.signatures.length; ++j) {
                object.signatures[j] = $util.base64.encode(message.signatures[j], 0, message.signatures[j].length);
            }
        }
        if (message.m != null && message.hasOwnProperty("m")) {
            object.m = message.m;
        }
        if (message.nodes && message.nodes.length) {
            object.nodes = [];
            for (var j = 0; j < message.nodes.length; ++j) {
                object.nodes[j] = message.nodes[j];
            }
        }
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.pubkeys_order != null && message.hasOwnProperty("pubkeys_order")) {
            object.pubkeys_order = message.pubkeys_order;
        }
        return object;
    };

    return MultisigRedeemScriptType;
})();

// GetPublicKey message
$root.GetPublicKey = (function() {
    function GetPublicKey(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    GetPublicKey.create = function create(properties) {
        return new GetPublicKey(properties);
    };

    GetPublicKey.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.ecdsa_curve_name != null && Object.hasOwnProperty.call(message, "ecdsa_curve_name")) {
            writer.uint32(18).string(message.ecdsa_curve_name);
        }
        if (message.show_display != null && Object.hasOwnProperty.call(message, "show_display")) {
            writer.uint32(24).bool(message.show_display);
        }
        if (message.coin_name != null && Object.hasOwnProperty.call(message, "coin_name")) {
            writer.uint32(34).string(message.coin_name);
        }
        if (message.script_type != null && Object.hasOwnProperty.call(message, "script_type")) {
            writer.uint32(40).int32(message.script_type);
        }
        if (message.ignore_xpub_magic != null && Object.hasOwnProperty.call(message, "ignore_xpub_magic")) {
            writer.uint32(48).bool(message.ignore_xpub_magic);
        }
        return writer;
    };

    GetPublicKey.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.GetPublicKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.ecdsa_curve_name = reader.string();
                break;
            case 3:
                message.show_display = reader.bool();
                break;
            case 4:
                message.coin_name = reader.string();
                break;
            case 5:
                message.script_type = reader.int32();
                break;
            case 6:
                message.ignore_xpub_magic = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    GetPublicKey.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.ecdsa_curve_name != null && message.hasOwnProperty("ecdsa_curve_name")) {
            object.ecdsa_curve_name = message.ecdsa_curve_name;
        }
        if (message.show_display != null && message.hasOwnProperty("show_display")) {
            object.show_display = message.show_display;
        }
        if (message.coin_name != null && message.hasOwnProperty("coin_name")) {
            object.coin_name = message.coin_name;
        }
        if (message.script_type != null && message.hasOwnProperty("script_type")) {
            object.script_type = message.script_type;
        }
        if (message.ignore_xpub_magic != null && message.hasOwnProperty("ignore_xpub_magic")) {
            object.ignore_xpub_magic = message.ignore_xpub_magic;
        }
        return object;
    };

    return GetPublicKey;
})();

// PublicKey message
$root.PublicKey = (function() {
    function PublicKey(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    PublicKey.create = function create(properties) {
        return new PublicKey(properties);
    };

    PublicKey.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.node != null && Object.hasOwnProperty.call(message, "node")) {
            writer.uint32(10).string(message.node);
        }
        if (message.xpub != null && Object.hasOwnProperty.call(message, "xpub")) {
            writer.uint32(18).string(message.xpub);
        }
        if (message.root_fingerprint != null && Object.hasOwnProperty.call(message, "root_fingerprint")) {
            writer.uint32(24).uint32(message.root_fingerprint);
        }
        if (message.descriptor != null && Object.hasOwnProperty.call(message, "descriptor")) {
            writer.uint32(34).string(message.descriptor);
        }
        return writer;
    };

    PublicKey.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.PublicKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.node = reader.string();
                break;
            case 2:
                message.xpub = reader.string();
                break;
            case 3:
                message.root_fingerprint = reader.uint32();
                break;
            case 4:
                message.descriptor = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    PublicKey.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.node != null && message.hasOwnProperty("node")) {
            object.node = message.node;
        }
        if (message.xpub != null && message.hasOwnProperty("xpub")) {
            object.xpub = message.xpub;
        }
        if (message.root_fingerprint != null && message.hasOwnProperty("root_fingerprint")) {
            object.root_fingerprint = message.root_fingerprint;
        }
        if (message.descriptor != null && message.hasOwnProperty("descriptor")) {
            object.descriptor = message.descriptor;
        }
        return object;
    };

    return PublicKey;
})();

// GetAddress message
$root.GetAddress = (function() {
    function GetAddress(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    GetAddress.create = function create(properties) {
        return new GetAddress(properties);
    };

    GetAddress.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.coin_name != null && Object.hasOwnProperty.call(message, "coin_name")) {
            writer.uint32(18).string(message.coin_name);
        }
        if (message.show_display != null && Object.hasOwnProperty.call(message, "show_display")) {
            writer.uint32(24).bool(message.show_display);
        }
        if (message.multisig != null && Object.hasOwnProperty.call(message, "multisig")) {
            writer.uint32(34).string(message.multisig);
        }
        if (message.script_type != null && Object.hasOwnProperty.call(message, "script_type")) {
            writer.uint32(40).int32(message.script_type);
        }
        if (message.ignore_xpub_magic != null && Object.hasOwnProperty.call(message, "ignore_xpub_magic")) {
            writer.uint32(48).bool(message.ignore_xpub_magic);
        }
        if (message.chunkify != null && Object.hasOwnProperty.call(message, "chunkify")) {
            writer.uint32(56).bool(message.chunkify);
        }
        return writer;
    };

    GetAddress.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.GetAddress();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.coin_name = reader.string();
                break;
            case 3:
                message.show_display = reader.bool();
                break;
            case 4:
                message.multisig = reader.string();
                break;
            case 5:
                message.script_type = reader.int32();
                break;
            case 6:
                message.ignore_xpub_magic = reader.bool();
                break;
            case 7:
                message.chunkify = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    GetAddress.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.coin_name != null && message.hasOwnProperty("coin_name")) {
            object.coin_name = message.coin_name;
        }
        if (message.show_display != null && message.hasOwnProperty("show_display")) {
            object.show_display = message.show_display;
        }
        if (message.multisig != null && message.hasOwnProperty("multisig")) {
            object.multisig = message.multisig;
        }
        if (message.script_type != null && message.hasOwnProperty("script_type")) {
            object.script_type = message.script_type;
        }
        if (message.ignore_xpub_magic != null && message.hasOwnProperty("ignore_xpub_magic")) {
            object.ignore_xpub_magic = message.ignore_xpub_magic;
        }
        if (message.chunkify != null && message.hasOwnProperty("chunkify")) {
            object.chunkify = message.chunkify;
        }
        return object;
    };

    return GetAddress;
})();

// Address message
$root.Address = (function() {
    function Address(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    Address.create = function create(properties) {
        return new Address(properties);
    };

    Address.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address != null && Object.hasOwnProperty.call(message, "address")) {
            writer.uint32(10).string(message.address);
        }
        if (message.mac != null && Object.hasOwnProperty.call(message, "mac")) {
            writer.uint32(18).bytes(message.mac);
        }
        return writer;
    };

    Address.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.Address();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.address = reader.string();
                break;
            case 2:
                message.mac = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Address.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address != null && message.hasOwnProperty("address")) {
            object.address = message.address;
        }
        if (message.mac != null && message.hasOwnProperty("mac")) {
            object.mac = $util.base64.encode(message.mac, 0, message.mac.length);
        }
        return object;
    };

    return Address;
})();

// GetOwnershipId message
$root.GetOwnershipId = (function() {
    function GetOwnershipId(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    GetOwnershipId.create = function create(properties) {
        return new GetOwnershipId(properties);
    };

    GetOwnershipId.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.coin_name != null && Object.hasOwnProperty.call(message, "coin_name")) {
            writer.uint32(18).string(message.coin_name);
        }
        if (message.multisig != null && Object.hasOwnProperty.call(message, "multisig")) {
            writer.uint32(26).string(message.multisig);
        }
        if (message.script_type != null && Object.hasOwnProperty.call(message, "script_type")) {
            writer.uint32(32).int32(message.script_type);
        }
        return writer;
    };

    GetOwnershipId.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.GetOwnershipId();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.coin_name = reader.string();
                break;
            case 3:
                message.multisig = reader.string();
                break;
            case 4:
                message.script_type = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    GetOwnershipId.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.coin_name != null && message.hasOwnProperty("coin_name")) {
            object.coin_name = message.coin_name;
        }
        if (message.multisig != null && message.hasOwnProperty("multisig")) {
            object.multisig = message.multisig;
        }
        if (message.script_type != null && message.hasOwnProperty("script_type")) {
            object.script_type = message.script_type;
        }
        return object;
    };

    return GetOwnershipId;
})();

// OwnershipId message
$root.OwnershipId = (function() {
    function OwnershipId(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    OwnershipId.create = function create(properties) {
        return new OwnershipId(properties);
    };

    OwnershipId.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.ownership_id != null && Object.hasOwnProperty.call(message, "ownership_id")) {
            writer.uint32(10).bytes(message.ownership_id);
        }
        return writer;
    };

    OwnershipId.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.OwnershipId();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ownership_id = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    OwnershipId.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.ownership_id != null && message.hasOwnProperty("ownership_id")) {
            object.ownership_id = $util.base64.encode(message.ownership_id, 0, message.ownership_id.length);
        }
        return object;
    };

    return OwnershipId;
})();

// SignMessage message
$root.SignMessage = (function() {
    function SignMessage(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    SignMessage.create = function create(properties) {
        return new SignMessage(properties);
    };

    SignMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.message != null && Object.hasOwnProperty.call(message, "message")) {
            writer.uint32(18).bytes(message.message);
        }
        if (message.coin_name != null && Object.hasOwnProperty.call(message, "coin_name")) {
            writer.uint32(26).string(message.coin_name);
        }
        if (message.script_type != null && Object.hasOwnProperty.call(message, "script_type")) {
            writer.uint32(32).int32(message.script_type);
        }
        if (message.no_script_type != null && Object.hasOwnProperty.call(message, "no_script_type")) {
            writer.uint32(40).bool(message.no_script_type);
        }
        if (message.chunkify != null && Object.hasOwnProperty.call(message, "chunkify")) {
            writer.uint32(48).bool(message.chunkify);
        }
        return writer;
    };

    SignMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.SignMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.message = reader.bytes();
                break;
            case 3:
                message.coin_name = reader.string();
                break;
            case 4:
                message.script_type = reader.int32();
                break;
            case 5:
                message.no_script_type = reader.bool();
                break;
            case 6:
                message.chunkify = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    SignMessage.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.message != null && message.hasOwnProperty("message")) {
            object.message = $util.base64.encode(message.message, 0, message.message.length);
        }
        if (message.coin_name != null && message.hasOwnProperty("coin_name")) {
            object.coin_name = message.coin_name;
        }
        if (message.script_type != null && message.hasOwnProperty("script_type")) {
            object.script_type = message.script_type;
        }
        if (message.no_script_type != null && message.hasOwnProperty("no_script_type")) {
            object.no_script_type = message.no_script_type;
        }
        if (message.chunkify != null && message.hasOwnProperty("chunkify")) {
            object.chunkify = message.chunkify;
        }
        return object;
    };

    return SignMessage;
})();

// MessageSignature message
$root.MessageSignature = (function() {
    function MessageSignature(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    MessageSignature.create = function create(properties) {
        return new MessageSignature(properties);
    };

    MessageSignature.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address != null && Object.hasOwnProperty.call(message, "address")) {
            writer.uint32(10).string(message.address);
        }
        if (message.signature != null && Object.hasOwnProperty.call(message, "signature")) {
            writer.uint32(18).bytes(message.signature);
        }
        return writer;
    };

    MessageSignature.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.MessageSignature();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.address = reader.string();
                break;
            case 2:
                message.signature = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    MessageSignature.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address != null && message.hasOwnProperty("address")) {
            object.address = message.address;
        }
        if (message.signature != null && message.hasOwnProperty("signature")) {
            object.signature = $util.base64.encode(message.signature, 0, message.signature.length);
        }
        return object;
    };

    return MessageSignature;
})();

// VerifyMessage message
$root.VerifyMessage = (function() {
    function VerifyMessage(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    VerifyMessage.create = function create(properties) {
        return new VerifyMessage(properties);
    };

    VerifyMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address != null && Object.hasOwnProperty.call(message, "address")) {
            writer.uint32(10).string(message.address);
        }
        if (message.signature != null && Object.hasOwnProperty.call(message, "signature")) {
            writer.uint32(18).bytes(message.signature);
        }
        if (message.message != null && Object.hasOwnProperty.call(message, "message")) {
            writer.uint32(26).bytes(message.message);
        }
        if (message.coin_name != null && Object.hasOwnProperty.call(message, "coin_name")) {
            writer.uint32(34).string(message.coin_name);
        }
        if (message.chunkify != null && Object.hasOwnProperty.call(message, "chunkify")) {
            writer.uint32(40).bool(message.chunkify);
        }
        return writer;
    };

    VerifyMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.VerifyMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.address = reader.string();
                break;
            case 2:
                message.signature = reader.bytes();
                break;
            case 3:
                message.message = reader.bytes();
                break;
            case 4:
                message.coin_name = reader.string();
                break;
            case 5:
                message.chunkify = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    VerifyMessage.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address != null && message.hasOwnProperty("address")) {
            object.address = message.address;
        }
        if (message.signature != null && message.hasOwnProperty("signature")) {
            object.signature = $util.base64.encode(message.signature, 0, message.signature.length);
        }
        if (message.message != null && message.hasOwnProperty("message")) {
            object.message = $util.base64.encode(message.message, 0, message.message.length);
        }
        if (message.coin_name != null && message.hasOwnProperty("coin_name")) {
            object.coin_name = message.coin_name;
        }
        if (message.chunkify != null && message.hasOwnProperty("chunkify")) {
            object.chunkify = message.chunkify;
        }
        return object;
    };

    return VerifyMessage;
})();

// SignTx message
$root.SignTx = (function() {
    function SignTx(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    SignTx.create = function create(properties) {
        return new SignTx(properties);
    };

    SignTx.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.outputs_count != null && Object.hasOwnProperty.call(message, "outputs_count")) {
            writer.uint32(8).uint32(message.outputs_count);
        }
        if (message.inputs_count != null && Object.hasOwnProperty.call(message, "inputs_count")) {
            writer.uint32(16).uint32(message.inputs_count);
        }
        if (message.coin_name != null && Object.hasOwnProperty.call(message, "coin_name")) {
            writer.uint32(26).string(message.coin_name);
        }
        if (message.version != null && Object.hasOwnProperty.call(message, "version")) {
            writer.uint32(32).uint32(message.version);
        }
        if (message.lock_time != null && Object.hasOwnProperty.call(message, "lock_time")) {
            writer.uint32(40).uint32(message.lock_time);
        }
        if (message.expiry != null && Object.hasOwnProperty.call(message, "expiry")) {
            writer.uint32(48).uint32(message.expiry);
        }
        if (message.overwintered != null && Object.hasOwnProperty.call(message, "overwintered")) {
            writer.uint32(56).bool(message.overwintered);
        }
        if (message.version_group_id != null && Object.hasOwnProperty.call(message, "version_group_id")) {
            writer.uint32(64).uint32(message.version_group_id);
        }
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp")) {
            writer.uint32(72).uint32(message.timestamp);
        }
        if (message.branch_id != null && Object.hasOwnProperty.call(message, "branch_id")) {
            writer.uint32(80).uint32(message.branch_id);
        }
        if (message.amount_unit != null && Object.hasOwnProperty.call(message, "amount_unit")) {
            writer.uint32(88).int32(message.amount_unit);
        }
        if (message.decred_staking_ticket != null && Object.hasOwnProperty.call(message, "decred_staking_ticket")) {
            writer.uint32(96).bool(message.decred_staking_ticket);
        }
        if (message.serialize != null && Object.hasOwnProperty.call(message, "serialize")) {
            writer.uint32(104).bool(message.serialize);
        }
        if (message.coinjoin_request != null && Object.hasOwnProperty.call(message, "coinjoin_request")) {
            writer.uint32(114).string(message.coinjoin_request);
        }
        if (message.chunkify != null && Object.hasOwnProperty.call(message, "chunkify")) {
            writer.uint32(120).bool(message.chunkify);
        }
        return writer;
    };

    SignTx.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.SignTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.outputs_count = reader.uint32();
                break;
            case 2:
                message.inputs_count = reader.uint32();
                break;
            case 3:
                message.coin_name = reader.string();
                break;
            case 4:
                message.version = reader.uint32();
                break;
            case 5:
                message.lock_time = reader.uint32();
                break;
            case 6:
                message.expiry = reader.uint32();
                break;
            case 7:
                message.overwintered = reader.bool();
                break;
            case 8:
                message.version_group_id = reader.uint32();
                break;
            case 9:
                message.timestamp = reader.uint32();
                break;
            case 10:
                message.branch_id = reader.uint32();
                break;
            case 11:
                message.amount_unit = reader.int32();
                break;
            case 12:
                message.decred_staking_ticket = reader.bool();
                break;
            case 13:
                message.serialize = reader.bool();
                break;
            case 14:
                message.coinjoin_request = reader.string();
                break;
            case 15:
                message.chunkify = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    SignTx.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.outputs_count != null && message.hasOwnProperty("outputs_count")) {
            object.outputs_count = message.outputs_count;
        }
        if (message.inputs_count != null && message.hasOwnProperty("inputs_count")) {
            object.inputs_count = message.inputs_count;
        }
        if (message.coin_name != null && message.hasOwnProperty("coin_name")) {
            object.coin_name = message.coin_name;
        }
        if (message.version != null && message.hasOwnProperty("version")) {
            object.version = message.version;
        }
        if (message.lock_time != null && message.hasOwnProperty("lock_time")) {
            object.lock_time = message.lock_time;
        }
        if (message.expiry != null && message.hasOwnProperty("expiry")) {
            object.expiry = message.expiry;
        }
        if (message.overwintered != null && message.hasOwnProperty("overwintered")) {
            object.overwintered = message.overwintered;
        }
        if (message.version_group_id != null && message.hasOwnProperty("version_group_id")) {
            object.version_group_id = message.version_group_id;
        }
        if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
            object.timestamp = message.timestamp;
        }
        if (message.branch_id != null && message.hasOwnProperty("branch_id")) {
            object.branch_id = message.branch_id;
        }
        if (message.amount_unit != null && message.hasOwnProperty("amount_unit")) {
            object.amount_unit = message.amount_unit;
        }
        if (message.decred_staking_ticket != null && message.hasOwnProperty("decred_staking_ticket")) {
            object.decred_staking_ticket = message.decred_staking_ticket;
        }
        if (message.serialize != null && message.hasOwnProperty("serialize")) {
            object.serialize = message.serialize;
        }
        if (message.coinjoin_request != null && message.hasOwnProperty("coinjoin_request")) {
            object.coinjoin_request = message.coinjoin_request;
        }
        if (message.chunkify != null && message.hasOwnProperty("chunkify")) {
            object.chunkify = message.chunkify;
        }
        return object;
    };

    return SignTx;
})();

// TxRequest message
$root.TxRequest = (function() {
    function TxRequest(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    TxRequest.create = function create(properties) {
        return new TxRequest(properties);
    };

    TxRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.request_type != null && Object.hasOwnProperty.call(message, "request_type")) {
            writer.uint32(8).int32(message.request_type);
        }
        if (message.details != null && Object.hasOwnProperty.call(message, "details")) {
            writer.uint32(18).string(message.details);
        }
        if (message.serialized != null && Object.hasOwnProperty.call(message, "serialized")) {
            writer.uint32(26).string(message.serialized);
        }
        return writer;
    };

    TxRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.TxRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.request_type = reader.int32();
                break;
            case 2:
                message.details = reader.string();
                break;
            case 3:
                message.serialized = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    TxRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.request_type != null && message.hasOwnProperty("request_type")) {
            object.request_type = message.request_type;
        }
        if (message.details != null && message.hasOwnProperty("details")) {
            object.details = message.details;
        }
        if (message.serialized != null && message.hasOwnProperty("serialized")) {
            object.serialized = message.serialized;
        }
        return object;
    };

    return TxRequest;
})();

// TxAck message
$root.TxAck = (function() {
    function TxAck(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    TxAck.create = function create(properties) {
        return new TxAck(properties);
    };

    TxAck.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.tx != null && Object.hasOwnProperty.call(message, "tx")) {
            writer.uint32(10).string(message.tx);
        }
        return writer;
    };

    TxAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.TxAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.tx = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    TxAck.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.tx != null && message.hasOwnProperty("tx")) {
            object.tx = message.tx;
        }
        return object;
    };

    return TxAck;
})();

// TxInput message
$root.TxInput = (function() {
    function TxInput(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    TxInput.create = function create(properties) {
        return new TxInput(properties);
    };

    TxInput.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.prev_hash != null && Object.hasOwnProperty.call(message, "prev_hash")) {
            writer.uint32(18).bytes(message.prev_hash);
        }
        if (message.prev_index != null && Object.hasOwnProperty.call(message, "prev_index")) {
            writer.uint32(24).uint32(message.prev_index);
        }
        if (message.script_sig != null && Object.hasOwnProperty.call(message, "script_sig")) {
            writer.uint32(34).bytes(message.script_sig);
        }
        if (message.sequence != null && Object.hasOwnProperty.call(message, "sequence")) {
            writer.uint32(40).uint32(message.sequence);
        }
        if (message.script_type != null && Object.hasOwnProperty.call(message, "script_type")) {
            writer.uint32(48).int32(message.script_type);
        }
        if (message.multisig != null && Object.hasOwnProperty.call(message, "multisig")) {
            writer.uint32(58).string(message.multisig);
        }
        if (message.amount != null && Object.hasOwnProperty.call(message, "amount")) {
            writer.uint32(64).uint64(message.amount);
        }
        if (message.decred_tree != null && Object.hasOwnProperty.call(message, "decred_tree")) {
            writer.uint32(72).uint32(message.decred_tree);
        }
        if (message.witness != null && Object.hasOwnProperty.call(message, "witness")) {
            writer.uint32(106).bytes(message.witness);
        }
        if (message.ownership_proof != null && Object.hasOwnProperty.call(message, "ownership_proof")) {
            writer.uint32(114).bytes(message.ownership_proof);
        }
        if (message.commitment_data != null && Object.hasOwnProperty.call(message, "commitment_data")) {
            writer.uint32(122).bytes(message.commitment_data);
        }
        if (message.orig_hash != null && Object.hasOwnProperty.call(message, "orig_hash")) {
            writer.uint32(130).bytes(message.orig_hash);
        }
        if (message.orig_index != null && Object.hasOwnProperty.call(message, "orig_index")) {
            writer.uint32(136).uint32(message.orig_index);
        }
        if (message.decred_staking_spend != null && Object.hasOwnProperty.call(message, "decred_staking_spend")) {
            writer.uint32(144).int32(message.decred_staking_spend);
        }
        if (message.script_pubkey != null && Object.hasOwnProperty.call(message, "script_pubkey")) {
            writer.uint32(154).bytes(message.script_pubkey);
        }
        if (message.coinjoin_flags != null && Object.hasOwnProperty.call(message, "coinjoin_flags")) {
            writer.uint32(160).uint32(message.coinjoin_flags);
        }
        return writer;
    };

    TxInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.TxInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.prev_hash = reader.bytes();
                break;
            case 3:
                message.prev_index = reader.uint32();
                break;
            case 4:
                message.script_sig = reader.bytes();
                break;
            case 5:
                message.sequence = reader.uint32();
                break;
            case 6:
                message.script_type = reader.int32();
                break;
            case 7:
                message.multisig = reader.string();
                break;
            case 8:
                message.amount = reader.uint64();
                break;
            case 9:
                message.decred_tree = reader.uint32();
                break;
            case 13:
                message.witness = reader.bytes();
                break;
            case 14:
                message.ownership_proof = reader.bytes();
                break;
            case 15:
                message.commitment_data = reader.bytes();
                break;
            case 16:
                message.orig_hash = reader.bytes();
                break;
            case 17:
                message.orig_index = reader.uint32();
                break;
            case 18:
                message.decred_staking_spend = reader.int32();
                break;
            case 19:
                message.script_pubkey = reader.bytes();
                break;
            case 20:
                message.coinjoin_flags = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    TxInput.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.prev_hash != null && message.hasOwnProperty("prev_hash")) {
            object.prev_hash = $util.base64.encode(message.prev_hash, 0, message.prev_hash.length);
        }
        if (message.prev_index != null && message.hasOwnProperty("prev_index")) {
            object.prev_index = message.prev_index;
        }
        if (message.script_sig != null && message.hasOwnProperty("script_sig")) {
            object.script_sig = $util.base64.encode(message.script_sig, 0, message.script_sig.length);
        }
        if (message.sequence != null && message.hasOwnProperty("sequence")) {
            object.sequence = message.sequence;
        }
        if (message.script_type != null && message.hasOwnProperty("script_type")) {
            object.script_type = message.script_type;
        }
        if (message.multisig != null && message.hasOwnProperty("multisig")) {
            object.multisig = message.multisig;
        }
        if (message.amount != null && message.hasOwnProperty("amount")) {
            object.amount = message.amount;
        }
        if (message.decred_tree != null && message.hasOwnProperty("decred_tree")) {
            object.decred_tree = message.decred_tree;
        }
        if (message.witness != null && message.hasOwnProperty("witness")) {
            object.witness = $util.base64.encode(message.witness, 0, message.witness.length);
        }
        if (message.ownership_proof != null && message.hasOwnProperty("ownership_proof")) {
            object.ownership_proof = $util.base64.encode(message.ownership_proof, 0, message.ownership_proof.length);
        }
        if (message.commitment_data != null && message.hasOwnProperty("commitment_data")) {
            object.commitment_data = $util.base64.encode(message.commitment_data, 0, message.commitment_data.length);
        }
        if (message.orig_hash != null && message.hasOwnProperty("orig_hash")) {
            object.orig_hash = $util.base64.encode(message.orig_hash, 0, message.orig_hash.length);
        }
        if (message.orig_index != null && message.hasOwnProperty("orig_index")) {
            object.orig_index = message.orig_index;
        }
        if (message.decred_staking_spend != null && message.hasOwnProperty("decred_staking_spend")) {
            object.decred_staking_spend = message.decred_staking_spend;
        }
        if (message.script_pubkey != null && message.hasOwnProperty("script_pubkey")) {
            object.script_pubkey = $util.base64.encode(message.script_pubkey, 0, message.script_pubkey.length);
        }
        if (message.coinjoin_flags != null && message.hasOwnProperty("coinjoin_flags")) {
            object.coinjoin_flags = message.coinjoin_flags;
        }
        return object;
    };

    return TxInput;
})();

// TxOutput message
$root.TxOutput = (function() {
    function TxOutput(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    TxOutput.create = function create(properties) {
        return new TxOutput(properties);
    };

    TxOutput.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address != null && Object.hasOwnProperty.call(message, "address")) {
            writer.uint32(10).string(message.address);
        }
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(16).uint32(message.address_n[i]);
            }
        }
        if (message.amount != null && Object.hasOwnProperty.call(message, "amount")) {
            writer.uint32(24).uint64(message.amount);
        }
        if (message.script_type != null && Object.hasOwnProperty.call(message, "script_type")) {
            writer.uint32(32).int32(message.script_type);
        }
        if (message.multisig != null && Object.hasOwnProperty.call(message, "multisig")) {
            writer.uint32(42).string(message.multisig);
        }
        if (message.op_return_data != null && Object.hasOwnProperty.call(message, "op_return_data")) {
            writer.uint32(50).bytes(message.op_return_data);
        }
        if (message.orig_hash != null && Object.hasOwnProperty.call(message, "orig_hash")) {
            writer.uint32(82).bytes(message.orig_hash);
        }
        if (message.orig_index != null && Object.hasOwnProperty.call(message, "orig_index")) {
            writer.uint32(88).uint32(message.orig_index);
        }
        if (message.payment_req_index != null && Object.hasOwnProperty.call(message, "payment_req_index")) {
            writer.uint32(96).uint32(message.payment_req_index);
        }
        return writer;
    };

    TxOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.TxOutput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.address = reader.string();
                break;
            case 2:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 3:
                message.amount = reader.uint64();
                break;
            case 4:
                message.script_type = reader.int32();
                break;
            case 5:
                message.multisig = reader.string();
                break;
            case 6:
                message.op_return_data = reader.bytes();
                break;
            case 10:
                message.orig_hash = reader.bytes();
                break;
            case 11:
                message.orig_index = reader.uint32();
                break;
            case 12:
                message.payment_req_index = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    TxOutput.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address != null && message.hasOwnProperty("address")) {
            object.address = message.address;
        }
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.amount != null && message.hasOwnProperty("amount")) {
            object.amount = message.amount;
        }
        if (message.script_type != null && message.hasOwnProperty("script_type")) {
            object.script_type = message.script_type;
        }
        if (message.multisig != null && message.hasOwnProperty("multisig")) {
            object.multisig = message.multisig;
        }
        if (message.op_return_data != null && message.hasOwnProperty("op_return_data")) {
            object.op_return_data = $util.base64.encode(message.op_return_data, 0, message.op_return_data.length);
        }
        if (message.orig_hash != null && message.hasOwnProperty("orig_hash")) {
            object.orig_hash = $util.base64.encode(message.orig_hash, 0, message.orig_hash.length);
        }
        if (message.orig_index != null && message.hasOwnProperty("orig_index")) {
            object.orig_index = message.orig_index;
        }
        if (message.payment_req_index != null && message.hasOwnProperty("payment_req_index")) {
            object.payment_req_index = message.payment_req_index;
        }
        return object;
    };

    return TxOutput;
})();

// PrevTx message
$root.PrevTx = (function() {
    function PrevTx(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    PrevTx.create = function create(properties) {
        return new PrevTx(properties);
    };

    PrevTx.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.version != null && Object.hasOwnProperty.call(message, "version")) {
            writer.uint32(8).uint32(message.version);
        }
        if (message.lock_time != null && Object.hasOwnProperty.call(message, "lock_time")) {
            writer.uint32(32).uint32(message.lock_time);
        }
        if (message.inputs_count != null && Object.hasOwnProperty.call(message, "inputs_count")) {
            writer.uint32(48).uint32(message.inputs_count);
        }
        if (message.outputs_count != null && Object.hasOwnProperty.call(message, "outputs_count")) {
            writer.uint32(56).uint32(message.outputs_count);
        }
        if (message.extra_data_len != null && Object.hasOwnProperty.call(message, "extra_data_len")) {
            writer.uint32(72).uint32(message.extra_data_len);
        }
        if (message.expiry != null && Object.hasOwnProperty.call(message, "expiry")) {
            writer.uint32(80).uint32(message.expiry);
        }
        if (message.version_group_id != null && Object.hasOwnProperty.call(message, "version_group_id")) {
            writer.uint32(96).uint32(message.version_group_id);
        }
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp")) {
            writer.uint32(104).uint32(message.timestamp);
        }
        if (message.branch_id != null && Object.hasOwnProperty.call(message, "branch_id")) {
            writer.uint32(112).uint32(message.branch_id);
        }
        return writer;
    };

    PrevTx.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.PrevTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.version = reader.uint32();
                break;
            case 4:
                message.lock_time = reader.uint32();
                break;
            case 6:
                message.inputs_count = reader.uint32();
                break;
            case 7:
                message.outputs_count = reader.uint32();
                break;
            case 9:
                message.extra_data_len = reader.uint32();
                break;
            case 10:
                message.expiry = reader.uint32();
                break;
            case 12:
                message.version_group_id = reader.uint32();
                break;
            case 13:
                message.timestamp = reader.uint32();
                break;
            case 14:
                message.branch_id = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    PrevTx.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.version != null && message.hasOwnProperty("version")) {
            object.version = message.version;
        }
        if (message.lock_time != null && message.hasOwnProperty("lock_time")) {
            object.lock_time = message.lock_time;
        }
        if (message.inputs_count != null && message.hasOwnProperty("inputs_count")) {
            object.inputs_count = message.inputs_count;
        }
        if (message.outputs_count != null && message.hasOwnProperty("outputs_count")) {
            object.outputs_count = message.outputs_count;
        }
        if (message.extra_data_len != null && message.hasOwnProperty("extra_data_len")) {
            object.extra_data_len = message.extra_data_len;
        }
        if (message.expiry != null && message.hasOwnProperty("expiry")) {
            object.expiry = message.expiry;
        }
        if (message.version_group_id != null && message.hasOwnProperty("version_group_id")) {
            object.version_group_id = message.version_group_id;
        }
        if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
            object.timestamp = message.timestamp;
        }
        if (message.branch_id != null && message.hasOwnProperty("branch_id")) {
            object.branch_id = message.branch_id;
        }
        return object;
    };

    return PrevTx;
})();

// PrevInput message
$root.PrevInput = (function() {
    function PrevInput(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    PrevInput.create = function create(properties) {
        return new PrevInput(properties);
    };

    PrevInput.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.prev_hash != null && Object.hasOwnProperty.call(message, "prev_hash")) {
            writer.uint32(18).bytes(message.prev_hash);
        }
        if (message.prev_index != null && Object.hasOwnProperty.call(message, "prev_index")) {
            writer.uint32(24).uint32(message.prev_index);
        }
        if (message.script_sig != null && Object.hasOwnProperty.call(message, "script_sig")) {
            writer.uint32(34).bytes(message.script_sig);
        }
        if (message.sequence != null && Object.hasOwnProperty.call(message, "sequence")) {
            writer.uint32(40).uint32(message.sequence);
        }
        if (message.decred_tree != null && Object.hasOwnProperty.call(message, "decred_tree")) {
            writer.uint32(72).uint32(message.decred_tree);
        }
        return writer;
    };

    PrevInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.PrevInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                message.prev_hash = reader.bytes();
                break;
            case 3:
                message.prev_index = reader.uint32();
                break;
            case 4:
                message.script_sig = reader.bytes();
                break;
            case 5:
                message.sequence = reader.uint32();
                break;
            case 9:
                message.decred_tree = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    PrevInput.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.prev_hash != null && message.hasOwnProperty("prev_hash")) {
            object.prev_hash = $util.base64.encode(message.prev_hash, 0, message.prev_hash.length);
        }
        if (message.prev_index != null && message.hasOwnProperty("prev_index")) {
            object.prev_index = message.prev_index;
        }
        if (message.script_sig != null && message.hasOwnProperty("script_sig")) {
            object.script_sig = $util.base64.encode(message.script_sig, 0, message.script_sig.length);
        }
        if (message.sequence != null && message.hasOwnProperty("sequence")) {
            object.sequence = message.sequence;
        }
        if (message.decred_tree != null && message.hasOwnProperty("decred_tree")) {
            object.decred_tree = message.decred_tree;
        }
        return object;
    };

    return PrevInput;
})();

// PrevOutput message
$root.PrevOutput = (function() {
    function PrevOutput(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    PrevOutput.create = function create(properties) {
        return new PrevOutput(properties);
    };

    PrevOutput.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.amount != null && Object.hasOwnProperty.call(message, "amount")) {
            writer.uint32(8).uint64(message.amount);
        }
        if (message.script_pubkey != null && Object.hasOwnProperty.call(message, "script_pubkey")) {
            writer.uint32(18).bytes(message.script_pubkey);
        }
        if (message.decred_script_version != null && Object.hasOwnProperty.call(message, "decred_script_version")) {
            writer.uint32(24).uint32(message.decred_script_version);
        }
        return writer;
    };

    PrevOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.PrevOutput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.amount = reader.uint64();
                break;
            case 2:
                message.script_pubkey = reader.bytes();
                break;
            case 3:
                message.decred_script_version = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    PrevOutput.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.amount != null && message.hasOwnProperty("amount")) {
            object.amount = message.amount;
        }
        if (message.script_pubkey != null && message.hasOwnProperty("script_pubkey")) {
            object.script_pubkey = $util.base64.encode(message.script_pubkey, 0, message.script_pubkey.length);
        }
        if (message.decred_script_version != null && message.hasOwnProperty("decred_script_version")) {
            object.decred_script_version = message.decred_script_version;
        }
        return object;
    };

    return PrevOutput;
})();

// TxAckInput message
$root.TxAckInput = (function() {
    function TxAckInput(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    TxAckInput.create = function create(properties) {
        return new TxAckInput(properties);
    };

    TxAckInput.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.tx != null && Object.hasOwnProperty.call(message, "tx")) {
            writer.uint32(10).string(message.tx);
        }
        return writer;
    };

    TxAckInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.TxAckInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.tx = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    TxAckInput.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.tx != null && message.hasOwnProperty("tx")) {
            object.tx = message.tx;
        }
        return object;
    };

    return TxAckInput;
})();

// TxAckOutput message
$root.TxAckOutput = (function() {
    function TxAckOutput(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    TxAckOutput.create = function create(properties) {
        return new TxAckOutput(properties);
    };

    TxAckOutput.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.tx != null && Object.hasOwnProperty.call(message, "tx")) {
            writer.uint32(10).string(message.tx);
        }
        return writer;
    };

    TxAckOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.TxAckOutput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.tx = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    TxAckOutput.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.tx != null && message.hasOwnProperty("tx")) {
            object.tx = message.tx;
        }
        return object;
    };

    return TxAckOutput;
})();

// TxAckPrevMeta message
$root.TxAckPrevMeta = (function() {
    function TxAckPrevMeta(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    TxAckPrevMeta.create = function create(properties) {
        return new TxAckPrevMeta(properties);
    };

    TxAckPrevMeta.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.tx != null && Object.hasOwnProperty.call(message, "tx")) {
            writer.uint32(10).string(message.tx);
        }
        return writer;
    };

    TxAckPrevMeta.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.TxAckPrevMeta();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.tx = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    TxAckPrevMeta.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.tx != null && message.hasOwnProperty("tx")) {
            object.tx = message.tx;
        }
        return object;
    };

    return TxAckPrevMeta;
})();

// TxAckPrevInput message
$root.TxAckPrevInput = (function() {
    function TxAckPrevInput(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    TxAckPrevInput.create = function create(properties) {
        return new TxAckPrevInput(properties);
    };

    TxAckPrevInput.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.tx != null && Object.hasOwnProperty.call(message, "tx")) {
            writer.uint32(10).string(message.tx);
        }
        return writer;
    };

    TxAckPrevInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.TxAckPrevInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.tx = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    TxAckPrevInput.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.tx != null && message.hasOwnProperty("tx")) {
            object.tx = message.tx;
        }
        return object;
    };

    return TxAckPrevInput;
})();

// TxAckPrevOutput message
$root.TxAckPrevOutput = (function() {
    function TxAckPrevOutput(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    TxAckPrevOutput.create = function create(properties) {
        return new TxAckPrevOutput(properties);
    };

    TxAckPrevOutput.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.tx != null && Object.hasOwnProperty.call(message, "tx")) {
            writer.uint32(10).string(message.tx);
        }
        return writer;
    };

    TxAckPrevOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.TxAckPrevOutput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.tx = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    TxAckPrevOutput.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.tx != null && message.hasOwnProperty("tx")) {
            object.tx = message.tx;
        }
        return object;
    };

    return TxAckPrevOutput;
})();

// TxAckPrevExtraData message
$root.TxAckPrevExtraData = (function() {
    function TxAckPrevExtraData(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    TxAckPrevExtraData.create = function create(properties) {
        return new TxAckPrevExtraData(properties);
    };

    TxAckPrevExtraData.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.tx != null && Object.hasOwnProperty.call(message, "tx")) {
            writer.uint32(10).string(message.tx);
        }
        return writer;
    };

    TxAckPrevExtraData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.TxAckPrevExtraData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.tx = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    TxAckPrevExtraData.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.tx != null && message.hasOwnProperty("tx")) {
            object.tx = message.tx;
        }
        return object;
    };

    return TxAckPrevExtraData;
})();

// GetOwnershipProof message
$root.GetOwnershipProof = (function() {
    function GetOwnershipProof(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    GetOwnershipProof.create = function create(properties) {
        return new GetOwnershipProof(properties);
    };

    GetOwnershipProof.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.coin_name != null && Object.hasOwnProperty.call(message, "coin_name")) {
            writer.uint32(18).string(message.coin_name);
        }
        if (message.script_type != null && Object.hasOwnProperty.call(message, "script_type")) {
            writer.uint32(24).int32(message.script_type);
        }
        if (message.multisig != null && Object.hasOwnProperty.call(message, "multisig")) {
            writer.uint32(34).string(message.multisig);
        }
        if (message.user_confirmation != null && Object.hasOwnProperty.call(message, "user_confirmation")) {
            writer.uint32(40).bool(message.user_confirmation);
        }
        if (message.ownership_ids != null && message.ownership_ids.length) {
            for (var i = 0; i < message.ownership_ids.length; ++i) {
                writer.uint32(50).bytes(message.ownership_ids[i]);
            }
        }
        if (message.commitment_data != null && Object.hasOwnProperty.call(message, "commitment_data")) {
            writer.uint32(58).bytes(message.commitment_data);
        }
        return writer;
    };

    GetOwnershipProof.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.GetOwnershipProof();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.coin_name = reader.string();
                break;
            case 3:
                message.script_type = reader.int32();
                break;
            case 4:
                message.multisig = reader.string();
                break;
            case 5:
                message.user_confirmation = reader.bool();
                break;
            case 6:
                if (!(message.ownership_ids && message.ownership_ids.length)) message.ownership_ids = [];
                message.ownership_ids.push(reader.bytes());
                break;
            case 7:
                message.commitment_data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    GetOwnershipProof.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.coin_name != null && message.hasOwnProperty("coin_name")) {
            object.coin_name = message.coin_name;
        }
        if (message.script_type != null && message.hasOwnProperty("script_type")) {
            object.script_type = message.script_type;
        }
        if (message.multisig != null && message.hasOwnProperty("multisig")) {
            object.multisig = message.multisig;
        }
        if (message.user_confirmation != null && message.hasOwnProperty("user_confirmation")) {
            object.user_confirmation = message.user_confirmation;
        }
        if (message.ownership_ids && message.ownership_ids.length) {
            object.ownership_ids = [];
            for (var j = 0; j < message.ownership_ids.length; ++j) {
                object.ownership_ids[j] = $util.base64.encode(message.ownership_ids[j], 0, message.ownership_ids[j].length);
            }
        }
        if (message.commitment_data != null && message.hasOwnProperty("commitment_data")) {
            object.commitment_data = $util.base64.encode(message.commitment_data, 0, message.commitment_data.length);
        }
        return object;
    };

    return GetOwnershipProof;
})();

// OwnershipProof message
$root.OwnershipProof = (function() {
    function OwnershipProof(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    OwnershipProof.create = function create(properties) {
        return new OwnershipProof(properties);
    };

    OwnershipProof.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.ownership_proof != null && Object.hasOwnProperty.call(message, "ownership_proof")) {
            writer.uint32(10).bytes(message.ownership_proof);
        }
        if (message.signature != null && Object.hasOwnProperty.call(message, "signature")) {
            writer.uint32(18).bytes(message.signature);
        }
        return writer;
    };

    OwnershipProof.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.OwnershipProof();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ownership_proof = reader.bytes();
                break;
            case 2:
                message.signature = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    OwnershipProof.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.ownership_proof != null && message.hasOwnProperty("ownership_proof")) {
            object.ownership_proof = $util.base64.encode(message.ownership_proof, 0, message.ownership_proof.length);
        }
        if (message.signature != null && message.hasOwnProperty("signature")) {
            object.signature = $util.base64.encode(message.signature, 0, message.signature.length);
        }
        return object;
    };

    return OwnershipProof;
})();

// AuthorizeCoinJoin message
$root.AuthorizeCoinJoin = (function() {
    function AuthorizeCoinJoin(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    AuthorizeCoinJoin.create = function create(properties) {
        return new AuthorizeCoinJoin(properties);
    };

    AuthorizeCoinJoin.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.coordinator != null && Object.hasOwnProperty.call(message, "coordinator")) {
            writer.uint32(10).string(message.coordinator);
        }
        if (message.max_rounds != null && Object.hasOwnProperty.call(message, "max_rounds")) {
            writer.uint32(16).uint64(message.max_rounds);
        }
        if (message.max_coordinator_fee_rate != null && Object.hasOwnProperty.call(message, "max_coordinator_fee_rate")) {
            writer.uint32(24).uint32(message.max_coordinator_fee_rate);
        }
        if (message.max_fee_per_kvbyte != null && Object.hasOwnProperty.call(message, "max_fee_per_kvbyte")) {
            writer.uint32(32).uint32(message.max_fee_per_kvbyte);
        }
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(40).uint32(message.address_n[i]);
            }
        }
        if (message.coin_name != null && Object.hasOwnProperty.call(message, "coin_name")) {
            writer.uint32(50).string(message.coin_name);
        }
        if (message.script_type != null && Object.hasOwnProperty.call(message, "script_type")) {
            writer.uint32(56).int32(message.script_type);
        }
        if (message.amount_unit != null && Object.hasOwnProperty.call(message, "amount_unit")) {
            writer.uint32(64).int32(message.amount_unit);
        }
        return writer;
    };

    AuthorizeCoinJoin.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.AuthorizeCoinJoin();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.coordinator = reader.string();
                break;
            case 2:
                message.max_rounds = reader.uint64();
                break;
            case 3:
                message.max_coordinator_fee_rate = reader.uint32();
                break;
            case 4:
                message.max_fee_per_kvbyte = reader.uint32();
                break;
            case 5:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 6:
                message.coin_name = reader.string();
                break;
            case 7:
                message.script_type = reader.int32();
                break;
            case 8:
                message.amount_unit = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    AuthorizeCoinJoin.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.coordinator != null && message.hasOwnProperty("coordinator")) {
            object.coordinator = message.coordinator;
        }
        if (message.max_rounds != null && message.hasOwnProperty("max_rounds")) {
            object.max_rounds = message.max_rounds;
        }
        if (message.max_coordinator_fee_rate != null && message.hasOwnProperty("max_coordinator_fee_rate")) {
            object.max_coordinator_fee_rate = message.max_coordinator_fee_rate;
        }
        if (message.max_fee_per_kvbyte != null && message.hasOwnProperty("max_fee_per_kvbyte")) {
            object.max_fee_per_kvbyte = message.max_fee_per_kvbyte;
        }
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.coin_name != null && message.hasOwnProperty("coin_name")) {
            object.coin_name = message.coin_name;
        }
        if (message.script_type != null && message.hasOwnProperty("script_type")) {
            object.script_type = message.script_type;
        }
        if (message.amount_unit != null && message.hasOwnProperty("amount_unit")) {
            object.amount_unit = message.amount_unit;
        }
        return object;
    };

    return AuthorizeCoinJoin;
})();

// BleUnpair message
$root.BleUnpair = (function() {
    function BleUnpair(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    BleUnpair.create = function create(properties) {
        return new BleUnpair(properties);
    };

    BleUnpair.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.all != null && Object.hasOwnProperty.call(message, "all")) {
            writer.uint32(8).bool(message.all);
        }
        if (message.addr != null && Object.hasOwnProperty.call(message, "addr")) {
            writer.uint32(18).bytes(message.addr);
        }
        return writer;
    };

    BleUnpair.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.BleUnpair();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.all = reader.bool();
                break;
            case 2:
                message.addr = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    BleUnpair.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.all != null && message.hasOwnProperty("all")) {
            object.all = message.all;
        }
        if (message.addr != null && message.hasOwnProperty("addr")) {
            object.addr = $util.base64.encode(message.addr, 0, message.addr.length);
        }
        return object;
    };

    return BleUnpair;
})();

// FirmwareErase message
$root.FirmwareErase = (function() {
    function FirmwareErase(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    FirmwareErase.create = function create(properties) {
        return new FirmwareErase(properties);
    };

    FirmwareErase.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.length != null && Object.hasOwnProperty.call(message, "length")) {
            writer.uint32(8).uint32(message.length);
        }
        return writer;
    };

    FirmwareErase.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.FirmwareErase();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.length = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    FirmwareErase.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.length != null && message.hasOwnProperty("length")) {
            object.length = message.length;
        }
        return object;
    };

    return FirmwareErase;
})();

// FirmwareRequest message
$root.FirmwareRequest = (function() {
    function FirmwareRequest(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    FirmwareRequest.create = function create(properties) {
        return new FirmwareRequest(properties);
    };

    FirmwareRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.offset != null && Object.hasOwnProperty.call(message, "offset")) {
            writer.uint32(8).uint32(message.offset);
        }
        if (message.length != null && Object.hasOwnProperty.call(message, "length")) {
            writer.uint32(16).uint32(message.length);
        }
        return writer;
    };

    FirmwareRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.FirmwareRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.offset = reader.uint32();
                break;
            case 2:
                message.length = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    FirmwareRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.offset != null && message.hasOwnProperty("offset")) {
            object.offset = message.offset;
        }
        if (message.length != null && message.hasOwnProperty("length")) {
            object.length = message.length;
        }
        return object;
    };

    return FirmwareRequest;
})();

// FirmwareUpload message
$root.FirmwareUpload = (function() {
    function FirmwareUpload(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    FirmwareUpload.create = function create(properties) {
        return new FirmwareUpload(properties);
    };

    FirmwareUpload.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.payload != null && Object.hasOwnProperty.call(message, "payload")) {
            writer.uint32(10).bytes(message.payload);
        }
        if (message.hash != null && Object.hasOwnProperty.call(message, "hash")) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    };

    FirmwareUpload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.FirmwareUpload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.payload = reader.bytes();
                break;
            case 2:
                message.hash = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    FirmwareUpload.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.payload != null && message.hasOwnProperty("payload")) {
            object.payload = $util.base64.encode(message.payload, 0, message.payload.length);
        }
        if (message.hash != null && message.hasOwnProperty("hash")) {
            object.hash = $util.base64.encode(message.hash, 0, message.hash.length);
        }
        return object;
    };

    return FirmwareUpload;
})();

// ProdTestT1 message
$root.ProdTestT1 = (function() {
    function ProdTestT1(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    ProdTestT1.create = function create(properties) {
        return new ProdTestT1(properties);
    };

    ProdTestT1.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.payload != null && Object.hasOwnProperty.call(message, "payload")) {
            writer.uint32(10).bytes(message.payload);
        }
        return writer;
    };

    ProdTestT1.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.ProdTestT1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.payload = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ProdTestT1.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.payload != null && message.hasOwnProperty("payload")) {
            object.payload = $util.base64.encode(message.payload, 0, message.payload.length);
        }
        return object;
    };

    return ProdTestT1;
})();

// CardanoBlockchainPointerType message
$root.CardanoBlockchainPointerType = (function() {
    function CardanoBlockchainPointerType(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoBlockchainPointerType.create = function create(properties) {
        return new CardanoBlockchainPointerType(properties);
    };

    CardanoBlockchainPointerType.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.block_index != null && Object.hasOwnProperty.call(message, "block_index")) {
            writer.uint32(8).uint32(message.block_index);
        }
        if (message.tx_index != null && Object.hasOwnProperty.call(message, "tx_index")) {
            writer.uint32(16).uint32(message.tx_index);
        }
        if (message.certificate_index != null && Object.hasOwnProperty.call(message, "certificate_index")) {
            writer.uint32(24).uint32(message.certificate_index);
        }
        return writer;
    };

    CardanoBlockchainPointerType.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoBlockchainPointerType();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.block_index = reader.uint32();
                break;
            case 2:
                message.tx_index = reader.uint32();
                break;
            case 3:
                message.certificate_index = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoBlockchainPointerType.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.block_index != null && message.hasOwnProperty("block_index")) {
            object.block_index = message.block_index;
        }
        if (message.tx_index != null && message.hasOwnProperty("tx_index")) {
            object.tx_index = message.tx_index;
        }
        if (message.certificate_index != null && message.hasOwnProperty("certificate_index")) {
            object.certificate_index = message.certificate_index;
        }
        return object;
    };

    return CardanoBlockchainPointerType;
})();

// CardanoNativeScript message
$root.CardanoNativeScript = (function() {
    function CardanoNativeScript(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoNativeScript.create = function create(properties) {
        return new CardanoNativeScript(properties);
    };

    CardanoNativeScript.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type")) {
            writer.uint32(8).int32(message.type);
        }
        if (message.scripts != null && message.scripts.length) {
            for (var i = 0; i < message.scripts.length; ++i) {
                writer.uint32(18).string(message.scripts[i]);
            }
        }
        if (message.key_hash != null && Object.hasOwnProperty.call(message, "key_hash")) {
            writer.uint32(26).bytes(message.key_hash);
        }
        if (message.key_path != null && message.key_path.length) {
            for (var i = 0; i < message.key_path.length; ++i) {
                writer.uint32(32).uint32(message.key_path[i]);
            }
        }
        if (message.required_signatures_count != null && Object.hasOwnProperty.call(message, "required_signatures_count")) {
            writer.uint32(40).uint32(message.required_signatures_count);
        }
        if (message.invalid_before != null && Object.hasOwnProperty.call(message, "invalid_before")) {
            writer.uint32(48).uint64(message.invalid_before);
        }
        if (message.invalid_hereafter != null && Object.hasOwnProperty.call(message, "invalid_hereafter")) {
            writer.uint32(56).uint64(message.invalid_hereafter);
        }
        return writer;
    };

    CardanoNativeScript.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoNativeScript();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                if (!(message.scripts && message.scripts.length)) message.scripts = [];
                message.scripts.push(reader.string());
                break;
            case 3:
                message.key_hash = reader.bytes();
                break;
            case 4:
                if (!(message.key_path && message.key_path.length)) message.key_path = [];
                message.key_path.push(reader.uint32());
                break;
            case 5:
                message.required_signatures_count = reader.uint32();
                break;
            case 6:
                message.invalid_before = reader.uint64();
                break;
            case 7:
                message.invalid_hereafter = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoNativeScript.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.type != null && message.hasOwnProperty("type")) {
            object.type = message.type;
        }
        if (message.scripts && message.scripts.length) {
            object.scripts = [];
            for (var j = 0; j < message.scripts.length; ++j) {
                object.scripts[j] = message.scripts[j];
            }
        }
        if (message.key_hash != null && message.hasOwnProperty("key_hash")) {
            object.key_hash = $util.base64.encode(message.key_hash, 0, message.key_hash.length);
        }
        if (message.key_path && message.key_path.length) {
            object.key_path = [];
            for (var j = 0; j < message.key_path.length; ++j) {
                object.key_path[j] = message.key_path[j];
            }
        }
        if (message.required_signatures_count != null && message.hasOwnProperty("required_signatures_count")) {
            object.required_signatures_count = message.required_signatures_count;
        }
        if (message.invalid_before != null && message.hasOwnProperty("invalid_before")) {
            object.invalid_before = message.invalid_before;
        }
        if (message.invalid_hereafter != null && message.hasOwnProperty("invalid_hereafter")) {
            object.invalid_hereafter = message.invalid_hereafter;
        }
        return object;
    };

    return CardanoNativeScript;
})();

// CardanoGetNativeScriptHash message
$root.CardanoGetNativeScriptHash = (function() {
    function CardanoGetNativeScriptHash(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoGetNativeScriptHash.create = function create(properties) {
        return new CardanoGetNativeScriptHash(properties);
    };

    CardanoGetNativeScriptHash.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.script != null && Object.hasOwnProperty.call(message, "script")) {
            writer.uint32(10).string(message.script);
        }
        if (message.display_format != null && Object.hasOwnProperty.call(message, "display_format")) {
            writer.uint32(16).int32(message.display_format);
        }
        if (message.derivation_type != null && Object.hasOwnProperty.call(message, "derivation_type")) {
            writer.uint32(24).int32(message.derivation_type);
        }
        return writer;
    };

    CardanoGetNativeScriptHash.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoGetNativeScriptHash();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.script = reader.string();
                break;
            case 2:
                message.display_format = reader.int32();
                break;
            case 3:
                message.derivation_type = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoGetNativeScriptHash.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.script != null && message.hasOwnProperty("script")) {
            object.script = message.script;
        }
        if (message.display_format != null && message.hasOwnProperty("display_format")) {
            object.display_format = message.display_format;
        }
        if (message.derivation_type != null && message.hasOwnProperty("derivation_type")) {
            object.derivation_type = message.derivation_type;
        }
        return object;
    };

    return CardanoGetNativeScriptHash;
})();

// CardanoNativeScriptHash message
$root.CardanoNativeScriptHash = (function() {
    function CardanoNativeScriptHash(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoNativeScriptHash.create = function create(properties) {
        return new CardanoNativeScriptHash(properties);
    };

    CardanoNativeScriptHash.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.script_hash != null && Object.hasOwnProperty.call(message, "script_hash")) {
            writer.uint32(10).bytes(message.script_hash);
        }
        return writer;
    };

    CardanoNativeScriptHash.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoNativeScriptHash();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.script_hash = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoNativeScriptHash.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.script_hash != null && message.hasOwnProperty("script_hash")) {
            object.script_hash = $util.base64.encode(message.script_hash, 0, message.script_hash.length);
        }
        return object;
    };

    return CardanoNativeScriptHash;
})();

// CardanoAddressParametersType message
$root.CardanoAddressParametersType = (function() {
    function CardanoAddressParametersType(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoAddressParametersType.create = function create(properties) {
        return new CardanoAddressParametersType(properties);
    };

    CardanoAddressParametersType.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_type != null && Object.hasOwnProperty.call(message, "address_type")) {
            writer.uint32(8).int32(message.address_type);
        }
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(16).uint32(message.address_n[i]);
            }
        }
        if (message.address_n_staking != null && message.address_n_staking.length) {
            for (var i = 0; i < message.address_n_staking.length; ++i) {
                writer.uint32(24).uint32(message.address_n_staking[i]);
            }
        }
        if (message.staking_key_hash != null && Object.hasOwnProperty.call(message, "staking_key_hash")) {
            writer.uint32(34).bytes(message.staking_key_hash);
        }
        if (message.certificate_pointer != null && Object.hasOwnProperty.call(message, "certificate_pointer")) {
            writer.uint32(42).string(message.certificate_pointer);
        }
        if (message.script_payment_hash != null && Object.hasOwnProperty.call(message, "script_payment_hash")) {
            writer.uint32(50).bytes(message.script_payment_hash);
        }
        if (message.script_staking_hash != null && Object.hasOwnProperty.call(message, "script_staking_hash")) {
            writer.uint32(58).bytes(message.script_staking_hash);
        }
        return writer;
    };

    CardanoAddressParametersType.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoAddressParametersType();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.address_type = reader.int32();
                break;
            case 2:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 3:
                if (!(message.address_n_staking && message.address_n_staking.length)) message.address_n_staking = [];
                message.address_n_staking.push(reader.uint32());
                break;
            case 4:
                message.staking_key_hash = reader.bytes();
                break;
            case 5:
                message.certificate_pointer = reader.string();
                break;
            case 6:
                message.script_payment_hash = reader.bytes();
                break;
            case 7:
                message.script_staking_hash = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoAddressParametersType.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_type != null && message.hasOwnProperty("address_type")) {
            object.address_type = message.address_type;
        }
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.address_n_staking && message.address_n_staking.length) {
            object.address_n_staking = [];
            for (var j = 0; j < message.address_n_staking.length; ++j) {
                object.address_n_staking[j] = message.address_n_staking[j];
            }
        }
        if (message.staking_key_hash != null && message.hasOwnProperty("staking_key_hash")) {
            object.staking_key_hash = $util.base64.encode(message.staking_key_hash, 0, message.staking_key_hash.length);
        }
        if (message.certificate_pointer != null && message.hasOwnProperty("certificate_pointer")) {
            object.certificate_pointer = message.certificate_pointer;
        }
        if (message.script_payment_hash != null && message.hasOwnProperty("script_payment_hash")) {
            object.script_payment_hash = $util.base64.encode(message.script_payment_hash, 0, message.script_payment_hash.length);
        }
        if (message.script_staking_hash != null && message.hasOwnProperty("script_staking_hash")) {
            object.script_staking_hash = $util.base64.encode(message.script_staking_hash, 0, message.script_staking_hash.length);
        }
        return object;
    };

    return CardanoAddressParametersType;
})();

// CardanoGetAddress message
$root.CardanoGetAddress = (function() {
    function CardanoGetAddress(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoGetAddress.create = function create(properties) {
        return new CardanoGetAddress(properties);
    };

    CardanoGetAddress.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.show_display != null && Object.hasOwnProperty.call(message, "show_display")) {
            writer.uint32(16).bool(message.show_display);
        }
        if (message.protocol_magic != null && Object.hasOwnProperty.call(message, "protocol_magic")) {
            writer.uint32(24).uint32(message.protocol_magic);
        }
        if (message.network_id != null && Object.hasOwnProperty.call(message, "network_id")) {
            writer.uint32(32).uint32(message.network_id);
        }
        if (message.address_parameters != null && Object.hasOwnProperty.call(message, "address_parameters")) {
            writer.uint32(42).string(message.address_parameters);
        }
        if (message.derivation_type != null && Object.hasOwnProperty.call(message, "derivation_type")) {
            writer.uint32(48).int32(message.derivation_type);
        }
        if (message.chunkify != null && Object.hasOwnProperty.call(message, "chunkify")) {
            writer.uint32(56).bool(message.chunkify);
        }
        return writer;
    };

    CardanoGetAddress.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoGetAddress();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                message.show_display = reader.bool();
                break;
            case 3:
                message.protocol_magic = reader.uint32();
                break;
            case 4:
                message.network_id = reader.uint32();
                break;
            case 5:
                message.address_parameters = reader.string();
                break;
            case 6:
                message.derivation_type = reader.int32();
                break;
            case 7:
                message.chunkify = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoGetAddress.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.show_display != null && message.hasOwnProperty("show_display")) {
            object.show_display = message.show_display;
        }
        if (message.protocol_magic != null && message.hasOwnProperty("protocol_magic")) {
            object.protocol_magic = message.protocol_magic;
        }
        if (message.network_id != null && message.hasOwnProperty("network_id")) {
            object.network_id = message.network_id;
        }
        if (message.address_parameters != null && message.hasOwnProperty("address_parameters")) {
            object.address_parameters = message.address_parameters;
        }
        if (message.derivation_type != null && message.hasOwnProperty("derivation_type")) {
            object.derivation_type = message.derivation_type;
        }
        if (message.chunkify != null && message.hasOwnProperty("chunkify")) {
            object.chunkify = message.chunkify;
        }
        return object;
    };

    return CardanoGetAddress;
})();

// CardanoAddress message
$root.CardanoAddress = (function() {
    function CardanoAddress(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoAddress.create = function create(properties) {
        return new CardanoAddress(properties);
    };

    CardanoAddress.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address != null && Object.hasOwnProperty.call(message, "address")) {
            writer.uint32(10).string(message.address);
        }
        if (message.mac != null && Object.hasOwnProperty.call(message, "mac")) {
            writer.uint32(18).bytes(message.mac);
        }
        return writer;
    };

    CardanoAddress.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoAddress();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.address = reader.string();
                break;
            case 2:
                message.mac = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoAddress.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address != null && message.hasOwnProperty("address")) {
            object.address = message.address;
        }
        if (message.mac != null && message.hasOwnProperty("mac")) {
            object.mac = $util.base64.encode(message.mac, 0, message.mac.length);
        }
        return object;
    };

    return CardanoAddress;
})();

// CardanoGetPublicKey message
$root.CardanoGetPublicKey = (function() {
    function CardanoGetPublicKey(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoGetPublicKey.create = function create(properties) {
        return new CardanoGetPublicKey(properties);
    };

    CardanoGetPublicKey.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.show_display != null && Object.hasOwnProperty.call(message, "show_display")) {
            writer.uint32(16).bool(message.show_display);
        }
        if (message.derivation_type != null && Object.hasOwnProperty.call(message, "derivation_type")) {
            writer.uint32(24).int32(message.derivation_type);
        }
        return writer;
    };

    CardanoGetPublicKey.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoGetPublicKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.show_display = reader.bool();
                break;
            case 3:
                message.derivation_type = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoGetPublicKey.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.show_display != null && message.hasOwnProperty("show_display")) {
            object.show_display = message.show_display;
        }
        if (message.derivation_type != null && message.hasOwnProperty("derivation_type")) {
            object.derivation_type = message.derivation_type;
        }
        return object;
    };

    return CardanoGetPublicKey;
})();

// CardanoPublicKey message
$root.CardanoPublicKey = (function() {
    function CardanoPublicKey(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoPublicKey.create = function create(properties) {
        return new CardanoPublicKey(properties);
    };

    CardanoPublicKey.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.xpub != null && Object.hasOwnProperty.call(message, "xpub")) {
            writer.uint32(10).string(message.xpub);
        }
        if (message.node != null && Object.hasOwnProperty.call(message, "node")) {
            writer.uint32(18).string(message.node);
        }
        return writer;
    };

    CardanoPublicKey.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoPublicKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.xpub = reader.string();
                break;
            case 2:
                message.node = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoPublicKey.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.xpub != null && message.hasOwnProperty("xpub")) {
            object.xpub = message.xpub;
        }
        if (message.node != null && message.hasOwnProperty("node")) {
            object.node = message.node;
        }
        return object;
    };

    return CardanoPublicKey;
})();

// CardanoSignTxInit message
$root.CardanoSignTxInit = (function() {
    function CardanoSignTxInit(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoSignTxInit.create = function create(properties) {
        return new CardanoSignTxInit(properties);
    };

    CardanoSignTxInit.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.signing_mode != null && Object.hasOwnProperty.call(message, "signing_mode")) {
            writer.uint32(8).int32(message.signing_mode);
        }
        if (message.protocol_magic != null && Object.hasOwnProperty.call(message, "protocol_magic")) {
            writer.uint32(16).uint32(message.protocol_magic);
        }
        if (message.network_id != null && Object.hasOwnProperty.call(message, "network_id")) {
            writer.uint32(24).uint32(message.network_id);
        }
        if (message.inputs_count != null && Object.hasOwnProperty.call(message, "inputs_count")) {
            writer.uint32(32).uint32(message.inputs_count);
        }
        if (message.outputs_count != null && Object.hasOwnProperty.call(message, "outputs_count")) {
            writer.uint32(40).uint32(message.outputs_count);
        }
        if (message.fee != null && Object.hasOwnProperty.call(message, "fee")) {
            writer.uint32(48).uint64(message.fee);
        }
        if (message.ttl != null && Object.hasOwnProperty.call(message, "ttl")) {
            writer.uint32(56).uint64(message.ttl);
        }
        if (message.certificates_count != null && Object.hasOwnProperty.call(message, "certificates_count")) {
            writer.uint32(64).uint32(message.certificates_count);
        }
        if (message.withdrawals_count != null && Object.hasOwnProperty.call(message, "withdrawals_count")) {
            writer.uint32(72).uint32(message.withdrawals_count);
        }
        if (message.has_auxiliary_data != null && Object.hasOwnProperty.call(message, "has_auxiliary_data")) {
            writer.uint32(80).bool(message.has_auxiliary_data);
        }
        if (message.validity_interval_start != null && Object.hasOwnProperty.call(message, "validity_interval_start")) {
            writer.uint32(88).uint64(message.validity_interval_start);
        }
        if (message.witness_requests_count != null && Object.hasOwnProperty.call(message, "witness_requests_count")) {
            writer.uint32(96).uint32(message.witness_requests_count);
        }
        if (message.minting_asset_groups_count != null && Object.hasOwnProperty.call(message, "minting_asset_groups_count")) {
            writer.uint32(104).uint32(message.minting_asset_groups_count);
        }
        if (message.derivation_type != null && Object.hasOwnProperty.call(message, "derivation_type")) {
            writer.uint32(112).int32(message.derivation_type);
        }
        if (message.include_network_id != null && Object.hasOwnProperty.call(message, "include_network_id")) {
            writer.uint32(120).bool(message.include_network_id);
        }
        if (message.script_data_hash != null && Object.hasOwnProperty.call(message, "script_data_hash")) {
            writer.uint32(130).bytes(message.script_data_hash);
        }
        if (message.collateral_inputs_count != null && Object.hasOwnProperty.call(message, "collateral_inputs_count")) {
            writer.uint32(136).uint32(message.collateral_inputs_count);
        }
        if (message.required_signers_count != null && Object.hasOwnProperty.call(message, "required_signers_count")) {
            writer.uint32(144).uint32(message.required_signers_count);
        }
        if (message.has_collateral_return != null && Object.hasOwnProperty.call(message, "has_collateral_return")) {
            writer.uint32(152).bool(message.has_collateral_return);
        }
        if (message.total_collateral != null && Object.hasOwnProperty.call(message, "total_collateral")) {
            writer.uint32(160).uint64(message.total_collateral);
        }
        if (message.reference_inputs_count != null && Object.hasOwnProperty.call(message, "reference_inputs_count")) {
            writer.uint32(168).uint32(message.reference_inputs_count);
        }
        if (message.chunkify != null && Object.hasOwnProperty.call(message, "chunkify")) {
            writer.uint32(176).bool(message.chunkify);
        }
        if (message.tag_cbor_sets != null && Object.hasOwnProperty.call(message, "tag_cbor_sets")) {
            writer.uint32(184).bool(message.tag_cbor_sets);
        }
        if (message.payment_req != null && Object.hasOwnProperty.call(message, "payment_req")) {
            writer.uint32(194).string(message.payment_req);
        }
        return writer;
    };

    CardanoSignTxInit.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoSignTxInit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.signing_mode = reader.int32();
                break;
            case 2:
                message.protocol_magic = reader.uint32();
                break;
            case 3:
                message.network_id = reader.uint32();
                break;
            case 4:
                message.inputs_count = reader.uint32();
                break;
            case 5:
                message.outputs_count = reader.uint32();
                break;
            case 6:
                message.fee = reader.uint64();
                break;
            case 7:
                message.ttl = reader.uint64();
                break;
            case 8:
                message.certificates_count = reader.uint32();
                break;
            case 9:
                message.withdrawals_count = reader.uint32();
                break;
            case 10:
                message.has_auxiliary_data = reader.bool();
                break;
            case 11:
                message.validity_interval_start = reader.uint64();
                break;
            case 12:
                message.witness_requests_count = reader.uint32();
                break;
            case 13:
                message.minting_asset_groups_count = reader.uint32();
                break;
            case 14:
                message.derivation_type = reader.int32();
                break;
            case 15:
                message.include_network_id = reader.bool();
                break;
            case 16:
                message.script_data_hash = reader.bytes();
                break;
            case 17:
                message.collateral_inputs_count = reader.uint32();
                break;
            case 18:
                message.required_signers_count = reader.uint32();
                break;
            case 19:
                message.has_collateral_return = reader.bool();
                break;
            case 20:
                message.total_collateral = reader.uint64();
                break;
            case 21:
                message.reference_inputs_count = reader.uint32();
                break;
            case 22:
                message.chunkify = reader.bool();
                break;
            case 23:
                message.tag_cbor_sets = reader.bool();
                break;
            case 24:
                message.payment_req = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoSignTxInit.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.signing_mode != null && message.hasOwnProperty("signing_mode")) {
            object.signing_mode = message.signing_mode;
        }
        if (message.protocol_magic != null && message.hasOwnProperty("protocol_magic")) {
            object.protocol_magic = message.protocol_magic;
        }
        if (message.network_id != null && message.hasOwnProperty("network_id")) {
            object.network_id = message.network_id;
        }
        if (message.inputs_count != null && message.hasOwnProperty("inputs_count")) {
            object.inputs_count = message.inputs_count;
        }
        if (message.outputs_count != null && message.hasOwnProperty("outputs_count")) {
            object.outputs_count = message.outputs_count;
        }
        if (message.fee != null && message.hasOwnProperty("fee")) {
            object.fee = message.fee;
        }
        if (message.ttl != null && message.hasOwnProperty("ttl")) {
            object.ttl = message.ttl;
        }
        if (message.certificates_count != null && message.hasOwnProperty("certificates_count")) {
            object.certificates_count = message.certificates_count;
        }
        if (message.withdrawals_count != null && message.hasOwnProperty("withdrawals_count")) {
            object.withdrawals_count = message.withdrawals_count;
        }
        if (message.has_auxiliary_data != null && message.hasOwnProperty("has_auxiliary_data")) {
            object.has_auxiliary_data = message.has_auxiliary_data;
        }
        if (message.validity_interval_start != null && message.hasOwnProperty("validity_interval_start")) {
            object.validity_interval_start = message.validity_interval_start;
        }
        if (message.witness_requests_count != null && message.hasOwnProperty("witness_requests_count")) {
            object.witness_requests_count = message.witness_requests_count;
        }
        if (message.minting_asset_groups_count != null && message.hasOwnProperty("minting_asset_groups_count")) {
            object.minting_asset_groups_count = message.minting_asset_groups_count;
        }
        if (message.derivation_type != null && message.hasOwnProperty("derivation_type")) {
            object.derivation_type = message.derivation_type;
        }
        if (message.include_network_id != null && message.hasOwnProperty("include_network_id")) {
            object.include_network_id = message.include_network_id;
        }
        if (message.script_data_hash != null && message.hasOwnProperty("script_data_hash")) {
            object.script_data_hash = $util.base64.encode(message.script_data_hash, 0, message.script_data_hash.length);
        }
        if (message.collateral_inputs_count != null && message.hasOwnProperty("collateral_inputs_count")) {
            object.collateral_inputs_count = message.collateral_inputs_count;
        }
        if (message.required_signers_count != null && message.hasOwnProperty("required_signers_count")) {
            object.required_signers_count = message.required_signers_count;
        }
        if (message.has_collateral_return != null && message.hasOwnProperty("has_collateral_return")) {
            object.has_collateral_return = message.has_collateral_return;
        }
        if (message.total_collateral != null && message.hasOwnProperty("total_collateral")) {
            object.total_collateral = message.total_collateral;
        }
        if (message.reference_inputs_count != null && message.hasOwnProperty("reference_inputs_count")) {
            object.reference_inputs_count = message.reference_inputs_count;
        }
        if (message.chunkify != null && message.hasOwnProperty("chunkify")) {
            object.chunkify = message.chunkify;
        }
        if (message.tag_cbor_sets != null && message.hasOwnProperty("tag_cbor_sets")) {
            object.tag_cbor_sets = message.tag_cbor_sets;
        }
        if (message.payment_req != null && message.hasOwnProperty("payment_req")) {
            object.payment_req = message.payment_req;
        }
        return object;
    };

    return CardanoSignTxInit;
})();

// CardanoTxInput message
$root.CardanoTxInput = (function() {
    function CardanoTxInput(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoTxInput.create = function create(properties) {
        return new CardanoTxInput(properties);
    };

    CardanoTxInput.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.prev_hash != null && Object.hasOwnProperty.call(message, "prev_hash")) {
            writer.uint32(10).bytes(message.prev_hash);
        }
        if (message.prev_index != null && Object.hasOwnProperty.call(message, "prev_index")) {
            writer.uint32(16).uint32(message.prev_index);
        }
        return writer;
    };

    CardanoTxInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoTxInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.prev_hash = reader.bytes();
                break;
            case 2:
                message.prev_index = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoTxInput.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.prev_hash != null && message.hasOwnProperty("prev_hash")) {
            object.prev_hash = $util.base64.encode(message.prev_hash, 0, message.prev_hash.length);
        }
        if (message.prev_index != null && message.hasOwnProperty("prev_index")) {
            object.prev_index = message.prev_index;
        }
        return object;
    };

    return CardanoTxInput;
})();

// CardanoTxOutput message
$root.CardanoTxOutput = (function() {
    function CardanoTxOutput(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoTxOutput.create = function create(properties) {
        return new CardanoTxOutput(properties);
    };

    CardanoTxOutput.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address != null && Object.hasOwnProperty.call(message, "address")) {
            writer.uint32(10).string(message.address);
        }
        if (message.address_parameters != null && Object.hasOwnProperty.call(message, "address_parameters")) {
            writer.uint32(18).string(message.address_parameters);
        }
        if (message.amount != null && Object.hasOwnProperty.call(message, "amount")) {
            writer.uint32(24).uint64(message.amount);
        }
        if (message.asset_groups_count != null && Object.hasOwnProperty.call(message, "asset_groups_count")) {
            writer.uint32(32).uint32(message.asset_groups_count);
        }
        if (message.datum_hash != null && Object.hasOwnProperty.call(message, "datum_hash")) {
            writer.uint32(42).bytes(message.datum_hash);
        }
        if (message.format != null && Object.hasOwnProperty.call(message, "format")) {
            writer.uint32(48).int32(message.format);
        }
        if (message.inline_datum_size != null && Object.hasOwnProperty.call(message, "inline_datum_size")) {
            writer.uint32(56).uint32(message.inline_datum_size);
        }
        if (message.reference_script_size != null && Object.hasOwnProperty.call(message, "reference_script_size")) {
            writer.uint32(64).uint32(message.reference_script_size);
        }
        return writer;
    };

    CardanoTxOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoTxOutput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.address = reader.string();
                break;
            case 2:
                message.address_parameters = reader.string();
                break;
            case 3:
                message.amount = reader.uint64();
                break;
            case 4:
                message.asset_groups_count = reader.uint32();
                break;
            case 5:
                message.datum_hash = reader.bytes();
                break;
            case 6:
                message.format = reader.int32();
                break;
            case 7:
                message.inline_datum_size = reader.uint32();
                break;
            case 8:
                message.reference_script_size = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoTxOutput.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address != null && message.hasOwnProperty("address")) {
            object.address = message.address;
        }
        if (message.address_parameters != null && message.hasOwnProperty("address_parameters")) {
            object.address_parameters = message.address_parameters;
        }
        if (message.amount != null && message.hasOwnProperty("amount")) {
            object.amount = message.amount;
        }
        if (message.asset_groups_count != null && message.hasOwnProperty("asset_groups_count")) {
            object.asset_groups_count = message.asset_groups_count;
        }
        if (message.datum_hash != null && message.hasOwnProperty("datum_hash")) {
            object.datum_hash = $util.base64.encode(message.datum_hash, 0, message.datum_hash.length);
        }
        if (message.format != null && message.hasOwnProperty("format")) {
            object.format = message.format;
        }
        if (message.inline_datum_size != null && message.hasOwnProperty("inline_datum_size")) {
            object.inline_datum_size = message.inline_datum_size;
        }
        if (message.reference_script_size != null && message.hasOwnProperty("reference_script_size")) {
            object.reference_script_size = message.reference_script_size;
        }
        return object;
    };

    return CardanoTxOutput;
})();

// CardanoAssetGroup message
$root.CardanoAssetGroup = (function() {
    function CardanoAssetGroup(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoAssetGroup.create = function create(properties) {
        return new CardanoAssetGroup(properties);
    };

    CardanoAssetGroup.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.policy_id != null && Object.hasOwnProperty.call(message, "policy_id")) {
            writer.uint32(10).bytes(message.policy_id);
        }
        if (message.tokens_count != null && Object.hasOwnProperty.call(message, "tokens_count")) {
            writer.uint32(16).uint32(message.tokens_count);
        }
        return writer;
    };

    CardanoAssetGroup.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoAssetGroup();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.policy_id = reader.bytes();
                break;
            case 2:
                message.tokens_count = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoAssetGroup.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.policy_id != null && message.hasOwnProperty("policy_id")) {
            object.policy_id = $util.base64.encode(message.policy_id, 0, message.policy_id.length);
        }
        if (message.tokens_count != null && message.hasOwnProperty("tokens_count")) {
            object.tokens_count = message.tokens_count;
        }
        return object;
    };

    return CardanoAssetGroup;
})();

// CardanoToken message
$root.CardanoToken = (function() {
    function CardanoToken(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoToken.create = function create(properties) {
        return new CardanoToken(properties);
    };

    CardanoToken.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.asset_name_bytes != null && Object.hasOwnProperty.call(message, "asset_name_bytes")) {
            writer.uint32(10).bytes(message.asset_name_bytes);
        }
        if (message.amount != null && Object.hasOwnProperty.call(message, "amount")) {
            writer.uint32(16).uint64(message.amount);
        }
        if (message.mint_amount != null && Object.hasOwnProperty.call(message, "mint_amount")) {
            writer.uint32(24).sint64(message.mint_amount);
        }
        return writer;
    };

    CardanoToken.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoToken();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.asset_name_bytes = reader.bytes();
                break;
            case 2:
                message.amount = reader.uint64();
                break;
            case 3:
                message.mint_amount = reader.sint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoToken.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.asset_name_bytes != null && message.hasOwnProperty("asset_name_bytes")) {
            object.asset_name_bytes = $util.base64.encode(message.asset_name_bytes, 0, message.asset_name_bytes.length);
        }
        if (message.amount != null && message.hasOwnProperty("amount")) {
            object.amount = message.amount;
        }
        if (message.mint_amount != null && message.hasOwnProperty("mint_amount")) {
            object.mint_amount = message.mint_amount;
        }
        return object;
    };

    return CardanoToken;
})();

// CardanoTxInlineDatumChunk message
$root.CardanoTxInlineDatumChunk = (function() {
    function CardanoTxInlineDatumChunk(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoTxInlineDatumChunk.create = function create(properties) {
        return new CardanoTxInlineDatumChunk(properties);
    };

    CardanoTxInlineDatumChunk.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.data != null && Object.hasOwnProperty.call(message, "data")) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    };

    CardanoTxInlineDatumChunk.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoTxInlineDatumChunk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoTxInlineDatumChunk.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.data != null && message.hasOwnProperty("data")) {
            object.data = $util.base64.encode(message.data, 0, message.data.length);
        }
        return object;
    };

    return CardanoTxInlineDatumChunk;
})();

// CardanoTxReferenceScriptChunk message
$root.CardanoTxReferenceScriptChunk = (function() {
    function CardanoTxReferenceScriptChunk(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoTxReferenceScriptChunk.create = function create(properties) {
        return new CardanoTxReferenceScriptChunk(properties);
    };

    CardanoTxReferenceScriptChunk.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.data != null && Object.hasOwnProperty.call(message, "data")) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    };

    CardanoTxReferenceScriptChunk.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoTxReferenceScriptChunk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoTxReferenceScriptChunk.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.data != null && message.hasOwnProperty("data")) {
            object.data = $util.base64.encode(message.data, 0, message.data.length);
        }
        return object;
    };

    return CardanoTxReferenceScriptChunk;
})();

// CardanoPoolOwner message
$root.CardanoPoolOwner = (function() {
    function CardanoPoolOwner(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoPoolOwner.create = function create(properties) {
        return new CardanoPoolOwner(properties);
    };

    CardanoPoolOwner.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.staking_key_path != null && message.staking_key_path.length) {
            for (var i = 0; i < message.staking_key_path.length; ++i) {
                writer.uint32(8).uint32(message.staking_key_path[i]);
            }
        }
        if (message.staking_key_hash != null && Object.hasOwnProperty.call(message, "staking_key_hash")) {
            writer.uint32(18).bytes(message.staking_key_hash);
        }
        return writer;
    };

    CardanoPoolOwner.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoPoolOwner();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.staking_key_path && message.staking_key_path.length)) message.staking_key_path = [];
                message.staking_key_path.push(reader.uint32());
                break;
            case 2:
                message.staking_key_hash = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoPoolOwner.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.staking_key_path && message.staking_key_path.length) {
            object.staking_key_path = [];
            for (var j = 0; j < message.staking_key_path.length; ++j) {
                object.staking_key_path[j] = message.staking_key_path[j];
            }
        }
        if (message.staking_key_hash != null && message.hasOwnProperty("staking_key_hash")) {
            object.staking_key_hash = $util.base64.encode(message.staking_key_hash, 0, message.staking_key_hash.length);
        }
        return object;
    };

    return CardanoPoolOwner;
})();

// CardanoPoolRelayParameters message
$root.CardanoPoolRelayParameters = (function() {
    function CardanoPoolRelayParameters(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoPoolRelayParameters.create = function create(properties) {
        return new CardanoPoolRelayParameters(properties);
    };

    CardanoPoolRelayParameters.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type")) {
            writer.uint32(8).int32(message.type);
        }
        if (message.ipv4_address != null && Object.hasOwnProperty.call(message, "ipv4_address")) {
            writer.uint32(18).bytes(message.ipv4_address);
        }
        if (message.ipv6_address != null && Object.hasOwnProperty.call(message, "ipv6_address")) {
            writer.uint32(26).bytes(message.ipv6_address);
        }
        if (message.host_name != null && Object.hasOwnProperty.call(message, "host_name")) {
            writer.uint32(34).string(message.host_name);
        }
        if (message.port != null && Object.hasOwnProperty.call(message, "port")) {
            writer.uint32(40).uint32(message.port);
        }
        return writer;
    };

    CardanoPoolRelayParameters.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoPoolRelayParameters();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.ipv4_address = reader.bytes();
                break;
            case 3:
                message.ipv6_address = reader.bytes();
                break;
            case 4:
                message.host_name = reader.string();
                break;
            case 5:
                message.port = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoPoolRelayParameters.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.type != null && message.hasOwnProperty("type")) {
            object.type = message.type;
        }
        if (message.ipv4_address != null && message.hasOwnProperty("ipv4_address")) {
            object.ipv4_address = $util.base64.encode(message.ipv4_address, 0, message.ipv4_address.length);
        }
        if (message.ipv6_address != null && message.hasOwnProperty("ipv6_address")) {
            object.ipv6_address = $util.base64.encode(message.ipv6_address, 0, message.ipv6_address.length);
        }
        if (message.host_name != null && message.hasOwnProperty("host_name")) {
            object.host_name = message.host_name;
        }
        if (message.port != null && message.hasOwnProperty("port")) {
            object.port = message.port;
        }
        return object;
    };

    return CardanoPoolRelayParameters;
})();

// CardanoPoolMetadataType message
$root.CardanoPoolMetadataType = (function() {
    function CardanoPoolMetadataType(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoPoolMetadataType.create = function create(properties) {
        return new CardanoPoolMetadataType(properties);
    };

    CardanoPoolMetadataType.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.url != null && Object.hasOwnProperty.call(message, "url")) {
            writer.uint32(10).string(message.url);
        }
        if (message.hash != null && Object.hasOwnProperty.call(message, "hash")) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    };

    CardanoPoolMetadataType.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoPoolMetadataType();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.url = reader.string();
                break;
            case 2:
                message.hash = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoPoolMetadataType.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.url != null && message.hasOwnProperty("url")) {
            object.url = message.url;
        }
        if (message.hash != null && message.hasOwnProperty("hash")) {
            object.hash = $util.base64.encode(message.hash, 0, message.hash.length);
        }
        return object;
    };

    return CardanoPoolMetadataType;
})();

// CardanoPoolParametersType message
$root.CardanoPoolParametersType = (function() {
    function CardanoPoolParametersType(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoPoolParametersType.create = function create(properties) {
        return new CardanoPoolParametersType(properties);
    };

    CardanoPoolParametersType.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.pool_id != null && Object.hasOwnProperty.call(message, "pool_id")) {
            writer.uint32(10).bytes(message.pool_id);
        }
        if (message.vrf_key_hash != null && Object.hasOwnProperty.call(message, "vrf_key_hash")) {
            writer.uint32(18).bytes(message.vrf_key_hash);
        }
        if (message.pledge != null && Object.hasOwnProperty.call(message, "pledge")) {
            writer.uint32(24).uint64(message.pledge);
        }
        if (message.cost != null && Object.hasOwnProperty.call(message, "cost")) {
            writer.uint32(32).uint64(message.cost);
        }
        if (message.margin_numerator != null && Object.hasOwnProperty.call(message, "margin_numerator")) {
            writer.uint32(40).uint64(message.margin_numerator);
        }
        if (message.margin_denominator != null && Object.hasOwnProperty.call(message, "margin_denominator")) {
            writer.uint32(48).uint64(message.margin_denominator);
        }
        if (message.reward_account != null && Object.hasOwnProperty.call(message, "reward_account")) {
            writer.uint32(58).string(message.reward_account);
        }
        if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata")) {
            writer.uint32(82).string(message.metadata);
        }
        if (message.owners_count != null && Object.hasOwnProperty.call(message, "owners_count")) {
            writer.uint32(88).uint32(message.owners_count);
        }
        if (message.relays_count != null && Object.hasOwnProperty.call(message, "relays_count")) {
            writer.uint32(96).uint32(message.relays_count);
        }
        return writer;
    };

    CardanoPoolParametersType.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoPoolParametersType();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.pool_id = reader.bytes();
                break;
            case 2:
                message.vrf_key_hash = reader.bytes();
                break;
            case 3:
                message.pledge = reader.uint64();
                break;
            case 4:
                message.cost = reader.uint64();
                break;
            case 5:
                message.margin_numerator = reader.uint64();
                break;
            case 6:
                message.margin_denominator = reader.uint64();
                break;
            case 7:
                message.reward_account = reader.string();
                break;
            case 10:
                message.metadata = reader.string();
                break;
            case 11:
                message.owners_count = reader.uint32();
                break;
            case 12:
                message.relays_count = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoPoolParametersType.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.pool_id != null && message.hasOwnProperty("pool_id")) {
            object.pool_id = $util.base64.encode(message.pool_id, 0, message.pool_id.length);
        }
        if (message.vrf_key_hash != null && message.hasOwnProperty("vrf_key_hash")) {
            object.vrf_key_hash = $util.base64.encode(message.vrf_key_hash, 0, message.vrf_key_hash.length);
        }
        if (message.pledge != null && message.hasOwnProperty("pledge")) {
            object.pledge = message.pledge;
        }
        if (message.cost != null && message.hasOwnProperty("cost")) {
            object.cost = message.cost;
        }
        if (message.margin_numerator != null && message.hasOwnProperty("margin_numerator")) {
            object.margin_numerator = message.margin_numerator;
        }
        if (message.margin_denominator != null && message.hasOwnProperty("margin_denominator")) {
            object.margin_denominator = message.margin_denominator;
        }
        if (message.reward_account != null && message.hasOwnProperty("reward_account")) {
            object.reward_account = message.reward_account;
        }
        if (message.metadata != null && message.hasOwnProperty("metadata")) {
            object.metadata = message.metadata;
        }
        if (message.owners_count != null && message.hasOwnProperty("owners_count")) {
            object.owners_count = message.owners_count;
        }
        if (message.relays_count != null && message.hasOwnProperty("relays_count")) {
            object.relays_count = message.relays_count;
        }
        return object;
    };

    return CardanoPoolParametersType;
})();

// CardanoDRep message
$root.CardanoDRep = (function() {
    function CardanoDRep(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoDRep.create = function create(properties) {
        return new CardanoDRep(properties);
    };

    CardanoDRep.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type")) {
            writer.uint32(8).int32(message.type);
        }
        if (message.key_hash != null && Object.hasOwnProperty.call(message, "key_hash")) {
            writer.uint32(18).bytes(message.key_hash);
        }
        if (message.script_hash != null && Object.hasOwnProperty.call(message, "script_hash")) {
            writer.uint32(26).bytes(message.script_hash);
        }
        return writer;
    };

    CardanoDRep.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoDRep();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.key_hash = reader.bytes();
                break;
            case 3:
                message.script_hash = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoDRep.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.type != null && message.hasOwnProperty("type")) {
            object.type = message.type;
        }
        if (message.key_hash != null && message.hasOwnProperty("key_hash")) {
            object.key_hash = $util.base64.encode(message.key_hash, 0, message.key_hash.length);
        }
        if (message.script_hash != null && message.hasOwnProperty("script_hash")) {
            object.script_hash = $util.base64.encode(message.script_hash, 0, message.script_hash.length);
        }
        return object;
    };

    return CardanoDRep;
})();

// CardanoTxCertificate message
$root.CardanoTxCertificate = (function() {
    function CardanoTxCertificate(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoTxCertificate.create = function create(properties) {
        return new CardanoTxCertificate(properties);
    };

    CardanoTxCertificate.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type")) {
            writer.uint32(8).int32(message.type);
        }
        if (message.path != null && message.path.length) {
            for (var i = 0; i < message.path.length; ++i) {
                writer.uint32(16).uint32(message.path[i]);
            }
        }
        if (message.pool != null && Object.hasOwnProperty.call(message, "pool")) {
            writer.uint32(26).bytes(message.pool);
        }
        if (message.pool_parameters != null && Object.hasOwnProperty.call(message, "pool_parameters")) {
            writer.uint32(34).string(message.pool_parameters);
        }
        if (message.script_hash != null && Object.hasOwnProperty.call(message, "script_hash")) {
            writer.uint32(42).bytes(message.script_hash);
        }
        if (message.key_hash != null && Object.hasOwnProperty.call(message, "key_hash")) {
            writer.uint32(50).bytes(message.key_hash);
        }
        if (message.deposit != null && Object.hasOwnProperty.call(message, "deposit")) {
            writer.uint32(56).uint64(message.deposit);
        }
        if (message.drep != null && Object.hasOwnProperty.call(message, "drep")) {
            writer.uint32(66).string(message.drep);
        }
        return writer;
    };

    CardanoTxCertificate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoTxCertificate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                if (!(message.path && message.path.length)) message.path = [];
                message.path.push(reader.uint32());
                break;
            case 3:
                message.pool = reader.bytes();
                break;
            case 4:
                message.pool_parameters = reader.string();
                break;
            case 5:
                message.script_hash = reader.bytes();
                break;
            case 6:
                message.key_hash = reader.bytes();
                break;
            case 7:
                message.deposit = reader.uint64();
                break;
            case 8:
                message.drep = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoTxCertificate.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.type != null && message.hasOwnProperty("type")) {
            object.type = message.type;
        }
        if (message.path && message.path.length) {
            object.path = [];
            for (var j = 0; j < message.path.length; ++j) {
                object.path[j] = message.path[j];
            }
        }
        if (message.pool != null && message.hasOwnProperty("pool")) {
            object.pool = $util.base64.encode(message.pool, 0, message.pool.length);
        }
        if (message.pool_parameters != null && message.hasOwnProperty("pool_parameters")) {
            object.pool_parameters = message.pool_parameters;
        }
        if (message.script_hash != null && message.hasOwnProperty("script_hash")) {
            object.script_hash = $util.base64.encode(message.script_hash, 0, message.script_hash.length);
        }
        if (message.key_hash != null && message.hasOwnProperty("key_hash")) {
            object.key_hash = $util.base64.encode(message.key_hash, 0, message.key_hash.length);
        }
        if (message.deposit != null && message.hasOwnProperty("deposit")) {
            object.deposit = message.deposit;
        }
        if (message.drep != null && message.hasOwnProperty("drep")) {
            object.drep = message.drep;
        }
        return object;
    };

    return CardanoTxCertificate;
})();

// CardanoTxWithdrawal message
$root.CardanoTxWithdrawal = (function() {
    function CardanoTxWithdrawal(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoTxWithdrawal.create = function create(properties) {
        return new CardanoTxWithdrawal(properties);
    };

    CardanoTxWithdrawal.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.path != null && message.path.length) {
            for (var i = 0; i < message.path.length; ++i) {
                writer.uint32(8).uint32(message.path[i]);
            }
        }
        if (message.amount != null && Object.hasOwnProperty.call(message, "amount")) {
            writer.uint32(16).uint64(message.amount);
        }
        if (message.script_hash != null && Object.hasOwnProperty.call(message, "script_hash")) {
            writer.uint32(26).bytes(message.script_hash);
        }
        if (message.key_hash != null && Object.hasOwnProperty.call(message, "key_hash")) {
            writer.uint32(34).bytes(message.key_hash);
        }
        return writer;
    };

    CardanoTxWithdrawal.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoTxWithdrawal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.path && message.path.length)) message.path = [];
                message.path.push(reader.uint32());
                break;
            case 2:
                message.amount = reader.uint64();
                break;
            case 3:
                message.script_hash = reader.bytes();
                break;
            case 4:
                message.key_hash = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoTxWithdrawal.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.path && message.path.length) {
            object.path = [];
            for (var j = 0; j < message.path.length; ++j) {
                object.path[j] = message.path[j];
            }
        }
        if (message.amount != null && message.hasOwnProperty("amount")) {
            object.amount = message.amount;
        }
        if (message.script_hash != null && message.hasOwnProperty("script_hash")) {
            object.script_hash = $util.base64.encode(message.script_hash, 0, message.script_hash.length);
        }
        if (message.key_hash != null && message.hasOwnProperty("key_hash")) {
            object.key_hash = $util.base64.encode(message.key_hash, 0, message.key_hash.length);
        }
        return object;
    };

    return CardanoTxWithdrawal;
})();

// CardanoCVoteRegistrationDelegation message
$root.CardanoCVoteRegistrationDelegation = (function() {
    function CardanoCVoteRegistrationDelegation(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoCVoteRegistrationDelegation.create = function create(properties) {
        return new CardanoCVoteRegistrationDelegation(properties);
    };

    CardanoCVoteRegistrationDelegation.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.vote_public_key != null && Object.hasOwnProperty.call(message, "vote_public_key")) {
            writer.uint32(10).bytes(message.vote_public_key);
        }
        if (message.weight != null && Object.hasOwnProperty.call(message, "weight")) {
            writer.uint32(16).uint32(message.weight);
        }
        return writer;
    };

    CardanoCVoteRegistrationDelegation.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoCVoteRegistrationDelegation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.vote_public_key = reader.bytes();
                break;
            case 2:
                message.weight = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoCVoteRegistrationDelegation.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.vote_public_key != null && message.hasOwnProperty("vote_public_key")) {
            object.vote_public_key = $util.base64.encode(message.vote_public_key, 0, message.vote_public_key.length);
        }
        if (message.weight != null && message.hasOwnProperty("weight")) {
            object.weight = message.weight;
        }
        return object;
    };

    return CardanoCVoteRegistrationDelegation;
})();

// CardanoCVoteRegistrationParametersType message
$root.CardanoCVoteRegistrationParametersType = (function() {
    function CardanoCVoteRegistrationParametersType(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoCVoteRegistrationParametersType.create = function create(properties) {
        return new CardanoCVoteRegistrationParametersType(properties);
    };

    CardanoCVoteRegistrationParametersType.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.vote_public_key != null && Object.hasOwnProperty.call(message, "vote_public_key")) {
            writer.uint32(10).bytes(message.vote_public_key);
        }
        if (message.staking_path != null && message.staking_path.length) {
            for (var i = 0; i < message.staking_path.length; ++i) {
                writer.uint32(16).uint32(message.staking_path[i]);
            }
        }
        if (message.payment_address_parameters != null && Object.hasOwnProperty.call(message, "payment_address_parameters")) {
            writer.uint32(26).string(message.payment_address_parameters);
        }
        if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce")) {
            writer.uint32(32).uint64(message.nonce);
        }
        if (message.format != null && Object.hasOwnProperty.call(message, "format")) {
            writer.uint32(40).int32(message.format);
        }
        if (message.delegations != null && message.delegations.length) {
            for (var i = 0; i < message.delegations.length; ++i) {
                writer.uint32(50).string(message.delegations[i]);
            }
        }
        if (message.voting_purpose != null && Object.hasOwnProperty.call(message, "voting_purpose")) {
            writer.uint32(56).uint64(message.voting_purpose);
        }
        if (message.payment_address != null && Object.hasOwnProperty.call(message, "payment_address")) {
            writer.uint32(66).string(message.payment_address);
        }
        return writer;
    };

    CardanoCVoteRegistrationParametersType.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoCVoteRegistrationParametersType();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.vote_public_key = reader.bytes();
                break;
            case 2:
                if (!(message.staking_path && message.staking_path.length)) message.staking_path = [];
                message.staking_path.push(reader.uint32());
                break;
            case 3:
                message.payment_address_parameters = reader.string();
                break;
            case 4:
                message.nonce = reader.uint64();
                break;
            case 5:
                message.format = reader.int32();
                break;
            case 6:
                if (!(message.delegations && message.delegations.length)) message.delegations = [];
                message.delegations.push(reader.string());
                break;
            case 7:
                message.voting_purpose = reader.uint64();
                break;
            case 8:
                message.payment_address = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoCVoteRegistrationParametersType.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.vote_public_key != null && message.hasOwnProperty("vote_public_key")) {
            object.vote_public_key = $util.base64.encode(message.vote_public_key, 0, message.vote_public_key.length);
        }
        if (message.staking_path && message.staking_path.length) {
            object.staking_path = [];
            for (var j = 0; j < message.staking_path.length; ++j) {
                object.staking_path[j] = message.staking_path[j];
            }
        }
        if (message.payment_address_parameters != null && message.hasOwnProperty("payment_address_parameters")) {
            object.payment_address_parameters = message.payment_address_parameters;
        }
        if (message.nonce != null && message.hasOwnProperty("nonce")) {
            object.nonce = message.nonce;
        }
        if (message.format != null && message.hasOwnProperty("format")) {
            object.format = message.format;
        }
        if (message.delegations && message.delegations.length) {
            object.delegations = [];
            for (var j = 0; j < message.delegations.length; ++j) {
                object.delegations[j] = message.delegations[j];
            }
        }
        if (message.voting_purpose != null && message.hasOwnProperty("voting_purpose")) {
            object.voting_purpose = message.voting_purpose;
        }
        if (message.payment_address != null && message.hasOwnProperty("payment_address")) {
            object.payment_address = message.payment_address;
        }
        return object;
    };

    return CardanoCVoteRegistrationParametersType;
})();

// CardanoTxAuxiliaryData message
$root.CardanoTxAuxiliaryData = (function() {
    function CardanoTxAuxiliaryData(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoTxAuxiliaryData.create = function create(properties) {
        return new CardanoTxAuxiliaryData(properties);
    };

    CardanoTxAuxiliaryData.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.cvote_registration_parameters != null && Object.hasOwnProperty.call(message, "cvote_registration_parameters")) {
            writer.uint32(10).string(message.cvote_registration_parameters);
        }
        if (message.hash != null && Object.hasOwnProperty.call(message, "hash")) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    };

    CardanoTxAuxiliaryData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoTxAuxiliaryData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cvote_registration_parameters = reader.string();
                break;
            case 2:
                message.hash = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoTxAuxiliaryData.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.cvote_registration_parameters != null && message.hasOwnProperty("cvote_registration_parameters")) {
            object.cvote_registration_parameters = message.cvote_registration_parameters;
        }
        if (message.hash != null && message.hasOwnProperty("hash")) {
            object.hash = $util.base64.encode(message.hash, 0, message.hash.length);
        }
        return object;
    };

    return CardanoTxAuxiliaryData;
})();

// CardanoTxMint message
$root.CardanoTxMint = (function() {
    function CardanoTxMint(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoTxMint.create = function create(properties) {
        return new CardanoTxMint(properties);
    };

    CardanoTxMint.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.asset_groups_count != null && Object.hasOwnProperty.call(message, "asset_groups_count")) {
            writer.uint32(8).uint32(message.asset_groups_count);
        }
        return writer;
    };

    CardanoTxMint.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoTxMint();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.asset_groups_count = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoTxMint.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.asset_groups_count != null && message.hasOwnProperty("asset_groups_count")) {
            object.asset_groups_count = message.asset_groups_count;
        }
        return object;
    };

    return CardanoTxMint;
})();

// CardanoTxCollateralInput message
$root.CardanoTxCollateralInput = (function() {
    function CardanoTxCollateralInput(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoTxCollateralInput.create = function create(properties) {
        return new CardanoTxCollateralInput(properties);
    };

    CardanoTxCollateralInput.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.prev_hash != null && Object.hasOwnProperty.call(message, "prev_hash")) {
            writer.uint32(10).bytes(message.prev_hash);
        }
        if (message.prev_index != null && Object.hasOwnProperty.call(message, "prev_index")) {
            writer.uint32(16).uint32(message.prev_index);
        }
        return writer;
    };

    CardanoTxCollateralInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoTxCollateralInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.prev_hash = reader.bytes();
                break;
            case 2:
                message.prev_index = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoTxCollateralInput.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.prev_hash != null && message.hasOwnProperty("prev_hash")) {
            object.prev_hash = $util.base64.encode(message.prev_hash, 0, message.prev_hash.length);
        }
        if (message.prev_index != null && message.hasOwnProperty("prev_index")) {
            object.prev_index = message.prev_index;
        }
        return object;
    };

    return CardanoTxCollateralInput;
})();

// CardanoTxRequiredSigner message
$root.CardanoTxRequiredSigner = (function() {
    function CardanoTxRequiredSigner(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoTxRequiredSigner.create = function create(properties) {
        return new CardanoTxRequiredSigner(properties);
    };

    CardanoTxRequiredSigner.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.key_hash != null && Object.hasOwnProperty.call(message, "key_hash")) {
            writer.uint32(10).bytes(message.key_hash);
        }
        if (message.key_path != null && message.key_path.length) {
            for (var i = 0; i < message.key_path.length; ++i) {
                writer.uint32(16).uint32(message.key_path[i]);
            }
        }
        return writer;
    };

    CardanoTxRequiredSigner.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoTxRequiredSigner();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.key_hash = reader.bytes();
                break;
            case 2:
                if (!(message.key_path && message.key_path.length)) message.key_path = [];
                message.key_path.push(reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoTxRequiredSigner.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.key_hash != null && message.hasOwnProperty("key_hash")) {
            object.key_hash = $util.base64.encode(message.key_hash, 0, message.key_hash.length);
        }
        if (message.key_path && message.key_path.length) {
            object.key_path = [];
            for (var j = 0; j < message.key_path.length; ++j) {
                object.key_path[j] = message.key_path[j];
            }
        }
        return object;
    };

    return CardanoTxRequiredSigner;
})();

// CardanoTxReferenceInput message
$root.CardanoTxReferenceInput = (function() {
    function CardanoTxReferenceInput(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoTxReferenceInput.create = function create(properties) {
        return new CardanoTxReferenceInput(properties);
    };

    CardanoTxReferenceInput.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.prev_hash != null && Object.hasOwnProperty.call(message, "prev_hash")) {
            writer.uint32(10).bytes(message.prev_hash);
        }
        if (message.prev_index != null && Object.hasOwnProperty.call(message, "prev_index")) {
            writer.uint32(16).uint32(message.prev_index);
        }
        return writer;
    };

    CardanoTxReferenceInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoTxReferenceInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.prev_hash = reader.bytes();
                break;
            case 2:
                message.prev_index = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoTxReferenceInput.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.prev_hash != null && message.hasOwnProperty("prev_hash")) {
            object.prev_hash = $util.base64.encode(message.prev_hash, 0, message.prev_hash.length);
        }
        if (message.prev_index != null && message.hasOwnProperty("prev_index")) {
            object.prev_index = message.prev_index;
        }
        return object;
    };

    return CardanoTxReferenceInput;
})();

// CardanoTxItemAck message
$root.CardanoTxItemAck = (function() {
    function CardanoTxItemAck(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoTxItemAck.create = function create(properties) {
        return new CardanoTxItemAck(properties);
    };

    CardanoTxItemAck.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    CardanoTxItemAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoTxItemAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoTxItemAck.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return CardanoTxItemAck;
})();

// CardanoTxAuxiliaryDataSupplement message
$root.CardanoTxAuxiliaryDataSupplement = (function() {
    function CardanoTxAuxiliaryDataSupplement(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoTxAuxiliaryDataSupplement.create = function create(properties) {
        return new CardanoTxAuxiliaryDataSupplement(properties);
    };

    CardanoTxAuxiliaryDataSupplement.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type")) {
            writer.uint32(8).int32(message.type);
        }
        if (message.auxiliary_data_hash != null && Object.hasOwnProperty.call(message, "auxiliary_data_hash")) {
            writer.uint32(18).bytes(message.auxiliary_data_hash);
        }
        if (message.cvote_registration_signature != null && Object.hasOwnProperty.call(message, "cvote_registration_signature")) {
            writer.uint32(26).bytes(message.cvote_registration_signature);
        }
        return writer;
    };

    CardanoTxAuxiliaryDataSupplement.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoTxAuxiliaryDataSupplement();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.auxiliary_data_hash = reader.bytes();
                break;
            case 3:
                message.cvote_registration_signature = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoTxAuxiliaryDataSupplement.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.type != null && message.hasOwnProperty("type")) {
            object.type = message.type;
        }
        if (message.auxiliary_data_hash != null && message.hasOwnProperty("auxiliary_data_hash")) {
            object.auxiliary_data_hash = $util.base64.encode(message.auxiliary_data_hash, 0, message.auxiliary_data_hash.length);
        }
        if (message.cvote_registration_signature != null && message.hasOwnProperty("cvote_registration_signature")) {
            object.cvote_registration_signature = $util.base64.encode(message.cvote_registration_signature, 0, message.cvote_registration_signature.length);
        }
        return object;
    };

    return CardanoTxAuxiliaryDataSupplement;
})();

// CardanoTxWitnessRequest message
$root.CardanoTxWitnessRequest = (function() {
    function CardanoTxWitnessRequest(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoTxWitnessRequest.create = function create(properties) {
        return new CardanoTxWitnessRequest(properties);
    };

    CardanoTxWitnessRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.path != null && message.path.length) {
            for (var i = 0; i < message.path.length; ++i) {
                writer.uint32(8).uint32(message.path[i]);
            }
        }
        return writer;
    };

    CardanoTxWitnessRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoTxWitnessRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.path && message.path.length)) message.path = [];
                message.path.push(reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoTxWitnessRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.path && message.path.length) {
            object.path = [];
            for (var j = 0; j < message.path.length; ++j) {
                object.path[j] = message.path[j];
            }
        }
        return object;
    };

    return CardanoTxWitnessRequest;
})();

// CardanoTxWitnessResponse message
$root.CardanoTxWitnessResponse = (function() {
    function CardanoTxWitnessResponse(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoTxWitnessResponse.create = function create(properties) {
        return new CardanoTxWitnessResponse(properties);
    };

    CardanoTxWitnessResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type")) {
            writer.uint32(8).int32(message.type);
        }
        if (message.pub_key != null && Object.hasOwnProperty.call(message, "pub_key")) {
            writer.uint32(18).bytes(message.pub_key);
        }
        if (message.signature != null && Object.hasOwnProperty.call(message, "signature")) {
            writer.uint32(26).bytes(message.signature);
        }
        if (message.chain_code != null && Object.hasOwnProperty.call(message, "chain_code")) {
            writer.uint32(34).bytes(message.chain_code);
        }
        return writer;
    };

    CardanoTxWitnessResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoTxWitnessResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.pub_key = reader.bytes();
                break;
            case 3:
                message.signature = reader.bytes();
                break;
            case 4:
                message.chain_code = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoTxWitnessResponse.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.type != null && message.hasOwnProperty("type")) {
            object.type = message.type;
        }
        if (message.pub_key != null && message.hasOwnProperty("pub_key")) {
            object.pub_key = $util.base64.encode(message.pub_key, 0, message.pub_key.length);
        }
        if (message.signature != null && message.hasOwnProperty("signature")) {
            object.signature = $util.base64.encode(message.signature, 0, message.signature.length);
        }
        if (message.chain_code != null && message.hasOwnProperty("chain_code")) {
            object.chain_code = $util.base64.encode(message.chain_code, 0, message.chain_code.length);
        }
        return object;
    };

    return CardanoTxWitnessResponse;
})();

// CardanoTxHostAck message
$root.CardanoTxHostAck = (function() {
    function CardanoTxHostAck(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoTxHostAck.create = function create(properties) {
        return new CardanoTxHostAck(properties);
    };

    CardanoTxHostAck.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    CardanoTxHostAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoTxHostAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoTxHostAck.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return CardanoTxHostAck;
})();

// CardanoTxBodyHash message
$root.CardanoTxBodyHash = (function() {
    function CardanoTxBodyHash(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoTxBodyHash.create = function create(properties) {
        return new CardanoTxBodyHash(properties);
    };

    CardanoTxBodyHash.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.tx_hash != null && Object.hasOwnProperty.call(message, "tx_hash")) {
            writer.uint32(10).bytes(message.tx_hash);
        }
        return writer;
    };

    CardanoTxBodyHash.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoTxBodyHash();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.tx_hash = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoTxBodyHash.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.tx_hash != null && message.hasOwnProperty("tx_hash")) {
            object.tx_hash = $util.base64.encode(message.tx_hash, 0, message.tx_hash.length);
        }
        return object;
    };

    return CardanoTxBodyHash;
})();

// CardanoSignTxFinished message
$root.CardanoSignTxFinished = (function() {
    function CardanoSignTxFinished(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoSignTxFinished.create = function create(properties) {
        return new CardanoSignTxFinished(properties);
    };

    CardanoSignTxFinished.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    CardanoSignTxFinished.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoSignTxFinished();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoSignTxFinished.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return CardanoSignTxFinished;
})();

// CardanoSignMessageInit message
$root.CardanoSignMessageInit = (function() {
    function CardanoSignMessageInit(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoSignMessageInit.create = function create(properties) {
        return new CardanoSignMessageInit(properties);
    };

    CardanoSignMessageInit.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.protocol_magic != null && Object.hasOwnProperty.call(message, "protocol_magic")) {
            writer.uint32(8).uint32(message.protocol_magic);
        }
        if (message.network_id != null && Object.hasOwnProperty.call(message, "network_id")) {
            writer.uint32(16).uint32(message.network_id);
        }
        if (message.signing_path != null && message.signing_path.length) {
            for (var i = 0; i < message.signing_path.length; ++i) {
                writer.uint32(24).uint32(message.signing_path[i]);
            }
        }
        if (message.payload_size != null && Object.hasOwnProperty.call(message, "payload_size")) {
            writer.uint32(32).uint32(message.payload_size);
        }
        if (message.prefer_hex_display != null && Object.hasOwnProperty.call(message, "prefer_hex_display")) {
            writer.uint32(40).bool(message.prefer_hex_display);
        }
        if (message.address_parameters != null && Object.hasOwnProperty.call(message, "address_parameters")) {
            writer.uint32(50).string(message.address_parameters);
        }
        if (message.derivation_type != null && Object.hasOwnProperty.call(message, "derivation_type")) {
            writer.uint32(56).int32(message.derivation_type);
        }
        return writer;
    };

    CardanoSignMessageInit.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoSignMessageInit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.protocol_magic = reader.uint32();
                break;
            case 2:
                message.network_id = reader.uint32();
                break;
            case 3:
                if (!(message.signing_path && message.signing_path.length)) message.signing_path = [];
                message.signing_path.push(reader.uint32());
                break;
            case 4:
                message.payload_size = reader.uint32();
                break;
            case 5:
                message.prefer_hex_display = reader.bool();
                break;
            case 6:
                message.address_parameters = reader.string();
                break;
            case 7:
                message.derivation_type = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoSignMessageInit.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.protocol_magic != null && message.hasOwnProperty("protocol_magic")) {
            object.protocol_magic = message.protocol_magic;
        }
        if (message.network_id != null && message.hasOwnProperty("network_id")) {
            object.network_id = message.network_id;
        }
        if (message.signing_path && message.signing_path.length) {
            object.signing_path = [];
            for (var j = 0; j < message.signing_path.length; ++j) {
                object.signing_path[j] = message.signing_path[j];
            }
        }
        if (message.payload_size != null && message.hasOwnProperty("payload_size")) {
            object.payload_size = message.payload_size;
        }
        if (message.prefer_hex_display != null && message.hasOwnProperty("prefer_hex_display")) {
            object.prefer_hex_display = message.prefer_hex_display;
        }
        if (message.address_parameters != null && message.hasOwnProperty("address_parameters")) {
            object.address_parameters = message.address_parameters;
        }
        if (message.derivation_type != null && message.hasOwnProperty("derivation_type")) {
            object.derivation_type = message.derivation_type;
        }
        return object;
    };

    return CardanoSignMessageInit;
})();

// CardanoMessageDataRequest message
$root.CardanoMessageDataRequest = (function() {
    function CardanoMessageDataRequest(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoMessageDataRequest.create = function create(properties) {
        return new CardanoMessageDataRequest(properties);
    };

    CardanoMessageDataRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.length != null && Object.hasOwnProperty.call(message, "length")) {
            writer.uint32(8).uint32(message.length);
        }
        if (message.offset != null && Object.hasOwnProperty.call(message, "offset")) {
            writer.uint32(16).uint32(message.offset);
        }
        return writer;
    };

    CardanoMessageDataRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoMessageDataRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.length = reader.uint32();
                break;
            case 2:
                message.offset = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoMessageDataRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.length != null && message.hasOwnProperty("length")) {
            object.length = message.length;
        }
        if (message.offset != null && message.hasOwnProperty("offset")) {
            object.offset = message.offset;
        }
        return object;
    };

    return CardanoMessageDataRequest;
})();

// CardanoMessageDataResponse message
$root.CardanoMessageDataResponse = (function() {
    function CardanoMessageDataResponse(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoMessageDataResponse.create = function create(properties) {
        return new CardanoMessageDataResponse(properties);
    };

    CardanoMessageDataResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.data != null && Object.hasOwnProperty.call(message, "data")) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    };

    CardanoMessageDataResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoMessageDataResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoMessageDataResponse.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.data != null && message.hasOwnProperty("data")) {
            object.data = $util.base64.encode(message.data, 0, message.data.length);
        }
        return object;
    };

    return CardanoMessageDataResponse;
})();

// CardanoMessageSignature message
$root.CardanoMessageSignature = (function() {
    function CardanoMessageSignature(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CardanoMessageSignature.create = function create(properties) {
        return new CardanoMessageSignature(properties);
    };

    CardanoMessageSignature.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.signature != null && Object.hasOwnProperty.call(message, "signature")) {
            writer.uint32(10).bytes(message.signature);
        }
        if (message.address != null && Object.hasOwnProperty.call(message, "address")) {
            writer.uint32(18).bytes(message.address);
        }
        if (message.pub_key != null && Object.hasOwnProperty.call(message, "pub_key")) {
            writer.uint32(26).bytes(message.pub_key);
        }
        return writer;
    };

    CardanoMessageSignature.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CardanoMessageSignature();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.signature = reader.bytes();
                break;
            case 2:
                message.address = reader.bytes();
                break;
            case 3:
                message.pub_key = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CardanoMessageSignature.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.signature != null && message.hasOwnProperty("signature")) {
            object.signature = $util.base64.encode(message.signature, 0, message.signature.length);
        }
        if (message.address != null && message.hasOwnProperty("address")) {
            object.address = $util.base64.encode(message.address, 0, message.address.length);
        }
        if (message.pub_key != null && message.hasOwnProperty("pub_key")) {
            object.pub_key = $util.base64.encode(message.pub_key, 0, message.pub_key.length);
        }
        return object;
    };

    return CardanoMessageSignature;
})();

// Success message
$root.Success = (function() {
    function Success(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    Success.create = function create(properties) {
        return new Success(properties);
    };

    Success.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.message != null && Object.hasOwnProperty.call(message, "message")) {
            writer.uint32(10).string(message.message);
        }
        return writer;
    };

    Success.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.Success();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.message = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Success.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.message != null && message.hasOwnProperty("message")) {
            object.message = message.message;
        }
        return object;
    };

    return Success;
})();

// Failure message
$root.Failure = (function() {
    function Failure(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    Failure.create = function create(properties) {
        return new Failure(properties);
    };

    Failure.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code")) {
            writer.uint32(8).int32(message.code);
        }
        if (message.message != null && Object.hasOwnProperty.call(message, "message")) {
            writer.uint32(18).string(message.message);
        }
        return writer;
    };

    Failure.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.Failure();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.code = reader.int32();
                break;
            case 2:
                message.message = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Failure.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.code != null && message.hasOwnProperty("code")) {
            object.code = message.code;
        }
        if (message.message != null && message.hasOwnProperty("message")) {
            object.message = message.message;
        }
        return object;
    };

    return Failure;
})();

// ButtonRequest message
$root.ButtonRequest = (function() {
    function ButtonRequest(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    ButtonRequest.create = function create(properties) {
        return new ButtonRequest(properties);
    };

    ButtonRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code")) {
            writer.uint32(8).int32(message.code);
        }
        if (message.pages != null && Object.hasOwnProperty.call(message, "pages")) {
            writer.uint32(16).uint32(message.pages);
        }
        if (message.name != null && Object.hasOwnProperty.call(message, "name")) {
            writer.uint32(34).string(message.name);
        }
        return writer;
    };

    ButtonRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.ButtonRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.code = reader.int32();
                break;
            case 2:
                message.pages = reader.uint32();
                break;
            case 4:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ButtonRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.code != null && message.hasOwnProperty("code")) {
            object.code = message.code;
        }
        if (message.pages != null && message.hasOwnProperty("pages")) {
            object.pages = message.pages;
        }
        if (message.name != null && message.hasOwnProperty("name")) {
            object.name = message.name;
        }
        return object;
    };

    return ButtonRequest;
})();

// ButtonAck message
$root.ButtonAck = (function() {
    function ButtonAck(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    ButtonAck.create = function create(properties) {
        return new ButtonAck(properties);
    };

    ButtonAck.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    ButtonAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.ButtonAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ButtonAck.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return ButtonAck;
})();

// PinMatrixRequest message
$root.PinMatrixRequest = (function() {
    function PinMatrixRequest(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    PinMatrixRequest.create = function create(properties) {
        return new PinMatrixRequest(properties);
    };

    PinMatrixRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type")) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    };

    PinMatrixRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.PinMatrixRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    PinMatrixRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.type != null && message.hasOwnProperty("type")) {
            object.type = message.type;
        }
        return object;
    };

    return PinMatrixRequest;
})();

// PinMatrixAck message
$root.PinMatrixAck = (function() {
    function PinMatrixAck(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    PinMatrixAck.create = function create(properties) {
        return new PinMatrixAck(properties);
    };

    PinMatrixAck.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.pin != null && Object.hasOwnProperty.call(message, "pin")) {
            writer.uint32(10).string(message.pin);
        }
        return writer;
    };

    PinMatrixAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.PinMatrixAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.pin = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    PinMatrixAck.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.pin != null && message.hasOwnProperty("pin")) {
            object.pin = message.pin;
        }
        return object;
    };

    return PinMatrixAck;
})();

// PassphraseRequest message
$root.PassphraseRequest = (function() {
    function PassphraseRequest(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    PassphraseRequest.create = function create(properties) {
        return new PassphraseRequest(properties);
    };

    PassphraseRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message._on_device != null && Object.hasOwnProperty.call(message, "_on_device")) {
            writer.uint32(8).bool(message._on_device);
        }
        return writer;
    };

    PassphraseRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.PassphraseRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message._on_device = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    PassphraseRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message._on_device != null && message.hasOwnProperty("_on_device")) {
            object._on_device = message._on_device;
        }
        return object;
    };

    return PassphraseRequest;
})();

// PassphraseAck message
$root.PassphraseAck = (function() {
    function PassphraseAck(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    PassphraseAck.create = function create(properties) {
        return new PassphraseAck(properties);
    };

    PassphraseAck.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.passphrase != null && Object.hasOwnProperty.call(message, "passphrase")) {
            writer.uint32(10).string(message.passphrase);
        }
        if (message._state != null && Object.hasOwnProperty.call(message, "_state")) {
            writer.uint32(18).bytes(message._state);
        }
        if (message.on_device != null && Object.hasOwnProperty.call(message, "on_device")) {
            writer.uint32(24).bool(message.on_device);
        }
        return writer;
    };

    PassphraseAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.PassphraseAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.passphrase = reader.string();
                break;
            case 2:
                message._state = reader.bytes();
                break;
            case 3:
                message.on_device = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    PassphraseAck.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.passphrase != null && message.hasOwnProperty("passphrase")) {
            object.passphrase = message.passphrase;
        }
        if (message._state != null && message.hasOwnProperty("_state")) {
            object._state = $util.base64.encode(message._state, 0, message._state.length);
        }
        if (message.on_device != null && message.hasOwnProperty("on_device")) {
            object.on_device = message.on_device;
        }
        return object;
    };

    return PassphraseAck;
})();

// Deprecated_PassphraseStateRequest message
$root.Deprecated_PassphraseStateRequest = (function() {
    function Deprecated_PassphraseStateRequest(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    Deprecated_PassphraseStateRequest.create = function create(properties) {
        return new Deprecated_PassphraseStateRequest(properties);
    };

    Deprecated_PassphraseStateRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.state != null && Object.hasOwnProperty.call(message, "state")) {
            writer.uint32(10).bytes(message.state);
        }
        return writer;
    };

    Deprecated_PassphraseStateRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.Deprecated_PassphraseStateRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.state = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Deprecated_PassphraseStateRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.state != null && message.hasOwnProperty("state")) {
            object.state = $util.base64.encode(message.state, 0, message.state.length);
        }
        return object;
    };

    return Deprecated_PassphraseStateRequest;
})();

// Deprecated_PassphraseStateAck message
$root.Deprecated_PassphraseStateAck = (function() {
    function Deprecated_PassphraseStateAck(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    Deprecated_PassphraseStateAck.create = function create(properties) {
        return new Deprecated_PassphraseStateAck(properties);
    };

    Deprecated_PassphraseStateAck.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    Deprecated_PassphraseStateAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.Deprecated_PassphraseStateAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Deprecated_PassphraseStateAck.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return Deprecated_PassphraseStateAck;
})();

// HDNodeType message
$root.HDNodeType = (function() {
    function HDNodeType(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    HDNodeType.create = function create(properties) {
        return new HDNodeType(properties);
    };

    HDNodeType.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.depth != null && Object.hasOwnProperty.call(message, "depth")) {
            writer.uint32(8).uint32(message.depth);
        }
        if (message.fingerprint != null && Object.hasOwnProperty.call(message, "fingerprint")) {
            writer.uint32(16).uint32(message.fingerprint);
        }
        if (message.child_num != null && Object.hasOwnProperty.call(message, "child_num")) {
            writer.uint32(24).uint32(message.child_num);
        }
        if (message.chain_code != null && Object.hasOwnProperty.call(message, "chain_code")) {
            writer.uint32(34).bytes(message.chain_code);
        }
        if (message.private_key != null && Object.hasOwnProperty.call(message, "private_key")) {
            writer.uint32(42).bytes(message.private_key);
        }
        if (message.public_key != null && Object.hasOwnProperty.call(message, "public_key")) {
            writer.uint32(50).bytes(message.public_key);
        }
        return writer;
    };

    HDNodeType.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.HDNodeType();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.depth = reader.uint32();
                break;
            case 2:
                message.fingerprint = reader.uint32();
                break;
            case 3:
                message.child_num = reader.uint32();
                break;
            case 4:
                message.chain_code = reader.bytes();
                break;
            case 5:
                message.private_key = reader.bytes();
                break;
            case 6:
                message.public_key = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    HDNodeType.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.depth != null && message.hasOwnProperty("depth")) {
            object.depth = message.depth;
        }
        if (message.fingerprint != null && message.hasOwnProperty("fingerprint")) {
            object.fingerprint = message.fingerprint;
        }
        if (message.child_num != null && message.hasOwnProperty("child_num")) {
            object.child_num = message.child_num;
        }
        if (message.chain_code != null && message.hasOwnProperty("chain_code")) {
            object.chain_code = $util.base64.encode(message.chain_code, 0, message.chain_code.length);
        }
        if (message.private_key != null && message.hasOwnProperty("private_key")) {
            object.private_key = $util.base64.encode(message.private_key, 0, message.private_key.length);
        }
        if (message.public_key != null && message.hasOwnProperty("public_key")) {
            object.public_key = $util.base64.encode(message.public_key, 0, message.public_key.length);
        }
        return object;
    };

    return HDNodeType;
})();

// PaymentRequest message
$root.PaymentRequest = (function() {
    function PaymentRequest(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    PaymentRequest.create = function create(properties) {
        return new PaymentRequest(properties);
    };

    PaymentRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce")) {
            writer.uint32(10).bytes(message.nonce);
        }
        if (message.recipient_name != null && Object.hasOwnProperty.call(message, "recipient_name")) {
            writer.uint32(18).string(message.recipient_name);
        }
        if (message.memos != null && message.memos.length) {
            for (var i = 0; i < message.memos.length; ++i) {
                writer.uint32(26).string(message.memos[i]);
            }
        }
        if (message.amount != null && Object.hasOwnProperty.call(message, "amount")) {
            writer.uint32(32).uint64(message.amount);
        }
        if (message.signature != null && Object.hasOwnProperty.call(message, "signature")) {
            writer.uint32(42).bytes(message.signature);
        }
        return writer;
    };

    PaymentRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.PaymentRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nonce = reader.bytes();
                break;
            case 2:
                message.recipient_name = reader.string();
                break;
            case 3:
                if (!(message.memos && message.memos.length)) message.memos = [];
                message.memos.push(reader.string());
                break;
            case 4:
                message.amount = reader.uint64();
                break;
            case 5:
                message.signature = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    PaymentRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.nonce != null && message.hasOwnProperty("nonce")) {
            object.nonce = $util.base64.encode(message.nonce, 0, message.nonce.length);
        }
        if (message.recipient_name != null && message.hasOwnProperty("recipient_name")) {
            object.recipient_name = message.recipient_name;
        }
        if (message.memos && message.memos.length) {
            object.memos = [];
            for (var j = 0; j < message.memos.length; ++j) {
                object.memos[j] = message.memos[j];
            }
        }
        if (message.amount != null && message.hasOwnProperty("amount")) {
            object.amount = message.amount;
        }
        if (message.signature != null && message.hasOwnProperty("signature")) {
            object.signature = $util.base64.encode(message.signature, 0, message.signature.length);
        }
        return object;
    };

    return PaymentRequest;
})();

// CipherKeyValue message
$root.CipherKeyValue = (function() {
    function CipherKeyValue(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CipherKeyValue.create = function create(properties) {
        return new CipherKeyValue(properties);
    };

    CipherKeyValue.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.key != null && Object.hasOwnProperty.call(message, "key")) {
            writer.uint32(18).string(message.key);
        }
        if (message.value != null && Object.hasOwnProperty.call(message, "value")) {
            writer.uint32(26).bytes(message.value);
        }
        if (message.encrypt != null && Object.hasOwnProperty.call(message, "encrypt")) {
            writer.uint32(32).bool(message.encrypt);
        }
        if (message.ask_on_encrypt != null && Object.hasOwnProperty.call(message, "ask_on_encrypt")) {
            writer.uint32(40).bool(message.ask_on_encrypt);
        }
        if (message.ask_on_decrypt != null && Object.hasOwnProperty.call(message, "ask_on_decrypt")) {
            writer.uint32(48).bool(message.ask_on_decrypt);
        }
        if (message.iv != null && Object.hasOwnProperty.call(message, "iv")) {
            writer.uint32(58).bytes(message.iv);
        }
        return writer;
    };

    CipherKeyValue.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CipherKeyValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.key = reader.string();
                break;
            case 3:
                message.value = reader.bytes();
                break;
            case 4:
                message.encrypt = reader.bool();
                break;
            case 5:
                message.ask_on_encrypt = reader.bool();
                break;
            case 6:
                message.ask_on_decrypt = reader.bool();
                break;
            case 7:
                message.iv = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CipherKeyValue.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.key != null && message.hasOwnProperty("key")) {
            object.key = message.key;
        }
        if (message.value != null && message.hasOwnProperty("value")) {
            object.value = $util.base64.encode(message.value, 0, message.value.length);
        }
        if (message.encrypt != null && message.hasOwnProperty("encrypt")) {
            object.encrypt = message.encrypt;
        }
        if (message.ask_on_encrypt != null && message.hasOwnProperty("ask_on_encrypt")) {
            object.ask_on_encrypt = message.ask_on_encrypt;
        }
        if (message.ask_on_decrypt != null && message.hasOwnProperty("ask_on_decrypt")) {
            object.ask_on_decrypt = message.ask_on_decrypt;
        }
        if (message.iv != null && message.hasOwnProperty("iv")) {
            object.iv = $util.base64.encode(message.iv, 0, message.iv.length);
        }
        return object;
    };

    return CipherKeyValue;
})();

// CipheredKeyValue message
$root.CipheredKeyValue = (function() {
    function CipheredKeyValue(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CipheredKeyValue.create = function create(properties) {
        return new CipheredKeyValue(properties);
    };

    CipheredKeyValue.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value")) {
            writer.uint32(10).bytes(message.value);
        }
        return writer;
    };

    CipheredKeyValue.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CipheredKeyValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.value = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CipheredKeyValue.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.value != null && message.hasOwnProperty("value")) {
            object.value = $util.base64.encode(message.value, 0, message.value.length);
        }
        return object;
    };

    return CipheredKeyValue;
})();

// IdentityType message
$root.IdentityType = (function() {
    function IdentityType(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    IdentityType.create = function create(properties) {
        return new IdentityType(properties);
    };

    IdentityType.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.proto != null && Object.hasOwnProperty.call(message, "proto")) {
            writer.uint32(10).string(message.proto);
        }
        if (message.user != null && Object.hasOwnProperty.call(message, "user")) {
            writer.uint32(18).string(message.user);
        }
        if (message.host != null && Object.hasOwnProperty.call(message, "host")) {
            writer.uint32(26).string(message.host);
        }
        if (message.port != null && Object.hasOwnProperty.call(message, "port")) {
            writer.uint32(34).string(message.port);
        }
        if (message.path != null && Object.hasOwnProperty.call(message, "path")) {
            writer.uint32(42).string(message.path);
        }
        if (message.index != null && Object.hasOwnProperty.call(message, "index")) {
            writer.uint32(48).uint32(message.index);
        }
        return writer;
    };

    IdentityType.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.IdentityType();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.proto = reader.string();
                break;
            case 2:
                message.user = reader.string();
                break;
            case 3:
                message.host = reader.string();
                break;
            case 4:
                message.port = reader.string();
                break;
            case 5:
                message.path = reader.string();
                break;
            case 6:
                message.index = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    IdentityType.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.proto != null && message.hasOwnProperty("proto")) {
            object.proto = message.proto;
        }
        if (message.user != null && message.hasOwnProperty("user")) {
            object.user = message.user;
        }
        if (message.host != null && message.hasOwnProperty("host")) {
            object.host = message.host;
        }
        if (message.port != null && message.hasOwnProperty("port")) {
            object.port = message.port;
        }
        if (message.path != null && message.hasOwnProperty("path")) {
            object.path = message.path;
        }
        if (message.index != null && message.hasOwnProperty("index")) {
            object.index = message.index;
        }
        return object;
    };

    return IdentityType;
})();

// SignIdentity message
$root.SignIdentity = (function() {
    function SignIdentity(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    SignIdentity.create = function create(properties) {
        return new SignIdentity(properties);
    };

    SignIdentity.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.identity != null && Object.hasOwnProperty.call(message, "identity")) {
            writer.uint32(10).string(message.identity);
        }
        if (message.challenge_hidden != null && Object.hasOwnProperty.call(message, "challenge_hidden")) {
            writer.uint32(18).bytes(message.challenge_hidden);
        }
        if (message.challenge_visual != null && Object.hasOwnProperty.call(message, "challenge_visual")) {
            writer.uint32(26).string(message.challenge_visual);
        }
        if (message.ecdsa_curve_name != null && Object.hasOwnProperty.call(message, "ecdsa_curve_name")) {
            writer.uint32(34).string(message.ecdsa_curve_name);
        }
        return writer;
    };

    SignIdentity.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.SignIdentity();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.identity = reader.string();
                break;
            case 2:
                message.challenge_hidden = reader.bytes();
                break;
            case 3:
                message.challenge_visual = reader.string();
                break;
            case 4:
                message.ecdsa_curve_name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    SignIdentity.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.identity != null && message.hasOwnProperty("identity")) {
            object.identity = message.identity;
        }
        if (message.challenge_hidden != null && message.hasOwnProperty("challenge_hidden")) {
            object.challenge_hidden = $util.base64.encode(message.challenge_hidden, 0, message.challenge_hidden.length);
        }
        if (message.challenge_visual != null && message.hasOwnProperty("challenge_visual")) {
            object.challenge_visual = message.challenge_visual;
        }
        if (message.ecdsa_curve_name != null && message.hasOwnProperty("ecdsa_curve_name")) {
            object.ecdsa_curve_name = message.ecdsa_curve_name;
        }
        return object;
    };

    return SignIdentity;
})();

// SignedIdentity message
$root.SignedIdentity = (function() {
    function SignedIdentity(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    SignedIdentity.create = function create(properties) {
        return new SignedIdentity(properties);
    };

    SignedIdentity.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address != null && Object.hasOwnProperty.call(message, "address")) {
            writer.uint32(10).string(message.address);
        }
        if (message.public_key != null && Object.hasOwnProperty.call(message, "public_key")) {
            writer.uint32(18).bytes(message.public_key);
        }
        if (message.signature != null && Object.hasOwnProperty.call(message, "signature")) {
            writer.uint32(26).bytes(message.signature);
        }
        return writer;
    };

    SignedIdentity.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.SignedIdentity();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.address = reader.string();
                break;
            case 2:
                message.public_key = reader.bytes();
                break;
            case 3:
                message.signature = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    SignedIdentity.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address != null && message.hasOwnProperty("address")) {
            object.address = message.address;
        }
        if (message.public_key != null && message.hasOwnProperty("public_key")) {
            object.public_key = $util.base64.encode(message.public_key, 0, message.public_key.length);
        }
        if (message.signature != null && message.hasOwnProperty("signature")) {
            object.signature = $util.base64.encode(message.signature, 0, message.signature.length);
        }
        return object;
    };

    return SignedIdentity;
})();

// GetECDHSessionKey message
$root.GetECDHSessionKey = (function() {
    function GetECDHSessionKey(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    GetECDHSessionKey.create = function create(properties) {
        return new GetECDHSessionKey(properties);
    };

    GetECDHSessionKey.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.identity != null && Object.hasOwnProperty.call(message, "identity")) {
            writer.uint32(10).string(message.identity);
        }
        if (message.peer_public_key != null && Object.hasOwnProperty.call(message, "peer_public_key")) {
            writer.uint32(18).bytes(message.peer_public_key);
        }
        if (message.ecdsa_curve_name != null && Object.hasOwnProperty.call(message, "ecdsa_curve_name")) {
            writer.uint32(26).string(message.ecdsa_curve_name);
        }
        return writer;
    };

    GetECDHSessionKey.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.GetECDHSessionKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.identity = reader.string();
                break;
            case 2:
                message.peer_public_key = reader.bytes();
                break;
            case 3:
                message.ecdsa_curve_name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    GetECDHSessionKey.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.identity != null && message.hasOwnProperty("identity")) {
            object.identity = message.identity;
        }
        if (message.peer_public_key != null && message.hasOwnProperty("peer_public_key")) {
            object.peer_public_key = $util.base64.encode(message.peer_public_key, 0, message.peer_public_key.length);
        }
        if (message.ecdsa_curve_name != null && message.hasOwnProperty("ecdsa_curve_name")) {
            object.ecdsa_curve_name = message.ecdsa_curve_name;
        }
        return object;
    };

    return GetECDHSessionKey;
})();

// ECDHSessionKey message
$root.ECDHSessionKey = (function() {
    function ECDHSessionKey(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    ECDHSessionKey.create = function create(properties) {
        return new ECDHSessionKey(properties);
    };

    ECDHSessionKey.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.session_key != null && Object.hasOwnProperty.call(message, "session_key")) {
            writer.uint32(10).bytes(message.session_key);
        }
        if (message.public_key != null && Object.hasOwnProperty.call(message, "public_key")) {
            writer.uint32(18).bytes(message.public_key);
        }
        return writer;
    };

    ECDHSessionKey.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.ECDHSessionKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.session_key = reader.bytes();
                break;
            case 2:
                message.public_key = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ECDHSessionKey.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.session_key != null && message.hasOwnProperty("session_key")) {
            object.session_key = $util.base64.encode(message.session_key, 0, message.session_key.length);
        }
        if (message.public_key != null && message.hasOwnProperty("public_key")) {
            object.public_key = $util.base64.encode(message.public_key, 0, message.public_key.length);
        }
        return object;
    };

    return ECDHSessionKey;
})();

// PaymentNotification message
$root.PaymentNotification = (function() {
    function PaymentNotification(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    PaymentNotification.create = function create(properties) {
        return new PaymentNotification(properties);
    };

    PaymentNotification.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.payment_req != null && Object.hasOwnProperty.call(message, "payment_req")) {
            writer.uint32(10).string(message.payment_req);
        }
        return writer;
    };

    PaymentNotification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.PaymentNotification();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.payment_req = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    PaymentNotification.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.payment_req != null && message.hasOwnProperty("payment_req")) {
            object.payment_req = message.payment_req;
        }
        return object;
    };

    return PaymentNotification;
})();

// DebugLinkDecision message
$root.DebugLinkDecision = (function() {
    function DebugLinkDecision(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DebugLinkDecision.create = function create(properties) {
        return new DebugLinkDecision(properties);
    };

    DebugLinkDecision.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.button != null && Object.hasOwnProperty.call(message, "button")) {
            writer.uint32(8).int32(message.button);
        }
        if (message.swipe != null && Object.hasOwnProperty.call(message, "swipe")) {
            writer.uint32(16).int32(message.swipe);
        }
        if (message.input != null && Object.hasOwnProperty.call(message, "input")) {
            writer.uint32(26).string(message.input);
        }
        if (message.x != null && Object.hasOwnProperty.call(message, "x")) {
            writer.uint32(32).uint32(message.x);
        }
        if (message.y != null && Object.hasOwnProperty.call(message, "y")) {
            writer.uint32(40).uint32(message.y);
        }
        if (message.wait != null && Object.hasOwnProperty.call(message, "wait")) {
            writer.uint32(48).bool(message.wait);
        }
        if (message.hold_ms != null && Object.hasOwnProperty.call(message, "hold_ms")) {
            writer.uint32(56).uint32(message.hold_ms);
        }
        if (message.physical_button != null && Object.hasOwnProperty.call(message, "physical_button")) {
            writer.uint32(64).int32(message.physical_button);
        }
        if (message.touch_event_type != null && Object.hasOwnProperty.call(message, "touch_event_type")) {
            writer.uint32(72).int32(message.touch_event_type);
        }
        return writer;
    };

    DebugLinkDecision.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DebugLinkDecision();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.button = reader.int32();
                break;
            case 2:
                message.swipe = reader.int32();
                break;
            case 3:
                message.input = reader.string();
                break;
            case 4:
                message.x = reader.uint32();
                break;
            case 5:
                message.y = reader.uint32();
                break;
            case 6:
                message.wait = reader.bool();
                break;
            case 7:
                message.hold_ms = reader.uint32();
                break;
            case 8:
                message.physical_button = reader.int32();
                break;
            case 9:
                message.touch_event_type = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DebugLinkDecision.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.button != null && message.hasOwnProperty("button")) {
            object.button = message.button;
        }
        if (message.swipe != null && message.hasOwnProperty("swipe")) {
            object.swipe = message.swipe;
        }
        if (message.input != null && message.hasOwnProperty("input")) {
            object.input = message.input;
        }
        if (message.x != null && message.hasOwnProperty("x")) {
            object.x = message.x;
        }
        if (message.y != null && message.hasOwnProperty("y")) {
            object.y = message.y;
        }
        if (message.wait != null && message.hasOwnProperty("wait")) {
            object.wait = message.wait;
        }
        if (message.hold_ms != null && message.hasOwnProperty("hold_ms")) {
            object.hold_ms = message.hold_ms;
        }
        if (message.physical_button != null && message.hasOwnProperty("physical_button")) {
            object.physical_button = message.physical_button;
        }
        if (message.touch_event_type != null && message.hasOwnProperty("touch_event_type")) {
            object.touch_event_type = message.touch_event_type;
        }
        return object;
    };

    return DebugLinkDecision;
})();

// DebugLinkLayout message
$root.DebugLinkLayout = (function() {
    function DebugLinkLayout(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DebugLinkLayout.create = function create(properties) {
        return new DebugLinkLayout(properties);
    };

    DebugLinkLayout.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.tokens != null && message.tokens.length) {
            for (var i = 0; i < message.tokens.length; ++i) {
                writer.uint32(10).string(message.tokens[i]);
            }
        }
        return writer;
    };

    DebugLinkLayout.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DebugLinkLayout();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.tokens && message.tokens.length)) message.tokens = [];
                message.tokens.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DebugLinkLayout.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.tokens && message.tokens.length) {
            object.tokens = [];
            for (var j = 0; j < message.tokens.length; ++j) {
                object.tokens[j] = message.tokens[j];
            }
        }
        return object;
    };

    return DebugLinkLayout;
})();

// DebugLinkReseedRandom message
$root.DebugLinkReseedRandom = (function() {
    function DebugLinkReseedRandom(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DebugLinkReseedRandom.create = function create(properties) {
        return new DebugLinkReseedRandom(properties);
    };

    DebugLinkReseedRandom.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value")) {
            writer.uint32(8).uint32(message.value);
        }
        return writer;
    };

    DebugLinkReseedRandom.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DebugLinkReseedRandom();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.value = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DebugLinkReseedRandom.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.value != null && message.hasOwnProperty("value")) {
            object.value = message.value;
        }
        return object;
    };

    return DebugLinkReseedRandom;
})();

// DebugLinkRecordScreen message
$root.DebugLinkRecordScreen = (function() {
    function DebugLinkRecordScreen(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DebugLinkRecordScreen.create = function create(properties) {
        return new DebugLinkRecordScreen(properties);
    };

    DebugLinkRecordScreen.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.target_directory != null && Object.hasOwnProperty.call(message, "target_directory")) {
            writer.uint32(10).string(message.target_directory);
        }
        if (message.refresh_index != null && Object.hasOwnProperty.call(message, "refresh_index")) {
            writer.uint32(16).uint32(message.refresh_index);
        }
        return writer;
    };

    DebugLinkRecordScreen.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DebugLinkRecordScreen();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.target_directory = reader.string();
                break;
            case 2:
                message.refresh_index = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DebugLinkRecordScreen.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.target_directory != null && message.hasOwnProperty("target_directory")) {
            object.target_directory = message.target_directory;
        }
        if (message.refresh_index != null && message.hasOwnProperty("refresh_index")) {
            object.refresh_index = message.refresh_index;
        }
        return object;
    };

    return DebugLinkRecordScreen;
})();

// DebugLinkGetState message
$root.DebugLinkGetState = (function() {
    function DebugLinkGetState(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DebugLinkGetState.create = function create(properties) {
        return new DebugLinkGetState(properties);
    };

    DebugLinkGetState.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.wait_word_list != null && Object.hasOwnProperty.call(message, "wait_word_list")) {
            writer.uint32(8).bool(message.wait_word_list);
        }
        if (message.wait_word_pos != null && Object.hasOwnProperty.call(message, "wait_word_pos")) {
            writer.uint32(16).bool(message.wait_word_pos);
        }
        if (message.wait_layout != null && Object.hasOwnProperty.call(message, "wait_layout")) {
            writer.uint32(24).int32(message.wait_layout);
        }
        if (message.return_empty_state != null && Object.hasOwnProperty.call(message, "return_empty_state")) {
            writer.uint32(32).bool(message.return_empty_state);
        }
        return writer;
    };

    DebugLinkGetState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DebugLinkGetState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.wait_word_list = reader.bool();
                break;
            case 2:
                message.wait_word_pos = reader.bool();
                break;
            case 3:
                message.wait_layout = reader.int32();
                break;
            case 4:
                message.return_empty_state = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DebugLinkGetState.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.wait_word_list != null && message.hasOwnProperty("wait_word_list")) {
            object.wait_word_list = message.wait_word_list;
        }
        if (message.wait_word_pos != null && message.hasOwnProperty("wait_word_pos")) {
            object.wait_word_pos = message.wait_word_pos;
        }
        if (message.wait_layout != null && message.hasOwnProperty("wait_layout")) {
            object.wait_layout = message.wait_layout;
        }
        if (message.return_empty_state != null && message.hasOwnProperty("return_empty_state")) {
            object.return_empty_state = message.return_empty_state;
        }
        return object;
    };

    return DebugLinkGetState;
})();

// DebugLinkState message
$root.DebugLinkState = (function() {
    function DebugLinkState(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DebugLinkState.create = function create(properties) {
        return new DebugLinkState(properties);
    };

    DebugLinkState.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.layout != null && Object.hasOwnProperty.call(message, "layout")) {
            writer.uint32(10).bytes(message.layout);
        }
        if (message.pin != null && Object.hasOwnProperty.call(message, "pin")) {
            writer.uint32(18).string(message.pin);
        }
        if (message.matrix != null && Object.hasOwnProperty.call(message, "matrix")) {
            writer.uint32(26).string(message.matrix);
        }
        if (message.mnemonic_secret != null && Object.hasOwnProperty.call(message, "mnemonic_secret")) {
            writer.uint32(34).bytes(message.mnemonic_secret);
        }
        if (message.node != null && Object.hasOwnProperty.call(message, "node")) {
            writer.uint32(42).string(message.node);
        }
        if (message.passphrase_protection != null && Object.hasOwnProperty.call(message, "passphrase_protection")) {
            writer.uint32(48).bool(message.passphrase_protection);
        }
        if (message.reset_word != null && Object.hasOwnProperty.call(message, "reset_word")) {
            writer.uint32(58).string(message.reset_word);
        }
        if (message.reset_entropy != null && Object.hasOwnProperty.call(message, "reset_entropy")) {
            writer.uint32(66).bytes(message.reset_entropy);
        }
        if (message.recovery_fake_word != null && Object.hasOwnProperty.call(message, "recovery_fake_word")) {
            writer.uint32(74).string(message.recovery_fake_word);
        }
        if (message.recovery_word_pos != null && Object.hasOwnProperty.call(message, "recovery_word_pos")) {
            writer.uint32(80).uint32(message.recovery_word_pos);
        }
        if (message.reset_word_pos != null && Object.hasOwnProperty.call(message, "reset_word_pos")) {
            writer.uint32(88).uint32(message.reset_word_pos);
        }
        if (message.mnemonic_type != null && Object.hasOwnProperty.call(message, "mnemonic_type")) {
            writer.uint32(96).int32(message.mnemonic_type);
        }
        if (message.tokens != null && message.tokens.length) {
            for (var i = 0; i < message.tokens.length; ++i) {
                writer.uint32(106).string(message.tokens[i]);
            }
        }
        return writer;
    };

    DebugLinkState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DebugLinkState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.layout = reader.bytes();
                break;
            case 2:
                message.pin = reader.string();
                break;
            case 3:
                message.matrix = reader.string();
                break;
            case 4:
                message.mnemonic_secret = reader.bytes();
                break;
            case 5:
                message.node = reader.string();
                break;
            case 6:
                message.passphrase_protection = reader.bool();
                break;
            case 7:
                message.reset_word = reader.string();
                break;
            case 8:
                message.reset_entropy = reader.bytes();
                break;
            case 9:
                message.recovery_fake_word = reader.string();
                break;
            case 10:
                message.recovery_word_pos = reader.uint32();
                break;
            case 11:
                message.reset_word_pos = reader.uint32();
                break;
            case 12:
                message.mnemonic_type = reader.int32();
                break;
            case 13:
                if (!(message.tokens && message.tokens.length)) message.tokens = [];
                message.tokens.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DebugLinkState.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.layout != null && message.hasOwnProperty("layout")) {
            object.layout = $util.base64.encode(message.layout, 0, message.layout.length);
        }
        if (message.pin != null && message.hasOwnProperty("pin")) {
            object.pin = message.pin;
        }
        if (message.matrix != null && message.hasOwnProperty("matrix")) {
            object.matrix = message.matrix;
        }
        if (message.mnemonic_secret != null && message.hasOwnProperty("mnemonic_secret")) {
            object.mnemonic_secret = $util.base64.encode(message.mnemonic_secret, 0, message.mnemonic_secret.length);
        }
        if (message.node != null && message.hasOwnProperty("node")) {
            object.node = message.node;
        }
        if (message.passphrase_protection != null && message.hasOwnProperty("passphrase_protection")) {
            object.passphrase_protection = message.passphrase_protection;
        }
        if (message.reset_word != null && message.hasOwnProperty("reset_word")) {
            object.reset_word = message.reset_word;
        }
        if (message.reset_entropy != null && message.hasOwnProperty("reset_entropy")) {
            object.reset_entropy = $util.base64.encode(message.reset_entropy, 0, message.reset_entropy.length);
        }
        if (message.recovery_fake_word != null && message.hasOwnProperty("recovery_fake_word")) {
            object.recovery_fake_word = message.recovery_fake_word;
        }
        if (message.recovery_word_pos != null && message.hasOwnProperty("recovery_word_pos")) {
            object.recovery_word_pos = message.recovery_word_pos;
        }
        if (message.reset_word_pos != null && message.hasOwnProperty("reset_word_pos")) {
            object.reset_word_pos = message.reset_word_pos;
        }
        if (message.mnemonic_type != null && message.hasOwnProperty("mnemonic_type")) {
            object.mnemonic_type = message.mnemonic_type;
        }
        if (message.tokens && message.tokens.length) {
            object.tokens = [];
            for (var j = 0; j < message.tokens.length; ++j) {
                object.tokens[j] = message.tokens[j];
            }
        }
        return object;
    };

    return DebugLinkState;
})();

// DebugLinkGetPairingInfo message
$root.DebugLinkGetPairingInfo = (function() {
    function DebugLinkGetPairingInfo(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DebugLinkGetPairingInfo.create = function create(properties) {
        return new DebugLinkGetPairingInfo(properties);
    };

    DebugLinkGetPairingInfo.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.channel_id != null && Object.hasOwnProperty.call(message, "channel_id")) {
            writer.uint32(10).bytes(message.channel_id);
        }
        if (message.handshake_hash != null && Object.hasOwnProperty.call(message, "handshake_hash")) {
            writer.uint32(18).bytes(message.handshake_hash);
        }
        if (message.nfc_secret_host != null && Object.hasOwnProperty.call(message, "nfc_secret_host")) {
            writer.uint32(26).bytes(message.nfc_secret_host);
        }
        return writer;
    };

    DebugLinkGetPairingInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DebugLinkGetPairingInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.channel_id = reader.bytes();
                break;
            case 2:
                message.handshake_hash = reader.bytes();
                break;
            case 3:
                message.nfc_secret_host = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DebugLinkGetPairingInfo.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.channel_id != null && message.hasOwnProperty("channel_id")) {
            object.channel_id = $util.base64.encode(message.channel_id, 0, message.channel_id.length);
        }
        if (message.handshake_hash != null && message.hasOwnProperty("handshake_hash")) {
            object.handshake_hash = $util.base64.encode(message.handshake_hash, 0, message.handshake_hash.length);
        }
        if (message.nfc_secret_host != null && message.hasOwnProperty("nfc_secret_host")) {
            object.nfc_secret_host = $util.base64.encode(message.nfc_secret_host, 0, message.nfc_secret_host.length);
        }
        return object;
    };

    return DebugLinkGetPairingInfo;
})();

// DebugLinkPairingInfo message
$root.DebugLinkPairingInfo = (function() {
    function DebugLinkPairingInfo(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DebugLinkPairingInfo.create = function create(properties) {
        return new DebugLinkPairingInfo(properties);
    };

    DebugLinkPairingInfo.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.channel_id != null && Object.hasOwnProperty.call(message, "channel_id")) {
            writer.uint32(10).bytes(message.channel_id);
        }
        if (message.handshake_hash != null && Object.hasOwnProperty.call(message, "handshake_hash")) {
            writer.uint32(18).bytes(message.handshake_hash);
        }
        if (message.code_entry_code != null && Object.hasOwnProperty.call(message, "code_entry_code")) {
            writer.uint32(24).uint32(message.code_entry_code);
        }
        if (message.code_qr_code != null && Object.hasOwnProperty.call(message, "code_qr_code")) {
            writer.uint32(34).bytes(message.code_qr_code);
        }
        if (message.nfc_secret_trezor != null && Object.hasOwnProperty.call(message, "nfc_secret_trezor")) {
            writer.uint32(42).bytes(message.nfc_secret_trezor);
        }
        return writer;
    };

    DebugLinkPairingInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DebugLinkPairingInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.channel_id = reader.bytes();
                break;
            case 2:
                message.handshake_hash = reader.bytes();
                break;
            case 3:
                message.code_entry_code = reader.uint32();
                break;
            case 4:
                message.code_qr_code = reader.bytes();
                break;
            case 5:
                message.nfc_secret_trezor = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DebugLinkPairingInfo.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.channel_id != null && message.hasOwnProperty("channel_id")) {
            object.channel_id = $util.base64.encode(message.channel_id, 0, message.channel_id.length);
        }
        if (message.handshake_hash != null && message.hasOwnProperty("handshake_hash")) {
            object.handshake_hash = $util.base64.encode(message.handshake_hash, 0, message.handshake_hash.length);
        }
        if (message.code_entry_code != null && message.hasOwnProperty("code_entry_code")) {
            object.code_entry_code = message.code_entry_code;
        }
        if (message.code_qr_code != null && message.hasOwnProperty("code_qr_code")) {
            object.code_qr_code = $util.base64.encode(message.code_qr_code, 0, message.code_qr_code.length);
        }
        if (message.nfc_secret_trezor != null && message.hasOwnProperty("nfc_secret_trezor")) {
            object.nfc_secret_trezor = $util.base64.encode(message.nfc_secret_trezor, 0, message.nfc_secret_trezor.length);
        }
        return object;
    };

    return DebugLinkPairingInfo;
})();

// DebugLinkStop message
$root.DebugLinkStop = (function() {
    function DebugLinkStop(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DebugLinkStop.create = function create(properties) {
        return new DebugLinkStop(properties);
    };

    DebugLinkStop.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    DebugLinkStop.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DebugLinkStop();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DebugLinkStop.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return DebugLinkStop;
})();

// DebugLinkLog message
$root.DebugLinkLog = (function() {
    function DebugLinkLog(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DebugLinkLog.create = function create(properties) {
        return new DebugLinkLog(properties);
    };

    DebugLinkLog.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.level != null && Object.hasOwnProperty.call(message, "level")) {
            writer.uint32(8).uint32(message.level);
        }
        if (message.bucket != null && Object.hasOwnProperty.call(message, "bucket")) {
            writer.uint32(18).string(message.bucket);
        }
        if (message.text != null && Object.hasOwnProperty.call(message, "text")) {
            writer.uint32(26).string(message.text);
        }
        return writer;
    };

    DebugLinkLog.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DebugLinkLog();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.level = reader.uint32();
                break;
            case 2:
                message.bucket = reader.string();
                break;
            case 3:
                message.text = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DebugLinkLog.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.level != null && message.hasOwnProperty("level")) {
            object.level = message.level;
        }
        if (message.bucket != null && message.hasOwnProperty("bucket")) {
            object.bucket = message.bucket;
        }
        if (message.text != null && message.hasOwnProperty("text")) {
            object.text = message.text;
        }
        return object;
    };

    return DebugLinkLog;
})();

// DebugLinkMemoryRead message
$root.DebugLinkMemoryRead = (function() {
    function DebugLinkMemoryRead(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DebugLinkMemoryRead.create = function create(properties) {
        return new DebugLinkMemoryRead(properties);
    };

    DebugLinkMemoryRead.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address != null && Object.hasOwnProperty.call(message, "address")) {
            writer.uint32(8).uint32(message.address);
        }
        if (message.length != null && Object.hasOwnProperty.call(message, "length")) {
            writer.uint32(16).uint32(message.length);
        }
        return writer;
    };

    DebugLinkMemoryRead.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DebugLinkMemoryRead();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.address = reader.uint32();
                break;
            case 2:
                message.length = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DebugLinkMemoryRead.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address != null && message.hasOwnProperty("address")) {
            object.address = message.address;
        }
        if (message.length != null && message.hasOwnProperty("length")) {
            object.length = message.length;
        }
        return object;
    };

    return DebugLinkMemoryRead;
})();

// DebugLinkMemory message
$root.DebugLinkMemory = (function() {
    function DebugLinkMemory(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DebugLinkMemory.create = function create(properties) {
        return new DebugLinkMemory(properties);
    };

    DebugLinkMemory.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.memory != null && Object.hasOwnProperty.call(message, "memory")) {
            writer.uint32(10).bytes(message.memory);
        }
        return writer;
    };

    DebugLinkMemory.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DebugLinkMemory();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.memory = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DebugLinkMemory.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.memory != null && message.hasOwnProperty("memory")) {
            object.memory = $util.base64.encode(message.memory, 0, message.memory.length);
        }
        return object;
    };

    return DebugLinkMemory;
})();

// DebugLinkMemoryWrite message
$root.DebugLinkMemoryWrite = (function() {
    function DebugLinkMemoryWrite(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DebugLinkMemoryWrite.create = function create(properties) {
        return new DebugLinkMemoryWrite(properties);
    };

    DebugLinkMemoryWrite.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address != null && Object.hasOwnProperty.call(message, "address")) {
            writer.uint32(8).uint32(message.address);
        }
        if (message.memory != null && Object.hasOwnProperty.call(message, "memory")) {
            writer.uint32(18).bytes(message.memory);
        }
        if (message.flash != null && Object.hasOwnProperty.call(message, "flash")) {
            writer.uint32(24).bool(message.flash);
        }
        return writer;
    };

    DebugLinkMemoryWrite.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DebugLinkMemoryWrite();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.address = reader.uint32();
                break;
            case 2:
                message.memory = reader.bytes();
                break;
            case 3:
                message.flash = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DebugLinkMemoryWrite.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address != null && message.hasOwnProperty("address")) {
            object.address = message.address;
        }
        if (message.memory != null && message.hasOwnProperty("memory")) {
            object.memory = $util.base64.encode(message.memory, 0, message.memory.length);
        }
        if (message.flash != null && message.hasOwnProperty("flash")) {
            object.flash = message.flash;
        }
        return object;
    };

    return DebugLinkMemoryWrite;
})();

// DebugLinkFlashErase message
$root.DebugLinkFlashErase = (function() {
    function DebugLinkFlashErase(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DebugLinkFlashErase.create = function create(properties) {
        return new DebugLinkFlashErase(properties);
    };

    DebugLinkFlashErase.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.sector != null && Object.hasOwnProperty.call(message, "sector")) {
            writer.uint32(8).uint32(message.sector);
        }
        return writer;
    };

    DebugLinkFlashErase.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DebugLinkFlashErase();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.sector = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DebugLinkFlashErase.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.sector != null && message.hasOwnProperty("sector")) {
            object.sector = message.sector;
        }
        return object;
    };

    return DebugLinkFlashErase;
})();

// DebugLinkEraseSdCard message
$root.DebugLinkEraseSdCard = (function() {
    function DebugLinkEraseSdCard(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DebugLinkEraseSdCard.create = function create(properties) {
        return new DebugLinkEraseSdCard(properties);
    };

    DebugLinkEraseSdCard.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.format != null && Object.hasOwnProperty.call(message, "format")) {
            writer.uint32(8).bool(message.format);
        }
        return writer;
    };

    DebugLinkEraseSdCard.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DebugLinkEraseSdCard();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.format = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DebugLinkEraseSdCard.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.format != null && message.hasOwnProperty("format")) {
            object.format = message.format;
        }
        return object;
    };

    return DebugLinkEraseSdCard;
})();

// DebugLinkWatchLayout message
$root.DebugLinkWatchLayout = (function() {
    function DebugLinkWatchLayout(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DebugLinkWatchLayout.create = function create(properties) {
        return new DebugLinkWatchLayout(properties);
    };

    DebugLinkWatchLayout.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.watch != null && Object.hasOwnProperty.call(message, "watch")) {
            writer.uint32(8).bool(message.watch);
        }
        return writer;
    };

    DebugLinkWatchLayout.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DebugLinkWatchLayout();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.watch = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DebugLinkWatchLayout.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.watch != null && message.hasOwnProperty("watch")) {
            object.watch = message.watch;
        }
        return object;
    };

    return DebugLinkWatchLayout;
})();

// DebugLinkResetDebugEvents message
$root.DebugLinkResetDebugEvents = (function() {
    function DebugLinkResetDebugEvents(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DebugLinkResetDebugEvents.create = function create(properties) {
        return new DebugLinkResetDebugEvents(properties);
    };

    DebugLinkResetDebugEvents.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    DebugLinkResetDebugEvents.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DebugLinkResetDebugEvents();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DebugLinkResetDebugEvents.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return DebugLinkResetDebugEvents;
})();

// DebugLinkOptigaSetSecMax message
$root.DebugLinkOptigaSetSecMax = (function() {
    function DebugLinkOptigaSetSecMax(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DebugLinkOptigaSetSecMax.create = function create(properties) {
        return new DebugLinkOptigaSetSecMax(properties);
    };

    DebugLinkOptigaSetSecMax.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    DebugLinkOptigaSetSecMax.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DebugLinkOptigaSetSecMax();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DebugLinkOptigaSetSecMax.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return DebugLinkOptigaSetSecMax;
})();

// DebugLinkGetGcInfo message
$root.DebugLinkGetGcInfo = (function() {
    function DebugLinkGetGcInfo(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DebugLinkGetGcInfo.create = function create(properties) {
        return new DebugLinkGetGcInfo(properties);
    };

    DebugLinkGetGcInfo.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    DebugLinkGetGcInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DebugLinkGetGcInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DebugLinkGetGcInfo.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return DebugLinkGetGcInfo;
})();

// DebugLinkGcInfo message
$root.DebugLinkGcInfo = (function() {
    function DebugLinkGcInfo(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DebugLinkGcInfo.create = function create(properties) {
        return new DebugLinkGcInfo(properties);
    };

    DebugLinkGcInfo.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.items != null && message.items.length) {
            for (var i = 0; i < message.items.length; ++i) {
                writer.uint32(10).string(message.items[i]);
            }
        }
        return writer;
    };

    DebugLinkGcInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DebugLinkGcInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.items && message.items.length)) message.items = [];
                message.items.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DebugLinkGcInfo.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.items && message.items.length) {
            object.items = [];
            for (var j = 0; j < message.items.length; ++j) {
                object.items[j] = message.items[j];
            }
        }
        return object;
    };

    return DebugLinkGcInfo;
})();

// EthereumNetworkInfo message
$root.EthereumNetworkInfo = (function() {
    function EthereumNetworkInfo(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EthereumNetworkInfo.create = function create(properties) {
        return new EthereumNetworkInfo(properties);
    };

    EthereumNetworkInfo.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.chain_id != null && Object.hasOwnProperty.call(message, "chain_id")) {
            writer.uint32(8).uint64(message.chain_id);
        }
        if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol")) {
            writer.uint32(18).string(message.symbol);
        }
        if (message.slip44 != null && Object.hasOwnProperty.call(message, "slip44")) {
            writer.uint32(24).uint32(message.slip44);
        }
        if (message.name != null && Object.hasOwnProperty.call(message, "name")) {
            writer.uint32(34).string(message.name);
        }
        return writer;
    };

    EthereumNetworkInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EthereumNetworkInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.chain_id = reader.uint64();
                break;
            case 2:
                message.symbol = reader.string();
                break;
            case 3:
                message.slip44 = reader.uint32();
                break;
            case 4:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EthereumNetworkInfo.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.chain_id != null && message.hasOwnProperty("chain_id")) {
            object.chain_id = message.chain_id;
        }
        if (message.symbol != null && message.hasOwnProperty("symbol")) {
            object.symbol = message.symbol;
        }
        if (message.slip44 != null && message.hasOwnProperty("slip44")) {
            object.slip44 = message.slip44;
        }
        if (message.name != null && message.hasOwnProperty("name")) {
            object.name = message.name;
        }
        return object;
    };

    return EthereumNetworkInfo;
})();

// EthereumTokenInfo message
$root.EthereumTokenInfo = (function() {
    function EthereumTokenInfo(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EthereumTokenInfo.create = function create(properties) {
        return new EthereumTokenInfo(properties);
    };

    EthereumTokenInfo.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address != null && Object.hasOwnProperty.call(message, "address")) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.chain_id != null && Object.hasOwnProperty.call(message, "chain_id")) {
            writer.uint32(16).uint64(message.chain_id);
        }
        if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol")) {
            writer.uint32(26).string(message.symbol);
        }
        if (message.decimals != null && Object.hasOwnProperty.call(message, "decimals")) {
            writer.uint32(32).uint32(message.decimals);
        }
        if (message.name != null && Object.hasOwnProperty.call(message, "name")) {
            writer.uint32(42).string(message.name);
        }
        return writer;
    };

    EthereumTokenInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EthereumTokenInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.address = reader.bytes();
                break;
            case 2:
                message.chain_id = reader.uint64();
                break;
            case 3:
                message.symbol = reader.string();
                break;
            case 4:
                message.decimals = reader.uint32();
                break;
            case 5:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EthereumTokenInfo.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address != null && message.hasOwnProperty("address")) {
            object.address = $util.base64.encode(message.address, 0, message.address.length);
        }
        if (message.chain_id != null && message.hasOwnProperty("chain_id")) {
            object.chain_id = message.chain_id;
        }
        if (message.symbol != null && message.hasOwnProperty("symbol")) {
            object.symbol = message.symbol;
        }
        if (message.decimals != null && message.hasOwnProperty("decimals")) {
            object.decimals = message.decimals;
        }
        if (message.name != null && message.hasOwnProperty("name")) {
            object.name = message.name;
        }
        return object;
    };

    return EthereumTokenInfo;
})();

// SolanaTokenInfo message
$root.SolanaTokenInfo = (function() {
    function SolanaTokenInfo(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    SolanaTokenInfo.create = function create(properties) {
        return new SolanaTokenInfo(properties);
    };

    SolanaTokenInfo.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.mint != null && Object.hasOwnProperty.call(message, "mint")) {
            writer.uint32(10).bytes(message.mint);
        }
        if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol")) {
            writer.uint32(18).string(message.symbol);
        }
        if (message.name != null && Object.hasOwnProperty.call(message, "name")) {
            writer.uint32(26).string(message.name);
        }
        return writer;
    };

    SolanaTokenInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.SolanaTokenInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mint = reader.bytes();
                break;
            case 2:
                message.symbol = reader.string();
                break;
            case 3:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    SolanaTokenInfo.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.mint != null && message.hasOwnProperty("mint")) {
            object.mint = $util.base64.encode(message.mint, 0, message.mint.length);
        }
        if (message.symbol != null && message.hasOwnProperty("symbol")) {
            object.symbol = message.symbol;
        }
        if (message.name != null && message.hasOwnProperty("name")) {
            object.name = message.name;
        }
        return object;
    };

    return SolanaTokenInfo;
})();

// EosGetPublicKey message
$root.EosGetPublicKey = (function() {
    function EosGetPublicKey(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EosGetPublicKey.create = function create(properties) {
        return new EosGetPublicKey(properties);
    };

    EosGetPublicKey.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.show_display != null && Object.hasOwnProperty.call(message, "show_display")) {
            writer.uint32(16).bool(message.show_display);
        }
        if (message.chunkify != null && Object.hasOwnProperty.call(message, "chunkify")) {
            writer.uint32(24).bool(message.chunkify);
        }
        return writer;
    };

    EosGetPublicKey.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EosGetPublicKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.show_display = reader.bool();
                break;
            case 3:
                message.chunkify = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EosGetPublicKey.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.show_display != null && message.hasOwnProperty("show_display")) {
            object.show_display = message.show_display;
        }
        if (message.chunkify != null && message.hasOwnProperty("chunkify")) {
            object.chunkify = message.chunkify;
        }
        return object;
    };

    return EosGetPublicKey;
})();

// EosPublicKey message
$root.EosPublicKey = (function() {
    function EosPublicKey(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EosPublicKey.create = function create(properties) {
        return new EosPublicKey(properties);
    };

    EosPublicKey.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.wif_public_key != null && Object.hasOwnProperty.call(message, "wif_public_key")) {
            writer.uint32(10).string(message.wif_public_key);
        }
        if (message.raw_public_key != null && Object.hasOwnProperty.call(message, "raw_public_key")) {
            writer.uint32(18).bytes(message.raw_public_key);
        }
        return writer;
    };

    EosPublicKey.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EosPublicKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.wif_public_key = reader.string();
                break;
            case 2:
                message.raw_public_key = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EosPublicKey.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.wif_public_key != null && message.hasOwnProperty("wif_public_key")) {
            object.wif_public_key = message.wif_public_key;
        }
        if (message.raw_public_key != null && message.hasOwnProperty("raw_public_key")) {
            object.raw_public_key = $util.base64.encode(message.raw_public_key, 0, message.raw_public_key.length);
        }
        return object;
    };

    return EosPublicKey;
})();

// EosSignTx message
$root.EosSignTx = (function() {
    function EosSignTx(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EosSignTx.create = function create(properties) {
        return new EosSignTx(properties);
    };

    EosSignTx.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.chain_id != null && Object.hasOwnProperty.call(message, "chain_id")) {
            writer.uint32(18).bytes(message.chain_id);
        }
        if (message.header != null && Object.hasOwnProperty.call(message, "header")) {
            writer.uint32(26).string(message.header);
        }
        if (message.num_actions != null && Object.hasOwnProperty.call(message, "num_actions")) {
            writer.uint32(32).uint32(message.num_actions);
        }
        if (message.chunkify != null && Object.hasOwnProperty.call(message, "chunkify")) {
            writer.uint32(40).bool(message.chunkify);
        }
        return writer;
    };

    EosSignTx.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EosSignTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.chain_id = reader.bytes();
                break;
            case 3:
                message.header = reader.string();
                break;
            case 4:
                message.num_actions = reader.uint32();
                break;
            case 5:
                message.chunkify = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EosSignTx.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.chain_id != null && message.hasOwnProperty("chain_id")) {
            object.chain_id = $util.base64.encode(message.chain_id, 0, message.chain_id.length);
        }
        if (message.header != null && message.hasOwnProperty("header")) {
            object.header = message.header;
        }
        if (message.num_actions != null && message.hasOwnProperty("num_actions")) {
            object.num_actions = message.num_actions;
        }
        if (message.chunkify != null && message.hasOwnProperty("chunkify")) {
            object.chunkify = message.chunkify;
        }
        return object;
    };

    return EosSignTx;
})();

// EosTxActionRequest message
$root.EosTxActionRequest = (function() {
    function EosTxActionRequest(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EosTxActionRequest.create = function create(properties) {
        return new EosTxActionRequest(properties);
    };

    EosTxActionRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.data_size != null && Object.hasOwnProperty.call(message, "data_size")) {
            writer.uint32(8).uint32(message.data_size);
        }
        return writer;
    };

    EosTxActionRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EosTxActionRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.data_size = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EosTxActionRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.data_size != null && message.hasOwnProperty("data_size")) {
            object.data_size = message.data_size;
        }
        return object;
    };

    return EosTxActionRequest;
})();

// EosTxActionAck message
$root.EosTxActionAck = (function() {
    function EosTxActionAck(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EosTxActionAck.create = function create(properties) {
        return new EosTxActionAck(properties);
    };

    EosTxActionAck.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.common != null && Object.hasOwnProperty.call(message, "common")) {
            writer.uint32(10).string(message.common);
        }
        if (message.transfer != null && Object.hasOwnProperty.call(message, "transfer")) {
            writer.uint32(18).string(message.transfer);
        }
        if (message.delegate != null && Object.hasOwnProperty.call(message, "delegate")) {
            writer.uint32(26).string(message.delegate);
        }
        if (message.undelegate != null && Object.hasOwnProperty.call(message, "undelegate")) {
            writer.uint32(34).string(message.undelegate);
        }
        if (message.refund != null && Object.hasOwnProperty.call(message, "refund")) {
            writer.uint32(42).string(message.refund);
        }
        if (message.buy_ram != null && Object.hasOwnProperty.call(message, "buy_ram")) {
            writer.uint32(50).string(message.buy_ram);
        }
        if (message.buy_ram_bytes != null && Object.hasOwnProperty.call(message, "buy_ram_bytes")) {
            writer.uint32(58).string(message.buy_ram_bytes);
        }
        if (message.sell_ram != null && Object.hasOwnProperty.call(message, "sell_ram")) {
            writer.uint32(66).string(message.sell_ram);
        }
        if (message.vote_producer != null && Object.hasOwnProperty.call(message, "vote_producer")) {
            writer.uint32(74).string(message.vote_producer);
        }
        if (message.update_auth != null && Object.hasOwnProperty.call(message, "update_auth")) {
            writer.uint32(82).string(message.update_auth);
        }
        if (message.delete_auth != null && Object.hasOwnProperty.call(message, "delete_auth")) {
            writer.uint32(90).string(message.delete_auth);
        }
        if (message.link_auth != null && Object.hasOwnProperty.call(message, "link_auth")) {
            writer.uint32(98).string(message.link_auth);
        }
        if (message.unlink_auth != null && Object.hasOwnProperty.call(message, "unlink_auth")) {
            writer.uint32(106).string(message.unlink_auth);
        }
        if (message.new_account != null && Object.hasOwnProperty.call(message, "new_account")) {
            writer.uint32(114).string(message.new_account);
        }
        if (message.unknown != null && Object.hasOwnProperty.call(message, "unknown")) {
            writer.uint32(122).string(message.unknown);
        }
        return writer;
    };

    EosTxActionAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EosTxActionAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.common = reader.string();
                break;
            case 2:
                message.transfer = reader.string();
                break;
            case 3:
                message.delegate = reader.string();
                break;
            case 4:
                message.undelegate = reader.string();
                break;
            case 5:
                message.refund = reader.string();
                break;
            case 6:
                message.buy_ram = reader.string();
                break;
            case 7:
                message.buy_ram_bytes = reader.string();
                break;
            case 8:
                message.sell_ram = reader.string();
                break;
            case 9:
                message.vote_producer = reader.string();
                break;
            case 10:
                message.update_auth = reader.string();
                break;
            case 11:
                message.delete_auth = reader.string();
                break;
            case 12:
                message.link_auth = reader.string();
                break;
            case 13:
                message.unlink_auth = reader.string();
                break;
            case 14:
                message.new_account = reader.string();
                break;
            case 15:
                message.unknown = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EosTxActionAck.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.common != null && message.hasOwnProperty("common")) {
            object.common = message.common;
        }
        if (message.transfer != null && message.hasOwnProperty("transfer")) {
            object.transfer = message.transfer;
        }
        if (message.delegate != null && message.hasOwnProperty("delegate")) {
            object.delegate = message.delegate;
        }
        if (message.undelegate != null && message.hasOwnProperty("undelegate")) {
            object.undelegate = message.undelegate;
        }
        if (message.refund != null && message.hasOwnProperty("refund")) {
            object.refund = message.refund;
        }
        if (message.buy_ram != null && message.hasOwnProperty("buy_ram")) {
            object.buy_ram = message.buy_ram;
        }
        if (message.buy_ram_bytes != null && message.hasOwnProperty("buy_ram_bytes")) {
            object.buy_ram_bytes = message.buy_ram_bytes;
        }
        if (message.sell_ram != null && message.hasOwnProperty("sell_ram")) {
            object.sell_ram = message.sell_ram;
        }
        if (message.vote_producer != null && message.hasOwnProperty("vote_producer")) {
            object.vote_producer = message.vote_producer;
        }
        if (message.update_auth != null && message.hasOwnProperty("update_auth")) {
            object.update_auth = message.update_auth;
        }
        if (message.delete_auth != null && message.hasOwnProperty("delete_auth")) {
            object.delete_auth = message.delete_auth;
        }
        if (message.link_auth != null && message.hasOwnProperty("link_auth")) {
            object.link_auth = message.link_auth;
        }
        if (message.unlink_auth != null && message.hasOwnProperty("unlink_auth")) {
            object.unlink_auth = message.unlink_auth;
        }
        if (message.new_account != null && message.hasOwnProperty("new_account")) {
            object.new_account = message.new_account;
        }
        if (message.unknown != null && message.hasOwnProperty("unknown")) {
            object.unknown = message.unknown;
        }
        return object;
    };

    return EosTxActionAck;
})();

// EosSignedTx message
$root.EosSignedTx = (function() {
    function EosSignedTx(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EosSignedTx.create = function create(properties) {
        return new EosSignedTx(properties);
    };

    EosSignedTx.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.signature != null && Object.hasOwnProperty.call(message, "signature")) {
            writer.uint32(10).string(message.signature);
        }
        return writer;
    };

    EosSignedTx.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EosSignedTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.signature = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EosSignedTx.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.signature != null && message.hasOwnProperty("signature")) {
            object.signature = message.signature;
        }
        return object;
    };

    return EosSignedTx;
})();

// EthereumSignTypedData message
$root.EthereumSignTypedData = (function() {
    function EthereumSignTypedData(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EthereumSignTypedData.create = function create(properties) {
        return new EthereumSignTypedData(properties);
    };

    EthereumSignTypedData.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.primary_type != null && Object.hasOwnProperty.call(message, "primary_type")) {
            writer.uint32(18).string(message.primary_type);
        }
        if (message.metamask_v4_compat != null && Object.hasOwnProperty.call(message, "metamask_v4_compat")) {
            writer.uint32(24).bool(message.metamask_v4_compat);
        }
        if (message.definitions != null && Object.hasOwnProperty.call(message, "definitions")) {
            writer.uint32(34).string(message.definitions);
        }
        if (message.show_message_hash != null && Object.hasOwnProperty.call(message, "show_message_hash")) {
            writer.uint32(42).bytes(message.show_message_hash);
        }
        return writer;
    };

    EthereumSignTypedData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EthereumSignTypedData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.primary_type = reader.string();
                break;
            case 3:
                message.metamask_v4_compat = reader.bool();
                break;
            case 4:
                message.definitions = reader.string();
                break;
            case 5:
                message.show_message_hash = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EthereumSignTypedData.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.primary_type != null && message.hasOwnProperty("primary_type")) {
            object.primary_type = message.primary_type;
        }
        if (message.metamask_v4_compat != null && message.hasOwnProperty("metamask_v4_compat")) {
            object.metamask_v4_compat = message.metamask_v4_compat;
        }
        if (message.definitions != null && message.hasOwnProperty("definitions")) {
            object.definitions = message.definitions;
        }
        if (message.show_message_hash != null && message.hasOwnProperty("show_message_hash")) {
            object.show_message_hash = $util.base64.encode(message.show_message_hash, 0, message.show_message_hash.length);
        }
        return object;
    };

    return EthereumSignTypedData;
})();

// EthereumTypedDataStructRequest message
$root.EthereumTypedDataStructRequest = (function() {
    function EthereumTypedDataStructRequest(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EthereumTypedDataStructRequest.create = function create(properties) {
        return new EthereumTypedDataStructRequest(properties);
    };

    EthereumTypedDataStructRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name")) {
            writer.uint32(10).string(message.name);
        }
        return writer;
    };

    EthereumTypedDataStructRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EthereumTypedDataStructRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EthereumTypedDataStructRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.name != null && message.hasOwnProperty("name")) {
            object.name = message.name;
        }
        return object;
    };

    return EthereumTypedDataStructRequest;
})();

// EthereumTypedDataStructAck message
$root.EthereumTypedDataStructAck = (function() {
    function EthereumTypedDataStructAck(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EthereumTypedDataStructAck.create = function create(properties) {
        return new EthereumTypedDataStructAck(properties);
    };

    EthereumTypedDataStructAck.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.members != null && message.members.length) {
            for (var i = 0; i < message.members.length; ++i) {
                writer.uint32(10).string(message.members[i]);
            }
        }
        return writer;
    };

    EthereumTypedDataStructAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EthereumTypedDataStructAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.members && message.members.length)) message.members = [];
                message.members.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EthereumTypedDataStructAck.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.members && message.members.length) {
            object.members = [];
            for (var j = 0; j < message.members.length; ++j) {
                object.members[j] = message.members[j];
            }
        }
        return object;
    };

    return EthereumTypedDataStructAck;
})();

// EthereumTypedDataValueRequest message
$root.EthereumTypedDataValueRequest = (function() {
    function EthereumTypedDataValueRequest(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EthereumTypedDataValueRequest.create = function create(properties) {
        return new EthereumTypedDataValueRequest(properties);
    };

    EthereumTypedDataValueRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.member_path != null && message.member_path.length) {
            for (var i = 0; i < message.member_path.length; ++i) {
                writer.uint32(8).uint32(message.member_path[i]);
            }
        }
        return writer;
    };

    EthereumTypedDataValueRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EthereumTypedDataValueRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.member_path && message.member_path.length)) message.member_path = [];
                message.member_path.push(reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EthereumTypedDataValueRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.member_path && message.member_path.length) {
            object.member_path = [];
            for (var j = 0; j < message.member_path.length; ++j) {
                object.member_path[j] = message.member_path[j];
            }
        }
        return object;
    };

    return EthereumTypedDataValueRequest;
})();

// EthereumTypedDataValueAck message
$root.EthereumTypedDataValueAck = (function() {
    function EthereumTypedDataValueAck(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EthereumTypedDataValueAck.create = function create(properties) {
        return new EthereumTypedDataValueAck(properties);
    };

    EthereumTypedDataValueAck.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value")) {
            writer.uint32(10).bytes(message.value);
        }
        return writer;
    };

    EthereumTypedDataValueAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EthereumTypedDataValueAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.value = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EthereumTypedDataValueAck.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.value != null && message.hasOwnProperty("value")) {
            object.value = $util.base64.encode(message.value, 0, message.value.length);
        }
        return object;
    };

    return EthereumTypedDataValueAck;
})();

// EthereumGetPublicKey message
$root.EthereumGetPublicKey = (function() {
    function EthereumGetPublicKey(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EthereumGetPublicKey.create = function create(properties) {
        return new EthereumGetPublicKey(properties);
    };

    EthereumGetPublicKey.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.show_display != null && Object.hasOwnProperty.call(message, "show_display")) {
            writer.uint32(16).bool(message.show_display);
        }
        return writer;
    };

    EthereumGetPublicKey.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EthereumGetPublicKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.show_display = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EthereumGetPublicKey.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.show_display != null && message.hasOwnProperty("show_display")) {
            object.show_display = message.show_display;
        }
        return object;
    };

    return EthereumGetPublicKey;
})();

// EthereumPublicKey message
$root.EthereumPublicKey = (function() {
    function EthereumPublicKey(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EthereumPublicKey.create = function create(properties) {
        return new EthereumPublicKey(properties);
    };

    EthereumPublicKey.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.node != null && Object.hasOwnProperty.call(message, "node")) {
            writer.uint32(10).string(message.node);
        }
        if (message.xpub != null && Object.hasOwnProperty.call(message, "xpub")) {
            writer.uint32(18).string(message.xpub);
        }
        return writer;
    };

    EthereumPublicKey.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EthereumPublicKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.node = reader.string();
                break;
            case 2:
                message.xpub = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EthereumPublicKey.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.node != null && message.hasOwnProperty("node")) {
            object.node = message.node;
        }
        if (message.xpub != null && message.hasOwnProperty("xpub")) {
            object.xpub = message.xpub;
        }
        return object;
    };

    return EthereumPublicKey;
})();

// EthereumGetAddress message
$root.EthereumGetAddress = (function() {
    function EthereumGetAddress(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EthereumGetAddress.create = function create(properties) {
        return new EthereumGetAddress(properties);
    };

    EthereumGetAddress.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.show_display != null && Object.hasOwnProperty.call(message, "show_display")) {
            writer.uint32(16).bool(message.show_display);
        }
        if (message.encoded_network != null && Object.hasOwnProperty.call(message, "encoded_network")) {
            writer.uint32(26).bytes(message.encoded_network);
        }
        if (message.chunkify != null && Object.hasOwnProperty.call(message, "chunkify")) {
            writer.uint32(32).bool(message.chunkify);
        }
        return writer;
    };

    EthereumGetAddress.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EthereumGetAddress();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.show_display = reader.bool();
                break;
            case 3:
                message.encoded_network = reader.bytes();
                break;
            case 4:
                message.chunkify = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EthereumGetAddress.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.show_display != null && message.hasOwnProperty("show_display")) {
            object.show_display = message.show_display;
        }
        if (message.encoded_network != null && message.hasOwnProperty("encoded_network")) {
            object.encoded_network = $util.base64.encode(message.encoded_network, 0, message.encoded_network.length);
        }
        if (message.chunkify != null && message.hasOwnProperty("chunkify")) {
            object.chunkify = message.chunkify;
        }
        return object;
    };

    return EthereumGetAddress;
})();

// EthereumAddress message
$root.EthereumAddress = (function() {
    function EthereumAddress(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EthereumAddress.create = function create(properties) {
        return new EthereumAddress(properties);
    };

    EthereumAddress.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message._old_address != null && Object.hasOwnProperty.call(message, "_old_address")) {
            writer.uint32(10).bytes(message._old_address);
        }
        if (message.address != null && Object.hasOwnProperty.call(message, "address")) {
            writer.uint32(18).string(message.address);
        }
        if (message.mac != null && Object.hasOwnProperty.call(message, "mac")) {
            writer.uint32(26).bytes(message.mac);
        }
        return writer;
    };

    EthereumAddress.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EthereumAddress();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message._old_address = reader.bytes();
                break;
            case 2:
                message.address = reader.string();
                break;
            case 3:
                message.mac = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EthereumAddress.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message._old_address != null && message.hasOwnProperty("_old_address")) {
            object._old_address = $util.base64.encode(message._old_address, 0, message._old_address.length);
        }
        if (message.address != null && message.hasOwnProperty("address")) {
            object.address = message.address;
        }
        if (message.mac != null && message.hasOwnProperty("mac")) {
            object.mac = $util.base64.encode(message.mac, 0, message.mac.length);
        }
        return object;
    };

    return EthereumAddress;
})();

// EthereumSignTx message
$root.EthereumSignTx = (function() {
    function EthereumSignTx(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EthereumSignTx.create = function create(properties) {
        return new EthereumSignTx(properties);
    };

    EthereumSignTx.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce")) {
            writer.uint32(18).bytes(message.nonce);
        }
        if (message.gas_price != null && Object.hasOwnProperty.call(message, "gas_price")) {
            writer.uint32(26).bytes(message.gas_price);
        }
        if (message.gas_limit != null && Object.hasOwnProperty.call(message, "gas_limit")) {
            writer.uint32(34).bytes(message.gas_limit);
        }
        if (message.to != null && Object.hasOwnProperty.call(message, "to")) {
            writer.uint32(90).string(message.to);
        }
        if (message.value != null && Object.hasOwnProperty.call(message, "value")) {
            writer.uint32(50).bytes(message.value);
        }
        if (message.data_initial_chunk != null && Object.hasOwnProperty.call(message, "data_initial_chunk")) {
            writer.uint32(58).bytes(message.data_initial_chunk);
        }
        if (message.data_length != null && Object.hasOwnProperty.call(message, "data_length")) {
            writer.uint32(64).uint32(message.data_length);
        }
        if (message.chain_id != null && Object.hasOwnProperty.call(message, "chain_id")) {
            writer.uint32(72).uint64(message.chain_id);
        }
        if (message.tx_type != null && Object.hasOwnProperty.call(message, "tx_type")) {
            writer.uint32(80).uint32(message.tx_type);
        }
        if (message.definitions != null && Object.hasOwnProperty.call(message, "definitions")) {
            writer.uint32(98).string(message.definitions);
        }
        if (message.chunkify != null && Object.hasOwnProperty.call(message, "chunkify")) {
            writer.uint32(104).bool(message.chunkify);
        }
        if (message.payment_req != null && Object.hasOwnProperty.call(message, "payment_req")) {
            writer.uint32(114).string(message.payment_req);
        }
        return writer;
    };

    EthereumSignTx.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EthereumSignTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.nonce = reader.bytes();
                break;
            case 3:
                message.gas_price = reader.bytes();
                break;
            case 4:
                message.gas_limit = reader.bytes();
                break;
            case 11:
                message.to = reader.string();
                break;
            case 6:
                message.value = reader.bytes();
                break;
            case 7:
                message.data_initial_chunk = reader.bytes();
                break;
            case 8:
                message.data_length = reader.uint32();
                break;
            case 9:
                message.chain_id = reader.uint64();
                break;
            case 10:
                message.tx_type = reader.uint32();
                break;
            case 12:
                message.definitions = reader.string();
                break;
            case 13:
                message.chunkify = reader.bool();
                break;
            case 14:
                message.payment_req = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EthereumSignTx.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.nonce != null && message.hasOwnProperty("nonce")) {
            object.nonce = $util.base64.encode(message.nonce, 0, message.nonce.length);
        }
        if (message.gas_price != null && message.hasOwnProperty("gas_price")) {
            object.gas_price = $util.base64.encode(message.gas_price, 0, message.gas_price.length);
        }
        if (message.gas_limit != null && message.hasOwnProperty("gas_limit")) {
            object.gas_limit = $util.base64.encode(message.gas_limit, 0, message.gas_limit.length);
        }
        if (message.to != null && message.hasOwnProperty("to")) {
            object.to = message.to;
        }
        if (message.value != null && message.hasOwnProperty("value")) {
            object.value = $util.base64.encode(message.value, 0, message.value.length);
        }
        if (message.data_initial_chunk != null && message.hasOwnProperty("data_initial_chunk")) {
            object.data_initial_chunk = $util.base64.encode(message.data_initial_chunk, 0, message.data_initial_chunk.length);
        }
        if (message.data_length != null && message.hasOwnProperty("data_length")) {
            object.data_length = message.data_length;
        }
        if (message.chain_id != null && message.hasOwnProperty("chain_id")) {
            object.chain_id = message.chain_id;
        }
        if (message.tx_type != null && message.hasOwnProperty("tx_type")) {
            object.tx_type = message.tx_type;
        }
        if (message.definitions != null && message.hasOwnProperty("definitions")) {
            object.definitions = message.definitions;
        }
        if (message.chunkify != null && message.hasOwnProperty("chunkify")) {
            object.chunkify = message.chunkify;
        }
        if (message.payment_req != null && message.hasOwnProperty("payment_req")) {
            object.payment_req = message.payment_req;
        }
        return object;
    };

    return EthereumSignTx;
})();

// EthereumSignTxEIP1559 message
$root.EthereumSignTxEIP1559 = (function() {
    function EthereumSignTxEIP1559(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EthereumSignTxEIP1559.create = function create(properties) {
        return new EthereumSignTxEIP1559(properties);
    };

    EthereumSignTxEIP1559.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce")) {
            writer.uint32(18).bytes(message.nonce);
        }
        if (message.max_gas_fee != null && Object.hasOwnProperty.call(message, "max_gas_fee")) {
            writer.uint32(26).bytes(message.max_gas_fee);
        }
        if (message.max_priority_fee != null && Object.hasOwnProperty.call(message, "max_priority_fee")) {
            writer.uint32(34).bytes(message.max_priority_fee);
        }
        if (message.gas_limit != null && Object.hasOwnProperty.call(message, "gas_limit")) {
            writer.uint32(42).bytes(message.gas_limit);
        }
        if (message.to != null && Object.hasOwnProperty.call(message, "to")) {
            writer.uint32(50).string(message.to);
        }
        if (message.value != null && Object.hasOwnProperty.call(message, "value")) {
            writer.uint32(58).bytes(message.value);
        }
        if (message.data_initial_chunk != null && Object.hasOwnProperty.call(message, "data_initial_chunk")) {
            writer.uint32(66).bytes(message.data_initial_chunk);
        }
        if (message.data_length != null && Object.hasOwnProperty.call(message, "data_length")) {
            writer.uint32(72).uint32(message.data_length);
        }
        if (message.chain_id != null && Object.hasOwnProperty.call(message, "chain_id")) {
            writer.uint32(80).uint64(message.chain_id);
        }
        if (message.access_list != null && message.access_list.length) {
            for (var i = 0; i < message.access_list.length; ++i) {
                writer.uint32(90).string(message.access_list[i]);
            }
        }
        if (message.definitions != null && Object.hasOwnProperty.call(message, "definitions")) {
            writer.uint32(98).string(message.definitions);
        }
        if (message.chunkify != null && Object.hasOwnProperty.call(message, "chunkify")) {
            writer.uint32(104).bool(message.chunkify);
        }
        if (message.payment_req != null && Object.hasOwnProperty.call(message, "payment_req")) {
            writer.uint32(114).string(message.payment_req);
        }
        return writer;
    };

    EthereumSignTxEIP1559.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EthereumSignTxEIP1559();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.nonce = reader.bytes();
                break;
            case 3:
                message.max_gas_fee = reader.bytes();
                break;
            case 4:
                message.max_priority_fee = reader.bytes();
                break;
            case 5:
                message.gas_limit = reader.bytes();
                break;
            case 6:
                message.to = reader.string();
                break;
            case 7:
                message.value = reader.bytes();
                break;
            case 8:
                message.data_initial_chunk = reader.bytes();
                break;
            case 9:
                message.data_length = reader.uint32();
                break;
            case 10:
                message.chain_id = reader.uint64();
                break;
            case 11:
                if (!(message.access_list && message.access_list.length)) message.access_list = [];
                message.access_list.push(reader.string());
                break;
            case 12:
                message.definitions = reader.string();
                break;
            case 13:
                message.chunkify = reader.bool();
                break;
            case 14:
                message.payment_req = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EthereumSignTxEIP1559.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.nonce != null && message.hasOwnProperty("nonce")) {
            object.nonce = $util.base64.encode(message.nonce, 0, message.nonce.length);
        }
        if (message.max_gas_fee != null && message.hasOwnProperty("max_gas_fee")) {
            object.max_gas_fee = $util.base64.encode(message.max_gas_fee, 0, message.max_gas_fee.length);
        }
        if (message.max_priority_fee != null && message.hasOwnProperty("max_priority_fee")) {
            object.max_priority_fee = $util.base64.encode(message.max_priority_fee, 0, message.max_priority_fee.length);
        }
        if (message.gas_limit != null && message.hasOwnProperty("gas_limit")) {
            object.gas_limit = $util.base64.encode(message.gas_limit, 0, message.gas_limit.length);
        }
        if (message.to != null && message.hasOwnProperty("to")) {
            object.to = message.to;
        }
        if (message.value != null && message.hasOwnProperty("value")) {
            object.value = $util.base64.encode(message.value, 0, message.value.length);
        }
        if (message.data_initial_chunk != null && message.hasOwnProperty("data_initial_chunk")) {
            object.data_initial_chunk = $util.base64.encode(message.data_initial_chunk, 0, message.data_initial_chunk.length);
        }
        if (message.data_length != null && message.hasOwnProperty("data_length")) {
            object.data_length = message.data_length;
        }
        if (message.chain_id != null && message.hasOwnProperty("chain_id")) {
            object.chain_id = message.chain_id;
        }
        if (message.access_list && message.access_list.length) {
            object.access_list = [];
            for (var j = 0; j < message.access_list.length; ++j) {
                object.access_list[j] = message.access_list[j];
            }
        }
        if (message.definitions != null && message.hasOwnProperty("definitions")) {
            object.definitions = message.definitions;
        }
        if (message.chunkify != null && message.hasOwnProperty("chunkify")) {
            object.chunkify = message.chunkify;
        }
        if (message.payment_req != null && message.hasOwnProperty("payment_req")) {
            object.payment_req = message.payment_req;
        }
        return object;
    };

    return EthereumSignTxEIP1559;
})();

// EthereumTxRequest message
$root.EthereumTxRequest = (function() {
    function EthereumTxRequest(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EthereumTxRequest.create = function create(properties) {
        return new EthereumTxRequest(properties);
    };

    EthereumTxRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.data_length != null && Object.hasOwnProperty.call(message, "data_length")) {
            writer.uint32(8).uint32(message.data_length);
        }
        if (message.signature_v != null && Object.hasOwnProperty.call(message, "signature_v")) {
            writer.uint32(16).uint32(message.signature_v);
        }
        if (message.signature_r != null && Object.hasOwnProperty.call(message, "signature_r")) {
            writer.uint32(26).bytes(message.signature_r);
        }
        if (message.signature_s != null && Object.hasOwnProperty.call(message, "signature_s")) {
            writer.uint32(34).bytes(message.signature_s);
        }
        return writer;
    };

    EthereumTxRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EthereumTxRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.data_length = reader.uint32();
                break;
            case 2:
                message.signature_v = reader.uint32();
                break;
            case 3:
                message.signature_r = reader.bytes();
                break;
            case 4:
                message.signature_s = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EthereumTxRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.data_length != null && message.hasOwnProperty("data_length")) {
            object.data_length = message.data_length;
        }
        if (message.signature_v != null && message.hasOwnProperty("signature_v")) {
            object.signature_v = message.signature_v;
        }
        if (message.signature_r != null && message.hasOwnProperty("signature_r")) {
            object.signature_r = $util.base64.encode(message.signature_r, 0, message.signature_r.length);
        }
        if (message.signature_s != null && message.hasOwnProperty("signature_s")) {
            object.signature_s = $util.base64.encode(message.signature_s, 0, message.signature_s.length);
        }
        return object;
    };

    return EthereumTxRequest;
})();

// EthereumTxAck message
$root.EthereumTxAck = (function() {
    function EthereumTxAck(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EthereumTxAck.create = function create(properties) {
        return new EthereumTxAck(properties);
    };

    EthereumTxAck.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.data_chunk != null && Object.hasOwnProperty.call(message, "data_chunk")) {
            writer.uint32(10).bytes(message.data_chunk);
        }
        return writer;
    };

    EthereumTxAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EthereumTxAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.data_chunk = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EthereumTxAck.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.data_chunk != null && message.hasOwnProperty("data_chunk")) {
            object.data_chunk = $util.base64.encode(message.data_chunk, 0, message.data_chunk.length);
        }
        return object;
    };

    return EthereumTxAck;
})();

// EthereumSignMessage message
$root.EthereumSignMessage = (function() {
    function EthereumSignMessage(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EthereumSignMessage.create = function create(properties) {
        return new EthereumSignMessage(properties);
    };

    EthereumSignMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.message != null && Object.hasOwnProperty.call(message, "message")) {
            writer.uint32(18).bytes(message.message);
        }
        if (message.encoded_network != null && Object.hasOwnProperty.call(message, "encoded_network")) {
            writer.uint32(26).bytes(message.encoded_network);
        }
        if (message.chunkify != null && Object.hasOwnProperty.call(message, "chunkify")) {
            writer.uint32(32).bool(message.chunkify);
        }
        return writer;
    };

    EthereumSignMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EthereumSignMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.message = reader.bytes();
                break;
            case 3:
                message.encoded_network = reader.bytes();
                break;
            case 4:
                message.chunkify = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EthereumSignMessage.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.message != null && message.hasOwnProperty("message")) {
            object.message = $util.base64.encode(message.message, 0, message.message.length);
        }
        if (message.encoded_network != null && message.hasOwnProperty("encoded_network")) {
            object.encoded_network = $util.base64.encode(message.encoded_network, 0, message.encoded_network.length);
        }
        if (message.chunkify != null && message.hasOwnProperty("chunkify")) {
            object.chunkify = message.chunkify;
        }
        return object;
    };

    return EthereumSignMessage;
})();

// EthereumMessageSignature message
$root.EthereumMessageSignature = (function() {
    function EthereumMessageSignature(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EthereumMessageSignature.create = function create(properties) {
        return new EthereumMessageSignature(properties);
    };

    EthereumMessageSignature.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.signature != null && Object.hasOwnProperty.call(message, "signature")) {
            writer.uint32(18).bytes(message.signature);
        }
        if (message.address != null && Object.hasOwnProperty.call(message, "address")) {
            writer.uint32(26).string(message.address);
        }
        return writer;
    };

    EthereumMessageSignature.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EthereumMessageSignature();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                message.signature = reader.bytes();
                break;
            case 3:
                message.address = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EthereumMessageSignature.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.signature != null && message.hasOwnProperty("signature")) {
            object.signature = $util.base64.encode(message.signature, 0, message.signature.length);
        }
        if (message.address != null && message.hasOwnProperty("address")) {
            object.address = message.address;
        }
        return object;
    };

    return EthereumMessageSignature;
})();

// EthereumVerifyMessage message
$root.EthereumVerifyMessage = (function() {
    function EthereumVerifyMessage(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EthereumVerifyMessage.create = function create(properties) {
        return new EthereumVerifyMessage(properties);
    };

    EthereumVerifyMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.signature != null && Object.hasOwnProperty.call(message, "signature")) {
            writer.uint32(18).bytes(message.signature);
        }
        if (message.message != null && Object.hasOwnProperty.call(message, "message")) {
            writer.uint32(26).bytes(message.message);
        }
        if (message.address != null && Object.hasOwnProperty.call(message, "address")) {
            writer.uint32(34).string(message.address);
        }
        if (message.chunkify != null && Object.hasOwnProperty.call(message, "chunkify")) {
            writer.uint32(40).bool(message.chunkify);
        }
        return writer;
    };

    EthereumVerifyMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EthereumVerifyMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                message.signature = reader.bytes();
                break;
            case 3:
                message.message = reader.bytes();
                break;
            case 4:
                message.address = reader.string();
                break;
            case 5:
                message.chunkify = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EthereumVerifyMessage.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.signature != null && message.hasOwnProperty("signature")) {
            object.signature = $util.base64.encode(message.signature, 0, message.signature.length);
        }
        if (message.message != null && message.hasOwnProperty("message")) {
            object.message = $util.base64.encode(message.message, 0, message.message.length);
        }
        if (message.address != null && message.hasOwnProperty("address")) {
            object.address = message.address;
        }
        if (message.chunkify != null && message.hasOwnProperty("chunkify")) {
            object.chunkify = message.chunkify;
        }
        return object;
    };

    return EthereumVerifyMessage;
})();

// EthereumSignTypedHash message
$root.EthereumSignTypedHash = (function() {
    function EthereumSignTypedHash(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EthereumSignTypedHash.create = function create(properties) {
        return new EthereumSignTypedHash(properties);
    };

    EthereumSignTypedHash.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.domain_separator_hash != null && Object.hasOwnProperty.call(message, "domain_separator_hash")) {
            writer.uint32(18).bytes(message.domain_separator_hash);
        }
        if (message.message_hash != null && Object.hasOwnProperty.call(message, "message_hash")) {
            writer.uint32(26).bytes(message.message_hash);
        }
        if (message.encoded_network != null && Object.hasOwnProperty.call(message, "encoded_network")) {
            writer.uint32(34).bytes(message.encoded_network);
        }
        return writer;
    };

    EthereumSignTypedHash.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EthereumSignTypedHash();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.domain_separator_hash = reader.bytes();
                break;
            case 3:
                message.message_hash = reader.bytes();
                break;
            case 4:
                message.encoded_network = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EthereumSignTypedHash.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.domain_separator_hash != null && message.hasOwnProperty("domain_separator_hash")) {
            object.domain_separator_hash = $util.base64.encode(message.domain_separator_hash, 0, message.domain_separator_hash.length);
        }
        if (message.message_hash != null && message.hasOwnProperty("message_hash")) {
            object.message_hash = $util.base64.encode(message.message_hash, 0, message.message_hash.length);
        }
        if (message.encoded_network != null && message.hasOwnProperty("encoded_network")) {
            object.encoded_network = $util.base64.encode(message.encoded_network, 0, message.encoded_network.length);
        }
        return object;
    };

    return EthereumSignTypedHash;
})();

// EthereumTypedDataSignature message
$root.EthereumTypedDataSignature = (function() {
    function EthereumTypedDataSignature(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EthereumTypedDataSignature.create = function create(properties) {
        return new EthereumTypedDataSignature(properties);
    };

    EthereumTypedDataSignature.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.signature != null && Object.hasOwnProperty.call(message, "signature")) {
            writer.uint32(10).bytes(message.signature);
        }
        if (message.address != null && Object.hasOwnProperty.call(message, "address")) {
            writer.uint32(18).string(message.address);
        }
        return writer;
    };

    EthereumTypedDataSignature.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EthereumTypedDataSignature();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.signature = reader.bytes();
                break;
            case 2:
                message.address = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EthereumTypedDataSignature.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.signature != null && message.hasOwnProperty("signature")) {
            object.signature = $util.base64.encode(message.signature, 0, message.signature.length);
        }
        if (message.address != null && message.hasOwnProperty("address")) {
            object.address = message.address;
        }
        return object;
    };

    return EthereumTypedDataSignature;
})();

// EthereumDefinitions message
$root.EthereumDefinitions = (function() {
    function EthereumDefinitions(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EthereumDefinitions.create = function create(properties) {
        return new EthereumDefinitions(properties);
    };

    EthereumDefinitions.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.encoded_network != null && Object.hasOwnProperty.call(message, "encoded_network")) {
            writer.uint32(10).bytes(message.encoded_network);
        }
        if (message.encoded_token != null && Object.hasOwnProperty.call(message, "encoded_token")) {
            writer.uint32(18).bytes(message.encoded_token);
        }
        return writer;
    };

    EthereumDefinitions.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EthereumDefinitions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.encoded_network = reader.bytes();
                break;
            case 2:
                message.encoded_token = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EthereumDefinitions.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.encoded_network != null && message.hasOwnProperty("encoded_network")) {
            object.encoded_network = $util.base64.encode(message.encoded_network, 0, message.encoded_network.length);
        }
        if (message.encoded_token != null && message.hasOwnProperty("encoded_token")) {
            object.encoded_token = $util.base64.encode(message.encoded_token, 0, message.encoded_token.length);
        }
        return object;
    };

    return EthereumDefinitions;
})();

// EvoluGetNode message
$root.EvoluGetNode = (function() {
    function EvoluGetNode(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EvoluGetNode.create = function create(properties) {
        return new EvoluGetNode(properties);
    };

    EvoluGetNode.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    EvoluGetNode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EvoluGetNode();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EvoluGetNode.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return EvoluGetNode;
})();

// EvoluNode message
$root.EvoluNode = (function() {
    function EvoluNode(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EvoluNode.create = function create(properties) {
        return new EvoluNode(properties);
    };

    EvoluNode.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.data != null && Object.hasOwnProperty.call(message, "data")) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    };

    EvoluNode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EvoluNode();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EvoluNode.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.data != null && message.hasOwnProperty("data")) {
            object.data = $util.base64.encode(message.data, 0, message.data.length);
        }
        return object;
    };

    return EvoluNode;
})();

// Initialize message
$root.Initialize = (function() {
    function Initialize(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    Initialize.create = function create(properties) {
        return new Initialize(properties);
    };

    Initialize.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.session_id != null && Object.hasOwnProperty.call(message, "session_id")) {
            writer.uint32(10).bytes(message.session_id);
        }
        if (message._skip_passphrase != null && Object.hasOwnProperty.call(message, "_skip_passphrase")) {
            writer.uint32(16).bool(message._skip_passphrase);
        }
        if (message.derive_cardano != null && Object.hasOwnProperty.call(message, "derive_cardano")) {
            writer.uint32(24).bool(message.derive_cardano);
        }
        return writer;
    };

    Initialize.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.Initialize();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.session_id = reader.bytes();
                break;
            case 2:
                message._skip_passphrase = reader.bool();
                break;
            case 3:
                message.derive_cardano = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Initialize.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.session_id != null && message.hasOwnProperty("session_id")) {
            object.session_id = $util.base64.encode(message.session_id, 0, message.session_id.length);
        }
        if (message._skip_passphrase != null && message.hasOwnProperty("_skip_passphrase")) {
            object._skip_passphrase = message._skip_passphrase;
        }
        if (message.derive_cardano != null && message.hasOwnProperty("derive_cardano")) {
            object.derive_cardano = message.derive_cardano;
        }
        return object;
    };

    return Initialize;
})();

// GetFeatures message
$root.GetFeatures = (function() {
    function GetFeatures(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    GetFeatures.create = function create(properties) {
        return new GetFeatures(properties);
    };

    GetFeatures.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    GetFeatures.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.GetFeatures();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    GetFeatures.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return GetFeatures;
})();

// Features message
$root.Features = (function() {
    function Features(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    Features.create = function create(properties) {
        return new Features(properties);
    };

    Features.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.vendor != null && Object.hasOwnProperty.call(message, "vendor")) {
            writer.uint32(10).string(message.vendor);
        }
        if (message.major_version != null && Object.hasOwnProperty.call(message, "major_version")) {
            writer.uint32(16).uint32(message.major_version);
        }
        if (message.minor_version != null && Object.hasOwnProperty.call(message, "minor_version")) {
            writer.uint32(24).uint32(message.minor_version);
        }
        if (message.patch_version != null && Object.hasOwnProperty.call(message, "patch_version")) {
            writer.uint32(32).uint32(message.patch_version);
        }
        if (message.bootloader_mode != null && Object.hasOwnProperty.call(message, "bootloader_mode")) {
            writer.uint32(40).bool(message.bootloader_mode);
        }
        if (message.device_id != null && Object.hasOwnProperty.call(message, "device_id")) {
            writer.uint32(50).string(message.device_id);
        }
        if (message.pin_protection != null && Object.hasOwnProperty.call(message, "pin_protection")) {
            writer.uint32(56).bool(message.pin_protection);
        }
        if (message.passphrase_protection != null && Object.hasOwnProperty.call(message, "passphrase_protection")) {
            writer.uint32(64).bool(message.passphrase_protection);
        }
        if (message.language != null && Object.hasOwnProperty.call(message, "language")) {
            writer.uint32(74).string(message.language);
        }
        if (message.label != null && Object.hasOwnProperty.call(message, "label")) {
            writer.uint32(82).string(message.label);
        }
        if (message.initialized != null && Object.hasOwnProperty.call(message, "initialized")) {
            writer.uint32(96).bool(message.initialized);
        }
        if (message.revision != null && Object.hasOwnProperty.call(message, "revision")) {
            writer.uint32(106).bytes(message.revision);
        }
        if (message.bootloader_hash != null && Object.hasOwnProperty.call(message, "bootloader_hash")) {
            writer.uint32(114).bytes(message.bootloader_hash);
        }
        if (message.imported != null && Object.hasOwnProperty.call(message, "imported")) {
            writer.uint32(120).bool(message.imported);
        }
        if (message.unlocked != null && Object.hasOwnProperty.call(message, "unlocked")) {
            writer.uint32(128).bool(message.unlocked);
        }
        if (message._passphrase_cached != null && Object.hasOwnProperty.call(message, "_passphrase_cached")) {
            writer.uint32(136).bool(message._passphrase_cached);
        }
        if (message.firmware_present != null && Object.hasOwnProperty.call(message, "firmware_present")) {
            writer.uint32(144).bool(message.firmware_present);
        }
        if (message.backup_availability != null && Object.hasOwnProperty.call(message, "backup_availability")) {
            writer.uint32(152).int32(message.backup_availability);
        }
        if (message.flags != null && Object.hasOwnProperty.call(message, "flags")) {
            writer.uint32(160).uint32(message.flags);
        }
        if (message.model != null && Object.hasOwnProperty.call(message, "model")) {
            writer.uint32(170).string(message.model);
        }
        if (message.fw_major != null && Object.hasOwnProperty.call(message, "fw_major")) {
            writer.uint32(176).uint32(message.fw_major);
        }
        if (message.fw_minor != null && Object.hasOwnProperty.call(message, "fw_minor")) {
            writer.uint32(184).uint32(message.fw_minor);
        }
        if (message.fw_patch != null && Object.hasOwnProperty.call(message, "fw_patch")) {
            writer.uint32(192).uint32(message.fw_patch);
        }
        if (message.fw_vendor != null && Object.hasOwnProperty.call(message, "fw_vendor")) {
            writer.uint32(202).string(message.fw_vendor);
        }
        if (message.unfinished_backup != null && Object.hasOwnProperty.call(message, "unfinished_backup")) {
            writer.uint32(216).bool(message.unfinished_backup);
        }
        if (message.no_backup != null && Object.hasOwnProperty.call(message, "no_backup")) {
            writer.uint32(224).bool(message.no_backup);
        }
        if (message.recovery_status != null && Object.hasOwnProperty.call(message, "recovery_status")) {
            writer.uint32(232).int32(message.recovery_status);
        }
        if (message.capabilities != null && message.capabilities.length) {
            for (var i = 0; i < message.capabilities.length; ++i) {
                writer.uint32(240).int32(message.capabilities[i]);
            }
        }
        if (message.backup_type != null && Object.hasOwnProperty.call(message, "backup_type")) {
            writer.uint32(248).int32(message.backup_type);
        }
        if (message.sd_card_present != null && Object.hasOwnProperty.call(message, "sd_card_present")) {
            writer.uint32(256).bool(message.sd_card_present);
        }
        if (message.sd_protection != null && Object.hasOwnProperty.call(message, "sd_protection")) {
            writer.uint32(264).bool(message.sd_protection);
        }
        if (message.wipe_code_protection != null && Object.hasOwnProperty.call(message, "wipe_code_protection")) {
            writer.uint32(272).bool(message.wipe_code_protection);
        }
        if (message.session_id != null && Object.hasOwnProperty.call(message, "session_id")) {
            writer.uint32(282).bytes(message.session_id);
        }
        if (message.passphrase_always_on_device != null && Object.hasOwnProperty.call(message, "passphrase_always_on_device")) {
            writer.uint32(288).bool(message.passphrase_always_on_device);
        }
        if (message.safety_checks != null && Object.hasOwnProperty.call(message, "safety_checks")) {
            writer.uint32(296).int32(message.safety_checks);
        }
        if (message.auto_lock_delay_ms != null && Object.hasOwnProperty.call(message, "auto_lock_delay_ms")) {
            writer.uint32(304).uint32(message.auto_lock_delay_ms);
        }
        if (message.display_rotation != null && Object.hasOwnProperty.call(message, "display_rotation")) {
            writer.uint32(312).int32(message.display_rotation);
        }
        if (message.experimental_features != null && Object.hasOwnProperty.call(message, "experimental_features")) {
            writer.uint32(320).bool(message.experimental_features);
        }
        if (message.busy != null && Object.hasOwnProperty.call(message, "busy")) {
            writer.uint32(328).bool(message.busy);
        }
        if (message.homescreen_format != null && Object.hasOwnProperty.call(message, "homescreen_format")) {
            writer.uint32(336).int32(message.homescreen_format);
        }
        if (message.hide_passphrase_from_host != null && Object.hasOwnProperty.call(message, "hide_passphrase_from_host")) {
            writer.uint32(344).bool(message.hide_passphrase_from_host);
        }
        if (message.internal_model != null && Object.hasOwnProperty.call(message, "internal_model")) {
            writer.uint32(354).string(message.internal_model);
        }
        if (message.unit_color != null && Object.hasOwnProperty.call(message, "unit_color")) {
            writer.uint32(360).uint32(message.unit_color);
        }
        if (message.unit_btconly != null && Object.hasOwnProperty.call(message, "unit_btconly")) {
            writer.uint32(368).bool(message.unit_btconly);
        }
        if (message.homescreen_width != null && Object.hasOwnProperty.call(message, "homescreen_width")) {
            writer.uint32(376).uint32(message.homescreen_width);
        }
        if (message.homescreen_height != null && Object.hasOwnProperty.call(message, "homescreen_height")) {
            writer.uint32(384).uint32(message.homescreen_height);
        }
        if (message.bootloader_locked != null && Object.hasOwnProperty.call(message, "bootloader_locked")) {
            writer.uint32(392).bool(message.bootloader_locked);
        }
        if (message.language_version_matches != null && Object.hasOwnProperty.call(message, "language_version_matches")) {
            writer.uint32(400).bool(message.language_version_matches);
        }
        if (message.unit_packaging != null && Object.hasOwnProperty.call(message, "unit_packaging")) {
            writer.uint32(408).uint32(message.unit_packaging);
        }
        if (message.haptic_feedback != null && Object.hasOwnProperty.call(message, "haptic_feedback")) {
            writer.uint32(416).bool(message.haptic_feedback);
        }
        if (message.recovery_type != null && Object.hasOwnProperty.call(message, "recovery_type")) {
            writer.uint32(424).int32(message.recovery_type);
        }
        if (message.optiga_sec != null && Object.hasOwnProperty.call(message, "optiga_sec")) {
            writer.uint32(432).uint32(message.optiga_sec);
        }
        if (message.soc != null && Object.hasOwnProperty.call(message, "soc")) {
            writer.uint32(440).uint32(message.soc);
        }
        return writer;
    };

    Features.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.Features();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.vendor = reader.string();
                break;
            case 2:
                message.major_version = reader.uint32();
                break;
            case 3:
                message.minor_version = reader.uint32();
                break;
            case 4:
                message.patch_version = reader.uint32();
                break;
            case 5:
                message.bootloader_mode = reader.bool();
                break;
            case 6:
                message.device_id = reader.string();
                break;
            case 7:
                message.pin_protection = reader.bool();
                break;
            case 8:
                message.passphrase_protection = reader.bool();
                break;
            case 9:
                message.language = reader.string();
                break;
            case 10:
                message.label = reader.string();
                break;
            case 12:
                message.initialized = reader.bool();
                break;
            case 13:
                message.revision = reader.bytes();
                break;
            case 14:
                message.bootloader_hash = reader.bytes();
                break;
            case 15:
                message.imported = reader.bool();
                break;
            case 16:
                message.unlocked = reader.bool();
                break;
            case 17:
                message._passphrase_cached = reader.bool();
                break;
            case 18:
                message.firmware_present = reader.bool();
                break;
            case 19:
                message.backup_availability = reader.int32();
                break;
            case 20:
                message.flags = reader.uint32();
                break;
            case 21:
                message.model = reader.string();
                break;
            case 22:
                message.fw_major = reader.uint32();
                break;
            case 23:
                message.fw_minor = reader.uint32();
                break;
            case 24:
                message.fw_patch = reader.uint32();
                break;
            case 25:
                message.fw_vendor = reader.string();
                break;
            case 27:
                message.unfinished_backup = reader.bool();
                break;
            case 28:
                message.no_backup = reader.bool();
                break;
            case 29:
                message.recovery_status = reader.int32();
                break;
            case 30:
                if (!(message.capabilities && message.capabilities.length)) message.capabilities = [];
                message.capabilities.push(reader.int32());
                break;
            case 31:
                message.backup_type = reader.int32();
                break;
            case 32:
                message.sd_card_present = reader.bool();
                break;
            case 33:
                message.sd_protection = reader.bool();
                break;
            case 34:
                message.wipe_code_protection = reader.bool();
                break;
            case 35:
                message.session_id = reader.bytes();
                break;
            case 36:
                message.passphrase_always_on_device = reader.bool();
                break;
            case 37:
                message.safety_checks = reader.int32();
                break;
            case 38:
                message.auto_lock_delay_ms = reader.uint32();
                break;
            case 39:
                message.display_rotation = reader.int32();
                break;
            case 40:
                message.experimental_features = reader.bool();
                break;
            case 41:
                message.busy = reader.bool();
                break;
            case 42:
                message.homescreen_format = reader.int32();
                break;
            case 43:
                message.hide_passphrase_from_host = reader.bool();
                break;
            case 44:
                message.internal_model = reader.string();
                break;
            case 45:
                message.unit_color = reader.uint32();
                break;
            case 46:
                message.unit_btconly = reader.bool();
                break;
            case 47:
                message.homescreen_width = reader.uint32();
                break;
            case 48:
                message.homescreen_height = reader.uint32();
                break;
            case 49:
                message.bootloader_locked = reader.bool();
                break;
            case 50:
                message.language_version_matches = reader.bool();
                break;
            case 51:
                message.unit_packaging = reader.uint32();
                break;
            case 52:
                message.haptic_feedback = reader.bool();
                break;
            case 53:
                message.recovery_type = reader.int32();
                break;
            case 54:
                message.optiga_sec = reader.uint32();
                break;
            case 55:
                message.soc = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Features.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.vendor != null && message.hasOwnProperty("vendor")) {
            object.vendor = message.vendor;
        }
        if (message.major_version != null && message.hasOwnProperty("major_version")) {
            object.major_version = message.major_version;
        }
        if (message.minor_version != null && message.hasOwnProperty("minor_version")) {
            object.minor_version = message.minor_version;
        }
        if (message.patch_version != null && message.hasOwnProperty("patch_version")) {
            object.patch_version = message.patch_version;
        }
        if (message.bootloader_mode != null && message.hasOwnProperty("bootloader_mode")) {
            object.bootloader_mode = message.bootloader_mode;
        }
        if (message.device_id != null && message.hasOwnProperty("device_id")) {
            object.device_id = message.device_id;
        }
        if (message.pin_protection != null && message.hasOwnProperty("pin_protection")) {
            object.pin_protection = message.pin_protection;
        }
        if (message.passphrase_protection != null && message.hasOwnProperty("passphrase_protection")) {
            object.passphrase_protection = message.passphrase_protection;
        }
        if (message.language != null && message.hasOwnProperty("language")) {
            object.language = message.language;
        }
        if (message.label != null && message.hasOwnProperty("label")) {
            object.label = message.label;
        }
        if (message.initialized != null && message.hasOwnProperty("initialized")) {
            object.initialized = message.initialized;
        }
        if (message.revision != null && message.hasOwnProperty("revision")) {
            object.revision = $util.base64.encode(message.revision, 0, message.revision.length);
        }
        if (message.bootloader_hash != null && message.hasOwnProperty("bootloader_hash")) {
            object.bootloader_hash = $util.base64.encode(message.bootloader_hash, 0, message.bootloader_hash.length);
        }
        if (message.imported != null && message.hasOwnProperty("imported")) {
            object.imported = message.imported;
        }
        if (message.unlocked != null && message.hasOwnProperty("unlocked")) {
            object.unlocked = message.unlocked;
        }
        if (message._passphrase_cached != null && message.hasOwnProperty("_passphrase_cached")) {
            object._passphrase_cached = message._passphrase_cached;
        }
        if (message.firmware_present != null && message.hasOwnProperty("firmware_present")) {
            object.firmware_present = message.firmware_present;
        }
        if (message.backup_availability != null && message.hasOwnProperty("backup_availability")) {
            object.backup_availability = message.backup_availability;
        }
        if (message.flags != null && message.hasOwnProperty("flags")) {
            object.flags = message.flags;
        }
        if (message.model != null && message.hasOwnProperty("model")) {
            object.model = message.model;
        }
        if (message.fw_major != null && message.hasOwnProperty("fw_major")) {
            object.fw_major = message.fw_major;
        }
        if (message.fw_minor != null && message.hasOwnProperty("fw_minor")) {
            object.fw_minor = message.fw_minor;
        }
        if (message.fw_patch != null && message.hasOwnProperty("fw_patch")) {
            object.fw_patch = message.fw_patch;
        }
        if (message.fw_vendor != null && message.hasOwnProperty("fw_vendor")) {
            object.fw_vendor = message.fw_vendor;
        }
        if (message.unfinished_backup != null && message.hasOwnProperty("unfinished_backup")) {
            object.unfinished_backup = message.unfinished_backup;
        }
        if (message.no_backup != null && message.hasOwnProperty("no_backup")) {
            object.no_backup = message.no_backup;
        }
        if (message.recovery_status != null && message.hasOwnProperty("recovery_status")) {
            object.recovery_status = message.recovery_status;
        }
        if (message.capabilities && message.capabilities.length) {
            object.capabilities = [];
            for (var j = 0; j < message.capabilities.length; ++j) {
                object.capabilities[j] = message.capabilities[j];
            }
        }
        if (message.backup_type != null && message.hasOwnProperty("backup_type")) {
            object.backup_type = message.backup_type;
        }
        if (message.sd_card_present != null && message.hasOwnProperty("sd_card_present")) {
            object.sd_card_present = message.sd_card_present;
        }
        if (message.sd_protection != null && message.hasOwnProperty("sd_protection")) {
            object.sd_protection = message.sd_protection;
        }
        if (message.wipe_code_protection != null && message.hasOwnProperty("wipe_code_protection")) {
            object.wipe_code_protection = message.wipe_code_protection;
        }
        if (message.session_id != null && message.hasOwnProperty("session_id")) {
            object.session_id = $util.base64.encode(message.session_id, 0, message.session_id.length);
        }
        if (message.passphrase_always_on_device != null && message.hasOwnProperty("passphrase_always_on_device")) {
            object.passphrase_always_on_device = message.passphrase_always_on_device;
        }
        if (message.safety_checks != null && message.hasOwnProperty("safety_checks")) {
            object.safety_checks = message.safety_checks;
        }
        if (message.auto_lock_delay_ms != null && message.hasOwnProperty("auto_lock_delay_ms")) {
            object.auto_lock_delay_ms = message.auto_lock_delay_ms;
        }
        if (message.display_rotation != null && message.hasOwnProperty("display_rotation")) {
            object.display_rotation = message.display_rotation;
        }
        if (message.experimental_features != null && message.hasOwnProperty("experimental_features")) {
            object.experimental_features = message.experimental_features;
        }
        if (message.busy != null && message.hasOwnProperty("busy")) {
            object.busy = message.busy;
        }
        if (message.homescreen_format != null && message.hasOwnProperty("homescreen_format")) {
            object.homescreen_format = message.homescreen_format;
        }
        if (message.hide_passphrase_from_host != null && message.hasOwnProperty("hide_passphrase_from_host")) {
            object.hide_passphrase_from_host = message.hide_passphrase_from_host;
        }
        if (message.internal_model != null && message.hasOwnProperty("internal_model")) {
            object.internal_model = message.internal_model;
        }
        if (message.unit_color != null && message.hasOwnProperty("unit_color")) {
            object.unit_color = message.unit_color;
        }
        if (message.unit_btconly != null && message.hasOwnProperty("unit_btconly")) {
            object.unit_btconly = message.unit_btconly;
        }
        if (message.homescreen_width != null && message.hasOwnProperty("homescreen_width")) {
            object.homescreen_width = message.homescreen_width;
        }
        if (message.homescreen_height != null && message.hasOwnProperty("homescreen_height")) {
            object.homescreen_height = message.homescreen_height;
        }
        if (message.bootloader_locked != null && message.hasOwnProperty("bootloader_locked")) {
            object.bootloader_locked = message.bootloader_locked;
        }
        if (message.language_version_matches != null && message.hasOwnProperty("language_version_matches")) {
            object.language_version_matches = message.language_version_matches;
        }
        if (message.unit_packaging != null && message.hasOwnProperty("unit_packaging")) {
            object.unit_packaging = message.unit_packaging;
        }
        if (message.haptic_feedback != null && message.hasOwnProperty("haptic_feedback")) {
            object.haptic_feedback = message.haptic_feedback;
        }
        if (message.recovery_type != null && message.hasOwnProperty("recovery_type")) {
            object.recovery_type = message.recovery_type;
        }
        if (message.optiga_sec != null && message.hasOwnProperty("optiga_sec")) {
            object.optiga_sec = message.optiga_sec;
        }
        if (message.soc != null && message.hasOwnProperty("soc")) {
            object.soc = message.soc;
        }
        return object;
    };

    return Features;
})();

// LockDevice message
$root.LockDevice = (function() {
    function LockDevice(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    LockDevice.create = function create(properties) {
        return new LockDevice(properties);
    };

    LockDevice.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    LockDevice.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.LockDevice();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    LockDevice.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return LockDevice;
})();

// SetBusy message
$root.SetBusy = (function() {
    function SetBusy(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    SetBusy.create = function create(properties) {
        return new SetBusy(properties);
    };

    SetBusy.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.expiry_ms != null && Object.hasOwnProperty.call(message, "expiry_ms")) {
            writer.uint32(8).uint32(message.expiry_ms);
        }
        return writer;
    };

    SetBusy.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.SetBusy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.expiry_ms = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    SetBusy.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.expiry_ms != null && message.hasOwnProperty("expiry_ms")) {
            object.expiry_ms = message.expiry_ms;
        }
        return object;
    };

    return SetBusy;
})();

// EndSession message
$root.EndSession = (function() {
    function EndSession(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EndSession.create = function create(properties) {
        return new EndSession(properties);
    };

    EndSession.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    EndSession.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EndSession();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EndSession.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return EndSession;
})();

// ApplySettings message
$root.ApplySettings = (function() {
    function ApplySettings(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    ApplySettings.create = function create(properties) {
        return new ApplySettings(properties);
    };

    ApplySettings.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.language != null && Object.hasOwnProperty.call(message, "language")) {
            writer.uint32(10).string(message.language);
        }
        if (message.label != null && Object.hasOwnProperty.call(message, "label")) {
            writer.uint32(18).string(message.label);
        }
        if (message.use_passphrase != null && Object.hasOwnProperty.call(message, "use_passphrase")) {
            writer.uint32(24).bool(message.use_passphrase);
        }
        if (message.homescreen != null && Object.hasOwnProperty.call(message, "homescreen")) {
            writer.uint32(34).bytes(message.homescreen);
        }
        if (message._passphrase_source != null && Object.hasOwnProperty.call(message, "_passphrase_source")) {
            writer.uint32(40).uint32(message._passphrase_source);
        }
        if (message.auto_lock_delay_ms != null && Object.hasOwnProperty.call(message, "auto_lock_delay_ms")) {
            writer.uint32(48).uint32(message.auto_lock_delay_ms);
        }
        if (message.display_rotation != null && Object.hasOwnProperty.call(message, "display_rotation")) {
            writer.uint32(56).int32(message.display_rotation);
        }
        if (message.passphrase_always_on_device != null && Object.hasOwnProperty.call(message, "passphrase_always_on_device")) {
            writer.uint32(64).bool(message.passphrase_always_on_device);
        }
        if (message.safety_checks != null && Object.hasOwnProperty.call(message, "safety_checks")) {
            writer.uint32(72).int32(message.safety_checks);
        }
        if (message.experimental_features != null && Object.hasOwnProperty.call(message, "experimental_features")) {
            writer.uint32(80).bool(message.experimental_features);
        }
        if (message.hide_passphrase_from_host != null && Object.hasOwnProperty.call(message, "hide_passphrase_from_host")) {
            writer.uint32(88).bool(message.hide_passphrase_from_host);
        }
        if (message.haptic_feedback != null && Object.hasOwnProperty.call(message, "haptic_feedback")) {
            writer.uint32(104).bool(message.haptic_feedback);
        }
        if (message.homescreen_length != null && Object.hasOwnProperty.call(message, "homescreen_length")) {
            writer.uint32(112).uint32(message.homescreen_length);
        }
        return writer;
    };

    ApplySettings.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.ApplySettings();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.language = reader.string();
                break;
            case 2:
                message.label = reader.string();
                break;
            case 3:
                message.use_passphrase = reader.bool();
                break;
            case 4:
                message.homescreen = reader.bytes();
                break;
            case 5:
                message._passphrase_source = reader.uint32();
                break;
            case 6:
                message.auto_lock_delay_ms = reader.uint32();
                break;
            case 7:
                message.display_rotation = reader.int32();
                break;
            case 8:
                message.passphrase_always_on_device = reader.bool();
                break;
            case 9:
                message.safety_checks = reader.int32();
                break;
            case 10:
                message.experimental_features = reader.bool();
                break;
            case 11:
                message.hide_passphrase_from_host = reader.bool();
                break;
            case 13:
                message.haptic_feedback = reader.bool();
                break;
            case 14:
                message.homescreen_length = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ApplySettings.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.language != null && message.hasOwnProperty("language")) {
            object.language = message.language;
        }
        if (message.label != null && message.hasOwnProperty("label")) {
            object.label = message.label;
        }
        if (message.use_passphrase != null && message.hasOwnProperty("use_passphrase")) {
            object.use_passphrase = message.use_passphrase;
        }
        if (message.homescreen != null && message.hasOwnProperty("homescreen")) {
            object.homescreen = $util.base64.encode(message.homescreen, 0, message.homescreen.length);
        }
        if (message._passphrase_source != null && message.hasOwnProperty("_passphrase_source")) {
            object._passphrase_source = message._passphrase_source;
        }
        if (message.auto_lock_delay_ms != null && message.hasOwnProperty("auto_lock_delay_ms")) {
            object.auto_lock_delay_ms = message.auto_lock_delay_ms;
        }
        if (message.display_rotation != null && message.hasOwnProperty("display_rotation")) {
            object.display_rotation = message.display_rotation;
        }
        if (message.passphrase_always_on_device != null && message.hasOwnProperty("passphrase_always_on_device")) {
            object.passphrase_always_on_device = message.passphrase_always_on_device;
        }
        if (message.safety_checks != null && message.hasOwnProperty("safety_checks")) {
            object.safety_checks = message.safety_checks;
        }
        if (message.experimental_features != null && message.hasOwnProperty("experimental_features")) {
            object.experimental_features = message.experimental_features;
        }
        if (message.hide_passphrase_from_host != null && message.hasOwnProperty("hide_passphrase_from_host")) {
            object.hide_passphrase_from_host = message.hide_passphrase_from_host;
        }
        if (message.haptic_feedback != null && message.hasOwnProperty("haptic_feedback")) {
            object.haptic_feedback = message.haptic_feedback;
        }
        if (message.homescreen_length != null && message.hasOwnProperty("homescreen_length")) {
            object.homescreen_length = message.homescreen_length;
        }
        return object;
    };

    return ApplySettings;
})();

// ChangeLanguage message
$root.ChangeLanguage = (function() {
    function ChangeLanguage(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    ChangeLanguage.create = function create(properties) {
        return new ChangeLanguage(properties);
    };

    ChangeLanguage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.data_length != null && Object.hasOwnProperty.call(message, "data_length")) {
            writer.uint32(8).uint32(message.data_length);
        }
        if (message.show_display != null && Object.hasOwnProperty.call(message, "show_display")) {
            writer.uint32(16).bool(message.show_display);
        }
        return writer;
    };

    ChangeLanguage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.ChangeLanguage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.data_length = reader.uint32();
                break;
            case 2:
                message.show_display = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ChangeLanguage.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.data_length != null && message.hasOwnProperty("data_length")) {
            object.data_length = message.data_length;
        }
        if (message.show_display != null && message.hasOwnProperty("show_display")) {
            object.show_display = message.show_display;
        }
        return object;
    };

    return ChangeLanguage;
})();

// DataChunkRequest message
$root.DataChunkRequest = (function() {
    function DataChunkRequest(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DataChunkRequest.create = function create(properties) {
        return new DataChunkRequest(properties);
    };

    DataChunkRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.data_length != null && Object.hasOwnProperty.call(message, "data_length")) {
            writer.uint32(8).uint32(message.data_length);
        }
        if (message.data_offset != null && Object.hasOwnProperty.call(message, "data_offset")) {
            writer.uint32(16).uint32(message.data_offset);
        }
        return writer;
    };

    DataChunkRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DataChunkRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.data_length = reader.uint32();
                break;
            case 2:
                message.data_offset = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DataChunkRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.data_length != null && message.hasOwnProperty("data_length")) {
            object.data_length = message.data_length;
        }
        if (message.data_offset != null && message.hasOwnProperty("data_offset")) {
            object.data_offset = message.data_offset;
        }
        return object;
    };

    return DataChunkRequest;
})();

// DataChunkAck message
$root.DataChunkAck = (function() {
    function DataChunkAck(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DataChunkAck.create = function create(properties) {
        return new DataChunkAck(properties);
    };

    DataChunkAck.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.data_chunk != null && Object.hasOwnProperty.call(message, "data_chunk")) {
            writer.uint32(10).bytes(message.data_chunk);
        }
        return writer;
    };

    DataChunkAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DataChunkAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.data_chunk = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DataChunkAck.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.data_chunk != null && message.hasOwnProperty("data_chunk")) {
            object.data_chunk = $util.base64.encode(message.data_chunk, 0, message.data_chunk.length);
        }
        return object;
    };

    return DataChunkAck;
})();

// ApplyFlags message
$root.ApplyFlags = (function() {
    function ApplyFlags(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    ApplyFlags.create = function create(properties) {
        return new ApplyFlags(properties);
    };

    ApplyFlags.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.flags != null && Object.hasOwnProperty.call(message, "flags")) {
            writer.uint32(8).uint32(message.flags);
        }
        return writer;
    };

    ApplyFlags.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.ApplyFlags();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.flags = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ApplyFlags.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.flags != null && message.hasOwnProperty("flags")) {
            object.flags = message.flags;
        }
        return object;
    };

    return ApplyFlags;
})();

// ChangePin message
$root.ChangePin = (function() {
    function ChangePin(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    ChangePin.create = function create(properties) {
        return new ChangePin(properties);
    };

    ChangePin.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.remove != null && Object.hasOwnProperty.call(message, "remove")) {
            writer.uint32(8).bool(message.remove);
        }
        return writer;
    };

    ChangePin.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.ChangePin();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.remove = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ChangePin.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.remove != null && message.hasOwnProperty("remove")) {
            object.remove = message.remove;
        }
        return object;
    };

    return ChangePin;
})();

// ChangeWipeCode message
$root.ChangeWipeCode = (function() {
    function ChangeWipeCode(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    ChangeWipeCode.create = function create(properties) {
        return new ChangeWipeCode(properties);
    };

    ChangeWipeCode.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.remove != null && Object.hasOwnProperty.call(message, "remove")) {
            writer.uint32(8).bool(message.remove);
        }
        return writer;
    };

    ChangeWipeCode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.ChangeWipeCode();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.remove = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ChangeWipeCode.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.remove != null && message.hasOwnProperty("remove")) {
            object.remove = message.remove;
        }
        return object;
    };

    return ChangeWipeCode;
})();

// SdProtect message
$root.SdProtect = (function() {
    function SdProtect(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    SdProtect.create = function create(properties) {
        return new SdProtect(properties);
    };

    SdProtect.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.operation != null && Object.hasOwnProperty.call(message, "operation")) {
            writer.uint32(8).int32(message.operation);
        }
        return writer;
    };

    SdProtect.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.SdProtect();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.operation = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    SdProtect.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.operation != null && message.hasOwnProperty("operation")) {
            object.operation = message.operation;
        }
        return object;
    };

    return SdProtect;
})();

// Ping message
$root.Ping = (function() {
    function Ping(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    Ping.create = function create(properties) {
        return new Ping(properties);
    };

    Ping.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.message != null && Object.hasOwnProperty.call(message, "message")) {
            writer.uint32(10).string(message.message);
        }
        if (message.button_protection != null && Object.hasOwnProperty.call(message, "button_protection")) {
            writer.uint32(16).bool(message.button_protection);
        }
        return writer;
    };

    Ping.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.Ping();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.message = reader.string();
                break;
            case 2:
                message.button_protection = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Ping.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.message != null && message.hasOwnProperty("message")) {
            object.message = message.message;
        }
        if (message.button_protection != null && message.hasOwnProperty("button_protection")) {
            object.button_protection = message.button_protection;
        }
        return object;
    };

    return Ping;
})();

// Cancel message
$root.Cancel = (function() {
    function Cancel(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    Cancel.create = function create(properties) {
        return new Cancel(properties);
    };

    Cancel.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    Cancel.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.Cancel();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Cancel.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return Cancel;
})();

// GetEntropy message
$root.GetEntropy = (function() {
    function GetEntropy(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    GetEntropy.create = function create(properties) {
        return new GetEntropy(properties);
    };

    GetEntropy.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.size != null && Object.hasOwnProperty.call(message, "size")) {
            writer.uint32(8).uint32(message.size);
        }
        return writer;
    };

    GetEntropy.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.GetEntropy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.size = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    GetEntropy.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.size != null && message.hasOwnProperty("size")) {
            object.size = message.size;
        }
        return object;
    };

    return GetEntropy;
})();

// Entropy message
$root.Entropy = (function() {
    function Entropy(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    Entropy.create = function create(properties) {
        return new Entropy(properties);
    };

    Entropy.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.entropy != null && Object.hasOwnProperty.call(message, "entropy")) {
            writer.uint32(10).bytes(message.entropy);
        }
        return writer;
    };

    Entropy.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.Entropy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.entropy = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Entropy.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.entropy != null && message.hasOwnProperty("entropy")) {
            object.entropy = $util.base64.encode(message.entropy, 0, message.entropy.length);
        }
        return object;
    };

    return Entropy;
})();

// GetFirmwareHash message
$root.GetFirmwareHash = (function() {
    function GetFirmwareHash(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    GetFirmwareHash.create = function create(properties) {
        return new GetFirmwareHash(properties);
    };

    GetFirmwareHash.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.challenge != null && Object.hasOwnProperty.call(message, "challenge")) {
            writer.uint32(10).bytes(message.challenge);
        }
        return writer;
    };

    GetFirmwareHash.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.GetFirmwareHash();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.challenge = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    GetFirmwareHash.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.challenge != null && message.hasOwnProperty("challenge")) {
            object.challenge = $util.base64.encode(message.challenge, 0, message.challenge.length);
        }
        return object;
    };

    return GetFirmwareHash;
})();

// FirmwareHash message
$root.FirmwareHash = (function() {
    function FirmwareHash(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    FirmwareHash.create = function create(properties) {
        return new FirmwareHash(properties);
    };

    FirmwareHash.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.hash != null && Object.hasOwnProperty.call(message, "hash")) {
            writer.uint32(10).bytes(message.hash);
        }
        return writer;
    };

    FirmwareHash.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.FirmwareHash();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.hash = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    FirmwareHash.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.hash != null && message.hasOwnProperty("hash")) {
            object.hash = $util.base64.encode(message.hash, 0, message.hash.length);
        }
        return object;
    };

    return FirmwareHash;
})();

// AuthenticateDevice message
$root.AuthenticateDevice = (function() {
    function AuthenticateDevice(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    AuthenticateDevice.create = function create(properties) {
        return new AuthenticateDevice(properties);
    };

    AuthenticateDevice.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.challenge != null && Object.hasOwnProperty.call(message, "challenge")) {
            writer.uint32(10).bytes(message.challenge);
        }
        return writer;
    };

    AuthenticateDevice.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.AuthenticateDevice();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.challenge = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    AuthenticateDevice.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.challenge != null && message.hasOwnProperty("challenge")) {
            object.challenge = $util.base64.encode(message.challenge, 0, message.challenge.length);
        }
        return object;
    };

    return AuthenticateDevice;
})();

// AuthenticityProof message
$root.AuthenticityProof = (function() {
    function AuthenticityProof(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    AuthenticityProof.create = function create(properties) {
        return new AuthenticityProof(properties);
    };

    AuthenticityProof.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.certificates != null && message.certificates.length) {
            for (var i = 0; i < message.certificates.length; ++i) {
                writer.uint32(10).bytes(message.certificates[i]);
            }
        }
        if (message.signature != null && Object.hasOwnProperty.call(message, "signature")) {
            writer.uint32(18).bytes(message.signature);
        }
        return writer;
    };

    AuthenticityProof.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.AuthenticityProof();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.certificates && message.certificates.length)) message.certificates = [];
                message.certificates.push(reader.bytes());
                break;
            case 2:
                message.signature = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    AuthenticityProof.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.certificates && message.certificates.length) {
            object.certificates = [];
            for (var j = 0; j < message.certificates.length; ++j) {
                object.certificates[j] = $util.base64.encode(message.certificates[j], 0, message.certificates[j].length);
            }
        }
        if (message.signature != null && message.hasOwnProperty("signature")) {
            object.signature = $util.base64.encode(message.signature, 0, message.signature.length);
        }
        return object;
    };

    return AuthenticityProof;
})();

// WipeDevice message
$root.WipeDevice = (function() {
    function WipeDevice(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    WipeDevice.create = function create(properties) {
        return new WipeDevice(properties);
    };

    WipeDevice.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    WipeDevice.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.WipeDevice();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    WipeDevice.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return WipeDevice;
})();

// LoadDevice message
$root.LoadDevice = (function() {
    function LoadDevice(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    LoadDevice.create = function create(properties) {
        return new LoadDevice(properties);
    };

    LoadDevice.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.mnemonics != null && message.mnemonics.length) {
            for (var i = 0; i < message.mnemonics.length; ++i) {
                writer.uint32(10).string(message.mnemonics[i]);
            }
        }
        if (message.pin != null && Object.hasOwnProperty.call(message, "pin")) {
            writer.uint32(26).string(message.pin);
        }
        if (message.passphrase_protection != null && Object.hasOwnProperty.call(message, "passphrase_protection")) {
            writer.uint32(32).bool(message.passphrase_protection);
        }
        if (message.language != null && Object.hasOwnProperty.call(message, "language")) {
            writer.uint32(42).string(message.language);
        }
        if (message.label != null && Object.hasOwnProperty.call(message, "label")) {
            writer.uint32(50).string(message.label);
        }
        if (message.skip_checksum != null && Object.hasOwnProperty.call(message, "skip_checksum")) {
            writer.uint32(56).bool(message.skip_checksum);
        }
        if (message.u2f_counter != null && Object.hasOwnProperty.call(message, "u2f_counter")) {
            writer.uint32(64).uint32(message.u2f_counter);
        }
        if (message.needs_backup != null && Object.hasOwnProperty.call(message, "needs_backup")) {
            writer.uint32(72).bool(message.needs_backup);
        }
        if (message.no_backup != null && Object.hasOwnProperty.call(message, "no_backup")) {
            writer.uint32(80).bool(message.no_backup);
        }
        return writer;
    };

    LoadDevice.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.LoadDevice();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.mnemonics && message.mnemonics.length)) message.mnemonics = [];
                message.mnemonics.push(reader.string());
                break;
            case 3:
                message.pin = reader.string();
                break;
            case 4:
                message.passphrase_protection = reader.bool();
                break;
            case 5:
                message.language = reader.string();
                break;
            case 6:
                message.label = reader.string();
                break;
            case 7:
                message.skip_checksum = reader.bool();
                break;
            case 8:
                message.u2f_counter = reader.uint32();
                break;
            case 9:
                message.needs_backup = reader.bool();
                break;
            case 10:
                message.no_backup = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    LoadDevice.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.mnemonics && message.mnemonics.length) {
            object.mnemonics = [];
            for (var j = 0; j < message.mnemonics.length; ++j) {
                object.mnemonics[j] = message.mnemonics[j];
            }
        }
        if (message.pin != null && message.hasOwnProperty("pin")) {
            object.pin = message.pin;
        }
        if (message.passphrase_protection != null && message.hasOwnProperty("passphrase_protection")) {
            object.passphrase_protection = message.passphrase_protection;
        }
        if (message.language != null && message.hasOwnProperty("language")) {
            object.language = message.language;
        }
        if (message.label != null && message.hasOwnProperty("label")) {
            object.label = message.label;
        }
        if (message.skip_checksum != null && message.hasOwnProperty("skip_checksum")) {
            object.skip_checksum = message.skip_checksum;
        }
        if (message.u2f_counter != null && message.hasOwnProperty("u2f_counter")) {
            object.u2f_counter = message.u2f_counter;
        }
        if (message.needs_backup != null && message.hasOwnProperty("needs_backup")) {
            object.needs_backup = message.needs_backup;
        }
        if (message.no_backup != null && message.hasOwnProperty("no_backup")) {
            object.no_backup = message.no_backup;
        }
        return object;
    };

    return LoadDevice;
})();

// ResetDevice message
$root.ResetDevice = (function() {
    function ResetDevice(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    ResetDevice.create = function create(properties) {
        return new ResetDevice(properties);
    };

    ResetDevice.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.strength != null && Object.hasOwnProperty.call(message, "strength")) {
            writer.uint32(16).uint32(message.strength);
        }
        if (message.passphrase_protection != null && Object.hasOwnProperty.call(message, "passphrase_protection")) {
            writer.uint32(24).bool(message.passphrase_protection);
        }
        if (message.pin_protection != null && Object.hasOwnProperty.call(message, "pin_protection")) {
            writer.uint32(32).bool(message.pin_protection);
        }
        if (message.language != null && Object.hasOwnProperty.call(message, "language")) {
            writer.uint32(42).string(message.language);
        }
        if (message.label != null && Object.hasOwnProperty.call(message, "label")) {
            writer.uint32(50).string(message.label);
        }
        if (message.u2f_counter != null && Object.hasOwnProperty.call(message, "u2f_counter")) {
            writer.uint32(56).uint32(message.u2f_counter);
        }
        if (message.skip_backup != null && Object.hasOwnProperty.call(message, "skip_backup")) {
            writer.uint32(64).bool(message.skip_backup);
        }
        if (message.no_backup != null && Object.hasOwnProperty.call(message, "no_backup")) {
            writer.uint32(72).bool(message.no_backup);
        }
        if (message.backup_type != null && Object.hasOwnProperty.call(message, "backup_type")) {
            writer.uint32(80).int32(message.backup_type);
        }
        if (message.entropy_check != null && Object.hasOwnProperty.call(message, "entropy_check")) {
            writer.uint32(88).bool(message.entropy_check);
        }
        return writer;
    };

    ResetDevice.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.ResetDevice();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                message.strength = reader.uint32();
                break;
            case 3:
                message.passphrase_protection = reader.bool();
                break;
            case 4:
                message.pin_protection = reader.bool();
                break;
            case 5:
                message.language = reader.string();
                break;
            case 6:
                message.label = reader.string();
                break;
            case 7:
                message.u2f_counter = reader.uint32();
                break;
            case 8:
                message.skip_backup = reader.bool();
                break;
            case 9:
                message.no_backup = reader.bool();
                break;
            case 10:
                message.backup_type = reader.int32();
                break;
            case 11:
                message.entropy_check = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ResetDevice.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.strength != null && message.hasOwnProperty("strength")) {
            object.strength = message.strength;
        }
        if (message.passphrase_protection != null && message.hasOwnProperty("passphrase_protection")) {
            object.passphrase_protection = message.passphrase_protection;
        }
        if (message.pin_protection != null && message.hasOwnProperty("pin_protection")) {
            object.pin_protection = message.pin_protection;
        }
        if (message.language != null && message.hasOwnProperty("language")) {
            object.language = message.language;
        }
        if (message.label != null && message.hasOwnProperty("label")) {
            object.label = message.label;
        }
        if (message.u2f_counter != null && message.hasOwnProperty("u2f_counter")) {
            object.u2f_counter = message.u2f_counter;
        }
        if (message.skip_backup != null && message.hasOwnProperty("skip_backup")) {
            object.skip_backup = message.skip_backup;
        }
        if (message.no_backup != null && message.hasOwnProperty("no_backup")) {
            object.no_backup = message.no_backup;
        }
        if (message.backup_type != null && message.hasOwnProperty("backup_type")) {
            object.backup_type = message.backup_type;
        }
        if (message.entropy_check != null && message.hasOwnProperty("entropy_check")) {
            object.entropy_check = message.entropy_check;
        }
        return object;
    };

    return ResetDevice;
})();

// BackupDevice message
$root.BackupDevice = (function() {
    function BackupDevice(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    BackupDevice.create = function create(properties) {
        return new BackupDevice(properties);
    };

    BackupDevice.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.group_threshold != null && Object.hasOwnProperty.call(message, "group_threshold")) {
            writer.uint32(8).uint32(message.group_threshold);
        }
        if (message.groups != null && message.groups.length) {
            for (var i = 0; i < message.groups.length; ++i) {
                writer.uint32(18).string(message.groups[i]);
            }
        }
        return writer;
    };

    BackupDevice.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.BackupDevice();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.group_threshold = reader.uint32();
                break;
            case 2:
                if (!(message.groups && message.groups.length)) message.groups = [];
                message.groups.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    BackupDevice.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.group_threshold != null && message.hasOwnProperty("group_threshold")) {
            object.group_threshold = message.group_threshold;
        }
        if (message.groups && message.groups.length) {
            object.groups = [];
            for (var j = 0; j < message.groups.length; ++j) {
                object.groups[j] = message.groups[j];
            }
        }
        return object;
    };

    return BackupDevice;
})();

// EntropyRequest message
$root.EntropyRequest = (function() {
    function EntropyRequest(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EntropyRequest.create = function create(properties) {
        return new EntropyRequest(properties);
    };

    EntropyRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.entropy_commitment != null && Object.hasOwnProperty.call(message, "entropy_commitment")) {
            writer.uint32(10).bytes(message.entropy_commitment);
        }
        if (message.prev_entropy != null && Object.hasOwnProperty.call(message, "prev_entropy")) {
            writer.uint32(18).bytes(message.prev_entropy);
        }
        return writer;
    };

    EntropyRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EntropyRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.entropy_commitment = reader.bytes();
                break;
            case 2:
                message.prev_entropy = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EntropyRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.entropy_commitment != null && message.hasOwnProperty("entropy_commitment")) {
            object.entropy_commitment = $util.base64.encode(message.entropy_commitment, 0, message.entropy_commitment.length);
        }
        if (message.prev_entropy != null && message.hasOwnProperty("prev_entropy")) {
            object.prev_entropy = $util.base64.encode(message.prev_entropy, 0, message.prev_entropy.length);
        }
        return object;
    };

    return EntropyRequest;
})();

// EntropyAck message
$root.EntropyAck = (function() {
    function EntropyAck(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EntropyAck.create = function create(properties) {
        return new EntropyAck(properties);
    };

    EntropyAck.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.entropy != null && Object.hasOwnProperty.call(message, "entropy")) {
            writer.uint32(10).bytes(message.entropy);
        }
        return writer;
    };

    EntropyAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EntropyAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.entropy = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EntropyAck.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.entropy != null && message.hasOwnProperty("entropy")) {
            object.entropy = $util.base64.encode(message.entropy, 0, message.entropy.length);
        }
        return object;
    };

    return EntropyAck;
})();

// EntropyCheckReady message
$root.EntropyCheckReady = (function() {
    function EntropyCheckReady(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EntropyCheckReady.create = function create(properties) {
        return new EntropyCheckReady(properties);
    };

    EntropyCheckReady.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    EntropyCheckReady.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EntropyCheckReady();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EntropyCheckReady.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return EntropyCheckReady;
})();

// EntropyCheckContinue message
$root.EntropyCheckContinue = (function() {
    function EntropyCheckContinue(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    EntropyCheckContinue.create = function create(properties) {
        return new EntropyCheckContinue(properties);
    };

    EntropyCheckContinue.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.finish != null && Object.hasOwnProperty.call(message, "finish")) {
            writer.uint32(8).bool(message.finish);
        }
        return writer;
    };

    EntropyCheckContinue.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.EntropyCheckContinue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.finish = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EntropyCheckContinue.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.finish != null && message.hasOwnProperty("finish")) {
            object.finish = message.finish;
        }
        return object;
    };

    return EntropyCheckContinue;
})();

// RecoveryDevice message
$root.RecoveryDevice = (function() {
    function RecoveryDevice(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    RecoveryDevice.create = function create(properties) {
        return new RecoveryDevice(properties);
    };

    RecoveryDevice.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.word_count != null && Object.hasOwnProperty.call(message, "word_count")) {
            writer.uint32(8).uint32(message.word_count);
        }
        if (message.passphrase_protection != null && Object.hasOwnProperty.call(message, "passphrase_protection")) {
            writer.uint32(16).bool(message.passphrase_protection);
        }
        if (message.pin_protection != null && Object.hasOwnProperty.call(message, "pin_protection")) {
            writer.uint32(24).bool(message.pin_protection);
        }
        if (message.language != null && Object.hasOwnProperty.call(message, "language")) {
            writer.uint32(34).string(message.language);
        }
        if (message.label != null && Object.hasOwnProperty.call(message, "label")) {
            writer.uint32(42).string(message.label);
        }
        if (message.enforce_wordlist != null && Object.hasOwnProperty.call(message, "enforce_wordlist")) {
            writer.uint32(48).bool(message.enforce_wordlist);
        }
        if (message.input_method != null && Object.hasOwnProperty.call(message, "input_method")) {
            writer.uint32(64).int32(message.input_method);
        }
        if (message.u2f_counter != null && Object.hasOwnProperty.call(message, "u2f_counter")) {
            writer.uint32(72).uint32(message.u2f_counter);
        }
        if (message.type != null && Object.hasOwnProperty.call(message, "type")) {
            writer.uint32(80).int32(message.type);
        }
        return writer;
    };

    RecoveryDevice.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.RecoveryDevice();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.word_count = reader.uint32();
                break;
            case 2:
                message.passphrase_protection = reader.bool();
                break;
            case 3:
                message.pin_protection = reader.bool();
                break;
            case 4:
                message.language = reader.string();
                break;
            case 5:
                message.label = reader.string();
                break;
            case 6:
                message.enforce_wordlist = reader.bool();
                break;
            case 8:
                message.input_method = reader.int32();
                break;
            case 9:
                message.u2f_counter = reader.uint32();
                break;
            case 10:
                message.type = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    RecoveryDevice.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.word_count != null && message.hasOwnProperty("word_count")) {
            object.word_count = message.word_count;
        }
        if (message.passphrase_protection != null && message.hasOwnProperty("passphrase_protection")) {
            object.passphrase_protection = message.passphrase_protection;
        }
        if (message.pin_protection != null && message.hasOwnProperty("pin_protection")) {
            object.pin_protection = message.pin_protection;
        }
        if (message.language != null && message.hasOwnProperty("language")) {
            object.language = message.language;
        }
        if (message.label != null && message.hasOwnProperty("label")) {
            object.label = message.label;
        }
        if (message.enforce_wordlist != null && message.hasOwnProperty("enforce_wordlist")) {
            object.enforce_wordlist = message.enforce_wordlist;
        }
        if (message.input_method != null && message.hasOwnProperty("input_method")) {
            object.input_method = message.input_method;
        }
        if (message.u2f_counter != null && message.hasOwnProperty("u2f_counter")) {
            object.u2f_counter = message.u2f_counter;
        }
        if (message.type != null && message.hasOwnProperty("type")) {
            object.type = message.type;
        }
        return object;
    };

    return RecoveryDevice;
})();

// WordRequest message
$root.WordRequest = (function() {
    function WordRequest(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    WordRequest.create = function create(properties) {
        return new WordRequest(properties);
    };

    WordRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type")) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    };

    WordRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.WordRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    WordRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.type != null && message.hasOwnProperty("type")) {
            object.type = message.type;
        }
        return object;
    };

    return WordRequest;
})();

// WordAck message
$root.WordAck = (function() {
    function WordAck(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    WordAck.create = function create(properties) {
        return new WordAck(properties);
    };

    WordAck.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.word != null && Object.hasOwnProperty.call(message, "word")) {
            writer.uint32(10).string(message.word);
        }
        return writer;
    };

    WordAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.WordAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.word = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    WordAck.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.word != null && message.hasOwnProperty("word")) {
            object.word = message.word;
        }
        return object;
    };

    return WordAck;
})();

// SetU2FCounter message
$root.SetU2FCounter = (function() {
    function SetU2FCounter(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    SetU2FCounter.create = function create(properties) {
        return new SetU2FCounter(properties);
    };

    SetU2FCounter.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.u2f_counter != null && Object.hasOwnProperty.call(message, "u2f_counter")) {
            writer.uint32(8).uint32(message.u2f_counter);
        }
        return writer;
    };

    SetU2FCounter.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.SetU2FCounter();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.u2f_counter = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    SetU2FCounter.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.u2f_counter != null && message.hasOwnProperty("u2f_counter")) {
            object.u2f_counter = message.u2f_counter;
        }
        return object;
    };

    return SetU2FCounter;
})();

// GetNextU2FCounter message
$root.GetNextU2FCounter = (function() {
    function GetNextU2FCounter(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    GetNextU2FCounter.create = function create(properties) {
        return new GetNextU2FCounter(properties);
    };

    GetNextU2FCounter.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    GetNextU2FCounter.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.GetNextU2FCounter();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    GetNextU2FCounter.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return GetNextU2FCounter;
})();

// NextU2FCounter message
$root.NextU2FCounter = (function() {
    function NextU2FCounter(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    NextU2FCounter.create = function create(properties) {
        return new NextU2FCounter(properties);
    };

    NextU2FCounter.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.u2f_counter != null && Object.hasOwnProperty.call(message, "u2f_counter")) {
            writer.uint32(8).uint32(message.u2f_counter);
        }
        return writer;
    };

    NextU2FCounter.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.NextU2FCounter();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.u2f_counter = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    NextU2FCounter.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.u2f_counter != null && message.hasOwnProperty("u2f_counter")) {
            object.u2f_counter = message.u2f_counter;
        }
        return object;
    };

    return NextU2FCounter;
})();

// DoPreauthorized message
$root.DoPreauthorized = (function() {
    function DoPreauthorized(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    DoPreauthorized.create = function create(properties) {
        return new DoPreauthorized(properties);
    };

    DoPreauthorized.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    DoPreauthorized.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.DoPreauthorized();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DoPreauthorized.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return DoPreauthorized;
})();

// PreauthorizedRequest message
$root.PreauthorizedRequest = (function() {
    function PreauthorizedRequest(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    PreauthorizedRequest.create = function create(properties) {
        return new PreauthorizedRequest(properties);
    };

    PreauthorizedRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    PreauthorizedRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.PreauthorizedRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    PreauthorizedRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return PreauthorizedRequest;
})();

// CancelAuthorization message
$root.CancelAuthorization = (function() {
    function CancelAuthorization(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    CancelAuthorization.create = function create(properties) {
        return new CancelAuthorization(properties);
    };

    CancelAuthorization.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    CancelAuthorization.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.CancelAuthorization();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    CancelAuthorization.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return CancelAuthorization;
})();

// RebootToBootloader message
$root.RebootToBootloader = (function() {
    function RebootToBootloader(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    RebootToBootloader.create = function create(properties) {
        return new RebootToBootloader(properties);
    };

    RebootToBootloader.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.boot_command != null && Object.hasOwnProperty.call(message, "boot_command")) {
            writer.uint32(8).int32(message.boot_command);
        }
        if (message.firmware_header != null && Object.hasOwnProperty.call(message, "firmware_header")) {
            writer.uint32(18).bytes(message.firmware_header);
        }
        if (message.language_data_length != null && Object.hasOwnProperty.call(message, "language_data_length")) {
            writer.uint32(24).uint32(message.language_data_length);
        }
        return writer;
    };

    RebootToBootloader.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.RebootToBootloader();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.boot_command = reader.int32();
                break;
            case 2:
                message.firmware_header = reader.bytes();
                break;
            case 3:
                message.language_data_length = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    RebootToBootloader.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.boot_command != null && message.hasOwnProperty("boot_command")) {
            object.boot_command = message.boot_command;
        }
        if (message.firmware_header != null && message.hasOwnProperty("firmware_header")) {
            object.firmware_header = $util.base64.encode(message.firmware_header, 0, message.firmware_header.length);
        }
        if (message.language_data_length != null && message.hasOwnProperty("language_data_length")) {
            object.language_data_length = message.language_data_length;
        }
        return object;
    };

    return RebootToBootloader;
})();

// GetNonce message
$root.GetNonce = (function() {
    function GetNonce(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    GetNonce.create = function create(properties) {
        return new GetNonce(properties);
    };

    GetNonce.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    GetNonce.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.GetNonce();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    GetNonce.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return GetNonce;
})();

// Nonce message
$root.Nonce = (function() {
    function Nonce(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    Nonce.create = function create(properties) {
        return new Nonce(properties);
    };

    Nonce.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce")) {
            writer.uint32(10).bytes(message.nonce);
        }
        return writer;
    };

    Nonce.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.Nonce();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nonce = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Nonce.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.nonce != null && message.hasOwnProperty("nonce")) {
            object.nonce = $util.base64.encode(message.nonce, 0, message.nonce.length);
        }
        return object;
    };

    return Nonce;
})();

// UnlockPath message
$root.UnlockPath = (function() {
    function UnlockPath(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    UnlockPath.create = function create(properties) {
        return new UnlockPath(properties);
    };

    UnlockPath.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.mac != null && Object.hasOwnProperty.call(message, "mac")) {
            writer.uint32(18).bytes(message.mac);
        }
        return writer;
    };

    UnlockPath.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.UnlockPath();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.mac = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    UnlockPath.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.mac != null && message.hasOwnProperty("mac")) {
            object.mac = $util.base64.encode(message.mac, 0, message.mac.length);
        }
        return object;
    };

    return UnlockPath;
})();

// UnlockedPathRequest message
$root.UnlockedPathRequest = (function() {
    function UnlockedPathRequest(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    UnlockedPathRequest.create = function create(properties) {
        return new UnlockedPathRequest(properties);
    };

    UnlockedPathRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.mac != null && Object.hasOwnProperty.call(message, "mac")) {
            writer.uint32(10).bytes(message.mac);
        }
        return writer;
    };

    UnlockedPathRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.UnlockedPathRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mac = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    UnlockedPathRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.mac != null && message.hasOwnProperty("mac")) {
            object.mac = $util.base64.encode(message.mac, 0, message.mac.length);
        }
        return object;
    };

    return UnlockedPathRequest;
})();

// ShowDeviceTutorial message
$root.ShowDeviceTutorial = (function() {
    function ShowDeviceTutorial(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    ShowDeviceTutorial.create = function create(properties) {
        return new ShowDeviceTutorial(properties);
    };

    ShowDeviceTutorial.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    ShowDeviceTutorial.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.ShowDeviceTutorial();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ShowDeviceTutorial.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return ShowDeviceTutorial;
})();

// UnlockBootloader message
$root.UnlockBootloader = (function() {
    function UnlockBootloader(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    UnlockBootloader.create = function create(properties) {
        return new UnlockBootloader(properties);
    };

    UnlockBootloader.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    UnlockBootloader.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.UnlockBootloader();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    UnlockBootloader.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return UnlockBootloader;
})();

// SetBrightness message
$root.SetBrightness = (function() {
    function SetBrightness(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    SetBrightness.create = function create(properties) {
        return new SetBrightness(properties);
    };

    SetBrightness.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value")) {
            writer.uint32(8).uint32(message.value);
        }
        return writer;
    };

    SetBrightness.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.SetBrightness();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.value = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    SetBrightness.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.value != null && message.hasOwnProperty("value")) {
            object.value = message.value;
        }
        return object;
    };

    return SetBrightness;
})();

// NEMGetAddress message
$root.NEMGetAddress = (function() {
    function NEMGetAddress(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    NEMGetAddress.create = function create(properties) {
        return new NEMGetAddress(properties);
    };

    NEMGetAddress.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.network != null && Object.hasOwnProperty.call(message, "network")) {
            writer.uint32(16).uint32(message.network);
        }
        if (message.show_display != null && Object.hasOwnProperty.call(message, "show_display")) {
            writer.uint32(24).bool(message.show_display);
        }
        if (message.chunkify != null && Object.hasOwnProperty.call(message, "chunkify")) {
            writer.uint32(32).bool(message.chunkify);
        }
        return writer;
    };

    NEMGetAddress.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.NEMGetAddress();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.network = reader.uint32();
                break;
            case 3:
                message.show_display = reader.bool();
                break;
            case 4:
                message.chunkify = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    NEMGetAddress.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.network != null && message.hasOwnProperty("network")) {
            object.network = message.network;
        }
        if (message.show_display != null && message.hasOwnProperty("show_display")) {
            object.show_display = message.show_display;
        }
        if (message.chunkify != null && message.hasOwnProperty("chunkify")) {
            object.chunkify = message.chunkify;
        }
        return object;
    };

    return NEMGetAddress;
})();

// NEMAddress message
$root.NEMAddress = (function() {
    function NEMAddress(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    NEMAddress.create = function create(properties) {
        return new NEMAddress(properties);
    };

    NEMAddress.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address != null && Object.hasOwnProperty.call(message, "address")) {
            writer.uint32(10).string(message.address);
        }
        return writer;
    };

    NEMAddress.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.NEMAddress();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.address = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    NEMAddress.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address != null && message.hasOwnProperty("address")) {
            object.address = message.address;
        }
        return object;
    };

    return NEMAddress;
})();

// NEMSignTx message
$root.NEMSignTx = (function() {
    function NEMSignTx(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    NEMSignTx.create = function create(properties) {
        return new NEMSignTx(properties);
    };

    NEMSignTx.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.transaction != null && Object.hasOwnProperty.call(message, "transaction")) {
            writer.uint32(10).string(message.transaction);
        }
        if (message.multisig != null && Object.hasOwnProperty.call(message, "multisig")) {
            writer.uint32(18).string(message.multisig);
        }
        if (message.transfer != null && Object.hasOwnProperty.call(message, "transfer")) {
            writer.uint32(26).string(message.transfer);
        }
        if (message.cosigning != null && Object.hasOwnProperty.call(message, "cosigning")) {
            writer.uint32(32).bool(message.cosigning);
        }
        if (message.provision_namespace != null && Object.hasOwnProperty.call(message, "provision_namespace")) {
            writer.uint32(42).string(message.provision_namespace);
        }
        if (message.mosaic_creation != null && Object.hasOwnProperty.call(message, "mosaic_creation")) {
            writer.uint32(50).string(message.mosaic_creation);
        }
        if (message.supply_change != null && Object.hasOwnProperty.call(message, "supply_change")) {
            writer.uint32(58).string(message.supply_change);
        }
        if (message.aggregate_modification != null && Object.hasOwnProperty.call(message, "aggregate_modification")) {
            writer.uint32(66).string(message.aggregate_modification);
        }
        if (message.importance_transfer != null && Object.hasOwnProperty.call(message, "importance_transfer")) {
            writer.uint32(74).string(message.importance_transfer);
        }
        if (message.chunkify != null && Object.hasOwnProperty.call(message, "chunkify")) {
            writer.uint32(80).bool(message.chunkify);
        }
        return writer;
    };

    NEMSignTx.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.NEMSignTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.transaction = reader.string();
                break;
            case 2:
                message.multisig = reader.string();
                break;
            case 3:
                message.transfer = reader.string();
                break;
            case 4:
                message.cosigning = reader.bool();
                break;
            case 5:
                message.provision_namespace = reader.string();
                break;
            case 6:
                message.mosaic_creation = reader.string();
                break;
            case 7:
                message.supply_change = reader.string();
                break;
            case 8:
                message.aggregate_modification = reader.string();
                break;
            case 9:
                message.importance_transfer = reader.string();
                break;
            case 10:
                message.chunkify = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    NEMSignTx.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.transaction != null && message.hasOwnProperty("transaction")) {
            object.transaction = message.transaction;
        }
        if (message.multisig != null && message.hasOwnProperty("multisig")) {
            object.multisig = message.multisig;
        }
        if (message.transfer != null && message.hasOwnProperty("transfer")) {
            object.transfer = message.transfer;
        }
        if (message.cosigning != null && message.hasOwnProperty("cosigning")) {
            object.cosigning = message.cosigning;
        }
        if (message.provision_namespace != null && message.hasOwnProperty("provision_namespace")) {
            object.provision_namespace = message.provision_namespace;
        }
        if (message.mosaic_creation != null && message.hasOwnProperty("mosaic_creation")) {
            object.mosaic_creation = message.mosaic_creation;
        }
        if (message.supply_change != null && message.hasOwnProperty("supply_change")) {
            object.supply_change = message.supply_change;
        }
        if (message.aggregate_modification != null && message.hasOwnProperty("aggregate_modification")) {
            object.aggregate_modification = message.aggregate_modification;
        }
        if (message.importance_transfer != null && message.hasOwnProperty("importance_transfer")) {
            object.importance_transfer = message.importance_transfer;
        }
        if (message.chunkify != null && message.hasOwnProperty("chunkify")) {
            object.chunkify = message.chunkify;
        }
        return object;
    };

    return NEMSignTx;
})();

// NEMSignedTx message
$root.NEMSignedTx = (function() {
    function NEMSignedTx(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    NEMSignedTx.create = function create(properties) {
        return new NEMSignedTx(properties);
    };

    NEMSignedTx.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.data != null && Object.hasOwnProperty.call(message, "data")) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.signature != null && Object.hasOwnProperty.call(message, "signature")) {
            writer.uint32(18).bytes(message.signature);
        }
        return writer;
    };

    NEMSignedTx.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.NEMSignedTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.data = reader.bytes();
                break;
            case 2:
                message.signature = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    NEMSignedTx.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.data != null && message.hasOwnProperty("data")) {
            object.data = $util.base64.encode(message.data, 0, message.data.length);
        }
        if (message.signature != null && message.hasOwnProperty("signature")) {
            object.signature = $util.base64.encode(message.signature, 0, message.signature.length);
        }
        return object;
    };

    return NEMSignedTx;
})();

// NEMDecryptMessage message
$root.NEMDecryptMessage = (function() {
    function NEMDecryptMessage(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    NEMDecryptMessage.create = function create(properties) {
        return new NEMDecryptMessage(properties);
    };

    NEMDecryptMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.network != null && Object.hasOwnProperty.call(message, "network")) {
            writer.uint32(16).uint32(message.network);
        }
        if (message.public_key != null && Object.hasOwnProperty.call(message, "public_key")) {
            writer.uint32(26).bytes(message.public_key);
        }
        if (message.payload != null && Object.hasOwnProperty.call(message, "payload")) {
            writer.uint32(34).bytes(message.payload);
        }
        return writer;
    };

    NEMDecryptMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.NEMDecryptMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.network = reader.uint32();
                break;
            case 3:
                message.public_key = reader.bytes();
                break;
            case 4:
                message.payload = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    NEMDecryptMessage.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.network != null && message.hasOwnProperty("network")) {
            object.network = message.network;
        }
        if (message.public_key != null && message.hasOwnProperty("public_key")) {
            object.public_key = $util.base64.encode(message.public_key, 0, message.public_key.length);
        }
        if (message.payload != null && message.hasOwnProperty("payload")) {
            object.payload = $util.base64.encode(message.payload, 0, message.payload.length);
        }
        return object;
    };

    return NEMDecryptMessage;
})();

// NEMDecryptedMessage message
$root.NEMDecryptedMessage = (function() {
    function NEMDecryptedMessage(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    NEMDecryptedMessage.create = function create(properties) {
        return new NEMDecryptedMessage(properties);
    };

    NEMDecryptedMessage.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.payload != null && Object.hasOwnProperty.call(message, "payload")) {
            writer.uint32(10).bytes(message.payload);
        }
        return writer;
    };

    NEMDecryptedMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.NEMDecryptedMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.payload = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    NEMDecryptedMessage.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.payload != null && message.hasOwnProperty("payload")) {
            object.payload = $util.base64.encode(message.payload, 0, message.payload.length);
        }
        return object;
    };

    return NEMDecryptedMessage;
})();

// RippleGetAddress message
$root.RippleGetAddress = (function() {
    function RippleGetAddress(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    RippleGetAddress.create = function create(properties) {
        return new RippleGetAddress(properties);
    };

    RippleGetAddress.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.show_display != null && Object.hasOwnProperty.call(message, "show_display")) {
            writer.uint32(16).bool(message.show_display);
        }
        if (message.chunkify != null && Object.hasOwnProperty.call(message, "chunkify")) {
            writer.uint32(24).bool(message.chunkify);
        }
        return writer;
    };

    RippleGetAddress.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.RippleGetAddress();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.show_display = reader.bool();
                break;
            case 3:
                message.chunkify = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    RippleGetAddress.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.show_display != null && message.hasOwnProperty("show_display")) {
            object.show_display = message.show_display;
        }
        if (message.chunkify != null && message.hasOwnProperty("chunkify")) {
            object.chunkify = message.chunkify;
        }
        return object;
    };

    return RippleGetAddress;
})();

// RippleAddress message
$root.RippleAddress = (function() {
    function RippleAddress(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    RippleAddress.create = function create(properties) {
        return new RippleAddress(properties);
    };

    RippleAddress.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address != null && Object.hasOwnProperty.call(message, "address")) {
            writer.uint32(10).string(message.address);
        }
        if (message.mac != null && Object.hasOwnProperty.call(message, "mac")) {
            writer.uint32(18).bytes(message.mac);
        }
        return writer;
    };

    RippleAddress.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.RippleAddress();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.address = reader.string();
                break;
            case 2:
                message.mac = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    RippleAddress.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address != null && message.hasOwnProperty("address")) {
            object.address = message.address;
        }
        if (message.mac != null && message.hasOwnProperty("mac")) {
            object.mac = $util.base64.encode(message.mac, 0, message.mac.length);
        }
        return object;
    };

    return RippleAddress;
})();

// RippleSignTx message
$root.RippleSignTx = (function() {
    function RippleSignTx(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    RippleSignTx.create = function create(properties) {
        return new RippleSignTx(properties);
    };

    RippleSignTx.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.fee != null && Object.hasOwnProperty.call(message, "fee")) {
            writer.uint32(16).uint64(message.fee);
        }
        if (message.flags != null && Object.hasOwnProperty.call(message, "flags")) {
            writer.uint32(24).uint32(message.flags);
        }
        if (message.sequence != null && Object.hasOwnProperty.call(message, "sequence")) {
            writer.uint32(32).uint32(message.sequence);
        }
        if (message.last_ledger_sequence != null && Object.hasOwnProperty.call(message, "last_ledger_sequence")) {
            writer.uint32(40).uint32(message.last_ledger_sequence);
        }
        if (message.payment != null && Object.hasOwnProperty.call(message, "payment")) {
            writer.uint32(50).string(message.payment);
        }
        if (message.chunkify != null && Object.hasOwnProperty.call(message, "chunkify")) {
            writer.uint32(56).bool(message.chunkify);
        }
        if (message.payment_req != null && Object.hasOwnProperty.call(message, "payment_req")) {
            writer.uint32(66).string(message.payment_req);
        }
        return writer;
    };

    RippleSignTx.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.RippleSignTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.fee = reader.uint64();
                break;
            case 3:
                message.flags = reader.uint32();
                break;
            case 4:
                message.sequence = reader.uint32();
                break;
            case 5:
                message.last_ledger_sequence = reader.uint32();
                break;
            case 6:
                message.payment = reader.string();
                break;
            case 7:
                message.chunkify = reader.bool();
                break;
            case 8:
                message.payment_req = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    RippleSignTx.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.fee != null && message.hasOwnProperty("fee")) {
            object.fee = message.fee;
        }
        if (message.flags != null && message.hasOwnProperty("flags")) {
            object.flags = message.flags;
        }
        if (message.sequence != null && message.hasOwnProperty("sequence")) {
            object.sequence = message.sequence;
        }
        if (message.last_ledger_sequence != null && message.hasOwnProperty("last_ledger_sequence")) {
            object.last_ledger_sequence = message.last_ledger_sequence;
        }
        if (message.payment != null && message.hasOwnProperty("payment")) {
            object.payment = message.payment;
        }
        if (message.chunkify != null && message.hasOwnProperty("chunkify")) {
            object.chunkify = message.chunkify;
        }
        if (message.payment_req != null && message.hasOwnProperty("payment_req")) {
            object.payment_req = message.payment_req;
        }
        return object;
    };

    return RippleSignTx;
})();

// RippleSignedTx message
$root.RippleSignedTx = (function() {
    function RippleSignedTx(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    RippleSignedTx.create = function create(properties) {
        return new RippleSignedTx(properties);
    };

    RippleSignedTx.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.signature != null && Object.hasOwnProperty.call(message, "signature")) {
            writer.uint32(10).bytes(message.signature);
        }
        if (message.serialized_tx != null && Object.hasOwnProperty.call(message, "serialized_tx")) {
            writer.uint32(18).bytes(message.serialized_tx);
        }
        return writer;
    };

    RippleSignedTx.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.RippleSignedTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.signature = reader.bytes();
                break;
            case 2:
                message.serialized_tx = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    RippleSignedTx.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.signature != null && message.hasOwnProperty("signature")) {
            object.signature = $util.base64.encode(message.signature, 0, message.signature.length);
        }
        if (message.serialized_tx != null && message.hasOwnProperty("serialized_tx")) {
            object.serialized_tx = $util.base64.encode(message.serialized_tx, 0, message.serialized_tx.length);
        }
        return object;
    };

    return RippleSignedTx;
})();

// SolanaGetPublicKey message
$root.SolanaGetPublicKey = (function() {
    function SolanaGetPublicKey(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    SolanaGetPublicKey.create = function create(properties) {
        return new SolanaGetPublicKey(properties);
    };

    SolanaGetPublicKey.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.show_display != null && Object.hasOwnProperty.call(message, "show_display")) {
            writer.uint32(16).bool(message.show_display);
        }
        return writer;
    };

    SolanaGetPublicKey.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.SolanaGetPublicKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.show_display = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    SolanaGetPublicKey.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.show_display != null && message.hasOwnProperty("show_display")) {
            object.show_display = message.show_display;
        }
        return object;
    };

    return SolanaGetPublicKey;
})();

// SolanaPublicKey message
$root.SolanaPublicKey = (function() {
    function SolanaPublicKey(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    SolanaPublicKey.create = function create(properties) {
        return new SolanaPublicKey(properties);
    };

    SolanaPublicKey.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.public_key != null && Object.hasOwnProperty.call(message, "public_key")) {
            writer.uint32(10).bytes(message.public_key);
        }
        return writer;
    };

    SolanaPublicKey.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.SolanaPublicKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.public_key = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    SolanaPublicKey.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.public_key != null && message.hasOwnProperty("public_key")) {
            object.public_key = $util.base64.encode(message.public_key, 0, message.public_key.length);
        }
        return object;
    };

    return SolanaPublicKey;
})();

// SolanaGetAddress message
$root.SolanaGetAddress = (function() {
    function SolanaGetAddress(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    SolanaGetAddress.create = function create(properties) {
        return new SolanaGetAddress(properties);
    };

    SolanaGetAddress.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.show_display != null && Object.hasOwnProperty.call(message, "show_display")) {
            writer.uint32(16).bool(message.show_display);
        }
        if (message.chunkify != null && Object.hasOwnProperty.call(message, "chunkify")) {
            writer.uint32(24).bool(message.chunkify);
        }
        return writer;
    };

    SolanaGetAddress.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.SolanaGetAddress();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.show_display = reader.bool();
                break;
            case 3:
                message.chunkify = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    SolanaGetAddress.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.show_display != null && message.hasOwnProperty("show_display")) {
            object.show_display = message.show_display;
        }
        if (message.chunkify != null && message.hasOwnProperty("chunkify")) {
            object.chunkify = message.chunkify;
        }
        return object;
    };

    return SolanaGetAddress;
})();

// SolanaAddress message
$root.SolanaAddress = (function() {
    function SolanaAddress(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    SolanaAddress.create = function create(properties) {
        return new SolanaAddress(properties);
    };

    SolanaAddress.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address != null && Object.hasOwnProperty.call(message, "address")) {
            writer.uint32(10).string(message.address);
        }
        if (message.mac != null && Object.hasOwnProperty.call(message, "mac")) {
            writer.uint32(18).bytes(message.mac);
        }
        return writer;
    };

    SolanaAddress.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.SolanaAddress();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.address = reader.string();
                break;
            case 2:
                message.mac = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    SolanaAddress.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address != null && message.hasOwnProperty("address")) {
            object.address = message.address;
        }
        if (message.mac != null && message.hasOwnProperty("mac")) {
            object.mac = $util.base64.encode(message.mac, 0, message.mac.length);
        }
        return object;
    };

    return SolanaAddress;
})();

// SolanaTxTokenAccountInfo message
$root.SolanaTxTokenAccountInfo = (function() {
    function SolanaTxTokenAccountInfo(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    SolanaTxTokenAccountInfo.create = function create(properties) {
        return new SolanaTxTokenAccountInfo(properties);
    };

    SolanaTxTokenAccountInfo.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.base_address != null && Object.hasOwnProperty.call(message, "base_address")) {
            writer.uint32(10).string(message.base_address);
        }
        if (message.token_program != null && Object.hasOwnProperty.call(message, "token_program")) {
            writer.uint32(18).string(message.token_program);
        }
        if (message.token_mint != null && Object.hasOwnProperty.call(message, "token_mint")) {
            writer.uint32(26).string(message.token_mint);
        }
        if (message.token_account != null && Object.hasOwnProperty.call(message, "token_account")) {
            writer.uint32(34).string(message.token_account);
        }
        return writer;
    };

    SolanaTxTokenAccountInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.SolanaTxTokenAccountInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.base_address = reader.string();
                break;
            case 2:
                message.token_program = reader.string();
                break;
            case 3:
                message.token_mint = reader.string();
                break;
            case 4:
                message.token_account = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    SolanaTxTokenAccountInfo.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.base_address != null && message.hasOwnProperty("base_address")) {
            object.base_address = message.base_address;
        }
        if (message.token_program != null && message.hasOwnProperty("token_program")) {
            object.token_program = message.token_program;
        }
        if (message.token_mint != null && message.hasOwnProperty("token_mint")) {
            object.token_mint = message.token_mint;
        }
        if (message.token_account != null && message.hasOwnProperty("token_account")) {
            object.token_account = message.token_account;
        }
        return object;
    };

    return SolanaTxTokenAccountInfo;
})();

// SolanaTxAdditionalInfo message
$root.SolanaTxAdditionalInfo = (function() {
    function SolanaTxAdditionalInfo(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    SolanaTxAdditionalInfo.create = function create(properties) {
        return new SolanaTxAdditionalInfo(properties);
    };

    SolanaTxAdditionalInfo.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.token_accounts_infos != null && message.token_accounts_infos.length) {
            for (var i = 0; i < message.token_accounts_infos.length; ++i) {
                writer.uint32(10).string(message.token_accounts_infos[i]);
            }
        }
        if (message.encoded_token != null && Object.hasOwnProperty.call(message, "encoded_token")) {
            writer.uint32(18).bytes(message.encoded_token);
        }
        return writer;
    };

    SolanaTxAdditionalInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.SolanaTxAdditionalInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.token_accounts_infos && message.token_accounts_infos.length)) message.token_accounts_infos = [];
                message.token_accounts_infos.push(reader.string());
                break;
            case 2:
                message.encoded_token = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    SolanaTxAdditionalInfo.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.token_accounts_infos && message.token_accounts_infos.length) {
            object.token_accounts_infos = [];
            for (var j = 0; j < message.token_accounts_infos.length; ++j) {
                object.token_accounts_infos[j] = message.token_accounts_infos[j];
            }
        }
        if (message.encoded_token != null && message.hasOwnProperty("encoded_token")) {
            object.encoded_token = $util.base64.encode(message.encoded_token, 0, message.encoded_token.length);
        }
        return object;
    };

    return SolanaTxAdditionalInfo;
})();

// SolanaSignTx message
$root.SolanaSignTx = (function() {
    function SolanaSignTx(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    SolanaSignTx.create = function create(properties) {
        return new SolanaSignTx(properties);
    };

    SolanaSignTx.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.serialized_tx != null && Object.hasOwnProperty.call(message, "serialized_tx")) {
            writer.uint32(18).bytes(message.serialized_tx);
        }
        if (message.additional_info != null && Object.hasOwnProperty.call(message, "additional_info")) {
            writer.uint32(26).string(message.additional_info);
        }
        if (message.payment_req != null && Object.hasOwnProperty.call(message, "payment_req")) {
            writer.uint32(34).string(message.payment_req);
        }
        return writer;
    };

    SolanaSignTx.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.SolanaSignTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.serialized_tx = reader.bytes();
                break;
            case 3:
                message.additional_info = reader.string();
                break;
            case 4:
                message.payment_req = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    SolanaSignTx.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.serialized_tx != null && message.hasOwnProperty("serialized_tx")) {
            object.serialized_tx = $util.base64.encode(message.serialized_tx, 0, message.serialized_tx.length);
        }
        if (message.additional_info != null && message.hasOwnProperty("additional_info")) {
            object.additional_info = message.additional_info;
        }
        if (message.payment_req != null && message.hasOwnProperty("payment_req")) {
            object.payment_req = message.payment_req;
        }
        return object;
    };

    return SolanaSignTx;
})();

// SolanaTxSignature message
$root.SolanaTxSignature = (function() {
    function SolanaTxSignature(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    SolanaTxSignature.create = function create(properties) {
        return new SolanaTxSignature(properties);
    };

    SolanaTxSignature.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.signature != null && Object.hasOwnProperty.call(message, "signature")) {
            writer.uint32(10).bytes(message.signature);
        }
        return writer;
    };

    SolanaTxSignature.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.SolanaTxSignature();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.signature = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    SolanaTxSignature.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.signature != null && message.hasOwnProperty("signature")) {
            object.signature = $util.base64.encode(message.signature, 0, message.signature.length);
        }
        return object;
    };

    return SolanaTxSignature;
})();

// StellarAsset message
$root.StellarAsset = (function() {
    function StellarAsset(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    StellarAsset.create = function create(properties) {
        return new StellarAsset(properties);
    };

    StellarAsset.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type")) {
            writer.uint32(8).int32(message.type);
        }
        if (message.code != null && Object.hasOwnProperty.call(message, "code")) {
            writer.uint32(18).string(message.code);
        }
        if (message.issuer != null && Object.hasOwnProperty.call(message, "issuer")) {
            writer.uint32(26).string(message.issuer);
        }
        return writer;
    };

    StellarAsset.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.StellarAsset();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.code = reader.string();
                break;
            case 3:
                message.issuer = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    StellarAsset.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.type != null && message.hasOwnProperty("type")) {
            object.type = message.type;
        }
        if (message.code != null && message.hasOwnProperty("code")) {
            object.code = message.code;
        }
        if (message.issuer != null && message.hasOwnProperty("issuer")) {
            object.issuer = message.issuer;
        }
        return object;
    };

    return StellarAsset;
})();

// StellarGetAddress message
$root.StellarGetAddress = (function() {
    function StellarGetAddress(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    StellarGetAddress.create = function create(properties) {
        return new StellarGetAddress(properties);
    };

    StellarGetAddress.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.show_display != null && Object.hasOwnProperty.call(message, "show_display")) {
            writer.uint32(16).bool(message.show_display);
        }
        if (message.chunkify != null && Object.hasOwnProperty.call(message, "chunkify")) {
            writer.uint32(24).bool(message.chunkify);
        }
        return writer;
    };

    StellarGetAddress.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.StellarGetAddress();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.show_display = reader.bool();
                break;
            case 3:
                message.chunkify = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    StellarGetAddress.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.show_display != null && message.hasOwnProperty("show_display")) {
            object.show_display = message.show_display;
        }
        if (message.chunkify != null && message.hasOwnProperty("chunkify")) {
            object.chunkify = message.chunkify;
        }
        return object;
    };

    return StellarGetAddress;
})();

// StellarAddress message
$root.StellarAddress = (function() {
    function StellarAddress(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    StellarAddress.create = function create(properties) {
        return new StellarAddress(properties);
    };

    StellarAddress.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address != null && Object.hasOwnProperty.call(message, "address")) {
            writer.uint32(10).string(message.address);
        }
        if (message.mac != null && Object.hasOwnProperty.call(message, "mac")) {
            writer.uint32(18).bytes(message.mac);
        }
        return writer;
    };

    StellarAddress.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.StellarAddress();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.address = reader.string();
                break;
            case 2:
                message.mac = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    StellarAddress.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address != null && message.hasOwnProperty("address")) {
            object.address = message.address;
        }
        if (message.mac != null && message.hasOwnProperty("mac")) {
            object.mac = $util.base64.encode(message.mac, 0, message.mac.length);
        }
        return object;
    };

    return StellarAddress;
})();

// StellarSignTx message
$root.StellarSignTx = (function() {
    function StellarSignTx(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    StellarSignTx.create = function create(properties) {
        return new StellarSignTx(properties);
    };

    StellarSignTx.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(16).uint32(message.address_n[i]);
            }
        }
        if (message.network_passphrase != null && Object.hasOwnProperty.call(message, "network_passphrase")) {
            writer.uint32(26).string(message.network_passphrase);
        }
        if (message.source_account != null && Object.hasOwnProperty.call(message, "source_account")) {
            writer.uint32(34).string(message.source_account);
        }
        if (message.fee != null && Object.hasOwnProperty.call(message, "fee")) {
            writer.uint32(40).uint32(message.fee);
        }
        if (message.sequence_number != null && Object.hasOwnProperty.call(message, "sequence_number")) {
            writer.uint32(48).uint64(message.sequence_number);
        }
        if (message.timebounds_start != null && Object.hasOwnProperty.call(message, "timebounds_start")) {
            writer.uint32(64).uint32(message.timebounds_start);
        }
        if (message.timebounds_end != null && Object.hasOwnProperty.call(message, "timebounds_end")) {
            writer.uint32(72).uint32(message.timebounds_end);
        }
        if (message.memo_type != null && Object.hasOwnProperty.call(message, "memo_type")) {
            writer.uint32(80).int32(message.memo_type);
        }
        if (message.memo_text != null && Object.hasOwnProperty.call(message, "memo_text")) {
            writer.uint32(90).string(message.memo_text);
        }
        if (message.memo_id != null && Object.hasOwnProperty.call(message, "memo_id")) {
            writer.uint32(96).uint64(message.memo_id);
        }
        if (message.memo_hash != null && Object.hasOwnProperty.call(message, "memo_hash")) {
            writer.uint32(106).bytes(message.memo_hash);
        }
        if (message.num_operations != null && Object.hasOwnProperty.call(message, "num_operations")) {
            writer.uint32(112).uint32(message.num_operations);
        }
        return writer;
    };

    StellarSignTx.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.StellarSignTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 3:
                message.network_passphrase = reader.string();
                break;
            case 4:
                message.source_account = reader.string();
                break;
            case 5:
                message.fee = reader.uint32();
                break;
            case 6:
                message.sequence_number = reader.uint64();
                break;
            case 8:
                message.timebounds_start = reader.uint32();
                break;
            case 9:
                message.timebounds_end = reader.uint32();
                break;
            case 10:
                message.memo_type = reader.int32();
                break;
            case 11:
                message.memo_text = reader.string();
                break;
            case 12:
                message.memo_id = reader.uint64();
                break;
            case 13:
                message.memo_hash = reader.bytes();
                break;
            case 14:
                message.num_operations = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    StellarSignTx.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.network_passphrase != null && message.hasOwnProperty("network_passphrase")) {
            object.network_passphrase = message.network_passphrase;
        }
        if (message.source_account != null && message.hasOwnProperty("source_account")) {
            object.source_account = message.source_account;
        }
        if (message.fee != null && message.hasOwnProperty("fee")) {
            object.fee = message.fee;
        }
        if (message.sequence_number != null && message.hasOwnProperty("sequence_number")) {
            object.sequence_number = message.sequence_number;
        }
        if (message.timebounds_start != null && message.hasOwnProperty("timebounds_start")) {
            object.timebounds_start = message.timebounds_start;
        }
        if (message.timebounds_end != null && message.hasOwnProperty("timebounds_end")) {
            object.timebounds_end = message.timebounds_end;
        }
        if (message.memo_type != null && message.hasOwnProperty("memo_type")) {
            object.memo_type = message.memo_type;
        }
        if (message.memo_text != null && message.hasOwnProperty("memo_text")) {
            object.memo_text = message.memo_text;
        }
        if (message.memo_id != null && message.hasOwnProperty("memo_id")) {
            object.memo_id = message.memo_id;
        }
        if (message.memo_hash != null && message.hasOwnProperty("memo_hash")) {
            object.memo_hash = $util.base64.encode(message.memo_hash, 0, message.memo_hash.length);
        }
        if (message.num_operations != null && message.hasOwnProperty("num_operations")) {
            object.num_operations = message.num_operations;
        }
        return object;
    };

    return StellarSignTx;
})();

// StellarTxOpRequest message
$root.StellarTxOpRequest = (function() {
    function StellarTxOpRequest(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    StellarTxOpRequest.create = function create(properties) {
        return new StellarTxOpRequest(properties);
    };

    StellarTxOpRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
    };

    StellarTxOpRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.StellarTxOpRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    StellarTxOpRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        return object;
    };

    return StellarTxOpRequest;
})();

// StellarPaymentOp message
$root.StellarPaymentOp = (function() {
    function StellarPaymentOp(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    StellarPaymentOp.create = function create(properties) {
        return new StellarPaymentOp(properties);
    };

    StellarPaymentOp.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.source_account != null && Object.hasOwnProperty.call(message, "source_account")) {
            writer.uint32(10).string(message.source_account);
        }
        if (message.destination_account != null && Object.hasOwnProperty.call(message, "destination_account")) {
            writer.uint32(18).string(message.destination_account);
        }
        if (message.asset != null && Object.hasOwnProperty.call(message, "asset")) {
            writer.uint32(26).string(message.asset);
        }
        if (message.amount != null && Object.hasOwnProperty.call(message, "amount")) {
            writer.uint32(32).sint64(message.amount);
        }
        return writer;
    };

    StellarPaymentOp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.StellarPaymentOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.source_account = reader.string();
                break;
            case 2:
                message.destination_account = reader.string();
                break;
            case 3:
                message.asset = reader.string();
                break;
            case 4:
                message.amount = reader.sint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    StellarPaymentOp.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.source_account != null && message.hasOwnProperty("source_account")) {
            object.source_account = message.source_account;
        }
        if (message.destination_account != null && message.hasOwnProperty("destination_account")) {
            object.destination_account = message.destination_account;
        }
        if (message.asset != null && message.hasOwnProperty("asset")) {
            object.asset = message.asset;
        }
        if (message.amount != null && message.hasOwnProperty("amount")) {
            object.amount = message.amount;
        }
        return object;
    };

    return StellarPaymentOp;
})();

// StellarCreateAccountOp message
$root.StellarCreateAccountOp = (function() {
    function StellarCreateAccountOp(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    StellarCreateAccountOp.create = function create(properties) {
        return new StellarCreateAccountOp(properties);
    };

    StellarCreateAccountOp.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.source_account != null && Object.hasOwnProperty.call(message, "source_account")) {
            writer.uint32(10).string(message.source_account);
        }
        if (message.new_account != null && Object.hasOwnProperty.call(message, "new_account")) {
            writer.uint32(18).string(message.new_account);
        }
        if (message.starting_balance != null && Object.hasOwnProperty.call(message, "starting_balance")) {
            writer.uint32(24).sint64(message.starting_balance);
        }
        return writer;
    };

    StellarCreateAccountOp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.StellarCreateAccountOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.source_account = reader.string();
                break;
            case 2:
                message.new_account = reader.string();
                break;
            case 3:
                message.starting_balance = reader.sint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    StellarCreateAccountOp.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.source_account != null && message.hasOwnProperty("source_account")) {
            object.source_account = message.source_account;
        }
        if (message.new_account != null && message.hasOwnProperty("new_account")) {
            object.new_account = message.new_account;
        }
        if (message.starting_balance != null && message.hasOwnProperty("starting_balance")) {
            object.starting_balance = message.starting_balance;
        }
        return object;
    };

    return StellarCreateAccountOp;
})();

// StellarPathPaymentStrictReceiveOp message
$root.StellarPathPaymentStrictReceiveOp = (function() {
    function StellarPathPaymentStrictReceiveOp(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    StellarPathPaymentStrictReceiveOp.create = function create(properties) {
        return new StellarPathPaymentStrictReceiveOp(properties);
    };

    StellarPathPaymentStrictReceiveOp.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.source_account != null && Object.hasOwnProperty.call(message, "source_account")) {
            writer.uint32(10).string(message.source_account);
        }
        if (message.send_asset != null && Object.hasOwnProperty.call(message, "send_asset")) {
            writer.uint32(18).string(message.send_asset);
        }
        if (message.send_max != null && Object.hasOwnProperty.call(message, "send_max")) {
            writer.uint32(24).sint64(message.send_max);
        }
        if (message.destination_account != null && Object.hasOwnProperty.call(message, "destination_account")) {
            writer.uint32(34).string(message.destination_account);
        }
        if (message.destination_asset != null && Object.hasOwnProperty.call(message, "destination_asset")) {
            writer.uint32(42).string(message.destination_asset);
        }
        if (message.destination_amount != null && Object.hasOwnProperty.call(message, "destination_amount")) {
            writer.uint32(48).sint64(message.destination_amount);
        }
        if (message.paths != null && message.paths.length) {
            for (var i = 0; i < message.paths.length; ++i) {
                writer.uint32(58).string(message.paths[i]);
            }
        }
        return writer;
    };

    StellarPathPaymentStrictReceiveOp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.StellarPathPaymentStrictReceiveOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.source_account = reader.string();
                break;
            case 2:
                message.send_asset = reader.string();
                break;
            case 3:
                message.send_max = reader.sint64();
                break;
            case 4:
                message.destination_account = reader.string();
                break;
            case 5:
                message.destination_asset = reader.string();
                break;
            case 6:
                message.destination_amount = reader.sint64();
                break;
            case 7:
                if (!(message.paths && message.paths.length)) message.paths = [];
                message.paths.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    StellarPathPaymentStrictReceiveOp.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.source_account != null && message.hasOwnProperty("source_account")) {
            object.source_account = message.source_account;
        }
        if (message.send_asset != null && message.hasOwnProperty("send_asset")) {
            object.send_asset = message.send_asset;
        }
        if (message.send_max != null && message.hasOwnProperty("send_max")) {
            object.send_max = message.send_max;
        }
        if (message.destination_account != null && message.hasOwnProperty("destination_account")) {
            object.destination_account = message.destination_account;
        }
        if (message.destination_asset != null && message.hasOwnProperty("destination_asset")) {
            object.destination_asset = message.destination_asset;
        }
        if (message.destination_amount != null && message.hasOwnProperty("destination_amount")) {
            object.destination_amount = message.destination_amount;
        }
        if (message.paths && message.paths.length) {
            object.paths = [];
            for (var j = 0; j < message.paths.length; ++j) {
                object.paths[j] = message.paths[j];
            }
        }
        return object;
    };

    return StellarPathPaymentStrictReceiveOp;
})();

// StellarPathPaymentStrictSendOp message
$root.StellarPathPaymentStrictSendOp = (function() {
    function StellarPathPaymentStrictSendOp(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    StellarPathPaymentStrictSendOp.create = function create(properties) {
        return new StellarPathPaymentStrictSendOp(properties);
    };

    StellarPathPaymentStrictSendOp.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.source_account != null && Object.hasOwnProperty.call(message, "source_account")) {
            writer.uint32(10).string(message.source_account);
        }
        if (message.send_asset != null && Object.hasOwnProperty.call(message, "send_asset")) {
            writer.uint32(18).string(message.send_asset);
        }
        if (message.send_amount != null && Object.hasOwnProperty.call(message, "send_amount")) {
            writer.uint32(24).sint64(message.send_amount);
        }
        if (message.destination_account != null && Object.hasOwnProperty.call(message, "destination_account")) {
            writer.uint32(34).string(message.destination_account);
        }
        if (message.destination_asset != null && Object.hasOwnProperty.call(message, "destination_asset")) {
            writer.uint32(42).string(message.destination_asset);
        }
        if (message.destination_min != null && Object.hasOwnProperty.call(message, "destination_min")) {
            writer.uint32(48).sint64(message.destination_min);
        }
        if (message.paths != null && message.paths.length) {
            for (var i = 0; i < message.paths.length; ++i) {
                writer.uint32(58).string(message.paths[i]);
            }
        }
        return writer;
    };

    StellarPathPaymentStrictSendOp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.StellarPathPaymentStrictSendOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.source_account = reader.string();
                break;
            case 2:
                message.send_asset = reader.string();
                break;
            case 3:
                message.send_amount = reader.sint64();
                break;
            case 4:
                message.destination_account = reader.string();
                break;
            case 5:
                message.destination_asset = reader.string();
                break;
            case 6:
                message.destination_min = reader.sint64();
                break;
            case 7:
                if (!(message.paths && message.paths.length)) message.paths = [];
                message.paths.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    StellarPathPaymentStrictSendOp.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.source_account != null && message.hasOwnProperty("source_account")) {
            object.source_account = message.source_account;
        }
        if (message.send_asset != null && message.hasOwnProperty("send_asset")) {
            object.send_asset = message.send_asset;
        }
        if (message.send_amount != null && message.hasOwnProperty("send_amount")) {
            object.send_amount = message.send_amount;
        }
        if (message.destination_account != null && message.hasOwnProperty("destination_account")) {
            object.destination_account = message.destination_account;
        }
        if (message.destination_asset != null && message.hasOwnProperty("destination_asset")) {
            object.destination_asset = message.destination_asset;
        }
        if (message.destination_min != null && message.hasOwnProperty("destination_min")) {
            object.destination_min = message.destination_min;
        }
        if (message.paths && message.paths.length) {
            object.paths = [];
            for (var j = 0; j < message.paths.length; ++j) {
                object.paths[j] = message.paths[j];
            }
        }
        return object;
    };

    return StellarPathPaymentStrictSendOp;
})();

// StellarManageSellOfferOp message
$root.StellarManageSellOfferOp = (function() {
    function StellarManageSellOfferOp(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    StellarManageSellOfferOp.create = function create(properties) {
        return new StellarManageSellOfferOp(properties);
    };

    StellarManageSellOfferOp.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.source_account != null && Object.hasOwnProperty.call(message, "source_account")) {
            writer.uint32(10).string(message.source_account);
        }
        if (message.selling_asset != null && Object.hasOwnProperty.call(message, "selling_asset")) {
            writer.uint32(18).string(message.selling_asset);
        }
        if (message.buying_asset != null && Object.hasOwnProperty.call(message, "buying_asset")) {
            writer.uint32(26).string(message.buying_asset);
        }
        if (message.amount != null && Object.hasOwnProperty.call(message, "amount")) {
            writer.uint32(32).sint64(message.amount);
        }
        if (message.price_n != null && Object.hasOwnProperty.call(message, "price_n")) {
            writer.uint32(40).uint32(message.price_n);
        }
        if (message.price_d != null && Object.hasOwnProperty.call(message, "price_d")) {
            writer.uint32(48).uint32(message.price_d);
        }
        if (message.offer_id != null && Object.hasOwnProperty.call(message, "offer_id")) {
            writer.uint32(56).uint64(message.offer_id);
        }
        return writer;
    };

    StellarManageSellOfferOp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.StellarManageSellOfferOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.source_account = reader.string();
                break;
            case 2:
                message.selling_asset = reader.string();
                break;
            case 3:
                message.buying_asset = reader.string();
                break;
            case 4:
                message.amount = reader.sint64();
                break;
            case 5:
                message.price_n = reader.uint32();
                break;
            case 6:
                message.price_d = reader.uint32();
                break;
            case 7:
                message.offer_id = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    StellarManageSellOfferOp.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.source_account != null && message.hasOwnProperty("source_account")) {
            object.source_account = message.source_account;
        }
        if (message.selling_asset != null && message.hasOwnProperty("selling_asset")) {
            object.selling_asset = message.selling_asset;
        }
        if (message.buying_asset != null && message.hasOwnProperty("buying_asset")) {
            object.buying_asset = message.buying_asset;
        }
        if (message.amount != null && message.hasOwnProperty("amount")) {
            object.amount = message.amount;
        }
        if (message.price_n != null && message.hasOwnProperty("price_n")) {
            object.price_n = message.price_n;
        }
        if (message.price_d != null && message.hasOwnProperty("price_d")) {
            object.price_d = message.price_d;
        }
        if (message.offer_id != null && message.hasOwnProperty("offer_id")) {
            object.offer_id = message.offer_id;
        }
        return object;
    };

    return StellarManageSellOfferOp;
})();

// StellarManageBuyOfferOp message
$root.StellarManageBuyOfferOp = (function() {
    function StellarManageBuyOfferOp(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    StellarManageBuyOfferOp.create = function create(properties) {
        return new StellarManageBuyOfferOp(properties);
    };

    StellarManageBuyOfferOp.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.source_account != null && Object.hasOwnProperty.call(message, "source_account")) {
            writer.uint32(10).string(message.source_account);
        }
        if (message.selling_asset != null && Object.hasOwnProperty.call(message, "selling_asset")) {
            writer.uint32(18).string(message.selling_asset);
        }
        if (message.buying_asset != null && Object.hasOwnProperty.call(message, "buying_asset")) {
            writer.uint32(26).string(message.buying_asset);
        }
        if (message.amount != null && Object.hasOwnProperty.call(message, "amount")) {
            writer.uint32(32).sint64(message.amount);
        }
        if (message.price_n != null && Object.hasOwnProperty.call(message, "price_n")) {
            writer.uint32(40).uint32(message.price_n);
        }
        if (message.price_d != null && Object.hasOwnProperty.call(message, "price_d")) {
            writer.uint32(48).uint32(message.price_d);
        }
        if (message.offer_id != null && Object.hasOwnProperty.call(message, "offer_id")) {
            writer.uint32(56).uint64(message.offer_id);
        }
        return writer;
    };

    StellarManageBuyOfferOp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.StellarManageBuyOfferOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.source_account = reader.string();
                break;
            case 2:
                message.selling_asset = reader.string();
                break;
            case 3:
                message.buying_asset = reader.string();
                break;
            case 4:
                message.amount = reader.sint64();
                break;
            case 5:
                message.price_n = reader.uint32();
                break;
            case 6:
                message.price_d = reader.uint32();
                break;
            case 7:
                message.offer_id = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    StellarManageBuyOfferOp.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.source_account != null && message.hasOwnProperty("source_account")) {
            object.source_account = message.source_account;
        }
        if (message.selling_asset != null && message.hasOwnProperty("selling_asset")) {
            object.selling_asset = message.selling_asset;
        }
        if (message.buying_asset != null && message.hasOwnProperty("buying_asset")) {
            object.buying_asset = message.buying_asset;
        }
        if (message.amount != null && message.hasOwnProperty("amount")) {
            object.amount = message.amount;
        }
        if (message.price_n != null && message.hasOwnProperty("price_n")) {
            object.price_n = message.price_n;
        }
        if (message.price_d != null && message.hasOwnProperty("price_d")) {
            object.price_d = message.price_d;
        }
        if (message.offer_id != null && message.hasOwnProperty("offer_id")) {
            object.offer_id = message.offer_id;
        }
        return object;
    };

    return StellarManageBuyOfferOp;
})();

// StellarCreatePassiveSellOfferOp message
$root.StellarCreatePassiveSellOfferOp = (function() {
    function StellarCreatePassiveSellOfferOp(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    StellarCreatePassiveSellOfferOp.create = function create(properties) {
        return new StellarCreatePassiveSellOfferOp(properties);
    };

    StellarCreatePassiveSellOfferOp.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.source_account != null && Object.hasOwnProperty.call(message, "source_account")) {
            writer.uint32(10).string(message.source_account);
        }
        if (message.selling_asset != null && Object.hasOwnProperty.call(message, "selling_asset")) {
            writer.uint32(18).string(message.selling_asset);
        }
        if (message.buying_asset != null && Object.hasOwnProperty.call(message, "buying_asset")) {
            writer.uint32(26).string(message.buying_asset);
        }
        if (message.amount != null && Object.hasOwnProperty.call(message, "amount")) {
            writer.uint32(32).sint64(message.amount);
        }
        if (message.price_n != null && Object.hasOwnProperty.call(message, "price_n")) {
            writer.uint32(40).uint32(message.price_n);
        }
        if (message.price_d != null && Object.hasOwnProperty.call(message, "price_d")) {
            writer.uint32(48).uint32(message.price_d);
        }
        return writer;
    };

    StellarCreatePassiveSellOfferOp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.StellarCreatePassiveSellOfferOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.source_account = reader.string();
                break;
            case 2:
                message.selling_asset = reader.string();
                break;
            case 3:
                message.buying_asset = reader.string();
                break;
            case 4:
                message.amount = reader.sint64();
                break;
            case 5:
                message.price_n = reader.uint32();
                break;
            case 6:
                message.price_d = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    StellarCreatePassiveSellOfferOp.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.source_account != null && message.hasOwnProperty("source_account")) {
            object.source_account = message.source_account;
        }
        if (message.selling_asset != null && message.hasOwnProperty("selling_asset")) {
            object.selling_asset = message.selling_asset;
        }
        if (message.buying_asset != null && message.hasOwnProperty("buying_asset")) {
            object.buying_asset = message.buying_asset;
        }
        if (message.amount != null && message.hasOwnProperty("amount")) {
            object.amount = message.amount;
        }
        if (message.price_n != null && message.hasOwnProperty("price_n")) {
            object.price_n = message.price_n;
        }
        if (message.price_d != null && message.hasOwnProperty("price_d")) {
            object.price_d = message.price_d;
        }
        return object;
    };

    return StellarCreatePassiveSellOfferOp;
})();

// StellarSetOptionsOp message
$root.StellarSetOptionsOp = (function() {
    function StellarSetOptionsOp(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    StellarSetOptionsOp.create = function create(properties) {
        return new StellarSetOptionsOp(properties);
    };

    StellarSetOptionsOp.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.source_account != null && Object.hasOwnProperty.call(message, "source_account")) {
            writer.uint32(10).string(message.source_account);
        }
        if (message.inflation_destination_account != null && Object.hasOwnProperty.call(message, "inflation_destination_account")) {
            writer.uint32(18).string(message.inflation_destination_account);
        }
        if (message.clear_flags != null && Object.hasOwnProperty.call(message, "clear_flags")) {
            writer.uint32(24).uint32(message.clear_flags);
        }
        if (message.set_flags != null && Object.hasOwnProperty.call(message, "set_flags")) {
            writer.uint32(32).uint32(message.set_flags);
        }
        if (message.master_weight != null && Object.hasOwnProperty.call(message, "master_weight")) {
            writer.uint32(40).uint32(message.master_weight);
        }
        if (message.low_threshold != null && Object.hasOwnProperty.call(message, "low_threshold")) {
            writer.uint32(48).uint32(message.low_threshold);
        }
        if (message.medium_threshold != null && Object.hasOwnProperty.call(message, "medium_threshold")) {
            writer.uint32(56).uint32(message.medium_threshold);
        }
        if (message.high_threshold != null && Object.hasOwnProperty.call(message, "high_threshold")) {
            writer.uint32(64).uint32(message.high_threshold);
        }
        if (message.home_domain != null && Object.hasOwnProperty.call(message, "home_domain")) {
            writer.uint32(74).string(message.home_domain);
        }
        if (message.signer_type != null && Object.hasOwnProperty.call(message, "signer_type")) {
            writer.uint32(80).int32(message.signer_type);
        }
        if (message.signer_key != null && Object.hasOwnProperty.call(message, "signer_key")) {
            writer.uint32(90).bytes(message.signer_key);
        }
        if (message.signer_weight != null && Object.hasOwnProperty.call(message, "signer_weight")) {
            writer.uint32(96).uint32(message.signer_weight);
        }
        return writer;
    };

    StellarSetOptionsOp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.StellarSetOptionsOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.source_account = reader.string();
                break;
            case 2:
                message.inflation_destination_account = reader.string();
                break;
            case 3:
                message.clear_flags = reader.uint32();
                break;
            case 4:
                message.set_flags = reader.uint32();
                break;
            case 5:
                message.master_weight = reader.uint32();
                break;
            case 6:
                message.low_threshold = reader.uint32();
                break;
            case 7:
                message.medium_threshold = reader.uint32();
                break;
            case 8:
                message.high_threshold = reader.uint32();
                break;
            case 9:
                message.home_domain = reader.string();
                break;
            case 10:
                message.signer_type = reader.int32();
                break;
            case 11:
                message.signer_key = reader.bytes();
                break;
            case 12:
                message.signer_weight = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    StellarSetOptionsOp.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.source_account != null && message.hasOwnProperty("source_account")) {
            object.source_account = message.source_account;
        }
        if (message.inflation_destination_account != null && message.hasOwnProperty("inflation_destination_account")) {
            object.inflation_destination_account = message.inflation_destination_account;
        }
        if (message.clear_flags != null && message.hasOwnProperty("clear_flags")) {
            object.clear_flags = message.clear_flags;
        }
        if (message.set_flags != null && message.hasOwnProperty("set_flags")) {
            object.set_flags = message.set_flags;
        }
        if (message.master_weight != null && message.hasOwnProperty("master_weight")) {
            object.master_weight = message.master_weight;
        }
        if (message.low_threshold != null && message.hasOwnProperty("low_threshold")) {
            object.low_threshold = message.low_threshold;
        }
        if (message.medium_threshold != null && message.hasOwnProperty("medium_threshold")) {
            object.medium_threshold = message.medium_threshold;
        }
        if (message.high_threshold != null && message.hasOwnProperty("high_threshold")) {
            object.high_threshold = message.high_threshold;
        }
        if (message.home_domain != null && message.hasOwnProperty("home_domain")) {
            object.home_domain = message.home_domain;
        }
        if (message.signer_type != null && message.hasOwnProperty("signer_type")) {
            object.signer_type = message.signer_type;
        }
        if (message.signer_key != null && message.hasOwnProperty("signer_key")) {
            object.signer_key = $util.base64.encode(message.signer_key, 0, message.signer_key.length);
        }
        if (message.signer_weight != null && message.hasOwnProperty("signer_weight")) {
            object.signer_weight = message.signer_weight;
        }
        return object;
    };

    return StellarSetOptionsOp;
})();

// StellarChangeTrustOp message
$root.StellarChangeTrustOp = (function() {
    function StellarChangeTrustOp(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    StellarChangeTrustOp.create = function create(properties) {
        return new StellarChangeTrustOp(properties);
    };

    StellarChangeTrustOp.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.source_account != null && Object.hasOwnProperty.call(message, "source_account")) {
            writer.uint32(10).string(message.source_account);
        }
        if (message.asset != null && Object.hasOwnProperty.call(message, "asset")) {
            writer.uint32(18).string(message.asset);
        }
        if (message.limit != null && Object.hasOwnProperty.call(message, "limit")) {
            writer.uint32(24).uint64(message.limit);
        }
        return writer;
    };

    StellarChangeTrustOp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.StellarChangeTrustOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.source_account = reader.string();
                break;
            case 2:
                message.asset = reader.string();
                break;
            case 3:
                message.limit = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    StellarChangeTrustOp.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.source_account != null && message.hasOwnProperty("source_account")) {
            object.source_account = message.source_account;
        }
        if (message.asset != null && message.hasOwnProperty("asset")) {
            object.asset = message.asset;
        }
        if (message.limit != null && message.hasOwnProperty("limit")) {
            object.limit = message.limit;
        }
        return object;
    };

    return StellarChangeTrustOp;
})();

// StellarAllowTrustOp message
$root.StellarAllowTrustOp = (function() {
    function StellarAllowTrustOp(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    StellarAllowTrustOp.create = function create(properties) {
        return new StellarAllowTrustOp(properties);
    };

    StellarAllowTrustOp.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.source_account != null && Object.hasOwnProperty.call(message, "source_account")) {
            writer.uint32(10).string(message.source_account);
        }
        if (message.trusted_account != null && Object.hasOwnProperty.call(message, "trusted_account")) {
            writer.uint32(18).string(message.trusted_account);
        }
        if (message.asset_type != null && Object.hasOwnProperty.call(message, "asset_type")) {
            writer.uint32(24).int32(message.asset_type);
        }
        if (message.asset_code != null && Object.hasOwnProperty.call(message, "asset_code")) {
            writer.uint32(34).string(message.asset_code);
        }
        if (message.is_authorized != null && Object.hasOwnProperty.call(message, "is_authorized")) {
            writer.uint32(40).bool(message.is_authorized);
        }
        return writer;
    };

    StellarAllowTrustOp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.StellarAllowTrustOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.source_account = reader.string();
                break;
            case 2:
                message.trusted_account = reader.string();
                break;
            case 3:
                message.asset_type = reader.int32();
                break;
            case 4:
                message.asset_code = reader.string();
                break;
            case 5:
                message.is_authorized = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    StellarAllowTrustOp.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.source_account != null && message.hasOwnProperty("source_account")) {
            object.source_account = message.source_account;
        }
        if (message.trusted_account != null && message.hasOwnProperty("trusted_account")) {
            object.trusted_account = message.trusted_account;
        }
        if (message.asset_type != null && message.hasOwnProperty("asset_type")) {
            object.asset_type = message.asset_type;
        }
        if (message.asset_code != null && message.hasOwnProperty("asset_code")) {
            object.asset_code = message.asset_code;
        }
        if (message.is_authorized != null && message.hasOwnProperty("is_authorized")) {
            object.is_authorized = message.is_authorized;
        }
        return object;
    };

    return StellarAllowTrustOp;
})();

// StellarAccountMergeOp message
$root.StellarAccountMergeOp = (function() {
    function StellarAccountMergeOp(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    StellarAccountMergeOp.create = function create(properties) {
        return new StellarAccountMergeOp(properties);
    };

    StellarAccountMergeOp.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.source_account != null && Object.hasOwnProperty.call(message, "source_account")) {
            writer.uint32(10).string(message.source_account);
        }
        if (message.destination_account != null && Object.hasOwnProperty.call(message, "destination_account")) {
            writer.uint32(18).string(message.destination_account);
        }
        return writer;
    };

    StellarAccountMergeOp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.StellarAccountMergeOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.source_account = reader.string();
                break;
            case 2:
                message.destination_account = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    StellarAccountMergeOp.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.source_account != null && message.hasOwnProperty("source_account")) {
            object.source_account = message.source_account;
        }
        if (message.destination_account != null && message.hasOwnProperty("destination_account")) {
            object.destination_account = message.destination_account;
        }
        return object;
    };

    return StellarAccountMergeOp;
})();

// StellarManageDataOp message
$root.StellarManageDataOp = (function() {
    function StellarManageDataOp(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    StellarManageDataOp.create = function create(properties) {
        return new StellarManageDataOp(properties);
    };

    StellarManageDataOp.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.source_account != null && Object.hasOwnProperty.call(message, "source_account")) {
            writer.uint32(10).string(message.source_account);
        }
        if (message.key != null && Object.hasOwnProperty.call(message, "key")) {
            writer.uint32(18).string(message.key);
        }
        if (message.value != null && Object.hasOwnProperty.call(message, "value")) {
            writer.uint32(26).bytes(message.value);
        }
        return writer;
    };

    StellarManageDataOp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.StellarManageDataOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.source_account = reader.string();
                break;
            case 2:
                message.key = reader.string();
                break;
            case 3:
                message.value = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    StellarManageDataOp.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.source_account != null && message.hasOwnProperty("source_account")) {
            object.source_account = message.source_account;
        }
        if (message.key != null && message.hasOwnProperty("key")) {
            object.key = message.key;
        }
        if (message.value != null && message.hasOwnProperty("value")) {
            object.value = $util.base64.encode(message.value, 0, message.value.length);
        }
        return object;
    };

    return StellarManageDataOp;
})();

// StellarBumpSequenceOp message
$root.StellarBumpSequenceOp = (function() {
    function StellarBumpSequenceOp(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    StellarBumpSequenceOp.create = function create(properties) {
        return new StellarBumpSequenceOp(properties);
    };

    StellarBumpSequenceOp.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.source_account != null && Object.hasOwnProperty.call(message, "source_account")) {
            writer.uint32(10).string(message.source_account);
        }
        if (message.bump_to != null && Object.hasOwnProperty.call(message, "bump_to")) {
            writer.uint32(16).uint64(message.bump_to);
        }
        return writer;
    };

    StellarBumpSequenceOp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.StellarBumpSequenceOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.source_account = reader.string();
                break;
            case 2:
                message.bump_to = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    StellarBumpSequenceOp.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.source_account != null && message.hasOwnProperty("source_account")) {
            object.source_account = message.source_account;
        }
        if (message.bump_to != null && message.hasOwnProperty("bump_to")) {
            object.bump_to = message.bump_to;
        }
        return object;
    };

    return StellarBumpSequenceOp;
})();

// StellarClaimClaimableBalanceOp message
$root.StellarClaimClaimableBalanceOp = (function() {
    function StellarClaimClaimableBalanceOp(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    StellarClaimClaimableBalanceOp.create = function create(properties) {
        return new StellarClaimClaimableBalanceOp(properties);
    };

    StellarClaimClaimableBalanceOp.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.source_account != null && Object.hasOwnProperty.call(message, "source_account")) {
            writer.uint32(10).string(message.source_account);
        }
        if (message.balance_id != null && Object.hasOwnProperty.call(message, "balance_id")) {
            writer.uint32(18).bytes(message.balance_id);
        }
        return writer;
    };

    StellarClaimClaimableBalanceOp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.StellarClaimClaimableBalanceOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.source_account = reader.string();
                break;
            case 2:
                message.balance_id = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    StellarClaimClaimableBalanceOp.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.source_account != null && message.hasOwnProperty("source_account")) {
            object.source_account = message.source_account;
        }
        if (message.balance_id != null && message.hasOwnProperty("balance_id")) {
            object.balance_id = $util.base64.encode(message.balance_id, 0, message.balance_id.length);
        }
        return object;
    };

    return StellarClaimClaimableBalanceOp;
})();

// StellarSignedTx message
$root.StellarSignedTx = (function() {
    function StellarSignedTx(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    StellarSignedTx.create = function create(properties) {
        return new StellarSignedTx(properties);
    };

    StellarSignedTx.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.public_key != null && Object.hasOwnProperty.call(message, "public_key")) {
            writer.uint32(10).bytes(message.public_key);
        }
        if (message.signature != null && Object.hasOwnProperty.call(message, "signature")) {
            writer.uint32(18).bytes(message.signature);
        }
        return writer;
    };

    StellarSignedTx.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.StellarSignedTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.public_key = reader.bytes();
                break;
            case 2:
                message.signature = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    StellarSignedTx.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.public_key != null && message.hasOwnProperty("public_key")) {
            object.public_key = $util.base64.encode(message.public_key, 0, message.public_key.length);
        }
        if (message.signature != null && message.hasOwnProperty("signature")) {
            object.signature = $util.base64.encode(message.signature, 0, message.signature.length);
        }
        return object;
    };

    return StellarSignedTx;
})();

// TezosGetAddress message
$root.TezosGetAddress = (function() {
    function TezosGetAddress(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    TezosGetAddress.create = function create(properties) {
        return new TezosGetAddress(properties);
    };

    TezosGetAddress.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.show_display != null && Object.hasOwnProperty.call(message, "show_display")) {
            writer.uint32(16).bool(message.show_display);
        }
        if (message.chunkify != null && Object.hasOwnProperty.call(message, "chunkify")) {
            writer.uint32(24).bool(message.chunkify);
        }
        return writer;
    };

    TezosGetAddress.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.TezosGetAddress();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.show_display = reader.bool();
                break;
            case 3:
                message.chunkify = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    TezosGetAddress.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.show_display != null && message.hasOwnProperty("show_display")) {
            object.show_display = message.show_display;
        }
        if (message.chunkify != null && message.hasOwnProperty("chunkify")) {
            object.chunkify = message.chunkify;
        }
        return object;
    };

    return TezosGetAddress;
})();

// TezosAddress message
$root.TezosAddress = (function() {
    function TezosAddress(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    TezosAddress.create = function create(properties) {
        return new TezosAddress(properties);
    };

    TezosAddress.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address != null && Object.hasOwnProperty.call(message, "address")) {
            writer.uint32(10).string(message.address);
        }
        if (message.mac != null && Object.hasOwnProperty.call(message, "mac")) {
            writer.uint32(18).bytes(message.mac);
        }
        return writer;
    };

    TezosAddress.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.TezosAddress();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.address = reader.string();
                break;
            case 2:
                message.mac = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    TezosAddress.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address != null && message.hasOwnProperty("address")) {
            object.address = message.address;
        }
        if (message.mac != null && message.hasOwnProperty("mac")) {
            object.mac = $util.base64.encode(message.mac, 0, message.mac.length);
        }
        return object;
    };

    return TezosAddress;
})();

// TezosGetPublicKey message
$root.TezosGetPublicKey = (function() {
    function TezosGetPublicKey(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    TezosGetPublicKey.create = function create(properties) {
        return new TezosGetPublicKey(properties);
    };

    TezosGetPublicKey.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.show_display != null && Object.hasOwnProperty.call(message, "show_display")) {
            writer.uint32(16).bool(message.show_display);
        }
        if (message.chunkify != null && Object.hasOwnProperty.call(message, "chunkify")) {
            writer.uint32(24).bool(message.chunkify);
        }
        return writer;
    };

    TezosGetPublicKey.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.TezosGetPublicKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.show_display = reader.bool();
                break;
            case 3:
                message.chunkify = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    TezosGetPublicKey.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.show_display != null && message.hasOwnProperty("show_display")) {
            object.show_display = message.show_display;
        }
        if (message.chunkify != null && message.hasOwnProperty("chunkify")) {
            object.chunkify = message.chunkify;
        }
        return object;
    };

    return TezosGetPublicKey;
})();

// TezosPublicKey message
$root.TezosPublicKey = (function() {
    function TezosPublicKey(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    TezosPublicKey.create = function create(properties) {
        return new TezosPublicKey(properties);
    };

    TezosPublicKey.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.public_key != null && Object.hasOwnProperty.call(message, "public_key")) {
            writer.uint32(10).string(message.public_key);
        }
        return writer;
    };

    TezosPublicKey.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.TezosPublicKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.public_key = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    TezosPublicKey.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.public_key != null && message.hasOwnProperty("public_key")) {
            object.public_key = message.public_key;
        }
        return object;
    };

    return TezosPublicKey;
})();

// TezosSignTx message
$root.TezosSignTx = (function() {
    function TezosSignTx(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    TezosSignTx.create = function create(properties) {
        return new TezosSignTx(properties);
    };

    TezosSignTx.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.address_n != null && message.address_n.length) {
            for (var i = 0; i < message.address_n.length; ++i) {
                writer.uint32(8).uint32(message.address_n[i]);
            }
        }
        if (message.branch != null && Object.hasOwnProperty.call(message, "branch")) {
            writer.uint32(18).bytes(message.branch);
        }
        if (message.reveal != null && Object.hasOwnProperty.call(message, "reveal")) {
            writer.uint32(26).string(message.reveal);
        }
        if (message.transaction != null && Object.hasOwnProperty.call(message, "transaction")) {
            writer.uint32(34).string(message.transaction);
        }
        if (message.origination != null && Object.hasOwnProperty.call(message, "origination")) {
            writer.uint32(42).string(message.origination);
        }
        if (message.delegation != null && Object.hasOwnProperty.call(message, "delegation")) {
            writer.uint32(50).string(message.delegation);
        }
        if (message.proposal != null && Object.hasOwnProperty.call(message, "proposal")) {
            writer.uint32(58).string(message.proposal);
        }
        if (message.ballot != null && Object.hasOwnProperty.call(message, "ballot")) {
            writer.uint32(66).string(message.ballot);
        }
        if (message.chunkify != null && Object.hasOwnProperty.call(message, "chunkify")) {
            writer.uint32(72).bool(message.chunkify);
        }
        return writer;
    };

    TezosSignTx.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.TezosSignTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.address_n && message.address_n.length)) message.address_n = [];
                message.address_n.push(reader.uint32());
                break;
            case 2:
                message.branch = reader.bytes();
                break;
            case 3:
                message.reveal = reader.string();
                break;
            case 4:
                message.transaction = reader.string();
                break;
            case 5:
                message.origination = reader.string();
                break;
            case 6:
                message.delegation = reader.string();
                break;
            case 7:
                message.proposal = reader.string();
                break;
            case 8:
                message.ballot = reader.string();
                break;
            case 9:
                message.chunkify = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    TezosSignTx.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.address_n && message.address_n.length) {
            object.address_n = [];
            for (var j = 0; j < message.address_n.length; ++j) {
                object.address_n[j] = message.address_n[j];
            }
        }
        if (message.branch != null && message.hasOwnProperty("branch")) {
            object.branch = $util.base64.encode(message.branch, 0, message.branch.length);
        }
        if (message.reveal != null && message.hasOwnProperty("reveal")) {
            object.reveal = message.reveal;
        }
        if (message.transaction != null && message.hasOwnProperty("transaction")) {
            object.transaction = message.transaction;
        }
        if (message.origination != null && message.hasOwnProperty("origination")) {
            object.origination = message.origination;
        }
        if (message.delegation != null && message.hasOwnProperty("delegation")) {
            object.delegation = message.delegation;
        }
        if (message.proposal != null && message.hasOwnProperty("proposal")) {
            object.proposal = message.proposal;
        }
        if (message.ballot != null && message.hasOwnProperty("ballot")) {
            object.ballot = message.ballot;
        }
        if (message.chunkify != null && message.hasOwnProperty("chunkify")) {
            object.chunkify = message.chunkify;
        }
        return object;
    };

    return TezosSignTx;
})();

// TezosSignedTx message
$root.TezosSignedTx = (function() {
    function TezosSignedTx(properties) {
        if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) {
                    this[keys[i]] = properties[keys[i]];
                }
            }
        }
    }

    TezosSignedTx.create = function create(properties) {
        return new TezosSignedTx(properties);
    };

    TezosSignedTx.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.signature != null && Object.hasOwnProperty.call(message, "signature")) {
            writer.uint32(10).string(message.signature);
        }
        if (message.sig_op_contents != null && Object.hasOwnProperty.call(message, "sig_op_contents")) {
            writer.uint32(18).bytes(message.sig_op_contents);
        }
        if (message.operation_hash != null && Object.hasOwnProperty.call(message, "operation_hash")) {
            writer.uint32(26).string(message.operation_hash);
        }
        return writer;
    };

    TezosSignedTx.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = new $root.TezosSignedTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.signature = reader.string();
                break;
            case 2:
                message.sig_op_contents = reader.bytes();
                break;
            case 3:
                message.operation_hash = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    TezosSignedTx.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.signature != null && message.hasOwnProperty("signature")) {
            object.signature = message.signature;
        }
        if (message.sig_op_contents != null && message.hasOwnProperty("sig_op_contents")) {
            object.sig_op_contents = $util.base64.encode(message.sig_op_contents, 0, message.sig_op_contents.length);
        }
        if (message.operation_hash != null && message.hasOwnProperty("operation_hash")) {
            object.operation_hash = message.operation_hash;
        }
        return object;
    };

    return TezosSignedTx;
})();

module.exports = $root;