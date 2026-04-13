import { StakeTableEntry } from '../../../../../../../../../../../../../src/service/hotshot_query_service/node/stake_table_entry';
export interface RandomizedCommittee {
    selectLeaderForView(view: bigint): Promise<StakeTableEntry>;
}
/**
 * generateStakeBasedCDF is a function that generates a result that can
 * be utilized to determine a random ordering for a given view number.
 *
 * CDF means Cumulative Distribution Function, and in this context it refers
 * the the Cumulative Stake for all of the entries within the given
 * StakeTableEntry list.
 */
export declare function generateStakeBasedCDF(stakeTable: StakeTableEntry[], drbResult: Uint8Array): Promise<RandomizedCommittee>;
