import React from 'react';
import { Meta, StoryObj } from 'storybook';
import { ProvideTickEverySecond } from '../../components';
import { OverridePathResolver } from '../../components/contexts/PathResolverProvider';
import FakeDataNotice from '../FakeDataNotice';
import ProvideFakeRollUpsSummaryDataSource from '../ProvideFakeRollUpsSummaryDataSource';
import RollUpsPage from '../RollUpsPage';
import { StoryBookPathResolver } from '../StoryBookPathResolver';

interface ExampleProps {}

const Example: React.FC<ExampleProps> = (props) => (
  <>
    <FakeDataNotice />
    <ProvideTickEverySecond>
      <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
        <ProvideFakeRollUpsSummaryDataSource>
          <RollUpsPage {...props} />
        </ProvideFakeRollUpsSummaryDataSource>
      </OverridePathResolver>
    </ProvideTickEverySecond>
  </>
);

const meta: Meta = {
  title: 'Pages/Rollups',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Rollups: Story = {
  args: {},
};
