import { assert, assertNotNull } from '@/assert/assert';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import { ESPTokenContract } from '@/contracts/esp_token/esp_token_interface';
import { bigintCodec, hexArrayBufferCodec } from '@/convert/codec';
import { createKeccakHash } from '@/crypto/keccak/family';
import { nodeList } from '@/data_source/fake_data_source';
import { foldRIterable } from '@/functional/functional';
import React from 'react';
import {
  ESPTokenContractContext,
  ESPTokenContractGasEstimatorContext,
} from '../contexts/esp_token_contract_context';
import { L1MethodsContext } from '../contexts/l1_methods_context';
import { MockESPTokenContractGasEstimatorImpl } from './esp_token_contract_gas_estimator';
import {
  MockContractStorage,
  MockL1MethodsImpl,
  UnderlyingTransaction,
} from './l1_methods';
import { MockAddress } from './rainbow_kit';

/**
 * MockESPTokenContractState defines the structure of the mock
 * ESPTokenContract state.
 *
 * This state is meant to simulate the behavior of an actual ESPTokenContract
 * for testing and development purposes. It's implementations may not be
 * accurate to the live contract, and are only intended to provide
 * a reasonable facsimile for UI and interaction testing.
 */
export class MockESPTokenContractState implements MockContractStorage {
  constructor(
    public readonly contractAddress: `0x${string}`,
    public readonly version: [number, number, number],
    public readonly name: string,
    public readonly symbol: string,
    public readonly decimals: number,
    public readonly totalSupply: bigint,
    public readonly balances: Map<`0x${string}`, bigint>,
    public readonly allowances: Map<`0x${string}`, Map<`0x${string}`, bigint>>,

    public readonly lastUpdate: Date,
  ) {}

  public applyTransaction(
    tx: UnderlyingTransaction,
  ): MockESPTokenContractState {
    if (tx instanceof ESPTokenContractStateAction) {
      const nextState = tx.applyToState(this);
      return new MockESPTokenContractState(
        nextState.contractAddress,
        nextState.version,
        nextState.name,
        nextState.symbol,
        nextState.decimals,
        nextState.totalSupply,
        nextState.balances,
        nextState.allowances,
        new Date(),
      );
    }

    return this;
  }
}

/**
 * applyActionToState is a convenience function that adds the given action
 * to the resulting applied state for tracking purposes.
 */
function applyActionToState(
  l1Methods: MockL1MethodsImpl,
  action: ESPTokenContractStateAction,
): void {
  const currentState =
    l1Methods.mockReadContractStorage<MockESPTokenContractState>(
      ESPTokenStorageSymbol,
    ) ?? null;
  assertNotNull(currentState);

  // Run the contract function just to make sure no errors occur,
  // but we do not store the resulting state here.
  action.applyToState(currentState);

  // l1Methods.mockWriteContractStorage(ESPTokenStorageSymbol, {
  //   ...action.applyToState(currentState),
  //   lastUpdate: action.ts,
  // });
  l1Methods.mockWriteTransaction(action);
}

/**
 * ESPTokenContractStateAction is an abstract base class
 * representing an action that modifies the state of the
 * MockESPTokenContract.
 */
export abstract class ESPTokenContractStateAction
  implements UnderlyingTransaction
{
  public readonly contractAddress: undefined | `0x${string}`;
  public abstract readonly from: `0x${string}`;
  public abstract readonly to: `0x${string}`;
  public abstract readonly value: bigint;
  public abstract readonly gas: bigint;
  public readonly ts: Date = new Date();

  /**
   * hash computes a unique hash for the action instance.
   */
  abstract hash(): `0x${string}`;

  /**
   * applyToState applies the action to the given contract state
   * and returns the new state.
   */
  abstract applyToState(
    state: MockESPTokenContractState,
  ): MockESPTokenContractState;
}

/**
 * TransferBalance represents a token transfer action
 * within the MockESPTokenContract.
 */
export class TransferBalance extends ESPTokenContractStateAction {
  public readonly gas: bigint = 21000n;

  constructor(
    public readonly contractAddress: `0x${string}`,
    public readonly from: `0x${string}`,
    public readonly to: `0x${string}`,
    public readonly value: bigint,
  ) {
    super();
    this.from = from;
    this.to = to;
    this.value = value;
  }

  hash() {
    const hasher = createKeccakHash('keccak256');
    const textEncoder = new TextEncoder();
    hasher.update(textEncoder.encode('Transfer').buffer);
    hasher.update(textEncoder.encode(this.ts.toISOString()).buffer);
    hasher.update(textEncoder.encode(this.from).buffer);
    hasher.update(textEncoder.encode(this.to).buffer);
    hasher.update(
      textEncoder.encode(bigintCodec.encoder.convert(this.value)).buffer,
    );
    return hexArrayBufferCodec.encode(hasher.digest());
  }

