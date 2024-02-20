import React from 'react';
import { Meta, StoryObj } from 'storybook';
import { ProvideTickEverySecond } from '../../components/contexts/NowProvider';
import { OverridePathResolver } from '../../components/contexts/PathResolverProvider';
import { BlockNumberContext } from '../../components/page_sections/block_detail_content';
import { TransactionOffsetContext } from '../../components/page_sections/transaction_detail_content/TransactionDetailLoader';
import FakeDataNotice from '../FakeDataNotice';
import { ProvideGibraltarTransactionDetailDataSource } from '../GibraltarHotShotQueryServiceAdapters';
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
            <ProvideGibraltarTransactionDetailDataSource>
              <TransactionPage {...props} />
            </ProvideGibraltarTransactionDetailDataSource>
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
    height: 0,
    offset: 0,
  },
};
