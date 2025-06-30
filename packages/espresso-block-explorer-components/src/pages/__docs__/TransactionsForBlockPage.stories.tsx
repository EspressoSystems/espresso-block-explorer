import { ProvideTickEverySecond } from '@/components/contexts/NowProvider';
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
import { EnvironmentBanner } from '../../components/layout/environment_banner/environment_banner';
import {
  ProvideCappuccinoBlockDetailDataSource,
  ProvideCappuccinoTransactionsForBlockSummaryDataSource,
} from '../CappuccinoHotShotQueryServiceAdapters';
import { StoryBookPathResolver } from '../StoryBookPathResolver';
import TransactionsForBlockPage from '../TransactionsForBlockPage';

interface ExampleProps {
  environment: Environment;
  hotshotQueryServiceURL?: string;
  nodeValidatorWebSocketURL?: string;
  startAtBlock: number;
  offset: number;
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
    <EnvironmentBanner />
    <ProvideTickEverySecond>
      <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
        <ProvideCappuccinoHotShotQueryServiceAPIContext>
          <ProvideCappuccinoBlockDetailDataSource>
            <ProvideCappuccinoTransactionsForBlockSummaryDataSource>
              <TransactionsForBlockPage
                {...rest}
                block={startAtBlock}
                offset={offset}
              />
            </ProvideCappuccinoTransactionsForBlockSummaryDataSource>
          </ProvideCappuccinoBlockDetailDataSource>
        </ProvideCappuccinoHotShotQueryServiceAPIContext>
      </OverridePathResolver>
    </ProvideTickEverySecond>
  </StoryBookSpecifyEnvironment>
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

interface TransactionsForBlockPageArgs {
  startAtBlock: number;
  offset: undefined | number;
}

const defaultTransactionsForBlockPageArgs: TransactionsForBlockPageArgs = {
  startAtBlock: 20,
  offset: undefined,
};

const transactionsForBlockPageArgTypes = {
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
    ...defaultTransactionsForBlockPageArgs,
  },
  argTypes: {
    ...environmentArgTypes,
    ...transactionsForBlockPageArgTypes,
  },
};

export const Milk: Story = {
  args: {
    ...environmentArgsMilk,
    ...defaultTransactionsForBlockPageArgs,
  },
  argTypes: {
    ...environmentArgTypes,
    ...transactionsForBlockPageArgTypes,
  },
};

export const Water: Story = {
  args: {
    ...environmentArgsWater,
    ...defaultTransactionsForBlockPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...transactionsForBlockPageArgTypes,
  },
};

export const Decaf: Story = {
  args: {
    ...environmentArgsDecaf,
    ...defaultTransactionsForBlockPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...transactionsForBlockPageArgTypes,
  },
};

export const Mainnet: Story = {
  args: {
    ...environmentArgsMainnet,
    ...defaultTransactionsForBlockPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...transactionsForBlockPageArgTypes,
  },
};

export const FakeData: Story = {
  args: {
    ...environmentArgsFakeData,
    ...defaultTransactionsForBlockPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...transactionsForBlockPageArgTypes,
  },
};
