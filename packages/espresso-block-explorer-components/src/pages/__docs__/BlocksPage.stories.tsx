import { ProvideTickEverySecond } from '@/components';
import { OverridePathResolver } from '@/contexts/PathResolverProvider';
import { ProvideCappuccinoHotShotQueryServiceAPIContext } from 'pages/CappuccinoHotShotQueryServiceAPIContext';
import React from 'react';
import { Meta, StoryObj } from 'storybook';
import BlocksPage from '../BlocksPage';
import { ProvideCappuccinoBlocksSummaryDataSource } from '../CappuccinoHotShotQueryServiceAdapters';
import FakeDataNotice from '../FakeDataNotice';
import { StoryBookPathResolver } from '../StoryBookPathResolver';

interface ExampleProps {
  startAtBlock?: number;
}

const Example: React.FC<ExampleProps> = (props) => (
  <>
    <FakeDataNotice />
    <ProvideTickEverySecond>
      <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
        <ProvideCappuccinoHotShotQueryServiceAPIContext>
          <ProvideCappuccinoBlocksSummaryDataSource>
            <BlocksPage {...props} />
          </ProvideCappuccinoBlocksSummaryDataSource>
        </ProvideCappuccinoHotShotQueryServiceAPIContext>
      </OverridePathResolver>
    </ProvideTickEverySecond>
  </>
);

const meta: Meta = {
  title: 'Pages/Blocks',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Blocks: Story = {
  args: {
    startAtBlock: undefined,
  },

  argTypes: {
    startAtBlock: {
      control: 'number',
    },
  },
};
