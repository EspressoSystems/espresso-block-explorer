import React from 'react';
import { CappuccinoHotShotQueryServiceAPIContext } from '../../../pages/CappuccinoHotShotQueryServiceAPIContext';
import { CappuccinoExplorerBlockSummary } from '../../../service/hotshot_query_service/cappuccino/explorer/block_summary';
import { CappuccinoExplorerGetSearchResultRequest } from '../../../service/hotshot_query_service/cappuccino/explorer/get_search_result_request';
import { CappuccinoExplorerGetSearchResultResponse } from '../../../service/hotshot_query_service/cappuccino/explorer/get_search_result_response';
import { CappuccinoExplorerSearchResults } from '../../../service/hotshot_query_service/cappuccino/explorer/search_results';
import { CappuccinoExplorerTransactionSummary } from '../../../service/hotshot_query_service/cappuccino/explorer/transaction_summary';
import { CappuccinoHotShotQueryService } from '../../../service/hotshot_query_service/cappuccino/hot_shot_query_service_api';
import { DataContext } from '../../contexts/DataProvider';
import { ErrorContext } from '../../contexts/ErrorProvider';
import { LoadingContext } from '../../contexts/LoadingProvider';
import {
  PathResolver,
  PathResolverContext,
} from '../../contexts/PathResolverProvider';
import PromiseResolver from '../../data/async_data/PromiseResolver';
import IconButton from '../../hid/buttons/icon_button/IconButton';
import { CardNoPadding } from '../../layout/card/Card';
import NumberText from '../../text/NumberText';
import RelativeTimeText from '../../text/RelativeTimeText';
import Text from '../../text/Text';
import { WithUiSmall } from '../../typography/typography';
import SearchGlass from '../../visual/icons/SearchGlass';
import { InputContainer } from '../container/Container';
import './search.css';

/**
 * The SearchInput file governs the Explorer Page search functionality.  This
 * should be refactored and split up in the future, but since we only have a
 * single search component requirement at the moment, this can all live here
 * for now.
 *
 * This file contains all of the elements for governing the search input, the
 * looking up of the search results, the display of the search results, and
 * the navigation to the related search result subject.
 *
 * There are some faux pas committed in this file in terms of pure functions
 * in React, namely with the `SearchStateController`.  The primary faux pas
 * is that it has a state that is always mutated and never reconstructed.
 *
 * Another potential point of contention is the onKeydown event handler.  It
 * is quite a large function that needs reference to things contained within
 * the local scope.  This is a bit difficult to manage, and would be better
 * if it could be split up with parts that don't need to access the state
 * considered separately.
 */

const UISmallDiv = WithUiSmall('div');
const SearchResultLabel = WithUiSmall('label');

/**
 * stopEvent stops the event from propagating and prevents the default action
 * of this event.  This is necessary for events that you want to mark as
 * "handled", or if you want to stop the event from having an affect on the
 * rest of the DOM.
 */
function stopEvent<E = object, C = unknown, T = unknown>(
  event: React.BaseSyntheticEvent<E, C, T>,
) {
  event.stopPropagation();
  event.preventDefault();
}

function caseInsensitiveTaggedBase64Query(query: string): string {
  const tildeIndex = query.indexOf('~');
  if (tildeIndex < 0) {
    return query.toLocaleUpperCase();
  }

  const queryPrefix = query.substring(0, tildeIndex);
  const querySuffix = query.substring(tildeIndex + 1);

  return `${queryPrefix.toLocaleUpperCase()}~${querySuffix}`;
}

/**
 * SearchStateController is the controller that manages the state of the search
 * input.  It is responsible for managing the query, the last activity, the
 * search results, the search results query, the loading state, and the offset
 * of the currently selected search result.
 *
 * It is a single instance that gets referenced and breaks the pure nature of
 * the SearchInput tree.  This is necessary in order to avoid multiple updates
 * clobbering each other when the async state is being resolved.
 */
class SearchStateController {
  private pRawQuery: string = '';
  private pQuery: string = '';
  private pLastActivity: Date = new Date();
  private pSearchResults: CappuccinoExplorerGetSearchResultResponse =
    new CappuccinoExplorerGetSearchResultResponse(
      new CappuccinoExplorerSearchResults([], []),
    );
  private pSearchResultsQuery: string = '';
  private pIsLoading: boolean = false;
  private pOffset: null | number = null;

