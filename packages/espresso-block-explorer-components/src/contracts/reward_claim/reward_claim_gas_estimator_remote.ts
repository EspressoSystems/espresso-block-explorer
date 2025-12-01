import { Config } from 'wagmi';
import { estimateContractGas } from '../l1/estimate_contract_gas';
import ClaimRewardsAbi from './reward_claim_abi';
import { RewardClaimContractGasEstimator } from './reward_claim_interface';

/**
 * RewardClaimContractGasEstimatorRemote implements
 * RewardClaimContractGasEstimator by making remote calls to estimate gas
 * for reward claim contract methods. It is implemented via the Wagmi
 * estimateContractGas utility function.
 */
export class RewardClaimContractGasEstimatorRemote implements RewardClaimContractGasEstimator {
  // Implementation of ESPTokenContract methods would go here
  constructor(
    private readonly config: Config,
    private readonly chainID: number,
    public readonly address: `0x${string}`,
  ) {}

  async claimRewards(
    account: `0x${string}`,
    lifetimeRewards: bigint,
    authData: `0x${string}`,
  ): Promise<bigint> {
    return estimateContractGas(this.config, {
      account,
      abi: ClaimRewardsAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'claimRewards',
      args: [lifetimeRewards, authData],
    });
  }
}
