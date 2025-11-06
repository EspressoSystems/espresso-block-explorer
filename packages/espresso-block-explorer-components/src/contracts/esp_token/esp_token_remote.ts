import { Config } from 'wagmi';
import { readContract, writeContract } from 'wagmi/actions';
import EspTokenAbi from './esp_token_abi';
import { ESPTokenContract } from './esp_token_interface';

export class ESPTokenRemote implements ESPTokenContract {
  // Implementation of ESPTokenContract methods would go here
  constructor(
    private readonly config: Config,
    private readonly chainID: number,
    public readonly address: `0x${string}`,
  ) {
    this.address = address;
    this.chainID = chainID;
    this.config = config;
  }

  // Readable methods

  async getVersion() {
    return readContract(this.config, {
      abi: EspTokenAbi, // ABI would be defined here
      address: this.address,
      chainId: this.chainID,
      functionName: 'getVersion' as const,
    });
  }

  async name() {
    return readContract(this.config, {
      abi: EspTokenAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'name',
    });
  }

  async symbol() {
    return readContract(this.config, {
      abi: EspTokenAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'symbol',
    });
  }

  async decimals() {
    return readContract(this.config, {
      abi: EspTokenAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'decimals',
    });
  }

  async totalSupply() {
    return readContract(this.config, {
      abi: EspTokenAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'totalSupply',
    });
  }

  async balanceOf(account: `0x${string}`) {
    return readContract(this.config, {
      abi: EspTokenAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'balanceOf',
      args: [account],
    });
  }

  async allowance(owner: `0x${string}`, spender: `0x${string}`) {
    return readContract(this.config, {
      abi: EspTokenAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'allowance',
      args: [owner, spender],
    });
  }

  // Writable methods

  async transfer(to: `0x${string}`, value: bigint) {
    return writeContract(this.config, {
      abi: EspTokenAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'transfer',
      args: [to, value],
    });
  }

  async approve(spender: `0x${string}`, value: bigint) {
    return writeContract(this.config, {
      abi: EspTokenAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'approve',
      args: [spender, value],
    });
  }

  async transferFrom(from: `0x${string}`, to: `0x${string}`, value: bigint) {
    return writeContract(this.config, {
      abi: EspTokenAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'transferFrom',
      args: [from, to, value],
    });
  }
}
