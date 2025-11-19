import { RewardClaimContractGasEstimator } from '../../../contracts/reward_claim/reward_claim_interface';
/**
 * MockRewardClaimContractGasEstimatorImpl is a mock implementation of
 * RewardClaimContractGasEstimator for testing purposes.
 */
export declare class MockRewardClaimContractGasEstimatorImpl implements RewardClaimContractGasEstimator {
    claimRewards(): Promise<bigint>;
}
