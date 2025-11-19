import { EnvironmentContext } from '@/components/config/environment';
import { EspressoConfigContext } from '@/components/config/espresso';
import { BlockExplorerConfigContext } from '@/components/config/explorer';
import { RainbowKitContextInjector } from '@/components/rainbowkit/components/provider';
import { walletAddressCodec } from '@/models/wallet_address/wallet_address';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { ProvideESPTokenContract } from 'sites/delegation_ui/contexts/esp_token_contract_context';
import { ProvideL1Methods } from 'sites/delegation_ui/contexts/l1_methods_context';
import { ProvideRewardClaimContract } from 'sites/delegation_ui/contexts/reward_claim_contract_context';
import { ProvideStakeTableV2Contract } from 'sites/delegation_ui/contexts/stake_table_v2_contract_context';
import { FakeDataMockOverrides } from 'sites/delegation_ui/mock/fake_data';
import { WagmiProvider } from 'wagmi';
import { Environment } from '../environment/environment';
import { ExplorerConfig } from '../environment/explorer';
import { deriveAddressesWithEnvironmentFallback } from './espresso';
import { getWagmiConfigForEnvironment } from './wagmi';

// This is added to serve as a polyfill to prevent errors when running
// tests that occur when running tests in an environment that does not
// have localStorage methods defined.
if (
  typeof localStorage === 'undefined' ||
  typeof localStorage.getItem === 'undefined'
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (globalThis as any).localStorage = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getItem: (_key: string) => null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setItem: (_key: string, _value: string) => {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeItem: (_key: string) => {},
    clear: () => {},
  };
}

export interface StoryBookSpecifyEnvironmentProps {
  environment?: Environment;
  hotshotQueryServiceURL?: string;
  nodeValidatorWebSocketURL?: string;
  l1ValidatorServiceURL?: string;
  children: React.ReactNode | React.ReactNode[];
}
const queryClient = new QueryClient();

function resolveURL(url: string | null | undefined): string | null {
  if (url === null || url === undefined || url === '') {
    return null;
  }
  try {
    const parsedURL = new URL(url);
    return parsedURL.toString();
  } catch (error) {
    console.error('Invalid URL provided:', url, error);
    return null;
  }
}

export const StoryBookSpecifyEnvironment: React.FC<
  StoryBookSpecifyEnvironmentProps
> = ({
  environment = Environment.fakeData,
  hotshotQueryServiceURL,
  nodeValidatorWebSocketURL,
  l1ValidatorServiceURL,
  children,
}) => {
  const config: ExplorerConfig = {
    hotshotQueryServiceURL: resolveURL(hotshotQueryServiceURL ?? null),
    nodeValidatorServiceURL: resolveURL(nodeValidatorWebSocketURL ?? null),
    l1ValidatorServiceURL: resolveURL(l1ValidatorServiceURL ?? null),
  };

  return (
    <EnvironmentContext.Provider value={environment}>
      <BlockExplorerConfigContext.Provider value={config}>
        {children}
      </BlockExplorerConfigContext.Provider>
    </EnvironmentContext.Provider>
  );
};

function resolveContractAddress(
  address: null | undefined | string,
): null | `0x${string}` {
  if (address === null || address === undefined || address === '') {
    return null;
  }

  if (!address.startsWith('0x')) {
    return null;
  }

  // We use this as a quick way to validator the address.
  const walletAddress = walletAddressCodec.decode(address);
  return walletAddressCodec.encode(walletAddress) as `0x${string}`;
}

export interface StoryBookSpecifyEnvironmentAndContractsProps
  extends StoryBookSpecifyEnvironmentProps {
  espTokenContractAddress?: string;
  stakeTableContractAddress?: string;
  rewardClaimContractAddress?: string;
}

export const StoryBookSpecifyEnvironmentAndContracts: React.FC<
  StoryBookSpecifyEnvironmentAndContractsProps
> = ({
  environment = Environment.fakeData,
  hotshotQueryServiceURL: hotshotQueryServiceURL,
  nodeValidatorWebSocketURL,
  espTokenContractAddress,
  stakeTableContractAddress,
  rewardClaimContractAddress,
  l1ValidatorServiceURL,
  children,
}) => {
  const wagmiConfig = getWagmiConfigForEnvironment(environment);
  const espressoConfig = deriveAddressesWithEnvironmentFallback(
    resolveContractAddress(espTokenContractAddress),
    resolveContractAddress(stakeTableContractAddress),
    resolveContractAddress(rewardClaimContractAddress),
  );

  return (
    <StoryBookSpecifyEnvironment
      environment={environment}
      hotshotQueryServiceURL={hotshotQueryServiceURL}
      nodeValidatorWebSocketURL={nodeValidatorWebSocketURL}
      l1ValidatorServiceURL={l1ValidatorServiceURL}
    >
      <EspressoConfigContext.Provider value={espressoConfig}>
        <WagmiProvider config={wagmiConfig}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
              <RainbowKitContextInjector>
                <ProvideL1Methods>
                  <ProvideESPTokenContract>
                    <ProvideStakeTableV2Contract>
                      <ProvideRewardClaimContract>
                        <FakeDataMockOverrides>
                          {children}
                        </FakeDataMockOverrides>
                      </ProvideRewardClaimContract>
                    </ProvideStakeTableV2Contract>
                  </ProvideESPTokenContract>
                </ProvideL1Methods>
              </RainbowKitContextInjector>
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </EspressoConfigContext.Provider>
    </StoryBookSpecifyEnvironment>
  );
};
