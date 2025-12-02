'use client';

import {
  Environment,
  EnvironmentContext,
  EspressoAddresses,
  EspressoConfigContext,
} from 'espresso-block-explorer-components';
import React from 'react';
import { EnvironmentConfig } from './read_from_env';

export interface EnvironmentProviderProps {
  env: EnvironmentConfig;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * EnvironmentProvider is a client component that provides the
 * environment configuration to the context providers.
 * This component receives the environment config as props from the server.
 */
export const EnvironmentProvider: React.FC<EnvironmentProviderProps> = ({
  env,
  children,
}) => {
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
