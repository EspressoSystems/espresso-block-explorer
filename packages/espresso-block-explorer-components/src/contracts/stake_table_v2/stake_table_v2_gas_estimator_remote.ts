import { Config } from 'wagmi';
import { estimateContractGas } from '../l1/estimate_contract_gas';
import { StakeTableContractGasEstimatorRemote } from '../stake_table/stake_table_gas_estimator_remote';
import StakeTableV2Abi from './stake_table_v2_abi';
import { StakeTableV2ContractGasEstimator } from './stake_table_v2_interface';

export class StakeTableV2ContractGasEstimatorRemote
  extends StakeTableContractGasEstimatorRemote
  implements StakeTableV2ContractGasEstimator
{
  constructor(config: Config, chainID: number, contractAddress: `0x${string}`) {
    super(config, chainID, contractAddress);
  }

  async updateConsensusKeysV2(
    blsVk: { x0: bigint; x1: bigint; y0: bigint; y1: bigint },
    schnorrVk: { x: bigint; y: bigint },
    blsSig: { x: bigint; y: bigint },
    schnorrSig: `0x${string}`,
  ) {
    return 100004n;
    return estimateContractGas(this.config, {
      abi: StakeTableV2Abi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'updateConsensusKeysV2',
      args: [blsVk, schnorrVk, blsSig, schnorrSig],
    });
  }
}
