import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { SearchInput } from '../SearchInput';
import {
  getBlockSearchResultElements,
  getSearchBar,
  getTransactionSearchResultElements,
  interactionEnteringEscapeShouldUnfocusSearchInput,
  interactionEnteringKeyDownAgainShouldReturnToSearchTerm,
  interactionEnteringKeyUpAgainShouldReturnToSearchTerm,
  interactionKeyInBlocksForSearch,
  interactionKeyInTransactionsForSearch,
  interactionNavigateDownThroughAllSearchResults,
  interactionNavigateUpThroughAllSearchResults,
  interactionSelectSearchBar,
  interactiveSelectAllDelete,
} from '../__shared__/search_input_shared';

describe('Search Input Interactions', () => {
  it('should select the search bar', async () => {
    const searchInput = render(<SearchInput />);
    await getSearchBar(searchInput.container);
  });

  it('should select the search bar', async () => {
    const searchInput = render(<SearchInput />);
    await interactionSelectSearchBar(searchInput.container);
  });

  it('should search for blocks', async () => {
    const searchInput = render(<SearchInput />);
    await interactionSelectSearchBar(searchInput.container);
    await interactionKeyInBlocksForSearch(searchInput.container);

    const blocks = await getBlockSearchResultElements(searchInput.container);
    expect(blocks).not.toHaveLength(0);
  });

  it('should search for transactions', async () => {
    const searchInput = render(<SearchInput />);
    await interactionSelectSearchBar(searchInput.container);
    await interactionKeyInTransactionsForSearch(searchInput.container);

    const transactions = await getTransactionSearchResultElements(
      searchInput.container,
    );
    expect(transactions).not.toHaveLength(0);
  });

  it('should be interactive with down arrow key', async () => {
    const searchInput = render(<SearchInput />);
    await interactionSelectSearchBar(searchInput.container);
    await interactionKeyInBlocksForSearch(searchInput.container);
    await interactionNavigateDownThroughAllSearchResults(searchInput.container);
    await interactionEnteringKeyDownAgainShouldReturnToSearchTerm(
      searchInput.container,
    );
  });

  it('should be interactive with up arrow key', async () => {
    const searchInput = render(<SearchInput />);
    await interactionSelectSearchBar(searchInput.container);
    await interactionKeyInBlocksForSearch(searchInput.container);
    await interactionNavigateUpThroughAllSearchResults(searchInput.container);
    await interactionEnteringKeyUpAgainShouldReturnToSearchTerm(
      searchInput.container,
    );
  });

  it('should not do anything when the down arrow is entered with no results', async () => {
    const searchInput = render(<SearchInput />);
    await interactionSelectSearchBar(searchInput.container);
    await interactionEnteringKeyDownAgainShouldReturnToSearchTerm(
      searchInput.container,
    );
  });

  it('should not do anything when the up arrow is entered with no results', async () => {
    const searchInput = render(<SearchInput />);
    await interactionSelectSearchBar(searchInput.container);
    await interactionEnteringKeyUpAgainShouldReturnToSearchTerm(
      searchInput.container,
    );
  });

  it('should unfocus the search bar, and hide the search results', async () => {
    const searchInput = render(<SearchInput />);
    await interactionSelectSearchBar(searchInput.container);
    await interactionKeyInBlocksForSearch(searchInput.container);
    await interactionEnteringEscapeShouldUnfocusSearchInput(
      searchInput.container,
    );
  });

  it('should delete and clear the results from the search', async () => {
    const searchInput = render(<SearchInput />);
    await interactionSelectSearchBar(searchInput.container);
    await interactionKeyInBlocksForSearch(searchInput.container);
    await interactiveSelectAllDelete(searchInput.container);
  });
});
