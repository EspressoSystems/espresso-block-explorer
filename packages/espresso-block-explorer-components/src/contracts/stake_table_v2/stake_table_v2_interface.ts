import {
  StakeTableContractReadOnly,
  StakeTableContractWriteable,
} from '../stake_table/stake_table_interface';

export type CommissionTracking = readonly [number, bigint];

export interface StakeTableV2ContractReadOnly
  extends StakeTableContractReadOnly {
  PAUSER_ROLE(): Promise<`0x${string}`>;
  minCommissionIncreaseInterval(): Promise<bigint>;
  maxCommissionIncrease(): Promise<number>;
  activeStake(): Promise<bigint>;
  commissionTracking(validator: `0x${string}`): Promise<CommissionTracking>;
}

export interface StakeTableV2ContractWriteable
  extends StakeTableContractWriteable {
  updateConsensusKeysV2(
    blsVk: { x0: bigint; x1: bigint; y0: bigint; y1: bigint },
    schnorrVk: { x: bigint; y: bigint },
    blsSig: { x: bigint; y: bigint },
    schnorrSig: `0x${string}`,
  ): Promise<`0x${string}`>;
}

export interface StakeTableV2Contract
  extends StakeTableV2ContractReadOnly,
    StakeTableV2ContractWriteable {}
