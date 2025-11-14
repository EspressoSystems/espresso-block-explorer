import { assert, assertNotNull } from '@/assert/assert';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit/contexts/contexts';
import { RewardClaimContract } from '@/contracts/reward_claim/reward_claim_interface';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import { bigintCodec } from '@/convert/codec/bigint';
import { createKeccakHash } from '@/crypto/keccak/family';
import React from 'react';
import { ESPTokenContractContext } from '../contexts/esp_token_contract_context';
import { L1MethodsContext } from '../contexts/l1_methods_context';
import { RewardClaimContractContext } from '../contexts/reward_claim_contract_context';
import { MockESPTokenContractImpl } from './esp_token_contract';
import { MockL1MethodsImpl, UnderlyingTransaction } from './l1_methods';

/**
 * RewardClaimState defines the structure of the mock
 * RewardClaimContract state.
 */
export interface MockRewardClaimState {
  contractAddress: `0x${string}`;

  claimedRewards: Map<`0x${string}`, bigint>;

  lastUpdate: Date;
}

function applyActionToState(
  l1Methods: MockL1MethodsImpl,
  action: RewardClaimStateAction,
): void {
  const currentState: null | MockRewardClaimState =
    l1Methods.mockReadContractStorage(RewardClaimStorageSymbol) ?? null;
  assertNotNull(currentState);

  l1Methods.mockWriteContractStorage(RewardClaimStorageSymbol, {
    ...action.applyToState(currentState),
    lastUpdate: action.ts,
  });
  l1Methods.mockWriteTransaction(action);
}

const RewardClaimStorageSymbol = Symbol('RewardClaimStorage');

export abstract class RewardClaimStateAction implements UnderlyingTransaction {
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
  abstract applyToState(state: MockRewardClaimState): MockRewardClaimState;
}

export class ClaimRewardAction extends RewardClaimStateAction {
  public readonly gas: bigint = 21000n;
  public get from(): `0x${string}` {
    return this.contractAddress;
  }

  public get to(): `0x${string}` {
    return this.delegator;
  }

  public get value(): bigint {
    return this.lifetimeRewards;
  }

  constructor(
    public readonly contractAddress: `0x${string}`,
    public readonly delegator: `0x${string}`,
    public readonly lifetimeRewards: bigint,
    public readonly authData: `0x${string}`,
  ) {
    super();
  }

  hash(): `0x${string}` {
    const hasher = createKeccakHash('keccak256');
    const textEncoder = new TextEncoder();
    hasher.update(textEncoder.encode('ClaimReward').buffer);
    hasher.update(textEncoder.encode(this.ts.toISOString()).buffer);
    hasher.update(textEncoder.encode(this.delegator).buffer);
    hasher.update(
      textEncoder.encode(bigintCodec.encoder.convert(this.lifetimeRewards))
        .buffer,
    );
    return hexArrayBufferCodec.encode(hasher.digest());
  }

  applyToState(state: MockRewardClaimState): MockRewardClaimState {
    const nextMap = new Map(state.claimedRewards);
    nextMap.set(this.delegator, this.lifetimeRewards);

    return {
      ...state,
      claimedRewards: nextMap,
    };
  }
}

export class MockRewardClaimContractImpl implements RewardClaimContract {
  constructor(
    private readonly l1Methods: MockL1MethodsImpl,
    private readonly espToken: MockESPTokenContractImpl,
    state: MockRewardClaimState,
    public accountAddress: `0x${string}` | null = null,
  ) {
    if (!this.l1Methods.mockReadContractStorage(RewardClaimStorageSymbol)) {
      this.l1Methods.mockWriteContractStorage(RewardClaimStorageSymbol, {
        ...state,
      });
    }

    this.accountAddress = accountAddress;
    this.espToken = espToken.replaceAccountAddress(state.contractAddress);
  }

  get state(): MockRewardClaimState {
    const state =
      this.l1Methods.mockReadContractStorage<MockRewardClaimState>(
        RewardClaimStorageSymbol,
      ) ?? null;
    assertNotNull(state);
    return state;
  }

  replaceAccountAddress(
    accountAddress: `0x${string}` | null,
  ): MockRewardClaimContractImpl {
    return new MockRewardClaimContractImpl(
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

  async claimedRewards(address: `0x${string}`): Promise<bigint> {
    return this.state.claimedRewards.get(address) ?? 0n;
  }

  async getVersion(): Promise<readonly [number, number, number]> {
    return [1, 0, 0];
  }

  async claimRewards(
    lifetimeRewards: bigint,
    authData: `0x${string}`,
  ): Promise<`0x${string}`> {
    if (!this.accountAddress) {
      throw new Error('no active account detected');
    }

    const previousClaimedRewards = await this.claimedRewards(
      this.accountAddress,
    );

    const diff = lifetimeRewards - previousClaimedRewards;

    if (diff < 0n) {
      throw new Error(
        'lifetimeRewards cannot be less than previously claimed rewards',
      );
    }

    this.espToken.transfer(this.accountAddress, diff);

    const action = new ClaimRewardAction(
      this.address,
      this.accountAddress,
      lifetimeRewards,
      authData,
    );

    applyActionToState(this.l1Methods, action);
    return action.hash();
  }
}

/**
 * useMockRewardClaimState is a custom React hook that initializes
 * and returns the state for the MockRewardClaimContract.
 */
function useMockRewardClaimState() {
  const contractAddress = '0x0000000000000000000000000000000000000003';
  // Mocked ESPTokenContract State
  const [state] = React.useState<MockRewardClaimState>({
    contractAddress,
    claimedRewards: new Map(),
    lastUpdate: new Date(),
  } as const satisfies MockRewardClaimState);

  return state;
}

/**
 * MockRewardClaimContract is a React component that provides
 * a mock RewardClaimContract implementation via context for
 * testing and development purposes.
 *
 * It will overwrite the RewardClaimContractContext with a mock
 * implementation that simulates the behavior of an actual
 * RewardClaimContract.
 */
export const MockRewardClaimContract: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const l1Methods = React.useContext(L1MethodsContext);
  const espToken = React.useContext(ESPTokenContractContext);
  const contractState = useMockRewardClaimState();
  const accountAddress = React.useContext(RainbowKitAccountAddressContext);
  assert(l1Methods instanceof MockL1MethodsImpl);
  assert(espToken instanceof MockESPTokenContractImpl);
  const [contract] = React.useState(
    () => new MockRewardClaimContractImpl(l1Methods, espToken, contractState),
  );

  React.useEffect(() => {
    contract.setAccountAddress(accountAddress as null | `0x${string}`);
    return () => {};
  }, [contract, accountAddress]);

  return (
    <RewardClaimContractContext.Provider value={contract}>
      {children}
    </RewardClaimContractContext.Provider>
  );
};
