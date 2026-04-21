'use client';

import { getSiteTitleConfig } from '@/helpers/read_from_env';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import {
  ProvideHotShotQueryServiceAPIContext,
  EnvironmentContext,
} from 'espresso-block-explorer-components';
import {
  BlockNumberContext,
  BlockPage,
  ProvideBlockDetailDataSource,
} from 'espresso-block-explorer-components/block-explorer';
import { usePathname, notFound } from 'next/navigation';
import { useContext } from 'react';

const pathRegExp = /\/block\/\d+/;

export default function BlockClientComponent() {
  const pathname = usePathname();
  const [blockIDRaw = '0'] = pathname.split('/').reverse();
  const blockID = Number(blockIDRaw ?? '0');

  const environment = useContext(EnvironmentContext);
  const { sitePrefix, networkSiteName } = getSiteTitleConfig(environment);
  useDocumentTitle(`${sitePrefix} Block #${blockID} | ${networkSiteName}`);

  if (
    !pathRegExp.test(pathname) ||
    typeof blockID !== 'number' ||
    !Number.isInteger(blockID) ||
    blockID < 0
  ) {
    notFound();
  }

  return (
    <BlockNumberContext.Provider value={blockID}>
      <ProvideHotShotQueryServiceAPIContext>
        <ProvideBlockDetailDataSource>
          <BlockPage />
        </ProvideBlockDetailDataSource>
      </ProvideHotShotQueryServiceAPIContext>
    </BlockNumberContext.Provider>
  );
}
