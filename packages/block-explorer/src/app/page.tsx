'use server';

import ExplorerClientComponent from '@/client_components/explorer';

/**
 * Home represents the default home screen navigated to by the path '/'.
 *
 * It is currently a placeholder as we do not have the elements / components
 * for the "Block Explorer" home page fleshed out quite yet.
 */
export default async function Explorer() {
  return <ExplorerClientComponent />;
}
