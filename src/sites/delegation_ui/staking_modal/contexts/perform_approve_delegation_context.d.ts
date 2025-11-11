import { AsyncSnapshot } from '../../../../../../../../../../../../src/components/data/async_data/AsyncSnapshot';
import { ESPTokenContract } from '../../../../contracts/esp_token/esp_token_interface';
import { L1Methods } from '../../../../contracts/l1/l1_interface';
import { StakeTableContract } from '../../../../contracts/stake_table/stake_table_interface';
import { default as React } from 'react';
import { Config } from 'wagmi';
import { GetTransactionReceiptReturnType } from 'wagmi/actions';
export declare const ApproveAsyncIterableContext: React.Context<AsyncIterable<PerformApproveState> | null>;
export declare const SetApproveAsyncIterableContext: React.Context<React.Dispatch<React.SetStateAction<AsyncIterable<PerformApproveState> | null>>>;
export declare const ApproveAsyncSnapshotContext: React.Context<AsyncSnapshot<PerformApproveState>>;
export declare const ProvideApprovePromiseContext: React.FC<React.PropsWithChildren>;
export declare abstract class PerformApproveState {
}
export declare class PerformApproveWaiting extends PerformApproveState {
    constructor();
}
export declare class PerformApproveDone extends PerformApproveState {
    readonly transactionHash: `0x${string}`;
    constructor(transactionHash: `0x${string}`);
}
export declare class PerformApproveReceiptWaiting extends PerformApproveState {
    readonly transactionHash: `0x${string}`;
    constructor(transactionHash: `0x${string}`);
}
export declare class PerformApproveReceiptReceived extends PerformApproveState {
    readonly transactionHash: `0x${string}`;
    readonly receipt: GetTransactionReceiptReturnType<Config>;
    constructor(transactionHash: `0x${string}`, receipt: GetTransactionReceiptReturnType<Config>);
}
export declare function performApprove(l1Methods: L1Methods<Config, number>, espContract: ESPTokenContract, stakeTableContract: StakeTableContract, setL1Timestamp: React.Dispatch<React.SetStateAction<Date>>): AsyncGenerator<PerformApproveWaiting | PerformApproveDone | PerformApproveReceiptWaiting | PerformApproveReceiptReceived, void, unknown>;