  get rawQuery(): string {
    return this.pRawQuery;
  }
  get query(): string {
    return this.pQuery;
  }
  get lastActivity(): Date {
    return this.pLastActivity;
  }
  get searchResults(): CappuccinoExplorerGetSearchResultResponse {
    return this.pSearchResults;
  }
  get searchResultsQuery(): string {
    return this.pSearchResultsQuery;
  }
  get isLoading(): boolean {
    return this.pIsLoading;
  }
  get offset(): null | number {
    return this.pOffset;
  }
  get totalSearchResults(): number {
    return (
      this.searchResults.searchResults.transactions.length +
      this.searchResults.searchResults.blocks.length
    );
  }

  setQuery(query: string) {
    this.pRawQuery = query;
    this.pQuery = caseInsensitiveTaggedBase64Query(query);
    this.pOffset = null;
  }

  setLastActivity(date: Date) {
    this.pLastActivity = date;
  }

  setSearchResults(
    query: string,
    results: CappuccinoExplorerGetSearchResultResponse,
  ) {
    this.pSearchResults = results;
    this.pSearchResultsQuery = query;
    this.pOffset = null;
  }

  setSearchResultsEmpty() {
    this.pOffset = null;
    this.pQuery = '';
    this.pRawQuery = '';
    this.pSearchResultsQuery = '';
    this.pSearchResults = new CappuccinoExplorerGetSearchResultResponse(
      new CappuccinoExplorerSearchResults([], []),
    );
  }

  setLoading(query: string, isLoading: boolean) {
    this.pSearchResultsQuery = query;
    this.pIsLoading = isLoading;
  }

