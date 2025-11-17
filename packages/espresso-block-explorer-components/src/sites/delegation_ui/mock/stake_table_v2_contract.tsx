import { assert, assertNotNull } from '@/assert/assert';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import { ESPTokenContract } from '@/contracts/esp_token/esp_token_interface';
import {
  RawUndelegation,
  RawValidator,
  Undelegation,
  Validator,
  ValidatorStatus,
} from '@/contracts/stake_table/stake_table_interface';
import {
  CommissionTracking,
  StakeTableV2Contract,
} from '@/contracts/stake_table_v2/stake_table_v2_interface';
import { bigintCodec, hexArrayBufferCodec } from '@/convert/codec';
import { createKeccakHash } from '@/crypto/keccak';
import { nodeList } from '@/data_source/fake_data_source';
import {
  appendIterables,
  dropIterable,
  expandIterable,
  foldRIterable,
  mapIterable,
  takeIterable,
} from '@/functional/functional';
import React from 'react';
import { ESPTokenContractContext } from '../contexts/esp_token_contract_context';
import { L1MethodsContext } from '../contexts/l1_methods_context';
import {
  StakeTableContractContext,
  StakeTableContractGasEstimatorContext,
} from '../contexts/stake_table_contract_context';
import {
  StakeTableV2ContractContext,
  StakeTableV2ContractGasEstimatorContext,
} from '../contexts/stake_table_v2_contract_context';
import { MockESPTokenContractImpl } from './esp_token_contract';
import { MockL1MethodsImpl, UnderlyingTransaction } from './l1_methods';
import { MockAddress } from './rainbow_kit';
import { MockStakeTableV2ContractGasEstimatorImpl } from './stake_table_v2_contract_gas_estimator';

/**
 * StakeTableState defines the structure of the mock
 * StakeTableV2Contract state.
 */
export interface StakeTableState {
  contractAddress: `0x${string}`;
  validators: Map<`0x${string}`, RawValidator>;
  blsKeys: Set<`0x${string}`>;
  validatorExits: Map<`0x${string}`, bigint>;
  delegations: Map<`0x${string}`, Map<`0x${string}`, bigint>>;
  undelegations: Map<`0x${string}`, Map<`0x${string}`, RawUndelegation>>;
  exitEscrowPeriod: bigint;

  pauserRole: `0x${string}`;
  minCommissionIncreaseInterval: bigint;
  maxCommissionIncrease: number;
  commissionTracking: Map<`0x${string}`, CommissionTracking>;
  schnorrKeys: Set<`0x${string}`>;

  lastUpdate: Date;
}

/**
 * StakeTableStateActions is an abstract base class
 * representing an action that modifies the state of the
 * MockStakeTableV2Contract.
 */
export abstract class StakeTableStateActions implements UnderlyingTransaction {
  public readonly contractAddress: undefined | `0x${string}`;
  public abstract readonly from: `0x${string}`;
  public abstract readonly to: `0x${string}`;
  public abstract readonly value: bigint;
  public abstract readonly gas: bigint;
  public readonly ts: Date = new Date();
  abstract hash(): `0x${string}`;
  abstract applyToState(state: StakeTableState): StakeTableState;
}

/**
 * applyActionToState is a convenience function that adds the given action
 * to the resulting applied state for tracking purposes.
 */
function applyActionToState(
  l1Methods: MockL1MethodsImpl,
  action: StakeTableStateActions,
): void {
  const currentState =
    l1Methods.mockReadContractStorage<StakeTableState>(
      StakeTableStorageSymbol,
    ) ?? null;

  assertNotNull(currentState);

  const nextState = {
    ...action.applyToState(currentState),
    lastUpdate: action.ts,
  };

  l1Methods.mockWriteContractStorage(StakeTableStorageSymbol, nextState);
  l1Methods.mockWriteTransaction(action);
}

/**
 * Delegate represents a delegation action in the StakeTableState.
 * It records the validator, delegator, and amount delegated.
 */
export class Delegate extends StakeTableStateActions {
  public readonly gas: bigint = 100_000n;
  get from(): `0x${string}` {
    return this.delegator;
  }
  get to(): `0x${string}` {
    return this.contractAddress;
  }
  get value(): bigint {
    return this.amount;
  }

  constructor(
    public readonly contractAddress: `0x${string}`,
    public readonly validator: `0x${string}`,
    public readonly delegator: `0x${string}`,
    public readonly amount: bigint,
  ) {
    super();
  }

