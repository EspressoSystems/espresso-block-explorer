import { generateAllEspressoBlocks } from '@/data_source/fake_data_source/espresso/blocks';
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
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { HotShotQueryServiceAvailabilityAPI } from '../availability_api';
import { AvailabilityAPIBlock } from '../block';
import {
  AvailabilityAPIHeader,
  AvailabilityAPIHeaderFields,
  AvailabilityAPIHeaderImpl,
} from '../block_header';
import { AvailabilityAPIV4HeaderFieldsImpl } from '../block_header_v4';
import { AvailabilityBuilderSignature } from '../builder_signature';
import { AvailabilityDerivedBlockSummary } from '../derived_block_summary';
import { AvailabilityDerivedTransactionSummary } from '../derived_transaction_summary';
import { AvailabilityFeeInfo } from '../fee_info';
import { AvailabilityL1Finalized } from '../l1_finalized';
import { AvailabilityAPILeafResponse } from '../leaf_response';
import { LeafV0 } from '../leaf_v0';
import { AvailabilityAPIMerkleTreeBranchProof } from '../merkle_tree_proof';
import { AvailabilityNamespaceTable } from '../namespace_table';
import { AvailabilityAPIPayloadV0 } from '../payload_v0';
import { QuorumCertificateV1 } from '../quorum_certificate_v1';
import { QuorumDataV1 } from '../quorum_data_v1';
import { AvailabilityAPITransactionNMTEntry } from '../transaction_nmt_entry';
import { AvailabilityAPITransactionProof } from '../transaction_proof';
import { AvailabilityAPITransactionResponse } from '../transaction_response';
import { AvailabilityVersion, WrappedVersion } from '../version';

// type Generated<T> = T extends Generator<infer A> ? A : never;
type AsyncGenerated<T> = T extends AsyncGenerator<infer A> ? A : never;

type GeneratedBlock = AsyncGenerated<
  ReturnType<typeof generateAllEspressoBlocks>
>;

function headerFromBlock(
  block: GeneratedBlock,
): AvailabilityAPIHeader<AvailabilityAPIHeaderFields> {
  return new AvailabilityAPIHeaderImpl(
    new WrappedVersion(new AvailabilityVersion(0, 4)),
    new AvailabilityAPIV4HeaderFieldsImpl(
      block.height,
      block.time.valueOf() / 1000,
      block.time.valueOf(),
      Math.floor(block.height / 12) + 30_000_000,
      new AvailabilityL1Finalized(0, '00', '00'),
      new TaggedBase64('PAYLOAD_COMM', new Uint8Array([0, 0, 0, 0]).buffer),
      new TaggedBase64('BUILDER_COMM', new Uint8Array([0, 0, 0, 0]).buffer),
      new AvailabilityNamespaceTable(new ArrayBuffer(0)),
      new TaggedBase64('MERKLE_COMM', new Uint8Array([0, 0, 0, 0]).buffer),
      new TaggedBase64('MERKLE_COMM', new Uint8Array([0, 0, 0, 0]).buffer),
      new AvailabilityFeeInfo(new ArrayBuffer(0), new ArrayBuffer(0)),
      new AvailabilityBuilderSignature(
        new ArrayBuffer(0),
        new ArrayBuffer(0),
        0,
      ),
      new TaggedBase64('MERKLE_COMM', new Uint8Array([0, 0, 0, 0]).buffer),
      0n,
      null,
    ),
  );
}

