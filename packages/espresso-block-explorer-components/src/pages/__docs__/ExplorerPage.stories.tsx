import React from 'react';
import { Meta, StoryObj } from 'storybook';
import { ProvideTickEverySecond } from '../../components/contexts/NowProvider';
import { OverridePathResolver } from '../../components/contexts/PathResolverProvider';
import { ExplorerSummaryLoader } from '../../components/page_sections/explorer_summary/ExplorerSummaryLoader';
import { ProvideCappuccinoExplorerSummary } from '../CappuccinoHotShotQueryServiceAdapters';
import ExplorerPage from '../ExplorerPage';
import FakeDataNotice from '../FakeDataNotice';
import { StoryBookPathResolver } from '../StoryBookPathResolver';

interface ExampleProps {
  block: number;
}

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
  args: {
    block: 0,
  },
};
