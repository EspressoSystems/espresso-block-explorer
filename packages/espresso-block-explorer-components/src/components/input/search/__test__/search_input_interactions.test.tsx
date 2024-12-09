import { FakeDataCappuccinoHotShotQueryService } from '@/service/hotshot_query_service/cappuccino/implementations/fake_data';
import { render } from '@testing-library/react';
import { CappuccinoHotShotQueryServiceAPIContext } from 'pages/CappuccinoHotShotQueryServiceAPIContext';
import { describe, it } from 'vitest';
import { SearchInput } from '../SearchInput';
import {
  getBlockSearchResultElements,
  getSearchBar,
  getTransactionSearchResultElements,
  interactionEnteringEscapeShouldUnfocusSearchInput,
  interactionEnteringKeyDownAgainShouldReturnToSearchTerm,
  interactionEnteringKeyUpAgainShouldReturnToSearchTerm,
  interactionHitEnterOnSearchShouldNavigate,
  interactionHitEnterOnSearchShouldNotNavigate,
  interactionKeyInBlocksForSearch,
  interactionKeyInTransactionsForSearch,
  interactionNavigateDownThroughAllSearchResults,
  interactionNavigateUpThroughAllSearchResults,
  interactionSelectSearchBar,
  interactiveKeyInSearchString,
  interactiveSelectAllDelete,
  MockLocation,
} from '../__shared__/search_input_shared';

