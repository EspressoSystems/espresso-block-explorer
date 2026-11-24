import { ActivityEntry, CommissionChange, DelegationBaseline } from './sample_history';
export interface CommissionIncrease {
    /** from is the commission when the wallet last delegated. */
    from: number;
    /** to is the commission now. */
    to: number;
    /** changedAt is when the commission reached its current rate. */
    changedAt: Date;
    /** delegatedAt is when the wallet last delegated to the validator. */
    delegatedAt: Date;
}
/**
 * commissionIncreaseSinceDelegation says whether a validator raised its
 * commission after the wallet last delegated to it, so the wallet earns
 * less than it signed up for. Delegating again after an increase accepts
 * the new rate, so only increases since the latest delegation count, and
 * only while the commission is still above the rate at that time.
 */
export declare function commissionIncreaseSinceDelegation(activity: ActivityEntry[], changes: CommissionChange[], wallet: `0x${string}`, currentCommission: number, baselines?: ReadonlyMap<string, DelegationBaseline>): null | CommissionIncrease;
