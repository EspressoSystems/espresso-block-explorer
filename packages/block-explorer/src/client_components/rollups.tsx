'use client';

import {
  ProvideCappuccinoHotShotQueryServiceAPIContext,
} from 'espresso-block-explorer-components';
import {
  ProvideCappuccinoRollUpsSummaryDataSource,
  RollUpsPage,
} from 'espresso-block-explorer-components/block-explorer';

export default function RollupsClientComponent() {
  return (
    <ProvideCappuccinoHotShotQueryServiceAPIContext>
      <ProvideCappuccinoRollUpsSummaryDataSource>
        <RollUpsPage />
      </ProvideCappuccinoRollUpsSummaryDataSource>
    </ProvideCappuccinoHotShotQueryServiceAPIContext>
  );
}
