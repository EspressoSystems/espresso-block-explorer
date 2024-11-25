import { ProvideTickEverySecond } from '@/components/contexts/NowProvider';
import { NamespaceContext } from '@/components/page_sections/rollup_detail_data_table/RollUpDetailLoader';
import { OverridePathResolver } from '@/contexts/PathResolverProvider';
import { ProvideCappuccinoHotShotQueryServiceAPIContext } from 'pages/CappuccinoHotShotQueryServiceAPIContext';
import React from 'react';
import { Meta, StoryObj } from 'storybook';
import { ProvideCappuccinoRollUpDetailDataSource } from '../CappuccinoHotShotQueryServiceAdapters';
import FakeDataNotice from '../FakeDataNotice';
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
        <ProvideCappuccinoHotShotQueryServiceAPIContext>
          <ProvideCappuccinoRollUpDetailDataSource>
            <NamespaceContext.Provider value={namespace}>
              <RollUpPage {...props} />
            </NamespaceContext.Provider>
          </ProvideCappuccinoRollUpDetailDataSource>
        </ProvideCappuccinoHotShotQueryServiceAPIContext>
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
    startAtBlock: undefined,
    offset: undefined,
  },

  argTypes: {
    namespace: {
      control: 'number',
    },
    startAtBlock: {
      control: 'number',
    },
    offset: {
      control: 'number',
    },
  },
};
