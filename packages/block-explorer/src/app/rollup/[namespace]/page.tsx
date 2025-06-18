import RollupClientComponent from '@/client_components/rollup';
import { DeriveEnvironmentFromEnv } from '@/helpers/environment';
import { readFromEnv } from '@/helpers/read_from_env';
import {
  getNumberFromParams,
  ServerComponentParamsProps,
  ServerComponentSearchParamsProps,
} from '@/helpers/server_component_search_params_props';
import { notFound } from 'next/navigation';

/**
 * SpecificRollUp is a page that displays a summary of transactions that the
 * Rollup is was involved in.
 *
 * The Rollup is identified by a Namespace parameter in the URL path.
 */
export default async function SpecificRollUp(
  props: ServerComponentParamsProps<'namespace'> &
    ServerComponentSearchParamsProps,
) {
  const env = readFromEnv();
  const searchParams = await props.searchParams;
  const params = await props.params;

  // Let's make sure that we have our BlockID param
  const { namespace = null } = params;
  if (namespace === null) {
    return notFound();
  }

  // Let's make sure that our namespace is a string, and is a numeric value
  if (typeof namespace !== 'string') {
    return notFound();
  }

  if (/[^0-9]/.test(namespace)) {
    // This is an invalid block
    return notFound();
  }

  const startAtBlock = getNumberFromParams(searchParams, 'height');
  const offset = getNumberFromParams(searchParams, 'offset');

  return (
    <DeriveEnvironmentFromEnv env={env}>
      <RollupClientComponent
        namespace={Number(namespace)}
        startAtBlock={startAtBlock}
        offset={offset}
      />
    </DeriveEnvironmentFromEnv>
  );
}
