'use client';

import {
  ProvideCappuccinoHotShotQueryServiceAPIContext,
  ProvideCappuccinoRollUpsSummaryDataSource,
  RollUpsPage,
} from 'espresso-block-explorer-components';

/**
 * Rollups is a summary page for listing various Rollups that are in use in
 * the system, as well as statistics concerning how many transactions they
 * have contributed.
 */
export default function RollUps() {
  return (
    <ProvideCappuccinoHotShotQueryServiceAPIContext>
      <ProvideCappuccinoRollUpsSummaryDataSource>
        <RollUpsPage />
      </ProvideCappuccinoRollUpsSummaryDataSource>
    </ProvideCappuccinoHotShotQueryServiceAPIContext>
  );
}
