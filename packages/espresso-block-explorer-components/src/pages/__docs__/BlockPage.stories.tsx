import React from 'react';
import { Meta, StoryObj } from 'storybook';

import { ProvideTickEverySecond } from '../../components/contexts/NowProvider';
import { OverridePathResolver } from '../../components/contexts/PathResolverProvider';
import { BlockNumberContext } from '../../components/page_sections/block_detail_content/BlockDetailContent';
import BlockPage from '../BlockPage';
import FakeDataNotice from '../FakeDataNotice';
import ProvideFakeBlockDetailDataSource from '../ProvideFakeBlockDetailDataSource';
import { StoryBookPathResolver } from '../StoryBookPathResolver';

interface ExampleProps {
  block: number;
}

const Example: React.FC<ExampleProps> = ({ block, ...props }) => (
  <>
    <FakeDataNotice />
    <ProvideTickEverySecond>
      <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
        <BlockNumberContext.Provider value={block}>
          <ProvideFakeBlockDetailDataSource>
            <BlockPage {...props} />
          </ProvideFakeBlockDetailDataSource>
        </BlockNumberContext.Provider>
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
