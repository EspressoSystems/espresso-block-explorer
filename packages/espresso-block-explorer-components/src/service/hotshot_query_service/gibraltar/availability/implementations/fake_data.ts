import { generateAllBlocks } from '../../../../../data_source/fake_data_source/generateFakeData';
import {
  collectAsyncIterator,
  dropAsyncIterable,
  dropAsyncIterator,
  expandAsyncIterable,
  filterAsyncIterator,
  firstAsyncIterable,
  firstAsyncIterator,
  mapAsyncIterable,
  mapAsyncIterator,
  reverseAsyncIterable,
  reverseAsyncIterator,
  takeAsyncIterator,
  takeWhileAsyncIterator,
} from '../../../../../functional/functional_async';
import { TaggedBase64 } from '../../../../../models/espresso/tagged_base64/TaggedBase64';
import { GibraltarHotShotQueryServiceAvailabilityAPI } from '../availability_api';
import { GibraltarAPIBlock } from '../block';
import { GibraltarAPIHeader } from '../block_header';
import { GibraltarDerivedBlockSummary } from '../derived_block_summary';
import { GibraltarDerivedTransactionSummary } from '../derived_transaction_summary';
import { GibraltarL1Finalized } from '../l1_finalized';
import { GibraltarAPILeaf } from '../leaf';
import { GibraltarAPILeafResponse } from '../leaf_response';
import { GibraltarAPIMerkleTreeBranchProof } from '../merkle_tree_proof';
import { GibraltarAPIPayload } from '../payload';
import { GibraltarAPIQuorumCertificate } from '../quorum_certificate';
import { GibraltarAPIBQuorumCertificateData } from '../quorum_certificate_data';
import { GibraltarAPITransactionNMTEntry } from '../transaction_nmt_entry';
import { GibraltarAPITransactionProof } from '../transaction_proof';
import { GibraltarAPITransactionResponse } from '../transaction_response';
import { GibraltarTransactionsRoot } from '../transactions_root';

// type Generated<T> = T extends Generator<infer A> ? A : never;
type AsyncGenerated<T> = T extends AsyncGenerator<infer A> ? A : never;

type GeneratedBlock = AsyncGenerated<ReturnType<typeof generateAllBlocks>>;

function headerFromBlock(block: GeneratedBlock): GibraltarAPIHeader {
  return new GibraltarAPIHeader(
    block.height,
    block.time.valueOf() / 1000,
    0,
    new GibraltarL1Finalized(0, '00', '00'),
    [],
    new GibraltarTransactionsRoot([]),
  );
}

async function convertBlockToGibraltarBlock(
  block: GeneratedBlock,
): Promise<GibraltarAPIBlock> {
  return new GibraltarAPIBlock(
    headerFromBlock(block),
    new GibraltarAPIPayload(
      await collectAsyncIterator(
        mapAsyncIterable(block.transactions, async (txn) => {
          return new GibraltarAPITransactionNMTEntry(
            txn.tree.namespace,
            Array.from(new Uint8Array(txn.tree.data)),
          );
        }),
      ),
    ),
    new TaggedBase64('BLOCK', new Uint8Array([0, 0, 0, 0]).buffer),
    block.size,
  );
}

function convertBlockToBlockSummary(
  block: GeneratedBlock,
): GibraltarDerivedBlockSummary {
  return new GibraltarDerivedBlockSummary(
    headerFromBlock(block),
    new TaggedBase64('BLOCK', new Uint8Array([0, 0, 0, 0]).buffer),
    block.size,
    block.numTransactions,
    new TaggedBase64('PROPOSER', new Uint8Array([0, 0, 0, 0]).buffer),
  );
}

function convertBlockToTransactionSummaries(
  block: GeneratedBlock,
): AsyncIterable<GibraltarDerivedTransactionSummary> {
  const step1 = block.transactions;
  const header = headerFromBlock(block);

  return mapAsyncIterable(
    step1,
    async (txn) =>
      new GibraltarDerivedTransactionSummary(
        txn.hash,
        header,
        txn.index,
        new GibraltarAPITransactionNMTEntry(
          txn.tree.namespace,
          Array.from(new Uint8Array(txn.tree.data)),
        ),
      ),
  );
}