async function convertBlockToCappuccinoBlock(
  block: GeneratedBlock,
): Promise<AvailabilityAPIBlock> {
  return new AvailabilityAPIBlock(
    headerFromBlock(block),
    new AvailabilityAPIPayloadV0(
      await collectAsyncIterator(
        mapAsyncIterable(block.transactions, async (txn) => {
          return new AvailabilityAPITransactionNMTEntry(
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
): AvailabilityDerivedBlockSummary {
  return new AvailabilityDerivedBlockSummary(
    headerFromBlock(block),
    new TaggedBase64('BLOCK', new Uint8Array([0, 0, 0, 0]).buffer),
    block.size,
    block.numTransactions,
    block.proposer,
  );
}

function convertBlockToTransactionSummaries(
  block: GeneratedBlock,
): AsyncIterable<AvailabilityDerivedTransactionSummary> {
  const step1 = block.transactions;
  const header = headerFromBlock(block);

  return mapAsyncIterable(
    step1,
    async (txn) =>
      new AvailabilityDerivedTransactionSummary(
        txn.hash,
        header,
        txn.index,
        new AvailabilityAPITransactionNMTEntry(
          txn.tree.namespace,
          Array.from(new Uint8Array(txn.tree.data)),
        ),
      ),
  );
}

async function* convertBlockToCappuccinoAPITransactionResponse(
  generatedBlock: GeneratedBlock,
): AsyncIterable<AvailabilityAPITransactionResponse> {
  // convertBlockToCappuccinoBlock consumes the transactions iterator, which
  // we do not want.
  const header = headerFromBlock(generatedBlock);
  const step1 = generatedBlock.transactions;

  yield* mapAsyncIterable(step1, async (txn) => {
    return new AvailabilityAPITransactionResponse(
      new AvailabilityAPITransactionNMTEntry(
        txn.tree.namespace,
        Array.from(new Uint8Array(txn.tree.data)),
      ),
      new TaggedBase64('BLOCK', new Uint8Array([0, 0, 0, 0]).buffer),
      new AvailabilityAPITransactionProof(
        new TaggedBase64('POS', new Uint8Array([0, 0, 0, 0]).buffer),
        [
          new AvailabilityAPIMerkleTreeBranchProof(
            new TaggedBase64('EMPTY', new Uint8Array([0, 0, 0, 0]).buffer),
            [],
          ),
        ],
      ),
      header.fields.height,
      new TaggedBase64('COMMIT', txn.tree.data.slice(0, 32)),
    );
  });
}

export class FakeDataHotShotQueryServiceAvailabilityAPI implements HotShotQueryServiceAvailabilityAPI {
  async getLeafFromHeight(
    height: number,
  ): Promise<AvailabilityAPILeafResponse> {
    const block = await this.getBlockFromHeight(height);

    return new AvailabilityAPILeafResponse(
      new LeafV0(
        height,
        new QuorumCertificateV1(
          new QuorumDataV1(
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
        block.header.fields.timestamp,
        block.header.fields.fee_info.account,
      ),
      new QuorumCertificateV1(
        new QuorumDataV1(
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
  ): Promise<AvailabilityAPITransactionResponse> {
    const generatedBlock = await firstAsyncIterator(
      dropAsyncIterator(generateAllEspressoBlocks(), height),
    );
    const it = convertBlockToCappuccinoAPITransactionResponse(generatedBlock);
    const txn = await firstAsyncIterable(dropAsyncIterable(it, offset));
    return txn;
  }

  async getBlockSummaries(
    from: number,
    until: number,
  ): Promise<AvailabilityDerivedBlockSummary[]> {
    const step1 = dropAsyncIterator(generateAllEspressoBlocks(), from);
    const step2 = takeAsyncIterator(step1, until - from);
    const step3 = mapAsyncIterator(step2, async (block) =>
      convertBlockToBlockSummary(block),
    );

    return await collectAsyncIterator(step3);
  }

  async getBlockFromHeight(height: number): Promise<AvailabilityAPIBlock> {
    const step1 = dropAsyncIterator(generateAllEspressoBlocks(), height);
    const step2 = await firstAsyncIterator(step1);

    return convertBlockToCappuccinoBlock(step2);
  }

  private async *streamTransactionSummaries(height: number) {
    const step1 = takeWhileAsyncIterator(
      generateAllEspressoBlocks(),
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
  ): Promise<AvailabilityDerivedTransactionSummary[]> {
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
  ): Promise<AvailabilityDerivedTransactionSummary[]> {
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

  async getHeader(height: number): Promise<AvailabilityAPIHeader> {
    const block = await this.getBlockFromHeight(height);
    return block.header;
  }
}
