'use client';

import { ProvideHotShotQueryServiceAPIContext } from 'espresso-block-explorer-components';
import { EnvironmentContext } from 'espresso-block-explorer-components';
import {
  BlockNumberContext,
  ProvideTransactionDetailDataSource,
  TransactionOffsetContext,
  TransactionPage,
} from 'espresso-block-explorer-components/block-explorer';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { getSiteTitleConfig } from '@/helpers/read_from_env';
import { useContext } from 'react';
import { usePathname } from 'next/navigation';

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
