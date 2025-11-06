import { composeStories } from '@storybook/react-vite';
import '@testing-library/jest-dom';
import { act, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import * as stories from '../__docs__/text_editing_interactions.stories';

const { SelectTextInput } = composeStories(stories);

window.HTMLElement.prototype.scrollIntoView = function () {};

describe('TextEditing', async () => {
  describe('Interactions', () => {
    it('should pass the interaction tests', { timeout: 10000 }, async () => {
      const element = await act(async () =>
        render(<SelectTextInput data-testid="1" />),
      );

      await act(async () => {
        if (!SelectTextInput.play) {
          throw new Error('SelectTextInput.play is undefined');
        }

        return SelectTextInput.play({ canvasElement: element.container });
      });
    });
  });
});
