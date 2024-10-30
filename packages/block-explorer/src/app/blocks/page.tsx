'use client';

import {
  BlocksPage,
  ProvideCappuccinoBlocksSummaryDataSource,
  ProvideCappuccinoHotShotQueryServiceAPIContext,
} from 'espresso-block-explorer-components';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

/**
 * Blocks represents the Blocks Summary Page.
 *
 * It displays a summary of the Blocks listed in a paginated way.
 */
export default function Blocks() {
  return (
    <Suspense>
      <BlocksPageSuspended />
    </Suspense>
  );
}

function BlocksPageSuspended() {
  const searchParams = useSearchParams();

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

  return (
    <ProvideCappuccinoHotShotQueryServiceAPIContext>
      <ProvideCappuccinoBlocksSummaryDataSource>
        <BlocksPage startAtBlock={startAtBlock} />
      </ProvideCappuccinoBlocksSummaryDataSource>
    </ProvideCappuccinoHotShotQueryServiceAPIContext>
  );
}
