import { ProvideTickEverySecond } from '@/components/contexts/now_provider';
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
import BlocksPage from '../blocks_page';
import { ProvideCappuccinoBlocksSummaryDataSource } from '../cappuccino_hot_shot_query_service_adapters';
import { StoryBookPathResolver } from '../story_book_path_resolver';

interface ExampleProps {
  environment: Environment;
  hotshotQueryServiceURL?: string;
  hotShotQueryServiceURLEncoded?: string;
  nodeValidatorWebSocketURL?: string;
  nodeValidatorWebSocketURLEncoded?: string;
  startAtBlock?: number;
}

const Example: React.FC<ExampleProps> = ({
  environment,
  hotshotQueryServiceURL,
  nodeValidatorWebSocketURL,
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
          <ProvideCappuccinoBlocksSummaryDataSource>
            <BlocksPage {...rest} />
          </ProvideCappuccinoBlocksSummaryDataSource>
        </ProvideCappuccinoHotShotQueryServiceAPIContext>
      </OverridePathResolver>
    </ProvideTickEverySecond>
  </StoryBookSpecifyEnvironment>
);

const meta: Meta = {
  title: 'Pages/Blocks',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    ...environmentArgTypes,
    startAtBlock: {
      control: 'number',
      description:
        'The block number to start displaying blocks from, if not specified, will start at the latest block',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

interface BlocksPageArgs {
  startAtBlock?: undefined | number;
}

const defaultBlocksPageArgs: BlocksPageArgs = {
  startAtBlock: undefined,
};

export const Default: Story = {
  args: {
    ...defaultBlocksPageArgs,
  },
};

export const Milk: Story = {
  args: {
    ...environmentArgsMilk,
    ...defaultBlocksPageArgs,
  },
};

export const Water: Story = {
  args: {
    ...environmentArgsWater,
    ...defaultBlocksPageArgs,
  },
};

export const Decaf: Story = {
  args: {
    ...environmentArgsDecaf,
    ...defaultBlocksPageArgs,
  },
};

export const Mainnet: Story = {
  args: {
    ...environmentArgsMainnet,
    ...defaultBlocksPageArgs,
  },
};

export const FakeData: Story = {
  args: {
    ...environmentArgsFakeData,
    ...defaultBlocksPageArgs,
  },
};

export const LocalDevNet: Story = {
  args: {
    ...environmentArgsLocalDevNet,
    ...defaultBlocksPageArgs,
  },
};
