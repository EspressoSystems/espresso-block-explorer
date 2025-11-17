import { composeStories } from '@storybook/react-vite';
import '@testing-library/jest-dom';
import { act, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import * as stories from '../__docs__/staking_modal_no_node_states.stories';

const { NodeSelectionNeeded, NodeSelectionNodeSelected } =
  composeStories(stories);

describe('Staking Modal:: No Node States', async () => {
  it('should render the NodeSelectionNeeded state error', async () => {
    await expect(
      act(() => render(<NodeSelectionNeeded />)),
    ).resolves.not.toThrow();
  });

  it('should render the NodeSelectionNodeSelected state error', async () => {
    await expect(
      act(() => render(<NodeSelectionNodeSelected />)),
    ).resolves.not.toThrow();
  });
});
