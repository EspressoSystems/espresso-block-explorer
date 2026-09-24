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

function renderNavigation(options: {
  height?: number;
  rows: { height: number; offset: number }[];
  refresh?: () => void;
}) {
  render(
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

  it('should lead Older past the last transaction shown', () => {
    renderNavigation({ rows });
    expect(control('Older')).toHaveAttribute(
      'href',
      paths.transactions(990, 3),
    );
  });

  it('should show Latest without Older on an empty page', () => {
    renderNavigation({ height: 1000, rows: [] });
    expect(control('Latest')).toBeInTheDocument();
    expect(screen.queryByText('Older')).toBeNull();
  });
});
