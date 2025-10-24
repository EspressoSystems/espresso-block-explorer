import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import * as stories from '../__docs__/rollups_summary_data_table.stories';

const { RollUpsSummaryDataTable } = composeStories(stories);

describe('Rollups Summary Data Table', () => {
  describe('Smoke Tests', () => {
    it('should render RollUpsSummaryDataTable', () => {
      render(<RollUpsSummaryDataTable />);
    });
  });
});
