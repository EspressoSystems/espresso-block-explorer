import { EnvironmentBanner } from '@/components/layout/environment_banner/environment_banner';
import { BlockNumberContext } from '@/components/page_sections/block_detail_content/BlockDetailContentLoader';
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
import BlockPage from '../BlockPage';
import { ProvideCappuccinoBlockDetailDataSource } from '../CappuccinoHotShotQueryServiceAdapters';
import { StoryBookPathResolver } from '../StoryBookPathResolver';

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
    hotshotQueryServiceURL={hotshotQueryServiceURL}
    nodeValidatorWebSocketURL={nodeValidatorWebSocketURL}
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
};

export default meta;
type Story = StoryObj<typeof Example>;

interface BlockPageArgs {
  block: number;
}

const defaultBlockPageArgs: BlockPageArgs = {
  block: 0,
};

const blockPageArgTypes = {
  block: {
    control: 'number',
    description: 'The block number to show details for',
  },
};

export const Default: Story = {
  args: {
    ...defaultBlockPageArgs,
  },
  argTypes: {
    ...environmentArgTypes,
    ...blockPageArgTypes,
  },
};

export const Milk: Story = {
  args: {
    ...environmentArgsMilk,
    ...defaultBlockPageArgs,
  },
  argTypes: {
    ...environmentArgTypes,
    ...blockPageArgTypes,
  },
};

export const Water: Story = {
  args: {
    ...environmentArgsWater,
    ...defaultBlockPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...blockPageArgTypes,
  },
};

export const Decaf: Story = {
  args: {
    ...environmentArgsDecaf,
    ...defaultBlockPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...blockPageArgTypes,
  },
};

export const Mainnet: Story = {
  args: {
    ...environmentArgsMainnet,
    ...defaultBlockPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...blockPageArgTypes,
  },
};

export const FakeData: Story = {
  args: {
    ...environmentArgsFakeData,
    ...defaultBlockPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...blockPageArgTypes,
  },
};
