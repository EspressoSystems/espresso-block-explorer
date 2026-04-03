'use client';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import {
  EnvironmentBanner,
  ProvideHotShotQueryServiceAPIContext,
  ProvideNodeValidatorServiceAPIContext,
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
                <ProvideL1ValidatorServiceAPIContext>
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
                </ProvideL1ValidatorServiceAPIContext>
              </ProvideHotShotQueryServiceAPIContext>
            </ProvideNodeValidatorServiceAPIContext>
          </ProvideTickEverySecond>
        </ProvideDerivedDateTimeFormatters>
      </ProvideDerivedNumberFormatters>
    </ProvideNavigatorLanguage>
  );
}
