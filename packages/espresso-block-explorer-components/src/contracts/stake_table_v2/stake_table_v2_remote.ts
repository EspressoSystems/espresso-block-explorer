import { Config } from 'wagmi';
import { readContract, writeContract } from 'wagmi/actions';
import { StakeTableRemote } from '../stake_table/stake_table_remote';
import StakeTableV2Abi from './stake_table_v2_abi';
import { StakeTableV2Contract } from './stake_table_v2_interface';

export class StakeTableV2Remote
  extends StakeTableRemote
  implements StakeTableV2Contract
{
  constructor(config: Config, chainID: number, contractAddress: `0x${string}`) {
    super(config, chainID, contractAddress);
  }

  // Readable Methods

  async PAUSER_ROLE() {
    return readContract(this.config, {
      abi: StakeTableV2Abi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'PAUSER_ROLE',
    });
  }

  async minCommissionIncreaseInterval() {
    return readContract(this.config, {
      abi: StakeTableV2Abi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'minCommissionIncreaseInterval',
    });
  }

  async maxCommissionIncrease() {
    return readContract(this.config, {
      abi: StakeTableV2Abi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'maxCommissionIncrease',
    });
  }

  async activeStake() {
    return readContract(this.config, {
      abi: StakeTableV2Abi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'activeStake',
    });
  }

  async commissionTracking(validator: `0x${string}`) {
    return readContract(this.config, {
      abi: StakeTableV2Abi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'commissionTracking',
      args: [validator],
    });
  }

  // Writable Methods

  async updateConsensusKeysV2(
    blsVk: { x0: bigint; x1: bigint; y0: bigint; y1: bigint },
    schnorrVk: { x: bigint; y: bigint },
    blsSig: { x: bigint; y: bigint },
    schnorrSig: `0x${string}`,
  ) {
    return writeContract(this.config, {
      abi: StakeTableV2Abi,
      address: this.address,
      chainId: this.chainID,
      functionName: 'updateConsensusKeysV2',
      args: [blsVk, schnorrVk, blsSig, schnorrSig],
    });
  }
}
