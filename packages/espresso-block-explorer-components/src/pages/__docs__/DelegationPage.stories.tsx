import { ProvideTickEverySecond } from '@/components/contexts/NowProvider';
import {
  RainbowKitAccountAddressContext,
  RainbowKitAccountContext,
  RainbowKitChainContext,
  RainbowKitMountedContext,
} from '@/components/rainbowkit';
import { OverridePathResolver } from '@/contexts/PathResolverProvider';
import { Environment } from '@/models/config/environment/environment';
import {
  environmentArgsDecafWithContracts,
  environmentArgsFakeDataWithContracts,
  environmentArgsLocalDevNetWithContracts,
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

const FAKE_ACCOUNT_ADDRESS = '0x000000000000000000000000000000000000dead';
const FAKE_ACCOUNT = {
  address: FAKE_ACCOUNT_ADDRESS,
  displayName: '0x0000...dead',
  hasPendingTransactions: false,
};

const FAKE_CHAIN = {
  hasIcon: false,
  id: 31337,
  name: 'Local Geth DevNet',
};

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
}) => {
  if (environment === Environment.fakeData) {
    <>
      <StoryBookSpecifyEnvironmentAndContracts
        environment={environment}
        stakeTableContractAddress={stakeTableContractAddress}
        espTokenContractAddress={espTokenContractAddress}
      >
        <EnvironmentBanner />
        <ProvideTickEverySecond>
          <ProvideCappuccinoNodeValidatorServiceAPIContext>
            <ProvideCappuccinoHotShotQueryServiceAPIContext>
              <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
                <ProvideCappuccinoNodeValidatorStreams>
                  <RainbowKitAccountContext.Provider value={FAKE_ACCOUNT}>
                    <RainbowKitMountedContext.Provider value={true}>
                      <RainbowKitAccountAddressContext.Provider
                        value={FAKE_ACCOUNT_ADDRESS}
                      >
                        <RainbowKitChainContext.Provider value={FAKE_CHAIN}>
                          <DelegationPage {...rest} />
                        </RainbowKitChainContext.Provider>
                      </RainbowKitAccountAddressContext.Provider>
                    </RainbowKitMountedContext.Provider>
                  </RainbowKitAccountContext.Provider>
                </ProvideCappuccinoNodeValidatorStreams>
              </OverridePathResolver>
            </ProvideCappuccinoHotShotQueryServiceAPIContext>
          </ProvideCappuccinoNodeValidatorServiceAPIContext>
        </ProvideTickEverySecond>
      </StoryBookSpecifyEnvironmentAndContracts>
    </>;
  }

  return (
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
};

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

export const LocalDevNet: Story = {
  args: environmentArgsLocalDevNetWithContracts,
};
