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
import { StakeTableRemote } from '../stake_table/stake_table_remote';
import StakeTableV2Abi from './stake_table_v2_abi';
import {
  StakeTableV2Contract,
  UndelegationInfo,
} from './stake_table_v2_interface';

type StakeTableV2FunctionNames = ContractFunctionName<
  typeof StakeTableV2Abi,
  'pure' | 'view'
>;

type StakeTableV2ReadContractParams<N extends StakeTableV2FunctionNames> =
  ReadContractParameters<typeof StakeTableV2Abi, N>;
type StakeTableV2ReadContractReturnType<N extends StakeTableV2FunctionNames> =
  ReadContractReturnType<typeof StakeTableV2Abi, N>;

type StakeTableV2WriteContractFunctionNames = ContractFunctionName<
  typeof StakeTableV2Abi,
  'nonpayable' | 'payable'
>;
type StakeTableV2WriteContractParams<
  N extends StakeTableV2WriteContractFunctionNames,
> = WriteContractParameters<
  typeof StakeTableV2Abi,
  N,
  ContractFunctionArgs<typeof StakeTableV2Abi, 'nonpayable' | 'payable', N>
>;

export class StakeTableV2Remote
  extends StakeTableRemote
  implements StakeTableV2Contract
{
  constructor(config: Config, chainID: number, contractAddress: `0x${string}`) {
    super(config, chainID, contractAddress);
  }

  // Readable Methods

  private async readContractV2<
    N extends StakeTableV2FunctionNames,
    A extends Omit<
      StakeTableV2ReadContractParams<N>,
      'address' | 'abi' | 'chainId' | 'functionName'
    >,
  >(
    functionName: N,
    args?: StakeTableV2ReadContractParams<N>['args'],
    extra?: Omit<A, 'args'>,
  ): Promise<StakeTableV2ReadContractReturnType<N>> {
    return readContract(this.config, {
      abi: StakeTableV2Abi,
      address: this.address,
      chainId: this.chainID,
      functionName,
      args,
      ...(extra ? extra : {}),
    });
  }

  async PAUSER_ROLE() {
    return this.readContractV2('PAUSER_ROLE');
  }

  async minCommissionIncreaseInterval() {
    return this.readContractV2('minCommissionIncreaseInterval');
  }

  async maxCommissionIncrease() {
    return this.readContractV2('maxCommissionIncrease');
  }

  async activeStake() {
    return this.readContractV2('activeStake');
  }

  async commissionTracking(validator: `0x${string}`) {
    return this.readContractV2('commissionTracking', [validator]);
  }

  async getUndelegation(
    validator: `0x${string}`,
    delegator: `0x${string}`,
  ): Promise<UndelegationInfo> {
    return this.readContractV2('getUndelegation', [validator, delegator]);
  }

  async minDelegateAmount(): Promise<bigint> {
    return this.readContractV2('minDelegateAmount');
  }

  async validateMetadataUri(uri: string): Promise<void> {
    return this.readContractV2('validateMetadataUri', [uri]);
  }

  // Writable Methods

  private async writeContractV2<
    N extends StakeTableV2WriteContractFunctionNames,
  >(
    functionName: N,
    args?: StakeTableV2WriteContractParams<N>['args'],
    extra?: Omit<
      StakeTableV2WriteContractParams<N>,
      'args' | 'address' | 'abi' | 'chainId' | 'functionName'
    >,
  ): Promise<WriteContractReturnType> {
    return writeContract(this.config, {
      abi: StakeTableV2Abi,
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

  async updateConsensusKeysV2(
    blsVk: { x0: bigint; x1: bigint; y0: bigint; y1: bigint },
    schnorrVk: { x: bigint; y: bigint },
    blsSig: { x: bigint; y: bigint },
    schnorrSig: `0x${string}`,
  ) {
    return this.writeContractV2('updateConsensusKeysV2', [
      blsVk,
      schnorrVk,
      blsSig,
      schnorrSig,
    ]);
  }

  registerValidatorV2(
    blsVk: { x0: bigint; x1: bigint; y0: bigint; y1: bigint },
    schnorrVk: { x: bigint; y: bigint },
    blsSig: { x: bigint; y: bigint },
    schnorrSig: `0x${string}`,
    commission: number,
    metadataUri: string,
  ): Promise<`0x${string}`> {
    return this.writeContractV2('registerValidatorV2', [
      blsVk,
      schnorrVk,
      blsSig,
      schnorrSig,
      commission,
      metadataUri,
    ]);
  }
}
