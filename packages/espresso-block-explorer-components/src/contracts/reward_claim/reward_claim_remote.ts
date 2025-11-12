import { Config } from 'wagmi';
import { readContract, writeContract } from 'wagmi/actions';
import ClaimRewardsAbi from './reward_claim_abi';
import { RewardClaimContract } from './reward_claim_interface';

export class RewardClaimRemote implements RewardClaimContract {
  // Implementation of ESPTokenContract methods would go here
  constructor(
    private readonly config: Config,
    private readonly chainID: number,
    public readonly address: `0x${string}`,
  ) {}

  async claimedRewards(address: `0x${string}`): Promise<bigint> {
    return readContract(this.config, {
      abi: ClaimRewardsAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'claimedRewards',
      args: [address],
    });
  }

  async getVersion(): Promise<readonly [number, number, number]> {
    return readContract(this.config, {
      abi: ClaimRewardsAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'getVersion',
    });
  }

  async claimRewards(
    lifetimeRewards: bigint,
    authData: `0x${string}`,
  ): Promise<`0x${string}`> {
    return writeContract(this.config, {
      abi: ClaimRewardsAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'claimRewards',
      args: [lifetimeRewards, authData],
    });
  }
}
