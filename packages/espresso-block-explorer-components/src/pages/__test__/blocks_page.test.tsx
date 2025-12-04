import { composeStories } from '@storybook/react-vite';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/BlocksPage.stories';

const { FakeData } = composeStories(stories);

describe('BlocksPage', async () => {
  it('should render the story', async () => {
    render(<FakeData data-testid="1" />);

    await waitFor(() => {
      const ele = screen.getByTestId('1');
      const elements = ele.querySelectorAll('td');
      expect(elements.length).greaterThan(0);
    });

    const blockPage = screen.getByTestId('1');
    expect(blockPage).toBeInTheDocument();
  });
});
