import { EspressoConfigContext } from '@/components/config/espresso';
import { ProvideRainbowKitAccount } from '@/components/rainbowkit/components/provider';
import {
  RainbowKitAccount,
  RainbowKitAuthenticationStatusContext,
  RainbowKitChain,
  RainbowKitChainContext,
  RainbowKitModalContext,
  RainbowKitMountedContext,
} from '@/components/rainbowkit/contexts/contexts';
import { hexArrayBufferCodec } from '@/convert/codec';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import { WagmiConfig } from '@/models/config/environment/wagmi';
import { deriveAddressesWithEnvironmentFallback } from '@/models/config/storybook/espresso';
import { CommissionPercent } from '@/models/espresso/stake_table/commission_percent';
import { Validator } from '@/models/espresso/stake_table/validator';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/TaggedBase64';
import WalletAddress from '@/models/wallet_address/wallet_address';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CurrentValidatorsContext } from 'pages/CappuccinoNodeValidatorServiceAdapters';
import { defineChain } from 'viem';
import { createConfig, WagmiProvider } from 'wagmi';
import {
  CurrentStakeTableV1AllowanceContext,
  CurrentTokenBalanceContext,
  LastWalletReadTimestampContext,
} from '../../staking_summary/staking_summary';
import {
  clickButton,
  getStakeButtonEnabled,
} from '../__shared__/staking_modal_shared';
import { StakingModalState } from '../context';
import { StakingModal } from '../staking_modal';

const FAKE_ACCOUNT_ADDRESS: `0x${string}` =
  '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd';

const FAKE_VALIDATOR_ADDRESS: `0x${string}` =
  '0x1234567890abcdef1234567890abcdef12345678';

const FAKE_VALIDATOR = new Validator(
  new WalletAddress(hexArrayBufferCodec.decode(FAKE_VALIDATOR_ADDRESS)),
  new TaggedBase64('BLS_KEY', new ArrayBuffer(32)),
  new TaggedBase64('STATE_VER_KEY', new ArrayBuffer(32)),
  200000000000000000000n,
  new CommissionPercent(5),
  new Map([[FAKE_VALIDATOR_ADDRESS, 1000000000n]]),
);

const FAKE_ACCOUNT: RainbowKitAccount = {
  address: FAKE_ACCOUNT_ADDRESS,
  displayName: '0xabcdef...abcd',
  hasPendingTransactions: false,
};

const FAKE_CHAIN: RainbowKitChain = {
  id: 31337,
  hasIcon: false,
};

const queryClient = new QueryClient();

interface ExampleProps {
  initialState?: StakingModalState;
  currentBalance?: bigint;
  currentAllowance?: bigint;
  currentAccount?: `0x${string}`;
}

const FAKE_ESP_TOKEN_CONTRACT_ADDRESS: `0x${string}` =
  '0x0000000000000000000000000000000000000001';
const FAKE_STAKE_TABLE_CONTRACT_ADDRESS: `0x${string}` =
  '0x0000000000000000000000000001111111111112';

const espressoConfig = deriveAddressesWithEnvironmentFallback(
  FAKE_ESP_TOKEN_CONTRACT_ADDRESS,
  FAKE_STAKE_TABLE_CONTRACT_ADDRESS,
);

const Example: React.FC<ExampleProps> = (props) => {
  const {
    initialState = {
      showModal: false,
      stakingPhase: null,
      address: null,
      amount: null,
    },
    currentAllowance = 10000000000000000000n,
    currentBalance = 1000000000000000000000n,
    ...rest
  } = props;

  const testingEnvironmentConfig: WagmiConfig = createConfig({
    chains: [
      defineChain({
        id: 31337,
        name: 'GETH (Local DevNet)',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          default: {
            http: ['http://localhost:8545'],
            webSocket: ['ws://localhost:8546'],
          },
        },
        testnet: true,
      }),
    ],
    client({ chain }) {
      return new Proxy(
        { type: 'object', name: 'client' },
        {
          get: (target, prop, receiver) => {
            switch (prop) {
              case 'extend':
                // This is meant to be a new function
                return (publicActions) =>
                  new Proxy(
                    { type: 'function', name: 'extend' },
                    {
                      get: (target, propx, receiver) => {
                        debugger;
                      },

                      apply: (target, self, args) => {
                        debugger;
                      },
                    },
                  );

              default:
                debugger;
            }
          },

          apply: (target, self, args) => {
            debugger;
          },
        },
      );

      return {
        extend: (client) =>
          new Proxy(client, {
            get: (target, prop, receiver) => {
              switch (prop) {
                case 'uid':
                  return FAKE_ACCOUNT_ADDRESS;

                default:
                  break;
              }
              console.info('<<< HERE', target, prop, receiver);
              debugger;
            },
            apply: (target, self, args) => {
              console.info('<<< HERE', target, self, args);
              debugger;
            },
          }),
      };
      // return createClient({ chain, transport: http() });
    },
  });

  return (
    <EspressoConfigContext.Provider value={espressoConfig}>
      <WagmiProvider config={testingEnvironmentConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <CurrentStakeTableV1AllowanceContext.Provider
              value={currentAllowance}
            >
              <CurrentTokenBalanceContext.Provider value={currentBalance}>
                <LastWalletReadTimestampContext.Provider value={new Date()}>
                  <CurrentValidatorsContext.Provider
                    value={new Map([[FAKE_VALIDATOR_ADDRESS, FAKE_VALIDATOR]])}
                  >
                    <RainbowKitMountedContext.Provider value={true}>
                      <RainbowKitModalContext.Provider
                        value={{
                          openAccountModal: () => {},
                          openChainModal: () => {},
                          openConnectModal: () => {},
                          accountModalOpen: false,
                          chainModalOpen: false,
                          connectModalOpen: false,
                        }}
                      >
                        <ProvideRainbowKitAccount value={FAKE_ACCOUNT}>
                          <RainbowKitChainContext.Provider value={FAKE_CHAIN}>
                            <RainbowKitAuthenticationStatusContext.Provider
                              value={'authenticated'}
                            >
                              <StakingModal
                                {...rest}
                                initialModalState={initialState}
                              >
                                <></>
                              </StakingModal>
                            </RainbowKitAuthenticationStatusContext.Provider>
                          </RainbowKitChainContext.Provider>
                        </ProvideRainbowKitAccount>
                      </RainbowKitModalContext.Provider>
                    </RainbowKitMountedContext.Provider>
                  </CurrentValidatorsContext.Provider>
                </LastWalletReadTimestampContext.Provider>
              </CurrentTokenBalanceContext.Provider>
            </CurrentStakeTableV1AllowanceContext.Provider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </EspressoConfigContext.Provider>
  );
};

const meta: Meta<typeof Example> = {
  title: 'Components/Page Sections/Staking Modal/States',
  component: Example,
  argTypes: {
    initialState: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const PerformStake: Story = {
  args: {
    initialState: {
      showModal: true,
      stakingPhase: null,
      address: FAKE_VALIDATOR_ADDRESS,
      amount: MonetaryValue.ESP(1000000000000000000n),
    },
  },
  play: async ({ canvasElement }) => {
    const stakeButtonEnabled = await getStakeButtonEnabled(canvasElement);
    await clickButton(stakeButtonEnabled);
  },
};
