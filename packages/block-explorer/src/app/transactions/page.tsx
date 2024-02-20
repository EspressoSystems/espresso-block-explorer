'use client';

import {
  ProvideGibraltarTransactionsSummaryDataSource,
  TransactionsPage,
} from 'espresso-block-explorer-components';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';

/**
 * Transactions is a page that lists a summary of all transactions within the
 * block chain in a paginated manner.
 */
export default function Transactions() {
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

  return (
    <ProvideGibraltarTransactionsSummaryDataSource>
      <TransactionsPage startAtBlock={startAtBlock} offset={offset} />
    </ProvideGibraltarTransactionsSummaryDataSource>
  );
}
