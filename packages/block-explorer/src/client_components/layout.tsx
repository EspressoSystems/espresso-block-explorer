'use client';

import { EnvironmentProvider } from '@/helpers/environment';
import { EnvironmentConfig } from '@/helpers/read_from_env';
import {
  EnvironmentBanner,
  InternalLinkAnchorComponentContext,
  ProvideDerivedDateTimeFormatters,
  ProvideDerivedNumberFormatters,
  ProvideNavigatorLanguage,
  ProvideTickEverySecond,
} from 'espresso-block-explorer-components';
import Link from 'next/link';

export interface LayoutClientComponentProps {
  env: EnvironmentConfig;
  children: React.ReactNode | React.ReactNode[];
}

export default function LayoutClientComponent({
  env,
  children,
}: LayoutClientComponentProps) {
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
