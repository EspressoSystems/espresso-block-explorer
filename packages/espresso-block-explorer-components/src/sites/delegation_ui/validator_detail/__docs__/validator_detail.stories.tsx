import { ProvideHotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { ProvideTickEverySecond } from '@/contexts/now_provider';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer_hex';
import { nodeList } from '@/data_source/fake_data_source/espresso/nodes';
import { EnvironmentBanner } from '@/layout/environment_banner/environment_banner';
import { Environment } from '@/models/config/environment/environment';
import {
  environmentArgsFakeDataWithContracts,
  environmentArgsMainnetWithContracts,
  environmentArgsTypesStakingAPIService,
  environmentArgTypesWithContracts,
  extractURLWithEncodedFallback,
} from '@/models/config/storybook/controls';
import { StoryBookSpecifyEnvironmentAndContracts } from '@/models/config/storybook/storybook';
import { Meta, StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import { ProvideStakingAPIServiceContext } from '../../../../contexts/staking_api_service_context';
import { StakingAPIServiceMockInjection } from '../../mock/validator_service_injection';
import { ValidatorDetailUI } from '../validator_detail';

interface ExampleProps {
  environment: Environment;
  stakeTableContractAddress?: string;
  espTokenContractAddress?: string;
  rewardClaimContractAddress?: string;
  lightClientContractAddress?: string;
  hotshotQueryServiceURL?: string;
  nodeValidatorWebSocketURL?: string;
  stakingAPIServiceURL?: string;
  validatorAddress?: `0x${string}`;
}

export const Example: React.FC<ExampleProps> = ({
  environment,
  stakeTableContractAddress,
  espTokenContractAddress,
  rewardClaimContractAddress,
  lightClientContractAddress,
  hotshotQueryServiceURL,
  nodeValidatorWebSocketURL,
  stakingAPIServiceURL,
  validatorAddress,
}) => {
  return (
    <StoryBookSpecifyEnvironmentAndContracts
      environment={environment}
      stakeTableContractAddress={stakeTableContractAddress}
      espTokenContractAddress={espTokenContractAddress}
      rewardClaimContractAddress={rewardClaimContractAddress}
      lightClientContractAddress={lightClientContractAddress}
      hotshotQueryServiceURL={extractURLWithEncodedFallback(
        hotshotQueryServiceURL,
      )}
      nodeValidatorWebSocketURL={extractURLWithEncodedFallback(
        nodeValidatorWebSocketURL,
      )}
      stakingAPIServiceURL={extractURLWithEncodedFallback(stakingAPIServiceURL)}
    >
      <EnvironmentBanner />
      <ProvideTickEverySecond>
        <ProvideHotShotQueryServiceAPIContext>
          <ProvideStakingAPIServiceContext>
            <StakingAPIServiceMockInjection>
              <ValidatorDetailUI address={validatorAddress ?? null} />
            </StakingAPIServiceMockInjection>
          </ProvideStakingAPIServiceContext>
        </ProvideHotShotQueryServiceAPIContext>
      </ProvideTickEverySecond>
    </StoryBookSpecifyEnvironmentAndContracts>
  );
};

/**
 * fakeDataValidatorAddress is the address of a validator that is present in
 * the fake data source, so the FakeData story shows a populated page.
 */
const fakeDataValidatorAddress = hexArrayBufferCodec.encode(
  nodeList[0].address,
);

const meta: Meta = {
  title: 'Delegation UI/Pages/Validator Detail',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    environment: Environment.fakeData,
    validatorAddress: undefined,
  },
  argTypes: {
    ...environmentArgTypesWithContracts,
    ...environmentArgsTypesStakingAPIService,
    validatorAddress: {
      control: 'text',
      description: 'The address of the validator to display.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const FakeData: Story = {
  args: {
    ...environmentArgsFakeDataWithContracts,
    validatorAddress: fakeDataValidatorAddress,
  },
};

export const UnknownValidator: Story = {
  args: {
    ...environmentArgsFakeDataWithContracts,
    validatorAddress: '0x0000000000000000000000000000000000000001',
  },
};

export const NoAddress: Story = {
  args: {
    ...environmentArgsFakeDataWithContracts,
    validatorAddress: undefined,
  },
};

export const Mainnet: Story = {
  args: {
    ...environmentArgsMainnetWithContracts,
    hotshotQueryServiceURL: 'https://cache.main.net.espresso.network/v0/',
    stakingAPIServiceURL:
      'https://staking-api.main.net.espresso.network/v0/staking/',
    validatorAddress: '0x4c57e041e38ad226186980af1ab67b391e074c4d',
  },
};
