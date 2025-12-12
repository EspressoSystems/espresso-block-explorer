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
import StakeTableAbi from './stake_table_abi';
import {
  StakeTableContract,
  Undelegation,
  Validator,
} from './stake_table_interface';

type StakeTableFunctionNames = ContractFunctionName<
  typeof StakeTableAbi,
  'pure' | 'view'
>;

type StakeTableReadContractParams<N extends StakeTableFunctionNames> =
  ReadContractParameters<typeof StakeTableAbi, N>;
type StakeTableReadContractReturnType<N extends StakeTableFunctionNames> =
  ReadContractReturnType<typeof StakeTableAbi, N>;

type StakeTableWriteContractFunctionNames = ContractFunctionName<
  typeof StakeTableAbi,
  'nonpayable' | 'payable'
>;
type StakeTableWriteContractParams<
  N extends StakeTableWriteContractFunctionNames,
> = WriteContractParameters<
  typeof StakeTableAbi,
  N,
  ContractFunctionArgs<typeof StakeTableAbi, 'nonpayable' | 'payable', N>
>;

export class StakeTableRemote implements StakeTableContract {
  // Implementation of ESPTokenContract methods would go here
  constructor(
    protected readonly config: Config,
    protected readonly chainID: number,
    public readonly address: `0x${string}`,
  ) {}

  // Readable Methods

  private async readContract<
    N extends StakeTableFunctionNames,
    A extends Omit<
      StakeTableReadContractParams<N>,
      'address' | 'abi' | 'chainId' | 'functionName'
    >,
  >(
    functionName: N,
    args?: A['args'],
    extra?: Omit<A, 'args'>,
  ): Promise<StakeTableReadContractReturnType<N>> {
    return readContract(this.config, {
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName,
      args,
      ...(extra ? extra : {}),
    });
  }

  async lightClient() {
    return this.readContract('lightClient');
  }

  async token() {
    return this.readContract('token');
  }

  async validator(account: `0x${string}`) {
    const result = await this.readContract('validators', [account]);

    return Validator.fromRaw(result);
  }

  async blsKey(blsKeyHash: `0x${string}`) {
    return this.readContract('blsKeys', [blsKeyHash]);
  }

  async validatorExit(validator: `0x${string}`) {
    return this.readContract('validatorExits', [validator]);
  }

  async delegation(validator: `0x${string}`, delegator: `0x${string}`) {
    return this.readContract('delegations', [validator, delegator]);
  }

  async undelegation(validator: `0x${string}`, delegator: `0x${string}`) {
    const result = await this.readContract('undelegations', [
      validator,
      delegator,
    ]);

    return Undelegation.fromRaw(result);
  }

  async exitEscrowPeriod() {
    return this.readContract('exitEscrowPeriod');
  }

  async getVersion() {
    return this.readContract('getVersion');
  }

  // Writable Methods

  private async writeContract<N extends StakeTableWriteContractFunctionNames>(
    functionName: N,
    args?: StakeTableWriteContractParams<N>['args'],
    extra?: Omit<
      StakeTableWriteContractParams<N>,
      'args' | 'address' | 'abi' | 'chainId' | 'functionName'
    >,
  ): Promise<WriteContractReturnType> {
    return writeContract(this.config, {
      abi: StakeTableAbi,
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

  async deregisterValidator() {
    return this.writeContract('deregisterValidator');
  }

  async delegate(validator: `0x${string}`, amount: bigint) {
    return this.writeContract('delegate', [validator, amount]);
  }

  async undelegate(validator: `0x${string}`, amount: bigint) {
    return this.writeContract('undelegate', [validator, amount]);
  }

  async claimWithdrawal(validator: `0x${string}`) {
    return this.writeContract('claimWithdrawal', [validator]);
  }

  async claimValidatorExit(validator: `0x${string}`) {
    return this.writeContract('claimValidatorExit', [validator]);
  }
}
