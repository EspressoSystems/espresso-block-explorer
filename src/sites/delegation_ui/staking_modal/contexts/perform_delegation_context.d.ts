import { AsyncSnapshot } from '../../../../../../../../../../../../src/components/data/async_data/AsyncSnapshot';
import { L1Methods } from '../../../../contracts/l1/l1_interface';
import { StakeTableContract } from '../../../../contracts/stake_table/stake_table_interface';
import { default as React } from 'react';
import { Config } from 'wagmi';
import { GetTransactionReceiptReturnType } from 'wagmi/actions';
export declare const DelegateAsyncIterableContext: React.Context<AsyncIterable<PerformDelegateState> | null>;
export declare const SetDelegationAsyncIterableContext: React.Context<React.Dispatch<React.SetStateAction<AsyncIterable<PerformDelegateState> | null>>>;
export declare const DelegateAsyncSnapshotContext: React.Context<AsyncSnapshot<PerformDelegateState>>;
export declare const ProvideDelegatePromiseContext: React.FC<React.PropsWithChildren>;
export declare abstract class PerformDelegateState {
}
export declare class PerformDelegationWaiting extends PerformDelegateState {
    constructor();
}
export declare class PerformDelegationSucceeded extends PerformDelegateState {
    readonly transactionHash: `0x${string}`;
    constructor(transactionHash: `0x${string}`);
}
export declare class PerformDelegationReceiptWaiting extends PerformDelegateState {
    readonly transactionHash: `0x${string}`;
    constructor(transactionHash: `0x${string}`);
}
export declare class PerformDelegationReceiptRetrieved extends PerformDelegateState {
    readonly transactionHash: `0x${string}`;
    readonly receipt: GetTransactionReceiptReturnType<Config>;
    constructor(transactionHash: `0x${string}`, receipt: GetTransactionReceiptReturnType<Config>);
}
export declare function performDelegation(l1Methods: L1Methods<Config, number>, stakeTableContract: StakeTableContract, validatorAddress: `0x${string}`, stakingAmount: bigint, setL1Timestamp: React.Dispatch<React.SetStateAction<Date>>): AsyncGenerator<PerformDelegationWaiting | PerformDelegationSucceeded | PerformDelegationReceiptWaiting | PerformDelegationReceiptRetrieved, void, unknown>;
