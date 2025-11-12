import { RewardClaimContract } from '../../../contracts/reward_claim/reward_claim_interface';
import { default as React } from 'react';
import { MockL1MethodsImpl } from './l1_methods';
/**
 * RewardClaimState defines the structure of the mock
 * RewardClaimContract state.
 */
export interface MockRewardClaimState {
    contractAddress: `0x${string}`;
    claimedRewards: Map<`0x${string}`, bigint>;
    lastUpdate: Date;
}
export declare class MockRewardClaimContractImpl implements RewardClaimContract {
    private readonly l1Methods;
    readonly accountAddress: `0x${string}` | null;
    constructor(l1Methods: MockL1MethodsImpl, state: MockRewardClaimState, accountAddress?: `0x${string}` | null);
    get state(): MockRewardClaimState;
    replaceAccountAddress(accountAddress: `0x${string}` | null): MockRewardClaimContractImpl;
    get lastUpdate(): Date;
    get address(): `0x${string}`;
    claimedRewards(address: `0x${string}`): Promise<bigint>;
    getVersion(): Promise<readonly [number, number, number]>;
    claimRewards(lifetimeRewards: bigint, authData: `0x${string}`): Promise<`0x${string}`>;
}
/**
 * MockRewardClaimContract is a React component that provides
 * a mock RewardClaimContract implementation via context for
 * testing and development purposes.
 *
 * It will overwrite the RewardClaimContractContext with a mock
 * implementation that simulates the behavior of an actual
 * RewardClaimContract.
 */
export declare const MockRewardClaimContract: React.FC<React.PropsWithChildren>;
