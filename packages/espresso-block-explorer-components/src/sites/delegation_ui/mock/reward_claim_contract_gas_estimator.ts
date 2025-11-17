import { RewardClaimContractGasEstimator } from '@/contracts/reward_claim/reward_claim_interface';

export class MockRewardClaimContractGasEstimatorImpl
  implements RewardClaimContractGasEstimator
{
  async claimRewards(): Promise<bigint> {
    return 100005n;
  }
}
