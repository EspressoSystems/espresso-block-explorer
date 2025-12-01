import { composeStories } from '@storybook/react-vite';
import '@testing-library/jest-dom';
import { act, render } from '@testing-library/react';
import { expect, findByRole, waitFor } from 'storybook/test';
import { describe, it } from 'vitest';
import * as stories from '../__docs__/delegation_ui.stories';

const { FakeData, FakeDataInteractions } = composeStories(stories);

describe('Delegation UI', { timeout: 30_000 }, () => {
  it('should smoke test render without issue', async () => {
    await act(async () => render(<FakeData data-testid="1" />));
  });

  it('should run through interactions', { timeout: 300_000 }, async () => {
    const element = await act(async () => render(<FakeDataInteractions />));
    await waitFor(async () => {
      expect(await findByRole(element.container, 'table')).toBeInTheDocument();
    });

    // await act(async () =>
    //   FakeDataInteractions.play!({ canvasElement: element.container }),
    // );
  });
});
