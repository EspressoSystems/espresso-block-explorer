'use client';

import {
  ExplorerPage,
  ExplorerSummaryLoader,
  ProvideCappuccinoExplorerSummary,
  ProvideCappuccinoHotShotQueryServiceAPIContext,
} from 'espresso-block-explorer-components';

export default function ExplorerClientComponent() {
  return (
    <ProvideCappuccinoHotShotQueryServiceAPIContext>
      <ProvideCappuccinoExplorerSummary>
        <ExplorerSummaryLoader>
          <ExplorerPage />
        </ExplorerSummaryLoader>
      </ProvideCappuccinoExplorerSummary>
    </ProvideCappuccinoHotShotQueryServiceAPIContext>
  );
}
