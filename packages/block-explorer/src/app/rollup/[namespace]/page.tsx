'use client';

import {
  NamespaceContext,
  ProvideFakeRollUpDetailDataSource,
  RollUpPage,
} from 'espresso-block-explorer-components';
import { notFound, useParams } from 'next/navigation';

/**
 * SpecificRollUp is a page that displays a summary of transactions that the
 * Rollup is was involved in.
 * 
 * The Rollup is identified by a Namespace parameter in the URL path.
 */
export default function SpecificRollUp() {
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

  return (
    <NamespaceContext.Provider value={Number(namespace)}>
      <ProvideFakeRollUpDetailDataSource>
        <RollUpPage />
      </ProvideFakeRollUpDetailDataSource>
    </NamespaceContext.Provider>
  );
}
