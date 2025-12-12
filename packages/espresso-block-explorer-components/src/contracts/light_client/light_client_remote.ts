import { breakpoint } from '@/assert/debugger';
import {
  ContractFunctionName,
  ReadContractParameters,
  ReadContractReturnType,
} from 'viem';
import { Config } from 'wagmi';
import { readContract } from 'wagmi/actions';
import { ScalarField } from '../bn254/bn254_interface';
import LightClientAbi from './light_client_abi';
import {
  LightClientContract,
  LightClientState,
  StakeTableState,
  StateHistoryCommitment,
} from './light_client_interface';

type LightClientFunctionNames = ContractFunctionName<
  typeof LightClientAbi,
  'pure' | 'view'
>;

type LightClientReadContractParams<N extends LightClientFunctionNames> =
  ReadContractParameters<typeof LightClientAbi, N>;

type LightClientReadContractReturnType<N extends LightClientFunctionNames> =
  ReadContractReturnType<typeof LightClientAbi, N>;

export class LightClientRemote implements LightClientContract {
  // Implementation of ESPTokenContract methods would go here
  constructor(
    protected readonly config: Config,
    protected readonly chainID: number,
    public readonly address: `0x${string}`,
  ) {}

  // Readable Methods

  private async readContract<
    N extends LightClientFunctionNames,
    A extends Omit<
      LightClientReadContractParams<N>,
      'address' | 'abi' | 'chainId' | 'functionName'
    >,
  >(
    functionName: N,
    args?: A['args'],
    extra?: Omit<A, 'args'>,
  ): Promise<LightClientReadContractReturnType<N>> {
    return readContract(this.config, {
      abi: LightClientAbi,
      address: this.address,
      chainId: this.chainID,
      functionName,
      args,
      ...(extra ? extra : {}),
    });
  }

  async genesisStakeTableState(): Promise<StakeTableState> {
    const [threshold, blsKeyComm, schnorrKeyComm, amountComm] =
      await this.readContract('genesisStakeTableState');
    return new StakeTableState(
      threshold,
      new ScalarField(blsKeyComm),
      new ScalarField(schnorrKeyComm),
      new ScalarField(amountComm),
    );
  }

  async genesisState(): Promise<LightClientState> {
    const [viewNum, blockHeight, blockCommRoot] =
      await this.readContract('genesisState');

    return new LightClientState(
      viewNum,
      blockHeight,
      new ScalarField(blockCommRoot),
    );
  }

  async finalizedState(): Promise<LightClientState> {
    try {
      const [viewNum, blockHeight, blockCommRoot] =
        await this.readContract('finalizedState');

      return new LightClientState(
        viewNum,
        blockHeight,
        new ScalarField(blockCommRoot),
      );
    } catch (err) {
      breakpoint();
      throw err;
    }
  }

  async permissionedProver(): Promise<`0x${string}`> {
    const result = await this.readContract('permissionedProver');

    return result;
  }

  async stateHistoryRetentionPeriod(): Promise<number> {
    const result = await this.readContract('stateHistoryRetentionPeriod');

    return result;
  }

  async stateHistoryFirstIndex(): Promise<bigint> {
    const result = await this.readContract('stateHistoryFirstIndex');

    return result;
  }

  async stateHistoryCommitments(
    index: bigint,
  ): Promise<StateHistoryCommitment> {
    const [
      l1BlockHeight,
      l1BlockTimestamp,
      hotShotBlockHeight,
      hotShotBlockCommRoot,
    ] = await this.readContract('stateHistoryCommitments', [index]);

    return new StateHistoryCommitment(
      l1BlockHeight,
      l1BlockTimestamp,
      hotShotBlockHeight,
      new ScalarField(hotShotBlockCommRoot),
    );
  }

  async currentBlockNumber(): Promise<bigint> {
    const result = await this.readContract('currentBlockNumber');

    return result;
  }

  async getVersion() {
    const result = await this.readContract('getVersion');

    return result;
  }

  async lagOverEscapeHatchThreshold(
    blockNumber: bigint,
    blockThreshold: bigint,
  ): Promise<boolean> {
    const result = await this.readContract('lagOverEscapeHatchThreshold', [
      blockNumber,
      blockThreshold,
    ]);

    return result;
  }

  async getHotShotCommitment(
    blockHeight: bigint,
  ): Promise<readonly [ScalarField, bigint]> {
    const [hotShotBlockCommRoot, hotshotBlockHeight] = await this.readContract(
      'getHotShotCommitment',
      [blockHeight],
    );

    return [new ScalarField(hotShotBlockCommRoot), hotshotBlockHeight];
  }

  async getStateHistoryCount(): Promise<bigint> {
    const result = await this.readContract('getStateHistoryCount');

    return result;
  }

  async isPermissionedProverEnabled(): Promise<boolean> {
    const result = await this.readContract('isPermissionedProverEnabled');

    return result;
  }

  // Writable Methods
}
