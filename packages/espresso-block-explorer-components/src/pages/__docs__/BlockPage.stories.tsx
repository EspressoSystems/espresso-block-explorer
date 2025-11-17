import { EnvironmentBanner } from '@/components/layout/environment_banner/environment_banner';
import { BlockNumberContext } from '@/components/page_sections/block_detail_content/BlockDetailContentLoader';
import { ProvideTickEverySecond } from '@/contexts/NowProvider';
import { OverridePathResolver } from '@/contexts/PathResolverProvider';
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
import { ProvideCappuccinoHotShotQueryServiceAPIContext } from 'pages/CappuccinoHotShotQueryServiceAPIContext';
import React from 'react';
import BlockPage from '../BlockPage';
import { ProvideCappuccinoBlockDetailDataSource } from '../CappuccinoHotShotQueryServiceAdapters';
import { StoryBookPathResolver } from '../StoryBookPathResolver';

interface ExampleProps {
  environment: Environment;
  hotshotQueryServiceURL?: string;
  hotShotQueryServiceURLEncoded?: string;
  nodeValidatorWebSocketURL?: string;
  nodeValidatorWebSocketURLEncoded?: string;
  block: number;
}

const Example: React.FC<ExampleProps> = ({
  environment,
  hotshotQueryServiceURL,
  hotShotQueryServiceURLEncoded,
  nodeValidatorWebSocketURL,
  nodeValidatorWebSocketURLEncoded,
  block,
  ...rest
}) => (
  <StoryBookSpecifyEnvironment
    environment={environment}
    hotshotQueryServiceURL={extractURLWithEncodedFallback(
      hotshotQueryServiceURL,
      hotShotQueryServiceURLEncoded,
    )}
    nodeValidatorWebSocketURL={extractURLWithEncodedFallback(
      nodeValidatorWebSocketURL,
      nodeValidatorWebSocketURLEncoded,
    )}
  >
    <EnvironmentBanner />
    <ProvideTickEverySecond>
      <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
        <ProvideCappuccinoHotShotQueryServiceAPIContext>
          <BlockNumberContext.Provider value={block}>
            <ProvideCappuccinoBlockDetailDataSource>
              <BlockPage {...rest} />
            </ProvideCappuccinoBlockDetailDataSource>
          </BlockNumberContext.Provider>
        </ProvideCappuccinoHotShotQueryServiceAPIContext>
      </OverridePathResolver>
    </ProvideTickEverySecond>
  </StoryBookSpecifyEnvironment>
);

const meta: Meta = {
  title: 'Pages/Block',
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
