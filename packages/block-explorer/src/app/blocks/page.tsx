import BlocksClientComponent from '@/client_components/blocks';
import {
  getNumberFromParams,
  ServerComponentSearchParamsProps,
} from '@/helpers/server_component_search_params_props';

/**
 * Blocks represents the Blocks Summary Page.
 *
 * It displays a summary of the Blocks listed in a paginated way.
 */
export default async function Blocks(props: ServerComponentSearchParamsProps) {
  const searchParams = await props.searchParams;

  const startAtBlock = getNumberFromParams(searchParams, 'height');

  return <BlocksClientComponent startAtBlock={startAtBlock} />;
}
