'use client';

import { EnvironmentProvider } from '@/helpers/environment';
import { EnvironmentConfig, parseConfigFromJSON } from '@/helpers/read_from_env';
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
 * ProvideContextsFromEnv fetches /config.json on mount and provides all
 * environment-derived contexts to its children.
 *
 * Returns null while the config is loading (a fast static file fetch),
 * then renders the full provider tree once the config is available.
 */
export default function ProvideContextsFromEnv({
  children,
}: React.PropsWithChildren) {
  const [env, setEnv] = React.useState<EnvironmentConfig | null>(null);

  React.useEffect(() => {
    fetch('/config.json')
      .then((r) => r.json())
      .then((data) => setEnv(parseConfigFromJSON(data)))
      .catch((err) => {
        console.error('Failed to load app config:', err);
      });
  }, []);

  if (env === null) {
    return null;
  }

  return <ProvideContextsWithEnv env={env}>{children}</ProvideContextsWithEnv>;
}

/**
 * ProvideContextsWithEnv sets up the Wagmi and RainbowKit providers once
 * a valid EnvironmentConfig has been loaded. This component is only rendered
 * after config is available, so the Wagmi config is never recreated.
 */
function ProvideContextsWithEnv({
  env,
  children,
}: { env: EnvironmentConfig } & React.PropsWithChildren) {
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
