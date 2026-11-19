import { BlockNumberContext } from '@/block_explorer/components/page_sections/block_detail_content/block_detail_content_loader';
import { DefaultPathResolver } from '@/block_explorer/contexts/path_resolver';
import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { MonetaryValue } from '@/models/block_explorer';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { ExplorerBlockDetail } from '@/service/hotshot_query_service/explorer/block_detail';
import { ExplorerGetBlockDetailResponse } from '@/service/hotshot_query_service/explorer/get_block_detail_response';
import { ExplorerGetBlockSummariesResponse } from '@/service/hotshot_query_service/explorer/get_block_summaries_response';
import { ExplorerGetTransactionSummariesRequest } from '@/service/hotshot_query_service/explorer/get_transaction_summaries_request';
import { ExplorerGetTransactionSummariesResponse } from '@/service/hotshot_query_service/explorer/get_transaction_summaries_response';
import { ExplorerGetTransactionSummariesTargetHeightAndOffset } from '@/service/hotshot_query_service/explorer/get_transaction_summaries_target';
import { ExplorerTransactionSummary } from '@/service/hotshot_query_service/explorer/transaction_summary';
import { UnimplementedHotShotQueryService } from '@/service/hotshot_query_service/implementations/unimplemented';
import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { default as BlockPage } from '../block_page';

const kBlock = 7;
const paths = new DefaultPathResolver();
const hash = new TaggedBase64('TX', new ArrayBuffer(32));

interface ServiceOptions {
  /** The block's details arrive once this settles. */
  detailsReady?: Promise<void>;
  /** A page of transactions arrives once the promise for its offset settles. */
  transactionsReady?: (offset: number) => Promise<void>;
}

/**
 * serviceWithBlock stands in for a query service holding block 7 with
 * `numTransactions` transactions. Like the real service, it counts the
 * requested offset from the block's newest transaction.
 */
function serviceWithBlock(
  numTransactions: number,
  {
    detailsReady = Promise.resolve(),
    transactionsReady = () => Promise.resolve(),
  }: ServiceOptions = {},
) {
  const service = new UnimplementedHotShotQueryService();
  const requests: { offset: number; limit: number }[] = [];

  Object.assign(service.explorer, {
    getBlockDetail: () =>
      detailsReady.then(
        () =>
          new ExplorerGetBlockDetailResponse(
            new ExplorerBlockDetail(
              hash,
              kBlock,
              new Date(0),
              numTransactions,
              [],
              [],
              0,
              [MonetaryValue.ESP(0n)],
            ),
          ),
      ),
    getBlockSummaries: () =>
      Promise.resolve(new ExplorerGetBlockSummariesResponse([])),
    getTransactionSummaries: (
      request: ExplorerGetTransactionSummariesRequest,
    ) => {
      const target =
        request.target as ExplorerGetTransactionSummariesTargetHeightAndOffset;
      requests.push({ offset: target.offset, limit: target.limit });

      const newest = numTransactions - 1 - target.offset;
      const count = Math.max(Math.min(target.limit, newest + 1), 0);
      return transactionsReady(target.offset).then(
        () =>
          new ExplorerGetTransactionSummariesResponse(
            Array.from(
              { length: count },
              (_, i) =>
                new ExplorerTransactionSummary(
                  hash,
                  [],
                  kBlock,
                  new Date(0),
                  newest - i,
                  numTransactions,
                ),
            ),
          ),
      );
    },
  });
  Object.assign(service.status, {
    blockHeight: () => Promise.resolve(kBlock + 1),
  });

  return { service, requests };
}

function renderBlock(
  numTransactions: number,
  position?: number,
  options?: ServiceOptions,
) {
  const { service, requests } = serviceWithBlock(numTransactions, options);
  const page = (position?: number) => (
    <HotShotQueryServiceAPIContext.Provider value={service}>
      <BlockNumberContext.Provider value={kBlock}>
        <BlockPage transactionsPosition={position} />
      </BlockNumberContext.Provider>
    </HotShotQueryServiceAPIContext.Provider>
  );
  const view = render(page(position));
  return {
    ...view,
    requests,
    /** showPosition moves to another position, as following a link does. */
    showPosition: (position: number) => view.rerender(page(position)),
  };
}

const pagers = (container: HTMLElement) =>
  Array.from(container.querySelectorAll('nav.block-transactions-pager'));

const pagerLink = (pager: Element, name: string) =>
  Array.from(pager.querySelectorAll('a')).find((a) => a.textContent === name)!;

/** The positions shown in the Position column, top to bottom. */
const positionsShown = (container: HTMLElement) =>
  Array.from(container.querySelectorAll('.block-transactions tbody tr')).map(
    (row) => Number(row.querySelector('td')!.textContent!.replace(/\D/g, '')),
  );

