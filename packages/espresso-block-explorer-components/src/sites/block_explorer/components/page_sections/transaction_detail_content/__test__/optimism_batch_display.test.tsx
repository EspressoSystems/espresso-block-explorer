import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import * as stories from '../__docs__/optimism_batch_display.stories';

const { OptimismBatchDisplay } = composeStories(stories);

describe('Nitro Batch Display', () => {
  describe('Smoke Tests', () => {
    it('should render OptimismBatchDisplay', () => {
      render(<OptimismBatchDisplay />);
    });
  });
});
