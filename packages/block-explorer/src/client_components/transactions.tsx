'use client';

import { ProvideHotShotQueryServiceAPIContext } from 'espresso-block-explorer-components';
import {
  ProvideBlockDetailDataSource,
  ProvideTransactionsForBlockSummaryDataSource,
  ProvideTransactionsSummaryDataSource,
  TransactionsForBlockPage,
  TransactionsPage,
} from 'espresso-block-explorer-components/block-explorer';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// Ethereum Example Title:

function TransactionsContent() {
  const searchParams = useSearchParams();
  const heightParam = searchParams.get('height');
  const offsetParam = searchParams.get('offset');
  const blockParam = searchParams.get('block');

  const startAtBlock = heightParam !== null ? Number(heightParam) : undefined;
  const offset = offsetParam !== null ? Number(offsetParam) : undefined;
  const block = blockParam !== null ? Number(blockParam) : undefined;

  if (block !== undefined) {
    return (
      <ProvideHotShotQueryServiceAPIContext>
        <ProvideTransactionsForBlockSummaryDataSource>
          <ProvideBlockDetailDataSource>
            <TransactionsForBlockPage block={block} offset={offset} />
          </ProvideBlockDetailDataSource>
        </ProvideTransactionsForBlockSummaryDataSource>
      </ProvideHotShotQueryServiceAPIContext>
    );
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
