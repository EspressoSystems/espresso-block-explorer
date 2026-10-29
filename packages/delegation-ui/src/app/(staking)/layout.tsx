import DelegationUIClientComponent from '@/client_components/delegation_ui';
import { Suspense } from 'react';

/**
 * StakingLayout renders the Delegation UI for every route in the (staking)
 * group. Layouts stay mounted across client-side navigation, so moving
 * between the validator list and a validator's page keeps the loaded
 * validator data instead of fetching it all again.
 *
 * The Suspense boundary is required by Next.js static export when
 * useSearchParams() is used inside a client component subtree.
 */
export default function StakingLayout({ children }: React.PropsWithChildren) {
  return (
    <Suspense fallback={<div />}>
      <DelegationUIClientComponent />
      {children}
    </Suspense>
  );
}
