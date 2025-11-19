import { composeStories } from '@storybook/react-vite';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import * as stories from '../__docs__/delegation_ui.stories';

const { FakeData, FakeDataInteractions } = composeStories(stories);

describe('Delegation UI', { timeout: 30_000 }, () => {
  it('should smoke test render without issue', async () => {
    render(<FakeData data-testid="1" />);
  });

  it('should run through interactions', { timeout: 300_000 }, async () => {
    const element = render(<FakeDataInteractions />);
    await FakeDataInteractions.play!({ canvasElement: element.container });
  });
});
