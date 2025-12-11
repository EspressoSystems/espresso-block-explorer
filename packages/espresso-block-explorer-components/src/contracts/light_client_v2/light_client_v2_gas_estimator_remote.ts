import { Config } from 'wagmi';
import { LightClientContractGasEstimatorRemote } from '../light_client/light_client_gas_estimator_remote';
import { LightClientV2ContractGasEstimator } from './light_client_v2_interface';

/**
 * LightClientV2ContractGasEstimatorRemote implements
 * LightClientV2ContractGasEstimator by making remote calls to estimate gas
 * for light client v2 contract methods. It is implemented via the Wagmi
 * estimateContractGas utility function.
 */
export class LightClientV2ContractGasEstimatorRemote
  extends LightClientContractGasEstimatorRemote
  implements LightClientV2ContractGasEstimator
{
  constructor(config: Config, chainID: number, contractAddress: `0x${string}`) {
    super(config, chainID, contractAddress);
  }
}
