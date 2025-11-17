import { Config } from 'wagmi';
import { estimateContractGas } from '../l1/estimate_contract_gas';
import ClaimRewardsAbi from './reward_claim_abi';
import { RewardClaimContractGasEstimator } from './reward_claim_interface';

export class RewardClaimContractGasEstimatorRemote
  implements RewardClaimContractGasEstimator
{
  // Implementation of ESPTokenContract methods would go here
  constructor(
    private readonly config: Config,
    private readonly chainID: number,
    public readonly address: `0x${string}`,
  ) {}

  async claimRewards(
    lifetimeRewards: bigint,
    authData: `0x${string}`,
  ): Promise<bigint> {
    return 100005n;
    return estimateContractGas(this.config, {
      abi: ClaimRewardsAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'claimRewards',
      args: [lifetimeRewards, authData],
    });
  }
}
