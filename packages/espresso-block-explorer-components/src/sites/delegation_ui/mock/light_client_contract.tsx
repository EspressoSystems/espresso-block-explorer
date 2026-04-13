import { assert, assertNotNull } from '@/assert/assert';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import { L1MethodsContext } from '@/contexts/l1_methods_context';
import {
  LightClientContractContext,
  LightClientContractGasEstimatorContext,
} from '@/contexts/light_client_contract_context';
import {
  LightClientV2ContractContext,
  LightClientV2ContractGasEstimatorContext,
} from '@/contexts/light_client_v2_contract_context';
import { ScalarField } from '@/contracts/bn254/bn254_interface';
import {
  LightClientState,
  StakeTableState,
  StateHistoryCommitment,
} from '@/contracts/light_client/light_client_interface';
import { LightClientV2Contract } from '@/contracts/light_client_v2/light_client_v2_interface';
import { UnimplementedError } from '@/errors/unimplemented_error';
import { default as React } from 'react';
import {
  MockContractStorage,
  MockL1MethodsImpl,
  UnderlyingTransaction,
} from './l1_methods';
import { MockLightClientV2ContractGasEstimatorImpl } from './light_client_v2_contract_gas_estimator';

export class MockLightClientContractState implements MockContractStorage {
  constructor(
    public readonly contractAddress: `0x${string}`,
    public readonly finalizedState: LightClientState,
  ) {}

  public applyTransaction(
    tx: UnderlyingTransaction,
  ): MockLightClientContractState {
    if (tx instanceof LightClientContractStateAction) {
      const nextState = tx.applyToState(this);
      return nextState;
    }

    return this;
  }
}

/**
 * ESPTokenContractStateAction is an abstract base class
 * representing an action that modifies the state of the
 * MockESPTokenContract.
 */
export abstract class LightClientContractStateAction implements UnderlyingTransaction {
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
    state: MockLightClientContractState,
  ): MockLightClientContractState;
}

const LightClientStorageSymbol = Symbol('LightClientContract');

/**
 * MockLightClientV2ContractImpl is a mock implementation of the LightClientV2Contract
 * interface for testing and development purposes.
 *
 */
export class MockLightClientV2ContractImpl implements LightClientV2Contract {
  constructor(
    private readonly l1Methods: MockL1MethodsImpl,
    state: MockLightClientContractState,
    public accountAddress: `0x${string}` | null = null,
  ) {
    if (!this.l1Methods.mockReadContractStorage(LightClientStorageSymbol)) {
      this.l1Methods.mockWriteContractStorage(
        LightClientStorageSymbol,
        new MockLightClientContractState(
          state.contractAddress,
          new LightClientState(0n, 0n, new ScalarField(0n)),
        ),
      );
    }

    this.accountAddress = accountAddress;
  }

  get state(): MockLightClientContractState {
    const state =
      this.l1Methods.mockReadContractStorage<MockLightClientContractState>(
        LightClientStorageSymbol,
      ) ?? null;
    assertNotNull(state);
    return state;
  }

  replaceAccountAddress(
    accountAddress: `0x${string}` | null,
  ): MockLightClientV2ContractImpl {
    return new MockLightClientV2ContractImpl(
      this.l1Methods,
      this.state,
      accountAddress,
    );
  }

  setAccountAddress(accountAddress: `0x${string}` | null): void {
    this.accountAddress = accountAddress;
  }

  get address() {
    return this.state.contractAddress;
  }

  async blocksPerEpoch(): Promise<bigint> {
    return 100n;
  }

  async epochStartBlock(): Promise<bigint> {
    return 0n;
  }

  async votingStakeTableState(): Promise<StakeTableState> {
    throw new UnimplementedError();
  }

  currentEpoch(): Promise<bigint> {
    throw new UnimplementedError();
  }

  async epochFromBlockNumber(
    blockNum: bigint,
    blocksPerEpoch: bigint,
  ): Promise<bigint> {
    if (blocksPerEpoch === 0n) {
      // this case is unreachable in our context since we reject zero-valued blocksPerEpoch
      // at init time
      return 0n;
    } else if (blockNum === 0n) {
      return 1n;
    } else if (blockNum % blocksPerEpoch === 0n) {
      return blockNum / blocksPerEpoch;
    } else {
      return blockNum / blocksPerEpoch + 1n;
    }
  }

