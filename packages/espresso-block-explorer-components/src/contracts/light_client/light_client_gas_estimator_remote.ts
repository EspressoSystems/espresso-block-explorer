import { Config } from 'wagmi';
import { LightClientContractGasEstimator } from './light_client_interface';

/**
 * LightClientContractGasEstimatorRemote implements
 * LightClientContractGasEstimator by making remote calls to estimate gas
 * for light client contract methods. It is implemented via the Wagmi
 * estimateContractGas utility function.
 */
export class LightClientContractGasEstimatorRemote implements LightClientContractGasEstimator {
  // Implementation of ESPTokenContract methods would go here
  constructor(
    protected readonly config: Config,
    protected readonly chainID: number,
    public readonly address: `0x${string}`,
  ) {}
}
