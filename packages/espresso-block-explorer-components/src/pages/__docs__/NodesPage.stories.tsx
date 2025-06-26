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
import { ProvideCappuccinoHotShotQueryServiceAPIContext } from 'pages/CappuccinoHotShotQueryServiceAPIContext';
import { ProvideCappuccinoNodeValidatorStreams } from 'pages/CappuccinoNodeValidatorServiceAdapters';
import { ProvideCappuccinoNodeValidatorServiceAPIContext } from 'pages/CappuccinoNodeValidatorServiceAPIContext';
import React from 'react';
import { Meta, StoryObj } from 'storybook';
import { EnvironmentBanner } from '../../components/layout/environment_banner/environment_banner';
import NodesPage from '../NodesPage';
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
    stakeTableContractAddress: '',
    espTokenContractAddress: '',
    hotshotQueryServiceURL: '',
    nodeValidatorWebSocketURL: '',
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  argTypes: environmentArgTypesWithContracts,
};

export const Milk: Story = {
  args: environmentArgsMilkWithContracts,
  argTypes: environmentArgTypesWithContracts,
};

export const Water: Story = {
  args: environmentArgsWaterWithContracts,
  argTypes: environmentArgTypesWithContracts,
};

export const Decaf: Story = {
  args: environmentArgsDecafWithContracts,
  argTypes: environmentArgTypesWithContracts,
};

export const Mainnet: Story = {
  args: environmentArgsMainnetWithContracts,
  argTypes: environmentArgTypesWithContracts,
};

export const FakeData: Story = {
  args: environmentArgsFakeDataWithContracts,
  argTypes: environmentArgTypesWithContracts,
};

export const LocalTestingMilk: Story = {
  args: {
    environment: 'milk',
    stakeTableContractAddress: '0x196dbcbb54b8ec4958c959d8949ebfe87ac2aaaf',
    espTokenContractAddress: '0xf7cd8fa9b94db2aa972023b379c7f72c65e4de9d',
    hotshotQueryServiceURL: 'https://query-0.milk.devnet.espresso.network/v0/',
    nodeValidatorWebSocketURL: 'ws://localhost:9000/v0/',
  },

  argTypes: environmentArgTypesWithContracts,
};
