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
  parseBlockTransactionsPosition,
  ProvideBlockDetailDataSource,
} from 'espresso-block-explorer-components/block-explorer';
import { usePathname, notFound, useSearchParams } from 'next/navigation';
import { Suspense, useContext } from 'react';

const pathRegExp = /\/block\/\d+/;

/**
 * BlockClientComponent shows the block, with the page of its transactions
 * picked by `?position=`. Next renders whatever reads the query string only
 * in the browser, so the block at its first page is prerendered instead.
 */
export default function BlockClientComponent() {
  return (
    <Suspense fallback={<Block transactionsPosition={0} />}>
      <BlockAtPosition />
    </Suspense>
  );
}

function BlockAtPosition() {
  const position = useSearchParams().get('position');
  return (
    <Block transactionsPosition={parseBlockTransactionsPosition(position)} />
  );
}

function Block({ transactionsPosition }: { transactionsPosition: number }) {
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
          <BlockPage transactionsPosition={transactionsPosition} />
        </ProvideBlockDetailDataSource>
      </ProvideHotShotQueryServiceAPIContext>
    </BlockNumberContext.Provider>
  );
}
