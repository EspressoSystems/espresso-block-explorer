import ValidatorDetailUIClientComponent from '@/client_components/validator_detail_ui';
import { type Metadata } from 'next';
import { Suspense } from 'react';

/**
 * generateMetadata returns static metadata with placeholder values for the
 * deployment-specific URL fields, which the container entrypoint replaces in
 * the exported HTML, as for the main page.
 *
 * Unlike the main page there is no canonical URL: the validator is chosen by
 * a query parameter, so one static file serves every validator.
 */
export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL('https://placeholder.espresso.foundation'),
    title: 'Validator | Espresso Staking Dashboard',
    description:
      'Stake, commission, and performance details for an Espresso Network validator',
    openGraph: {
      images: ['/ESPRESSO_BASE_PATH_PLACEHOLDER/esp-staking-dashboard.png'],
      type: 'website',
    },
    twitter: {
      images: ['/ESPRESSO_BASE_PATH_PLACEHOLDER/esp-staking-dashboard.png'],
    },
  };
}

/**
 * ValidatorPage is the validator detail page, served as /validator?address=0x…
 *
 * The address is a query parameter rather than a path segment so that the
 * page can be statically exported as a single file (validator.html) without
 * any changes to the nginx configuration.
 */
export default function ValidatorPage() {
  return (
    <Suspense fallback={<div />}>
      <ValidatorDetailUIClientComponent />
    </Suspense>
  );
}
