import { FakeDataCappuccinoHotShotQueryService } from '@/service/hotshot_query_service/cappuccino/implementations/fake_data';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CappuccinoHotShotQueryServiceAPIContext } from 'pages/cappuccino_hot_shot_query_service_api_context';
import React from 'react';
import {
  InitialSearchState,
  SearchInput as SearchInputComp,
} from '../search_input';
import {
  interactionEnteringKeyDownAgainShouldReturnToSearchTerm,
  interactionEnteringKeyUpAgainShouldReturnToSearchTerm,
  interactionKeyInBlocksForSearch,
  interactionNavigateDownThroughAllSearchResults,
  interactionNavigateUpThroughAllSearchResults,
  interactionSelectSearchBar,
  interactiveSelectAllDelete,
} from '../__shared__/search_input_shared';

interface ExampleProps {
  initialState?: InitialSearchState;
  forceFocusState?: boolean;
}

const Example: React.FC<ExampleProps> = (props) => {
  return (
    <CappuccinoHotShotQueryServiceAPIContext.Provider
      value={new FakeDataCappuccinoHotShotQueryService()}
    >
      <SearchInputComp {...props} />
    </CappuccinoHotShotQueryServiceAPIContext.Provider>
  );
};

const meta: Meta<typeof Example> = {
  title: 'Components/Page Sections/Search Input/Interactions',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const PerformSearch: Story = {
  play: async ({ canvasElement, step }) => {
    await step('Select the Search Bar', async () => {
      await interactionSelectSearchBar(canvasElement);
    });

    await step('Search for Blocks', async () => {
      await interactionKeyInBlocksForSearch(canvasElement);
    });

    await step('Navigate down through all search results', async () => {
      await interactionNavigateDownThroughAllSearchResults(canvasElement);
    });

    await step(
      'Selecting down again should return to the original search term',
      async () => {
        await interactionEnteringKeyDownAgainShouldReturnToSearchTerm(
          canvasElement,
        );
      },
    );

    // Going the other direction should word as well
    await step('Navigate up through all search results', async () => {
      await interactionNavigateUpThroughAllSearchResults(canvasElement);
    });

    await step(
      'Selecting up again should return to the original search term',
      async () => {
        await interactionEnteringKeyUpAgainShouldReturnToSearchTerm(
          canvasElement,
        );
      },
    );

    await step('Clear Search Results', async () => {
      await interactiveSelectAllDelete(canvasElement);
    });
  },
};
