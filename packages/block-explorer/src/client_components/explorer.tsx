'use client';

import {
  ProvideCappuccinoHotShotQueryServiceAPIContext,
} from 'espresso-block-explorer-components';
import {
  ExplorerPage,
  ExplorerSummaryLoader,
  ProvideCappuccinoExplorerSummaryAsyncStream,
} from 'espresso-block-explorer-components/block-explorer';

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
