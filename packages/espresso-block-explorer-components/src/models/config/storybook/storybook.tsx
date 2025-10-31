import { EnvironmentContext } from '@/components/config/environment';
import { EspressoConfigContext } from '@/components/config/espresso';
import { BlockExplorerConfigContext } from '@/components/config/explorer';
import { RainbowKitContextInjector } from '@/components/rainbowkit/components/provider';
import { walletAddressCodec } from '@/models/wallet_address/wallet_address';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { WagmiProvider } from 'wagmi';
import { Environment } from '../environment/environment';
import { ExplorerConfig } from '../environment/explorer';
import { deriveAddressesWithEnvironmentFallback } from './espresso';
import { getWagmiConfigForEnvironment } from './wagmi';

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
}

export const StoryBookSpecifyEnvironmentAndContracts: React.FC<
  StoryBookSpecifyEnvironmentAndContractsProps
> = ({
  environment = Environment.fakeData,
  hotshotQueryServiceURL: hotshotQueryServiceURL,
  nodeValidatorWebSocketURL,
  espTokenContractAddress,
  stakeTableContractAddress,
  l1ValidatorServiceURL,
  children,
}) => {
  const wagmiConfig = getWagmiConfigForEnvironment(environment);
  const espressoConfig = deriveAddressesWithEnvironmentFallback(
    resolveContractAddress(espTokenContractAddress),
    resolveContractAddress(stakeTableContractAddress),
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
              <RainbowKitContextInjector>{children}</RainbowKitContextInjector>
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </EspressoConfigContext.Provider>
    </StoryBookSpecifyEnvironment>
  );
};
