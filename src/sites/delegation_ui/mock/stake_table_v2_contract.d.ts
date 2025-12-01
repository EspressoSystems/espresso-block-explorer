import { ESPTokenContract } from '../../../contracts/esp_token/esp_token_interface';
import { RawUndelegation, RawValidator, Undelegation, Validator } from '../../../contracts/stake_table/stake_table_interface';
import { CommissionTracking, StakeTableV2Contract } from '../../../contracts/stake_table_v2/stake_table_v2_interface';
import { default as React } from 'react';
import { MockContractStorage, MockL1MethodsImpl, UnderlyingTransaction } from './l1_methods';
/**
 * StakeTableState defines the structure of the mock
 * StakeTableV2Contract state.
 */
export declare class StakeTableState implements MockContractStorage {
    readonly contractAddress: `0x${string}`;
    readonly validators: Map<`0x${string}`, RawValidator>;
    readonly blsKeys: Set<`0x${string}`>;
    readonly validatorExits: Map<`0x${string}`, bigint>;
    readonly delegations: Map<`0x${string}`, Map<`0x${string}`, bigint>>;
    readonly undelegations: Map<`0x${string}`, Map<`0x${string}`, RawUndelegation>>;
    readonly exitEscrowPeriod: bigint;
    readonly pauserRole: `0x${string}`;
    readonly minCommissionIncreaseInterval: bigint;
    readonly maxCommissionIncrease: number;
    readonly commissionTracking: Map<`0x${string}`, CommissionTracking>;
    readonly schnorrKeys: Set<`0x${string}`>;
    readonly lastUpdate: Date;
    constructor(contractAddress: `0x${string}`, validators: Map<`0x${string}`, RawValidator>, blsKeys: Set<`0x${string}`>, validatorExits: Map<`0x${string}`, bigint>, delegations: Map<`0x${string}`, Map<`0x${string}`, bigint>>, undelegations: Map<`0x${string}`, Map<`0x${string}`, RawUndelegation>>, exitEscrowPeriod: bigint, pauserRole: `0x${string}`, minCommissionIncreaseInterval: bigint, maxCommissionIncrease: number, commissionTracking: Map<`0x${string}`, CommissionTracking>, schnorrKeys: Set<`0x${string}`>, lastUpdate: Date);
    applyTransaction(tx: UnderlyingTransaction): StakeTableState;
}
/**
 * StakeTableStateActions is an abstract base class
 * representing an action that modifies the state of the
 * MockStakeTableV2Contract.
 */
export declare abstract class StakeTableStateActions implements UnderlyingTransaction {
    readonly contractAddress: undefined | `0x${string}`;
    abstract readonly from: `0x${string}`;
    abstract readonly to: `0x${string}`;
    abstract readonly value: bigint;
    abstract readonly gas: bigint;
    readonly ts: Date;
    abstract hash(): `0x${string}`;
    abstract applyToState(state: StakeTableState): StakeTableState;
}
/**
 * Delegate represents a delegation action in the StakeTableState.
 * It records the validator, delegator, and amount delegated.
 */
export declare class Delegate extends StakeTableStateActions {
    readonly contractAddress: `0x${string}`;
    readonly validator: `0x${string}`;
    readonly delegator: `0x${string}`;
    readonly amount: bigint;
    readonly gas: bigint;
    get from(): `0x${string}`;
    get to(): `0x${string}`;
    get value(): bigint;
    constructor(contractAddress: `0x${string}`, validator: `0x${string}`, delegator: `0x${string}`, amount: bigint);
    hash(): `0x${string}`;
    applyToState(state: StakeTableState): StakeTableState;
}
/**
 * Undelegate represents an undelegation action in the StakeTableState.
 * It records the validator, delegator, and amount undelegated.
 */
export declare class Undelegate extends StakeTableStateActions {
    readonly contractAddress: `0x${string}`;
    readonly validator: `0x${string}`;
    readonly delegator: `0x${string}`;
    readonly amount: bigint;
    readonly exitEscrowPeriod: bigint;
    readonly gas: bigint;
    get from(): `0x${string}`;
    get to(): `0x${string}`;
    get value(): bigint;
    constructor(contractAddress: `0x${string}`, validator: `0x${string}`, delegator: `0x${string}`, amount: bigint, exitEscrowPeriod: bigint);
    hash(): `0x${string}`;
    applyToState(state: StakeTableState): StakeTableState;
}
/**
 * ClaimWithdrawal represents a claim withdrawal action
 * within the StakeTableState.
 */
export declare class ClaimWithdrawal extends StakeTableStateActions {
    readonly contractAddress: `0x${string}`;
    readonly validator: `0x${string}`;
    readonly delegator: `0x${string}`;
    readonly amount: bigint;
    readonly gas: bigint;
    get from(): `0x${string}`;
    get to(): `0x${string}`;
    get value(): bigint;
    constructor(contractAddress: `0x${string}`, validator: `0x${string}`, delegator: `0x${string}`, amount: bigint);
    hash(): `0x${string}`;
    applyToState(state: StakeTableState): StakeTableState;
}
/**
 * ClaimWithdrawal represents a claim withdrawal action
 * within the StakeTableState.
 */
export declare class ClaimValidatorExit extends StakeTableStateActions {
    readonly contractAddress: `0x${string}`;
    readonly validator: `0x${string}`;
    readonly delegator: `0x${string}`;
    readonly amount: bigint;
    readonly gas: bigint;
    get from(): `0x${string}`;
    get to(): `0x${string}`;
    get value(): bigint;
    constructor(contractAddress: `0x${string}`, validator: `0x${string}`, delegator: `0x${string}`, amount: bigint);
    hash(): `0x${string}`;
    applyToState(state: StakeTableState): StakeTableState;
}
/**
 * ValidatorExit represents a validator exit action
 * within the MockStakeTableV2Contract.
 */
export declare class ValidatorExit extends StakeTableStateActions {
    readonly contractAddress: `0x${string}`;
    readonly validator: `0x${string}`;
    readonly exitTime: bigint;
    readonly gas: bigint;
    get from(): `0x${string}`;
    get to(): `0x${string}`;
    readonly value: bigint;
    constructor(contractAddress: `0x${string}`, validator: `0x${string}`, exitTime: bigint);
    hash(): `0x${string}`;
    applyToState(state: StakeTableState): StakeTableState;
}
/**
 * MockStakeTableV2ContractImpl is a mock implementation of the
 * StakeTableV2Contract interface for testing and development purposes.
 */
export declare class MockStakeTableV2ContractImpl implements StakeTableV2Contract {
    private readonly l1Methods;
    private readonly espToken;
    accountAddress: null | `0x${string}`;
    constructor(l1Methods: MockL1MethodsImpl, espToken: ESPTokenContract, state: StakeTableState, accountAddress: null | `0x${string}`);
    get state(): StakeTableState;
    replaceAccountAddress(accountAddress: `0x${string}` | null): MockStakeTableV2ContractImpl;
    setAccountAddress(accountAddress: `0x${string}` | null): void;
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
