import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import * as stories from '../__docs__/block_summary_data_table_interactions.stories';

const { Interactions } = composeStories(stories);

describe('bBlock Summary Data Table', () => {
  describe('Interactions', () => {
    it('should render Interactions', async () => {
      const renderResult = render(<Interactions />);

      await Interactions.play!({ canvasElement: renderResult.container });
    });
  });
});
