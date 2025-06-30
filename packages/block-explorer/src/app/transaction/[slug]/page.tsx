import TransactionClientComponent from '@/client_components/transaction';
import { ServerComponentParamsProps } from '@/helpers/server_component_search_params_props';
import { notFound } from 'next/navigation';

/**
 * Transaction is a detail page concerning an individual Transaction.
 * The transaction is identified by the Hash of the specifid Transaction.
 */
export default async function Transaction(
  props: ServerComponentParamsProps<'slug'>,
) {
  const params = await props.params;

  // Let's make sure that we have our BlockID param
  const { slug = null } = params;
  if (slug === null) {
    return notFound();
  }

  // Let's make sure that our BlockID is a string, and is a numeric value
  if (typeof slug !== 'string') {
    return notFound();
  }

  const [height, offset = 0] = slug.split('-').map((part) => Number(part));

  if (isNaN(height) || isNaN(offset)) {
    return notFound();
  }

  return <TransactionClientComponent height={height} offset={offset} />;
}
