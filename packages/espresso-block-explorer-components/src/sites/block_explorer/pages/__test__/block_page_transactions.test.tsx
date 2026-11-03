import { BlockNumberContext } from '@/block_explorer/components/page_sections/block_detail_content/block_detail_content_loader';
import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { ExplorerBlockDetail } from '@/service/hotshot_query_service/explorer/block_detail';
import { ExplorerGetBlockDetailResponse } from '@/service/hotshot_query_service/explorer/get_block_detail_response';
import { ExplorerGetBlockSummariesResponse } from '@/service/hotshot_query_service/explorer/get_block_summaries_response';
import { ExplorerGetTransactionSummariesRequest } from '@/service/hotshot_query_service/explorer/get_transaction_summaries_request';
import { ExplorerGetTransactionSummariesResponse } from '@/service/hotshot_query_service/explorer/get_transaction_summaries_response';
import { ExplorerTransactionSummary } from '@/service/hotshot_query_service/explorer/transaction_summary';
import { blockTransactionsPage } from '@/block_explorer/components/page_sections/transaction_summary_data_table/transaction_summary_data_loader';
import { UnimplementedHotShotQueryService } from '@/service/hotshot_query_service/implementations/unimplemented';
import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { default as BlockPage } from '../block_page';

const height = 7;
const time = new Date('2026-01-01T00:00:00Z');

/**
 * serviceWithBlock builds a query service holding one block with the given
 * number of transactions. Like the real service, a transaction request's
 * offset counts from the block's newest transaction, and the newest come
 * first.
 */
function serviceWithBlock(numTransactions: number) {
  const service = new UnimplementedHotShotQueryService();
  const transactions = Array.from(
    { length: numTransactions },
    (_, i) =>
      new ExplorerTransactionSummary(
        new TaggedBase64('TX', new Uint8Array(32).fill(i).buffer),
        [1],
        height,
        time,
        numTransactions - 1 - i,
        numTransactions,
      ),
  );

  Object.assign(service, {
    status: { blockHeight: () => Promise.resolve(height + 1) },
    explorer: {
      getBlockDetail: () =>
        Promise.resolve(
          new ExplorerGetBlockDetailResponse(
            new ExplorerBlockDetail(
              new TaggedBase64('BLOCK', new Uint8Array(32).buffer),
              height,
              time,
              numTransactions,
              [],
              [],
              1024,
              [],
            ),
          ),
        ),
      getBlockSummaries: () =>
        Promise.resolve(new ExplorerGetBlockSummariesResponse([])),
      getTransactionSummaries: (
        request: ExplorerGetTransactionSummariesRequest,
      ) => {
        const target = request.target as unknown as {
          offset: number;
          limit: number;
        };
        return Promise.resolve(
          new ExplorerGetTransactionSummariesResponse(
            transactions.slice(target.offset, target.offset + target.limit),
          ),
        );
      },
    },
  });
  return service;
}

async function renderBlockPage(numTransactions: number) {
  render(
    <HotShotQueryServiceAPIContext.Provider
      value={serviceWithBlock(numTransactions)}
    >
      <BlockNumberContext.Provider value={height}>
        <BlockPage />
      </BlockNumberContext.Provider>
    </HotShotQueryServiceAPIContext.Provider>,
  );
  await settle();
}

async function settle() {
  for (let i = 0; i < 5; i++) {
    await act(async () => {});
  }
}

/** The positions listed in the block's transactions table, top to bottom. */
function shownPositions(): number[] {
  const card = document.querySelector('.block-transactions')!;
  return Array.from(card.querySelectorAll('tbody tr')).map((row) =>
    Number(row.querySelector('td')!.textContent!.replace(/,/g, '')),
  );
}

const range = (from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => from + i);

describe('BlockPage transactions', () => {
  it('should list a small block whole, without paging', async () => {
    await renderBlockPage(9);

    expect(shownPositions()).toEqual(range(0, 8));
    expect(screen.queryByText('Next')).toBeNull();
    expect(screen.queryByText('Previous')).toBeNull();
  });

  it('should page through every transaction of a large block', async () => {
    await renderBlockPage(45);

    expect(shownPositions()).toEqual(range(0, 19));
    expect(screen.queryByText('Previous')).toBeNull();

    fireEvent.click(screen.getByText('Next'));
    await settle();
    expect(shownPositions()).toEqual(range(20, 39));

    fireEvent.click(screen.getByText('Next'));
    await settle();
    expect(shownPositions()).toEqual(range(40, 44));
    expect(screen.queryByText('Next')).toBeNull();

    fireEvent.click(screen.getByText('Previous'));
    await settle();
    expect(shownPositions()).toEqual(range(20, 39));
  });
});

describe('blockTransactionsPage', () => {
  it('should request a block that fits on one page as before', () => {
    expect(blockTransactionsPage(0, 0)).toMatchObject({ offset: 0, limit: 20 });
    expect(blockTransactionsPage(20, 0)).toMatchObject({
      first: 0,
      last: 19,
      offset: 0,
      limit: 20,
      pageCount: 1,
    });
  });

  it('should keep the short last page from overlapping the one before', () => {
    expect(blockTransactionsPage(21, 0)).toMatchObject({
      first: 0,
      last: 19,
      offset: 1,
      limit: 20,
    });
    expect(blockTransactionsPage(21, 1)).toMatchObject({
      first: 20,
      last: 20,
      offset: 0,
      limit: 1,
    });
  });

  it('should clamp pages outside the block', () => {
    expect(blockTransactionsPage(45, 9)).toMatchObject({ first: 40, last: 44 });
    expect(blockTransactionsPage(45, -1)).toMatchObject({ first: 0, last: 19 });
  });
});
