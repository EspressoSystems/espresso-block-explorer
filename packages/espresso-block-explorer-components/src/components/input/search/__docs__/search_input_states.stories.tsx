import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import { iota, mapIterable } from '@/functional/functional';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/TaggedBase64';
import { CappuccinoExplorerTransactionSummary } from '@/service/hotshot_query_service';
import { CappuccinoExplorerBlockSummary } from '@/service/hotshot_query_service/cappuccino/explorer/block_summary';
import { CappuccinoExplorerGetSearchResultResponse } from '@/service/hotshot_query_service/cappuccino/explorer/get_search_result_response';
import { CappuccinoExplorerSearchResults } from '@/service/hotshot_query_service/cappuccino/explorer/search_results';
import type { Meta, StoryObj } from '@storybook/react';
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
  title: 'Components/Page Sections/Search Input/States',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Loading: Story = {
  args: {
    forceFocusState: true,
    initialState: {
      isLoading: true,
    },
  },
};

const rng = new PseudoRandomNumberGenerator();
const fakeBlockSearchResults = Array.from(
  mapIterable(
    iota(10),
    () =>
      new CappuccinoExplorerBlockSummary(
        new TaggedBase64('BLOCK', rng.fillBytes(32)),
        rng.nextInt(),
        rng.fillBytes(32),
        rng.nextInt(),
        rng.nextInt(),
        new Date(),
      ),
  ),
);

const fakeTransactionSearchResults = Array.from(
  mapIterable(
    iota(10),
    () =>
      new CappuccinoExplorerTransactionSummary(
        new TaggedBase64('COMMIT', rng.fillBytes(32)),
        [rng.nextInt()],
        rng.nextInt(),
        new Date(),
        rng.nextRange(0, 10),
        rng.nextRange(1, 20),
      ),
  ),
);

export const NoSearchResults: Story = {
  args: {
    forceFocusState: true,
    initialState: {
      query: 'SOMETHING',
      rawQuery: 'something',
      searchResultsQuery: 'SOMETHING',
      searchResults: new CappuccinoExplorerGetSearchResultResponse(
        new CappuccinoExplorerSearchResults([], []),
      ),
    },
  },
};

export const BlockSearchResults: Story = {
  args: {
    forceFocusState: true,
    initialState: {
      query: 'BLOCK~',
      rawQuery: 'block~',
      searchResultsQuery: 'BLOCK~',
      searchResults: new CappuccinoExplorerGetSearchResultResponse(
        new CappuccinoExplorerSearchResults(fakeBlockSearchResults, []),
      ),
    },
  },
};

export const BlockSearchResultsSelectedFirst: Story = {
  args: {
    forceFocusState: true,
    initialState: {
      query: 'BLOCK~',
      rawQuery: 'block~',
      searchResultsQuery: 'BLOCK~',
      searchResults: new CappuccinoExplorerGetSearchResultResponse(
        new CappuccinoExplorerSearchResults(fakeBlockSearchResults, []),
      ),
      offset: 0,
    },
  },
};

export const TransactionSearchResults: Story = {
  args: {
    forceFocusState: true,
    initialState: {
      query: 'COMMIT~',
      rawQuery: 'commit~',
      searchResultsQuery: 'COMMIT~',
      searchResults: new CappuccinoExplorerGetSearchResultResponse(
        new CappuccinoExplorerSearchResults([], fakeTransactionSearchResults),
      ),
    },
  },
};

export const TransactionSearchResultsSelectedFirst: Story = {
  args: {
    forceFocusState: true,
    initialState: {
      query: 'COMMIT~',
      rawQuery: 'commit~',
      searchResultsQuery: 'COMMIT~',
      searchResults: new CappuccinoExplorerGetSearchResultResponse(
        new CappuccinoExplorerSearchResults([], fakeTransactionSearchResults),
      ),
      offset: 0,
    },
  },
};
