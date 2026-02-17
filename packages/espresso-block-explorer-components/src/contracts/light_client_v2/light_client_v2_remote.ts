import {
  ContractFunctionName,
  ReadContractParameters,
  ReadContractReturnType,
} from 'viem';
import { readContract } from 'wagmi/actions';
import { ScalarField } from '../bn254/bn254_interface';
import { StakeTableState } from '../light_client/light_client_interface';
import { LightClientRemote } from '../light_client/light_client_remote';
import LightClientV2Abi from './light_client_v2_abi';
import { LightClientV2Contract } from './light_client_v2_interface';

type LightClientV2FunctionNames = ContractFunctionName<
  typeof LightClientV2Abi,
  'pure' | 'view'
>;

type LightClientV2ReadContractParams<N extends LightClientV2FunctionNames> =
  ReadContractParameters<typeof LightClientV2Abi, N>;

type LightClientV2ReadContractReturnType<N extends LightClientV2FunctionNames> =
  ReadContractReturnType<typeof LightClientV2Abi, N>;

export class LightClientV2Remote
  extends LightClientRemote
  implements LightClientV2Contract
{
  protected async readContractV2<
    N extends LightClientV2FunctionNames,
    A extends Omit<
      LightClientV2ReadContractParams<N>,
      'address' | 'abi' | 'chainId' | 'functionName'
    >,
  >(
    functionName: N,
    args?: LightClientV2ReadContractParams<N>['args'],
    extra?: Omit<A, 'args'>,
  ): Promise<LightClientV2ReadContractReturnType<N>> {
    return readContract(this.config, {
      abi: LightClientV2Abi,
      address: this.address,
      chainId: this.chainID,
      functionName,
      args,
      ...(extra ? extra : {}),
    });
  }

  async blocksPerEpoch(): Promise<bigint> {
    const result = await this.readContractV2('blocksPerEpoch');

    return result;
  }

  async epochStartBlock(): Promise<bigint> {
    const result = await this.readContractV2('epochStartBlock');

    return result;
  }

  async votingStakeTableState(): Promise<StakeTableState> {
    const [threshold, blsKeyComm, schnorrKeyComm, amountComm] =
      await this.readContractV2('votingStakeTableState');

    return new StakeTableState(
      threshold,
      new ScalarField(blsKeyComm),
      new ScalarField(schnorrKeyComm),
      new ScalarField(amountComm),
    );
  }

  async currentEpoch(): Promise<bigint> {
    const result = await this.readContractV2('currentEpoch');

    return result;
  }

  async epochFromBlockNumber(
    blockNum: bigint,
    blocksPerEpoch: bigint,
  ): Promise<bigint> {
    const result = await this.readContractV2('epochFromBlockNumber', [
      blockNum,
      blocksPerEpoch,
    ]);

    return result;
  }

  async isEpochRoot(blockHeight: bigint): Promise<boolean> {
    const result = await this.readContractV2('isEpochRoot', [blockHeight]);

    return result;
  }

  async isGtEpochRoot(blockHeight: bigint): Promise<boolean> {
    const result = await this.readContractV2('isGtEpochRoot', [blockHeight]);

    return result;
  }
}
