'use client';

import {
  NamespaceContext,
  ProvideGibraltarRollUpDetailDataSource,
  RollUpPage,
} from 'espresso-block-explorer-components';
import {
  ReadonlyURLSearchParams,
  notFound,
  useParams,
  useSearchParams,
} from 'next/navigation';

/**
 * SpecificRollUp is a page that displays a summary of transactions that the
 * Rollup is was involved in.
 *
 * The Rollup is identified by a Namespace parameter in the URL path.
 */
export default function SpecificRollUp() {
  const searchParams = useSearchParams();
  const params = useParams();

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

  const getNumberFromParams = (
    params: ReadonlyURLSearchParams,
    key: string,
  ) => {
    if (params.has(key)) {
      const value = params.get(key);
      if (value !== null) {
        return Number(value);
      }
    }

    return undefined;
  };

  const startAtBlock = getNumberFromParams(searchParams, 'height');
  const offset = getNumberFromParams(searchParams, 'offset');

  return (
    <NamespaceContext.Provider value={Number(namespace)}>
      <ProvideGibraltarRollUpDetailDataSource>
        <RollUpPage startAtBlock={startAtBlock} offset={offset} />
      </ProvideGibraltarRollUpDetailDataSource>
    </NamespaceContext.Provider>
  );
}
