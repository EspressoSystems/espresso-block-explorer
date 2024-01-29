import React from 'react';
import { Meta, StoryObj } from 'storybook';
import { ProvideTickEverySecond } from '../../components';
import { OverridePathResolver } from '../../components/contexts/PathResolverProvider';
import { NamespaceContext } from '../../components/page_sections/rollup_detail_data_table/RollUpDetailDataTable';
import FakeDataNotice from '../FakeDataNotice';
import ProvideFakeRollUpDetailDataSource from '../ProvideFakeRollUpDetailDataSource';
import RollUpPage from '../RollUpPage';
import { StoryBookPathResolver } from '../StoryBookPathResolver';

interface ExampleProps {
  namespace: number;
}

const Example: React.FC<ExampleProps> = ({ namespace, ...props }) => (
  <>
    <FakeDataNotice />
    <ProvideTickEverySecond>
      <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
        <NamespaceContext.Provider value={namespace}>
          <ProvideFakeRollUpDetailDataSource>
            <RollUpPage {...props} />
          </ProvideFakeRollUpDetailDataSource>
        </NamespaceContext.Provider>
      </OverridePathResolver>
    </ProvideTickEverySecond>
  </>
);

const meta: Meta = {
  title: 'Pages/Rollup',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Rollup: Story = {
  args: {
    namespace: 0xc0ffee1,
  },
};