  applyToState(state: MockESPTokenContractState): MockESPTokenContractState {
    const newBalances = new Map(state.balances);

    const fromBalance = newBalances.get(this.from) ?? 0n;
    const toBalance = newBalances.get(this.to) ?? 0n;

    newBalances.set(this.from, fromBalance - this.value);
    newBalances.set(this.to, toBalance + this.value);

    return new MockESPTokenContractState(
      state.contractAddress,
      state.version,
      state.name,
      state.symbol,
      state.decimals,
      state.totalSupply,
      newBalances,
      state.allowances,
      state.lastUpdate,
    );
  }
}

/**
 * ApproveAllowance represents an approval action
 * within the MockESPTokenContract.
 */
export class ApproveAllowance extends ESPTokenContractStateAction {
  public readonly gas: bigint = 21000n;

  get from(): `0x${string}` {
    return this.owner;
  }

  get to(): `0x${string}` {
    return this.spender;
  }

  constructor(
    public readonly contractAddress: `0x${string}`,
    public readonly owner: `0x${string}`,
    public readonly spender: `0x${string}`,
    public readonly value: bigint,
  ) {
    super();
    this.owner = owner;
    this.spender = spender;
    this.value = value;
  }

  hash() {
    const hasher = createKeccakHash('keccak256');
    const textEncoder = new TextEncoder();
    hasher.update(textEncoder.encode('Approve').buffer);
    hasher.update(textEncoder.encode(this.ts.toISOString()).buffer);
    hasher.update(textEncoder.encode(this.owner).buffer);
    hasher.update(textEncoder.encode(this.spender).buffer);
    hasher.update(
      textEncoder.encode(bigintCodec.encoder.convert(this.value)).buffer,
    );
    return hexArrayBufferCodec.encode(hasher.digest());
  }

  applyToState(state: MockESPTokenContractState): MockESPTokenContractState {
    const newAllowances = new Map(state.allowances);
    const ownerAllowances = new Map(newAllowances.get(this.owner) ?? new Map());

    ownerAllowances.set(this.spender, this.value);
    newAllowances.set(this.owner, ownerAllowances);

    return new MockESPTokenContractState(
      state.contractAddress,
      state.version,
      state.name,
      state.symbol,
      state.decimals,
      state.totalSupply,
      state.balances,
      newAllowances,
      state.lastUpdate,
    );
  }
}

const ESPTokenStorageSymbol = Symbol('MockTokenContract');

/**
 * MockESPTokenContractImpl is a mock implementation of the ESPTokenContract
 * interface for testing and development purposes.
 *
 * It simulates the behavior of an actual ESPTokenContract by maintaining
 * an internal state and providing methods to interact with that state.
 * This is done to simulate some consistency of the expected behavior of the
 * real contract without needing to connect to a live blockchain.
 */
export class MockESPTokenContractImpl implements ESPTokenContract {
  constructor(
    private readonly l1Methods: MockL1MethodsImpl,
    state: MockESPTokenContractState,
    public accountAddress: `0x${string}` | null = null,
  ) {
    if (!this.l1Methods.mockReadContractStorage(ESPTokenStorageSymbol)) {
      this.l1Methods.mockWriteContractStorage(
        ESPTokenStorageSymbol,
        new MockESPTokenContractState(
          state.contractAddress,
          state.version,
          state.name,
          state.symbol,
          state.decimals,
          state.totalSupply,
          state.balances,
          state.allowances,
          state.lastUpdate,
        ),
      );
    }

    this.accountAddress = accountAddress;
  }

  get state(): MockESPTokenContractState {
    const state =
      this.l1Methods.mockReadContractStorage<MockESPTokenContractState>(
        ESPTokenStorageSymbol,
      ) ?? null;
    assertNotNull(state);
    return state;
  }

  replaceAccountAddress(
    accountAddress: `0x${string}` | null,
  ): MockESPTokenContractImpl {
    return new MockESPTokenContractImpl(
      this.l1Methods,
      this.state,
      accountAddress,
    );
  }

  setAccountAddress(accountAddress: `0x${string}` | null): void {
    this.accountAddress = accountAddress;
  }

  get lastUpdate(): Date {
    return this.state.lastUpdate;
  }

  get address(): `0x${string}` {
    return this.state.contractAddress;
  }

  async getVersion(): Promise<readonly [number, number, number]> {
    return this.state.version;
  }

  async name(): Promise<string> {
    return this.state.name;
  }

  async symbol(): Promise<string> {
    return this.state.symbol;
  }

  async decimals(): Promise<number> {
    return this.state.decimals;
  }

