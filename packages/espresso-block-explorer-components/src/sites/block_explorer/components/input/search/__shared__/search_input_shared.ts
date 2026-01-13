/**
 * This file exists as a means of bridging the gap between Storybook testing
 * and library demoing and the vitest unit tests.
 *
 * Implementation is based on article found here:
 * https://scottnath.com/blahg/sharing-tests-between-vitest-and-storybook/
 *
 * Based on the article it helps to have a shared file with helper functions
 * that can share the common functionality to make the component work in both
 * the Storybook and vitest environments.
 */
import { act } from '@testing-library/react';
import { expect, userEvent, waitFor, within } from 'storybook/test';

export type PartialLocationHref = Pick<Location, 'href'>;

/**
 * MockLocation is a mock implementation of the Location interface. This is
 * useful for testing that the location is being updated correctly when
 * appropriate.
 */
export class MockLocation implements PartialLocationHref {
  // We don't actually care about ancestorOrigins, so we'll ignore this here.
  public lastHref: null | string = null;

  get href(): string {
    return this.lastHref ?? '';
  }

  set href(value: string) {
    this.lastHref = value;
  }
}

/**
 * getSearchBar is a helper function that will return the search bar element
 * from the canvasElement provided.
 */
export const getSearchBar = async (canvasElement: HTMLElement) => {
  const searchBar = await within(canvasElement).findByRole('searchbox');
  await expect(searchBar).toBeTruthy();
  await expect(searchBar).toBeInTheDocument();
  return searchBar;
};

/**
 * interactionSelectSearchBar is a helper function that will select the search
 * bar element from the canvasElement provided.
 */
export const interactionSelectSearchBar = async (
  canvasElement: HTMLElement,
) => {
  const searchBar = await getSearchBar(canvasElement);
  const user = await act(() => userEvent.setup());

  // Select the search bar

  await act(async () => user.click(searchBar));

  // Check to make sure that the search bar is focused
  await expect(searchBar).toHaveFocus();

  return searchBar;
};

/**
 * interactiveKeyInSearchString is a helper function that will key in the
 * given search term into the search bar element provided.
 */
export const interactiveKeyInSearchString = async (
  canvasElement: HTMLElement,
  searchTerm: string,
) => {
  await interactionSelectSearchBar(canvasElement);
  // Alright, let's enter some text
  await act(async () => userEvent.keyboard(searchTerm));
};

/**
 * interactionKeyInBlocksForSearch is a helper function that will key in the
 * search term "block~" into the search bar element provided.
 */
export const interactionKeyInBlocksForSearch = async (
  canvasElement: HTMLElement,
) => {
  await interactiveKeyInSearchString(canvasElement, 'block~');

  // We need to wait for the search results to load
  await waitFor(
    async () => {
      // We need to wait for a non-empty search result.
      const searchResultsContainer =
        await within(canvasElement).findByRole('search');
      expect(searchResultsContainer).toBeInTheDocument();

      await getBlockSearchResultElements(canvasElement);

      expect(searchResultsContainer).toBeVisible();
    },
    { timeout: 5000 },
  );

  const searchResultsContainer =
    await within(canvasElement).findByRole('search');
  expect(searchResultsContainer).toBeInTheDocument();
  expect(searchResultsContainer).toBeVisible();
};

/*
 * interactionKeyInTransactionsForSearch is a helper function that will key in the
 * search term "block~" into the search bar element provided.
 */
export const interactionKeyInTransactionsForSearch = async (
  canvasElement: HTMLElement,
) => {
  await interactiveKeyInSearchString(canvasElement, 'commit~');

  // We need to wait for the search results to load
  await waitFor(
    async () => {
      // We need to wait for a non-empty search result.
      const searchResultsContainer =
        await within(canvasElement).findByRole('search');
      expect(searchResultsContainer).toBeInTheDocument();

      await getTransactionSearchResultElements(canvasElement);
    },
    { timeout: 5000 },
  );

  const searchResultsContainer =
    await within(canvasElement).findByRole('search');
  expect(searchResultsContainer).toBeInTheDocument();
  expect(searchResultsContainer).toBeVisible();
};

/**
 * getSearchResultsParentContainer is a helper function that will return the
 * search results parent container element from the canvasElement provided.
 */
