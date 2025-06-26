import RollupsClientComponent from '@/client_components/rollups';

/**
 * Rollups is a summary page for listing various Rollups that are in use in
 * the system, as well as statistics concerning how many transactions they
 * have contributed.
 */
export default async function RollUps() {
  return <RollupsClientComponent />;
}
