import { fallback } from '@wagmi/core';
import { Environment } from 'espresso-block-explorer-components';
import { defineChain } from 'viem';
import { http, type CreateConfigParameters } from 'wagmi';
import * as chains from 'wagmi/chains';
import { mock } from 'wagmi/connectors';

function httpTransports(urls: readonly string[]) {
  return fallback(urls.map((url) => http(url)));
}

export const mainnet: CreateConfigParameters = {
  chains: [chains.mainnet],
  transports: {
    [chains.mainnet.id]: httpTransports(chains.mainnet.rpcUrls.default.http),
  },
};

export const decaf: CreateConfigParameters = {
  chains: [chains.sepolia],
  transports: {
    [chains.sepolia.id]: httpTransports(chains.sepolia.rpcUrls.default.http),
  },
};

const waterChainID = 900;
const waterChain = defineChain({
  id: waterChainID,
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

export const water: CreateConfigParameters = {
  chains: [waterChain],
  transports: {
    [waterChain.id]: httpTransports(waterChain.rpcUrls.default.http),
  },
};

const milkChainID = 900;
const milkChain = defineChain({
  id: milkChainID,
  name: 'RETH (milk)',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://reth.milk.devnet.espresso.network'],
      webSocket: ['wss://wsgeth.milk.devnet.espresso.network'],
    },
  },
  testnet: true,
});

export const milk: CreateConfigParameters = {
  chains: [milkChain],
  transports: {
    [milkChain.id]: httpTransports(milkChain.rpcUrls.default.http),
  },
};

const localDevNetChainID = 31337;
const localDevnetChain = defineChain({
  id: localDevNetChainID,
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
export const localDevNet: CreateConfigParameters = {
  chains: [localDevnetChain],
  transports: {
    [localDevnetChain.id]: httpTransports(
      localDevnetChain.rpcUrls.default.http,
    ),
  },
};

const fakeDataChainID = 31337;
const fakeDataChain = defineChain({
  id: fakeDataChainID,
  name: 'Fake Data',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['http://localhost:8545'],
    },
  },
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
export const fakeData: CreateConfigParameters = {
  chains: [fakeDataChain],
  transports: {
    [fakeDataChain.id]: httpTransports(fakeDataChain.rpcUrls.default.http),
  },
};

/**
 * getWagmiConfigForEnvironment returns the appropriate WagmiConfig based on
 * the provided environment.
 * @param environment
 * @returns
 */
export function getWagmiConfigForEnvironment(
  environment: Environment,
): CreateConfigParameters {
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
