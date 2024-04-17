import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/ExplorerPage.stories';

const { Explorer } = composeStories(stories);

window.HTMLElement.prototype.scrollIntoView = function () {};

describe('ExplorerPage', async () => {
  it(
    'Search Input Interaction Story',
    async () => {
      const user = userEvent.setup();
      render(<Explorer data-testid="1" />);

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
      await user.click(inputSearch);

      // Wait until the search box has focus
      await waitFor(() => {
        expect(inputSearch).toHaveFocus();
      });

      // User types something to search
      await user.keyboard('block~');

      await waitFor(() => {
        expect(inputSearch).toHaveValue('block~');
      });

      expect(inputSearch).toHaveValue('block~');

      // Wait for the search to finish
      await waitFor(() => {
        expect(
          screen.getByText('Blocks', { selector: '.result-section-title' }),
        ).toBeInTheDocument();
      });

      const searchTitle = screen.getByText('Blocks', {
        selector: '.result-section-title',
      });

      expect(searchTitle).toBeVisible();
      expect(searchTitle).toHaveTextContent('Blocks');

      const childElements = searchTitle.parentElement?.querySelectorAll('a');
      expect(childElements).not.toBeUndefined();
      if (!childElements) {
        return;
      }

      // Alright, we have search results
      expect(childElements.length).toBeGreaterThanOrEqual(3);

      // We should be able to select one.
      await user.keyboard('[ArrowDown]');

      const firstResult = childElements[0];
      const secondResult = childElements[1];
      expect(firstResult).not.toBeUndefined();
      if (!firstResult) {
        return;
      }

      expect(secondResult).not.toBeUndefined();
      if (!secondResult) {
        return;
      }

      await waitFor(() => {
        expect(
          firstResult.querySelector('[data-selected="true"]'),
        ).not.toBeNull();
      });

      const selectedNodes0 = searchTitle.parentElement!.querySelectorAll(
        '[data-selected="true"]',
      );

      expect(selectedNodes0).toHaveLength(1);
      const selectedNode0 = selectedNodes0[0];
      const commit0 = selectedNode0.querySelector('.commit')!;

      await waitFor(() => {
        expect(inputSearch).toHaveValue(commit0.textContent!);
      });

      // Search Box should be updated with the selected value
      expect(inputSearch).toHaveValue(commit0.textContent!);

      // Select the next Element
      await user.keyboard('[ArrowDown]');

      await waitFor(() => {
        expect(firstResult.querySelector('[data-selected="true"]')).toBeNull();
        expect(
          secondResult.querySelector('[data-selected="true"]'),
        ).not.toBeNull();
      });

      const selectedNodes1 = searchTitle.parentElement!.querySelectorAll(
        '[data-selected="true"]',
      );

      expect(selectedNodes1).toHaveLength(1);
      const selectedNode1 = selectedNodes1[0];
      const commit1 = selectedNode1.querySelector('.commit')!;
      expect(selectedNode0).not.toEqual(selectedNode1);
      expect(commit0).not.toEqual(commit1);

      await waitFor(() => {
        expect(inputSearch).toHaveValue(commit1.textContent!);
      });

      // Search Box should be updated with the selected value
      expect(inputSearch).toHaveValue(commit1.textContent!);

      // These two search results should be different
      expect(commit0.textContent).not.toEqual(commit1.textContent);

      for (let i = 1; i < childElements.length; i++) {
        // Let's step through the rest of the elements.
        // Select the next Element
        await user.keyboard('[ArrowDown]');
      }

      // We should be back at the start, nothing should be selected.
      expect(
        searchTitle.parentElement!.querySelector('[data-selected="true"]'),
      ).not.toBeInTheDocument();

      // The Search box should be reset
      expect(inputSearch).toHaveValue('block~');
    },
    { timeout: 10000 },
  );
});
