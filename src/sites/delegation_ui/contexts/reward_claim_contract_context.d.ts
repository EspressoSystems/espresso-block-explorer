import { RewardClaimContract } from '../../../contracts/reward_claim/reward_claim_interface';
import { default as React } from 'react';
/**
 * RewardClaimContractContext is a React context that provides
 * the Reward Claim contract instance.
 */
export declare const RewardClaimContractContext: React.Context<RewardClaimContract | null>;
/**
 * RewardClaimContractGasEstimatorContext is a React context that provides
 * the Reward Claim contract gas estimator instance.
 */
export declare const RewardClaimContractGasEstimatorContext: React.Context<import('../../../contracts/l1/l1_interface').GasEstimatorForContract<import('../../../contracts/reward_claim/reward_claim_interface').RewardClaimContractWriteable> | null>;
/**
 * ProvideRewardClaimContract is a React component that provides
 * the Reward Claim contract via RewardClaimContractContext.
 */
export declare const ProvideRewardClaimContract: React.FC<React.PropsWithChildren>;
