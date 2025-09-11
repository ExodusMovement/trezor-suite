import { ThpCredentials } from '@exodus/trezor-protocol';

export type ThpSuiteCredentials = ThpCredentials & {
    connectionCounter: number;
};
