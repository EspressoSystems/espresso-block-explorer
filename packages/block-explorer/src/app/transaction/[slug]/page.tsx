import TransactionClientComponent from '@/client_components/transaction';
import type { Metadata } from 'next';
import { Suspense } from 'react';

/**
 * generateMetadata returns a placeholder title that nginx replaces at request
 * time via sub_filter.  The params are intentionally ignored — the same shell
 * HTML is served for every transaction slug, so the placeholder is always emitted.
 */
export function generateMetadata(): Metadata {
  return { title: 'Transaction __TX_SLUG__' };
}

/**
 * generateStaticParams produces a single placeholder path so Next.js
 * generates a static shell at build time.  At runtime, nginx serves this
 * shell for any /transaction/<slug> request, and the client component reads
 * the actual slug from useParams().
 */
export async function generateStaticParams() {
  return [{ slug: '0' }];
}

/**
 * Transaction is a detail page concerning an individual Transaction.
 * The slug is read client-side via useParams() after hydration so the same
 * shell HTML can serve any transaction.
 */
export default function Transaction() {
  return (
    <Suspense fallback={<div />}>
      <TransactionClientComponent />
    </Suspense>
  );
}
