'use client';

import {
  ExplorerPage,
  ExplorerSummaryLoader,
  ProvideCappuccinoExplorerSummary,
  ProvideCappuccinoHotShotQueryServiceAPIContext,
} from 'espresso-block-explorer-components';

/**
 * Home represents the default home screen navigated to by the path '/'.
 *
 * It is currently a placeholder as we do not have the elements / components
 * for the "Block Explorer" home page fleshed out quite yet.
 */
export default function Home() {
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
