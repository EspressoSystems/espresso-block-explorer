import { assertNotNull } from '@/assert/assert';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import { ESPTokenContract } from '@/contracts/esp_token/esp_token_interface';
import {
  Undelegation,
  Validator,
} from '@/contracts/stake_table/stake_table_interface';
import {
  CommissionTracking,
  StakeTableV2Contract,
} from '@/contracts/stake_table_v2/stake_table_v2_interface';
import { bigintCodec, hexArrayBufferCodec } from '@/convert/codec';
import { createKeccakHash } from '@/crypto/keccak';
import { nodeList } from '@/data_source/fake_data_source';
import {
  expandIterable,
  foldRIterable,
  mapIterable,
} from '@/functional/functional';
import React from 'react';
import { ESPTokenContractContext } from '../contexts/esp_token_contract_context';
import { StakeTableContractContext } from '../contexts/stake_table_contract_context';
import { StakeTableV2ContractContext } from '../contexts/stake_table_v2_contract_context';

/**
 * StakeTableState defines the structure of the mock
 * StakeTableV2Contract state.
 */
export interface StakeTableState {
  contractAddress: `0x${string}`;
  espToken: ESPTokenContract;
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

  actions: StakeTableStateActions[];
  actionMap: Map<`0x${string}`, StakeTableStateActions>;
}

/**
 * StakeTableStateActions is an abstract base class
 * representing an action that modifies the state of the
 * MockStakeTableV2Contract.
 */
abstract class StakeTableStateActions {
  abstract hash(): `0x${string}`;
  abstract applyToState(state: StakeTableState): StakeTableState;
}

/**
 * applyActionToState is a convenience function that adds the given action
 * to the resulting applied state for tracking purposes.
 */
function applyActionToState(
  mutateState: React.Dispatch<React.SetStateAction<StakeTableState>>,
  action: StakeTableStateActions,
): void {
  mutateState((state) => ({
    ...action.applyToState(state),
    actions: [...state.actions, action],
    actionMap: new Map(state.actionMap).set(action.hash(), action),
  }));
}

/**
 * Delegate represents a delegation action in the StakeTableState.
 * It records the validator, delegator, and amount delegated.
 */
class Delegate extends StakeTableStateActions {
  public readonly ts: Date = new Date();
  constructor(
    public readonly validator: `0x${string}`,
    public readonly delegator: `0x${string}`,
    public readonly amount: bigint,
  ) {
    super();
    this.validator = validator;
    this.delegator = delegator;
    this.amount = amount;
  }

  hash(): `0x${string}` {
    const hasher = createKeccakHash('keccak256');
    const textEncoder = new TextEncoder();
    hasher.update(textEncoder.encode('Delegate').buffer);
    hasher.update(textEncoder.encode(this.validator).buffer);
    hasher.update(textEncoder.encode(this.delegator).buffer);
    hasher.update(
      textEncoder.encode(bigintCodec.encoder.convert(this.amount)).buffer,
    );
    return hexArrayBufferCodec.encode(hasher.digest()) as `0x${string}`;
  }

  applyToState(state: StakeTableState): StakeTableState {
    const newDelegations = new Map(state.delegations);
    const delegatorMap =
      newDelegations.get(this.validator) ?? new Map<`0x${string}`, bigint>();
    const currentAmount = delegatorMap.get(this.delegator) ?? 0n;
    delegatorMap.set(this.delegator, currentAmount + this.amount);
    newDelegations.set(this.validator, delegatorMap);

    return {
      ...state,
      delegations: newDelegations,
    };
  }
}

/**
 * Undelegate represents an undelegation action in the StakeTableState.
 * It records the validator, delegator, and amount undelegated.
 */
class Undelegate extends StakeTableStateActions {
  public readonly ts: Date = new Date();
  constructor(
    public readonly validator: `0x${string}`,
    public readonly delegator: `0x${string}`,
    public readonly amount: bigint,
  ) {
    super();
    this.validator = validator;
    this.delegator = delegator;
    this.amount = amount;
  }

