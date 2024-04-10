import {
  convertIterableToAsyncIterable,
  mapAsyncIterable,
} from '../../../../functional/functional_async';
import { TaggedBase64 } from '../../../../models/espresso/tagged_base64/TaggedBase64';
import { CappuccinoAPIBlock } from './block';
import { CappuccinoDerivedBlockSummary } from './derived_block_summary';
import { CappuccinoDerivedTransactionSummary } from './derived_transaction_summary';
import { CappuccinoAPILeafResponse } from './leaf_response';
import { CappuccinoAPITransactionResponse } from './transaction_response';

export async function convertBlockAndLeafToBlockSummary(
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

export async function convertBlockToBlockSummary(
  block: CappuccinoAPIBlock,
): Promise<CappuccinoDerivedBlockSummary> {
  return new CappuccinoDerivedBlockSummary(
    block.header,
    block.hash,
    block.size,
    block.payload.transaction_nmt.length,
    new TaggedBase64('PROPOSER', new Uint8Array([0, 0, 0, 0]).buffer),
  );
}

// export async function convertLeafToBlockSummary(
//   leaf: CappuccinoAPILeafResponse,
// ): Promise<CappuccinoDerivedBlockSummary> {
//   return new CappuccinoDerivedBlockSummary(
//     leaf.leaf.block_header,
//     new TaggedBase64('BLOCK', new Uint8Array([0, 0, 0, 0]).buffer),
//     leaf.leaf.block_payload.transaction_nmt
//       .map((x) => x.payload.length)
//       .reduce((acc, next) => acc + next, 0),
//     leaf.leaf.block_payload.transaction_nmt.length,
//     leaf.leaf.proposer_id,
//   );
// }

export async function* convertLeafAndTransactionsToTransactionSummaries(
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
