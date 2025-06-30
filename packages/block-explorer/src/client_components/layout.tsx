'use client';

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
  children: React.ReactNode | React.ReactNode[];
}

export default function LayoutClientComponent(
  props: LayoutClientComponentProps,
) {
  return (
    <InternalLinkAnchorComponentContext.Provider value={Link as any}>
      <ProvideNavigatorLanguage>
        <ProvideDerivedNumberFormatters>
          <ProvideDerivedDateTimeFormatters>
            <ProvideTickEverySecond>
              <EnvironmentBanner />
              {props.children}
            </ProvideTickEverySecond>
          </ProvideDerivedDateTimeFormatters>
        </ProvideDerivedNumberFormatters>
      </ProvideNavigatorLanguage>
    </InternalLinkAnchorComponentContext.Provider>
  );
}
