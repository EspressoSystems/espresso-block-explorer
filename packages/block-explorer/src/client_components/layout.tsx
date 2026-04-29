'use client';

import { EnvironmentProvider } from '@/helpers/environment';
import {
  determineEnvironmentFromVariable,
  type EnvironmentConfig,
} from '@/helpers/read_from_env';
import {
  EnvironmentBanner,
  ProvideDerivedDateTimeFormatters,
  ProvideDerivedNumberFormatters,
  ProvideNavigatorLanguage,
  ProvideTickEverySecond,
} from 'espresso-block-explorer-components';
import {
  InternalLinkAnchorComponentContext,
} from 'espresso-block-explorer-components/block-explorer';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function LayoutClientComponent({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const [env, setEnv] = useState<EnvironmentConfig>({ environment: 'mainnet' });

  useEffect(() => {
    fetch('/config.json')
      .then((r) => r.json())
      .then((config: { ENVIRONMENT_NAME?: string }) => {
        setEnv({
          environment: determineEnvironmentFromVariable(config.ENVIRONMENT_NAME),
        });
      })
      .catch(() => {});
  }, []);

  return (
    <EnvironmentProvider env={env}>
      <InternalLinkAnchorComponentContext.Provider value={Link as any}>
        <ProvideNavigatorLanguage>
          <ProvideDerivedNumberFormatters>
            <ProvideDerivedDateTimeFormatters>
              <ProvideTickEverySecond>
                <EnvironmentBanner />
                {children}
              </ProvideTickEverySecond>
            </ProvideDerivedDateTimeFormatters>
          </ProvideDerivedNumberFormatters>
        </ProvideNavigatorLanguage>
      </InternalLinkAnchorComponentContext.Provider>
    </EnvironmentProvider>
  );
}
