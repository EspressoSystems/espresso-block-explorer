'use client';

import DelegationUIContexts from '@/client_components/provide_contexts';
import ProvideContextsFromEnv from '@/client_components/provide_contexts_from_env';
import {
  deriveValidatorAddressFromQueryParameters,
  ValidatorDetailUI,
} from 'espresso-block-explorer-components/delegation-ui';
import { useSearchParams } from 'next/navigation';

/**
 * ValidatorDetailUIClientComponent is the root client component for the
 * validator detail page. It provides the same Contexts as the main
 * Delegation UI page, and reads the validator address from the `address`
 * query parameter.
 */
export default function ValidatorDetailUIClientComponent() {
  return (
    <ProvideContextsFromEnv>
      <DelegationUIContexts>
        <ValidatorDetailUIClientContent />
      </DelegationUIContexts>
    </ProvideContextsFromEnv>
  );
}

/**
 * ValidatorDetailUIClientContent derives the requested validator address
 * from the URL before rendering the validator detail page.
 */
function ValidatorDetailUIClientContent() {
  const params = useSearchParams();
  const address = deriveValidatorAddressFromQueryParameters(params);

  return <ValidatorDetailUI address={address} />;
}
