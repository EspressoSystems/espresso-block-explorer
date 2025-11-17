import { ProvideTickEverySecond } from '@/components/contexts/NowProvider';
import { OverridePathResolver } from '@/contexts/PathResolverProvider';
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
import { ProvideCappuccinoHotShotQueryServiceAPIContext } from 'pages/CappuccinoHotShotQueryServiceAPIContext';
import { ProvideCappuccinoNodeValidatorStreams } from 'pages/CappuccinoNodeValidatorServiceAdapters';
import { ProvideCappuccinoNodeValidatorServiceAPIContext } from 'pages/CappuccinoNodeValidatorServiceAPIContext';
import React from 'react';
import { EnvironmentBanner } from '../../components/layout/environment_banner/environment_banner';
import NodesPage from '../NodesPage';
import { StoryBookPathResolver } from '../StoryBookPathResolver';

interface ExampleProps {
  environment: Environment;
  hotshotQueryServiceURL?: string;
  hotShotQueryServiceURLEncoded?: string;
  nodeValidatorWebSocketURL?: string;
  nodeValidatorWebSocketURLEncoded?: string;
}

const Example: React.FC<ExampleProps> = ({
  environment,
  hotshotQueryServiceURL,
  hotShotQueryServiceURLEncoded,
  nodeValidatorWebSocketURL,
  nodeValidatorWebSocketURLEncoded,
  ...rest
}) => (
  <>
    <StoryBookSpecifyEnvironmentAndContracts
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
        <ProvideCappuccinoNodeValidatorServiceAPIContext>
          <ProvideCappuccinoHotShotQueryServiceAPIContext>
            <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
              <ProvideCappuccinoNodeValidatorStreams>
                <NodesPage {...rest} />
              </ProvideCappuccinoNodeValidatorStreams>
            </OverridePathResolver>
          </ProvideCappuccinoHotShotQueryServiceAPIContext>
        </ProvideCappuccinoNodeValidatorServiceAPIContext>
      </ProvideTickEverySecond>
    </StoryBookSpecifyEnvironmentAndContracts>
  </>
);

const meta: Meta = {
  title: 'Pages/Nodes',
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
