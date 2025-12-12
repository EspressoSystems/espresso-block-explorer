import { ScalarField } from '../../../contracts/bn254/bn254_interface';
import { LightClientState, StakeTableState, StateHistoryCommitment } from '../../../contracts/light_client/light_client_interface';
import { LightClientV2Contract } from '../../../contracts/light_client_v2/light_client_v2_interface';
import { default as React } from 'react';
import { MockContractStorage, MockL1MethodsImpl, UnderlyingTransaction } from './l1_methods';
export declare class MockLightClientContractState implements MockContractStorage {
    readonly contractAddress: `0x${string}`;
    readonly finalizedState: LightClientState;
    constructor(contractAddress: `0x${string}`, finalizedState: LightClientState);
    applyTransaction(tx: UnderlyingTransaction): MockLightClientContractState;
}
/**
 * ESPTokenContractStateAction is an abstract base class
 * representing an action that modifies the state of the
 * MockESPTokenContract.
 */
export declare abstract class LightClientContractStateAction implements UnderlyingTransaction {
    readonly contractAddress: undefined | `0x${string}`;
    abstract readonly from: `0x${string}`;
    abstract readonly to: `0x${string}`;
    abstract readonly value: bigint;
    abstract readonly gas: bigint;
    readonly ts: Date;
    /**
     * hash computes a unique hash for the action instance.
     */
    abstract hash(): `0x${string}`;
    /**
     * applyToState applies the action to the given contract state
     * and returns the new state.
     */
    abstract applyToState(state: MockLightClientContractState): MockLightClientContractState;
}
/**
 * MockLightClientV2ContractImpl is a mock implementation of the LightClientV2Contract
 * interface for testing and development purposes.
 *
 */
export declare class MockLightClientV2ContractImpl implements LightClientV2Contract {
    private readonly l1Methods;
    accountAddress: `0x${string}` | null;
    constructor(l1Methods: MockL1MethodsImpl, state: MockLightClientContractState, accountAddress?: `0x${string}` | null);
    get state(): MockLightClientContractState;
    replaceAccountAddress(accountAddress: `0x${string}` | null): MockLightClientV2ContractImpl;
    setAccountAddress(accountAddress: `0x${string}` | null): void;
    get address(): `0x${string}`;
    blocksPerEpoch(): Promise<bigint>;
    epochStartBlock(): Promise<bigint>;
    votingStakeTableState(): Promise<StakeTableState>;
    currentEpoch(): Promise<bigint>;
    epochFromBlockNumber(blockNum: bigint, blocksPerEpoch: bigint): Promise<bigint>;
    isEpochRoot(blockHeight: bigint): Promise<boolean>;
    isGtEpochRoot(blockHeight: bigint): Promise<boolean>;
    genesisStakeTableState(): Promise<StakeTableState>;
    genesisState(): Promise<LightClientState>;
    finalizedState(): Promise<LightClientState>;
    permissionedProver(): Promise<`0x${string}`>;
    stateHistoryRetentionPeriod(): Promise<number>;
    stateHistoryFirstIndex(): Promise<bigint>;
    stateHistoryCommitments(): Promise<StateHistoryCommitment>;
    currentBlockNumber(): Promise<bigint>;
    getVersion(): Promise<readonly [number, number, number]>;
    lagOverEscapeHatchThreshold(): Promise<boolean>;
    getHotShotCommitment(): Promise<readonly [ScalarField, bigint]>;
    getStateHistoryCount(): Promise<bigint>;
    isPermissionedProverEnabled(): Promise<boolean>;
}
/**
 * MockLightClientV2Contract is a React component that provides
 * a mock LightClientContract implementation via context for
 * testing and development purposes.
 *
 * It will overwrite the LightClientContractContext with a mock
 * implementation that simulates the behavior of an actual
 * LightClientContract.
 */
export declare const MockLightClientV2Contract: React.FC<React.PropsWithChildren>;