  hash(): `0x${string}` {
    const hasher = createKeccakHash('keccak256');
    const textEncoder = new TextEncoder();
    hasher.update(textEncoder.encode('Delegate').buffer);
    hasher.update(textEncoder.encode(this.ts.toISOString()).buffer);
    hasher.update(textEncoder.encode(this.validator).buffer);
    hasher.update(textEncoder.encode(this.delegator).buffer);
    hasher.update(
      textEncoder.encode(bigintCodec.encoder.convert(this.amount)).buffer,
    );
    return hexArrayBufferCodec.encode(hasher.digest());
  }

  applyToState(state: StakeTableState): StakeTableState {
    const newDelegations = new Map(state.delegations);
    const delegatorMap =
      newDelegations.get(this.validator) ?? new Map<`0x${string}`, bigint>();
    const newValidators = new Map(state.validators);
    const validatorInfo = newValidators.get(this.validator) ?? [0n, 0];
    const currentAmount = delegatorMap.get(this.delegator) ?? 0n;
    delegatorMap.set(this.delegator, currentAmount + this.amount);
    newDelegations.set(this.validator, delegatorMap);
    newValidators.set(this.validator, [
      validatorInfo[0] + this.amount,
      validatorInfo[1],
    ]);

    return {
      ...state,
      validators: newValidators,
      delegations: newDelegations,
    };
  }
}

/**
 * Undelegate represents an undelegation action in the StakeTableState.
 * It records the validator, delegator, and amount undelegated.
 */
export class Undelegate extends StakeTableStateActions {
  public readonly gas: bigint = 100_000n;
  get from(): `0x${string}` {
    return this.delegator;
  }
  get to(): `0x${string}` {
    return this.contractAddress;
  }
  get value(): bigint {
    return this.amount;
  }

  constructor(
    public readonly contractAddress: `0x${string}`,
    public readonly validator: `0x${string}`,
    public readonly delegator: `0x${string}`,
    public readonly amount: bigint,
    public readonly exitEscrowPeriod: bigint,
  ) {
    super();
  }

  hash(): `0x${string}` {
    const hasher = createKeccakHash('keccak256');
    const textEncoder = new TextEncoder();
    hasher.update(textEncoder.encode('Undelegate').buffer);
    hasher.update(textEncoder.encode(this.ts.toISOString()).buffer);
    hasher.update(textEncoder.encode(this.validator).buffer);
    hasher.update(textEncoder.encode(this.delegator).buffer);
    hasher.update(
      textEncoder.encode(bigintCodec.encoder.convert(this.amount)).buffer,
    );
    hasher.update(
      textEncoder.encode(bigintCodec.encoder.convert(this.exitEscrowPeriod))
        .buffer,
    );
    return hexArrayBufferCodec.encode(hasher.digest());
  }

  applyToState(state: StakeTableState): StakeTableState {
    const newDelegations = new Map(state.delegations);
    const delegatorMap =
      newDelegations.get(this.validator) ?? new Map<`0x${string}`, bigint>();
    const currentAmount = delegatorMap.get(this.delegator) ?? 0n;
    const newValidators = new Map(state.validators);
    delegatorMap.set(this.delegator, currentAmount - this.amount);
    newDelegations.set(this.validator, delegatorMap);
    const validatorInfo = newValidators.get(this.validator) ?? [0n, 0];
    newValidators.set(this.validator, [
      validatorInfo[0] - this.amount,
      validatorInfo[1],
    ]);

    const newUndelegations = new Map(state.undelegations);
    const undelegatorMap =
      newUndelegations.get(this.validator) ??
      new Map<`0x${string}`, RawUndelegation>();
    undelegatorMap.set(this.delegator, [
      this.amount,
      BigInt(this.ts.valueOf()) + state.exitEscrowPeriod,
    ]);
    newUndelegations.set(this.validator, undelegatorMap);

    return {
      ...state,
      validators: newValidators,
      delegations: newDelegations,
      undelegations: newUndelegations,
    };
  }
}

/**
 * ClaimWithdrawal represents a claim withdrawal action
 * within the StakeTableState.
 */
export class ClaimWithdrawal extends StakeTableStateActions {
  public readonly gas: bigint = 100_000n;
  public get from(): `0x${string}` {
    return this.delegator;
  }
  public get to(): `0x${string}` {
    return this.contractAddress;
  }
  public get value(): bigint {
    return this.amount;
  }

  constructor(
    public readonly contractAddress: `0x${string}`,
    public readonly validator: `0x${string}`,
    public readonly delegator: `0x${string}`,
    public readonly amount: bigint,
  ) {
    super();
  }