export const getSearchResultsParentContainer = async (
  canvasElement: HTMLElement,
) => {
  const searchResultsParentContainer =
    await within(canvasElement).findByRole('search');
  expect(searchResultsParentContainer).toBeInTheDocument();

  return searchResultsParentContainer;
};

/**
 * getBlockSearchResultElements is a helper function that will return the block
 * search result section element from the canvasElement provided.
 */
export const getBlockSearchResultElement = async (
  canvasElement: HTMLElement,
) => {
  const searchResultsParentContainer =
    await getSearchResultsParentContainer(canvasElement);

  const blockResultsElement = searchResultsParentContainer.querySelector(
    'section[aria-label="block-results"]',
  );

  expect(blockResultsElement).toBeInTheDocument();
  return blockResultsElement;
};

/**
 * getBlockSearchResultElements is a helper function that will return the
 * block search results element as an array of elements.
 */
export const getBlockSearchResultElements = async (
  canvasElement: HTMLElement,
) => {
  const searchResultsParentContainer =
    await getSearchResultsParentContainer(canvasElement);

  const blockResultsElement = await getBlockSearchResultElement(canvasElement);
  if (!blockResultsElement) {
    return [];
  }

  const searchResultElements = Array.from(
    blockResultsElement.querySelectorAll('a'),
  );

  expect(
    searchResultsParentContainer.querySelector('[data-selected="true"]'),
  ).not.toBeInTheDocument();

  return searchResultElements;
};

/**
 * getTransactionSearchResultElements is a helper function that will return
 * the transaction search result element from the canvasElement provided.
 */
export const getTransactionSearchResultElement = async (
  canvasElement: HTMLElement,
) => {
  const searchResultsParentContainer =
    await getSearchResultsParentContainer(canvasElement);

  const transactionResultsElement = searchResultsParentContainer.querySelector(
    'section[aria-label="transaction-results"]',
  );

  expect(transactionResultsElement).toBeInTheDocument();
  return transactionResultsElement;
};

/**
 * getTransactionSearchResultElements is a helper function that will return
 * the transaction search results element as an array of elements.
 */
export const getTransactionSearchResultElements = async (
  canvasElement: HTMLElement,
) => {
  const searchResultsParentContainer =
    await getSearchResultsParentContainer(canvasElement);

  const transactionResultsElement =
    await getTransactionSearchResultElement(canvasElement);
  if (!transactionResultsElement) {
    return [];
  }

  const searchResultElements = Array.from(
    transactionResultsElement.querySelectorAll('a'),
  );

  expect(
    searchResultsParentContainer.querySelector('[data-selected="true"]'),
  ).not.toBeInTheDocument();

  return searchResultElements;
};

/**
 * interactionNavigateDownThroughAllSearchResults is a helper function that will
 * navigate down through all search results from the canvasElement provided.
 */
export const interactionNavigateDownThroughAllSearchResults = async (
  canvasElement: HTMLElement,
) => {
  await interactionSelectSearchBar(canvasElement);
  const searchResultElements =
    await getBlockSearchResultElements(canvasElement);
  const numSearchResults = searchResultElements.length;

  // Let's go through all of the elements.
  for (let i = 0; i < numSearchResults; i++) {
    await act(async () => userEvent.keyboard('{ArrowDown}'));
    // We should now have the ith element selected.
    // The first child should have the 'data-selected="true"' attribute.
    const dataRow = searchResultElements[i].children[0];
    expect(dataRow).toBeInTheDocument();

    expect(dataRow).toHaveAttribute('data-selected', 'true');
  }
};

/**
 * interactionHitEnterOnSearchShouldNotNavigate is a helper function
 * that will hit Enter on the search input which should not result in
 * any navigation action.
 */
export const interactionHitEnterOnSearchShouldNotNavigate = async (
  location: MockLocation,
  canvasElement: HTMLElement,
) => {
  await interactionSelectSearchBar(canvasElement);
  // Pressing Down again should have nothing selected (reset back to original search input entry).
  await act(async () => userEvent.keyboard('{Enter}'));

  // We were told to navigate to a search result.
  expect(location.href).toEqual('');
};

/**
 * interactionHitEnterOnSearchShouldNavigate is a helper function that will hit
 * Enter on the search input in order to submit the request to navigate to the
 * selected search result.
 */