describe('Block page transactions paging', () => {
  it('shows a small block on one page, without a pager', async () => {
    const { container, requests } = renderBlock(14);

    await waitFor(() => expect(positionsShown(container)).toHaveLength(14));
    expect(requests).toEqual([{ offset: 0, limit: 14 }]);
    expect(positionsShown(container)[0]).toBe(0);
    expect(pagers(container)).toHaveLength(0);
  });

  it('starts a large block at position 0, with a pager above and below', async () => {
    const { container, requests } = renderBlock(123);

    await waitFor(() => expect(positionsShown(container)).toHaveLength(50));
    // Positions 0-49 of 123: skip the newest 73.
    expect(requests).toEqual([{ offset: 73, limit: 50 }]);
    expect(positionsShown(container)[0]).toBe(0);
    expect(positionsShown(container)[49]).toBe(49);

    const shown = pagers(container);
    expect(shown).toHaveLength(2);
    for (const pager of shown) {
      expect(pager).toHaveTextContent('Blobs 0–49 of 123');
      expect(pagerLink(pager, 'Previous')).not.toHaveAttribute('href');
      expect(pagerLink(pager, 'Next')).toHaveAttribute(
        'href',
        paths.block(kBlock, 50),
      );
    }
  });

  it('loads only what is left on the last page', async () => {
    const { container, requests } = renderBlock(123, 100);

    await waitFor(() => expect(positionsShown(container)).toHaveLength(23));
    expect(requests).toEqual([{ offset: 0, limit: 23 }]);
    expect(positionsShown(container)[0]).toBe(100);
    expect(positionsShown(container)[22]).toBe(122);

    const [pager] = pagers(container);
    expect(pager).toHaveTextContent('Blobs 100–122 of 123');
    expect(pagerLink(pager, 'Previous')).toHaveAttribute(
      'href',
      paths.block(kBlock, 50),
    );
    expect(pagerLink(pager, 'Next')).not.toHaveAttribute('href');
  });

  it('shows the first page for a position outside the block', async () => {
    const { container, requests } = renderBlock(123, 500);

    await waitFor(() => expect(positionsShown(container)).toHaveLength(50));
    expect(requests).toEqual([{ offset: 73, limit: 50 }]);
  });

  it('waits for the block details before requesting transactions', async () => {
    let releaseDetails!: () => void;
    const detailsReady = new Promise<void>((resolve) => {
      releaseDetails = resolve;
    });
    const { container, requests } = renderBlock(123, 0, { detailsReady });

    // The request needs the block's number of transactions.
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(requests).toEqual([]);

    releaseDetails();
    await waitFor(() => expect(positionsShown(container)).toHaveLength(50));
    expect(requests).toEqual([{ offset: 73, limit: 50 }]);
  });

  it('keeps the current page, rows and pager alike, while the next loads', async () => {
    let releaseNext!: () => void;
    const nextReady = new Promise<void>((resolve) => {
      releaseNext = resolve;
    });
    const { container, requests, showPosition } = renderBlock(123, 0, {
      // Positions 50-99 skip the newest 23.
      transactionsReady: (offset) =>
        offset === 23 ? nextReady : Promise.resolve(),
    });
    await waitFor(() => expect(positionsShown(container)).toHaveLength(50));

    showPosition(50);
    await waitFor(() =>
      expect(requests).toContainEqual({ offset: 23, limit: 50 }),
    );
    expect(positionsShown(container)[0]).toBe(0);
    for (const pager of pagers(container)) {
      expect(pager).toHaveTextContent('Blobs 0–49 of 123');
    }

    releaseNext();
    await waitFor(() => expect(positionsShown(container)[0]).toBe(50));
    for (const pager of pagers(container)) {
      expect(pager).toHaveTextContent('Blobs 50–99 of 123');
    }
    // One request per page, however often the page re-renders.
    expect(requests).toEqual([
      { offset: 73, limit: 50 },
      { offset: 23, limit: 50 },
    ]);
  });

  it('links both ways from a middle page', async () => {
    const { container } = renderBlock(123, 50);

    await waitFor(() => expect(positionsShown(container)).toHaveLength(50));
    const [pager] = pagers(container);
    expect(pager).toHaveTextContent('Blobs 50–99 of 123');
    expect(pagerLink(pager, 'Previous')).toHaveAttribute(
      'href',
      paths.block(kBlock),
    );
    expect(pagerLink(pager, 'Next')).toHaveAttribute(
      'href',
      paths.block(kBlock, 100),
    );
  });

  it('shows exactly one full page without a pager', async () => {
    const { container, requests } = renderBlock(50);

    await waitFor(() => expect(positionsShown(container)).toHaveLength(50));
    expect(requests).toEqual([{ offset: 0, limit: 50 }]);
    expect(pagers(container)).toHaveLength(0);
  });

  it('asks for the single transaction left on the last page', async () => {
    const { container, requests } = renderBlock(51, 50);

    await waitFor(() => expect(positionsShown(container)).toEqual([50]));
    expect(requests).toEqual([{ offset: 0, limit: 1 }]);
    expect(pagers(container)[0]).toHaveTextContent('Blob 50 of 51');
  });

  it('shows an empty block as empty, without a pager', async () => {
    const { container, requests } = renderBlock(0);

    await waitFor(() => expect(container).toHaveTextContent('Empty Block'));
    // The smallest valid request; the block has nothing to return.
    expect(requests).toEqual([{ offset: 0, limit: 1 }]);
    expect(pagers(container)).toHaveLength(0);
  });
});
