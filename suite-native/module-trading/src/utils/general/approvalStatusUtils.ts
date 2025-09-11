import { BigNumber } from '@exodus/trezor-utils';
import type { ExchangeTrade } from 'invity-api';


export type ApprovalStatus = 'approved' | 'needs_approval' | 'not_needed' | null;

export const getApprovalStatus = (candidateQuote?: ExchangeTrade): ApprovalStatus => {
    if (!candidateQuote) {
        return null;
    }

    const preapproved = new BigNumber(candidateQuote.preapprovedStringAmount ?? '0');
    if (preapproved.gt(0)) {
        return 'approved';
    }

    if (candidateQuote.isDex) {
        return 'needs_approval';
    }

    return 'not_needed';
};
