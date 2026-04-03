import { OverridePathResolver } from '@/block_explorer/contexts/path_resolver_provider';
import { ProvideHotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { ProvideTickEverySecond } from '@/contexts/now_provider';
import { EnvironmentBanner } from '@/layout/environment_banner/environment_banner';
import { Environment } from '@/models/config/environment/environment';
import {
  environmentArgsDecaf,
  environmentArgsFakeData,
  environmentArgsLocalDevNet,
  environmentArgsMainnet,
  environmentArgsMilk,
  environmentArgsWater,
  environmentArgTypes,
  extractURLWithEncodedFallback,
} from '@/models/config/storybook/controls';
import { StoryBookSpecifyEnvironment } from '@/models/config/storybook/storybook';
import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import {
  ProvideBlockDetailDataSource,
  ProvideTransactionsForBlockSummaryDataSource,
} from '../hot_shot_query_service_adapters';
import { StoryBookPathResolver } from '../story_book_path_resolver';
import TransactionsForBlockPage from '../transactions_for_block_page';

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
    hotshotQueryServiceURL={extractURLWithEncodedFallback(
      hotshotQueryServiceURL,
    )}
    nodeValidatorWebSocketURL={extractURLWithEncodedFallback(
      nodeValidatorWebSocketURL,
    )}
  >
    <EnvironmentBanner />
    <ProvideTickEverySecond>
      <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
        <ProvideHotShotQueryServiceAPIContext>
          <ProvideBlockDetailDataSource>
            <ProvideTransactionsForBlockSummaryDataSource>
              <TransactionsForBlockPage
                {...rest}
                block={startAtBlock}
                offset={offset}
              />
            </ProvideTransactionsForBlockSummaryDataSource>
          </ProvideBlockDetailDataSource>
        </ProvideHotShotQueryServiceAPIContext>
      </OverridePathResolver>
    </ProvideTickEverySecond>
  </StoryBookSpecifyEnvironment>
);

const meta: Meta = {
  title: 'Block Explorer/Pages/Transactions For Block',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },

  argTypes: {
    ...environmentArgTypes,
    startAtBlock: {
      control: 'number',
      description: 'The block number to offset into for transactions',
    },
    offset: {
      control: 'number',
      description: 'The transaction offset within the block to display',
    },
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

export const Default: Story = {
  args: {
    ...defaultTransactionsForBlockPageArgs,
  },
};

export const Milk: Story = {
  args: {
    ...environmentArgsMilk,
    ...defaultTransactionsForBlockPageArgs,
  },
};

export const Water: Story = {
  args: {
    ...environmentArgsWater,
    ...defaultTransactionsForBlockPageArgs,
  },
};

export const Decaf: Story = {
  args: {
    ...environmentArgsDecaf,
    ...defaultTransactionsForBlockPageArgs,
  },
};

export const Mainnet: Story = {
  args: {
    ...environmentArgsMainnet,
    ...defaultTransactionsForBlockPageArgs,
  },
};

export const FakeData: Story = {
  args: {
    ...environmentArgsFakeData,
    ...defaultTransactionsForBlockPageArgs,
  },
};

export const LocalDevNet: Story = {
  args: {
    ...environmentArgsLocalDevNet,
    ...defaultTransactionsForBlockPageArgs,
  },
};
