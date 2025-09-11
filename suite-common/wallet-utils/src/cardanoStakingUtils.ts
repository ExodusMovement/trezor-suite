import { isArrayMember } from '@exodus/trezor-utils';

import { NetworkSymbol } from '@suite-common/wallet-config';
import {
    SupportedCardanoNetworkSymbols,
    supportedCardanoNetworkSymbols,
} from '@suite-common/wallet-types';

export function isSupportedCardanoStakingNetworkSymbol(
    symbol: NetworkSymbol,
): symbol is SupportedCardanoNetworkSymbols {
    return isArrayMember(symbol, supportedCardanoNetworkSymbols);
}
