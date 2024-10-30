import { ProvideTickEverySecond } from '@/components';
import { OverridePathResolver } from '@/contexts/PathResolverProvider';
import { ProvideCappuccinoHotShotQueryServiceAPIContext } from 'pages/CappuccinoHotShotQueryServiceAPIContext';
import React from 'react';
import { Meta, StoryObj } from 'storybook';
import {
  ProvideCappuccinoBlockDetailDataSource,
  ProvideCappuccinoTransactionsForBlockSummaryDataSource,
} from '../CappuccinoHotShotQueryServiceAdapters';
import FakeDataNotice from '../FakeDataNotice';
import { StoryBookPathResolver } from '../StoryBookPathResolver';
import TransactionsForBlockPage from '../TransactionsForBlockPage';

interface ExampleProps {
  block: number;
  offset?: number;
}

const Example: React.FC<ExampleProps> = (props) => (
  <>
    <FakeDataNotice />
    <ProvideTickEverySecond>
      <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
        <ProvideCappuccinoHotShotQueryServiceAPIContext>
          <ProvideCappuccinoBlockDetailDataSource>
            <ProvideCappuccinoTransactionsForBlockSummaryDataSource>
              <TransactionsForBlockPage {...props} />
            </ProvideCappuccinoTransactionsForBlockSummaryDataSource>
          </ProvideCappuccinoBlockDetailDataSource>
        </ProvideCappuccinoHotShotQueryServiceAPIContext>
      </OverridePathResolver>
    </ProvideTickEverySecond>
  </>
);

const meta: Meta = {
  title: 'Pages/Transactions For Block',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const TransactionsForBlock: Story = {
  args: {
    block: 20,
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
