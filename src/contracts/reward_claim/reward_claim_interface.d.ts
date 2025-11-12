/**
 * RewardClaimContractReadOnly defines the read-only interface for the
 * Reward Claim Contract.
 */
export interface RewardClaimContractReadOnly {
    readonly address: `0x${string}`;
    claimedRewards(address: `0x${string}`): Promise<bigint>;
    getVersion(): Promise<readonly [number, number, number]>;
}
/**
 * RewardClaimContractWriteable defines the methods that modify the contracts
 * state.
 */
export interface RewardClaimContractWriteable {
    claimRewards(lifetimeRewards: bigint, authData: `0x${string}`): Promise<`0x${string}`>;
}
/**
 * RewardClaimContract represents the entire Reward Claim Contract interface.
 */
export interface RewardClaimContract extends RewardClaimContractReadOnly, RewardClaimContractWriteable {
}
