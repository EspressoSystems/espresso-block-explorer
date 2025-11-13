import { PendingWithdrawal } from '../../../../../../../../../../../src/service/espresso_l1_validator_service/common/pending_withdrawal';
import { default as React } from 'react';
/**
 * PendingUndelegationsContext provides a React Context
 * for the current map of validators with whom we have undelegated already.
 */
export declare const PendingUndelegationsContext: React.Context<Map<`0x${string}`, PendingWithdrawal>>;
/**
 * DerivePendingUndelegations is a React Component that
 * derives the current mapping of all of the pending undelegations for the
 * current wallet.
 */
export declare const DerivePendingUndelegations: React.FC<React.PropsWithChildren>;
