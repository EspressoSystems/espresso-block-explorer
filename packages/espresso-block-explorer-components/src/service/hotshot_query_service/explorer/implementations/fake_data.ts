import {
  generateAllEspressoBlocks,
  GeneratedEspressoBlock,
  GeneratedEspressoTransaction,
} from '@/data_source/fake_data_source/espresso/blocks';
import { createCircularBuffer } from '@/data_structures/circular_buffer/circular_buffer';
import { NotFoundError } from '@/errors/not_found_error';
import { UnimplementedError } from '@/errors/unimplemented_error';
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
import { ExplorerBlockDetail } from '../block_detail';
import { ExplorerBlockSummary } from '../block_summary';
import { latestConstant } from '../constants';
import { HotShotQueryServiceExplorerAPI } from '../explorer_api';
import { ExplorerSummary } from '../explorer_summary';
import { GenesisOverview } from '../genesis_overview';
import { ExplorerGetBlockDetailRequest } from '../get_block_detail_request';
import { ExplorerGetBlockDetailResponse } from '../get_block_detail_response';
import { ExplorerGetBlockSummariesRequest } from '../get_block_summaries_request';
import { ExplorerGetBlockSummariesResponse } from '../get_block_summaries_response';
import { ExplorerGetExplorerSummaryResponse } from '../get_explorer_summary_response';
import { ExplorerGetSearchResultRequest } from '../get_search_result_request';
import { ExplorerGetSearchResultResponse } from '../get_search_result_response';
import {
  ExplorerGetTransactionDetailRequest,
  ExplorerGetTransactionDetailRequestHash,
  ExplorerGetTransactionDetailRequestHeightAndOffset,
} from '../get_transaction_detail_request';
import { ExplorerGetTransactionDetailResponse } from '../get_transaction_detail_response';
import {
  ExplorerGetTransactionSummariesFilter,
  ExplorerGetTransactionSummariesFilterBlock,
  ExplorerGetTransactionSummariesFilterNamespace,
} from '../get_transaction_summaries_filter';
import { ExplorerGetTransactionSummariesRequest } from '../get_transaction_summaries_request';
import { ExplorerGetTransactionSummariesResponse } from '../get_transaction_summaries_response';
import {
  ExplorerGetTransactionSummariesTargetHash,
  ExplorerGetTransactionSummariesTargetHeightAndOffset,
  ExplorerGetTransactionSummariesTargetLatest,
} from '../get_transaction_summaries_target';
import { ExplorerSearchResults } from '../search_results';
import { SummaryHistograms } from '../summary_histograms';
import { ExplorerTransactionDetail } from '../transaction_detail';
import { ExplorerTransactionDetailData } from '../transaction_detail_data';
import { ExplorerTransactionDetailDetails } from '../transaction_detail_details';
import { ExplorerTransactionSummary } from '../transaction_summary';

