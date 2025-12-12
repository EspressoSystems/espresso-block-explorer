import { Config } from 'wagmi';
import { LightClientContractGasEstimator } from './light_client_interface';
/**
 * LightClientContractGasEstimatorRemote implements
 * LightClientContractGasEstimator by making remote calls to estimate gas
 * for light client contract methods. It is implemented via the Wagmi
 * estimateContractGas utility function.
 */
export declare class LightClientContractGasEstimatorRemote implements LightClientContractGasEstimator {
    protected readonly config: Config;
    protected readonly chainID: number;
    readonly address: `0x${string}`;
    constructor(config: Config, chainID: number, address: `0x${string}`);
}
