'use client';

import {
  BlocksPage,
  ProvideFakeBlocksSummaryDataSource,
} from 'espresso-block-explorer-components';

/**
 * Blocks represents the Blocks Summary Page.
 * 
 * It displays a summary of the Blocks listed in a paginated way.
 */
export default function Blocks() {
  return (
    <ProvideFakeBlocksSummaryDataSource>
      <BlocksPage />
    </ProvideFakeBlocksSummaryDataSource>
  );
}
