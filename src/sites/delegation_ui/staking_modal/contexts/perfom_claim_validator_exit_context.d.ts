import { AsyncSnapshot } from '../../../../../../../../../../../../src/components/data/async_data/AsyncSnapshot';
import { L1Methods } from '../../../../contracts/l1/l1_interface';
import { StakeTableContract } from '../../../../contracts/stake_table/stake_table_interface';
import { default as React } from 'react';
import { Config } from 'wagmi';
import { GetTransactionReceiptReturnType } from 'wagmi/actions';
export declare const ClaimValidatorExitAsyncIterableContext: React.Context<AsyncIterable<PerformClaimValidatorExitState> | null>;
export declare const SetClaimValidatorExitAsyncIterableContext: React.Context<React.Dispatch<React.SetStateAction<AsyncIterable<PerformClaimValidatorExitState> | null>>>;
export declare const ClaimValidatorExitAsyncSnapshotContext: React.Context<AsyncSnapshot<PerformClaimValidatorExitState>>;
export declare const ProvideClaimValidatorExitPromiseContext: React.FC<React.PropsWithChildren>;
export declare abstract class PerformClaimValidatorExitState {
}
export declare class PerformClaimValidatorExitWaiting extends PerformClaimValidatorExitState {
    constructor();
}
export declare class PerformClaimValidatorExitSucceeded extends PerformClaimValidatorExitState {
    readonly transactionHash: `0x${string}`;
    constructor(transactionHash: `0x${string}`);
}
export declare class PerformClaimValidatorExitReceiptWaiting extends PerformClaimValidatorExitState {
    readonly transactionHash: `0x${string}`;
    constructor(transactionHash: `0x${string}`);
}
export declare class PerformClaimValidatorExitReceiptRetrieved extends PerformClaimValidatorExitState {
    readonly transactionHash: `0x${string}`;
    readonly receipt: GetTransactionReceiptReturnType<Config>;
    constructor(transactionHash: `0x${string}`, receipt: GetTransactionReceiptReturnType<Config>);
}
export declare function performClaimValidatorExit(l1Methods: L1Methods<Config, number>, stakeTableContract: StakeTableContract, validatorAddress: `0x${string}`, setL1Timestamp: React.Dispatch<React.SetStateAction<Date>>): AsyncGenerator<PerformClaimValidatorExitWaiting | PerformClaimValidatorExitSucceeded | PerformClaimValidatorExitReceiptWaiting | PerformClaimValidatorExitReceiptRetrieved, void, unknown>;
