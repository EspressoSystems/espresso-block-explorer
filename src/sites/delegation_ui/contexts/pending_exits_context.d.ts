import { PendingWithdrawal } from '../../../../../../../../../../../src/service/espresso_l1_validator_service/common/pending_withdrawal';
import { default as React } from 'react';
/**
 * PendingExitsContext provides a React Context
 * for the current map of validators who have exited, and your pending amount
 */
export declare const PendingExitsContext: React.Context<Map<`0x${string}`, PendingWithdrawal>>;
/**
 * DerivePendingExits is a React Component that
 * derives the current mapping of all of the pending exits for the
 * current wallet.
 */
export declare const DerivePendingExits: React.FC<React.PropsWithChildren>;
