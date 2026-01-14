'use client';

import {
  ProvideCappuccinoHotShotQueryServiceAPIContext,
} from 'espresso-block-explorer-components';

import {
  DelegationUI,
} from 'espresso-block-explorer-components/delegation-ui';

export default function ExplorerClientComponent() {
  return (
    <ProvideCappuccinoHotShotQueryServiceAPIContext>
      <DelegationUI />
    </ProvideCappuccinoHotShotQueryServiceAPIContext>
  );
}
