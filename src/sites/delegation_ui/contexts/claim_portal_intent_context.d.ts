import { default as WalletAddress } from '../../../../../../../../../../../src/models/wallet_address/wallet_address';
import { default as React } from 'react';
export declare const kIntentClaimAndStake = "claim-and-stake";
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
export declare const ClaimPortalIntentContext: React.Context<ClaimPortalIntent | null>;
/**
 * SetClaimPortalIntentContext allows for the ClaimPortalIntent to be modified
 * on behalf of the user.  This allows for the modification of the
 * ClaimPortalIntent for the user, should the context change.
 */
export declare const SetClaimPortalIntentContext: React.Context<React.Dispatch<React.SetStateAction<ClaimPortalIntent | null>>>;
export interface ProvideClaimPortalIntentContextProps extends React.PropsWithChildren {
    intent?: null | ClaimPortalIntent;
}
/**
 * ProvideClaimPortalIntentContext provides the state management of the
 * ClaimPortalIntent, so that the ClaimPortalIntent can ultimately be
 * canceled or removed when it is completed.
 */
export declare const ProvideClaimPortalIntentContext: React.FC<ProvideClaimPortalIntentContextProps>;
/**
 * deriveClaimPortalIntentFromOnlyQueryParameters will attempt to derive
 * intent based information from the search query parameters.
 *
 * The specific intent type is read from the "intent" query parameter.
 * Once the specific intent type is understood, additional query parameters
 * for the intent in question can then be decoded and applied.
 */
export declare function deriveClaimPortalIntentFromOnlyQueryParameters(queryParams: URLSearchParams): null | ClaimPortalIntent;
/**
 * decodeClaimAndStakeParametersFromQueryParameters will decode the
 * "claim-and-stake" intent's arguments from the URL search query parameters.
 */
export declare function decodeClaimAndStakeParametersFromQueryParameters(queryParams: URLSearchParams): null | ClaimPortalIntent;
