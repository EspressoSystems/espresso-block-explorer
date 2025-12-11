import {
  ContractFunctionArgs,
  ContractFunctionName,
  ReadContractParameters,
  ReadContractReturnType,
  WriteContractParameters,
  WriteContractReturnType,
} from 'viem';
import { Config } from 'wagmi';
import { readContract, writeContract } from 'wagmi/actions';
import ClaimRewardsAbi from './reward_claim_abi';
import { RewardClaimContract } from './reward_claim_interface';

type ClaimRewardsReadContractFunctionNames = ContractFunctionName<
  typeof ClaimRewardsAbi,
  'pure' | 'view'
>;

type ClaimRewardsReadContractParams<
  N extends ClaimRewardsReadContractFunctionNames,
> = ReadContractParameters<typeof ClaimRewardsAbi, N>;
type ClaimRewardsReadContractReturnType<
  N extends ClaimRewardsReadContractFunctionNames,
> = ReadContractReturnType<typeof ClaimRewardsAbi, N>;

type ClaimRewardsWriteContractFunctionNames = ContractFunctionName<
  typeof ClaimRewardsAbi,
  'nonpayable' | 'payable'
>;
type ClaimRewardsWriteContractParams<
  N extends ClaimRewardsWriteContractFunctionNames,
> = WriteContractParameters<
  typeof ClaimRewardsAbi,
  N,
  ContractFunctionArgs<typeof ClaimRewardsAbi, 'nonpayable' | 'payable', N>
>;

export class RewardClaimRemote implements RewardClaimContract {
  // Implementation of ESPTokenContract methods would go here
  constructor(
    private readonly config: Config,
    private readonly chainID: number,
    public readonly address: `0x${string}`,
  ) {}

  // Readable methods

  private async readContract<N extends ClaimRewardsReadContractFunctionNames>(
    functionName: N,
    args?: ClaimRewardsReadContractParams<N>['args'],
    extra?: Omit<
      ClaimRewardsReadContractParams<N>,
      'args' | 'address' | 'abi' | 'chainId' | 'functionName'
    >,
  ): Promise<ClaimRewardsReadContractReturnType<N>> {
    return readContract(this.config, {
      abi: ClaimRewardsAbi,
      address: this.address,
      chainId: this.chainID,
      functionName,
      args,
      ...(extra ? extra : {}),
    });
  }

  async totalClaimed(): Promise<bigint> {
    return this.readContract('totalClaimed');
  }

  async claimedRewards(address: `0x${string}`): Promise<bigint> {
    return this.readContract('claimedRewards', [address]);
  }

  async getVersion(): Promise<readonly [number, number, number]> {
    return this.readContract('getVersion');
  }

  // Writable methods

  private async writeContract<N extends ClaimRewardsWriteContractFunctionNames>(
    functionName: N,
    args?: ClaimRewardsWriteContractParams<N>['args'],
    extra?: Omit<
      ClaimRewardsWriteContractParams<N>,
      'args' | 'address' | 'abi' | 'chainId' | 'functionName'
    >,
  ): Promise<WriteContractReturnType> {
    return writeContract(this.config, {
      abi: ClaimRewardsAbi,
      address: this.address,
      chainId: this.chainID,
      functionName,
      args: args,
      ...(extra ? extra : {}),
      // This "any" is sadly necessary. Otherwise this function returns
      // a horrendous typscript error that cannot being resolved seemingly.
      // There is no single field that is causing the issue.
      //
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);
  }

  async claimRewards(
    lifetimeRewards: bigint,
    authData: `0x${string}`,
  ): Promise<`0x${string}`> {
    return this.writeContract('claimRewards', [lifetimeRewards, authData]);
  }
}
