import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import * as stories from '../__docs__/nitro_batch_display.stories';

const { NitroBatchDisplay } = composeStories(stories);

describe('Nitro Batch Display', () => {
  describe('Smoke Tests', () => {
    it('should render NitroBatchDisplay', () => {
      render(<NitroBatchDisplay />);
    });
  });
});
