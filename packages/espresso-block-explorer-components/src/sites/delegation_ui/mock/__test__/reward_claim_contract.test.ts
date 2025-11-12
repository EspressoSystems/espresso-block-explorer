import { describe, it } from 'vitest';
import { MockL1MethodsImpl, MockL1State } from '../l1_methods';
import {
  MockRewardClaimContractImpl,
  MockRewardClaimState,
} from '../reward_claim_contract';

const ACCOUNT1: `0x${string}` = '0x1111111111111111111111111111111111111111';
const ACCOUNT2: `0x${string}` = '0x2222222222222222222222222222222222222222';

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

function createInitialMockRewardClaimContractState(): MockRewardClaimState {
  return {
    contractAddress: '0x0000000000000000000000000000000000000003',
    claimedRewards: new Map(),
    lastUpdate: new Date(),
  };
}

function setupInitialContractState(
  state: MockRewardClaimState = createInitialMockRewardClaimContractState(),
) {
  const l1Methods = new MockL1MethodsImpl(createInitialL1MethodsState());
  return new MockRewardClaimContractImpl(l1Methods, state, null);
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
