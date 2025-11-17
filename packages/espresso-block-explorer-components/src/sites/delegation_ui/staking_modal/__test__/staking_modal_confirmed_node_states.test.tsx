import { composeStories } from '@storybook/react-vite';
import '@testing-library/jest-dom';
import { act, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import * as stories from '../__docs__/staking_modal_confirmed_node_states.stories';

const { ManageStake } = composeStories(stories);

describe('Staking Modal:: Confirmed Node States', async () => {
  it('should render the ManageStake state error', async () => {
    await expect(act(() => render(<ManageStake />))).resolves.not.toThrow();
  });
});
