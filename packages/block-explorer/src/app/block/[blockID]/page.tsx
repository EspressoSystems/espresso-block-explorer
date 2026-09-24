import type { Metadata } from 'next';

/**
 * generateMetadata returns a placeholder title that nginx replaces at request
 * time via sub_filter.  The params are intentionally ignored — the same shell
 * HTML is served for every block ID, so the placeholder is always emitted.
 */
export function generateMetadata(): Metadata {
  return {
    title: 'Block #__BLOCK_ID__',
    description:
      '__NETWORK_NAME__ Block Height __BLOCK_ID__. The timestamp, number of transactions, and other details are outlined here.',
    alternates: {
      canonical: '/block/__BLOCK_ID__',
    },
  };
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

/** The block page itself is rendered by BlockLayout. */
export default function Block() {
  return null;
}
