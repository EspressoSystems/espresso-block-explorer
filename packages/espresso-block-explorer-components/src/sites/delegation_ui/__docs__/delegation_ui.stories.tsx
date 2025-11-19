import { ProvideTickEverySecond } from '@/components/contexts/NowProvider';
import { EnvironmentBanner } from '@/components/layout/environment_banner/environment_banner';
import { Environment } from '@/models/config/environment/environment';
import {
  environmentArgsDecafWithContracts,
  environmentArgsFakeDataWithContracts,
  environmentArgsLocalDevNetWithContracts,
  environmentArgsMainnetWithContracts,
  environmentArgsMilkWithContracts,
  environmentArgsTypesL1ValidatorService,
  environmentArgsWaterWithContracts,
  environmentArgTypesWithContracts,
  extractURLWithEncodedFallback,
} from '@/models/config/storybook/controls';
import { StoryBookSpecifyEnvironmentAndContracts } from '@/models/config/storybook/storybook';
import { Meta, StoryObj } from '@storybook/react-vite';

import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import React from 'react';
import { ProvideCappuccinoHotShotQueryServiceAPIContext } from '../../../pages/CappuccinoHotShotQueryServiceAPIContext';
import { delegationUIInteractions } from '../__shared__/delegation_ui_shared';
import { ProvideL1ValidatorServiceAPIContext } from '../contexts/l1_validator_api_context';
import DelegationUI from '../delegation_ui';
import { L1ValidatorServiceMockInjection } from '../mock/validator_service_injection';

interface ExampleProps {
  environment: Environment;
  stakeTableContractAddress?: string;
  espTokenContractAddress?: string;
  hotshotQueryServiceURL?: string;
  nodeValidatorWebSocketURL?: string;
  l1ValidatorServiceURL?: string;
  spoofAccountAddress?: `0x${string}`;
}

const Example: React.FC<ExampleProps> = ({
  environment,
  stakeTableContractAddress,
  espTokenContractAddress,
  hotshotQueryServiceURL,
  nodeValidatorWebSocketURL,
  l1ValidatorServiceURL,
  spoofAccountAddress,
  ...rest
}) => {
  return (
    <>
      <StoryBookSpecifyEnvironmentAndContracts
        environment={environment}
        stakeTableContractAddress={stakeTableContractAddress}
        espTokenContractAddress={espTokenContractAddress}
        hotshotQueryServiceURL={extractURLWithEncodedFallback(
          hotshotQueryServiceURL,
        )}
        nodeValidatorWebSocketURL={extractURLWithEncodedFallback(
          nodeValidatorWebSocketURL,
        )}
        l1ValidatorServiceURL={extractURLWithEncodedFallback(
          l1ValidatorServiceURL,
        )}
      >
        <EnvironmentBanner />
        <ProvideTickEverySecond>
          <SpoofAccountAddress account={spoofAccountAddress}>
            <ProvideCappuccinoHotShotQueryServiceAPIContext>
              <ProvideL1ValidatorServiceAPIContext>
                <L1ValidatorServiceMockInjection>
                  <DelegationUI {...rest} />
                </L1ValidatorServiceMockInjection>
              </ProvideL1ValidatorServiceAPIContext>
            </ProvideCappuccinoHotShotQueryServiceAPIContext>
          </SpoofAccountAddress>
        </ProvideTickEverySecond>
      </StoryBookSpecifyEnvironmentAndContracts>
    </>
  );
};

const SpoofAccountAddress: React.FC<
  React.PropsWithChildren<{
    account?: `0x${string}`;
  }>
> = ({ account, children }) => {
  const currentAccount = React.useContext(RainbowKitAccountAddressContext);

  const resolvedAccount = account || currentAccount;

  return (
    <RainbowKitAccountAddressContext.Provider value={resolvedAccount}>
      {children}
    </RainbowKitAccountAddressContext.Provider>
  );
};

const meta: Meta = {
  title: 'Sites/Delegation UI/Page',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    environment: Environment.fakeData,
    stakeTableContractAddress: undefined,
    espTokenContractAddress: undefined,
    rewardClaimContractAddress: undefined,
    hotshotQueryServiceURL: undefined,
    nodeValidatorWebSocketURL: undefined,
    l1ValidatorServiceURL: undefined,
    spoofAccountAddress: undefined,
  },
  argTypes: {
    ...environmentArgTypesWithContracts,
    ...environmentArgsTypesL1ValidatorService,
    spoofAccountAddress: {
      control: 'text',
      description:
        'An optional account address to spoof as the connected wallet address in RainbowKit.',
    },
  },

  globals: {
    background: 'light',
    parameters: {
      backgrounds: {
        default: 'light',
        options: {
          light: { name: 'Light', value: '#f8fafcff' },
        },
      },
    },
  },
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
  args: {
    ...environmentArgsDecafWithContracts,
    l1ValidatorServiceURL:
      'https://staking.decaf.testnet.espresso.network/v0/staking/',
  },
};

export const Mainnet: Story = {
  args: environmentArgsMainnetWithContracts,
};

export const FakeData: Story = {
  args: environmentArgsFakeDataWithContracts,
};

export const FakeDataInteractions: Story = {
  args: environmentArgsFakeDataWithContracts,
  play: async ({ canvasElement, step }) => {
    await delegationUIInteractions(canvasElement, step);
  },
};

export const LocalDevNet: Story = {
  args: {
    ...environmentArgsLocalDevNetWithContracts,
    l1ValidatorServiceURL: 'http://localhost:8080/v0/staking/',
  },
};