export const interactionHitEnterOnSearchShouldNavigate = async (
  location: MockLocation,
  canvasElement: HTMLElement,
) => {
  await interactionSelectSearchBar(canvasElement);
  // Pressing Down again should have nothing selected (reset back to original search input entry).
  await act(async () => userEvent.keyboard('{Enter}'));

  // We were told to navigate to a search result.
  expect(location.href).not.toEqual('');
};

/**
 * interactionEnteringKeyDownAgainShouldReturnToSearchTerm is a helper function
 * that will return to the search term from the canvasElement provided.
 */
export const interactionEnteringKeyDownAgainShouldReturnToSearchTerm = async (
  canvasElement: HTMLElement,
) => {
  await interactionSelectSearchBar(canvasElement);
  const searchResultsParentContainer =
    await getSearchResultsParentContainer(canvasElement);
  // Pressing Down again should have nothing selected (reset back to original search input entry).
  await act(async () => userEvent.keyboard('{ArrowDown}'));
  expect(
    searchResultsParentContainer.querySelector('[data-selected="true"]'),
  ).not.toBeInTheDocument();
};

/**
 * interactionNavigateUpThroughAllSearchResults is a helper function that will
 * navigate up through all search results from the canvasElement provided.
 */
export const interactionNavigateUpThroughAllSearchResults = async (
  canvasElement: HTMLElement,
) => {
  await interactionSelectSearchBar(canvasElement);
  const searchResultElements =
    await getBlockSearchResultElements(canvasElement);
  const numSearchResults = searchResultElements.length;
  for (let i = 0; i < numSearchResults; i++) {
    await act(async () => userEvent.keyboard('{ArrowUp}'));
    // We should now have the ith element selected.
    // The first child should have the 'data-selected="true"' attribute.
    const dataRow = searchResultElements[numSearchResults - 1 - i].children[0];
    expect(dataRow).toBeInTheDocument();

    expect(dataRow).toHaveAttribute('data-selected', 'true');
  }
};

/**
 * interactionEnteringKeyUpAgainShouldReturnToSearchTerm is a helper function
 * that will return to the search term from the canvasElement provided.
 */
export const interactionEnteringKeyUpAgainShouldReturnToSearchTerm = async (
  canvasElement: HTMLElement,
) => {
  await interactionSelectSearchBar(canvasElement);
  const searchResultsParentContainer =
    await getSearchResultsParentContainer(canvasElement);
  // Pressing Down again should have nothing selected (reset back to original search input entry).
  await act(async () => userEvent.keyboard('{ArrowUp}'));
  expect(
    searchResultsParentContainer.querySelector('[data-selected="true"]'),
  ).not.toBeInTheDocument();
};

/**
 * interactionEnteringEscapeShouldUnfocusSearchInput is a helper function that
 * will unfocus the search input from the canvasElement provided.
 */
export const interactionEnteringEscapeShouldUnfocusSearchInput = async (
  canvasElement: HTMLElement,
) => {
  const searchBar = await interactionSelectSearchBar(canvasElement);
  const searchResultsParentContainer =
    await getSearchResultsParentContainer(canvasElement);

  expect(searchResultsParentContainer).toBeVisible();

  // Pressing Down again should have nothing selected (reset back to original search input entry).
  await act(async () => userEvent.keyboard('{Escape}'));
  await waitFor(async () => {
    expect(searchBar).not.toHaveFocus();
  });

  expect(searchBar).not.toHaveFocus();
  // expect(searchResultsParentContainer).not.toBeVisible();
};

/**
 * interactiveSelectAllDelete is a helper function that will send the keys to
 * select all of the text in the input and delete the selection.
 */
export const interactiveSelectAllDelete = async (
  canvasElement: HTMLElement,
) => {
  await interactionSelectSearchBar(canvasElement);
  const searchResultsParentContainer =
    await getSearchResultsParentContainer(canvasElement);
  expect(searchResultsParentContainer).toBeInTheDocument();
  expect(searchResultsParentContainer).toBeVisible();
  await act(async () => userEvent.keyboard('{Backspace>7/}'));

  // This should automatically clear everything
  await waitFor(async () => {
    expect(searchResultsParentContainer).toBeInTheDocument();
  });

  expect(searchResultsParentContainer).toBeInTheDocument();
};
