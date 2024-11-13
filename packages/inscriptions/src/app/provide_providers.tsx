'use client';

import {
  AbsolutePathResolver,
  PathResolverContext,
  ProvideDerivedDateTimeFormatters,
  ProvideDerivedNumberFormatters,
  ProvideNavigatorLanguage,
  ProvideTickEverySecond,
  TweetURLProvider,
} from 'espresso-block-explorer-components';
import 'espresso-block-explorer-components/dist/style.css';
import React from 'react';
import './globals.css';

export interface ProvideProvidersProps {
  children: React.ReactNode | React.ReactNode[];
}

export const ProvideProviders: React.FC<ProvideProvidersProps> = (props) => {
  return (
    <ProvideNavigatorLanguage>
      <ProvideDerivedNumberFormatters>
        <ProvideDerivedDateTimeFormatters>
          <ProvideTickEverySecond>
            <PathResolverContext.Provider
              value={
                new AbsolutePathResolver(
                  new URL(
                    process.env.NEXT_PUBLIC_BLOCK_EXPLORER_BASE_URL ??
                      'https://explorer.decaf.testnet.espresso.network/',
                  ),
                )
              }
            >
              <TweetURLProvider.Provider
                value={
                  new URL(
                    process.env.NEXT_PUBLIC_TWEET_URL ??
                      'https://x.com/EspressoSys/status/1855973751982309624',
                  )
                }
              >
                {props.children}
              </TweetURLProvider.Provider>
            </PathResolverContext.Provider>
          </ProvideTickEverySecond>
        </ProvideDerivedDateTimeFormatters>
      </ProvideDerivedNumberFormatters>
    </ProvideNavigatorLanguage>
  );
};
