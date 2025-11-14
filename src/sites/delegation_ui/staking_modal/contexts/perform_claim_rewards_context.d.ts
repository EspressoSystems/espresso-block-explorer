import { AsyncSnapshot } from '../../../../../../../../../../../../src/components/data/async_data/AsyncSnapshot';
import { L1Methods } from '../../../../contracts/l1/l1_interface';
import { RewardClaimContract } from '../../../../contracts/reward_claim/reward_claim_interface';
import { RewardClaimInput } from '../../../../../../../../../../../../src/service/hotshot_query_service/cappuccino/reward_state/reward_claim_input';
import { default as React } from 'react';
import { Config } from 'wagmi';
import { GetTransactionReceiptReturnType } from 'wagmi/actions';
export declare const PerformClaimRewardsAsyncIterableContext: React.Context<AsyncIterable<PerformClaimRewardsState> | null>;
export declare const SetClaimRewardsAsyncIterableContext: React.Context<React.Dispatch<React.SetStateAction<AsyncIterable<PerformClaimRewardsState> | null>>>;
export declare const ClaimRewardsAsyncSnapshotContext: React.Context<AsyncSnapshot<PerformClaimRewardsState>>;
export declare const ProvideClaimRewardsPromiseContext: React.FC<React.PropsWithChildren>;
export declare abstract class PerformClaimRewardsState {
}
export declare class PerformClaimRewardsWaiting extends PerformClaimRewardsState {
    constructor();
}
export declare class PerformClaimRewardsSucceeded extends PerformClaimRewardsState {
    readonly transactionHash: `0x${string}`;
    constructor(transactionHash: `0x${string}`);
}
export declare class PerformClaimRewardsReceiptWaiting extends PerformClaimRewardsState {
    readonly transactionHash: `0x${string}`;
    constructor(transactionHash: `0x${string}`);
}
export declare class PerformClaimRewardsReceiptRetrieved extends PerformClaimRewardsState {
    readonly transactionHash: `0x${string}`;
    readonly receipt: GetTransactionReceiptReturnType<Config>;
    constructor(transactionHash: `0x${string}`, receipt: GetTransactionReceiptReturnType<Config>);
}
export declare function performClaimRewards(l1Methods: L1Methods<Config, number>, rewardClaimContract: RewardClaimContract, rewardClaimInput: RewardClaimInput, setL1Timestamp: React.Dispatch<React.SetStateAction<Date>>): AsyncGenerator<PerformClaimRewardsWaiting | PerformClaimRewardsSucceeded | PerformClaimRewardsReceiptWaiting | PerformClaimRewardsReceiptRetrieved, void, unknown>;
