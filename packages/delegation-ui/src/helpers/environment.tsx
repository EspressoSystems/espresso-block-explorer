'use client';

import {
  Environment,
  EnvironmentContext,
  EspressoAddresses,
  EspressoConfigContext,
} from 'espresso-block-explorer-components';
import {
  SampleValidatorHistoryContext,
  ValidatorHistoryURLContext,
} from 'espresso-block-explorer-components/delegation-ui';
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
            rewardClaimContractAddress: env.contract_address_reward_claim,
            lightClientContractAddress: env.contract_address_light_client,
          } as EspressoAddresses
        }
      >
        <ValidatorHistoryURLContext.Provider value={env.validator_history_url}>
          {/* Sample validator history is for local development only. A
              built site without a history source shows history as
              unavailable instead of made-up numbers. */}
          <SampleValidatorHistoryContext.Provider
            value={process.env.NODE_ENV === 'development'}
          >
            {children}
          </SampleValidatorHistoryContext.Provider>
        </ValidatorHistoryURLContext.Provider>
      </EspressoConfigContext.Provider>
    </EnvironmentContext.Provider>
  );
};
