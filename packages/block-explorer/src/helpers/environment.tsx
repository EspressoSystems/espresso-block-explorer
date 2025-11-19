'use client';

import { QueryClient } from '@tanstack/react-query';
import {
  Environment,
  EnvironmentContext,
  EspressoAddresses,
  EspressoConfigContext,
} from 'espresso-block-explorer-components';
import React from 'react';
import { EnvironmentConfig } from './read_from_env';

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
        value={
          {
            stakeTableContractAddress: env.contract_address_stake_table,
            espTokenContractAddress: env.contract_address_esp_token,
          } as EspressoAddresses
        }
      >
        {children}
      </EspressoConfigContext.Provider>
    </EnvironmentContext.Provider>
  );
};
