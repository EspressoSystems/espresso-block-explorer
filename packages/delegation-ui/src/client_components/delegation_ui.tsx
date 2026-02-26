'use client';

import DelegationUIContexts from '@/client_components/provide_contexts';
import ProvideContextsFromEnv from '@/client_components/provide_contexts_from_env';
import { EnvironmentConfig } from '@/helpers/read_from_env';
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

export interface DelegationUIClientComponentProps {
  env: EnvironmentConfig;
}

/**
 * DelegationUIClientcomponent is the root client component for the
 * Delegation UI. It setups the components to provide the relevant
 * Contexts that are needed for the Delegation UI to work berfore setting
 * up the other content.
 */
export default function DelegationUIClientComponent({
  env,
}: DelegationUIClientComponentProps) {
  return (
    <ProvideContextsFromEnv env={env}>
      <DelegationUIContexts>
        <DelegationUIClientContent />
      </DelegationUIContexts>
    </ProvideContextsFromEnv>
  );
}

/**
 * DelegationUIClientContent is responsible for interpretting the query /
 * search parameters of the URL in order to derive the relevant "intent"
 * before returning the rest of the Delegation UI.
 */
function DelegationUIClientContent() {
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
