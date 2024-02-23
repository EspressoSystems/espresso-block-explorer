import React from 'react';
import { Meta, StoryObj } from 'storybook';
import { ProvideTickEverySecond } from '../../components';
import { OverridePathResolver } from '../../components/contexts/PathResolverProvider';
import FakeDataNotice from '../FakeDataNotice';
import {
  ProvideGibraltarBlockDetailDataSource,
  ProvideGibraltarTransactionsForBlockSummaryDataSource,
} from '../GibraltarHotShotQueryServiceAdapters';
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
        <ProvideGibraltarBlockDetailDataSource>
          <ProvideGibraltarTransactionsForBlockSummaryDataSource>
            <TransactionsForBlockPage {...props} />
          </ProvideGibraltarTransactionsForBlockSummaryDataSource>
        </ProvideGibraltarBlockDetailDataSource>
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
    block: 0,
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
