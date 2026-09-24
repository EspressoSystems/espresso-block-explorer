import { DefaultPathResolver } from '@/block_explorer/contexts/path_resolver';
import { DataTableStateContext } from '@/components/data/data_table/data_table';
import { ExplorerTransactionSummariesContext } from '@/contexts/explorer_api_contexts';
import { ExplorerTransactionSummary } from '@/service/hotshot_query_service/explorer/transaction_summary';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  RefreshTransactionSummariesContext,
  TransactionsNavigation,
} from '../transaction_summary_data_loader';

const paths = new DefaultPathResolver();

type Row = { height: number; offset: number; numTransactions?: number };

// Transactions of blocks 14 down to 10, newest first, as the service lists them.
const blockSizes = [2, 2, 11, 2, 1];
const chain: Row[] = blockSizes.flatMap((numTransactions, i) =>
  Array.from({ length: numTransactions }, (_, j) => ({
    height: 14 - i,
    offset: numTransactions - 1 - j,
    numTransactions,
  })),
);

// Mirrors the query service: offset counts from the block's newest transaction.
function fetchPage(height: number, offset: number, limit: number) {
  const start = chain.findIndex(
    (row) =>
      row.height < height ||
      (row.height === height &&
        row.numTransactions! - 1 - row.offset >= offset),
  );
  return start < 0 ? [] : chain.slice(start, start + limit);
}

function renderNavigation(options: {
  height?: number;
  rows: Row[];
  refresh?: () => void;
}) {
  return render(
    <RefreshTransactionSummariesContext.Provider
      value={options.refresh ?? (() => {})}
    >
      <DataTableStateContext.Provider value={{ height: options.height }}>
        <ExplorerTransactionSummariesContext.Provider
          value={options.rows as unknown as ExplorerTransactionSummary[]}
        >
          <TransactionsNavigation />
        </ExplorerTransactionSummariesContext.Provider>
      </DataTableStateContext.Provider>
    </RefreshTransactionSummariesContext.Provider>,
  );
}

const control = (name: string) => screen.getByText(name).closest('a, button')!;
const rows = [
  { height: 1000, offset: 0 },
  { height: 990, offset: 2 },
];

describe('Transactions Navigation', () => {
  it('should re-fetch from Latest at the head', () => {
    const refresh = vi.fn();
    renderNavigation({ rows, refresh });
    expect(control('Latest').tagName).toBe('BUTTON');
    fireEvent.click(control('Latest'));
    expect(refresh).toHaveBeenCalledTimes(1);
  });

  it('should return to the head from Latest on a pinned page', () => {
    renderNavigation({ height: 1000, rows });
    expect(control('Latest')).toHaveAttribute('href', paths.transactions());
  });

  // The service's offset counts from the block's newest transaction.
  it('should lead Older to the next transaction down the block', () => {
    renderNavigation({
      rows: [{ height: 990, offset: 7, numTransactions: 11 }],
    });
    expect(control('Older')).toHaveAttribute(
      'href',
      paths.transactions(990, 4),
    );
  });

  it('should lead Older past the block after its last transaction', () => {
    renderNavigation({
      rows: [{ height: 990, offset: 0, numTransactions: 5 }],
    });
    expect(control('Older')).toHaveAttribute(
      'href',
      paths.transactions(990, 5),
    );
  });

  it('should page Older through every transaction exactly once', () => {
    const seen: Row[] = [];
    let page = chain.slice(0, 4);
    while (page.length > 0) {
      seen.push(...page);
      const { unmount } = renderNavigation({ rows: page });
      const older = screen.queryByText('Older')?.closest('a');
      unmount();
      if (!older) break;
      const query = new URL(older.getAttribute('href')!, 'http://x')
        .searchParams;
      page = fetchPage(
        Number(query.get('height')),
        Number(query.get('offset')),
        4,
      );
    }
    const ids = (rows: Row[]) =>
      rows.map((row) => `${row.height}-${row.offset}`);
    expect(ids(seen)).toEqual(ids(chain));
  });

  it('should show Latest without Older on an empty page', () => {
    renderNavigation({ height: 1000, rows: [] });
    expect(control('Latest')).toBeInTheDocument();
    expect(screen.queryByText('Older')).toBeNull();
  });
});
