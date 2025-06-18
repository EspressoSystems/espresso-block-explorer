import { ProvideTickEverySecond } from '@/contexts/NowProvider';
import { OverridePathResolver } from '@/contexts/PathResolverProvider';
import { Environment } from '@/models/config/environment/environment';
import {
  environmentArgsDecaf,
  environmentArgsFakeData,
  environmentArgsMainnet,
  environmentArgsMilk,
  environmentArgsWater,
  environmentArgTypes,
} from '@/models/config/storybook/controls';
import { StoryBookSpecifyEnvironment } from '@/models/config/storybook/storybook';
import { ProvideCappuccinoHotShotQueryServiceAPIContext } from 'pages/CappuccinoHotShotQueryServiceAPIContext';
import React from 'react';
import { Meta, StoryObj } from 'storybook';
import { ProvideCappuccinoTransactionsSummaryDataSource } from '../CappuccinoHotShotQueryServiceAdapters';
import FakeDataNotice from '../FakeDataNotice';
import { StoryBookPathResolver } from '../StoryBookPathResolver';
import TransactionsPage from '../TransactionsPage';

interface ExampleProps {
  environment: Environment;
  hotshotQueryServiceURL?: string;
  nodeValidatorWebSocketURL?: string;
  startAtBlock?: number;
  offset?: number;
}

const Example: React.FC<ExampleProps> = ({
  environment,
  hotshotQueryServiceURL,
  nodeValidatorWebSocketURL,
  startAtBlock,
  offset,
  ...rest
}) => (
  <StoryBookSpecifyEnvironment
    environment={environment}
    hotshotQueryServiceURL={hotshotQueryServiceURL}
    nodeValidatorWebSocketURL={nodeValidatorWebSocketURL}
  >
    <FakeDataNotice />
    <ProvideTickEverySecond>
      <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
        <ProvideCappuccinoHotShotQueryServiceAPIContext>
          <ProvideCappuccinoTransactionsSummaryDataSource>
            <TransactionsPage
              {...rest}
              startAtBlock={startAtBlock}
              offset={offset}
            />
          </ProvideCappuccinoTransactionsSummaryDataSource>
        </ProvideCappuccinoHotShotQueryServiceAPIContext>
      </OverridePathResolver>
    </ProvideTickEverySecond>
  </StoryBookSpecifyEnvironment>
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

interface TransactionsPageArgs {
  startAtBlock: undefined | number;
  offset: undefined | number;
}

const defaultTransactionsPageArgs: TransactionsPageArgs = {
  startAtBlock: undefined,
  offset: undefined,
};

const transactionsPageArgTypes = {
  startAtBlock: {
    control: 'number',
    description: 'The block number to offset into for transactions',
  },
  offset: {
    control: 'number',
    description: 'The transaction offset within the block to display',
  },
};

export const Default: Story = {
  args: {
    ...defaultTransactionsPageArgs,
  },
  argTypes: {
    ...environmentArgTypes,
    ...transactionsPageArgTypes,
  },
};

export const Milk: Story = {
  args: {
    ...environmentArgsMilk,
    ...defaultTransactionsPageArgs,
  },
  argTypes: {
    ...environmentArgTypes,
    ...transactionsPageArgTypes,
  },
};

export const Water: Story = {
  args: {
    ...environmentArgsWater,
    ...defaultTransactionsPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...transactionsPageArgTypes,
  },
};

export const Decaf: Story = {
  args: {
    ...environmentArgsDecaf,
    ...defaultTransactionsPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...transactionsPageArgTypes,
  },
};

export const Mainnet: Story = {
  args: {
    ...environmentArgsMainnet,
    ...defaultTransactionsPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...transactionsPageArgTypes,
  },
};

export const FakeData: Story = {
  args: {
    ...environmentArgsFakeData,
    ...defaultTransactionsPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...transactionsPageArgTypes,
  },
};
