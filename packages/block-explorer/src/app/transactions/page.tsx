import TransactionsClientComponent from '@/client_components/transactions';
import { DeriveEnvironmentFromEnv } from '@/helpers/environment';
import { readFromEnv } from '@/helpers/read_from_env';
import {
  getNumberFromParams,
  ServerComponentSearchParamsProps,
} from '@/helpers/server_component_search_params_props';

/**
 * Transactions is a page that lists a summary of all transactions within the
 * block chain in a paginated manner.
 */
export default async function Transactions(
  props: ServerComponentSearchParamsProps,
) {
  const env = readFromEnv();
  const searchParams = await props.searchParams;

  const startAtBlock = getNumberFromParams(searchParams, 'height');
  const offset = getNumberFromParams(searchParams, 'offset');
  const block = getNumberFromParams(searchParams, 'block');

  return (
    <DeriveEnvironmentFromEnv env={env}>
      <TransactionsClientComponent
        startAtBlock={startAtBlock}
        offset={offset}
        block={block}
      />
    </DeriveEnvironmentFromEnv>
  );
}
