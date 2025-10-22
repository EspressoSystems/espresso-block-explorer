import { composeStories } from '@storybook/react-vite';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import * as stories from '../__docs__/esp_input.stories';

const { ESPInput, EdgeCase } = composeStories(stories);

window.HTMLElement.prototype.scrollIntoView = function () {};

describe('ESPInput', async () => {
  describe('Stories', () => {
    describe('ESPInput', () => {
      it('should render the story', { timeout: 10000 }, async () => {
        render(<ESPInput data-testid="1" />);
      });
    });

    describe('EdgeCase', () => {
      it('should render the story', { timeout: 10000 }, async () => {
        render(<EdgeCase data-testid="1" />);
      });
    });
  });
});
