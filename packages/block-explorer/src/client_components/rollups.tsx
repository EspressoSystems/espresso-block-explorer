'use client';

import { ProvideHotShotQueryServiceAPIContext } from 'espresso-block-explorer-components';
import {
  ProvideRollUpsSummaryDataSource,
  RollUpsPage,
} from 'espresso-block-explorer-components/block-explorer';

export default function RollupsClientComponent() {
  return (
    <ProvideHotShotQueryServiceAPIContext>
      <ProvideRollUpsSummaryDataSource>
        <RollUpsPage />
      </ProvideRollUpsSummaryDataSource>
    </ProvideHotShotQueryServiceAPIContext>
  );
}
