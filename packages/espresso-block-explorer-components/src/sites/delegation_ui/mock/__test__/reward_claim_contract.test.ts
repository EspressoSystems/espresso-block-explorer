import { describe, it } from 'vitest';
import {
  MockESPTokenContractImpl,
  MockESPTokenContractState,
} from '../esp_token_contract';
import { MockL1MethodsImpl, MockL1State } from '../l1_methods';
import {
  MockRewardClaimContractImpl,
  MockRewardClaimState,
} from '../reward_claim_contract';

const ACCOUNT1: `0x${string}` = '0x1111111111111111111111111111111111111111';
const ACCOUNT2: `0x${string}` = '0x2222222222222222222222222222222222222222';
const ESP_CONTRACT_ADDRESS = '0x0000000000000000000000000000000000000001';
const REWARD_CLAIM_CONTRACT_ADDRESS =
  '0x0000000000000000000000000000000000000003';

function createInitialL1MethodsState(): MockL1State {
  return {
    balances: new Map(),
    transactions: new Map(),
    accountAddress: null,
    pendingBlockHeight: 1n,
    pendingTransactions: [],
    transactionToBlockMap: new Map(),
    blocks: [
      {
        hash: `0x0000000000000000000000000000000000000000`,
        height: 0n,
        timestamp: 0n,
        transactions: [],
      },
    ],

    contractStorage: new Map(),
  };
}

function createInitialMockESPTokenContractState(): MockESPTokenContractState {
  return {
    contractAddress: ESP_CONTRACT_ADDRESS,
    version: [1, 0, 0],
    name: 'ESP Token',
    symbol: 'ESP',
    decimals: 18,
    totalSupply: 100_000_000_000_000_000_000_000_000_000n,
    balances: new Map([
      [ACCOUNT1, 500_000_000_000_000_000_000_000_000n],
      [ACCOUNT2, 300_000_000_000_000_000_000_000_000n],
      [REWARD_CLAIM_CONTRACT_ADDRESS, 200_000_000_000_000_000_000_000_000n],
    ] as const),
    allowances: new Map(),
    lastUpdate: new Date(),
  };
}

function createInitialMockRewardClaimContractState(): MockRewardClaimState {
  return {
    contractAddress: REWARD_CLAIM_CONTRACT_ADDRESS,
    claimedRewards: new Map(),
    lastUpdate: new Date(),
  };
}

function setupInitialL1Methods(
  state: MockL1State = createInitialL1MethodsState(),
) {
  return new MockL1MethodsImpl(state);
}

function setupInitialESPTokenContractState(
  l1Methods: MockL1MethodsImpl,
  state: MockESPTokenContractState = createInitialMockESPTokenContractState(),
) {
  return new MockESPTokenContractImpl(l1Methods, state, null);
}

function setupInitialContractState(
  l1Methods: MockL1MethodsImpl = setupInitialL1Methods(),
  espToken: MockESPTokenContractImpl = setupInitialESPTokenContractState(
    l1Methods,
  ),
  state: MockRewardClaimState = createInitialMockRewardClaimContractState(),
) {
  return new MockRewardClaimContractImpl(l1Methods, espToken, state, null);
}

describe('MockRewardClaimContractImpl', () => {
  describe('read', () => {
    it('should return [1, 0, 0] for getVersion', async () => {
      const contract = setupInitialContractState();
      expect(contract.claimedRewards(ACCOUNT1)).resolves.toBe(0n);
    });

    it('should return empty for claimedRewards', async () => {
      const contract = setupInitialContractState();
      expect(contract.getVersion()).resolves.deep.equal([1, 0, 0]);
    });
  });

  describe('write', () => {
    describe('transfer', () => {
      it('should allow for any claimed rewards', async () => {
        const contract =
          setupInitialContractState().replaceAccountAddress(ACCOUNT2);

        await expect(
          contract.claimRewards(1000n, `0x00`),
        ).resolves.not.toThrowError();

        await expect(contract.claimedRewards(ACCOUNT2)).resolves.toBe(1000n);
      });
    });
  });
});
