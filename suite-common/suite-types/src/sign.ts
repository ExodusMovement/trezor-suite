import { BigNumber } from '@exodus/trezor-utils/src/bigNumber';

export type SignOperator = 'positive' | 'negative';

export type SignValue = SignOperator | BigNumber | number | null;
