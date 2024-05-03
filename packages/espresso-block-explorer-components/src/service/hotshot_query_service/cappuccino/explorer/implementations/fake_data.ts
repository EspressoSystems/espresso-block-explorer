import {
  GeneratedBlock,
  GeneratedTransaction,
  generateAllBlocks,
} from '@/data_source/fake_data_source/generateFakeData';
import { createCircularBuffer } from '@/data_structures/circular_buffer/CircularBuffer';
import NotFoundError from '@/errors/NotFoundError';
import UnimplementedError from '@/errors/UnimplementedError';
import {
  collectAsyncIterable,
  collectAsyncIterator,
  dropAsyncIterable,
  expandAsyncIterable,
  filterAsyncIterable,
  firstAsyncIterator,
  firstWhereAsyncIterable,
  lastAsyncIterable,
  mapAsyncIterable,
  mapAsyncIterator,
  reverseAsyncIterable,
  reverseAsyncIterator,
  takeAsyncIterable,
  takeAsyncIterator,
  takeWhileAsyncIterable,
  takeWhileAsyncIterator,
} from '@/functional/functional_async';
import { CappuccinoExplorerBlockDetail } from '../block_detail';
import { CappuccinoExplorerBlockSummary } from '../block_summary';
import { latestConstant } from '../constants';
import { CappuccinoHotShotQueryServiceExplorerAPI } from '../explorer_api';
import { CappuccinoExplorerSummary } from '../explorer_summary';
import { CappuccinoGenesisOverview } from '../genesis_overview';
import { CappuccinoExplorerGetBlockDetailRequest } from '../get_block_detail_request';
import { CappuccinoExplorerGetBlockDetailResponse } from '../get_block_detail_response';
import { CappuccinoExplorerGetBlockSummariesRequest } from '../get_block_summaries_request';
import { CappuccinoExplorerGetBlockSummariesResponse } from '../get_block_summaries_response';
import { CappuccinoExplorerGetExplorerSummaryResponse } from '../get_explorer_summary_response';
import { CappuccinoExplorerGetSearchResultRequest } from '../get_search_result_request';
import { CappuccinoExplorerGetSearchResultResponse } from '../get_search_result_response';
import {
  CappuccinoExplorerGetTransactionDetailRequest,
  CappuccinoExplorerGetTransactionDetailRequestHash,
  CappuccinoExplorerGetTransactionDetailRequestHeightAndOffset,
} from '../get_transaction_detail_request';
import { CappuccinoExplorerGetTransactionDetailResponse } from '../get_transaction_detail_response';
import {
  CappuccinoExplorerGetTransactionSummariesFilter,
  CappuccinoExplorerGetTransactionSummariesFilterBlock,
  CappuccinoExplorerGetTransactionSummariesFilterNamespace,
} from '../get_transaction_summaries_filter';
import { CappuccinoExplorerGetTransactionSummariesRequest } from '../get_transaction_summaries_request';
import { CappuccinoExplorerGetTransactionSummariesResponse } from '../get_transaction_summaries_response';
import {
  CappuccinoExplorerGetTransactionSummariesTargetHash,
  CappuccinoExplorerGetTransactionSummariesTargetHeightAndOffset,
  CappuccinoExplorerGetTransactionSummariesTargetLatest,
} from '../get_transaction_summaries_target';
import { CappuccinoExplorerSearchResults } from '../search_results';
import { CappuccinoSummaryHistograms } from '../summary_histograms';
import { CappuccinoExplorerTransactionDetail } from '../transaction_detail';
import { CappuccinoExplorerTransactionDetailData } from '../transaction_detail_data';
import { CappuccinoExplorerTransactionDetailDetails } from '../transaction_detail_details';
import { CappuccinoExplorerTransactionSummary } from '../transaction_summary';

function createBlockDetailFromGeneratedBlock(
  block: GeneratedBlock,
): CappuccinoExplorerBlockDetail {
  return new CappuccinoExplorerBlockDetail(
    block.hash,
    block.height,
    block.time,
    block.numTransactions,
    block.proposer,
    block.proposer,
    block.size,
    block.fees,
  );
}

