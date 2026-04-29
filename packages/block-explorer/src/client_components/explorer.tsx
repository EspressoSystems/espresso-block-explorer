'use client';

import { ProvideHotShotQueryServiceAPIContext } from 'espresso-block-explorer-components';
import {
  ExplorerPage,
  ExplorerSummaryLoader,
  ProvideExplorerSummaryAsyncStream,
} from 'espresso-block-explorer-components/block-explorer';

// Ethereum Example Title: Ethereum (ETH) Block Explorer

export default function ExplorerClientComponent() {
  return (
    <ProvideHotShotQueryServiceAPIContext>
      <ProvideExplorerSummaryAsyncStream>
        <ExplorerSummaryLoader>
          <ExplorerPage />
        </ExplorerSummaryLoader>
      </ProvideExplorerSummaryAsyncStream>
    </ProvideHotShotQueryServiceAPIContext>
  );
}
