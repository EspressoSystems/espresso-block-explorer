import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import * as stories from '../__docs__/block_summary_data_table.stories';

const { BlockSummaryDataTable } = composeStories(stories);

describe('Block Summary Data Table', () => {
  describe('Smoke Tests', () => {
    it('should render BlockSummaryDataTable', () => {
      render(<BlockSummaryDataTable />);
    });
  });
});
