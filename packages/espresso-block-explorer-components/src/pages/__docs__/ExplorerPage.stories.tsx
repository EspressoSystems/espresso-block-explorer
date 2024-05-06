import { ExplorerSummaryLoader } from '@/components/page_sections/explorer_summary/ExplorerSummaryLoader';
import { ProvideTickEverySecond } from '@/contexts/NowProvider';
import { OverridePathResolver } from '@/contexts/PathResolverProvider';
import React from 'react';
import { Meta, StoryObj } from 'storybook';
import { ProvideCappuccinoExplorerSummary } from '../CappuccinoHotShotQueryServiceAdapters';
import ExplorerPage from '../ExplorerPage';
import FakeDataNotice from '../FakeDataNotice';
import { StoryBookPathResolver } from '../StoryBookPathResolver';

interface ExampleProps {}

const Example: React.FC<ExampleProps> = (props) => (
  <>
    <FakeDataNotice />
    <ProvideTickEverySecond>
      <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
        <ProvideCappuccinoExplorerSummary>
          <ExplorerSummaryLoader>
            <ExplorerPage {...props} />
          </ExplorerSummaryLoader>
        </ProvideCappuccinoExplorerSummary>
      </OverridePathResolver>
    </ProvideTickEverySecond>
  </>
);

const meta: Meta = {
  title: 'Pages/Explorer',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Explorer: Story = {
  args: {},
};
