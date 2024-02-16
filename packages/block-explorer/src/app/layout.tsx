'use client';

import {
  FakeDataNotice,
  ProvideDerivedDateTimeFormatters,
  ProvideDerivedNumberFormatters,
  ProvideNavigatorLanguage,
  ProvideTickEverySecond,
} from 'espresso-block-explorer-components';
import 'espresso-block-explorer-components/dist/style.css';
import './globals.css';

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
                <FakeDataNotice />
                {children}
              </body>
            </html>
          </ProvideTickEverySecond>
        </ProvideDerivedDateTimeFormatters>
      </ProvideDerivedNumberFormatters>
    </ProvideNavigatorLanguage>
  );
}