function createBlockSummaryFromGeneratedBlock(
  block: GeneratedBlock,
): CappuccinoExplorerBlockSummary {
  return new CappuccinoExplorerBlockSummary(
    block.hash,
    block.height,
    block.proposer,
    block.numTransactions,
    block.size,
    block.time,
  );
}

function createTransactionDetailFromGeneratedBlockAndTransaction(
  block: GeneratedBlock,
  txn: GeneratedTransaction,
): CappuccinoExplorerTransactionDetail {
  return new CappuccinoExplorerTransactionDetail(
    new CappuccinoExplorerTransactionDetailDetails(
      txn.hash,
      txn.block,
      true,
      txn.index,
      block.numTransactions,
      txn.size,
      txn.time,
      [],
      [],
    ),
    [
      new CappuccinoExplorerTransactionDetailData(
        txn.tree.namespace,
        txn.tree.data,
      ),
    ],
  );
}

function createTransactionSummaryFromGeneratedBlockAndTransaction(
  block: GeneratedBlock,
  txn: GeneratedTransaction,
): CappuccinoExplorerTransactionSummary {
  return new CappuccinoExplorerTransactionSummary(
    txn.hash,
    [txn.tree.namespace],
    txn.block,
    txn.time,
    txn.index,
    block.numTransactions,
  );
}

