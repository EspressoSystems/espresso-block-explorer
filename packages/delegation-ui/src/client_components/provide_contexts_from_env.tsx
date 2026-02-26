'use client';

import { EnvironmentProvider } from '@/helpers/environment';
import { EnvironmentConfig } from '@/helpers/read_from_env';
import { getWagmiConfigForEnvironment } from '@/helpers/wagmi';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  Environment,
  ProofOfStakeReleasedContext,
} from 'espresso-block-explorer-components';
import React from 'react';
import {
  createConfig,
  fallback,
  http,
  WagmiProvider,
  type CreateConfigParameters,
} from 'wagmi';

/**
 * ProvideContextsFromEnvProps represents the types for the props that are
 * being passed to the ProvideContextsFromEnv.
 */
export interface ProvideContextsFromEnvProps extends React.PropsWithChildren {
  env: EnvironmentConfig;
}

/**
 * ProvideContextsFromEnv is a client side component that will populate
 * initial contexts from information that has been provided by Environment
 * variables.
 *
 * These Environment variables should already have been resolved at this
 * point.
 */
export default function ProvideContextsFromEnv({
  env,
  children,
}: ProvideContextsFromEnvProps) {
  const rawWagmiConfig = React.useMemo(
    () => getWagmiConfigForEnvironment(env.environment as Environment),
    [env.environment],
  );

  const queryClient = React.useMemo(() => new QueryClient(), []);

  const transports = React.useMemo(
    () =>
      !env.rpc_urls
        ? {}
        : {
            transports: {
              [rawWagmiConfig.chains[0].id]: fallback(
                env.rpc_urls.map((url) => http(url)),
              ),
            },
          },
    [env.rpc_urls, rawWagmiConfig.chains],
  );

  const rainbowKitWagmiConfig = React.useMemo(
    () =>
      !env.walletconnect_project_id
        ? createConfig({
            ...rawWagmiConfig,
            ...transports,
            ssr: true,
          } as CreateConfigParameters)
        : getDefaultConfig({
            appName: 'Espresso Delegation UI',
            projectId: env.walletconnect_project_id,
            ...rawWagmiConfig,
            ...transports,
            ssr: true,
          }),
    [env.walletconnect_project_id, rawWagmiConfig, transports],
  );

  return (
    <EnvironmentProvider env={env}>
      <ProofOfStakeReleasedContext.Provider value={env.proof_of_stake_released}>
        <WagmiProvider config={rainbowKitWagmiConfig}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </WagmiProvider>
      </ProofOfStakeReleasedContext.Provider>
    </EnvironmentProvider>
  );
}
