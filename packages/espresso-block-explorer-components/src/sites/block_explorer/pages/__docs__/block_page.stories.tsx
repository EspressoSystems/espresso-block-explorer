import { BlockNumberContext } from '@/block_explorer/components/page_sections/block_detail_content/block_detail_content_loader';
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
import BlockPage from '../block_page';
import { ProvideBlockDetailDataSource } from '../hot_shot_query_service_adapters';
import { StoryBookPathResolver } from '../story_book_path_resolver';

interface ExampleProps {
  environment: Environment;
  hotshotQueryServiceURL?: string;
  nodeValidatorWebSocketURL?: string;
  block: number;
}

const Example: React.FC<ExampleProps> = ({
  environment,
  hotshotQueryServiceURL,
  nodeValidatorWebSocketURL,
  block,
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
          <BlockNumberContext.Provider value={block}>
            <ProvideBlockDetailDataSource>
              <BlockPage {...rest} />
            </ProvideBlockDetailDataSource>
          </BlockNumberContext.Provider>
        </ProvideHotShotQueryServiceAPIContext>
      </OverridePathResolver>
    </ProvideTickEverySecond>
  </StoryBookSpecifyEnvironment>
);

const meta: Meta = {
  title: 'Block Explorer/Pages/Block',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    ...environmentArgTypes,
    block: {
      control: 'number',
      description: 'The block number to show details for',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

interface BlockPageArgs {
  block: number;
}

const defaultBlockPageArgs: BlockPageArgs = {
  block: 0,
};

export const Default: Story = {
  args: {
    ...defaultBlockPageArgs,
  },
};

export const Milk: Story = {
  args: {
    ...environmentArgsMilk,
    ...defaultBlockPageArgs,
  },
};

export const Water: Story = {
  args: {
    ...environmentArgsWater,
    ...defaultBlockPageArgs,
  },
};

export const Decaf: Story = {
  args: {
    ...environmentArgsDecaf,
    ...defaultBlockPageArgs,
  },
};

export const Mainnet: Story = {
  args: {
    ...environmentArgsMainnet,
    ...defaultBlockPageArgs,
  },
};

export const FakeData: Story = {
  args: {
    ...environmentArgsFakeData,
    ...defaultBlockPageArgs,
  },
};

export const LocalDevNet: Story = {
  args: {
    ...environmentArgsLocalDevNet,
    ...defaultBlockPageArgs,
  },
};
