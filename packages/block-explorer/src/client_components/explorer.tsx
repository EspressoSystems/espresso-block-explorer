'use client';

import {
  ExplorerPage,
  ExplorerSummaryLoader,
  ProvideCappuccinoExplorerSummaryAsyncStream,
  ProvideCappuccinoHotShotQueryServiceAPIContext,
} from 'espresso-block-explorer-components';

export default function ExplorerClientComponent() {
  return (
    <ProvideCappuccinoHotShotQueryServiceAPIContext>
      <ProvideCappuccinoExplorerSummaryAsyncStream>
        <ExplorerSummaryLoader>
          <ExplorerPage />
        </ExplorerSummaryLoader>
      </ProvideCappuccinoExplorerSummaryAsyncStream>
    </ProvideCappuccinoHotShotQueryServiceAPIContext>
  );
}
