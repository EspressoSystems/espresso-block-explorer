import {
  convertIterableToAsyncIterable,
  mapAsyncIterable,
} from '../../../../functional/functional_async';
import { TaggedBase64 } from '../../../../models/espresso/tagged_base64/TaggedBase64';
import { GibraltarAPIBlock } from './block';
import { GibraltarDerivedBlockSummary } from './derived_block_summary';
import { GibraltarDerivedTransactionSummary } from './derived_transaction_summary';
import { GibraltarAPILeafResponse } from './leaf_response';
import { GibraltarAPITransactionResponse } from './transaction_response';

export async function convertGibraltarBlockAndLeafToBlockSummary(
  block: GibraltarAPIBlock,
  leaf: GibraltarAPILeafResponse,
): Promise<GibraltarDerivedBlockSummary> {
  return new GibraltarDerivedBlockSummary(
    block.header,
    block.hash,
    block.size,
    block.payload.transaction_nmt.length,
    leaf.leaf.proposer_id,
  );
}

export async function convertGibraltarBlockToBlockSummary(
  block: GibraltarAPIBlock,
): Promise<GibraltarDerivedBlockSummary> {
  return new GibraltarDerivedBlockSummary(
    block.header,
    block.hash,
    block.size,
    block.payload.transaction_nmt.length,
    new TaggedBase64('PROPOSER', new Uint8Array([0, 0, 0, 0]).buffer),
  );
}

export async function* convertGibraltarLeafAndTransactionsToTransactionSummaries(
  leaf: GibraltarAPILeafResponse,
  transactions: AsyncIterable<GibraltarAPITransactionResponse>,
): AsyncGenerator<GibraltarDerivedTransactionSummary> {
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

      return new GibraltarDerivedTransactionSummary(
        next.value.hash,
        leaf.leaf.block_header,
        offset,
        transaction,
      );
    },
  );
}