  async isEpochRoot(blockHeight: bigint): Promise<boolean> {
    if (blockHeight === 0n || (await this.blocksPerEpoch()) === 0n) {
      return false;
    } else {
      // it's safe to assume +5 won't overflow in practice
      return (blockHeight + 5n) % (await this.blocksPerEpoch()) === 0n;
    }
  }

  async isGtEpochRoot(blockHeight: bigint): Promise<boolean> {
    const blocksPerEpoch = await this.blocksPerEpoch();
    if (blockHeight === 0n || blocksPerEpoch === 0n) {
      return false;
    } else {
      // it's safe to assume -5 won't underflow in practice
      return (
        blockHeight % blocksPerEpoch === 0n ||
        blockHeight % blocksPerEpoch > blocksPerEpoch - 5n
      );
    }
  }

  async genesisStakeTableState(): Promise<StakeTableState> {
    throw new UnimplementedError();
  }

  async genesisState(): Promise<LightClientState> {
    throw new UnimplementedError();
  }

  async finalizedState(): Promise<LightClientState> {
    return this.state.finalizedState;
  }

  async permissionedProver(): Promise<`0x${string}`> {
    throw new UnimplementedError();
  }

  async stateHistoryRetentionPeriod(): Promise<number> {
    throw new UnimplementedError();
  }

  async stateHistoryFirstIndex(): Promise<bigint> {
    throw new UnimplementedError();
  }

  async stateHistoryCommitments(): Promise<StateHistoryCommitment> {
    throw new UnimplementedError();
  }

  async currentBlockNumber(): Promise<bigint> {
    throw new UnimplementedError();
  }

  async getVersion(): Promise<readonly [number, number, number]> {
    return [2, 0, 0];
  }

  async lagOverEscapeHatchThreshold(): Promise<boolean> {
    throw new UnimplementedError();
  }

  async getHotShotCommitment(): Promise<readonly [ScalarField, bigint]> {
    throw new UnimplementedError();
  }

  async getStateHistoryCount(): Promise<bigint> {
    throw new UnimplementedError();
  }

  async isPermissionedProverEnabled(): Promise<boolean> {
    throw new UnimplementedError();
  }
}

/**
 * useMockLightClientContractState is a custom React hook that initializes
 * and returns the state for the MockLightClientContract.
 */
function useMockLightClientContractState(
  initialState?: Partial<MockLightClientContractState>,
) {
  const contractAddress = '0x0000000000000000000000000000000000000001';
  // Mocked ESPTokenContract State
  const [state] = React.useState<MockLightClientContractState>(
    new MockLightClientContractState(
      initialState?.contractAddress ?? contractAddress,
      initialState?.finalizedState ??
        new LightClientState(0n, 0n, new ScalarField(0n)),
    ),
  );

  return state;
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
export const MockLightClientV2Contract: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const l1Methods = React.useContext(L1MethodsContext);
  const contractState = useMockLightClientContractState();
  const accountAddress = React.useContext(RainbowKitAccountAddressContext) as
    | null
    | `0x${string}`;

  // assertInstanceOf(l1Methods, MockL1MethodsImpl);
  assert(l1Methods instanceof MockL1MethodsImpl);

  const [contract] = React.useState(
    new MockLightClientV2ContractImpl(l1Methods, contractState),
  );

  React.useEffect(() => {
    contract.setAccountAddress(accountAddress);
    return () => {};
  }, [contract, accountAddress]);

  if (!(l1Methods instanceof MockL1MethodsImpl)) {
    throw new Error('MockESPTokenContract requires MockL1MethodsImpl');
  }

  const estimator = new MockLightClientV2ContractGasEstimatorImpl();

  return (
    <LightClientV2ContractContext.Provider value={contract}>
      <LightClientV2ContractGasEstimatorContext.Provider value={estimator}>
        <LightClientContractContext.Provider value={contract}>
          <LightClientContractGasEstimatorContext.Provider value={estimator}>
            {children}
          </LightClientContractGasEstimatorContext.Provider>
        </LightClientContractContext.Provider>
      </LightClientV2ContractGasEstimatorContext.Provider>
    </LightClientV2ContractContext.Provider>
  );
};
