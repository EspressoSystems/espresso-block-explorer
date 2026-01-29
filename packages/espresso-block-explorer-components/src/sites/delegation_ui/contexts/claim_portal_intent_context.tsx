import { bigintCodec } from '@/convert/codec/bigint';
import WalletAddress, {
  walletAddressCodec,
} from '@/models/wallet_address/wallet_address';
import React from 'react';

/**
 * ClaimPortalIntent represents the potential intent that will is derived
 * from navigation to the Delegation UI portal via some method.
 */
export interface ClaimPortalIntent {
  intent: 'claim-and-stake';
  address: null | WalletAddress;
  amount: null | bigint;
}

/**
 * ClaimPortalIntentContext provides the ClaimPortalIntent as it was
 * derived and currently understood.
 */
export const ClaimPortalIntentContext =
  React.createContext<null | ClaimPortalIntent>(null);

function deriveClaimPortalIntentFromURL(url: URL): null | ClaimPortalIntent {
  return deriveClaimPortalIntentFromOnlyQueryParameters(url);
}

function getAmountFromQueryParams(queryParams: URLSearchParams): null | bigint {
  try {
    const amountRaw = queryParams.get('amount');
    return bigintCodec.decode(amountRaw);
  } catch {
    return null;
  }
}

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

export function deriveClaimPortalIntentFromOnlyQueryParameters(
  url: URL,
): null | ClaimPortalIntent {
  const queryParams = url.searchParams;
  const intent = queryParams.get('intent');

  if (intent !== 'claim-and-stake') {
    return null;
  }

  return specifyIntentParametersFromQueryParameters(url);
}

export function specifyIntentParametersFromQueryParameters(
  url: URL,
): null | ClaimPortalIntent {
  const queryParams = url.searchParams;
  return {
    intent: 'claim-and-stake',
    address: getAddressFromQueryParams(queryParams),
    amount: getAmountFromQueryParams(queryParams),
  };
}
