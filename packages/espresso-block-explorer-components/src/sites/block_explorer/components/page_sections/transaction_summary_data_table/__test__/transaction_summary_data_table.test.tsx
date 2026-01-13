import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import * as stories from '../__docs__/transaction_summary_data_table.stories';

const { TransactionSummaryDataTable } = composeStories(stories);

describe('Transaction Summary Data Table', () => {
  describe('Smoke Tests', () => {
    it('should render TransactionSummaryDataTable', () => {
      render(<TransactionSummaryDataTable />);
    });
  });
});
