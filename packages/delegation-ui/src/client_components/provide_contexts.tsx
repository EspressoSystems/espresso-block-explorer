'use client';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import {
  EnvironmentBanner,
  ProvideDerivedDateTimeFormatters,
  ProvideDerivedNumberFormatters,
  ProvideESPTokenContract,
  ProvideHotShotQueryServiceAPIContext,
  ProvideL1Methods,
  ProvideLightClientV2Contract,
  ProvideNavigatorLanguage,
  ProvideNodeValidatorServiceAPIContext,
  ProvideRewardClaimContract,
  ProvideStakeTableV2Contract,
  ProvideStakingAPIServiceContext,
  ProvideTickEverySecond,
  RainbowKitContextInjector,
} from 'espresso-block-explorer-components';

/**
 * DelegationUIContexts is a component that provides all necessary components
 * that provide underlying React Context's to the rest of the component tree.
 * This is done in order to have a single location to manage these.
 *
 * NOTE: These Context providers do not require any external parameters.
 * Instead, these components will provide the Conext deriving the data that
 * are passed to the Contexts from the environment, or from other contexts.
 */
export default function DelegationUIContexts({
  children,
}: React.PropsWithChildren) {
  return (
    <ProvideNavigatorLanguage>
      <ProvideDerivedNumberFormatters>
        <ProvideDerivedDateTimeFormatters>
          <ProvideTickEverySecond>
            <ProvideNodeValidatorServiceAPIContext>
              <ProvideHotShotQueryServiceAPIContext>
                <ProvideStakingAPIServiceContext>
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
                </ProvideStakingAPIServiceContext>
              </ProvideHotShotQueryServiceAPIContext>
            </ProvideNodeValidatorServiceAPIContext>
          </ProvideTickEverySecond>
        </ProvideDerivedDateTimeFormatters>
      </ProvideDerivedNumberFormatters>
    </ProvideNavigatorLanguage>
  );
}
