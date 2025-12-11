import { bigintCodec } from '@/convert/codec/bigint';
import { ScalarField } from '../bn254/bn254_interface';
import { GasEstimatorForContract } from '../l1/l1_interface';

export class StakeTableState {
  constructor(
    public readonly threshold: bigint,
    public readonly blsKeyComm: ScalarField,
    public readonly schnorrKeyComm: ScalarField,
    public readonly amountComm: ScalarField,
  ) {
    Object.freeze(this);
  }

  toJSON() {
    return [
      bigintCodec.encode(this.threshold),
      this.blsKeyComm.toJSON(),
      this.schnorrKeyComm.toJSON(),
      this.amountComm.toJSON(),
    ];
  }
}

export class LightClientState {
  constructor(
    public readonly viewNum: bigint,
    public readonly blockHeight: bigint,
    public readonly blockCommRoot: ScalarField,
  ) {
    Object.freeze(this);
  }

  toJSON() {
    return [
      bigintCodec.encode(this.viewNum),
      bigintCodec.encode(this.blockHeight),
      this.blockCommRoot.toJSON(),
    ];
  }
}

export class StateHistoryCommitment {
  constructor(
    public readonly l1BlockHeight: bigint,
    public readonly l1BlockTimestamp: bigint,
    public readonly hotShotBlockHeight: bigint,
    public readonly hotShotBlockCommRoot: ScalarField,
  ) {
    Object.freeze(this);
  }

  toJSON() {
    return [
      bigintCodec.encode(this.l1BlockHeight),
      bigintCodec.encode(this.l1BlockTimestamp),
      bigintCodec.encode(this.hotShotBlockHeight),
      this.hotShotBlockCommRoot.toJSON(),
    ];
  }
}

export interface LightClientContractReadOnly {
  readonly address: `0x${string}`;

  genesisStakeTableState(): Promise<StakeTableState>;
  genesisState(): Promise<LightClientState>;
  finalizedState(): Promise<LightClientState>;
  permissionedProver(): Promise<`0x${string}`>;
  stateHistoryRetentionPeriod(): Promise<number>;
  stateHistoryFirstIndex(): Promise<bigint>;
  stateHistoryCommitments(index: bigint): Promise<StateHistoryCommitment>;
  currentBlockNumber(): Promise<bigint>;
  getVersion(): Promise<readonly [number, number, number]>;
  lagOverEscapeHatchThreshold(
    blockNumber: bigint,
    blockThreshold: bigint,
  ): Promise<boolean>;
  getHotShotCommitment(
    blockHeight: bigint,
  ): Promise<readonly [ScalarField, bigint]>;
  getStateHistoryCount(): Promise<bigint>;
  isPermissionedProverEnabled(): Promise<boolean>;
}

export interface LightClientContractWriteable {}

export interface LightClientContract
  extends LightClientContractReadOnly, LightClientContractWriteable {}

export type LightClientContractGasEstimator =
  GasEstimatorForContract<LightClientContractWriteable>;
