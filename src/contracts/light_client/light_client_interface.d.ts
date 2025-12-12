import { ScalarField } from '../bn254/bn254_interface';
import { GasEstimatorForContract } from '../l1/l1_interface';
export declare class StakeTableState {
    readonly threshold: bigint;
    readonly blsKeyComm: ScalarField;
    readonly schnorrKeyComm: ScalarField;
    readonly amountComm: ScalarField;
    constructor(threshold: bigint, blsKeyComm: ScalarField, schnorrKeyComm: ScalarField, amountComm: ScalarField);
    toJSON(): `0x${string}`[];
}
export declare class LightClientState {
    readonly viewNum: bigint;
    readonly blockHeight: bigint;
    readonly blockCommRoot: ScalarField;
    constructor(viewNum: bigint, blockHeight: bigint, blockCommRoot: ScalarField);
    toJSON(): `0x${string}`[];
}
export declare class StateHistoryCommitment {
    readonly l1BlockHeight: bigint;
    readonly l1BlockTimestamp: bigint;
    readonly hotShotBlockHeight: bigint;
    readonly hotShotBlockCommRoot: ScalarField;
    constructor(l1BlockHeight: bigint, l1BlockTimestamp: bigint, hotShotBlockHeight: bigint, hotShotBlockCommRoot: ScalarField);
    toJSON(): `0x${string}`[];
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
    lagOverEscapeHatchThreshold(blockNumber: bigint, blockThreshold: bigint): Promise<boolean>;
    getHotShotCommitment(blockHeight: bigint): Promise<readonly [ScalarField, bigint]>;
    getStateHistoryCount(): Promise<bigint>;
    isPermissionedProverEnabled(): Promise<boolean>;
}
export interface LightClientContractWriteable {
}
export interface LightClientContract extends LightClientContractReadOnly, LightClientContractWriteable {
}
export type LightClientContractGasEstimator = GasEstimatorForContract<LightClientContractWriteable>;
