import { L1Methods } from '../../../../contracts/l1/l1_interface';
import { Config } from 'wagmi';
import { GetTransactionReceiptReturnType } from 'wagmi/actions';
/**
 * PerformWriteTransactionStatus is an enum that represents the various states
 * of writing a transaction to the blockchain.
 */
export declare enum PerformWriteTransactionStatus {
    waitingForWrite = 0,
    writeSucceeded = 1,
    waitingForReceipt = 2,
    receiptRetrieved = 3
}
/**
 * PerformWriteTransactionState is an enum that represents the various states
 * of writing a transaction to the blockchain.
 */
export declare abstract class PerformWriteTransactionState {
    abstract readonly status: PerformWriteTransactionStatus;
}
/**
 * PerformWriteTransactionWaiting represents the state where a transaction
 * write has been submitted, and is in progress, but it hasn't completed yet.
 */
export declare class PerformWriteTransactionWaiting extends PerformWriteTransactionState {
    readonly status = PerformWriteTransactionStatus.waitingForWrite;
}
/**
 * PerformWriteTransactionSucceeded represents the state where a transaction
 * write has been successfully completed.
 */
export declare class PerformWriteTransactionSucceeded extends PerformWriteTransactionState {
    readonly transactionHash: `0x${string}`;
    constructor(transactionHash: `0x${string}`);
    readonly status = PerformWriteTransactionStatus.writeSucceeded;
}
/**
 * PerformWriteTransactionReceiptWaiting represents the state where a
 * transaction has been submitted successfully, and we've submitted a request
 * to retrieve the receipt for the transaction, but the receipt has not yet
 * been retrieved.
 */
export declare class PerformWriteTransactionReceiptWaiting extends PerformWriteTransactionState {
    readonly transactionHash: `0x${string}`;
    constructor(transactionHash: `0x${string}`);
    readonly status = PerformWriteTransactionStatus.waitingForReceipt;
}
/**
 * PerformWriteTransactionReceiptRetrieved represents the state where a
 * transaction receipt has been successfully retrieved.
 */
export declare class PerformWriteTransactionReceiptRetrieved extends PerformWriteTransactionState {
    readonly transactionHash: `0x${string}`;
    readonly receipt: GetTransactionReceiptReturnType<Config>;
    constructor(transactionHash: `0x${string}`, receipt: GetTransactionReceiptReturnType<Config>);
    readonly status = PerformWriteTransactionStatus.receiptRetrieved;
}
export declare function performWriteTransaction(l1Methods: L1Methods<Config, number>, writeToContract: () => Promise<`0x${string}`>, setL1Timestamp: React.Dispatch<React.SetStateAction<Date>>): AsyncGenerator<PerformWriteTransactionWaiting | PerformWriteTransactionSucceeded | PerformWriteTransactionReceiptWaiting | PerformWriteTransactionReceiptRetrieved, void, unknown>;
