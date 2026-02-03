'use client';

import { ProvideCappuccinoHotShotQueryServiceAPIContext } from 'espresso-block-explorer-components';
import {
  DelegationUI,
  deriveClaimPortalIntentFromOnlyQueryParameters,
  ProvideClaimPortalIntentContext,
} from 'espresso-block-explorer-components/delegation-ui';
import { useSearchParams } from 'next/navigation';

export default function ExplorerClientComponent() {
  const params = useSearchParams();
  const intent = deriveClaimPortalIntentFromOnlyQueryParameters(params);

  return (
    <ProvideCappuccinoHotShotQueryServiceAPIContext>
      <ProvideClaimPortalIntentContext intent={intent}>
        <DelegationUI />
      </ProvideClaimPortalIntentContext>
    </ProvideCappuccinoHotShotQueryServiceAPIContext>
  );
}
