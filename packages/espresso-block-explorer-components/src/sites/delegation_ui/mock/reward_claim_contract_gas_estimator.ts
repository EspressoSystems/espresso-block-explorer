import { RewardClaimContractGasEstimator } from '@/contracts/reward_claim/reward_claim_interface';

/**
 * MockRewardClaimContractGasEstimatorImpl is a mock implementation of
 * RewardClaimContractGasEstimator for testing purposes.
 */
export class MockRewardClaimContractGasEstimatorImpl
  implements RewardClaimContractGasEstimator
{
  async claimRewards(): Promise<bigint> {
    return 100005n;
  }
}
