import { createClient, defineChain } from 'viem';
import { createConfig, http } from 'wagmi';
import * as chains from 'wagmi/chains';
import { mock } from 'wagmi/connectors';
import { Environment } from '../environment/environment';
import { WagmiConfig } from '../environment/wagmi';

export const mainnet: WagmiConfig = createConfig({
  chains: [chains.mainnet],
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
});

export const decaf: WagmiConfig = createConfig({
  chains: [chains.sepolia],
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
});

export const water: WagmiConfig = createConfig({
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

export const milk: WagmiConfig = createConfig({
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

export const localDevNet: WagmiConfig = createConfig({
  chains: [
    defineChain({
      id: 900,
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
    return createClient({ chain, transport: http() });
  },
});

export const fakeData: WagmiConfig = createConfig({
  chains: [
    defineChain({
      id: 31337 as const,
      name: 'GETH (Fake Data)',
      nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
      rpcUrls: {},
      testnet: true,
      connectors: [
        mock({
          accounts: [
            '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
            '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
            '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
          ],
        }),
      ],
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
export function getWagmiConfigForEnvironment(
  environment: Environment,
): WagmiConfig {
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
      return fakeData; // Use local devnet as a fallback for fake data
    case Environment.localDevNet:
      return localDevNet;

    default:
      throw new Error(`Unsupported environment: ${environment}`);
  }
}
