import React from 'react';
import { Meta, StoryObj } from 'storybook';
import { ProvideTickEverySecond } from '../../components';
import { OverridePathResolver } from '../../components/contexts/PathResolverProvider';
import { TransactionCommitContext } from '../../components/page_sections/transaction_detail_content/TransactionDetailContent';
import { parseHexString } from '../../types/hex';
import FakeDataNotice from '../FakeDataNotice';
import ProvideFakeTransactionDetailDataSource from '../ProvideFakeTransactionDetailDataSource';
import { StoryBookPathResolver } from '../StoryBookPathResolver';
import TransactionPage from '../TransactionPage';

interface ExampleProps {
  hash: string;
}

const Example: React.FC<ExampleProps> = ({ hash, ...props }) => (
  <>
    <FakeDataNotice />
    <ProvideTickEverySecond>
      <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
        <TransactionCommitContext.Provider value={parseHexString(hash)}>
          <ProvideFakeTransactionDetailDataSource>
            <TransactionPage {...props} />
          </ProvideFakeTransactionDetailDataSource>
        </TransactionCommitContext.Provider>
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
    hash: '0xdeadbeef',
  },
};
