import BlocksClientComponent from '@/client_components/blocks';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Blocks',
  description:
    'Blocks that have are included and finalized in __NETWORK_SITE_NAME__.',
  alternates: {
    canonical: '/blocks',
  },
};

/**
 * Blocks represents the Blocks Summary Page.
 *
 * It displays a summary of the Blocks listed in a paginated way.
 * Pagination params (height) are read client-side via useSearchParams().
 */
export default function Blocks() {
  return (
    <Suspense fallback={<div />}>
      <BlocksClientComponent />
    </Suspense>
  );
}
