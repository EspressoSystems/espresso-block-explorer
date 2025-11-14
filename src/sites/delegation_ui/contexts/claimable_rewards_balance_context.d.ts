import { default as React } from 'react';
/**
 * EspressoRewardClaimInput provides a React Context
 * for the Claimable Reward Balance for the current wallet and espresso height
 */
export declare const ClaimableRewardsBalanceContext: React.Context<bigint | null>;
/**
 * RetrieveActiveValidators is a React Component that retrieves
 * the RewardClaimInput for the current wallet and espresso height and provides
 * it via the EspressoRewardClaimInput to its children.
 */
export declare const RetrieveEspressoClaimableRewardsBalance: React.FC<React.PropsWithChildren>;