  setOffset(offset: null | number) {
    this.pOffset = offset;

    const ele = document.querySelector(`[data-index="${offset}"]`);
    if (ele) {
      ele.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }

  private navigateTo(href: string) {
    // Get the target window.
    let targetWindow: Window = window;
    while (targetWindow !== targetWindow.parent) {
      targetWindow = targetWindow.parent;
    }

    targetWindow.location.href = href;
  }

  async activate(
    service: CappuccinoHotShotQueryService,
    pathResolver: PathResolver,
  ) {
    // Alright, we want to navigate to the selected element.
    if (this.offset === null) {
      // Early Detection... Perhaps...
      if (this.query === '') {
        return;
      }

      if (/^\d+$/.test(this.query)) {
        // We expect this to possibly be a block?
        const height = Number(this.query);
        if (Number.isNaN(height) || !Number.isInteger(height)) {
          return;
        }

        // Go to a Block
        this.navigateTo(pathResolver.block(height));
        return;
      }

      // This **might** be a full hash, without a selected search result.
      try {
        const result = await service.explorer.getSearchResult(
          new CappuccinoExplorerGetSearchResultRequest(this.query),
        );

        if (result.searchResults.blocks.length > 0) {
          // We have a block, let's go to the block.
          this.navigateTo(
            pathResolver.block(result.searchResults.blocks[0].height),
          );
          return;
        }

        if (result.searchResults.transactions.length > 0) {
          // We have a transaction, let's go to the transaction.
          const txn = result.searchResults.transactions[0];
          this.navigateTo(pathResolver.transaction(txn.height, txn.offset));
          return;
        }
      } catch (err) {
        // We failed to look up this result
      }

      // Nothing to navigate to, let's skip
      return;
    }

    const result = this.getResultForOffset(this.offset);

    // Get the target window.
    let targetWindow: Window = window;
    while (targetWindow !== targetWindow.parent) {
      targetWindow = targetWindow.parent;
    }

    if (result instanceof CappuccinoExplorerBlockSummary) {
      this.navigateTo(pathResolver.block(result.height));
      return;
    }

    if (result instanceof CappuccinoExplorerTransactionSummary) {
      this.navigateTo(pathResolver.transaction(result.height, result.offset));
      return;
    }
  }

  getResultForOffset(
    offset: number,
  ): CappuccinoExplorerBlockSummary | CappuccinoExplorerTransactionSummary {
    const results = this.searchResults.searchResults;
    if (offset >= results.blocks.length) {
      return results.transactions[offset - results.blocks.length];
    }

    return results.blocks[offset];
  }

  getValueForOffset(offset: number): string {
    const result = this.getResultForOffset(offset);
    return result.hash.toString();
  }
}

const SearchStateControllerContext = React.createContext<SearchStateController>(
  new SearchStateController(),
);
const InvalidateContext = React.createContext<() => void>(() => {});

function useSearchStateController() {
  const [controller] = React.useState(new SearchStateController());
  const [state, setState] = React.useState(0);
  return [controller, () => setState(state + 1)] as const;
}

export interface SearchInputProps {}

/**
 * SearchInput is the component that will allow the user to search for blocks,
 * transactions, rollups, and addresses.
 *
 * Right now it only supports searching for blocks and transactions.
 */
export const SearchInput: React.FC<SearchInputProps> = () => {
  const [controller, invalidate] = useSearchStateController();
  const service = React.useContext(CappuccinoHotShotQueryServiceAPIContext);
  const pathResolver = React.useContext(PathResolverContext);

  // Search State.
  return (
    <SearchStateControllerContext.Provider value={controller}>
      <InvalidateContext.Provider value={invalidate}>
        <SelectedOffsetContext.Provider value={controller.offset}>
          <QueryContext.Provider value={controller.query}>
            <InputContainer className="search">
              <input
                type="search"
                placeholder="Search blocks, transactions, rollups or addresses..."
                value={
                  controller.offset === null
                    ? controller.rawQuery
                    : controller.getValueForOffset(controller.offset)
                }
                onKeyDown={(event) => {
                  if (event.code === 'Escape') {
                    stopEvent(event);
                    // We want to blur (lose focus on the target).
                    event.currentTarget.blur();
                    return;
                  }

                  if (event.code === 'Enter') {
                    // Search gets submitted automatically, so we don't need to do anything
                    // here.
                    // Though, we will stop the event just to prevent any funny business.
                    stopEvent(event);
                    controller.activate(service, pathResolver);
                    return;
                  }

                  if (event.code === 'ArrowDown') {
                    stopEvent(event);
                    if (controller.totalSearchResults <= 0) {
                      return;
                    }

                    if (controller.offset === null) {
                      controller.setOffset(0);
                      invalidate();
                      return;
                    }

                    const totalResults = controller.totalSearchResults;

                    if (controller.offset === totalResults - 1) {
                      controller.setOffset(null);
                      invalidate();
                      return;
                    }

                    controller.setOffset(controller.offset + 1);
                    invalidate();
                    return;
                  }

                  if (event.code === 'ArrowUp') {
                    stopEvent(event);
                    if (controller.totalSearchResults <= 0) {
                      return;
                    }

                    const totalResults = controller.totalSearchResults;

                    if (controller.offset === null) {
                      controller.setOffset(totalResults - 1);
                      invalidate();
                      return;
                    }

                    if (controller.offset === 0) {
                      controller.setOffset(null);
                      invalidate();
                      return;
                    }

                    controller.setOffset(controller.offset - 1);
                    invalidate();
                    return;
                  }
                }}
                onChange={async (event) => {
                  const trimmedValue = event.currentTarget.value.trim();
                  if (trimmedValue === controller.query) {
                    return;
                  }

                  if (trimmedValue === '') {
                    controller.setSearchResultsEmpty();
                    invalidate();
                    return;
                  }

                  // We don't really have a way to preempt any inflight requests, or
                  // easily debounce dispatch attempts.  Multiple calls to dispatch
                  // will clobber the previously submitted dispatch.

                  controller.setQuery(trimmedValue);
                  invalidate();
                }}
              />

              <SearchBarrier />

              <IconButton>
                <SearchGlass />
              </IconButton>

              {/* This will load any search results for the query */}

              <SearchLoader />

              {/* Search Results */}
              <DataContext.Provider value={controller.searchResults}>
                <SearchResultsGuard />
              </DataContext.Provider>
            </InputContainer>
          </QueryContext.Provider>
        </SelectedOffsetContext.Provider>
      </InvalidateContext.Provider>
    </SearchStateControllerContext.Provider>
  );
};

const QueryContext = React.createContext<string>('');

/**
 * SearchBarrier is a component that displays a visual barrier between the
 * interactive components of search and the "background".  This also provides
 * a barrier of interaction from the background components to prevent
 * unintended interactions.
 */
const SearchBarrier: React.FC = () => <div className="search-barrier"></div>;

/**
 * SearchLoader is the component that will load the search results for the
 * current query.  It is also responsible for attempting to ensure that we
 * don't load the same search results multiple times, or end up in a
 * heavily recursive loop of making requests.
 */
const SearchLoader: React.FC = () => {
  const service = React.useContext(CappuccinoHotShotQueryServiceAPIContext);
  const controller = React.useContext(SearchStateControllerContext);
  const query = React.useContext(QueryContext);

  console.info(
    'SearchLoader',
    query,
    controller.query,
    controller.searchResultsQuery,
    controller.isLoading,
  );

  if (query === '') {
    return <></>;
  }

  if (query !== controller.query) {
    console.log('<<<< HERE 0');
    return <></>;
  }

  if (controller.query === controller.searchResultsQuery) {
    // We're already loading, or have already loaded this result.
    console.log('<<<< HERE 1');
    return <></>;
  }

  console.log('<<<< HERE 2');
  return (
    <PromiseResolver
      promise={Promise.all([
        Promise.resolve(query),
        service.explorer.getSearchResult(
          new CappuccinoExplorerGetSearchResultRequest(query),
        ),
      ])}
    >
      <SearchDataConsumer />
    </PromiseResolver>
  );
};

/**
 * SearchDataConsumer helps to control the async state of the search results
 * by consuming the loading result of the search results.s
 */
const SearchDataConsumer: React.FC = () => {
  const controller = React.useContext(SearchStateControllerContext);
  const loading = React.useContext(LoadingContext);
  const error = React.useContext(ErrorContext);
  const data = React.useContext(DataContext) as [
    string,
    CappuccinoExplorerGetSearchResultResponse,
  ];
  const invalidate = React.useContext(InvalidateContext);

  if (loading) {
    // controller.setLoading(controller.query, true);
    // invalidate();
    return <></>;
  }

  if (controller.isLoading || error) {
    return <></>;
  }

  if (data[0] !== controller.query) {
    // Out of date search term
    return <></>;
  }

  controller.setLoading(data[0], false);
  controller.setSearchResults(data[0], data[1]);
  invalidate();
  return <></>;
};

/**
 * SearchResultsGuard is the guard around the search results.  It will only
 * display the search results if there are search results to display.
 */
const SearchResultsGuard: React.FC = () => {
  const data = React.useContext(
    DataContext,
  ) as CappuccinoExplorerGetSearchResultResponse;
  const query = React.useContext(QueryContext);

  if (
    query.length <= 0 &&
    data.searchResults.blocks.length <= 0 &&
    data.searchResults.transactions.length <= 0
  ) {
    return <></>;
  }
  return <SearchResults />;
};

/**
 * SearchREsults is the container around all of the search results.
 */
const SearchResults: React.FC = () => {
  return (
    <CardNoPadding className="search-results">
      <div className="search-results-scroll-container">
        <SearchResultsNoResults />
        <SearchBlockResults />
        <SearchTransactionResults />
      </div>
    </CardNoPadding>
  );
};

/**
 * SelectedOffsetContext is the context that holds the currently selected
 * search result offset.
 */
const SelectedOffsetContext = React.createContext<null | number>(null);

interface ResultRowProps {
  index: number;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ResultRow is a single row in the search results.  It is used to display
 * information about a block or transaction.
 *
 * In addition it handles annotating the overall offset of the search result
 * and assists in controlling the visual component of what is currently
 * selected by the user.
 */
const ResultRow: React.FC<ResultRowProps> = ({ children, index }) => {
  const offset = React.useContext(SelectedOffsetContext);

  return (
    <div
      data-selected={offset === index}
      data-index={index}
      className="result-row"
    >
      <div className="result-row-content">{children}</div>
    </div>
  );
};

/**
 * BlockSummaryResultRowContext is the context that holds the block summary and
 * index for the current block summary row.
 */
const BlockSummaryResultRowContext = React.createContext<
  [CappuccinoExplorerBlockSummary, number]
>(null!);

/**
 * SearchResultsNoResults is the component that will display a message when
 * there are no search results found, and the user has typed a substantial
 * enough query.
 */
const SearchResultsNoResults: React.FC = () => {
  const data = React.useContext(
    DataContext,
  ) as CappuccinoExplorerGetSearchResultResponse;
  const query = React.useContext(QueryContext);

  if (
    data.searchResults.blocks.length > 0 ||
    data.searchResults.transactions.length > 0 ||
    query.length <= 0
  ) {
    return <></>;
  }

  return (
    <SearchResultLabel className="result-section-title">
      <Text text="No results found" />
    </SearchResultLabel>
  );
};

/**
 * SearchBlockResults is the container around all of the Block Summaries found
 * as a result of the search.
 */
const SearchBlockResults: React.FC = () => {
  const pathResolver = React.useContext(PathResolverContext);
  const data = React.useContext(
    DataContext,
  ) as CappuccinoExplorerGetSearchResultResponse;
  const { searchResults } = data;
  const { blocks } = searchResults;
  if (blocks.length <= 0) {
    return <></>;
  }

  const blockIndexOffset = 0;

  return (
    <>
      <SearchResultLabel className="result-section-title">
        <Text text="Blocks" />
      </SearchResultLabel>
      {blocks.map((block, idx) => {
        return (
          <a
            href={pathResolver.block(block.height)}
            key={idx + blockIndexOffset}
          >
            <BlockSummaryResultRowContext.Provider
              value={[block, idx + blockIndexOffset]}
            >
              <ResultRow
                key={idx + blockIndexOffset}
                index={idx + blockIndexOffset}
              >
                <SearchBlockRow />
              </ResultRow>
            </BlockSummaryResultRowContext.Provider>
          </a>
        );
      })}
    </>
  );
};

/**
 * SearchBlockRow is an individual row result for a found block summary.
 */
const SearchBlockRow: React.FC = () => {
  const query = React.useContext(QueryContext);
  const [block] = React.useContext(BlockSummaryResultRowContext);
  const hash = block.hash.toString();

  return (
    <>
      <div>
        {/* Split the matched portion versus the non - matched portion */}
        {/* This is a prefix match... so it's guaranteed to be the starting portion of the string */}
        <Text text={hash.substring(0, query.length)} />
        <strong>
          <Text text={hash.substring(query.length)} />
        </strong>
      </div>

      <UISmallDiv>
        <NumberText number={block.height} />
      </UISmallDiv>
    </>
  );
};

/**
 * TransactionSummaryResultRowContext is the context that holds the transaction
 * summary and index for the current transaction summary row.
 */
const TransactionSummaryResultRowContext = React.createContext<
  [CappuccinoExplorerTransactionSummary, number]
>(null!);

/**
 * SearchTransactionResults is the container around all of the Transaction
 * Summaries found as a result of the search.
 */
const SearchTransactionResults: React.FC = () => {
  const pathResolver = React.useContext(PathResolverContext);
  const data = React.useContext(
    DataContext,
  ) as CappuccinoExplorerGetSearchResultResponse;
  const { searchResults } = data;
  const { blocks, transactions } = searchResults;
  if (transactions.length <= 0) {
    return <></>;
  }

  const transactionIndexOffset = blocks.length;
  // Let's make this look good
  return (
    <>
      <SearchResultLabel className="result-section-title">
        <Text text="Transactions" />
      </SearchResultLabel>
      {transactions.map((txn, idx) => {
        const index = idx + transactionIndexOffset;
        return (
          <a
            href={pathResolver.transaction(txn.height, txn.offset)}
            key={index}
          >
            <TransactionSummaryResultRowContext.Provider
              key={index}
              value={[txn, index]}
            >
              <ResultRow index={index}>
                <SearchTransactionRow />
              </ResultRow>
            </TransactionSummaryResultRowContext.Provider>
          </a>
        );
      })}
    </>
  );
};

/**
 * SearchTransactionRow is an individual row result for a found transaction
 * summary.
 */
const SearchTransactionRow: React.FC = () => {
  const query = React.useContext(QueryContext);
  const [txn] = React.useContext(TransactionSummaryResultRowContext);
  const hash = txn.hash.toString();

  return (
    <>
      <div>
        {/* Split the matched portion versus the non - matched portion */}
        {/* This is a prefix match... so it's guaranteed to be the starting portion of the string */}
        <Text text={hash.substring(0, query.length)} />
        <strong>
          <Text text={hash.substring(query.length)} />
        </strong>
      </div>
      <UISmallDiv>
        Transaction <NumberText number={txn.offset + 1} /> of{' '}
        <NumberText number={txn.numTransactions} /> in Block{' '}
        <NumberText number={txn.height} />
      </UISmallDiv>
      <UISmallDiv>
        <RelativeTimeText date={txn.time} />
      </UISmallDiv>
    </>
  );
};
