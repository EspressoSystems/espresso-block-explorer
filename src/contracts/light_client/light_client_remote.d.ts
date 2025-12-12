import { Config } from 'wagmi';
import { ScalarField } from '../bn254/bn254_interface';
import { LightClientContract, LightClientState, StakeTableState, StateHistoryCommitment } from './light_client_interface';
export declare class LightClientRemote implements LightClientContract {
    protected readonly config: Config;
    protected readonly chainID: number;
    readonly address: `0x${string}`;
    constructor(config: Config, chainID: number, address: `0x${string}`);
    private readContract;
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
