'use client';

import {
  AbsolutePathResolver,
  PathResolverContext,
  ProvideDerivedDateTimeFormatters,
  ProvideDerivedNumberFormatters,
  ProvideNavigatorLanguage,
  ProvideTickEverySecond,
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
                  new URL('https://explorer.main.net.espresso.network/'),
                )
              }
            >
              {props.children}
            </PathResolverContext.Provider>
          </ProvideTickEverySecond>
        </ProvideDerivedDateTimeFormatters>
      </ProvideDerivedNumberFormatters>
    </ProvideNavigatorLanguage>
  );
};
