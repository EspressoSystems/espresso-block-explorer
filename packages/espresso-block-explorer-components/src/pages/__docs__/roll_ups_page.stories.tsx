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
import { ProvideCappuccinoRollUpsSummaryDataSource } from '../cappuccino_hot_shot_query_service_adapters';
import RollUpsPage from '../roll_ups_page';
import { StoryBookPathResolver } from '../story_book_path_resolver';

interface ExampleProps {
  environment: Environment;
  hotshotQueryServiceURL?: string;
  nodeValidatorWebSocketURL?: string;
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
          <ProvideCappuccinoRollUpsSummaryDataSource>
            <RollUpsPage {...rest} />
          </ProvideCappuccinoRollUpsSummaryDataSource>
        </ProvideCappuccinoHotShotQueryServiceAPIContext>
      </OverridePathResolver>
    </ProvideTickEverySecond>
  </StoryBookSpecifyEnvironment>
);

const meta: Meta = {
  title: 'Pages/Rollups',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    ...environmentArgTypes,
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

interface RollUpsPageArgs {}

const defaultRollUpsPageArgs: RollUpsPageArgs = {};

export const Default: Story = {
  args: {
    ...defaultRollUpsPageArgs,
  },
};

export const Milk: Story = {
  args: {
    ...environmentArgsMilk,
    ...defaultRollUpsPageArgs,
  },
};

export const Water: Story = {
  args: {
    ...environmentArgsWater,
    ...defaultRollUpsPageArgs,
  },
};

export const Decaf: Story = {
  args: {
    ...environmentArgsDecaf,
    ...defaultRollUpsPageArgs,
  },
};

export const Mainnet: Story = {
  args: {
    ...environmentArgsMainnet,
    ...defaultRollUpsPageArgs,
  },
};

export const FakeData: Story = {
  args: {
    ...environmentArgsFakeData,
    ...defaultRollUpsPageArgs,
  },
};

export const LocalDevNet: Story = {
  args: {
    ...environmentArgsLocalDevNet,
    ...defaultRollUpsPageArgs,
  },
};
