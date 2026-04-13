import { L1Methods } from '../../../../contracts/l1/l1_interface';
import { BaseError } from '../../../../../../../../../../../../src/errors/base_error';
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
/**
 * FailedToperformWriteToContract represents the state where a write
 * transaction was attempted, but failed for some underlying reason.
 */
export declare class FailedToPerformWriteToContract extends BaseError {
    readonly cause: unknown;
    constructor(cause: unknown, message?: string);
}
/**
 * FailedtoReceiveReceipt represents the state where we attempted to retrieve
 * a receipt for a given transaction hash that has failed.
 */
export declare class FailedToReceiveReceipt extends BaseError {
    readonly cause: unknown;
    constructor(cause: unknown, message?: string);
}
/**
 * TransctionReverted represents the state where a transaction was
 * successfully submitted, but the transaction execution itself failed due to
 * some underlying reason =encountered during execution.
 */
export declare class TransactionReverted extends BaseError {
    readonly receipt: GetTransactionReceiptReturnType<Config>;
    constructor(receipt: GetTransactionReceiptReturnType<Config>, message?: string);
}
/**
 * Walks the cause chain of a FailedToPerformWriteToContract error to find
 * a viem ContractFunctionRevertedError and extract its errorName.
 * Returns null if no contract error name can be found.
 */
export declare function extractContractErrorName(error: unknown): string | null;
export declare function performWriteTransaction(l1Methods: L1Methods<Config, number>, writeToContract: () => Promise<`0x${string}`>, resultCallback: (err: unknown, result: null | GetTransactionReceiptReturnType<Config>) => void): AsyncGenerator<PerformWriteTransactionWaiting | PerformWriteTransactionSucceeded | PerformWriteTransactionReceiptWaiting | PerformWriteTransactionReceiptRetrieved, void, unknown>;
