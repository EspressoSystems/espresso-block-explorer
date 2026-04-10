import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import { iota, mapIterable } from '@/functional/functional';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { ExplorerTransactionSummary } from '@/service/hotshot_query_service';
import { ExplorerBlockSummary } from '@/service/hotshot_query_service/explorer/block_summary';
import { ExplorerGetSearchResultResponse } from '@/service/hotshot_query_service/explorer/get_search_result_response';
import { ExplorerSearchResults } from '@/service/hotshot_query_service/explorer/search_results';
import { FakeDataHotShotQueryService } from '@/service/hotshot_query_service/implementations/fake_data';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import {
  InitialSearchState,
  SearchInput as SearchInputComp,
} from '../search_input';

interface ExampleProps {
  initialState?: InitialSearchState;
  forceFocusState?: boolean;
}

const Example: React.FC<ExampleProps> = (props) => {
  return (
    <HotShotQueryServiceAPIContext.Provider
      value={new FakeDataHotShotQueryService()}
    >
      <SearchInputComp {...props} />
    </HotShotQueryServiceAPIContext.Provider>
  );
};

const meta: Meta<typeof Example> = {
  title: 'Block Explorer/Components/Page Sections/Search Input/States',
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
      new ExplorerBlockSummary(
        new TaggedBase64('BLOCK', rng.fillBytes(32)),
        rng.nextInt(),
        [rng.fillBytes(32)],
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
      new ExplorerTransactionSummary(
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
      searchResults: new ExplorerGetSearchResultResponse(
        new ExplorerSearchResults([], []),
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
      searchResults: new ExplorerGetSearchResultResponse(
        new ExplorerSearchResults(fakeBlockSearchResults, []),
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
      searchResults: new ExplorerGetSearchResultResponse(
        new ExplorerSearchResults(fakeBlockSearchResults, []),
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
      searchResults: new ExplorerGetSearchResultResponse(
        new ExplorerSearchResults([], fakeTransactionSearchResults),
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
      searchResults: new ExplorerGetSearchResultResponse(
        new ExplorerSearchResults([], fakeTransactionSearchResults),
      ),
      offset: 0,
    },
  },
};
