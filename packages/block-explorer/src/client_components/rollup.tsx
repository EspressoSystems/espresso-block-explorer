'use client';

import {
  NamespaceContext,
  ProvideHotShotQueryServiceAPIContext,
} from 'espresso-block-explorer-components';
import {
  ProvideRollUpDetailDataSource,
  RollUpPage,
} from 'espresso-block-explorer-components/block-explorer';
import { usePathname, useSearchParams } from 'next/navigation';

// Ethereum Example Title:

export default function RollupClientComponent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [namespaceRaw = '0'] = pathname.split('/').reverse();
  const namespace = Number(namespaceRaw ?? '0');

  const startAtParamRaw = searchParams.get('height');
  const startAtBlock =
    startAtParamRaw === null ? undefined : Number(startAtParamRaw);

  const offsetRaw = searchParams.get('offset');
  const offset = offsetRaw === null ? undefined : Number(offsetRaw);

  return (
    <NamespaceContext.Provider value={namespace}>
      <ProvideHotShotQueryServiceAPIContext>
        <ProvideRollUpDetailDataSource>
          <RollUpPage startAtBlock={startAtBlock} offset={offset} />
        </ProvideRollUpDetailDataSource>
      </ProvideHotShotQueryServiceAPIContext>
    </NamespaceContext.Provider>
  );
}
