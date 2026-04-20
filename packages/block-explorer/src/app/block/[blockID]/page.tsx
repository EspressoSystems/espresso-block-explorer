import BlockClientComponent from '@/client_components/block';
import type { Metadata } from 'next';
import { Suspense } from 'react';

/**
 * generateMetadata returns a placeholder title that nginx replaces at request
 * time via sub_filter.  The params are intentionally ignored — the same shell
 * HTML is served for every block ID, so the placeholder is always emitted.
 */
export function generateMetadata(): Metadata {
  return { title: 'Block #__BLOCK_ID__' };
}

/**
 * generateStaticParams produces a single placeholder path so Next.js
 * generates a static shell at build time.  At runtime, nginx serves this
 * shell for any /block/<id> request, and the client component reads the
 * actual blockID from useParams().
 */
export async function generateStaticParams() {
  return [{ blockID: '0' }];
}

/**
 * Block is a Page for an individual Block.  The blockID is read client-side
 * via useParams() after hydration so the same shell HTML can serve any block.
 */
export default function Block() {
  return (
    <Suspense fallback={<div />}>
      <BlockClientComponent />
    </Suspense>
  );
}
