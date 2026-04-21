import TransactionsClientComponent from '@/client_components/transactions';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Transactions',
  description:
    'Transactions that have been commited to and confirmed on __NETWORK_SITE_NAME__.',
  alternates: {
    canonical: '/transactions',
  },
};

/**
 * Transactions is a page that lists a summary of all transactions within the
 * block chain in a paginated manner.
 * Pagination params (height, offset, block) are read client-side via useSearchParams().
 */
export default function Transactions() {
  return (
    <Suspense fallback={<div />}>
      <TransactionsClientComponent />
    </Suspense>
  );
}
