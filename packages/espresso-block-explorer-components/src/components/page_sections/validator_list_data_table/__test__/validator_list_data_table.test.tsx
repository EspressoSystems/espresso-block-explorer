import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import * as stories from '../__docs__/validator_list_data_table.stories';

const { WithStakeTableData, WithoutStakeTableData } = composeStories(stories);

describe('Validator List Data Table', () => {
  describe('Smoke Tests', () => {
    it('should render WithStakeTableData', () => {
      render(<WithStakeTableData />);
    });

    it('should render WithoutStakeTableData', () => {
      render(<WithoutStakeTableData />);
    });
  });
});
