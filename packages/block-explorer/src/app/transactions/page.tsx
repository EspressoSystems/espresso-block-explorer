'use client';

import {
  ProvideFakeTransactionsSummaryDataSource,
  TransactionsPage,
} from 'espresso-block-explorer-components';

/**
 * Transactions is a page that lists a summary of all transactions within the
 * block chain in a paginated manner. 
 */
export default function Transactions() {
  return (
    <ProvideFakeTransactionsSummaryDataSource>
      <TransactionsPage />
    </ProvideFakeTransactionsSummaryDataSource>
  );
}
