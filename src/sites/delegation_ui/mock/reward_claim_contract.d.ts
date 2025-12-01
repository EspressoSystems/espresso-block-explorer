import { RewardClaimContract } from '../../../contracts/reward_claim/reward_claim_interface';
import { default as React } from 'react';
import { MockESPTokenContractImpl } from './esp_token_contract';
import { MockContractStorage, MockL1MethodsImpl, UnderlyingTransaction } from './l1_methods';
/**
 * RewardClaimState defines the structure of the mock
 * RewardClaimContract state.
 */
export declare class MockRewardClaimState implements MockContractStorage {
    readonly contractAddress: `0x${string}`;
    readonly claimedRewards: Map<`0x${string}`, bigint>;
    readonly lastUpdate: Date;
    constructor(contractAddress: `0x${string}`, claimedRewards: Map<`0x${string}`, bigint>, lastUpdate: Date);
    applyTransaction(tx: UnderlyingTransaction): MockContractStorage;
}
export declare abstract class RewardClaimStateAction implements UnderlyingTransaction {
    readonly contractAddress: undefined | `0x${string}`;
    abstract readonly from: `0x${string}`;
    abstract readonly to: `0x${string}`;
    abstract readonly value: bigint;
    abstract readonly gas: bigint;
    readonly ts: Date;
    /**
     * hash computes a unique hash for the action instance.
     */
    abstract hash(): `0x${string}`;
    /**
     * applyToState applies the action to the given contract state
     * and returns the new state.
     */
    abstract applyToState(state: MockRewardClaimState): MockRewardClaimState;
}
export declare class ClaimRewardAction extends RewardClaimStateAction {
    readonly contractAddress: `0x${string}`;
    readonly delegator: `0x${string}`;
    readonly lifetimeRewards: bigint;
    readonly authData: `0x${string}`;
    readonly gas: bigint;
    get from(): `0x${string}`;
    get to(): `0x${string}`;
    get value(): bigint;
    constructor(contractAddress: `0x${string}`, delegator: `0x${string}`, lifetimeRewards: bigint, authData: `0x${string}`);
    hash(): `0x${string}`;
    applyToState(state: MockRewardClaimState): MockRewardClaimState;
}
export declare class MockRewardClaimContractImpl implements RewardClaimContract {
    private readonly l1Methods;
    private readonly espToken;
    accountAddress: `0x${string}` | null;
    constructor(l1Methods: MockL1MethodsImpl, espToken: MockESPTokenContractImpl, state: MockRewardClaimState, accountAddress?: `0x${string}` | null);
    get state(): MockRewardClaimState;
    replaceAccountAddress(accountAddress: `0x${string}` | null): MockRewardClaimContractImpl;
    setAccountAddress(accountAddress: `0x${string}` | null): void;
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
