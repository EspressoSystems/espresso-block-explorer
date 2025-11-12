import { RewardClaimContract } from '../../../contracts/reward_claim/reward_claim_interface';
import { default as React } from 'react';
/**
 * RewardClaimContractContext is a React context that provides
 * the Reward Claim contract instance.
 */
export declare const RewardClaimContractContext: React.Context<RewardClaimContract | null>;
/**
 * ProvideRewardClaimContract is a React component that provides
 * the Reward Claim contract via RewardClaimContractContext.
 */
export declare const ProvideRewardClaimContract: React.FC<React.PropsWithChildren>;
