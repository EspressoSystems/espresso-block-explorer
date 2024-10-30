import { ProvideTickEverySecond } from '@/contexts/NowProvider';
import { OverridePathResolver } from '@/contexts/PathResolverProvider';
import { ProvideCappuccinoHotShotQueryServiceAPIContext } from 'pages/CappuccinoHotShotQueryServiceAPIContext';
import React from 'react';
import { Meta, StoryObj } from 'storybook';
import { ProvideCappuccinoTransactionsSummaryDataSource } from '../CappuccinoHotShotQueryServiceAdapters';
import FakeDataNotice from '../FakeDataNotice';
import { StoryBookPathResolver } from '../StoryBookPathResolver';
import TransactionsPage from '../TransactionsPage';

interface ExampleProps {
  startAtBlock?: number;
  offset?: number;
}

const Example: React.FC<ExampleProps> = (props) => (
  <>
    <FakeDataNotice />
    <ProvideTickEverySecond>
      <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
        <ProvideCappuccinoHotShotQueryServiceAPIContext>
          <ProvideCappuccinoTransactionsSummaryDataSource>
            <TransactionsPage {...props} />
          </ProvideCappuccinoTransactionsSummaryDataSource>
        </ProvideCappuccinoHotShotQueryServiceAPIContext>
      </OverridePathResolver>
    </ProvideTickEverySecond>
  </>
);

const meta: Meta = {
  title: 'Pages/Transactions',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Transactions: Story = {
  args: {
    startAtBlock: undefined,
    offset: undefined,
  },

  argTypes: {
    startAtBlock: {
      control: 'number',
    },
    offset: {
      control: 'number',
    },
  },
};
