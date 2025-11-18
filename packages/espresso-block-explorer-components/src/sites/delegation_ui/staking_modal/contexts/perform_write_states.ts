import { sleep } from '@/async/sleep';
import { L1Methods } from '@/contracts/l1/l1_interface';
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

export async function* performWriteTransaction(
  l1Methods: L1Methods<Config, number>,
  writeToContract: () => Promise<`0x${string}`>,
  setL1Timestamp: React.Dispatch<React.SetStateAction<Date>>,
) {
  // Indicate that we are waiting for the delegation to complete
  yield new PerformWriteTransactionWaiting();

  const transactionHash = await writeToContract();

  yield new PerformWriteTransactionSucceeded(transactionHash);

  // We wait for the transaction receipt
  yield new PerformWriteTransactionReceiptWaiting(transactionHash);

  // We'll try multiple times to retrieve the receipt
  try {
    for (let i = 0; i < 24; i++) {
      try {
        const receipt = await l1Methods.getTransactionReceipt({
          hash: transactionHash,
        });

        yield new PerformWriteTransactionReceiptRetrieved(
          transactionHash,
          receipt,
        );
        return;
      } catch (err) {
        if (i === 23) {
          console.error(
            '<<<< HERE performDelegation failed to retrieve receipt:',
            err,
          );
          throw err;
        }
        //  TODO: Inspect the errors before blindly retrying

        // Sleep for a second before retrying
        await sleep(1000);
      }
    }
  } finally {
    setL1Timestamp(new Date());
  }

  throw new Error('no receipt received');
}
