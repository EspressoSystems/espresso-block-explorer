'use client';

import { ProvideHotShotQueryServiceAPIContext } from 'espresso-block-explorer-components';
import {
  BlocksPage,
  ProvideBlocksSummaryDataSource,
} from 'espresso-block-explorer-components/block-explorer';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function BlocksContent() {
  const searchParams = useSearchParams();
  const heightParam = searchParams.get('height');
  const startAtBlock = heightParam !== null ? Number(heightParam) : undefined;

  return (
    <ProvideHotShotQueryServiceAPIContext>
      <ProvideBlocksSummaryDataSource>
        <BlocksPage startAtBlock={startAtBlock} />
      </ProvideBlocksSummaryDataSource>
    </ProvideHotShotQueryServiceAPIContext>
  );
}

export default function BlocksClientComponent() {
  return (
    <Suspense>
      <BlocksContent />
    </Suspense>
  );
}
