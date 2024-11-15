import { Suspense } from 'react';
import HomeConcludedSuspended from './home_concluded_suspended';

const title = 'Espresso Infinite Garden';
const description =
  'Join us on our mission to safeguard against silos, ensuring all chains work together as one. Espresso mainnet is live.';

export const metadata = {
  title,
  description,
  alternates: {
    canonical: '/',
  },

  twitter: {
    card: 'summary_large_image',
    site: '@espressosys',
    title: title,
    description: description,
  },

  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: 'https://infinitegarden.espressosys.com/',
  },
};

/**
 * Home represents the default home screen navigated to by the path '/'.
 *
 * This is the main, and only page for the Inscriptions Demo
 */
export default function Home() {
  return (
    <Suspense>
      <HomeConcludedSuspended />
    </Suspense>
  );
}