async function* convertBlockToGibraltarAPITransactionResponse(
  generatedBlock: GeneratedBlock,
): AsyncIterable<GibraltarAPITransactionResponse> {
  // convertBlockToGibraltarBlock consumes the transactions iterator, which
  // we do not want.
  const header = headerFromBlock(generatedBlock);
  const step1 = generatedBlock.transactions;

  yield* mapAsyncIterable(step1, async (txn) => {
    return new GibraltarAPITransactionResponse(
      new GibraltarAPITransactionNMTEntry(
        txn.tree.namespace,
        Array.from(new Uint8Array(txn.tree.data)),
      ),
      new TaggedBase64('BLOCK', new Uint8Array([0, 0, 0, 0]).buffer),
      new GibraltarAPITransactionProof(
        new TaggedBase64('POS', new Uint8Array([0, 0, 0, 0]).buffer),
        [
          new GibraltarAPIMerkleTreeBranchProof(
            new TaggedBase64('EMPTY', new Uint8Array([0, 0, 0, 0]).buffer),
            [],
          ),
        ],
      ),
      header.height,
      new TaggedBase64('COMMIT', txn.tree.data.slice(0, 32)),
    );
  });
}

export class FakeDataGibraltarHotShotQueryServiceAvailabilityAPI
  implements GibraltarHotShotQueryServiceAvailabilityAPI
{
  async getLeafFromHeight(height: number): Promise<GibraltarAPILeafResponse> {
    const block = await this.getBlockFromHeight(height);

    return new GibraltarAPILeafResponse(
      new GibraltarAPILeaf(
        height,
        new GibraltarAPIQuorumCertificate(
          new GibraltarAPIBQuorumCertificateData(
            new TaggedBase64('EMPTY', new Uint8Array([0, 0, 0, 0]).buffer),
          ),
          new TaggedBase64('EMPTY', new Uint8Array([0, 0, 0, 0]).buffer),
          height,
          null,
          false,
          null,
        ),
        new TaggedBase64('LEAF', new Uint8Array([0, 0, 0, 0]).buffer),
        block.header,
        block.payload,
        [],
        block.header.timestamp,
        new TaggedBase64('PROPOSER', new Uint8Array([0, 0, 0, 0]).buffer),
      ),
      new GibraltarAPIQuorumCertificate(
        new GibraltarAPIBQuorumCertificateData(
          new TaggedBase64('EMPTY', new Uint8Array([0, 0, 0, 0]).buffer),
        ),
        new TaggedBase64('EMPTY', new Uint8Array([0, 0, 0, 0]).buffer),
        height,
        null,
        false,
        null,
      ),
    );
  }

  async getTransactionFromHeightAndOffset(
    height: number,
    offset: number,
  ): Promise<GibraltarAPITransactionResponse> {
    const generatedBlock = await firstAsyncIterator(
      dropAsyncIterator(generateAllBlocks(), height),
    );
    const it = convertBlockToGibraltarAPITransactionResponse(generatedBlock);
    const txn = await firstAsyncIterable(dropAsyncIterable(it, offset));
    return txn;
  }

  async getBlockSummaries(
    from: number,
    until: number,
  ): Promise<GibraltarDerivedBlockSummary[]> {
    const step1 = dropAsyncIterator(generateAllBlocks(), from);
    const step2 = takeAsyncIterator(step1, until - from);
    const step3 = mapAsyncIterator(step2, async (block) =>
      convertBlockToBlockSummary(block),
    );

    return await collectAsyncIterator(step3);
  }

  async getBlockFromHeight(height: number): Promise<GibraltarAPIBlock> {
    const step1 = dropAsyncIterator(generateAllBlocks(), height);
    const step2 = await firstAsyncIterator(step1);

    return convertBlockToGibraltarBlock(step2);
  }

  private async *streamTransactionSummaries(height: number) {
    const step1 = takeWhileAsyncIterator(
      generateAllBlocks(),
      (block) => block.height <= height,
    );
    const step2 = reverseAsyncIterator(step1);

    const step3 = expandAsyncIterable(step2, (block) =>
      reverseAsyncIterable(convertBlockToTransactionSummaries(block)),
    );
    yield* step3;
  }

  async getTransactionSummaryRange(
    height: number,
    offset: number,
    limit: number,
  ): Promise<GibraltarDerivedTransactionSummary[]> {
    // We can currently retrieve the individual transactions from the blocks
    // themselves.

    const step3 = this.streamTransactionSummaries(height);
    const step4 = dropAsyncIterator(step3, offset);
    const step5 = takeAsyncIterator(step4, limit);
    return await collectAsyncIterator(step5);
  }

  async getTransactionSummaryRangeForRollup(
    namespace: number,
    height: number,
    offset: number,
    limit: number,
  ): Promise<GibraltarDerivedTransactionSummary[]> {
    // We can currently retrieve the individual transactions from the blocks
    // themselves.

    const step3 = this.streamTransactionSummaries(height);
    const step4 = filterAsyncIterator(
      step3,
      (txn) => txn.transaction.vm === namespace,
    );
    const step5 = dropAsyncIterator(step4, offset);
    const step6 = takeAsyncIterator(step5, limit);
    return await collectAsyncIterator(step6);
  }
}