  hash(): `0x${string}` {
    const hasher = createKeccakHash('keccak256');
    const textEncoder = new TextEncoder();
    hasher.update(textEncoder.encode('ClaimWithdrawal').buffer);
    hasher.update(textEncoder.encode(this.ts.toISOString()).buffer);
    hasher.update(textEncoder.encode(this.validator).buffer);
    hasher.update(textEncoder.encode(this.delegator).buffer);
    hasher.update(
      textEncoder.encode(bigintCodec.encoder.convert(this.amount)).buffer,
    );
    return hexArrayBufferCodec.encode(hasher.digest());
  }

  applyToState(state: StakeTableState): StakeTableState {
    const newUndelegations = new Map(state.undelegations);
    const undelegatorMap =
      newUndelegations.get(this.validator) ??
      new Map<`0x${string}`, RawUndelegation>();
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
export class ClaimValidatorExit extends StakeTableStateActions {
  public readonly gas: bigint = 100_000n;
  public get from(): `0x${string}` {
    return this.delegator;
  }
  public get to(): `0x${string}` {
    return this.contractAddress;
  }
  public get value(): bigint {
    return this.amount;
  }

  constructor(
    public readonly contractAddress: `0x${string}`,
    public readonly validator: `0x${string}`,
    public readonly delegator: `0x${string}`,
    public readonly amount: bigint,
  ) {
    super();
  }

  hash(): `0x${string}` {
    const hasher = createKeccakHash('keccak256');
    const textEncoder = new TextEncoder();
    hasher.update(textEncoder.encode('ClaimValidatorExit').buffer);
    hasher.update(textEncoder.encode(this.ts.toISOString()).buffer);
    hasher.update(textEncoder.encode(this.validator).buffer);
    hasher.update(textEncoder.encode(this.delegator).buffer);
    hasher.update(
      textEncoder.encode(bigintCodec.encoder.convert(this.amount)).buffer,
    );
    return hexArrayBufferCodec.encode(hasher.digest());
  }

  applyToState(state: StakeTableState): StakeTableState {
    const newValidatorExits = new Map(state.validatorExits);
    newValidatorExits.delete(this.validator);
    const newDelegations = new Map(state.delegations);
    const delegatorMap =
      newDelegations.get(this.validator) ?? new Map<`0x${string}`, bigint>();
    delegatorMap.delete(this.delegator);
    newDelegations.set(this.validator, delegatorMap);

    return {
      ...state,
      delegations: newDelegations,
      validatorExits: newValidatorExits,
    };
  }
}

/**
 * ValidatorExit represents a validator exit action
 * within the MockStakeTableV2Contract.
 */
export class ValidatorExit extends StakeTableStateActions {
  public readonly gas: bigint = 100_000n;
  public get from(): `0x${string}` {
    return this.validator;
  }
  public get to(): `0x${string}` {
    return this.contractAddress;
  }
  public readonly value: bigint = 0n;

  constructor(
    public readonly contractAddress: `0x${string}`,
    public readonly validator: `0x${string}`,
    public readonly exitTime: bigint,
  ) {
    super();
  }

  hash(): `0x${string}` {
    const hasher = createKeccakHash('keccak256');
    const textEncoder = new TextEncoder();
    hasher.update(textEncoder.encode('ValidatorExit').buffer);
    hasher.update(textEncoder.encode(this.ts.toISOString()).buffer);
    hasher.update(textEncoder.encode(this.validator).buffer);
    hasher.update(
      textEncoder.encode(bigintCodec.encoder.convert(this.exitTime)).buffer,
    );
    return hexArrayBufferCodec.encode(hasher.digest());
  }

  applyToState(state: StakeTableState): StakeTableState {
    const newValidatorExits = new Map(state.validatorExits);
    newValidatorExits.set(this.validator, this.exitTime);
    const newValidators = new Map(state.validators);
    const validatorInfo = newValidators.get(this.validator) ?? [0n, 0];
    newValidators.set(this.validator, [
      validatorInfo[0],
      ValidatorStatus.exited,
    ]);

    return {
      ...state,
      validatorExits: newValidatorExits,
      validators: newValidators,
    };
  }
}

const StakeTableStorageSymbol = Symbol('StakeTableStorage');

/**
 * MockStakeTableV2ContractImpl is a mock implementation of the
 * StakeTableV2Contract interface for testing and development purposes.
 */
export class MockStakeTableV2ContractImpl implements StakeTableV2Contract {
  constructor(
    private readonly l1Methods: MockL1MethodsImpl,
    private readonly espToken: ESPTokenContract,
    state: StakeTableState,
    public accountAddress: null | `0x${string}`,
  ) {
    if (espToken instanceof MockESPTokenContractImpl) {
      this.espToken = espToken.replaceAccountAddress(state.contractAddress);
    }
    if (!this.l1Methods.mockReadContractStorage(StakeTableStorageSymbol)) {
      this.l1Methods.mockWriteContractStorage(StakeTableStorageSymbol, state);
    }
    this.accountAddress = accountAddress;
  }

  get state(): StakeTableState {
    const state =
      this.l1Methods.mockReadContractStorage<StakeTableState>(
        StakeTableStorageSymbol,
      ) ?? null;
    assertNotNull(state);
    return state;
  }

  replaceAccountAddress(
    accountAddress: `0x${string}` | null,
  ): MockStakeTableV2ContractImpl {
    return new MockStakeTableV2ContractImpl(
      this.l1Methods,
      this.espToken,
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
    return this.espToken.address;
  }

  async validator(account: `0x${string}`): Promise<Validator> {
    const result = this.state.validators.get(account) ?? [0n, 0];
    return Validator.fromRaw(result);
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
    const result = this.state.undelegations.get(validator)?.get(delegator) ?? [
      0n,
      0n,
    ];
    return Undelegation.fromRaw(result);
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

  async deregisterValidator(): Promise<`0x${string}`> {
    if (!this.accountAddress) {
      throw new Error(
        'No account address available for deregistering validator.',
      );
    }

    const validator = await this.validator(this.accountAddress);
    if (validator.status === ValidatorStatus.exited) {
      throw new Error('Validator has already exited');
    }

    if (validator.status !== ValidatorStatus.active) {
      throw new Error('Validator is not active');
    }

    const action = new ValidatorExit(
      this.address,
      this.accountAddress,
      BigInt(Date.now()) + this.state.exitEscrowPeriod,
    );
    applyActionToState(this.l1Methods, action);
    return action.hash();
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

    const validatorInfo = await this.validator(validator);
    if (validatorInfo.status !== ValidatorStatus.active) {
      throw new Error('Validator is not active');
    }

    if ((await this.espToken.balanceOf(this.accountAddress)) < amount) {
      throw new Error('Insufficient balance');
    }

    await this.espToken.transferFrom(this.accountAddress, this.address, amount);

    const action = new Delegate(
      this.address,
      validator,
      this.accountAddress,
      amount,
    );
    applyActionToState(this.l1Methods, action);
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

    const currentDelegation = await this.delegation(
      validator,
      this.accountAddress,
    );
    if (currentDelegation < amount) {
      throw new Error('Insufficient delegated amount');
    }

    const state = this.state;

    if (state.validatorExits.has(validator)) {
      throw new Error('Validator is exiting, cannot undelegate');
    }

    if (state.undelegations.get(validator)?.has(this.accountAddress)) {
      throw new Error('Existing undelegation in progress');
    }

    const action = new Undelegate(
      this.address,
      validator,
      this.accountAddress,
      amount,
      this.state.exitEscrowPeriod,
    );

    applyActionToState(this.l1Methods, action);
    return action.hash();
  }

  async claimWithdrawal(validator: `0x${string}`): Promise<`0x${string}`> {
    const currentTime = BigInt(Date.now());
    if (!this.accountAddress) {
      throw new Error('No account address available for claim withdrawal.');
    }

    const undelegation = await this.undelegation(
      validator,
      this.accountAddress,
    );

    if (!undelegation.amount) {
      throw new Error(
        'No undelegation found for this delegator and validator.',
      );
    }

    if (currentTime < undelegation.timestamp) {
      throw new Error('Undelegation period has not yet elapsed.');
    }

    await this.espToken.transfer(this.accountAddress, undelegation.amount);

    const action = new ClaimWithdrawal(
      this.address,
      validator,
      this.accountAddress,
      undelegation.amount,
    );
    applyActionToState(this.l1Methods, action);
    return action.hash();
  }

  async claimValidatorExit(validator: `0x${string}`): Promise<`0x${string}`> {
    const currentTime = BigInt(Date.now());
    if (!this.accountAddress) {
      throw new Error('No account address available for claim validator exit.');
    }
    const exit = (await this.validatorExit(validator)) ?? null;
    if (exit === null) {
      throw new Error('Validator is not exiting.');
    }

    const staked = await this.delegation(validator, this.accountAddress);
    if (staked <= 0n) {
      throw new Error('No stake found for this delegator and validator.');
    }

    if (currentTime < exit) {
      throw new Error('Validator exit period has not yet elapsed.');
    }

    await this.espToken.transfer(this.accountAddress, staked);

    const action = new ClaimValidatorExit(
      this.address,
      validator,
      this.accountAddress,
      staked,
    );
    applyActionToState(this.l1Methods, action);
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
  initialState: Partial<StakeTableState>,
  // initialStakes: Map<`0x${string}`, Map<`0x${string}`, bigint>> = new Map(),
): StakeTableState {
  const contractAddress = '0x0000000000000000000000000000000000000002';

  assert(
    espTokenContract instanceof MockESPTokenContractImpl,
    'expected espTokenContract to be an instance of MockESPTokenContractImpl',
  );

  const [state] = React.useState<StakeTableState>({
    contractAddress: initialState?.contractAddress ?? contractAddress,
    validators: initialState?.validators ?? new Map(),
    blsKeys: initialState?.blsKeys ?? new Set(),
    validatorExits: initialState?.validatorExits ?? new Map(),
    delegations: initialState?.delegations ?? new Map(),
    undelegations: initialState?.undelegations ?? new Map(),
    exitEscrowPeriod: initialState?.exitEscrowPeriod ?? 60000n,

    pauserRole: initialState?.pauserRole ?? '0xPAUSER_ROLE',
    minCommissionIncreaseInterval:
      initialState?.minCommissionIncreaseInterval ?? 60000n,
    maxCommissionIncrease: initialState?.maxCommissionIncrease ?? 1,
    commissionTracking: initialState?.commissionTracking ?? new Map(),
    schnorrKeys: initialState?.schnorrKeys ?? new Set(),

    lastUpdate: new Date(),
  } as const satisfies StakeTableState);

  return state;
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
  const l1Methods = React.useContext(L1MethodsContext);
  const accountAddress = React.useContext(RainbowKitAccountAddressContext) as
    | null
    | `0x${string}`;
  const espTokenContract = React.useContext(ESPTokenContractContext);

  assertNotNull(l1Methods);
  assertNotNull(espTokenContract);

  assert(l1Methods instanceof MockL1MethodsImpl);
  assert(espTokenContract instanceof MockESPTokenContractImpl);

  const initialStakes = new Map(
    appendIterables(
      mapIterable(takeIterable(nodeList, nodeList.length - 2), (node) => {
        const address = hexArrayBufferCodec.encode(node.address);
        return [address, new Map([[address, node.stake]])];
      }),
      mapIterable(dropIterable(nodeList, nodeList.length - 2), (node) => {
        const address = hexArrayBufferCodec.encode(node.address);
        return [
          address,
          new Map([
            [address, (node.stake * 9n) / 10n],
            [MockAddress, (node.stake * 1n) / 10n],
          ]),
        ];
      }),
    ),
  );

  const contractState = useMockStakeTableContractState(espTokenContract, {
    validators: new Map(
      mapIterable(initialStakes, ([validatorKey, others]) => [
        validatorKey,
        [
          foldRIterable(
            (acc, stake) => acc + stake,
            0n,
            (initialStakes.get(validatorKey) ?? new Map()).values(),
          ),
          others.size > 1 ? ValidatorStatus.exited : ValidatorStatus.active,
        ],
      ]),
    ),
    delegations: initialStakes,
    validatorExits: new Map(
      mapIterable(dropIterable(nodeList, nodeList.length - 2), (node) => {
        const address = hexArrayBufferCodec.encode(node.address);
        return [address, 0n];
      }),
    ),
  });

  const [contract] = React.useState(
    new MockStakeTableV2ContractImpl(
      l1Methods,
      espTokenContract,
      contractState,
      accountAddress as null | `0x${string}`,
    ),
  );

  React.useEffect(() => {
    contract.setAccountAddress(accountAddress);
    return () => {};
  }, [contract, accountAddress]);

  const gasEstimator = new MockStakeTableV2ContractGasEstimatorImpl();

  return (
    <StakeTableV2ContractContext.Provider value={contract}>
      <StakeTableContractContext.Provider value={contract}>
        <StakeTableV2ContractGasEstimatorContext.Provider value={gasEstimator}>
          <StakeTableContractGasEstimatorContext.Provider value={gasEstimator}>
            {children}
          </StakeTableContractGasEstimatorContext.Provider>
        </StakeTableV2ContractGasEstimatorContext.Provider>
      </StakeTableContractContext.Provider>
    </StakeTableV2ContractContext.Provider>
  );
};
