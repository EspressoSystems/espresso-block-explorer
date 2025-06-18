import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/ExplorerPage.stories';

const composedStories = composeStories(stories);
const Default = composedStories.Default as React.FC;

window.HTMLElement.prototype.scrollIntoView = function () {};

describe('ExplorerPage', async () => {
  it('Search Input Interaction Story', { timeout: 10000 }, async () => {
    const user = userEvent.setup();
    render(<Default data-testid="1" />);

    await waitFor(() => {
      const ele = screen.getByTestId('1');
      const elements = ele.querySelectorAll('td');
      expect(elements.length).greaterThan(0);
    });

    const blockPage = screen.getByTestId('1');
    expect(blockPage).toBeInTheDocument();

    const inputSearch = screen.getByRole('searchbox');
    expect(inputSearch).toBeInTheDocument();

    // User Selects the Search Element
    await act(() => user.click(inputSearch));

    // Wait until the search box has focus
    await waitFor(() => {
      expect(inputSearch).toHaveFocus();
    });
  });
});
