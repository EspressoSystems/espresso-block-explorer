'use client';

import {
  ProvideFakeTransactionDetailDataSource,
  TransactionCommitContext,
  TransactionPage,
  parseHexString,
} from 'espresso-block-explorer-components';
import { notFound, useParams } from 'next/navigation';

/**
 * Transaction is a detail page concerning an individual Transaction.
 * The transaction is identified by the Hash of the specifid Transaction.
 */
export default function Transaction() {
  const params = useParams();

  // Let's make sure that we have our BlockID param
  const { hash = null } = params;
  if (hash === null) {
    return notFound();
  }

  // Let's make sure that our BlockID is a string, and is a numeric value
  if (typeof hash !== 'string') {
    return notFound();
  }

  const parsed = parseHexString(hash);

  return (
    <TransactionCommitContext.Provider value={parsed}>
      <ProvideFakeTransactionDetailDataSource>
        <TransactionPage />
      </ProvideFakeTransactionDetailDataSource>
    </TransactionCommitContext.Provider>
  );
}
