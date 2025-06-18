'use client';

import {
  ProvideCappuccinoHotShotQueryServiceAPIContext,
  ProvideCappuccinoRollUpsSummaryDataSource,
  RollUpsPage,
} from 'espresso-block-explorer-components';

export default function RollupsClientComponent() {
  return (
    <ProvideCappuccinoHotShotQueryServiceAPIContext>
      <ProvideCappuccinoRollUpsSummaryDataSource>
        <RollUpsPage />
      </ProvideCappuccinoRollUpsSummaryDataSource>
    </ProvideCappuccinoHotShotQueryServiceAPIContext>
  );
}
