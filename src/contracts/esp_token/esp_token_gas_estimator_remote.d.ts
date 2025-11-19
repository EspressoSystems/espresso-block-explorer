import { Config } from 'wagmi';
import { ESPTokenContractGasEstimator } from './esp_token_interface';
/**
 * ESPTokenContractGasEstimatorRemote implements
 * ESPTokenContractGasEstimator by making remote calls to estimate gas
 * for ESP token contract methods. It is implemented via the Wagmi
 * estimateContractGas utility function.
 */
export declare class ESPTokenContractGasEstimatorRemote implements ESPTokenContractGasEstimator {
    private readonly config;
    private readonly chainID;
    readonly address: `0x${string}`;
    constructor(config: Config, chainID: number, address: `0x${string}`);
    transfer(account: `0x${string}`, to: `0x${string}`, value: bigint): Promise<bigint>;
    approve(account: `0x${string}`, spender: `0x${string}`, value: bigint): Promise<bigint>;
    transferFrom(account: `0x${string}`, from: `0x${string}`, to: `0x${string}`, value: bigint): Promise<bigint>;
}
