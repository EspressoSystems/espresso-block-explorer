import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { FakeDataHotShotQueryService } from '@/service/hotshot_query_service/implementations/fake_data';
import { type Meta, type StoryObj } from '@storybook/react-vite';
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
  title: 'Block Explorer/Components/Page Sections/Search Input',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {},
};
