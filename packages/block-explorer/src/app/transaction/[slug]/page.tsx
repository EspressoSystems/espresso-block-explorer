'use client';

import {
  BlockNumberContext,
  ProvideGibraltarTransactionDetailDataSource,
  TransactionCommitContext,
  TransactionOffsetContext,
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
  const { slug = null } = params;
  if (slug === null) {
    return notFound();
  }

  // Let's make sure that our BlockID is a string, and is a numeric value
  if (typeof slug !== 'string') {
    return notFound();
  }

  const [height, offset = 0] = slug.split('-').map((part) => Number(part));

  if (isNaN(height) || isNaN(offset)) {
    return notFound();
  }

  return (
    <BlockNumberContext.Provider value={height}>
      <TransactionOffsetContext.Provider value={offset}>
        <ProvideGibraltarTransactionDetailDataSource>
          <TransactionPage />
        </ProvideGibraltarTransactionDetailDataSource>
      </TransactionOffsetContext.Provider>
    </BlockNumberContext.Provider>
  );
}
