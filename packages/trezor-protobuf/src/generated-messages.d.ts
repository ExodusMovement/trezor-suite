// Generated TypeScript definitions for Trezor messages
// This provides type safety for the static protobuf code

export interface Writer {
    uint32(value: number): Writer;
    int32(value: number): Writer;
    int64(value: number | string): Writer;
    uint64(value: number | string): Writer;
    sint32(value: number): Writer;
    sint64(value: number | string): Writer;
    bool(value: boolean): Writer;
    fixed32(value: number): Writer;
    fixed64(value: number | string): Writer;
    sfixed32(value: number): Writer;
    sfixed64(value: number | string): Writer;
    float(value: number): Writer;
    double(value: number): Writer;
    string(value: string): Writer;
    bytes(value: Uint8Array | string): Writer;
    finish(): Uint8Array;
}

export interface Reader {
    pos: number;
    len: number;
    uint32(): number;
    int32(): number;
    int64(): number | string;
    uint64(): number | string;
    sint32(): number;
    sint64(): number | string;
    bool(): boolean;
    fixed32(): number;
    fixed64(): number | string;
    sfixed32(): number;
    sfixed64(): number | string;
    float(): number;
    double(): number;
    string(): string;
    bytes(): Uint8Array;
    skipType(wireType: number): void;
}

export interface MessageConstructor<T = any> {
    new (properties?: Partial<T>): T;
    create(properties?: Partial<T>): T;
    encode(message: T, writer?: Writer): Writer;
    decode(reader: Reader | Uint8Array, length?: number): T;
    toObject(message: T, options?: any): any;
}

// MessageType enum
export const MessageType: {
    Initialize: 0;
    Ping: 1;
    Success: 2;
    Failure: 3;
    ChangePin: 4;
    WipeDevice: 5;
    GetEntropy: 9;
    Entropy: 10;
    LoadDevice: 13;
    ResetDevice: 14;
    SetBusy: 16;
    Features: 17;
    PinMatrixRequest: 18;
    PinMatrixAck: 19;
    Cancel: 20;
    LockDevice: 24;
    ApplySettings: 25;
    ButtonRequest: 26;
    ButtonAck: 27;
    ApplyFlags: 28;
    GetNonce: 31;
    Nonce: 33;
    BackupDevice: 34;
    EntropyRequest: 35;
    EntropyAck: 36;
    PaymentRequest: 37;
    EntropyCheckReady: 994;
    EntropyCheckContinue: 995;
    PassphraseRequest: 41;
    PassphraseAck: 42;
    RecoveryDevice: 45;
    WordRequest: 46;
    WordAck: 47;
    GetFeatures: 55;
    SdProtect: 79;
    ChangeWipeCode: 82;
    EndSession: 83;
    DoPreauthorized: 84;
    PreauthorizedRequest: 85;
    CancelAuthorization: 86;
    RebootToBootloader: 87;
    GetFirmwareHash: 88;
    FirmwareHash: 89;
    UnlockPath: 93;
    UnlockedPathRequest: 94;
    ShowDeviceTutorial: 95;
    UnlockBootloader: 96;
    AuthenticateDevice: 97;
    AuthenticityProof: 98;
    ChangeLanguage: 990;
    DataChunkRequest: 991;
    DataChunkAck: 992;
    SetBrightness: 993;
    SetU2FCounter: 63;
    GetNextU2FCounter: 80;
    NextU2FCounter: 81;
    Deprecated_PassphraseStateRequest: 77;
    Deprecated_PassphraseStateAck: 78;
    FirmwareErase: 6;
    FirmwareUpload: 7;
    FirmwareRequest: 8;
    ProdTestT1: 32;
    BleUnpair: 8001;
    GetPublicKey: 11;
    PublicKey: 12;
    SignTx: 15;
    TxRequest: 21;
    TxAck: 22;
    GetAddress: 29;
    Address: 30;
    SignMessage: 38;
    VerifyMessage: 39;
    MessageSignature: 40;
    GetOwnershipId: 43;
    OwnershipId: 44;
    GetOwnershipProof: 49;
    OwnershipProof: 50;
    AuthorizeCoinJoin: 51;
    CipherKeyValue: 23;
    CipheredKeyValue: 48;
    SignIdentity: 53;
    SignedIdentity: 54;
    GetECDHSessionKey: 61;
    ECDHSessionKey: 62;
    PaymentNotification: 52;
    valuesById: { [key: number]: string };
};

// Message interfaces - these would be generated from the actual message definitions
// For now, providing basic structure
export interface Initialize {
    session_id?: Uint8Array;
}

export interface Ping {
    message?: string;
    button_protection?: boolean;
}

export interface Success {
    message?: string;
}

export interface Failure {
    code?: number;
    message?: string;
}

export interface GetPublicKey {
    address_n?: number[];
    ecdsa_curve_name?: string;
    show_display?: boolean;
    coin_name?: string;
    script_type?: number;
    ignore_xpub_magic?: boolean;
}

export interface PublicKey {
    node?: HDNodeType;
    xpub?: string;
    root_fingerprint?: number;
    descriptor?: string;
}

export interface HDNodeType {
    depth?: number;
    fingerprint?: number;
    child_num?: number;
    chain_code?: Uint8Array;
    private_key?: Uint8Array;
    public_key?: Uint8Array;
}

// Message constructors
export const Initialize: MessageConstructor<Initialize>;
export const Ping: MessageConstructor<Ping>;
export const Success: MessageConstructor<Success>;
export const Failure: MessageConstructor<Failure>;
export const GetPublicKey: MessageConstructor<GetPublicKey>;
export const PublicKey: MessageConstructor<PublicKey>;
export const HDNodeType: MessageConstructor<HDNodeType>;

// Add more message types as needed...
// This would typically be generated automatically from the protobuf definitions

export type MessageName = keyof typeof MessageType;
export type MessageId = (typeof MessageType)[MessageName];

export interface MessageResponse<T = any> {
    type: string;
    message: T;
}

export interface EncodeResult {
    messageType: number;
    message: Buffer;
}
