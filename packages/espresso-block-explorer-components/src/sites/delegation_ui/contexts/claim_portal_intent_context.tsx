import { bigintCodec } from '@/convert/codec/bigint';
import {
  default as WalletAddress,
  walletAddressCodec,
} from '@/models/wallet_address/wallet_address';
import { default as React } from 'react';

export const kIntentClaimAndStake = 'claim-and-stake';

/**
 * ClaimPortalIntent represents the potential intent that will is derived
 * from navigation to the Delegation UI portal via some method.
 */
export interface ClaimPortalIntent {
  intent: typeof kIntentClaimAndStake;
  address: null | WalletAddress;
  amount: null | bigint;
}

/**
 * ClaimPortalIntentContext provides the ClaimPortalIntent as it was
 * derived and currently understood.
 */
export const ClaimPortalIntentContext =
  React.createContext<null | ClaimPortalIntent>(null);

/**
 * SetClaimPortalIntentContext allows for the ClaimPortalIntent to be modified
 * on behalf of the user.  This allows for the modification of the
 * ClaimPortalIntent for the user, should the context change.
 */
export const SetClaimPortalIntentContext = React.createContext<
  React.Dispatch<React.SetStateAction<null | ClaimPortalIntent>>
>(() => {});

/**
 * useClaimPortalItentState is a custom React hook to setup the management of
 * the underlying ClaimPortalIntent.
 */
function useClaimPortalItentState(
  initialState: null | ClaimPortalIntent = null,
) {
  return React.useState(initialState);
}

export interface ProvideClaimPortalIntentContextProps
  extends React.PropsWithChildren {
  intent?: null | ClaimPortalIntent;
}

/**
 * ProvideClaimPortalIntentContext provides the state management of the
 * ClaimPortalIntent, so that the ClaimPortalIntent can ultimately be
 * canceled or removed when it is completed.
 */
export const ProvideClaimPortalIntentContext: React.FC<
  ProvideClaimPortalIntentContextProps
> = ({ children, intent }) => {
  const [claimPortalIntent, setClaimPortalIntent] = useClaimPortalItentState(
    intent ?? null,
  );

  return (
    <ClaimPortalIntentContext.Provider value={claimPortalIntent}>
      <SetClaimPortalIntentContext.Provider value={setClaimPortalIntent}>
        {children}
      </SetClaimPortalIntentContext.Provider>
    </ClaimPortalIntentContext.Provider>
  );
};

/**
 * getAmountFromQueryParams will attempt to retrieve and parse an intended
 * "amount" from the URL query search parameters.
 */
function getAmountFromQueryParams(queryParams: URLSearchParams): null | bigint {
  try {
    const amountRaw = queryParams.get('amount');
    return bigintCodec.decode(amountRaw);
  } catch {
    return null;
  }
}

/**
 * getAddressFromQueryParams will attempt to retrieve and parse an intended
 * "adddress" from teh URL query search parameters.
 */
function getAddressFromQueryParams(
  queryParams: URLSearchParams,
): null | WalletAddress {
  try {
    const addressRaw = queryParams.get('address');
    return walletAddressCodec.decode(addressRaw);
  } catch {
    return null;
  }
}

/**
 * deriveClaimPortalIntentFromOnlyQueryParameters will attempt to derive
 * intent based information from the search query parameters.
 *
 * The specific intent type is read from the "intent" query parameter.
 * Once the specific intent type is understood, additional query parameters
 * for the intent in question can then be decoded and applied.
 */
export function deriveClaimPortalIntentFromOnlyQueryParameters(
  queryParams: URLSearchParams,
): null | ClaimPortalIntent {
  const intent = queryParams.get('intent');

  if (intent !== kIntentClaimAndStake) {
    return null;
  }

  return decodeClaimAndStakeParametersFromQueryParameters(queryParams);
}

/**
 * decodeClaimAndStakeParametersFromQueryParameters will decode the
 * "claim-and-stake" intent's arguments from the URL search query parameters.
 */
export function decodeClaimAndStakeParametersFromQueryParameters(
  queryParams: URLSearchParams,
): null | ClaimPortalIntent {
  return {
    intent: kIntentClaimAndStake,
    address: getAddressFromQueryParams(queryParams),
    amount: getAmountFromQueryParams(queryParams),
  };
}
