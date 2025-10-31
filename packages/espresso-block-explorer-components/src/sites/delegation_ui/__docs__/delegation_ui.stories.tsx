import { ProvideTickEverySecond } from '@/components/contexts/NowProvider';
import { EnvironmentBanner } from '@/components/layout/environment_banner/environment_banner';
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
import React from 'react';
import { ProvideCappuccinoHotShotQueryServiceAPIContext } from '../../../pages/CappuccinoHotShotQueryServiceAPIContext';
import { ProvideL1ValidatorServiceAPIContext } from '../contexts/l1_validator_api_context';
import DelegationUI from '../delegation_ui';

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
          <ProvideCappuccinoHotShotQueryServiceAPIContext>
            <ProvideL1ValidatorServiceAPIContext>
              <DelegationUI {...rest} />
            </ProvideL1ValidatorServiceAPIContext>
          </ProvideCappuccinoHotShotQueryServiceAPIContext>
        </ProvideTickEverySecond>
      </StoryBookSpecifyEnvironmentAndContracts>
    </>
  );
};

const meta: Meta = {
  title: 'Sites/Delegation UI',
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
