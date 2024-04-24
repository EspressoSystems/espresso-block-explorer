import {
  convertIterableToAsyncIterable,
  mapAsyncIterable,
} from '@/functional/functional_async';
import { CappuccinoAPIBlock } from './block';
import { CappuccinoDerivedBlockSummary } from './derived_block_summary';
import { CappuccinoDerivedTransactionSummary } from './derived_transaction_summary';
import { CappuccinoAPILeafResponse } from './leaf_response';
import { CappuccinoAPITransactionResponse } from './transaction_response';

/**
 * convertCappuccinoBlockAndLeafToBlockSummary is a helper function that is able
 * to convert ad CappuccinoAPIBlock and a CappuccinoAPILeafResponse into a
 * CappuccinoDerivedBlockSummary.
 *
 * All of the data needed for the CappuccinoDerivedBlockSummary is present in
 * the block and leaf, so this function is able to take the pieces it needs
 * from either, and combine them to create the summary.  This is only necessary
 * when the API is unable to provide this type directly.
 *
 * With the creation of the explorer API, this function should no longer be
 * necessary.
 */
export async function convertCappuccinoBlockAndLeafToBlockSummary(
  block: CappuccinoAPIBlock,
  leaf: CappuccinoAPILeafResponse,
): Promise<CappuccinoDerivedBlockSummary> {
  return new CappuccinoDerivedBlockSummary(
    block.header,
    block.hash,
    block.size,
    block.payload.transaction_nmt.length,
    leaf.leaf.proposer_id,
  );
}

/**
 * convertCappuccinoBlockToBlockSummary is a helper function that is able to
 * convert a CappuccinoAPIBlock into a CappuccinoDerivedBlockSummary.
 *
 * All of the data needed for the CappuccinoDerivedBlockSummary is present in
 * the block, The block summary is just a different representation of the
 * same data.
 *
 * With the creation of the explorer API, this function should no longer be
 * necessary.
 */
export async function convertCappuccinoBlockToBlockSummary(
  block: CappuccinoAPIBlock,
): Promise<CappuccinoDerivedBlockSummary> {
  return new CappuccinoDerivedBlockSummary(
    block.header,
    block.hash,
    block.size,
    block.payload.transaction_nmt.length,
    new Uint8Array([0, 0, 0, 0]),
  );
}

/**
 * convertCappuccinoLeafAndTransactionsToTransactionSummaries is a helper
 * function that is able to convert a CappuccinoAPILeafResponse and an
 * AsyncIterable of CappuccinoAPITransactionResponse into an AsyncIterable of
 * CappuccinoDerivedTransactionSummary.
 *
 * The leaf is needed to provide the block header, as well as the namespace
 * that corresponds to the transactions.  The transactions are needed to provide
 * the transaction data.
 *
 * This function is only necessary when the API is unable to provide this type
 * directly.
 *
 * With the creation of the explorer API, this function should no longer be
 * necessary.
 */
export async function* convertCappuccinoLeafAndTransactionsToTransactionSummaries(
  leaf: CappuccinoAPILeafResponse,
  transactions: AsyncIterable<CappuccinoAPITransactionResponse>,
): AsyncGenerator<CappuccinoDerivedTransactionSummary> {
  const it = transactions[Symbol.asyncIterator]();
  yield* mapAsyncIterable(
    convertIterableToAsyncIterable(leaf.leaf.block_payload.transaction_nmt),
    async (transaction) => {
      const offset =
        leaf.leaf.block_payload.transaction_nmt.indexOf(transaction);
      const next = await it.next();
      if (next.done) {
        throw new Error('Not enough transactions');
      }

      return new CappuccinoDerivedTransactionSummary(
        next.value.hash,
        leaf.leaf.block_header,
        offset,
        transaction,
      );
    },
  );
}
