import { Config } from 'wagmi';
import { readContract, writeContract } from 'wagmi/actions';
import StakeTableAbi from './stake_table_abi';
import { StakeTableContract } from './stake_table_interface';

export class StakeTableRemote implements StakeTableContract {
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

  // Readable Methods

  async lightClient() {
    return readContract(this.config, {
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'lightClient',
    });
  }

  async token() {
    return readContract(this.config, {
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'token',
    });
  }

  async validator(account: `0x${string}`) {
    const result = await readContract(this.config, {
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'validators',
      args: [account],
    });

    return result;
  }

  async blsKey(blsKeyHash: `0x${string}`) {
    return readContract(this.config, {
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'blsKeys',
      args: [blsKeyHash],
    });
  }

  async validatorExit(validator: `0x${string}`) {
    return readContract(this.config, {
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'validatorExits',
      args: [validator],
    });
  }

  async delegation(validator: `0x${string}`, delegator: `0x${string}`) {
    return readContract(this.config, {
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'delegations',
      args: [validator, delegator],
    });
  }

  async undelegation(validator: `0x${string}`, delegator: `0x${string}`) {
    return readContract(this.config, {
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'undelegations',
      args: [validator, delegator],
    });
  }

  async exitEscrowPeriod() {
    return readContract(this.config, {
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'exitEscrowPeriod',
    });
  }

  async getVersion() {
    return readContract(this.config, {
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'getVersion',
    });
  }

  // Writable Methods

  async deregisterValidator() {
    return writeContract(this.config, {
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'deregisterValidator',
    });
  }

  async delegate(validator: `0x${string}`, amount: bigint) {
    return writeContract(this.config, {
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'delegate',
      args: [validator, amount],
    });
  }

  async undelegate(validator: `0x${string}`, amount: bigint) {
    return writeContract(this.config, {
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'undelegate',
      args: [validator, amount],
    });
  }

  async claimWithdrawal(validator: `0x${string}`) {
    return writeContract(this.config, {
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'claimWithdrawal',
      args: [validator],
    });
  }

  async claimValidatorExit(validator: `0x${string}`) {
    return writeContract(this.config, {
      abi: StakeTableAbi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'claimValidatorExit',
      args: [validator],
    });
  }
}
