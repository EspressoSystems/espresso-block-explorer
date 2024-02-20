import React from 'react';
import { Meta, StoryObj } from 'storybook';
import { ProvideTickEverySecond } from '../../components';
import { OverridePathResolver } from '../../components/contexts/PathResolverProvider';
import { ProvideGibraltarTransactionsSummaryDataSource } from '../GibraltarHotShotQueryServiceAdapters';
import { StoryBookPathResolver } from '../StoryBookPathResolver';
import TransactionsPage from '../TransactionsPage';
import FakeDataNotice from '../FakeDataNotice';

interface ExampleProps {}

const Example: React.FC<ExampleProps> = (props) => (
  <>
    <FakeDataNotice />
    <ProvideTickEverySecond>
      <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
        <ProvideGibraltarTransactionsSummaryDataSource>
          <TransactionsPage {...props} />
        </ProvideGibraltarTransactionsSummaryDataSource>
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