  hash(): `0x${string}` {
    const hasher = createKeccakHash('keccak256');
    const textEncoder = new TextEncoder();
    hasher.update(textEncoder.encode('Undelegate').buffer);
    hasher.update(textEncoder.encode(this.validator).buffer);
    hasher.update(textEncoder.encode(this.delegator).buffer);
    hasher.update(
      textEncoder.encode(bigintCodec.encoder.convert(this.amount)).buffer,
    );
    return hexArrayBufferCodec.encode(hasher.digest()) as `0x${string}`;
  }

  applyToState(state: StakeTableState): StakeTableState {
    const newDelegations = new Map(state.delegations);
    const delegatorMap =
      newDelegations.get(this.validator) ?? new Map<`0x${string}`, bigint>();
    const currentAmount = delegatorMap.get(this.delegator) ?? 0n;
    delegatorMap.set(this.delegator, currentAmount - this.amount);
    newDelegations.set(this.validator, delegatorMap);

    const newUndelegations = new Map(state.undelegations);
    const undelegatorMap =
      newUndelegations.get(this.validator) ??
      new Map<`0x${string}`, Undelegation>();
    undelegatorMap.set(this.delegator, [
      this.amount,
      BigInt(this.ts.valueOf()) + state.exitEscrowPeriod,
    ]);
    newUndelegations.set(this.validator, undelegatorMap);

    return {
      ...state,
      delegations: newDelegations,
      undelegations: newUndelegations,
    };
  }
}

/**
 * ClaimWithdrawal represents a claim withdrawal action
 * within the StakeTableState.
 */
class ClaimWithdrawal extends StakeTableStateActions {
  public readonly ts: Date = new Date();
  constructor(
    public readonly validator: `0x${string}`,
    public readonly delegator: `0x${string}`,
    public readonly amount: bigint,
  ) {
    super();
    this.validator = validator;
    this.delegator = delegator;
    this.amount = amount;
  }

  hash(): `0x${string}` {
    const hasher = createKeccakHash('keccak256');
    const textEncoder = new TextEncoder();
    hasher.update(textEncoder.encode('ClaimWithdrawal').buffer);
    hasher.update(textEncoder.encode(this.validator).buffer);
    hasher.update(textEncoder.encode(this.delegator).buffer);
    hasher.update(
      textEncoder.encode(bigintCodec.encoder.convert(this.amount)).buffer,
    );
    return hexArrayBufferCodec.encode(hasher.digest()) as `0x${string}`;
  }

  applyToState(state: StakeTableState): StakeTableState {
    const newUndelegations = new Map(state.undelegations);
    const undelegatorMap =
      newUndelegations.get(this.validator) ??
      new Map<`0x${string}`, Undelegation>();
    undelegatorMap.delete(this.delegator);
    newUndelegations.set(this.validator, undelegatorMap);

    return {
      ...state,
      undelegations: newUndelegations,
    };
  }
}

/**
 * ClaimWithdrawal represents a claim withdrawal action
 * within the StakeTableState.
 */
class ClaimValidatorExit extends StakeTableStateActions {
  public readonly ts: Date = new Date();
  constructor(
    public readonly validator: `0x${string}`,
    public readonly delegator: `0x${string}`,
    public readonly amount: bigint,
  ) {
    super();
    this.validator = validator;
    this.delegator = delegator;
    this.amount = amount;
  }

  hash(): `0x${string}` {
    const hasher = createKeccakHash('keccak256');
    const textEncoder = new TextEncoder();
    hasher.update(textEncoder.encode('ClaimValidatorExit').buffer);
    hasher.update(textEncoder.encode(this.validator).buffer);
    hasher.update(textEncoder.encode(this.delegator).buffer);
    hasher.update(
      textEncoder.encode(bigintCodec.encoder.convert(this.amount)).buffer,
    );
    return hexArrayBufferCodec.encode(hasher.digest()) as `0x${string}`;
  }

  applyToState(state: StakeTableState): StakeTableState {
    const newValidatorExits = new Map(state.validatorExits);
    newValidatorExits.delete(this.validator);

    return {
      ...state,
      validatorExits: newValidatorExits,
    };
  }
}

/**
 * MockStakeTableV2ContractImpl is a mock implementation of the
 * StakeTableV2Contract interface for testing and development purposes.
 */
