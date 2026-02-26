import DelegationUIClientComponent from '@/client_components/delegation_ui';
import { type Metadata } from 'next';
import { Suspense } from 'react';

/**
 * generateMetadata returns static metadata with placeholder values for the
 * deployment-specific URL fields.
 *
 * At container startup, the entrypoint script replaces these placeholders in
 * the exported HTML files with the actual BASE_URL and BASE_PATH env var
 * values before nginx begins serving traffic.
 */
export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL('https://placeholder.espresso.foundation'),
    title: 'Espresso Staking Dashboard',
    description:
      'Stake your ESP, delegate to validators, and monitor your contribution to securing the Espresso Network',
    alternates: {
      canonical: '/ESPRESSO_BASE_PATH_PLACEHOLDER/',
    },
    openGraph: {
      url: '/ESPRESSO_BASE_PATH_PLACEHOLDER/',
      images: ['/ESPRESSO_BASE_PATH_PLACEHOLDER/esp-staking-dashboard.png'],
      type: 'website',
    },
    twitter: {
      images: ['/ESPRESSO_BASE_PATH_PLACEHOLDER/esp-staking-dashboard.png'],
    },
  };
}

/**
 * Home is the root page of the Delegation UI. It is a fully static server
 * component — all dynamic behaviour is client-side, loaded after the client
 * fetches /config.json.
 *
 * The Suspense boundary is required by Next.js static export when
 * useSearchParams() is used inside a client component subtree.
 */
export default function Home() {
  return (
    <Suspense fallback={<div />}>
      <DelegationUIClientComponent />
    </Suspense>
  );
}
