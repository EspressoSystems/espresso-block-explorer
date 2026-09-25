import { DataContext } from '@/contexts/data_provider';
import { TaggedBase64 } from '@/models/espresso';
import { ExplorerTransactionSummary } from '@/service/hotshot_query_service/explorer/transaction_summary';
import { composeStories } from '@storybook/react-vite';
import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/transaction_summary_data_table.stories';
import {
  BlockTransactionsSummaryDataTable,
  LatestTransactionsSummaryDataTable,
  TransactionsSummaryDataTable,
} from '../transaction_summary_data_table';

const { TransactionSummaryDataTable } = composeStories(stories);

// Newest first, as the service returns them.
const rows = [5, 4, 3].map(
  (offset) =>
    new ExplorerTransactionSummary(
      new TaggedBase64('TX', new Uint8Array(32).fill(offset).buffer),
      [],
      42,
      new Date(0),
      offset,
      6,
    ),
);

function renderTable(Table: React.FC) {
  render(
    <DataContext.Provider value={rows}>
      <Table />
    </DataContext.Provider>,
  );
}

function headers() {
  return screen.getAllByRole('columnheader').map((th) => th.textContent);
}

function firstColumn() {
  return screen
    .getAllByRole('row')
    .slice(1)
    .map((tr) => within(tr).getAllByRole('cell')[0].textContent);
}

describe('Transaction Summary Data Table', () => {
  describe('Smoke Tests', () => {
    it('should render TransactionSummaryDataTable', () => {
      render(<TransactionSummaryDataTable />);
    });
  });

  describe('Columns', () => {
    it('block table leads with Position, in position order', () => {
      renderTable(BlockTransactionsSummaryDataTable);
      expect(headers()).toEqual([
        'Position',
        'Hash',
        'Rollup',
        'Block',
        'Timestamp',
      ]);
      expect(firstColumn()).toEqual(['3', '4', '5']);
    });

    it('transactions table has no Position', () => {
      renderTable(TransactionsSummaryDataTable);
      expect(headers()).toEqual(['Hash', 'Rollup', 'Block', 'Timestamp']);
    });

    it('latest transactions table has no Position', () => {
      renderTable(LatestTransactionsSummaryDataTable);
      expect(headers()).toEqual(['Hash', 'Rollup', 'Block', 'Time']);
    });
  });
});
