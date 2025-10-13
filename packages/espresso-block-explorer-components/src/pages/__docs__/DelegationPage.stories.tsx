import { ProvideTickEverySecond } from '@/components/contexts/NowProvider';
import { OverridePathResolver } from '@/contexts/PathResolverProvider';
import { Environment } from '@/models/config/environment/environment';
import {
  environmentArgsDecafWithContracts,
  environmentArgsFakeDataWithContracts,
  environmentArgsMainnetWithContracts,
  environmentArgsMilkWithContracts,
  environmentArgsWaterWithContracts,
  environmentArgTypesWithContracts,
} from '@/models/config/storybook/controls';
import { StoryBookSpecifyEnvironmentAndContracts } from '@/models/config/storybook/storybook';
import { Meta, StoryObj } from '@storybook/react-vite';
import { ProvideCappuccinoHotShotQueryServiceAPIContext } from 'pages/CappuccinoHotShotQueryServiceAPIContext';
import { ProvideCappuccinoNodeValidatorStreams } from 'pages/CappuccinoNodeValidatorServiceAdapters';
import { ProvideCappuccinoNodeValidatorServiceAPIContext } from 'pages/CappuccinoNodeValidatorServiceAPIContext';
import React from 'react';
import { EnvironmentBanner } from '../../components/layout/environment_banner/environment_banner';
import DelegationPage from '../DelegationPage';
import { StoryBookPathResolver } from '../StoryBookPathResolver';

interface ExampleProps {
  environment: Environment;
  stakeTableContractAddress?: string;
  espTokenContractAddress?: string;
  hotshotQueryServiceURL?: string;
  nodeValidatorWebSocketURL?: string;
}

const Example: React.FC<ExampleProps> = ({
  environment,
  stakeTableContractAddress,
  espTokenContractAddress,
  hotshotQueryServiceURL,
  nodeValidatorWebSocketURL,
  ...rest
}) => (
  <>
    <StoryBookSpecifyEnvironmentAndContracts
      environment={environment}
      stakeTableContractAddress={stakeTableContractAddress}
      espTokenContractAddress={espTokenContractAddress}
      hotshotQueryServiceURL={hotshotQueryServiceURL}
      nodeValidatorWebSocketURL={nodeValidatorWebSocketURL}
    >
      <EnvironmentBanner />
      <ProvideTickEverySecond>
        <ProvideCappuccinoNodeValidatorServiceAPIContext>
          <ProvideCappuccinoHotShotQueryServiceAPIContext>
            <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
              <ProvideCappuccinoNodeValidatorStreams>
                <DelegationPage {...rest} />
              </ProvideCappuccinoNodeValidatorStreams>
            </OverridePathResolver>
          </ProvideCappuccinoHotShotQueryServiceAPIContext>
        </ProvideCappuccinoNodeValidatorServiceAPIContext>
      </ProvideTickEverySecond>
    </StoryBookSpecifyEnvironmentAndContracts>
  </>
);

const meta: Meta = {
  title: 'Pages/Delegation',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    environment: Environment.fakeData,
    stakeTableContractAddress: undefined,
    espTokenContractAddress: undefined,
    hotshotQueryServiceURL: undefined,
    nodeValidatorWebSocketURL: undefined,
  },
  argTypes: environmentArgTypesWithContracts,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {};

export const Milk: Story = {
  args: environmentArgsMilkWithContracts,
};

export const Water: Story = {
  args: environmentArgsWaterWithContracts,
};

export const Decaf: Story = {
  args: environmentArgsDecafWithContracts,
};

export const Mainnet: Story = {
  args: environmentArgsMainnetWithContracts,
};

export const FakeData: Story = {
  args: environmentArgsFakeDataWithContracts,
};

};
