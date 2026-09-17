'use client';

import { ProvideHotShotQueryServiceAPIContext } from 'espresso-block-explorer-components';
import {
  ProvideTransactionsSummaryDataSource,
  TransactionsPage,
} from 'espresso-block-explorer-components/block-explorer';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

// Ethereum Example Title:

/**
 * RedirectToBlock sends the legacy /transactions?block=<id> view to the block
 * page, which now lists a block's transactions beneath its details. The
 * redirect happens client side because production builds are exported as
 * static files, so there is no server available to redirect for us.
 */
function RedirectToBlock({ block }: { block: number }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/block/${block}`);
  }, [router, block]);

  return null;
}

function TransactionsContent() {
  const searchParams = useSearchParams();
  const heightParam = searchParams.get('height');
  const offsetParam = searchParams.get('offset');
  const blockParam = searchParams.get('block');

  const startAtBlock = heightParam !== null ? Number(heightParam) : undefined;
  const offset = offsetParam !== null ? Number(offsetParam) : undefined;
  const block = blockParam !== null ? Number(blockParam) : undefined;

  if (block !== undefined) {
    return <RedirectToBlock block={block} />;
  }

  return (
    <ProvideHotShotQueryServiceAPIContext>
      <ProvideTransactionsSummaryDataSource>
        <TransactionsPage startAtBlock={startAtBlock} offset={offset} />
      </ProvideTransactionsSummaryDataSource>
    </ProvideHotShotQueryServiceAPIContext>
  );
}

export default function TransactionsClientComponent() {
  return (
    <Suspense>
      <TransactionsContent />
    </Suspense>
  );
}
