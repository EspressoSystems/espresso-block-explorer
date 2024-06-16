import { ProvideTickEverySecond } from '@/components/contexts/NowProvider';
import { OverridePathResolver } from '@/contexts/PathResolverProvider';
import { ProvideCappuccinoNodeValidatorStreams } from 'pages/CappuccinoNodeValidatorServiceAdapters';
import React from 'react';
import { Meta, StoryObj } from 'storybook';
import FakeDataNotice from '../FakeDataNotice';
import NodesPage from '../NodesPage';
import { StoryBookPathResolver } from '../StoryBookPathResolver';

interface ExampleProps {}

const Example: React.FC<ExampleProps> = (props) => (
  <>
    <FakeDataNotice />
    <ProvideTickEverySecond>
      <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
        <ProvideCappuccinoNodeValidatorStreams>
          <NodesPage {...props} />
        </ProvideCappuccinoNodeValidatorStreams>
      </OverridePathResolver>
    </ProvideTickEverySecond>
  </>
);

const meta: Meta = {
  title: 'Pages/Nodes',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Nodes: Story = {
  argTypes: {},
};
