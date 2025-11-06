import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import { ESPTokenContract } from '@/contracts/esp_token/esp_token_interface';
import { bigintCodec, hexArrayBufferCodec } from '@/convert/codec';
import { createKeccakHash } from '@/crypto/keccak/family';
import React from 'react';
import { ESPTokenContractContext } from '../contexts/esp_token_contract_context';
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
export interface MockESPTokenContractState {
  contractAddress: `0x${string}`;
  version: [number, number, number];
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: bigint;
  balances: Map<`0x${string}`, bigint>;
  allowances: Map<`0x${string}`, Map<`0x${string}`, bigint>>;

  actions: ESPTokenContractStateAction[];
  actionMap: Map<`0x${string}`, ESPTokenContractStateAction>;
  lastUpdate: Date;
}

/**
 * applyActionToState is a convenience function that adds the given action
 * to the resulting applied state for tracking purposes.
 */
function applyActionToState(
  mutateState: React.Dispatch<React.SetStateAction<MockESPTokenContractState>>,
  action: ESPTokenContractStateAction,
): void {
  mutateState((state) => ({
    ...action.applyToState(state),
    actions: [...state.actions, action],
    actionMap: new Map(state.actionMap).set(action.hash(), action),
    lastUpdate: action.ts,
  }));
}

/**
 * ESPTokenContractStateAction is an abstract base class
 * representing an action that modifies the state of the
 * MockESPTokenContract.
 */
abstract class ESPTokenContractStateAction {
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
class TransferBalance extends ESPTokenContractStateAction {
  constructor(
    public readonly from: `0x${string}`,
    public readonly to: `0x${string}`,
    public readonly amount: bigint,
  ) {
    super();
    this.from = from;
    this.to = to;
    this.amount = amount;
  }

  hash() {
    const hasher = createKeccakHash('keccak256');
    const textEncoder = new TextEncoder();
    hasher.update(textEncoder.encode('Transfer').buffer);
    hasher.update(textEncoder.encode(this.ts.toISOString()).buffer);
    hasher.update(textEncoder.encode(this.from).buffer);
    hasher.update(textEncoder.encode(this.to).buffer);
    hasher.update(
      textEncoder.encode(bigintCodec.encoder.convert(this.amount)).buffer,
    );
    return hexArrayBufferCodec.encode(hasher.digest()) as `0x${string}`;
  }

  applyToState(state: MockESPTokenContractState): MockESPTokenContractState {
    const newBalances = new Map(state.balances);

    const fromBalance = newBalances.get(this.from) ?? 0n;
    const toBalance = newBalances.get(this.to) ?? 0n;

    newBalances.set(this.from, fromBalance - this.amount);
    newBalances.set(this.to, toBalance + this.amount);

    return {
      ...state,
      balances: newBalances,
    };
  }
}

/**
 * ApproveAllowance represents an approval action
 * within the MockESPTokenContract.
 */
class ApproveAllowance extends ESPTokenContractStateAction {
  constructor(
    public readonly owner: `0x${string}`,
    public readonly spender: `0x${string}`,
    public readonly amount: bigint,
  ) {
    super();
    this.owner = owner;
    this.spender = spender;
    this.amount = amount;
  }

  hash() {
    const hasher = createKeccakHash('keccak256');
    const textEncoder = new TextEncoder();
    hasher.update(textEncoder.encode('Approve').buffer);
    hasher.update(textEncoder.encode(this.ts.toISOString()).buffer);
    hasher.update(textEncoder.encode(this.owner).buffer);
    hasher.update(textEncoder.encode(this.spender).buffer);
    hasher.update(
      textEncoder.encode(bigintCodec.encoder.convert(this.amount)).buffer,
    );
    return hexArrayBufferCodec.encode(hasher.digest()) as `0x${string}`;
  }

  applyToState(state: MockESPTokenContractState): MockESPTokenContractState {
    const newAllowances = new Map(state.allowances);
    const ownerAllowances = new Map(newAllowances.get(this.owner) ?? new Map());

    ownerAllowances.set(this.spender, this.amount);
    newAllowances.set(this.owner, ownerAllowances);

    return {
      ...state,
      allowances: newAllowances,
    };
  }
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
export class MockESPTokenContractImpl implements ESPTokenContract {
  constructor(
    private readonly state: MockESPTokenContractState,
    private readonly mutate: React.Dispatch<
      React.SetStateAction<MockESPTokenContractState>
    >,
    public readonly accountAddress: `0x${string}` | null,
  ) {
    this.state = state;
    this.mutate = mutate;
    this.accountAddress = accountAddress;
  }

  replaceAccountAddress(
    accountAddress: `0x${string}` | null,
  ): MockESPTokenContractImpl {
    return new MockESPTokenContractImpl(
      this.state,
      this.mutate,
      accountAddress,
    );
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
    const action = new TransferBalance(from, to, value);

    applyActionToState(this.mutate, action);
    return action.hash();
  }

  async approve(spender: `0x${string}`, value: bigint): Promise<`0x${string}`> {
    if (!this.accountAddress) {
      throw new Error('No account address available for approve.');
    }

    const action = new ApproveAllowance(this.accountAddress, spender, value);
    applyActionToState(this.mutate, action);
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
    const action = new TransferBalance(from, to, value);

    applyActionToState(this.mutate, action);
    return action.hash();
  }
}

/**
 * useMockESPContractState is a custom React hook that initializes
 * and returns the state for the MockESPTokenContract.
 */
function useMockESPContractState() {
  const contractAddress = '0x0000000000000000000000000000000000000001';
  // Mocked ESPTokenContract State
  return React.useState<MockESPTokenContractState>({
    contractAddress,
    version: [1, 0, 0],
    name: 'Espresso Token',
    symbol: 'ESP',
    decimals: 18,
    totalSupply: 1_234_567_8900n * 10n ** 18n,
    balances: new Map([[MockAddress, 100_000_000_000_000_000_000n]]),
    allowances: new Map(),
    actions: [],
    actionMap: new Map(),
    lastUpdate: new Date(),
  });
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
  const [contractState, mutateContractState] = useMockESPContractState();
  const accountAddress = React.useContext(RainbowKitAccountAddressContext);
  const contract = new MockESPTokenContractImpl(
    contractState,
    mutateContractState,
    accountAddress as null | `0x${string}`,
  );

  return (
    <ESPTokenContractContext.Provider value={contract}>
      {children}
    </ESPTokenContractContext.Provider>
  );
};