function createBlockDetailFromGeneratedBlock(
  block: GeneratedEspressoBlock,
): ExplorerBlockDetail {
  return new ExplorerBlockDetail(
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
  block: GeneratedEspressoBlock,
): ExplorerBlockSummary {
  return new ExplorerBlockSummary(
    block.hash,
    block.height,
    block.proposer,
    block.numTransactions,
    block.size,
    block.time,
  );
}

function createTransactionDetailFromGeneratedBlockAndTransaction(
  block: GeneratedEspressoBlock,
  txn: GeneratedEspressoTransaction,
): ExplorerTransactionDetail {
  return new ExplorerTransactionDetail(
    new ExplorerTransactionDetailDetails(
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
    [new ExplorerTransactionDetailData(txn.tree.namespace, txn.tree.data)],
  );
}

function createTransactionSummaryFromGeneratedBlockAndTransaction(
  block: GeneratedEspressoBlock,
  txn: GeneratedEspressoTransaction,
): ExplorerTransactionSummary {
  return new ExplorerTransactionSummary(
    txn.hash,
    [txn.tree.namespace],
    txn.block,
    txn.time,
    txn.index,
    block.numTransactions,
  );
}

export class FakeDataHotShotQueryServiceExplorerAPI implements HotShotQueryServiceExplorerAPI {
  async getBlockDetail(
    request: ExplorerGetBlockDetailRequest,
  ): Promise<ExplorerGetBlockDetailResponse> {
    const target = request.target;
    const block = await (target === latestConstant
      ? lastAsyncIterable(generateAllEspressoBlocks())
      : firstAsyncIterator(
          dropAsyncIterable(generateAllEspressoBlocks(), target),
        ));

    return new ExplorerGetBlockDetailResponse(
      createBlockDetailFromGeneratedBlock(block),
    );
  }
  async getBlockSummaries(
    request: ExplorerGetBlockSummariesRequest,
  ): Promise<ExplorerGetBlockSummariesResponse> {
    const step1 = takeWhileAsyncIterator(
      generateAllEspressoBlocks(),
      (block) =>
        request.from === latestConstant || block.height <= request.from,
    );
    const step2 = reverseAsyncIterator(step1);
    const step3 = takeAsyncIterator(step2, request.limit);
    const step4 = mapAsyncIterator(step3, async (block) =>
      createBlockSummaryFromGeneratedBlock(block),
    );

    const blockSummaries = await collectAsyncIterator(step4);
    return new ExplorerGetBlockSummariesResponse(blockSummaries);
  }
  async getTransactionDetail(
    request: ExplorerGetTransactionDetailRequest,
  ): Promise<ExplorerGetTransactionDetailResponse> {
    const generatedBlocks = generateAllEspressoBlocks();

    if (request instanceof ExplorerGetTransactionDetailRequestHeightAndOffset) {
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
      return new ExplorerGetTransactionDetailResponse(transaction);
    }

    if (request instanceof ExplorerGetTransactionDetailRequestHash) {
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

      return new ExplorerGetTransactionDetailResponse(transaction);
    }

    throw new UnimplementedError();
  }

  private applyFilter(
    transactions: AsyncIterable<ExplorerTransactionSummary>,
    filter: ExplorerGetTransactionSummariesFilter,
  ): AsyncIterable<ExplorerTransactionSummary> {
    if (filter instanceof ExplorerGetTransactionSummariesFilterBlock) {
      return filterAsyncIterable(
        transactions,
        (txn) => txn.height == filter.block,
      );
    }

    if (filter instanceof ExplorerGetTransactionSummariesFilterNamespace) {
      return filterAsyncIterable(
        transactions,
        (txn) => txn.rollups.indexOf(filter.namespace) >= 0,
      );
    }

    return transactions;
  }

  async getTransactionSummaries(
    request: ExplorerGetTransactionSummariesRequest,
  ): Promise<ExplorerGetTransactionSummariesResponse> {
    const generatedBlocks = generateAllEspressoBlocks();

    const { target, filter } = request;

    if (target instanceof ExplorerGetTransactionSummariesTargetLatest) {
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

      return new ExplorerGetTransactionSummariesResponse(transactions);
    }

    if (
      target instanceof ExplorerGetTransactionSummariesTargetHeightAndOffset
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

      return new ExplorerGetTransactionSummariesResponse(transactions);
    }

    if (target instanceof ExplorerGetTransactionSummariesTargetHash) {
      const blocks = generateAllEspressoBlocks();

      const generatedTransactions = expandAsyncIterable(blocks, (block) =>
        mapAsyncIterable(
          block.transactions,
          async (txn) =>
            new ExplorerTransactionSummary(
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

      return new ExplorerGetTransactionSummariesResponse(transactions);
    }

    throw new UnimplementedError();
  }

  async getExplorerOverview(): Promise<ExplorerGetExplorerSummaryResponse> {
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

    let lastBlock: null | ExplorerBlockDetail;
    const blockBuffer = createCircularBuffer<ExplorerBlockSummary>(11);
    const sizeBuffer = createCircularBuffer<number>(51);
    const timeBuffer = createCircularBuffer<number>(51);
    const transactionsBuffer = createCircularBuffer<number>(51);
    const heightBuffer = createCircularBuffer<number>(51);
    const txnBuffer = createCircularBuffer<ExplorerTransactionSummary>(11);

    let numBlocks = 0;
    let numTransactions = 0;
    const rollupMap = new Map<number, number>();
    for await (const block of generateAllEspressoBlocks()) {
      // We'll go through the blocks one at a time.

      // Add the block to the circular buffer.
      lastBlock = createBlockDetailFromGeneratedBlock(block);
      blockBuffer.put(createBlockSummaryFromGeneratedBlock(block));
      sizeBuffer.put(block.size);
      timeBuffer.put(block.genTime / 1000);
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

    return new ExplorerGetExplorerSummaryResponse(
      new ExplorerSummary(
        lastBlock!,
        new GenesisOverview(
          Array.from(rollupMap.keys()).length,
          numTransactions,
          numBlocks,
        ),
        Array.from(blockBuffer),
        Array.from(txnBuffer),
        new SummaryHistograms(
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
    request: ExplorerGetSearchResultRequest,
  ): Promise<ExplorerGetSearchResultResponse> {
    const rawBlockBuffer = createCircularBuffer<GeneratedEspressoBlock>(101);
    const blockBuffer = createCircularBuffer<ExplorerBlockSummary>(10);
    const txnBuffer = createCircularBuffer<ExplorerTransactionSummary>(10);

    for await (const block of generateAllEspressoBlocks()) {
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

    return new ExplorerGetSearchResultResponse(
      new ExplorerSearchResults(Array.from(blockBuffer), Array.from(txnBuffer)),
    );
  }
}
