'use client';

import {
  ProvideCappuccinoBlockDetailDataSource,
  ProvideCappuccinoHotShotQueryServiceAPIContext,
  ProvideCappuccinoTransactionsForBlockSummaryDataSource,
  ProvideCappuccinoTransactionsSummaryDataSource,
  TransactionsForBlockPage,
  TransactionsPage,
} from 'espresso-block-explorer-components';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

/**
 * Transactions is a page that lists a summary of all transactions within the
 * block chain in a paginated manner.
 */
export default function Transactions() {
  return (
    <Suspense>
      <TransactionsPageSuspended />
    </Suspense>
  );
}

function TransactionsPageSuspended() {
  const searchParams = useSearchParams();

  const getNumberFromParams = (
    params: ReadonlyURLSearchParams,
    key: string,
  ) => {
    if (params.has(key)) {
      const value = params.get(key);
      if (value !== null) {
        return Number(value);
      }
    }

    return undefined;
  };

  const startAtBlock = getNumberFromParams(searchParams, 'height');
  const offset = getNumberFromParams(searchParams, 'offset');
  const block = getNumberFromParams(searchParams, 'block');

  if (block !== undefined) {
    return (
      <ProvideCappuccinoHotShotQueryServiceAPIContext>
        <ProvideCappuccinoTransactionsForBlockSummaryDataSource>
          <ProvideCappuccinoBlockDetailDataSource>
            <TransactionsForBlockPage block={block} offset={offset} />
          </ProvideCappuccinoBlockDetailDataSource>
        </ProvideCappuccinoTransactionsForBlockSummaryDataSource>
      </ProvideCappuccinoHotShotQueryServiceAPIContext>
    );
  }

  return (
    <ProvideCappuccinoHotShotQueryServiceAPIContext>
      <ProvideCappuccinoTransactionsSummaryDataSource>
        <TransactionsPage startAtBlock={startAtBlock} offset={offset} />
      </ProvideCappuccinoTransactionsSummaryDataSource>
    </ProvideCappuccinoHotShotQueryServiceAPIContext>
  );
}
