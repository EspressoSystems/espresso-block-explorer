import { FakeDataCappuccinoHotShotQueryService } from '@/service/hotshot_query_service/cappuccino/implementations/fake_data';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CappuccinoHotShotQueryServiceAPIContext } from 'pages/CappuccinoHotShotQueryServiceAPIContext';
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