describe('Search Input Interactions', () => {
  it('should select the search bar', async () => {
    const location = new MockLocation();
    const searchInput = render(
      <CappuccinoHotShotQueryServiceAPIContext.Provider
        value={new FakeDataCappuccinoHotShotQueryService()}
      >
        <SearchInput initialState={{ location }} />
      </CappuccinoHotShotQueryServiceAPIContext.Provider>,
    );
    await getSearchBar(searchInput.container);
  });

  it('should select the search bar', async () => {
    const location = new MockLocation();
    const searchInput = render(
      <CappuccinoHotShotQueryServiceAPIContext.Provider
        value={new FakeDataCappuccinoHotShotQueryService()}
      >
        <SearchInput initialState={{ location }} />
      </CappuccinoHotShotQueryServiceAPIContext.Provider>,
    );
    await interactionSelectSearchBar(searchInput.container);
  });

  it('should search for blocks', async () => {
    const location = new MockLocation();
    const searchInput = render(
      <CappuccinoHotShotQueryServiceAPIContext.Provider
        value={new FakeDataCappuccinoHotShotQueryService()}
      >
        <SearchInput initialState={{ location }} />
      </CappuccinoHotShotQueryServiceAPIContext.Provider>,
    );
    await interactionSelectSearchBar(searchInput.container);
    await interactionKeyInBlocksForSearch(searchInput.container);

    const blocks = await getBlockSearchResultElements(searchInput.container);
    expect(blocks).not.toHaveLength(0);
  });

  it('should search for transactions', async () => {
    const location = new MockLocation();
    const searchInput = render(
      <CappuccinoHotShotQueryServiceAPIContext.Provider
        value={new FakeDataCappuccinoHotShotQueryService()}
      >
        <SearchInput initialState={{ location }} />
      </CappuccinoHotShotQueryServiceAPIContext.Provider>,
    );
    await interactionSelectSearchBar(searchInput.container);
    await interactionKeyInTransactionsForSearch(searchInput.container);

    const transactions = await getTransactionSearchResultElements(
      searchInput.container,
    );
    expect(transactions).not.toHaveLength(0);
  });

  it('should be interactive with down arrow key', async () => {
    const location = new MockLocation();
    const searchInput = render(
      <CappuccinoHotShotQueryServiceAPIContext.Provider
        value={new FakeDataCappuccinoHotShotQueryService()}
      >
        <SearchInput initialState={{ location }} />
      </CappuccinoHotShotQueryServiceAPIContext.Provider>,
    );
    await interactionSelectSearchBar(searchInput.container);
    await interactionKeyInBlocksForSearch(searchInput.container);
    await interactionNavigateDownThroughAllSearchResults(searchInput.container);
    await interactionHitEnterOnSearchShouldNavigate(
      location,
      searchInput.container,
    );
    await interactionEnteringKeyDownAgainShouldReturnToSearchTerm(
      searchInput.container,
    );
  });

  it('should be interactive with up arrow key', async () => {
    const location = new MockLocation();
    const searchInput = render(
      <CappuccinoHotShotQueryServiceAPIContext.Provider
        value={new FakeDataCappuccinoHotShotQueryService()}
      >
        <SearchInput initialState={{ location }} />
      </CappuccinoHotShotQueryServiceAPIContext.Provider>,
    );
    await interactionSelectSearchBar(searchInput.container);
    await interactionKeyInBlocksForSearch(searchInput.container);
    await interactionNavigateUpThroughAllSearchResults(searchInput.container);
    await interactionHitEnterOnSearchShouldNavigate(
      location,
      searchInput.container,
    );
    await interactionEnteringKeyUpAgainShouldReturnToSearchTerm(
      searchInput.container,
    );
  });

  it('should not do anything when the down arrow is entered with no results', async () => {
    const location = new MockLocation();
    const searchInput = render(
      <CappuccinoHotShotQueryServiceAPIContext.Provider
        value={new FakeDataCappuccinoHotShotQueryService()}
      >
        <SearchInput initialState={{ location }} />
      </CappuccinoHotShotQueryServiceAPIContext.Provider>,
    );
    await interactionSelectSearchBar(searchInput.container);
    await interactionEnteringKeyDownAgainShouldReturnToSearchTerm(
      searchInput.container,
    );
  });

  it('should not do anything when the up arrow is entered with no results', async () => {
    const location = new MockLocation();
    const searchInput = render(
      <CappuccinoHotShotQueryServiceAPIContext.Provider
        value={new FakeDataCappuccinoHotShotQueryService()}
      >
        <SearchInput initialState={{ location }} />
      </CappuccinoHotShotQueryServiceAPIContext.Provider>,
    );
    await interactionSelectSearchBar(searchInput.container);
    await interactionEnteringKeyUpAgainShouldReturnToSearchTerm(
      searchInput.container,
    );
  });

  it('should unfocus the search bar, and hide the search results', async () => {
    const location = new MockLocation();
    const searchInput = render(
      <CappuccinoHotShotQueryServiceAPIContext.Provider
        value={new FakeDataCappuccinoHotShotQueryService()}
      >
        <SearchInput initialState={{ location }} />
      </CappuccinoHotShotQueryServiceAPIContext.Provider>,
    );
    await interactionSelectSearchBar(searchInput.container);
    await interactionKeyInBlocksForSearch(searchInput.container);
    await interactionEnteringEscapeShouldUnfocusSearchInput(
      searchInput.container,
    );
  });

  it('should delete and clear the results from the search', async () => {
    const location = new MockLocation();
    const searchInput = render(
      <CappuccinoHotShotQueryServiceAPIContext.Provider
        value={new FakeDataCappuccinoHotShotQueryService()}
      >
        <SearchInput initialState={{ location }} />
      </CappuccinoHotShotQueryServiceAPIContext.Provider>,
    );
    await interactionSelectSearchBar(searchInput.container);
    await interactionKeyInBlocksForSearch(searchInput.container);
    await interactiveSelectAllDelete(searchInput.container);
  });

  it('should not navigate when hitting enter on empty search', async () => {
    const location = new MockLocation();
    const searchInput = render(
      <CappuccinoHotShotQueryServiceAPIContext.Provider
        value={new FakeDataCappuccinoHotShotQueryService()}
      >
        <SearchInput initialState={{ location }} />
      </CappuccinoHotShotQueryServiceAPIContext.Provider>,
    );
    await interactionSelectSearchBar(searchInput.container);
    await interactionHitEnterOnSearchShouldNotNavigate(
      location,
      searchInput.container,
    );
  });

  it('should attempt to navigate to the given number as a block height', async () => {
    const location = new MockLocation();
    const searchInput = render(
      <CappuccinoHotShotQueryServiceAPIContext.Provider
        value={new FakeDataCappuccinoHotShotQueryService()}
      >
        <SearchInput initialState={{ location }} />
      </CappuccinoHotShotQueryServiceAPIContext.Provider>,
    );
    await interactionSelectSearchBar(searchInput.container);
    await interactiveKeyInSearchString(searchInput.container, '1234');
    await interactionHitEnterOnSearchShouldNavigate(
      location,
      searchInput.container,
    );
  });

  it('should not attempt to navigate to the given number as a block height, if it is not an integer', async () => {
    const location = new MockLocation();
    const searchInput = render(
      <CappuccinoHotShotQueryServiceAPIContext.Provider
        value={new FakeDataCappuccinoHotShotQueryService()}
      >
        <SearchInput initialState={{ location }} />
      </CappuccinoHotShotQueryServiceAPIContext.Provider>,
    );
    await interactionSelectSearchBar(searchInput.container);
    await interactiveKeyInSearchString(searchInput.container, '12.34');
    await interactionHitEnterOnSearchShouldNotNavigate(
      location,
      searchInput.container,
    );
  });
});
