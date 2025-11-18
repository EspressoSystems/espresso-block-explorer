import { Config } from 'wagmi';
import { estimateContractGas } from '../l1/estimate_contract_gas';
import { StakeTableContractGasEstimatorRemote } from '../stake_table/stake_table_gas_estimator_remote';
import StakeTableV2Abi from './stake_table_v2_abi';
import { StakeTableV2ContractGasEstimator } from './stake_table_v2_interface';

/**
 * StakeTableV2ContractGasEstimatorRemote implements
 * StakeTableV2ContractGasEstimator by making remote calls to estimate gas
 * for stake table v2 contract methods. It is implemented via the Wagmi
 * estimateContractGas utility function.
 */
export class StakeTableV2ContractGasEstimatorRemote
  extends StakeTableContractGasEstimatorRemote
  implements StakeTableV2ContractGasEstimator
{
  constructor(config: Config, chainID: number, contractAddress: `0x${string}`) {
    super(config, chainID, contractAddress);
  }

  async updateConsensusKeysV2(
    account: `0x${string}`,
    blsVk: { x0: bigint; x1: bigint; y0: bigint; y1: bigint },
    schnorrVk: { x: bigint; y: bigint },
    blsSig: { x: bigint; y: bigint },
    schnorrSig: `0x${string}`,
  ) {
    return estimateContractGas(this.config, {
      account,
      abi: StakeTableV2Abi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'updateConsensusKeysV2',
      args: [blsVk, schnorrVk, blsSig, schnorrSig],
    });
  }
}
