import { Config } from 'wagmi';
import { estimateContractGas } from '../l1/estimate_contract_gas';
import StakeTableAbi from './stake_table_abi';
import { StakeTableContractGasEstimator } from './stake_table_interface';

export class StakeTableContractGasEstimatorRemote
  implements StakeTableContractGasEstimator
{
  // Implementation of ESPTokenContract methods would go here
  constructor(
    protected readonly config: Config,
    protected readonly chainID: number,
    public readonly address: `0x${string}`,
  ) {}

  async deregisterValidator() {
    return 100001n;
    return estimateContractGas(this.config, {
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'deregisterValidator',
    });
  }

  async delegate(validator: `0x${string}`, amount: bigint) {
    return 68501n;
    return estimateContractGas(this.config, {
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'delegate',
      args: [validator, amount],
    });
  }

  async undelegate(validator: `0x${string}`, amount: bigint) {
    return 88783n;
    return estimateContractGas(this.config, {
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'undelegate',
      args: [validator, amount],
    });
  }

  async claimWithdrawal(validator: `0x${string}`) {
    return 100002n;
    return estimateContractGas(this.config, {
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'claimWithdrawal',
      args: [validator],
    });
  }

  async claimValidatorExit(validator: `0x${string}`) {
    return 100003n;
    return estimateContractGas(this.config, {
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'claimValidatorExit',
      args: [validator],
    });
  }
}
