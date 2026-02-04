import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import { ProvideCappuccinoHotShotQueryServiceAPIContext } from '@/contexts/cappuccino_hot_shot_query_service_api_context';
import { ProvideTickEverySecond } from '@/contexts/now_provider';
import { nullableBigintCodec } from '@/convert/codec/bigint';
import { EnvironmentBanner } from '@/layout/environment_banner/environment_banner';
import { Environment } from '@/models/config/environment/environment';
import {
  environmentArgsDecafWithContracts,
  environmentArgsFakeDataWithContracts,
  environmentArgsLocalDevNetWithContracts,
  environmentArgsMainnetWithContracts,
  environmentArgsTypesL1ValidatorService,
  environmentArgTypesWithContracts,
  extractURLWithEncodedFallback,
} from '@/models/config/storybook/controls';
import { StoryBookSpecifyEnvironmentAndContracts } from '@/models/config/storybook/storybook';
import { nullableWalletAddressCodec } from '@/models/wallet_address/wallet_address';
import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { ProvideL1ValidatorServiceAPIContext } from '../../../contexts/l1_validator_api_context';
import { delegationUIInteractions } from '../__shared__/delegation_ui_shared';
import {
  ClaimPortalIntent,
  kIntentClaimAndStake,
  ProvideClaimPortalIntentContext,
} from '../contexts/claim_portal_intent_context';
import DelegationUI from '../delegation_ui';
import { L1ValidatorServiceMockInjection } from '../mock/validator_service_injection';

interface ExampleProps {
  environment: Environment;
  stakeTableContractAddress?: string;
  espTokenContractAddress?: string;
  rewardClaimContractAddress?: string;
  lightClientContractAddress?: string;
  hotshotQueryServiceURL?: string;
  nodeValidatorWebSocketURL?: string;
  l1ValidatorServiceURL?: string;
  spoofAccountAddress?: `0x${string}`;
  intentAccount?: `0x${string}`;
  intentAmount?: `0x${string}`;
  intentType?: string;
}

function deriveIntent(
  intentType: undefined | string,
  intentAccount: undefined | `0x${string}`,
  intentAmount: undefined | `0x${string}`,
): null | ClaimPortalIntent {
  if (intentType !== kIntentClaimAndStake) {
    return null;
  }
  const walletAddress = nullableWalletAddressCodec.decode(
    intentAccount ?? null,
  );
  const claimAmount = nullableBigintCodec.decode(intentAmount ?? null);

  return {
    intent: kIntentClaimAndStake,

    address: walletAddress,
    amount: claimAmount,
  };
}

export const Example: React.FC<ExampleProps> = ({
  environment,
  stakeTableContractAddress,
  espTokenContractAddress,
  rewardClaimContractAddress,
  lightClientContractAddress,
  hotshotQueryServiceURL,
  nodeValidatorWebSocketURL,
  l1ValidatorServiceURL,
  spoofAccountAddress,
  intentAccount,
  intentAmount,
  intentType,
  ...rest
}) => {
  const intent = deriveIntent(intentType, intentAccount, intentAmount);
  return (
    <>
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
        l1ValidatorServiceURL={extractURLWithEncodedFallback(
          l1ValidatorServiceURL,
        )}
      >
        <EnvironmentBanner />
        <ProvideTickEverySecond>
          <ProvideClaimPortalIntentContext intent={intent}>
            <SpoofAccountAddress account={spoofAccountAddress}>
              <ProvideCappuccinoHotShotQueryServiceAPIContext>
                <ProvideL1ValidatorServiceAPIContext>
                  <L1ValidatorServiceMockInjection>
                    <DelegationUI {...rest} />
                  </L1ValidatorServiceMockInjection>
                </ProvideL1ValidatorServiceAPIContext>
              </ProvideCappuccinoHotShotQueryServiceAPIContext>
            </SpoofAccountAddress>
          </ProvideClaimPortalIntentContext>
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
  title: 'Delegation UI/Pages/Main',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    environment: Environment.fakeData,
    stakeTableContractAddress: undefined,
    espTokenContractAddress: undefined,
    rewardClaimContractAddress: undefined,
    lightClientContractAddress: undefined,
    hotshotQueryServiceURL: undefined,
    nodeValidatorWebSocketURL: undefined,
    l1ValidatorServiceURL: undefined,
    spoofAccountAddress: undefined,
    intentAccount: undefined,
    intentAmount: undefined,
    intentType: undefined,
  },
  argTypes: {
    ...environmentArgTypesWithContracts,
    ...environmentArgsTypesL1ValidatorService,
    spoofAccountAddress: {
      control: 'text',
      description:
        'An optional account address to spoof as the connected wallet address in RainbowKit.',
    },

    intentAccount: {
      control: 'text',
      description:
        'An optional textual representation of a wallet argument for a specific intent',
    },

    intentAmount: {
      control: 'text',
      description:
        'An optional textual representation of the amount for a specific intent',
    },

    intentType: {
      control: 'text',
      description:
        'The type of the specific intent.  Initially the only supported value will be "claim-and-stake"',
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

// export const Default: Story = {};

// export const Milk: Story = {
//   args: environmentArgsMilkWithContracts,
// };

// export const Water: Story = {
//   args: environmentArgsWaterWithContracts,
// };

export const Decaf: Story = {
  args: {
    ...environmentArgsDecafWithContracts,
    l1ValidatorServiceURL:
      'https://staking-api.decaf.testnet.espresso.network/v0/staking/',
  },
};

export const Mainnet: Story = {
  args: {
    ...environmentArgsMainnetWithContracts,
    l1ValidatorServiceURL:
      'https://staking-api.main.net.espresso.network/v0/staking/',
  },
};

export const FakeData: Story = {
  args: environmentArgsFakeDataWithContracts,
};

export const FakeDataInteractions: Story = {
  args: environmentArgsFakeDataWithContracts,
  async play({ canvasElement, step }) {
    await delegationUIInteractions(canvasElement, step);
  },
};

export const LocalDevNet: Story = {
  args: {
    ...environmentArgsLocalDevNetWithContracts,
    l1ValidatorServiceURL: 'http://localhost:8080/v0/staking/',
  },
};
