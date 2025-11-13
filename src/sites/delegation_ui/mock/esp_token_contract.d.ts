import { ESPTokenContract } from '../../../contracts/esp_token/esp_token_interface';
import { default as React } from 'react';
import { MockL1MethodsImpl } from './l1_methods';
/**
 * MockESPTokenContractState defines the structure of the mock
 * ESPTokenContract state.
 *
 * This state is meant to simulate the behavior of an actual ESPTokenContract
 * for testing and development purposes. It's implementations may not be
 * accurate to the live contract, and are only intended to provide
 * a reasonable facsimile for UI and interaction testing.
 */
export interface MockESPTokenContractState {
    contractAddress: `0x${string}`;
    version: [number, number, number];
    name: string;
    symbol: string;
    decimals: number;
    totalSupply: bigint;
    balances: Map<`0x${string}`, bigint>;
    allowances: Map<`0x${string}`, Map<`0x${string}`, bigint>>;
    lastUpdate: Date;
}
/**
 * MockESPTokenContractImpl is a mock implementation of the ESPTokenContract
 * interface for testing and development purposes.
 *
 * It simulates the behavior of an actual ESPTokenContract by maintaining
 * an internal state and providing methods to interact with that state.
 * This is done to simulate some consistency of the expected behavior of the
 * real contract without needing to connect to a live blockchain.
 */
export declare class MockESPTokenContractImpl implements ESPTokenContract {
    private readonly l1Methods;
    accountAddress: `0x${string}` | null;
    constructor(l1Methods: MockL1MethodsImpl, state: MockESPTokenContractState, accountAddress?: `0x${string}` | null);
    get state(): MockESPTokenContractState;
    replaceAccountAddress(accountAddress: `0x${string}` | null): MockESPTokenContractImpl;
    setAccountAddress(accountAddress: `0x${string}` | null): void;
    get lastUpdate(): Date;
    get address(): `0x${string}`;
    getVersion(): Promise<readonly [number, number, number]>;
    name(): Promise<string>;
    symbol(): Promise<string>;
    decimals(): Promise<number>;
    totalSupply(): Promise<bigint>;
    balanceOf(account: `0x${string}`): Promise<bigint>;
    allowance(owner: `0x${string}`, spender: `0x${string}`): Promise<bigint>;
    transfer(to: `0x${string}`, value: bigint): Promise<`0x${string}`>;
    approve(spender: `0x${string}`, value: bigint): Promise<`0x${string}`>;
    transferFrom(from: `0x${string}`, to: `0x${string}`, value: bigint): Promise<`0x${string}`>;
}
/**
 * MockESPTokenContract is a React component that provides
 * a mock ESPTokenContract implementation via context for
 * testing and development purposes.
 *
 * It will overwrite the ESPTokenContractContext with a mock
 * implementation that simulates the behavior of an actual
 * ESPTokenContract.
 */
export declare const MockESPTokenContract: React.FC<React.PropsWithChildren>;
