'use client';

import { ProvideHotShotQueryServiceAPIContext } from 'espresso-block-explorer-components';
import { RollUpsPage } from 'espresso-block-explorer-components/block-explorer';

export default function RollupsClientComponent() {
  return (
    <ProvideHotShotQueryServiceAPIContext>
      <RollUpsPage />
    </ProvideHotShotQueryServiceAPIContext>
  );
}