class MockStakeTableV2ContractImpl implements StakeTableV2Contract {
  constructor(
    private state: StakeTableState,
    private mutate: React.Dispatch<React.SetStateAction<StakeTableState>>,
    private accountAddress: null | `0x${string}`,
  ) {
    this.state = state;
    this.mutate = mutate;
  }

  async PAUSER_ROLE(): Promise<`0x${string}`> {
    return this.state.pauserRole;
  }

  async minCommissionIncreaseInterval(): Promise<bigint> {
    return this.state.minCommissionIncreaseInterval;
  }

  async maxCommissionIncrease(): Promise<number> {
    return this.state.maxCommissionIncrease;
  }

  async activeStake(): Promise<bigint> {
    return foldRIterable(
      (acc, amount) => acc + amount,
      0n,
      expandIterable(this.state.delegations, ([, delegations]) =>
        mapIterable(delegations, ([, amount]) => amount),
      ),
    );
  }

  async commissionTracking(
    validator: `0x${string}`,
  ): Promise<CommissionTracking> {
    return this.state.commissionTracking.get(validator) ?? [0, 0n];
  }

  async lightClient(): Promise<`0x${string}`> {
    return `0xLIGHT_CLIENT_ADDRESS`;
  }

  async token(): Promise<`0x${string}`> {
    return `0xESP_TOKEN_ADDRESS`;
  }

  async validator(account: `0x${string}`): Promise<Validator> {
    return this.state.validators.get(account) ?? [0n, 0];
  }

