import { BlockNumberContext } from '@/components/page_sections/block_detail_content/BlockDetailContentLoader';
import { ProvideTickEverySecond } from '@/contexts/NowProvider';
import { OverridePathResolver } from '@/contexts/PathResolverProvider';
import { ProvideCappuccinoHotShotQueryServiceAPIContext } from 'pages/CappuccinoHotShotQueryServiceAPIContext';
import React from 'react';
import { Meta, StoryObj } from 'storybook';
import BlockPage from '../BlockPage';
import { ProvideCappuccinoBlockDetailDataSource } from '../CappuccinoHotShotQueryServiceAdapters';
import FakeDataNotice from '../FakeDataNotice';
import { StoryBookPathResolver } from '../StoryBookPathResolver';

interface ExampleProps {
  block: number;
}

const Example: React.FC<ExampleProps> = ({ block, ...props }) => (
  <>
    <FakeDataNotice />
    <ProvideTickEverySecond>
      <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
        <ProvideCappuccinoHotShotQueryServiceAPIContext>
          <BlockNumberContext.Provider value={block}>
            <ProvideCappuccinoBlockDetailDataSource>
              <BlockPage {...props} />
            </ProvideCappuccinoBlockDetailDataSource>
          </BlockNumberContext.Provider>
        </ProvideCappuccinoHotShotQueryServiceAPIContext>
      </OverridePathResolver>
    </ProvideTickEverySecond>
  </>
);

const meta: Meta = {
  title: 'Pages/Block',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Block: Story = {
  args: {
    block: 0,
  },
};
