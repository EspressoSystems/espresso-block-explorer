'use client';

import { ProvideHotShotQueryServiceAPIContext } from 'espresso-block-explorer-components';
import {
  ExplorerPage,
  ExplorerSummaryLoader,
  ProvideExplorerSummaryAsyncStream,
} from 'espresso-block-explorer-components/block-explorer';

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
