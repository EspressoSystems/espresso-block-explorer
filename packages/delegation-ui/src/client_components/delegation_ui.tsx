'use client';

import { ProvideCappuccinoHotShotQueryServiceAPIContext } from 'espresso-block-explorer-components';
import {
  ClaimPortalIntentContext,
  DelegationUI,
  deriveClaimPortalIntentFromOnlyQueryParameters,
} from 'espresso-block-explorer-components/delegation-ui';

export default function ExplorerClientComponent() {
  const url = new URL(window.location.href);
  const intent = deriveClaimPortalIntentFromOnlyQueryParameters(url);

  return (
    <ProvideCappuccinoHotShotQueryServiceAPIContext>
      <ClaimPortalIntentContext.Provider value={intent}>
        <DelegationUI />
      </ClaimPortalIntentContext.Provider>
    </ProvideCappuccinoHotShotQueryServiceAPIContext>
  );
}
