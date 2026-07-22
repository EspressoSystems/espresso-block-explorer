import { defineChain } from 'viem';
import { createConfig, fallback, http } from 'wagmi';
import * as chains from 'wagmi/chains';
import { mock } from 'wagmi/connectors';
import { Environment } from '../environment/environment';
import { WagmiConfig } from '../environment/wagmi';

function httpTransports(urls: readonly string[]) {
  return fallback(urls.map((url) => http(url)));
}

export const mainnet: WagmiConfig = createConfig({
  chains: [chains.mainnet],
  transports: {
    [chains.mainnet.id]: httpTransports([
      'https://rpc.flashbots.net/',
      'https://eth.drpc.org/',
      'https://rpc.mevblocker.io/',
    ]),
  },
});

export const decaf: WagmiConfig = createConfig({
  chains: [chains.sepolia],
  transports: {
    [chains.sepolia.id]: fallback(
      chains.sepolia.rpcUrls.default.http.map((u) => http(u)),
    ),
  },
});

export const waterChain = defineChain({
  id: 1337,
  name: 'RETH (water)',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://reth.water.devnet.espresso.network'],
      webSocket: ['wss://wsreth.water.devnet.espresso.network'],
    },
  },
  testnet: true,
});

export const water: WagmiConfig = createConfig({
  chains: [waterChain],
  transports: {
    [waterChain.id]: fallback(
      waterChain.rpcUrls.default.http.map((u) => http(u)),
    ),
  },
});

const milkChain = defineChain({
  id: 1337,
  name: 'RETH (milk)',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://reth.milk.devnet.espresso.network'],
      webSocket: ['wss://wsreth.milk.devnet.espresso.network'],
    },
  },
  testnet: true,
});

export const milk: WagmiConfig = createConfig({
  chains: [milkChain],
  transports: {
    [milkChain.id]: fallback(
      milkChain.rpcUrls.default.http.map((u) => http(u)),
    ),
  },
});

const localDevNetChain = defineChain({
  id: 31337,
  name: 'RETH (Local DevNet)',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['http://localhost:8545'],
      webSocket: ['ws://localhost:8546'],
    },
  },
  testnet: true,
});

export const localDevNet: WagmiConfig = createConfig({
  chains: [localDevNetChain],
  transports: {
    [localDevNetChain.id]: fallback(
      localDevNetChain.rpcUrls.default.http.map((u) => http(u)),
    ),
  },
});

const fakeDataChain = defineChain({
  id: 31337 as const,
  name: 'Fake Data',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rpcUrls: {} as any,
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
});

export const fakeData: WagmiConfig = createConfig({
  chains: [fakeDataChain],
  transports: { [fakeDataChain.id]: fallback([]) },
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
