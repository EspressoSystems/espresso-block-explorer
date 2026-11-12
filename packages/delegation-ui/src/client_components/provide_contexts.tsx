'use client';

import {
  darkTheme,
  lightTheme,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
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
import { useColorTheme } from 'espresso-block-explorer-components/delegation-ui';

const nightTheme = darkTheme({
  accentColor: '#de9e67',
  accentColorForeground: '#451f17',
});

const dayTheme = lightTheme();

/** The wallet dialogs use the page's font instead of RainbowKit's own. */
const fonts = { body: "'Neue Montreal', sans-serif" };

/**
 * The wallet dialogs follow the page's theme toggle, taking the explorer's
 * colors at night.
 */
const rainbowKitThemes = {
  light: { ...dayTheme, fonts },
  dark: {
    ...nightTheme,
    fonts,
    colors: {
      ...nightTheme.colors,
      modalBackground: '#451f17',
      modalBorder: '#b672373d',
      modalText: '#fcebde',
      modalTextSecondary: '#de9e67',
      generalBorder: '#b672373d',
    },
  },
};

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
  const colorTheme = useColorTheme();

  return (
    <ProvideNavigatorLanguage>
      <ProvideDerivedNumberFormatters>
        <ProvideDerivedDateTimeFormatters>
          <ProvideTickEverySecond>
            <ProvideNodeValidatorServiceAPIContext>
              <ProvideHotShotQueryServiceAPIContext>
                <ProvideStakingAPIServiceContext>
                  <RainbowKitProvider theme={rainbowKitThemes[colorTheme]}>
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
