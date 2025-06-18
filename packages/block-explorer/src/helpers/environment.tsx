'use client';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  Environment,
  EnvironmentContext,
  EspressoConfigContext,
  RainbowKitContextInjector,
} from 'espresso-block-explorer-components';
import React from 'react';
import { EnvironmentConfig } from './read_from_env';
import { DeriveWagmiFromEnvironment } from './wagmi';

export interface DeriveEnvironmentFromEnvProps {
  env: EnvironmentConfig;
  children: React.ReactNode | React.ReactNode[];
}

const queryClient = new QueryClient();

/**
 * DeriveEnvironmentFromEnv is a React component that derives the
 * Environment from the provided EnvironmentConfig and provides it
 * to the EnvironmentContext.
 */
export const DeriveEnvironmentFromEnv: React.FC<
  DeriveEnvironmentFromEnvProps
> = ({ env, children }) => {
  return (
    <EnvironmentContext.Provider value={env.environment as Environment}>
      <EspressoConfigContext.Provider
        value={{
          contract_address_stake_table: env.contract_address_stake_table,
          contract_address_esp_token: env.contract_address_esp_token,
        }}
      >
        <DeriveWagmiFromEnvironment>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
              <RainbowKitContextInjector>{children}</RainbowKitContextInjector>
            </RainbowKitProvider>
          </QueryClientProvider>
        </DeriveWagmiFromEnvironment>
      </EspressoConfigContext.Provider>
    </EnvironmentContext.Provider>
  );
};
