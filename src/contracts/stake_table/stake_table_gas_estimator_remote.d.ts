import { Config } from 'wagmi';
import { StakeTableContractGasEstimator } from './stake_table_interface';
/**
 * StakeTableContractGasEstimatorRemote implements
 * StakeTableContractGasEstimator by making remote calls to estimate gas
 * for stake table contract methods. It is implemented via the Wagmi
 * estimateContractGas utility function.
 */
export declare class StakeTableContractGasEstimatorRemote implements StakeTableContractGasEstimator {
    protected readonly config: Config;
    protected readonly chainID: number;
    readonly address: `0x${string}`;
    constructor(config: Config, chainID: number, address: `0x${string}`);
    deregisterValidator(account: `0x${string}`): Promise<bigint>;
    delegate(account: `0x${string}`, validator: `0x${string}`, amount: bigint): Promise<bigint>;
    undelegate(account: `0x${string}`, validator: `0x${string}`, amount: bigint): Promise<bigint>;
    claimWithdrawal(account: `0x${string}`, validator: `0x${string}`): Promise<bigint>;
    claimValidatorExit(account: `0x${string}`, validator: `0x${string}`): Promise<bigint>;
}
