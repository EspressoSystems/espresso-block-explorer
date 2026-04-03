import { OverridePathResolver } from '@/block_explorer/contexts/path_resolver_provider';
import { ProvideHotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { ProvideNodeValidatorServiceAPIContext } from '@/contexts/node_validator_service_api_context';
import { ProvideTickEverySecond } from '@/contexts/now_provider';
import { EnvironmentBanner } from '@/layout/environment_banner/environment_banner';
import { Environment } from '@/models/config/environment/environment';
import {
  environmentArgsDecaf,
  environmentArgsFakeData,
  environmentArgsLocalDevNet,
  environmentArgsMainnet,
  environmentArgsMilk,
  environmentArgsMilkWithContracts,
  environmentArgsWater,
  environmentArgTypes,
  extractURLWithEncodedFallback,
} from '@/models/config/storybook/controls';
import { StoryBookSpecifyEnvironmentAndContracts } from '@/models/config/storybook/storybook';
import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { ProvideNodeValidatorStreams } from '../node_validator_service_adapters';
import NodesPage from '../nodes_page';
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
  <>
    <StoryBookSpecifyEnvironmentAndContracts
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
        <ProvideNodeValidatorServiceAPIContext>
          <ProvideHotShotQueryServiceAPIContext>
            <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
              <ProvideNodeValidatorStreams>
                <NodesPage {...rest} />
              </ProvideNodeValidatorStreams>
            </OverridePathResolver>
          </ProvideHotShotQueryServiceAPIContext>
        </ProvideNodeValidatorServiceAPIContext>
      </ProvideTickEverySecond>
    </StoryBookSpecifyEnvironmentAndContracts>
  </>
);

const meta: Meta = {
  title: 'Block Explorer/Pages/Nodes',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    environment: Environment.fakeData,
    hotshotQueryServiceURL: '',
    nodeValidatorWebSocketURL: '',
  },
  argTypes: environmentArgTypes,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {};

export const Milk: Story = {
  args: environmentArgsMilk,
};

export const Water: Story = {
  args: environmentArgsWater,
};

export const Decaf: Story = {
  args: environmentArgsDecaf,
};

export const Mainnet: Story = {
  args: environmentArgsMainnet,
};

export const FakeData: Story = {
  args: environmentArgsFakeData,
};

export const LocalDevNet: Story = {
  args: environmentArgsLocalDevNet,
};

export const LocalTestingMilk: Story = {
  args: {
    ...environmentArgsMilkWithContracts,
    nodeValidatorWebSocketURL: 'ws://localhost:9000/v0/',
  },
};
