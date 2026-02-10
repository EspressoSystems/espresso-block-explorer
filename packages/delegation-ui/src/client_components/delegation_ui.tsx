'use client';

import {
  IntentCompletedCallbackContext,
  ProvideCappuccinoHotShotQueryServiceAPIContext,
} from 'espresso-block-explorer-components';
import {
  DelegationUI,
  deriveClaimPortalIntentFromOnlyQueryParameters,
  ProvideClaimPortalIntentContext,
} from 'espresso-block-explorer-components/delegation-ui';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function ExplorerClientComponent() {
  const router = useRouter();
  const pathName = usePathname();
  const params = useSearchParams();
  const intent = deriveClaimPortalIntentFromOnlyQueryParameters(params);

  return (
    <IntentCompletedCallbackContext.Provider
      value={() => {
        router.replace(pathName);
      }}
    >
      <ProvideCappuccinoHotShotQueryServiceAPIContext>
        <ProvideClaimPortalIntentContext intent={intent}>
          <DelegationUI />
        </ProvideClaimPortalIntentContext>
      </ProvideCappuccinoHotShotQueryServiceAPIContext>
    </IntentCompletedCallbackContext.Provider>
  );
}
