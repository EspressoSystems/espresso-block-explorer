import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import React from 'react';
import {
  InitialSearchState,
  SearchInput as SearchInputComp,
} from '../SearchInput';

interface ExampleProps {
  initialState?: InitialSearchState;
  forceFocusState?: boolean;
}

const Example: React.FC<ExampleProps> = (props) => {
  return <SearchInputComp {...props} />;
};

const meta: Meta<typeof Example> = {
  title: 'Components/Page Sections/Search Input/Interactions',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const PerformSearch: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const getSearchBar = () => canvas.findByRole('searchbox');

    const user = userEvent.setup();

    // Get the Taskbar
    const searchBar = await getSearchBar();
    await expect(searchBar).toBeInTheDocument();
    // Select the search bar
    await user.click(searchBar);
    // Check to make sure that the search bar is focused
    await expect(searchBar).toHaveFocus();

    // Alright, let's enter some text
    await userEvent.keyboard('block~');

    // We need to wait for the search results to load
    await waitFor(
      async () => {
        // We need to wait for a non-empty search result.
        const searchResultsContainer = await canvas.findByRole('search');
        expect(searchResultsContainer).toBeInTheDocument();

        const blockResultsElement = searchResultsContainer.querySelector(
          'section[aria-label="block-results"]',
        );
        expect(blockResultsElement).toBeInTheDocument();
      },
      { timeout: 5000 },
    );

    const searchResultsParentContainer = await canvas.findByRole('search');
    expect(searchResultsParentContainer).toBeInTheDocument();

    const blockResultsElement = searchResultsParentContainer.querySelector(
      'section[aria-label="block-results"]',
    );

    expect(blockResultsElement).toBeInTheDocument();
    if (!blockResultsElement) {
      return;
    }

    const searchResultElements = Array.from(
      blockResultsElement.querySelectorAll('a'),
    );

    expect(
      searchResultsParentContainer.querySelector('[data-selected="true"]'),
    ).not.toBeInTheDocument();

    const numSearchResults = searchResultElements.length;
    // Let's go through all of the elements.
    for (let i = 0; i < numSearchResults; i++) {
      await userEvent.keyboard('{ArrowDown}');
      // We should now have the ith element selected.
      // The first child should have the 'data-selected="true"' attribute.
      const dataRow = searchResultElements[i].children[0];
      expect(dataRow).toBeInTheDocument();

      expect(dataRow).toHaveAttribute('data-selected', 'true');
    }

    // Pressing Down again should have nothing selected (reset back to original search input entry).
    await userEvent.keyboard('{ArrowDown}');
    expect(
      searchResultsParentContainer.querySelector('[data-selected="true"]'),
    ).not.toBeInTheDocument();

    // Going the other direction should word as well

    for (let i = 0; i < numSearchResults; i++) {
      await userEvent.keyboard('{ArrowUp}');
      // We should now have the ith element selected.
      // The first child should have the 'data-selected="true"' attribute.
      const dataRow =
        searchResultElements[numSearchResults - 1 - i].children[0];
      expect(dataRow).toBeInTheDocument();

      expect(dataRow).toHaveAttribute('data-selected', 'true');
    }

    // Pressing Down again should have nothing selected (reset back to original search input entry).
    await userEvent.keyboard('{ArrowUp}');
    expect(
      searchResultsParentContainer.querySelector('[data-selected="true"]'),
    ).not.toBeInTheDocument();
  },
};
