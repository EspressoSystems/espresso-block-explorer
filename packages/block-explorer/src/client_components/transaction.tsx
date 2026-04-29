'use client';

import { getSiteTitleConfig } from '@/helpers/read_from_env';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import {
  EnvironmentContext,
  ProvideHotShotQueryServiceAPIContext,
} from 'espresso-block-explorer-components';
import {
  BlockNumberContext,
  ProvideTransactionDetailDataSource,
  TransactionOffsetContext,
  TransactionPage,
} from 'espresso-block-explorer-components/block-explorer';
import { notFound, usePathname } from 'next/navigation';
import { useContext } from 'react';

const pathRegExp = /\/transaction\/\d+\-\d+/;

export default function TransactionClientComponent() {
  const pathname = usePathname();
  const [slugRaw = '0'] = pathname.split('/').reverse();
  const slug = slugRaw ?? '0';

  const [height, offset = 0] = (slug ?? '0')
    .split('-')
    .map((part) => Number(part));

  const environment = useContext(EnvironmentContext);
  const { sitePrefix, networkSiteName } = getSiteTitleConfig(environment);
  useDocumentTitle(`${sitePrefix} Transaction ${slug} | ${networkSiteName}`);

  if (
    !pathRegExp.test(pathname) ||
    typeof height !== 'number' ||
    !Number.isInteger(height) ||
    height < 0 ||
    typeof offset !== 'number' ||
    !Number.isInteger(offset) ||
    offset < 0
  ) {
    notFound();
  }

  return (
    <BlockNumberContext.Provider value={height}>
      <TransactionOffsetContext.Provider value={offset}>
        <ProvideHotShotQueryServiceAPIContext>
          <ProvideTransactionDetailDataSource>
            <TransactionPage />
          </ProvideTransactionDetailDataSource>
        </ProvideHotShotQueryServiceAPIContext>
      </TransactionOffsetContext.Provider>
    </BlockNumberContext.Provider>
  );
}
