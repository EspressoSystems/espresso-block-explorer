import { composeStories } from '@storybook/react-vite';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import * as stories from '../__docs__/delegation_ui.stories';

const { FakeData } = composeStories(stories);

describe('Delegation UI', { timeout: 20000 }, () => {
  it('should smoke test render without issue', async () => {
    render(<FakeData data-testid="1" />);
  });
});
