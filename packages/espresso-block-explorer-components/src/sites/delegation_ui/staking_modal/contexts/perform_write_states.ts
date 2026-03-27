import { sleep } from '@/async/sleep';
import { L1Methods } from '@/contracts/l1/l1_interface';
import BaseError from '@/errors/base_error';
import { type Config } from 'wagmi';
import { type GetTransactionReceiptReturnType } from 'wagmi/actions';

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

/**
 * FailedToperformWriteToContract represents the state where a write
 * transaction was attempted, but failed for some underlying reason.
 */
export class FailedToPerformWriteToContract extends BaseError {
  constructor(
    public readonly cause: unknown,
    message: string = `failed to peform write to contract: ${String(cause)}`,
  ) {
    super(message);
  }
}

/**
 * FailedtoReceiveReceipt represents the state where we attempted to retrieve
 * a receipt for a given transaction hash that has failed.
 */
export class FailedToReceiveReceipt extends BaseError {
  constructor(
    public readonly cause: unknown,
    message: string = `failed to receive receipt: ${String(cause)}`,
  ) {
    super(message);
  }
}

/**
 * TransctionReverted represents the state where a transaction was
 * successfully submitted, but the transaction execution itself failed due to
 * some underlying reason =encountered during execution.
 */
export class TransactionReverted extends BaseError {
  constructor(
    public readonly receipt: GetTransactionReceiptReturnType<Config>,
    message: string = 'transaction was reverted',
  ) {
    super(message);
  }
}

/**
 * Walks the cause chain of a FailedToPerformWriteToContract error to find
 * a viem ContractFunctionRevertedError and extract its errorName.
 * Returns null if no contract error name can be found.
 */
export function extractContractErrorName(error: unknown): string | null {
  const cause =
    error instanceof FailedToPerformWriteToContract ? error.cause : error;

  // Walk the cause chain looking for ContractFunctionRevertedError
  let current: unknown = cause;
  for (let depth = 0; current && depth < 10; depth++) {
    if (typeof current !== 'object' || !current) {
      break;
    }

    if (
      'name' in current &&
      current.name === 'ContractFunctionRevertedError' &&
      'data' in current &&
      typeof current.data === 'object' &&
      current.data &&
      'errorName' in current.data &&
      typeof current.data.errorName === 'string'
    ) {
      return current.data.errorName;
    }

    if (!('cause' in current)) {
      break;
    }

    current = current.cause;
  }
  return null;
}

export async function* performWriteTransaction(
  l1Methods: L1Methods<Config, number>,
  writeToContract: () => Promise<`0x${string}`>,
  resultCallback: (
    err: unknown,
    result: null | GetTransactionReceiptReturnType<Config>,
  ) => void,
) {
  // Indicate that we are waiting for the delegation to complete
  yield new PerformWriteTransactionWaiting();

  let transactionHash: `0x${string}`;
  try {
    transactionHash = await writeToContract();
  } catch (err) {
    const wrappedError = new FailedToPerformWriteToContract(err);
    console.error('encountered error', wrappedError);
    resultCallback(wrappedError, null);
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
    const wrappedError = new FailedToReceiveReceipt(err);
    console.error('encountered error', wrappedError);
    resultCallback(wrappedError, null);
    throw wrappedError;
  }

  if (receipt.status === 'reverted') {
    const err = new TransactionReverted(receipt);
    console.error('encountered error', err);
    resultCallback(err, null);
    throw err;
  }

  yield new PerformWriteTransactionReceiptRetrieved(transactionHash, receipt);

  // Add delay for indexer lag
  await sleep(2000);

  resultCallback(null, receipt);
}
