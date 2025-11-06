export declare enum ValidatorStatus {
    unknown = 0,
    active = 1,
    exited = 2
}
export type Validator = readonly [bigint, ValidatorStatus];
export type Undelegation = readonly [bigint, bigint];
/**
 * StakeTableContractReadOnly defines the read-only interface for the
 * Stake Table Contract.
 */
export interface StakeTableContractReadOnly {
    readonly address: `0x${string}`;
    lightClient(): Promise<`0x${string}`>;
    token(): Promise<`0x${string}`>;
    validator(account: `0x${string}`): Promise<Validator>;
    blsKey(blsKeyHash: `0x${string}`): Promise<boolean>;
    validatorExit(validator: `0x${string}`): Promise<bigint>;
    delegation(validator: `0x${string}`, delegator: `0x${string}`): Promise<bigint>;
    undelegation(validator: `0x${string}`, delegator: `0x${string}`): Promise<Undelegation>;
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
export interface StakeTableContract extends StakeTableContractReadOnly, StakeTableContractWriteable {
}
