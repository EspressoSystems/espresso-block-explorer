import { bigintCodec } from '@/convert/codec/bigint';
import { numberCodec } from '@/convert/codec/number';
import { GasEstimatorForContract } from '../l1/l1_interface';

export enum ValidatorStatus {
  unknown,
  active,
  exited,
}

export type RawValidator = readonly [bigint, ValidatorStatus];

/**
 * Undelegation represents an undelegation entry with amount and timestamp.
 */
export type RawUndelegation = readonly [bigint, bigint];

export class Validator {
  constructor(
    public readonly stake: bigint,
    public readonly status: ValidatorStatus,
  ) {
    Object.freeze(this);
  }

  static fromRaw(validator: RawValidator) {
    return new Validator(validator[0], validator[1]);
  }

  toJSON() {
    return [
      bigintCodec.encode(this.stake),
      numberCodec.encode(this.status),
    ] as const;
  }
}

export class Undelegation {
  constructor(
    public readonly amount: bigint,
    public readonly timestamp: bigint,
  ) {
    Object.freeze(this);
  }

  static fromRaw(undelegation: RawUndelegation) {
    return new Undelegation(undelegation[0], undelegation[1]);
  }

  toJSON() {
    return [
      bigintCodec.encode(this.amount),
      bigintCodec.encode(this.timestamp),
    ] as const;
  }
}

/**
 * StakeTableContractReadOnly defines the read-only interface for the
 * Stake Table Contract.
 */
export interface StakeTableContractReadOnly {
  readonly address: `0x${string}`;
  // Contract Addresses

  lightClient(): Promise<`0x${string}`>;
  token(): Promise<`0x${string}`>;

  validator(account: `0x${string}`): Promise<Validator>;
  blsKey(blsKeyHash: `0x${string}`): Promise<boolean>;
  validatorExit(validator: `0x${string}`): Promise<bigint>;
  delegation(
    validator: `0x${string}`,
    delegator: `0x${string}`,
  ): Promise<bigint>;
  undelegation(
    validator: `0x${string}`,
    delegator: `0x${string}`,
  ): Promise<Undelegation>;
  exitEscrowPeriod(): Promise<bigint>;
  getVersion(): Promise<readonly [number, number, number]>;
}

/**
 * StakeTableContractWriteable defines the writeable interface for the
 * Stake Table Contract.
 */
export interface StakeTableContractWriteable {
  deregisterValidator(): Promise<`0x${string}`>;
  delegate(validator: `0x${string}`, amount: bigint): Promise<`0x${string}`>;
  undelegate(validator: `0x${string}`, amount: bigint): Promise<`0x${string}`>;
  claimWithdrawal(validator: `0x${string}`): Promise<`0x${string}`>;
  claimValidatorExit(validator: `0x${string}`): Promise<`0x${string}`>;
}

/**
 * StakeTableContract combines both read-only and writeable interfaces
 * for the Stake Table Contract.
 */
export interface StakeTableContract
  extends StakeTableContractReadOnly,
    StakeTableContractWriteable {}

/**
 * StakeTableContractGasEstimator defines the gas estimator type for the
 * Stake Table Contract.
 */
export type StakeTableContractGasEstimator =
  GasEstimatorForContract<StakeTableContractWriteable>;
