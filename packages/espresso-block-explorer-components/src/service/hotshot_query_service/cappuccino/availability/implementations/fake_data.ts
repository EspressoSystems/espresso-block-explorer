import { generateAllBlocks } from '@/data_source/fake_data_source/generateFakeData';
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
} from '@/functional/functional_async';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/TaggedBase64';
import { CappuccinoHotShotQueryServiceAvailabilityAPI } from '../availability_api';
import { CappuccinoAPIBlock } from '../block';
import { CappuccinoAPIHeader } from '../block_header';
import { CappuccinoBuilderSignature } from '../builder_signature';
import { CappuccinoDerivedBlockSummary } from '../derived_block_summary';
import { CappuccinoDerivedTransactionSummary } from '../derived_transaction_summary';
import { CappuccinoFeeInfo } from '../fee_info';
import { CappuccinoL1Finalized } from '../l1_finalized';
import { CappuccinoAPILeaf } from '../leaf';
import { CappuccinoAPILeafResponse } from '../leaf_response';
import { CappuccinoAPIMerkleTreeBranchProof } from '../merkle_tree_proof';
import { CappuccinoNamespaceTable } from '../namespace_table';
import { CappuccinoAPIPayload } from '../payload';
import { CappuccinoAPIQuorumCertificate } from '../quorum_certificate';
import { CappuccinoAPIBQuorumCertificateData } from '../quorum_certificate_data';
import { CappuccinoAPITransactionNMTEntry } from '../transaction_nmt_entry';
import { CappuccinoAPITransactionProof } from '../transaction_proof';
import { CappuccinoAPITransactionResponse } from '../transaction_response';

// type Generated<T> = T extends Generator<infer A> ? A : never;
type AsyncGenerated<T> = T extends AsyncGenerator<infer A> ? A : never;

type GeneratedBlock = AsyncGenerated<ReturnType<typeof generateAllBlocks>>;

function headerFromBlock(block: GeneratedBlock): CappuccinoAPIHeader {
  return new CappuccinoAPIHeader(
    block.height,
    block.time.valueOf() / 1000,
    0,
    new CappuccinoL1Finalized(0, '00', '00'),
    [],
    new CappuccinoNamespaceTable(new ArrayBuffer(0)),
    new TaggedBase64('MERKLE_COMM', new Uint8Array([0, 0, 0, 0]).buffer),
    new TaggedBase64('MERKLE_COMM', new Uint8Array([0, 0, 0, 0]).buffer),
    new CappuccinoBuilderSignature(new ArrayBuffer(0), new ArrayBuffer(0), 0),
    new CappuccinoFeeInfo(new ArrayBuffer(0), new ArrayBuffer(0)),
  );
}

async function convertBlockToCappuccinoBlock(
  block: GeneratedBlock,
): Promise<CappuccinoAPIBlock> {
  return new CappuccinoAPIBlock(
    headerFromBlock(block),
    new CappuccinoAPIPayload(
      await collectAsyncIterator(
        mapAsyncIterable(block.transactions, async (txn) => {
          return new CappuccinoAPITransactionNMTEntry(
            txn.tree.namespace,
            Array.from(new Uint8Array(txn.tree.data)),
          );
        }),
      ),
    ),
    new TaggedBase64('BLOCK', new Uint8Array([0, 0, 0, 0]).buffer),
    block.size,
    block.numTransactions,
  );
}

function convertBlockToBlockSummary(
  block: GeneratedBlock,
): CappuccinoDerivedBlockSummary {
  return new CappuccinoDerivedBlockSummary(
    headerFromBlock(block),
    new TaggedBase64('BLOCK', new Uint8Array([0, 0, 0, 0]).buffer),
    block.size,
    block.numTransactions,
    block.proposer,
  );
}

function convertBlockToTransactionSummaries(
  block: GeneratedBlock,
): AsyncIterable<CappuccinoDerivedTransactionSummary> {
  const step1 = block.transactions;
  const header = headerFromBlock(block);

  return mapAsyncIterable(
    step1,
    async (txn) =>
      new CappuccinoDerivedTransactionSummary(
        txn.hash,
        header,
        txn.index,
        new CappuccinoAPITransactionNMTEntry(
          txn.tree.namespace,
          Array.from(new Uint8Array(txn.tree.data)),
        ),
      ),
  );
}

async function* convertBlockToCappuccinoAPITransactionResponse(
  generatedBlock: GeneratedBlock,
): AsyncIterable<CappuccinoAPITransactionResponse> {
  // convertBlockToCappuccinoBlock consumes the transactions iterator, which
  // we do not want.
  const header = headerFromBlock(generatedBlock);
  const step1 = generatedBlock.transactions;

  yield* mapAsyncIterable(step1, async (txn) => {
    return new CappuccinoAPITransactionResponse(
      new CappuccinoAPITransactionNMTEntry(
        txn.tree.namespace,
        Array.from(new Uint8Array(txn.tree.data)),
      ),
      new TaggedBase64('BLOCK', new Uint8Array([0, 0, 0, 0]).buffer),
      new CappuccinoAPITransactionProof(
        new TaggedBase64('POS', new Uint8Array([0, 0, 0, 0]).buffer),
        [
          new CappuccinoAPIMerkleTreeBranchProof(
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

export class FakeDataCappuccinoHotShotQueryServiceAvailabilityAPI
  implements CappuccinoHotShotQueryServiceAvailabilityAPI
{
  async getLeafFromHeight(height: number): Promise<CappuccinoAPILeafResponse> {
    const block = await this.getBlockFromHeight(height);

    return new CappuccinoAPILeafResponse(
      new CappuccinoAPILeaf(
        height,
        new CappuccinoAPIQuorumCertificate(
          new CappuccinoAPIBQuorumCertificateData(
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
        block.header.fee_info.account,
      ),
      new CappuccinoAPIQuorumCertificate(
        new CappuccinoAPIBQuorumCertificateData(
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
  ): Promise<CappuccinoAPITransactionResponse> {
    const generatedBlock = await firstAsyncIterator(
      dropAsyncIterator(generateAllBlocks(), height),
    );
    const it = convertBlockToCappuccinoAPITransactionResponse(generatedBlock);
    const txn = await firstAsyncIterable(dropAsyncIterable(it, offset));
    return txn;
  }

  async getBlockSummaries(
    from: number,
    until: number,
  ): Promise<CappuccinoDerivedBlockSummary[]> {
    const step1 = dropAsyncIterator(generateAllBlocks(), from);
    const step2 = takeAsyncIterator(step1, until - from);
    const step3 = mapAsyncIterator(step2, async (block) =>
      convertBlockToBlockSummary(block),
    );

    return await collectAsyncIterator(step3);
  }

  async getBlockFromHeight(height: number): Promise<CappuccinoAPIBlock> {
    const step1 = dropAsyncIterator(generateAllBlocks(), height);
    const step2 = await firstAsyncIterator(step1);

    return convertBlockToCappuccinoBlock(step2);
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
  ): Promise<CappuccinoDerivedTransactionSummary[]> {
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
  ): Promise<CappuccinoDerivedTransactionSummary[]> {
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
