import { FakeDataCappuccinoHotShotQueryService } from '@/service/hotshot_query_service/cappuccino/implementations/fake_data';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CappuccinoHotShotQueryServiceAPIContext } from 'pages/cappuccino_hot_shot_query_service_api_context';
import React from 'react';
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
    <CappuccinoHotShotQueryServiceAPIContext.Provider
      value={new FakeDataCappuccinoHotShotQueryService()}
    >
      <SearchInputComp {...props} />
    </CappuccinoHotShotQueryServiceAPIContext.Provider>
  );
};

const meta: Meta<typeof Example> = {
  title: 'Components/Page Sections/Search Input',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {},
};