export class FakeDataCappuccinoHotShotQueryServiceExplorerAPI
  implements CappuccinoHotShotQueryServiceExplorerAPI
{
  async getBlockDetail(
    request: CappuccinoExplorerGetBlockDetailRequest,
  ): Promise<CappuccinoExplorerGetBlockDetailResponse> {
    const target = request.target;
    const block = await (target === latestConstant
      ? lastAsyncIterable(generateAllBlocks())
      : firstAsyncIterator(dropAsyncIterable(generateAllBlocks(), target)));

    return new CappuccinoExplorerGetBlockDetailResponse(
      createBlockDetailFromGeneratedBlock(block),
    );
  }
  async getBlockSummaries(
    request: CappuccinoExplorerGetBlockSummariesRequest,
  ): Promise<CappuccinoExplorerGetBlockSummariesResponse> {
    const step1 = takeWhileAsyncIterator(
      generateAllBlocks(),
      (block) =>
        request.from === latestConstant || block.height <= request.from,
    );
    const step2 = reverseAsyncIterator(step1);
    const step3 = takeAsyncIterator(step2, request.limit);
    const step4 = mapAsyncIterator(step3, async (block) =>
      createBlockSummaryFromGeneratedBlock(block),
    );

    const blockSummaries = await collectAsyncIterator(step4);
    return new CappuccinoExplorerGetBlockSummariesResponse(blockSummaries);
  }
  async getTransactionDetail(
    request: CappuccinoExplorerGetTransactionDetailRequest,
  ): Promise<CappuccinoExplorerGetTransactionDetailResponse> {
    const generatedBlocks = generateAllBlocks();

    if (
      request instanceof
      CappuccinoExplorerGetTransactionDetailRequestHeightAndOffset
    ) {
      const skippedBlocks = takeWhileAsyncIterable(
        generatedBlocks,
        (block) => block.height <= request.height,
      );

      const generatedTransactions = expandAsyncIterable(
        skippedBlocks,
        (block) =>
          mapAsyncIterable(block.transactions, async (txn) =>
            createTransactionDetailFromGeneratedBlockAndTransaction(block, txn),
          ),
      );

      const skippedTransactions = dropAsyncIterable(
        reverseAsyncIterable(generatedTransactions),
        request.offset,
      );

      const transaction = await firstAsyncIterator(skippedTransactions);
      return new CappuccinoExplorerGetTransactionDetailResponse(transaction);
    }

    if (request instanceof CappuccinoExplorerGetTransactionDetailRequestHash) {
      const generatedTransactions = expandAsyncIterable(
        generatedBlocks,
        (block) =>
          mapAsyncIterable(block.transactions, async (txn) =>
            createTransactionDetailFromGeneratedBlockAndTransaction(block, txn),
          ),
      );

      const transaction = await firstWhereAsyncIterable(
        generatedTransactions,
        (txn) => txn.details.hash === request.hash,
      );

      if (!transaction) {
        throw new NotFoundError(request.hash);
      }

      return new CappuccinoExplorerGetTransactionDetailResponse(transaction);
    }

    throw new UnimplementedError();
  }

  private applyFilter(
    transactions: AsyncIterable<CappuccinoExplorerTransactionSummary>,
    filter: CappuccinoExplorerGetTransactionSummariesFilter,
  ): AsyncIterable<CappuccinoExplorerTransactionSummary> {
    if (
      filter instanceof CappuccinoExplorerGetTransactionSummariesFilterBlock
    ) {
      return filterAsyncIterable(
        transactions,
        (txn) => txn.height == filter.block,
      );
    }

    if (
      filter instanceof CappuccinoExplorerGetTransactionSummariesFilterNamespace
    ) {
      return filterAsyncIterable(
        transactions,
        (txn) => txn.rollups.indexOf(filter.namespace) >= 0,
      );
    }

    return transactions;
  }

  async getTransactionSummaries(
    request: CappuccinoExplorerGetTransactionSummariesRequest,
  ): Promise<CappuccinoExplorerGetTransactionSummariesResponse> {
    const generatedBlocks = generateAllBlocks();

    const { target, filter } = request;

    if (
      target instanceof CappuccinoExplorerGetTransactionSummariesTargetLatest
    ) {
      const blocks = generatedBlocks;

      const generatedTransactions = expandAsyncIterable(blocks, (block) =>
        mapAsyncIterable(block.transactions, async (txn) =>
          createTransactionSummaryFromGeneratedBlockAndTransaction(block, txn),
        ),
      );

      const reversedTransactions = reverseAsyncIterable(generatedTransactions);

      // Apply filter
      const filteredTransactions = this.applyFilter(
        reversedTransactions,
        filter,
      );

      const transactions = await collectAsyncIterable(
        takeAsyncIterable(filteredTransactions, target.limit),
      );

      return new CappuccinoExplorerGetTransactionSummariesResponse(
        transactions,
      );
    }

    if (
      target instanceof
      CappuccinoExplorerGetTransactionSummariesTargetHeightAndOffset
    ) {
      const blocks = takeWhileAsyncIterable(
        generatedBlocks,
        (block) => block.height <= target.height,
      );

      const generatedTransactions = expandAsyncIterable(blocks, (block) =>
        mapAsyncIterable(block.transactions, async (txn) =>
          createTransactionSummaryFromGeneratedBlockAndTransaction(block, txn),
        ),
      );
      const reversedTransactions = reverseAsyncIterable(generatedTransactions);
      const skippedTransactions = dropAsyncIterable(
        reversedTransactions,
        target.offset,
      );

      // Apply Filter
      const filteredTransactions = this.applyFilter(
        skippedTransactions,
        filter,
      );

      const transactions = await collectAsyncIterable(
        takeAsyncIterable(filteredTransactions, target.limit),
      );

      return new CappuccinoExplorerGetTransactionSummariesResponse(
        transactions,
      );
    }

    if (target instanceof CappuccinoExplorerGetTransactionSummariesTargetHash) {
      const blocks = generateAllBlocks();

      const generatedTransactions = expandAsyncIterable(blocks, (block) =>
        mapAsyncIterable(
          block.transactions,
          async (txn) =>
            new CappuccinoExplorerTransactionSummary(
              txn.hash,
              [txn.tree.namespace],
              txn.block,
              txn.time,
              txn.index,
              block.numTransactions,
            ),
        ),
      );

      const windowedTransactions = takeWhileAsyncIterable(
        generatedTransactions,
        (txn) => txn.hash !== target.hash,
      );

      const reversedTransactions = reverseAsyncIterable(windowedTransactions);
      // Apply Filter
      const filteredTransactions = this.applyFilter(
        reversedTransactions,
        filter,
      );

      const transactions = await collectAsyncIterable(
        takeAsyncIterable(filteredTransactions, target.limit),
      );

      return new CappuccinoExplorerGetTransactionSummariesResponse(
        transactions,
      );
    }

    throw new UnimplementedError();
  }

  async getExplorerOverview(): Promise<CappuccinoExplorerGetExplorerSummaryResponse> {
    // We need all blocks, and all transactions sadly...
    // But this does make sense.
    // For the graph data... we want the last 50 blocks.
    // For the latest blocks and transactions we want the last 10 blocks,
    // and the last 10 transactions.
    // Ideally, we'd want all of these things with a single iteration over the
    // blocks.

    // We do have some advantages here.  The Fake data always generates at least
    // one transaction per block.  Thus if we grab the last 50 blocks, we'll
    // already have the last 10 blocks, and the last 10 transactions.

    // Windowing would be amazing here.
    // It would be better if we could always grab the last 50 blocks.

    let lastBlock: null | CappuccinoExplorerBlockDetail;
    const blockBuffer =
      createCircularBuffer<CappuccinoExplorerBlockSummary>(11);
    const sizeBuffer = createCircularBuffer<number>(51);
    const timeBuffer = createCircularBuffer<number>(51);
    const transactionsBuffer = createCircularBuffer<number>(51);
    const heightBuffer = createCircularBuffer<number>(51);
    const txnBuffer =
      createCircularBuffer<CappuccinoExplorerTransactionSummary>(11);

    let numBlocks = 0;
    let numTransactions = 0;
    const rollupMap = new Map<number, number>();
    for await (const block of generateAllBlocks()) {
      // We'll go through the blocks one at a time.

      // Add the block to the circular buffer.
      lastBlock = createBlockDetailFromGeneratedBlock(block);
      blockBuffer.put(createBlockSummaryFromGeneratedBlock(block));
      sizeBuffer.put(block.size);
      timeBuffer.put(Math.round(block.genTime / 1000));
      transactionsBuffer.put(block.numTransactions);
      heightBuffer.put(block.height);

      // Let's compute our statistics
      numBlocks++;
      numTransactions += block.numTransactions;
      for await (const txn of block.transactions) {
        txnBuffer.put(
          createTransactionSummaryFromGeneratedBlockAndTransaction(block, txn),
        );
        const count = rollupMap.get(txn.tree.namespace) || 0;
        rollupMap.set(txn.tree.namespace, count + 1);
      }
    }

    // We now have the last 10 blocks and transactions in ascending order.

    return new CappuccinoExplorerGetExplorerSummaryResponse(
      new CappuccinoExplorerSummary(
        lastBlock!,
        new CappuccinoGenesisOverview(
          Array.from(rollupMap.keys()).length,
          numTransactions,
          numBlocks,
        ),
        Array.from(blockBuffer),
        Array.from(txnBuffer),
        new CappuccinoSummaryHistograms(
          Array.from(timeBuffer),
          Array.from(sizeBuffer),
          Array.from(transactionsBuffer),
          Array.from(heightBuffer),
        ),
      ),
    );

    throw new UnimplementedError();
  }

  async getSearchResult(
    request: CappuccinoExplorerGetSearchResultRequest,
  ): Promise<CappuccinoExplorerGetSearchResultResponse> {
    const rawBlockBuffer = createCircularBuffer<GeneratedBlock>(101);
    const blockBuffer =
      createCircularBuffer<CappuccinoExplorerBlockSummary>(10);
    const txnBuffer =
      createCircularBuffer<CappuccinoExplorerTransactionSummary>(10);

    for await (const block of generateAllBlocks()) {
      rawBlockBuffer.put(block);
    }

    for (const block of rawBlockBuffer) {
      if (block.hash.toString().startsWith(request.query)) {
        blockBuffer.put(createBlockSummaryFromGeneratedBlock(block));
      }

      for await (const txn of block.transactions) {
        if (txn.hash.toString().startsWith(request.query)) {
          txnBuffer.put(
            createTransactionSummaryFromGeneratedBlockAndTransaction(
              block,
              txn,
            ),
          );
        }
      }
    }

    return new CappuccinoExplorerGetSearchResultResponse(
      new CappuccinoExplorerSearchResults(
        Array.from(blockBuffer),
        Array.from(txnBuffer),
      ),
    );
  }
}
