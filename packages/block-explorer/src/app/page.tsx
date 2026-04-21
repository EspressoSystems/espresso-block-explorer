import ExplorerClientComponent from '@/client_components/explorer';
import type { Metadata } from 'next';
import { Suspense } from 'react';

// app/page.tsx is co-located with the root layout, so its title string replaces
// the layout's title object entirely rather than feeding into the template.
// Emit the placeholders directly so nginx sub_filter resolves them at request time.
export const metadata: Metadata = {
  title: '__SITE_PREFIX__ Espresso Block Explorer | __NETWORK_SITE_NAME__',
  description:
    '__NETWORK_SITE_NAME__ allows you to explore and search the Espresso chain for transactions, and blocks taking place on __NETWORK_NAME__',
  alternates: {
    canonical: '/',
  },
};

/**
 * Home represents the default home screen navigated to by the path '/'.
 *
 * It is currently a placeholder as we do not have the elements / components
 * for the "Block Explorer" home page fleshed out quite yet.
 */
export default async function Explorer() {
  return (
    <Suspense fallback={<div />}>
      <ExplorerClientComponent />
    </Suspense>
  );
}
