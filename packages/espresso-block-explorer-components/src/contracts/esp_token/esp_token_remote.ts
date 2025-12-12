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
import EspTokenAbi from './esp_token_abi';
import { ESPTokenContract } from './esp_token_interface';

type ESPTokenReadContractFunctionNames = ContractFunctionName<
  typeof EspTokenAbi,
  'pure' | 'view'
>;

type ESPTokenReadContractParams<N extends ESPTokenReadContractFunctionNames> =
  ReadContractParameters<typeof EspTokenAbi, N>;
type ESPTokenReadContractReturnType<
  N extends ESPTokenReadContractFunctionNames,
> = ReadContractReturnType<typeof EspTokenAbi, N>;

type ESPTokenWriteContractFunctionNames = ContractFunctionName<
  typeof EspTokenAbi,
  'nonpayable' | 'payable'
>;
type ESPTokenWriteContractParams<N extends ESPTokenWriteContractFunctionNames> =
  WriteContractParameters<
    typeof EspTokenAbi,
    N,
    ContractFunctionArgs<typeof EspTokenAbi, 'nonpayable' | 'payable', N>
  >;

export class ESPTokenRemote implements ESPTokenContract {
  // Implementation of ESPTokenContract methods would go here
  constructor(
    private readonly config: Config,
    private readonly chainID: number,
    public readonly address: `0x${string}`,
  ) {}

  // Readable methods
  private async readContract<N extends ESPTokenReadContractFunctionNames>(
    functionName: N,
    args?: ESPTokenReadContractParams<N>['args'],
    extra?: Omit<
      ESPTokenReadContractParams<N>,
      'args' | 'address' | 'abi' | 'chainId' | 'functionName'
    >,
  ): Promise<ESPTokenReadContractReturnType<N>> {
    return readContract(this.config, {
      abi: EspTokenAbi,
      address: this.address,
      chainId: this.chainID,
      functionName,
      args,
      ...(extra ? extra : {}),
    });
  }

  async getVersion() {
    const result = await this.readContract('getVersion' as const);
    return result;
  }

  async name() {
    const result = await this.readContract('name');
    return result;
  }

  async symbol() {
    const result = await this.readContract('symbol');
    return result;
  }

  async decimals() {
    const result = await this.readContract('decimals');
    return result;
  }

  async totalSupply() {
    const result = await this.readContract('totalSupply');
    return result;
  }

  async balanceOf(account: `0x${string}`) {
    const result = await this.readContract('balanceOf', [account]);
    return result;
  }

  async allowance(owner: `0x${string}`, spender: `0x${string}`) {
    const result = await this.readContract('allowance', [owner, spender]);
    return result;
  }

  // Writable methods

  private async writeContract<N extends ESPTokenWriteContractFunctionNames>(
    functionName: N,
    args?: ESPTokenWriteContractParams<N>['args'],
    extra?: Omit<
      ESPTokenWriteContractParams<N>,
      'args' | 'address' | 'abi' | 'chainId' | 'functionName'
    >,
  ): Promise<WriteContractReturnType> {
    return writeContract(this.config, {
      abi: EspTokenAbi,
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

  async transfer(to: `0x${string}`, value: bigint) {
    return this.writeContract('transfer', [to, value]);
  }

  async approve(spender: `0x${string}`, value: bigint) {
    return this.writeContract('approve', [spender, value]);
  }

  async transferFrom(from: `0x${string}`, to: `0x${string}`, value: bigint) {
    return this.writeContract('transferFrom', [from, to, value]);
  }
}
