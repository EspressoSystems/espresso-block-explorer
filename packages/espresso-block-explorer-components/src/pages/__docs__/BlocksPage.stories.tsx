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
import BlocksPage from '../BlocksPage';
import { ProvideCappuccinoBlocksSummaryDataSource } from '../CappuccinoHotShotQueryServiceAdapters';
import { StoryBookPathResolver } from '../StoryBookPathResolver';

interface ExampleProps {
  environment: Environment;
  hotshotQueryServiceURL?: string;
  nodeValidatorWebSocketURL?: string;
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
    hotshotQueryServiceURL={hotshotQueryServiceURL}
    nodeValidatorWebSocketURL={nodeValidatorWebSocketURL}
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
};

export default meta;
type Story = StoryObj<typeof Example>;

interface BlocksPageArgs {
  startAtBlock?: undefined | number;
}

const defaultBlocksPageArgs: BlocksPageArgs = {
  startAtBlock: undefined,
};

const blockPageArgTypes = {
  startAtBlock: {
    control: 'number',
    description:
      'The block number to start displaying blocks from, if not specified, will start at the latest block',
  },
};

export const Default: Story = {
  args: {
    ...defaultBlocksPageArgs,
  },
  argTypes: {
    ...environmentArgTypes,
    ...blockPageArgTypes,
  },
};

export const Milk: Story = {
  args: {
    ...environmentArgsMilk,
    ...defaultBlocksPageArgs,
  },
  argTypes: {
    ...environmentArgTypes,
    ...blockPageArgTypes,
  },
};

export const Water: Story = {
  args: {
    ...environmentArgsWater,
    ...defaultBlocksPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...blockPageArgTypes,
  },
};

export const Decaf: Story = {
  args: {
    ...environmentArgsDecaf,
    ...defaultBlocksPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...blockPageArgTypes,
  },
};

export const Mainnet: Story = {
  args: {
    ...environmentArgsMainnet,
    ...defaultBlocksPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...blockPageArgTypes,
  },
};

export const FakeData: Story = {
  args: {
    ...environmentArgsFakeData,
    ...defaultBlocksPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...blockPageArgTypes,
  },
};