  async totalSupply(): Promise<bigint> {
    return this.state.totalSupply;
  }

  async balanceOf(account: `0x${string}`): Promise<bigint> {
    return this.state.balances.get(account) ?? 0n;
  }

  async allowance(
    owner: `0x${string}`,
    spender: `0x${string}`,
  ): Promise<bigint> {
    return this.state.allowances.get(owner)?.get(spender) ?? 0n;
  }

  async transfer(to: `0x${string}`, value: bigint): Promise<`0x${string}`> {
    if (!this.accountAddress) {
      throw new Error('No account address available for transfer.');
    }
    const from = this.accountAddress;

    if (value < 0n) {
      throw new Error('Transfer value cannot be negative.');
    }

    // Does the owning account have enough balance?
    // How do we know the owning account?

    if (value > (await this.balanceOf(from))) {
      throw new Error('Insufficient balance for transfer.');
    }

    // create the action
    const action = new TransferBalance(this.address, from, to, value);

    applyActionToState(this.l1Methods, action);
    return action.hash();
  }

  async approve(spender: `0x${string}`, value: bigint): Promise<`0x${string}`> {
    if (!this.accountAddress) {
      throw new Error('No account address available for approve.');
    }

    const action = new ApproveAllowance(
      this.address,
      this.accountAddress,
      spender,
      value,
    );
    applyActionToState(this.l1Methods, action);
    return action.hash();
  }

  async transferFrom(
    from: `0x${string}`,
    to: `0x${string}`,
    value: bigint,
  ): Promise<`0x${string}`> {
    if (value < 0n) {
      throw new Error('Transfer value cannot be negative.');
    }

    const currentAllowance = await this.allowance(from, to);

    if (currentAllowance < value) {
      throw new Error('Insufficient allowance for transfer.');
    }

    // Does the owning account have enough balance?
    // How do we know the owning account?

    if (value > (await this.balanceOf(from))) {
      throw new Error('Insufficient balance for transfer.');
    }

    // create the action
    const action = new TransferBalance(this.address, from, to, value);

    applyActionToState(this.l1Methods, action);
    return action.hash();
  }
}

/**
 * useMockESPContractState is a custom React hook that initializes
 * and returns the state for the MockESPTokenContract.
 */
function useMockESPContractState(
  initialState?: Partial<MockESPTokenContractState>,
) {
  const contractAddress = '0x0000000000000000000000000000000000000001';
  // Mocked ESPTokenContract State
  const [state] = React.useState<MockESPTokenContractState>(
    new MockESPTokenContractState(
      initialState?.contractAddress ?? contractAddress,
      initialState?.version ?? [1, 0, 0],
      initialState?.name ?? 'Espresso Token',
      initialState?.symbol ?? 'ESP',
      initialState?.decimals ?? 18,
      initialState?.totalSupply ?? 1_234_567_8900n * 10n ** 18n,
      initialState?.balances ??
        new Map([
          // Load some initial balance for our Mock Account
          [MockAddress, 5_000_000_000_000_000_000_000n],

          // Set the initial Balance for the default address of the Mock Stake
          // Table contract to be equal to all of the expected stake
          [
            `0x0000000000000000000000000000000000000002`,
            foldRIterable((acc, next) => acc + next.stake, 0n, nodeList),
          ],

          // Set the initial balance for the reward state contract, so we
          // can claim rewards
          [
            '0x0000000000000000000000000000000000000003',
            1_000_000_000_000_000_000_000_000_000n,
          ],
        ]),
      initialState?.allowances ?? new Map(),
      initialState?.lastUpdate ?? new Date(),
    ),
  );

  return state;
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
export const MockESPTokenContract: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const l1Methods = React.useContext(L1MethodsContext);
  const contractState = useMockESPContractState();
  const accountAddress = React.useContext(RainbowKitAccountAddressContext) as
    | null
    | `0x${string}`;

  // assertInstanceOf(l1Methods, MockL1MethodsImpl);
  assert(l1Methods instanceof MockL1MethodsImpl);

  const [contract] = React.useState(
    new MockESPTokenContractImpl(l1Methods, contractState),
  );

  React.useEffect(() => {
    contract.setAccountAddress(accountAddress);
    return () => {};
  }, [contract, accountAddress]);

  if (!(l1Methods instanceof MockL1MethodsImpl)) {
    throw new Error('MockESPTokenContract requires MockL1MethodsImpl');
  }

  return (
    <ESPTokenContractContext.Provider value={contract}>
      <ESPTokenContractGasEstimatorContext.Provider
        value={new MockESPTokenContractGasEstimatorImpl()}
      >
        {children}
      </ESPTokenContractGasEstimatorContext.Provider>
    </ESPTokenContractContext.Provider>
  );
};
