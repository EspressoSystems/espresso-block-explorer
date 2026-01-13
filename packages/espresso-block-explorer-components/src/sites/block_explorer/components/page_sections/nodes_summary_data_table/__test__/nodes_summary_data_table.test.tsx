import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import * as stories from '../__docs__/nodes_summary_data_table.stories';

const { WithStakeTableData, WithoutStakeTableData } = composeStories(stories);

describe('Nodes Summary Data Table', () => {
  describe('Smoke Tests', () => {
    it('should render WithStakeTableData', () => {
      render(<WithStakeTableData />);
    });

    it('should render WithoutStakeTableData', () => {
      render(<WithoutStakeTableData />);
    });
  });
});
