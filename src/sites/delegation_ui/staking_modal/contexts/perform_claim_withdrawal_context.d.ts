import { AsyncSnapshot } from '../../../../../../../../../../../../src/components/data/async_data/AsyncSnapshot';
import { L1Methods } from '../../../../contracts/l1/l1_interface';
import { StakeTableContract } from '../../../../contracts/stake_table/stake_table_interface';
import { default as React } from 'react';
import { Config } from 'wagmi';
import { GetTransactionReceiptReturnType } from 'wagmi/actions';
export declare const ClaimWithdrawalAsyncIterableContext: React.Context<AsyncIterable<PerformClaimWithdrawalState> | null>;
export declare const SetClaimWithdrawalAsyncIterableContext: React.Context<React.Dispatch<React.SetStateAction<AsyncIterable<PerformClaimWithdrawalState> | null>>>;
export declare const ClaimWithdrawalAsyncSnapshotContext: React.Context<AsyncSnapshot<PerformClaimWithdrawalState>>;
export declare const ProvideClaimWithdrawalPromiseContext: React.FC<React.PropsWithChildren>;
export declare abstract class PerformClaimWithdrawalState {
}
export declare class PerformClaimWithdrawalWaiting extends PerformClaimWithdrawalState {
    constructor();
}
export declare class PerformClaimWithdrawalSucceeded extends PerformClaimWithdrawalState {
    readonly transactionHash: `0x${string}`;
    constructor(transactionHash: `0x${string}`);
}
export declare class PerformClaimWithdrawalReceiptWaiting extends PerformClaimWithdrawalState {
    readonly transactionHash: `0x${string}`;
    constructor(transactionHash: `0x${string}`);
}
export declare class PerformClaimWithdrawalReceiptRetrieved extends PerformClaimWithdrawalState {
    readonly transactionHash: `0x${string}`;
    readonly receipt: GetTransactionReceiptReturnType<Config>;
    constructor(transactionHash: `0x${string}`, receipt: GetTransactionReceiptReturnType<Config>);
}
export declare function performClaimWithdrawal(l1Methods: L1Methods<Config, number>, stakeTableContract: StakeTableContract, validatorAddress: `0x${string}`, setL1Timestamp: React.Dispatch<React.SetStateAction<Date>>): AsyncGenerator<PerformClaimWithdrawalWaiting | PerformClaimWithdrawalSucceeded | PerformClaimWithdrawalReceiptWaiting | PerformClaimWithdrawalReceiptRetrieved, void, unknown>;
