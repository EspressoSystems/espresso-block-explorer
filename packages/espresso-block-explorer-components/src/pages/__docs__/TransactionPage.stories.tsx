import { BlockNumberContext } from '@/components/page_sections/block_detail_content';
import { TransactionOffsetContext } from '@/components/page_sections/transaction_detail_content/TransactionDetailLoader';
import { ProvideTickEverySecond } from '@/contexts/NowProvider';
import { OverridePathResolver } from '@/contexts/PathResolverProvider';
import React from 'react';
import { Meta, StoryObj } from 'storybook';
import { ProvideCappuccinoTransactionDetailDataSource } from '../CappuccinoHotShotQueryServiceAdapters';
import FakeDataNotice from '../FakeDataNotice';
import { StoryBookPathResolver } from '../StoryBookPathResolver';
import TransactionPage from '../TransactionPage';

interface ExampleProps {
  height: number;
  offset: number;
}

const Example: React.FC<ExampleProps> = ({ height, offset, ...props }) => (
  <>
    <FakeDataNotice />
    <ProvideTickEverySecond>
      <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
        <BlockNumberContext.Provider value={height}>
          <TransactionOffsetContext.Provider value={offset}>
            <ProvideCappuccinoTransactionDetailDataSource>
              <TransactionPage {...props} />
            </ProvideCappuccinoTransactionDetailDataSource>
          </TransactionOffsetContext.Provider>
        </BlockNumberContext.Provider>
      </OverridePathResolver>
    </ProvideTickEverySecond>
  </>
);

const meta: Meta = {
  title: 'Pages/Transaction',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Transaction: Story = {
  args: {
    height: 20,
    offset: 0,
  },
};
