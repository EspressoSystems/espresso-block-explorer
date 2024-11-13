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
  const blockExplorerURLString =
    process.env.NEXT_PUBLIC_BLOCK_EXPLORER_BASE_URL ??
    'https://explorer.decaf.testnet.espresso.network/';
  const blockExplorerURL = new URL(blockExplorerURLString);

  const tweetURLString = process.env.NEXT_PUBLIC_TWEET_URL || null;
  const tweetURL = tweetURLString ? new URL(tweetURLString) : null;

  return (
    <ProvideNavigatorLanguage>
      <ProvideDerivedNumberFormatters>
        <ProvideDerivedDateTimeFormatters>
          <ProvideTickEverySecond>
            <PathResolverContext.Provider
              value={new AbsolutePathResolver(blockExplorerURL)}
            >
              <TweetURLProvider.Provider value={tweetURL}>
                {props.children}
              </TweetURLProvider.Provider>
            </PathResolverContext.Provider>
          </ProvideTickEverySecond>
        </ProvideDerivedDateTimeFormatters>
      </ProvideDerivedNumberFormatters>
    </ProvideNavigatorLanguage>
  );
};