  async blsKey(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async validatorExit(validator: `0x${string}`): Promise<bigint> {
    return this.state.validatorExits.get(validator) ?? 0n;
  }

  async delegation(
    validator: `0x${string}`,
    delegator: `0x${string}`,
  ): Promise<bigint> {
    return this.state.delegations.get(validator)?.get(delegator) ?? 0n;
  }

  async undelegation(
    validator: `0x${string}`,
    delegator: `0x${string}`,
  ): Promise<Undelegation> {
    return this.state.undelegations.get(validator)?.get(delegator) ?? [0n, 0n];
  }

  async exitEscrowPeriod(): Promise<bigint> {
    return this.state.exitEscrowPeriod;
  }

  async getVersion(): Promise<readonly [number, number, number]> {
    return [2, 0, 0];
  }

  async updateConsensusKeysV2(): Promise<`0x${string}`> {
    throw new Error('Method not implemented.');
  }

  deregisterValidator(): Promise<`0x${string}`> {
    throw new Error('Method not implemented.');
  }

  async delegate(
    validator: `0x${string}`,
    amount: bigint,
  ): Promise<`0x${string}`> {
    if (amount <= 0n) {
      throw new Error('Amount must be greater than zero');
    }

    if (!this.accountAddress) {
      throw new Error('No account address available for delegation.');
    }

    if ((await this.state.espToken.balanceOf(this.accountAddress)) < amount) {
      throw new Error('Insufficient balance');
    }

    if (
      (await this.state.espToken.allowance(
        this.accountAddress,
        this.accountAddress,
      )) < amount
    ) {
      throw new Error('Insufficient allowance');
    }

    await this.state.espToken.transferFrom(
      this.accountAddress,
      this.state.contractAddress,
      amount,
    );

    const action = new Delegate(validator, this.accountAddress, amount);
    applyActionToState(this.mutate, action);
    return action.hash();
  }

  async undelegate(
    validator: `0x${string}`,
    amount: bigint,
  ): Promise<`0x${string}`> {
    if (!this.accountAddress) {
      throw new Error('No account address available for undelegation.');
    }

    if (amount <= 0n) {
      throw new Error('Amount must be greater than zero');
    }

    const currentDelegation =
      this.state.delegations.get(validator)?.get(this.accountAddress) ?? 0n;

    if (currentDelegation < amount) {
      throw new Error('Insufficient delegated amount');
    }

    if (this.state.validatorExits.has(validator)) {
      throw new Error('Validator is exiting, cannot undelegate');
    }

    if (this.state.undelegations.get(validator)?.has(this.accountAddress)) {
      throw new Error('Existing undelegation in progress');
    }

    const action = new Undelegate(validator, this.accountAddress, amount);

    applyActionToState(this.mutate, action);
    return action.hash();
  }

  async claimWithdrawal(validator: `0x${string}`): Promise<`0x${string}`> {
    const currentTime = BigInt(Date.now());
    if (!this.accountAddress) {
      throw new Error('No account address available for claim withdrawal.');
    }

    const undelegation = this.state.undelegations
      .get(validator)
      ?.get(this.accountAddress);

    if (!undelegation) {
      throw new Error(
        'No undelegation found for this delegator and validator.',
      );
    }

    const [amount, releaseTime] = undelegation;
    if (currentTime < releaseTime) {
      throw new Error('Undelegation period has not yet elapsed.');
    }

    await this.state.espToken.transferFrom(
      this.state.contractAddress,
      this.accountAddress,
      amount,
    );

    const action = new ClaimWithdrawal(validator, this.accountAddress, amount);
    applyActionToState(this.mutate, action);
    return action.hash();
  }

  async claimValidatorExit(validator: `0x${string}`): Promise<`0x${string}`> {
    const currentTime = BigInt(Date.now());
    if (!this.accountAddress) {
      throw new Error('No account address available for claim validator exit.');
    }

    const exit = this.state.validatorExits.get(validator) ?? 0n;

    if (!exit) {
      throw new Error('Validator is not exiting.');
    }

    const staked =
      this.state.delegations.get(validator)?.get(this.accountAddress) ?? 0n;
    if (staked <= 0n) {
      throw new Error('No stake found for this delegator and validator.');
    }

    if (currentTime < exit) {
      throw new Error('Validator exit period has not yet elapsed.');
    }
    await this.state.espToken.transferFrom(
      this.state.contractAddress,
      this.accountAddress,
      staked,
    );

    const action = new ClaimValidatorExit(
      validator,
      this.accountAddress,
      staked,
    );
    applyActionToState(this.mutate, action);
    return action.hash();
  }
}

/**
 * useMockStakeTableContractState is a React hook that initializes
 * the state for the MockStakeTableV2Contract.
 * It **must** be supplied with a valid ESPTokenContract instance.
 * Optionally, initial stakes can be provided to pre-populate
 * the delegations mapping.
 */
function useMockStakeTableContractState(
  espTokenContract: ESPTokenContract,
  initialStakes: Map<`0x${string}`, Map<`0x${string}`, bigint>> = new Map(),
) {
  const [state, mutate] = React.useState<StakeTableState>({
    contractAddress: `0x${'11'.repeat(20)}`,
    espToken: espTokenContract,
    validators: new Map(),
    blsKeys: new Set(),
    validatorExits: new Map(),
    delegations: initialStakes,
    undelegations: new Map(),
    exitEscrowPeriod: 0n,

    pauserRole: '0xPAUSER_ROLE',
    minCommissionIncreaseInterval: 24n * 60n * 60n,
    maxCommissionIncrease: 1,
    commissionTracking: new Map(),
    schnorrKeys: new Set(),

    actions: [],
    actionMap: new Map(),
  });

  return [state, mutate] as const;
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
export const MockStakeTableV2Contract: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const accountAddress = React.useContext(RainbowKitAccountAddressContext);
  const espTokenContract = React.useContext(ESPTokenContractContext);

  assertNotNull(espTokenContract);
  const initialStakes = new Map(
    mapIterable(nodeList, (node) => {
      const address = hexArrayBufferCodec.encode(node.address) as `0x${string}`;
      return [address, new Map([[address, node.stake]])];
    }),
  );

  const [contractState, mutateContractState] = useMockStakeTableContractState(
    espTokenContract,
    initialStakes,
  );

  const contract = new MockStakeTableV2ContractImpl(
    contractState,
    mutateContractState,
    accountAddress as null | `0x${string}`,
  );

  return (
    <StakeTableV2ContractContext.Provider value={contract}>
      <StakeTableContractContext.Provider value={contract}>
        {children}
      </StakeTableContractContext.Provider>
    </StakeTableV2ContractContext.Provider>
  );
};
