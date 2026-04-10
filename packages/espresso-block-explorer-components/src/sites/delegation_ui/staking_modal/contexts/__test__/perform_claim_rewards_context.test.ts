import { type L1Methods } from '@/contracts/l1/l1_interface';
import { RewardClaimContract } from '@/contracts/reward_claim/reward_claim_interface';
import { UnimplementedError } from '@/errors/unimplemented_error';
import { RewardClaimInput } from '@/service/hotshot_query_service/reward_state/reward_claim_input';
import { describe, expect, it, type Mock, vi } from 'vitest';
import { type Config } from 'wagmi';
import { performClaimRewards } from '../perform_claim_rewards_context';
import {
  extractContractErrorName,
  FailedToPerformWriteToContract,
  FailedToReceiveReceipt,
  TransactionReverted,
} from '../perform_write_states';

const FAKE_ACCOUNT_ADDRESS =
  '0x1111111111111111111111111111111111111111' as const;

function makeRevertedReceipt() {
  return {
    blockHash: '0x' as const,
    blockNumber: 0n,
    contractAddress: undefined,
    cumulativeGasUsed: 0n,
    effectiveGasPrice: 0n,
    from: '0x' as const,
    gasUsed: 0n,
    logs: [],
    logsBloom: '0x' as const,
    status: 'reverted' as const,
    to: null,
    transactionHash: '0x' as const,
    transactionIndex: 0,
    type: 'legacy' as const,
    chainId: 0,
  };
}

function makeRewardClaimInput(lifetimeRewards: bigint) {
  return new RewardClaimInput(lifetimeRewards, new ArrayBuffer(0));
}

type waitForTransactionReceiptMethod = L1Methods<
  Config,
  0
>['waitForTransactionReceipt'];

function makeMockL1Methods(
  mockWaitForTransactionReceipt: Mock<waitForTransactionReceiptMethod>,
): L1Methods<Config, 0> {
  return {
    getBalance: vi.fn().mockRejectedValue(new UnimplementedError()),
    estimateFeesPerGas: vi.fn().mockRejectedValue(new UnimplementedError()),
    estimateGas: vi.fn().mockRejectedValue(new UnimplementedError()),
    getTransactionReceipt: vi.fn().mockRejectedValue(new UnimplementedError()),
    getTransaction: vi.fn().mockRejectedValue(new UnimplementedError()),
    getBlock: vi.fn().mockRejectedValue(new UnimplementedError()),
    getBlockNumber: vi.fn().mockRejectedValue(new UnimplementedError()),
    waitForTransactionReceipt: mockWaitForTransactionReceipt,
  };
}

type claimedRewardsMethod = RewardClaimContract['claimedRewards'];

function makeMockRewardClaimContract(
  claimedRewardsMock: Mock<claimedRewardsMethod>,
): RewardClaimContract {
  return {
    address: '0x',
    getVersion: vi.fn().mockRejectedValue(new UnimplementedError()),
    totalClaimed: vi.fn().mockRejectedValue(new UnimplementedError()),
    claimRewards: vi.fn().mockResolvedValue('0xabcd' as `0x${string}`),
    claimedRewards: claimedRewardsMock,
  };
}

async function collectAll<T>(
  gen: AsyncGenerator<T>,
): Promise<{ values: T[]; error: unknown }> {
  const values: T[] = [];
  let error: unknown = null;
  try {
    for await (const v of gen) {
      values.push(v);
    }
  } catch (e) {
    error = e;
  }
  return { values, error };
}

describe('performClaimRewards on-chain revert diagnosis', () => {
  it('re-throws as AlreadyClaimed when claimedRewards >= lifetimeRewards', async () => {
    const receipt = makeRevertedReceipt();
    const l1Methods = makeMockL1Methods(vi.fn().mockResolvedValue(receipt));
    const rewardClaimInput = makeRewardClaimInput(1000n);
    const rewardClaimContract = makeMockRewardClaimContract(
      vi.fn().mockResolvedValue(1000n),
    );
    const resultCallback = vi.fn();

    const { error } = await collectAll(
      performClaimRewards(
        l1Methods,
        rewardClaimContract,
        rewardClaimInput,
        FAKE_ACCOUNT_ADDRESS,
        resultCallback,
      ),
    );

    expect(error).toBeInstanceOf(FailedToPerformWriteToContract);
    expect(extractContractErrorName(error)).toBe('AlreadyClaimed');
  });

  it('re-throws original TransactionReverted when claimedRewards < lifetimeRewards', async () => {
    const receipt = makeRevertedReceipt();
    const l1Methods = makeMockL1Methods(vi.fn().mockResolvedValue(receipt));
    const rewardClaimInput = makeRewardClaimInput(1000n);
    const rewardClaimContract = makeMockRewardClaimContract(
      vi.fn().mockResolvedValue(500n),
    );
    const resultCallback = vi.fn();

    const { error } = await collectAll(
      performClaimRewards(
        l1Methods,
        rewardClaimContract,
        rewardClaimInput,
        FAKE_ACCOUNT_ADDRESS,
        resultCallback,
      ),
    );

    expect(error).toBeInstanceOf(TransactionReverted);
  });

  it('re-throws original TransactionReverted when claimedRewards() call fails', async () => {
    const receipt = makeRevertedReceipt();
    const l1Methods = makeMockL1Methods(vi.fn().mockResolvedValue(receipt));
    const rewardClaimInput = makeRewardClaimInput(1000n);
    const rewardClaimContract = makeMockRewardClaimContract(
      vi.fn().mockRejectedValue(new Error('network error')),
    );
    const resultCallback = vi.fn();

    const { error } = await collectAll(
      performClaimRewards(
        l1Methods,
        rewardClaimContract,
        rewardClaimInput,
        FAKE_ACCOUNT_ADDRESS,
        resultCallback,
      ),
    );

    expect(error).toBeInstanceOf(TransactionReverted);
  });

  it('does not intercept non-TransactionReverted errors', async () => {
    const l1Methods = makeMockL1Methods(
      vi.fn().mockRejectedValue(new Error('timeout')),
    );
    const rewardClaimInput = makeRewardClaimInput(1000n);
    const rewardClaimContract = makeMockRewardClaimContract(
      vi.fn().mockResolvedValue(1000n),
    );
    const resultCallback = vi.fn();

    const { error } = await collectAll(
      performClaimRewards(
        l1Methods,
        rewardClaimContract,
        rewardClaimInput,
        FAKE_ACCOUNT_ADDRESS,
        resultCallback,
      ),
    );

    expect(error).toBeInstanceOf(FailedToReceiveReceipt);
  });

  it('re-throws as AlreadyClaimed when claimedRewards > lifetimeRewards', async () => {
    const receipt = makeRevertedReceipt();
    const l1Methods = makeMockL1Methods(vi.fn().mockResolvedValue(receipt));
    const rewardClaimInput = makeRewardClaimInput(1000n);
    const rewardClaimContract = makeMockRewardClaimContract(
      vi.fn().mockResolvedValue(2000n),
    );
    const resultCallback = vi.fn();

    const { error } = await collectAll(
      performClaimRewards(
        l1Methods,
        rewardClaimContract,
        rewardClaimInput,
        FAKE_ACCOUNT_ADDRESS,
        resultCallback,
      ),
    );

    expect(error).toBeInstanceOf(FailedToPerformWriteToContract);
    expect(extractContractErrorName(error)).toBe('AlreadyClaimed');
  });
});
