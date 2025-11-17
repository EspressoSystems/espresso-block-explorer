import { Config } from 'wagmi';
import { estimateContractGas } from '../l1/estimate_contract_gas';
import EspTokenAbi from './esp_token_abi';
import { ESPTokenContractGasEstimator } from './esp_token_interface';

export class ESPTokenContractGasEstimatorRemote
  implements ESPTokenContractGasEstimator
{
  // Implementation of ESPTokenContract methods would go here
  constructor(
    private readonly config: Config,
    private readonly chainID: number,
    public readonly address: `0x${string}`,
  ) {}

  async transfer(to: `0x${string}`, value: bigint) {
    return estimateContractGas(this.config, {
      abi: EspTokenAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'transfer',
      args: [to, value],
    });
  }

  async approve(spender: `0x${string}`, value: bigint) {
    return estimateContractGas(this.config, {
      abi: EspTokenAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'approve',
      args: [spender, value],
    });
  }

  async transferFrom(from: `0x${string}`, to: `0x${string}`, value: bigint) {
    return estimateContractGas(this.config, {
      abi: EspTokenAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'transferFrom',
      args: [from, to, value],
    });
  }
}
