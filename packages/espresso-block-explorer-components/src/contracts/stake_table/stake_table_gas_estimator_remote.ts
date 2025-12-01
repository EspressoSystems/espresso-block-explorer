import { Config } from 'wagmi';
import { estimateContractGas } from '../l1/estimate_contract_gas';
import StakeTableAbi from './stake_table_abi';
import { StakeTableContractGasEstimator } from './stake_table_interface';

/**
 * StakeTableContractGasEstimatorRemote implements
 * StakeTableContractGasEstimator by making remote calls to estimate gas
 * for stake table contract methods. It is implemented via the Wagmi
 * estimateContractGas utility function.
 */
export class StakeTableContractGasEstimatorRemote implements StakeTableContractGasEstimator {
  // Implementation of ESPTokenContract methods would go here
  constructor(
    protected readonly config: Config,
    protected readonly chainID: number,
    public readonly address: `0x${string}`,
  ) {}

  async deregisterValidator(account: `0x${string}`) {
    return estimateContractGas(this.config, {
      account,
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'deregisterValidator',
    });
  }

  async delegate(
    account: `0x${string}`,
    validator: `0x${string}`,
    amount: bigint,
  ) {
    return estimateContractGas(this.config, {
      account,
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'delegate',
      args: [validator, amount],
    });
  }

  async undelegate(
    account: `0x${string}`,
    validator: `0x${string}`,
    amount: bigint,
  ) {
    return estimateContractGas(this.config, {
      account,
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'undelegate',
      args: [validator, amount],
    });
  }

  async claimWithdrawal(account: `0x${string}`, validator: `0x${string}`) {
    return estimateContractGas(this.config, {
      account,
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'claimWithdrawal',
      args: [validator],
    });
  }

  async claimValidatorExit(account: `0x${string}`, validator: `0x${string}`) {
    return estimateContractGas(this.config, {
      account,
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'claimValidatorExit',
      args: [validator],
    });
  }
}
