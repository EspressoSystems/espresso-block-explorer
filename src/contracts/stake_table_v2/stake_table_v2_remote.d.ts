import { Config } from 'wagmi';
import { StakeTableRemote } from '../stake_table/stake_table_remote';
import { StakeTableV2Contract } from './stake_table_v2_interface';
export declare class StakeTableV2Remote extends StakeTableRemote implements StakeTableV2Contract {
    constructor(config: Config, chainID: number, contractAddress: `0x${string}`);
    PAUSER_ROLE(): Promise<`0x${string}`>;
    minCommissionIncreaseInterval(): Promise<bigint>;
    maxCommissionIncrease(): Promise<number>;
    activeStake(): Promise<bigint>;
    commissionTracking(validator: `0x${string}`): Promise<readonly [number, bigint]>;
    updateConsensusKeysV2(blsVk: {
        x0: bigint;
        x1: bigint;
        y0: bigint;
        y1: bigint;
    }, schnorrVk: {
        x: bigint;
        y: bigint;
    }, blsSig: {
        x: bigint;
        y: bigint;
    }, schnorrSig: `0x${string}`): Promise<`0x${string}`>;
}
