'use client';

import { ProvideCappuccinoHotShotQueryServiceAPIContext } from 'espresso-block-explorer-components';
import {
  DelegationUI,
  deriveClaimPortalIntentFromOnlyQueryParameters,
  ProvideClaimPortalIntentContext,
} from 'espresso-block-explorer-components/delegation-ui';

export default function ExplorerClientComponent() {
  const url = new URL(window.location.href);
  const intent = deriveClaimPortalIntentFromOnlyQueryParameters(url);

  return (
    <ProvideCappuccinoHotShotQueryServiceAPIContext>
      <ProvideClaimPortalIntentContext intent={intent}>
        <DelegationUI />
      </ProvideClaimPortalIntentContext>
    </ProvideCappuccinoHotShotQueryServiceAPIContext>
  );
}
