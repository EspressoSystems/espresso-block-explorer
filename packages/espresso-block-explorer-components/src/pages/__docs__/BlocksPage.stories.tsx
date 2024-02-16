import React from 'react';
import { Meta, StoryObj } from 'storybook';

import { ProvideTickEverySecond } from '../../components';
import { OverridePathResolver } from '../../components/contexts/PathResolverProvider';
import BlocksPage from '../BlocksPage';
import FakeDataNotice from '../FakeDataNotice';
import ProvideFakeBlocksSummaryDataSource from '../ProvideFakeBlocksSummaryDataSource';
import { StoryBookPathResolver } from '../StoryBookPathResolver';

interface ExampleProps {
  startAtBlock?: number;
}

const Example: React.FC<ExampleProps> = (props) => (
  <>
    <FakeDataNotice />
    <ProvideTickEverySecond>
      <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
        <ProvideFakeBlocksSummaryDataSource>
          <BlocksPage {...props} />
        </ProvideFakeBlocksSummaryDataSource>
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
