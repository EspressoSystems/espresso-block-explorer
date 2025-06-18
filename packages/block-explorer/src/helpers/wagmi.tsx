'use client';

import {
  Environment,
  EnvironmentContext,
  WagmiConfig,
} from 'espresso-block-explorer-components';
import React from 'react';
import { createClient, defineChain } from 'viem';
import { createConfig, http, WagmiProvider } from 'wagmi';
import * as chains from 'wagmi/chains';

const mainnet: WagmiConfig = createConfig({
  chains: [chains.mainnet],
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
});

const decaf: WagmiConfig = createConfig({
  chains: [chains.sepolia],
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
});

const water: WagmiConfig = createConfig({
  chains: [
    defineChain({
      id: 900,
      name: 'GETH (water)',
      nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
      rpcUrls: {
        default: {
          http: ['https://geth.water.devnet.espresso.network'],
          webSocket: ['wss://wsgeth.water.devnet.espresso.network'],
        },
      },
      testnet: true,
    }),
  ],
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
});

const milk: WagmiConfig = createConfig({
  chains: [
    defineChain({
      id: 900,
      name: 'GETH (milk)',
      nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
      rpcUrls: {
        default: {
          http: ['https://geth.milk.devnet.espresso.network'],
          webSocket: ['wss://wsgeth.milk.devnet.espresso.network'],
        },
      },
      testnet: true,
    }),
  ],
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
});

/**
 * getWagmiConfigForEnvironment returns the appropriate WagmiConfig based on
 * the provided environment.
 * @param environment
 * @returns
 */
function getWagmiConfigForEnvironment(environment: Environment): WagmiConfig {
  switch (environment) {
    case Environment.mainnet:
      return mainnet;
    case Environment.decaf:
      return decaf;
    case Environment.water:
      return water;
    case Environment.milk:
      return milk;
    case Environment.fakeData:
      return mainnet; // Use mainnet as a fallback for fake data
    default:
      throw new Error(`Unsupported environment: ${environment}`);
  }
}

export interface DeriveWagmiFromEnvironmentProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * Derive the WagmiProvider configuration from the current environment.
 * This component uses the EnvironmentContext to determine
 * the current environment and provides the appropriate
 * WagmiProvider configuration based on that environment.
 */
export const DeriveWagmiFromEnvironment: React.FC<
  DeriveWagmiFromEnvironmentProps
> = ({ children }) => {
  const environment = React.useContext(EnvironmentContext);
  return (
    <WagmiProvider config={getWagmiConfigForEnvironment(environment)}>
      {children}
    </WagmiProvider>
  );
};
