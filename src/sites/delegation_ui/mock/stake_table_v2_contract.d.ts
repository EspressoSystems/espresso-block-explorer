import { ESPTokenContract } from '../../../contracts/esp_token/esp_token_interface';
import { Undelegation, Validator } from '../../../contracts/stake_table/stake_table_interface';
import { CommissionTracking, StakeTableV2Contract } from '../../../contracts/stake_table_v2/stake_table_v2_interface';
import { default as React } from 'react';
import { MockL1MethodsImpl } from './l1_methods';
/**
 * StakeTableState defines the structure of the mock
 * StakeTableV2Contract state.
 */
export interface StakeTableState {
    contractAddress: `0x${string}`;
    validators: Map<`0x${string}`, Validator>;
    blsKeys: Set<`0x${string}`>;
    validatorExits: Map<`0x${string}`, bigint>;
    delegations: Map<`0x${string}`, Map<`0x${string}`, bigint>>;
    undelegations: Map<`0x${string}`, Map<`0x${string}`, Undelegation>>;
    exitEscrowPeriod: bigint;
    pauserRole: `0x${string}`;
    minCommissionIncreaseInterval: bigint;
    maxCommissionIncrease: number;
    commissionTracking: Map<`0x${string}`, CommissionTracking>;
    schnorrKeys: Set<`0x${string}`>;
    lastUpdate: Date;
}
/**
 * MockStakeTableV2ContractImpl is a mock implementation of the
 * StakeTableV2Contract interface for testing and development purposes.
 */
export declare class MockStakeTableV2ContractImpl implements StakeTableV2Contract {
    private readonly l1Methods;
    private readonly espToken;
    readonly accountAddress: null | `0x${string}`;
    constructor(l1Methods: MockL1MethodsImpl, espToken: ESPTokenContract, state: StakeTableState, accountAddress: null | `0x${string}`);
    get state(): StakeTableState;
    replaceAccountAddress(accountAddress: `0x${string}` | null): MockStakeTableV2ContractImpl;
    get lastUpdate(): Date;
    get address(): `0x${string}`;
    PAUSER_ROLE(): Promise<`0x${string}`>;
    minCommissionIncreaseInterval(): Promise<bigint>;
    maxCommissionIncrease(): Promise<number>;
    activeStake(): Promise<bigint>;
    commissionTracking(validator: `0x${string}`): Promise<CommissionTracking>;
    lightClient(): Promise<`0x${string}`>;
    token(): Promise<`0x${string}`>;
    validator(account: `0x${string}`): Promise<Validator>;
    blsKey(): Promise<boolean>;
    validatorExit(validator: `0x${string}`): Promise<bigint>;
    delegation(validator: `0x${string}`, delegator: `0x${string}`): Promise<bigint>;
    undelegation(validator: `0x${string}`, delegator: `0x${string}`): Promise<Undelegation>;
    exitEscrowPeriod(): Promise<bigint>;
    getVersion(): Promise<readonly [number, number, number]>;
    updateConsensusKeysV2(): Promise<`0x${string}`>;
    deregisterValidator(): Promise<`0x${string}`>;
    delegate(validator: `0x${string}`, amount: bigint): Promise<`0x${string}`>;
    undelegate(validator: `0x${string}`, amount: bigint): Promise<`0x${string}`>;
    claimWithdrawal(validator: `0x${string}`): Promise<`0x${string}`>;
    claimValidatorExit(validator: `0x${string}`): Promise<`0x${string}`>;
}
/**
 * MockStakeTableV2Contract is a React component that provides
 * a mock StakeTableV2Contract implementation via context for
 * testing and development purposes.
 *
 * It will overwrite the StakeTableV2ContractContext with a mock
 * implementation that simulates the behavior of an actual
 * StakeTableV2Contract.
 *
 * It **MUST** be given a valid ESPTokenContract via the
 * `ESPTokenContractContext` context.
 *
 * It pre-populates the delegations mapping with initial stakes
 * derived from the `nodeList` fake data.
 */
export declare const MockStakeTableV2Contract: React.FC<React.PropsWithChildren>;
