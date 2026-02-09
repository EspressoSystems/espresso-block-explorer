import { sleep } from '@/async/sleep';
import { L1Methods } from '@/contracts/l1/l1_interface';
import BaseError from '@/errors/base_error';
import { Config } from 'wagmi';
import { GetTransactionReceiptReturnType } from 'wagmi/actions';

/**
 * PerformWriteTransactionStatus is an enum that represents the various states
 * of writing a transaction to the blockchain.
 */
export enum PerformWriteTransactionStatus {
  waitingForWrite,
  writeSucceeded,
  waitingForReceipt,
  receiptRetrieved,
}

/**
 * PerformWriteTransactionState is an enum that represents the various states
 * of writing a transaction to the blockchain.
 */
export abstract class PerformWriteTransactionState {
  abstract readonly status: PerformWriteTransactionStatus;
}

/**
 * PerformWriteTransactionWaiting represents the state where a transaction
 * write has been submitted, and is in progress, but it hasn't completed yet.
 */
export class PerformWriteTransactionWaiting extends PerformWriteTransactionState {
  readonly status = PerformWriteTransactionStatus.waitingForWrite;
}

/**
 * PerformWriteTransactionSucceeded represents the state where a transaction
 * write has been successfully completed.
 */
export class PerformWriteTransactionSucceeded extends PerformWriteTransactionState {
  constructor(public readonly transactionHash: `0x${string}`) {
    super();
  }
  readonly status = PerformWriteTransactionStatus.writeSucceeded;
}

/**
 * PerformWriteTransactionReceiptWaiting represents the state where a
 * transaction has been submitted successfully, and we've submitted a request
 * to retrieve the receipt for the transaction, but the receipt has not yet
 * been retrieved.
 */
export class PerformWriteTransactionReceiptWaiting extends PerformWriteTransactionState {
  constructor(public readonly transactionHash: `0x${string}`) {
    super();
  }
  readonly status = PerformWriteTransactionStatus.waitingForReceipt;
}

/**
 * PerformWriteTransactionReceiptRetrieved represents the state where a
 * transaction receipt has been successfully retrieved.
 */
export class PerformWriteTransactionReceiptRetrieved extends PerformWriteTransactionState {
  constructor(
    public readonly transactionHash: `0x${string}`,
    public readonly receipt: GetTransactionReceiptReturnType<Config>,
  ) {
    super();
  }

  readonly status = PerformWriteTransactionStatus.receiptRetrieved;
}

export class FailedToPerformWriteToContract extends BaseError {
  constructor(
    public readonly cause: unknown,
    message: string = `failed to peform write to contract: ${String(cause)}`,
  ) {
    super(message);
  }
}

export class FailedtoReceiveReceipt extends BaseError {
  constructor(
    public readonly cause: unknown,
    message: string = `failed to receive receipt: ${String(cause)}`,
  ) {
    super(message);
  }
}

export async function* performWriteTransaction(
  l1Methods: L1Methods<Config, number>,
  writeToContract: () => Promise<`0x${string}`>,
  setL1Timestamp: React.Dispatch<React.SetStateAction<Date>>,
) {
  // Indicate that we are waiting for the delegation to complete
  yield new PerformWriteTransactionWaiting();

  let transactionHash: `0x${string}`;
  try {
    transactionHash = await writeToContract();
  } catch (err) {
    const wrappedError = new FailedToPerformWriteToContract(err);
    console.error('encountered error', wrappedError);
    setL1Timestamp(new Date());
    throw wrappedError;
  }

  yield new PerformWriteTransactionSucceeded(transactionHash);

  // We wait for the transaction receipt
  yield new PerformWriteTransactionReceiptWaiting(transactionHash);

  let receipt: GetTransactionReceiptReturnType<Config>;
  try {
    // Wait for transaction receipt with confirmations
    receipt = await l1Methods.waitForTransactionReceipt({
      hash: transactionHash,
      confirmations: 1,
      timeout: 180_000, // 3 minutes
    });
  } catch (err) {
    const wrappedError = new FailedtoReceiveReceipt(err);
    console.error('encountered error', wrappedError);
    setL1Timestamp(new Date());
    throw wrappedError;
  }

  yield new PerformWriteTransactionReceiptRetrieved(transactionHash, receipt);

  // Add delay for indexer lag
  await sleep(2000);

  setL1Timestamp(new Date());
}
