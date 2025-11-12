import { AsyncSnapshot } from '../../../../../../../../../../../../src/components/data/async_data/AsyncSnapshot';
import { L1Methods } from '../../../../contracts/l1/l1_interface';
import { StakeTableContract } from '../../../../contracts/stake_table/stake_table_interface';
import { default as React } from 'react';
import { Config } from 'wagmi';
import { GetTransactionReceiptReturnType } from 'wagmi/actions';
export declare const UndelegateAsyncIterableContext: React.Context<AsyncIterable<PerformUndelegateState> | null>;
export declare const SetUndelegationAsyncIterableContext: React.Context<React.Dispatch<React.SetStateAction<AsyncIterable<PerformUndelegateState> | null>>>;
export declare const UndelegateAsyncSnapshotContext: React.Context<AsyncSnapshot<PerformUndelegateState>>;
export declare const ProvideUndelegateAsyncIterableContext: React.FC<React.PropsWithChildren>;
export declare abstract class PerformUndelegateState {
}
export declare class PerformUndelegationWaiting extends PerformUndelegateState {
    constructor();
}
export declare class PerformUndelegationSucceeded extends PerformUndelegateState {
    readonly transactionHash: `0x${string}`;
    constructor(transactionHash: `0x${string}`);
}
export declare class PerformUndelegationReceiptWaiting extends PerformUndelegateState {
    readonly transactionHash: `0x${string}`;
    constructor(transactionHash: `0x${string}`);
}
export declare class PerformUndelegationReceiptRetrieved extends PerformUndelegateState {
    readonly transactionHash: `0x${string}`;
    readonly receipt: GetTransactionReceiptReturnType<Config>;
    constructor(transactionHash: `0x${string}`, receipt: GetTransactionReceiptReturnType<Config>);
}
export declare function performUndelegation(l1Methods: L1Methods<Config, number>, stakeTableContract: StakeTableContract, validatorAddress: `0x${string}`, stakingAmount: bigint, setL1Timestamp: React.Dispatch<React.SetStateAction<Date>>): AsyncGenerator<PerformUndelegationWaiting | PerformUndelegationSucceeded | PerformUndelegationReceiptWaiting | PerformUndelegationReceiptRetrieved, void, unknown>;
