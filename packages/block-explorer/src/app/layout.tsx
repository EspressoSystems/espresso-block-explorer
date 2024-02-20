'use client';

import React from 'react';
import {
  DataContext,
  ErrorContext,
  FakeDataNotice,
  LoadingContext,
  PromiseResolver,
  ProvideDerivedDateTimeFormatters,
  ProvideDerivedNumberFormatters,
  ProvideGibraltarLiveService,
  ProvideNavigatorLanguage,
  ProvideTickEverySecond,
} from 'espresso-block-explorer-components';
import 'espresso-block-explorer-components/dist/style.css';
import './globals.css';

interface Configuration {
  hotshot_query_service_url?: null | string;
}

interface ProcessConfigurationProps {
  children: React.ReactNode | React.ReactNode[];
}

const ProcessConfiguration: React.FC<ProcessConfigurationProps> = ({
  children,
}) => {
  const loading = React.useContext(LoadingContext);
  const error = React.useContext(ErrorContext);
  const data = React.useContext(DataContext) as Configuration;
  const { hotshot_query_service_url: urlString = null } = data || {};

  if (loading) {
    return <></>;
  }

  if (error || urlString === null) {
    // If we don't have a configuration, then we will just use the fake data
    return (
      <>
        <FakeDataNotice />
        {children}
      </>
    );
  }

  try {
    const url = new URL(urlString);

    return (
      <ProvideGibraltarLiveService url={url}>
        {children}
      </ProvideGibraltarLiveService>
    );
  } catch (err) {
    // if we have an error parsing a URL, then we will just fallback to the
    // fake data.
    return (
      <>
        <FakeDataNotice />
        {children}
      </>
    );
  }
};

interface LoadConfigurationProps {
  children: React.ReactNode | React.ReactNode[];
}

const LoadConfiguration: React.FC<LoadConfigurationProps> = ({ children }) => {
  if (typeof window === 'undefined') {
    return <></>;
  }

  return (
    <PromiseResolver
      promise={fetch('/config.json').then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch configuration');
        }

        return response.json();
      })}
    >
      <ProcessConfiguration>{children}</ProcessConfiguration>
    </PromiseResolver>
  );
};

/**
 * RootLayout is the default layout of the NextJS Application.  All Pages,
 * by default, have this layout as their default layout.
 *
 * As such, we include a bunch of the provided Contexts at this level in
 * order to ensure that they are available consistently on every page.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProvideNavigatorLanguage>
      <ProvideDerivedNumberFormatters>
        <ProvideDerivedDateTimeFormatters>
          <ProvideTickEverySecond>
            <html lang="en">
              <body>
                <LoadConfiguration>{children}</LoadConfiguration>
              </body>
            </html>
          </ProvideTickEverySecond>
        </ProvideDerivedDateTimeFormatters>
      </ProvideDerivedNumberFormatters>
    </ProvideNavigatorLanguage>
  );
}
