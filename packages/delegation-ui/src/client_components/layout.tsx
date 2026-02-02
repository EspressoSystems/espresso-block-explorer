'use client';

import { EnvironmentProvider } from '@/helpers/environment';
import { EnvironmentConfig } from '@/helpers/read_from_env';
import { getWagmiConfigForEnvironment } from '@/helpers/wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  Environment,
  EnvironmentBanner,
  ProvideCappuccinoHotShotQueryServiceAPIContext,
  ProvideCappuccinoNodeValidatorServiceAPIContext,
  ProvideDerivedDateTimeFormatters,
  ProvideDerivedNumberFormatters,
  ProvideESPTokenContract,
  ProvideL1Methods,
  ProvideL1ValidatorServiceAPIContext,
  ProvideLightClientV2Contract,
  ProvideNavigatorLanguage,
  ProvideRewardClaimContract,
  ProvideStakeTableV2Contract,
  ProvideTickEverySecond,
  RainbowKitContextInjector,
} from 'espresso-block-explorer-components';
import Link from 'next/link';
import { WagmiProvider } from 'wagmi';

export interface LayoutClientComponentProps {
  env: EnvironmentConfig;
  children: React.ReactNode | React.ReactNode[];
}

const queryClient = new QueryClient();

export default function LayoutClientComponent({
  env,
  children,
}: LayoutClientComponentProps) {
  return (
    <EnvironmentProvider env={env}>
      <ProvideNavigatorLanguage>
        <ProvideDerivedNumberFormatters>
          <ProvideDerivedDateTimeFormatters>
            <ProvideTickEverySecond>
              <ProvideCappuccinoNodeValidatorServiceAPIContext>
                <ProvideCappuccinoHotShotQueryServiceAPIContext>
                  <ProvideL1ValidatorServiceAPIContext>
                    <WagmiProvider
                      config={getWagmiConfigForEnvironment(
                        env.environment as Environment,
                      )}
                    >
                      <QueryClientProvider client={queryClient}>
                        <RainbowKitProvider>
                          <RainbowKitContextInjector>
                            <ProvideL1Methods>
                              <ProvideESPTokenContract>
                                <ProvideStakeTableV2Contract>
                                  <ProvideRewardClaimContract>
                                    <ProvideLightClientV2Contract>
                                      <EnvironmentBanner />
                                      {children}
                                    </ProvideLightClientV2Contract>
                                  </ProvideRewardClaimContract>
                                </ProvideStakeTableV2Contract>
                              </ProvideESPTokenContract>
                            </ProvideL1Methods>
                          </RainbowKitContextInjector>
                        </RainbowKitProvider>
                      </QueryClientProvider>
                    </WagmiProvider>
                  </ProvideL1ValidatorServiceAPIContext>
                </ProvideCappuccinoHotShotQueryServiceAPIContext>
              </ProvideCappuccinoNodeValidatorServiceAPIContext>
            </ProvideTickEverySecond>
          </ProvideDerivedDateTimeFormatters>
        </ProvideDerivedNumberFormatters>
      </ProvideNavigatorLanguage>
    </EnvironmentProvider>
  );
}
