import { BlockNumberContext } from '@/components/page_sections/block_detail_content';
import { TransactionOffsetContext } from '@/components/page_sections/transaction_detail_content/transaction_detail_loader';
import { ProvideTickEverySecond } from '@/contexts/now_provider';
import { OverridePathResolver } from '@/contexts/path_resolver_provider';
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
import { ProvideCappuccinoHotShotQueryServiceAPIContext } from 'pages/cappuccino_hot_shot_query_service_api_context';
import React from 'react';
import { EnvironmentBanner } from '../../components/layout/environment_banner/environment_banner';
import { ProvideCappuccinoTransactionDetailDataSource } from '../cappuccino_hot_shot_query_service_adapters';
import { StoryBookPathResolver } from '../story_book_path_resolver';
import TransactionPage from '../transaction_page';

interface ExampleProps {
  environment: Environment;
  hotshotQueryServiceURL?: string;
  nodeValidatorWebSocketURL?: string;
  height: number;
  offset: number;
}

const Example: React.FC<ExampleProps> = ({
  environment,
  hotshotQueryServiceURL,
  nodeValidatorWebSocketURL,
  height,
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
        <ProvideCappuccinoHotShotQueryServiceAPIContext>
          <BlockNumberContext.Provider value={height}>
            <TransactionOffsetContext.Provider value={offset}>
              <ProvideCappuccinoTransactionDetailDataSource>
                <TransactionPage {...rest} />
              </ProvideCappuccinoTransactionDetailDataSource>
            </TransactionOffsetContext.Provider>
          </BlockNumberContext.Provider>
        </ProvideCappuccinoHotShotQueryServiceAPIContext>
      </OverridePathResolver>
    </ProvideTickEverySecond>
  </StoryBookSpecifyEnvironment>
);

const meta: Meta = {
  title: 'Pages/Transaction',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    ...environmentArgTypes,
    height: {
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

interface TransactionPageArgs {
  height: number;
  offset: number;
}

const defaultTransactionPageArgs: TransactionPageArgs = {
  height: 20,
  offset: 0,
};

export const Default: Story = {
  args: {
    ...defaultTransactionPageArgs,
  },
};

export const Milk: Story = {
  args: {
    ...environmentArgsMilk,
    ...defaultTransactionPageArgs,
  },
};

export const Water: Story = {
  args: {
    ...environmentArgsWater,
    ...defaultTransactionPageArgs,
  },
};

export const Decaf: Story = {
  args: {
    ...environmentArgsDecaf,
    ...defaultTransactionPageArgs,
  },
};

export const Mainnet: Story = {
  args: {
    ...environmentArgsMainnet,
    ...defaultTransactionPageArgs,
  },
};

export const FakeData: Story = {
  args: {
    ...environmentArgsFakeData,
    ...defaultTransactionPageArgs,
  },
};

export const LocalDevNet: Story = {
  args: {
    ...environmentArgsLocalDevNet,
    ...defaultTransactionPageArgs,
  },
};
