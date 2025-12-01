import { Config } from 'wagmi';
import { estimateContractGas } from '../l1/estimate_contract_gas';
import EspTokenAbi from './esp_token_abi';
import { ESPTokenContractGasEstimator } from './esp_token_interface';

/**
 * ESPTokenContractGasEstimatorRemote implements
 * ESPTokenContractGasEstimator by making remote calls to estimate gas
 * for ESP token contract methods. It is implemented via the Wagmi
 * estimateContractGas utility function.
 */
export class ESPTokenContractGasEstimatorRemote implements ESPTokenContractGasEstimator {
  // Implementation of ESPTokenContract methods would go here
  constructor(
    private readonly config: Config,
    private readonly chainID: number,
    public readonly address: `0x${string}`,
  ) {}

  async transfer(account: `0x${string}`, to: `0x${string}`, value: bigint) {
    return estimateContractGas(this.config, {
      account,
      abi: EspTokenAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'transfer',
      args: [to, value],
    });
  }

  async approve(account: `0x${string}`, spender: `0x${string}`, value: bigint) {
    return estimateContractGas(this.config, {
      account,
      abi: EspTokenAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'approve',
      args: [spender, value],
    });
  }

  async transferFrom(
    account: `0x${string}`,
    from: `0x${string}`,
    to: `0x${string}`,
    value: bigint,
  ) {
    return estimateContractGas(this.config, {
      account,
      abi: EspTokenAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'transferFrom',
      args: [from, to, value],
    });
  }
}
