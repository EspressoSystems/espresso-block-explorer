import { RewardClaimInput } from '@/service/hotshot_query_service/cappuccino/reward_state/reward_claim_input';
import { describe, expect, it, vi } from 'vitest';
import { performClaimRewards } from '../perform_claim_rewards_context';
import {
  extractContractErrorName,
  FailedToPerformWriteToContract,
  FailedtoReceiveReceipt,
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function makeMockL1Methods(receipt: any) {
  return {
    waitForTransactionReceipt: vi.fn().mockResolvedValue(receipt),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;
}

function makeMockRewardClaimContract(claimedRewardsReturn: bigint | Error) {
  return {
    claimRewards: vi.fn().mockResolvedValue('0xabcd' as `0x${string}`),
    claimedRewards:
      claimedRewardsReturn instanceof Error
        ? vi.fn().mockRejectedValue(claimedRewardsReturn)
        : vi.fn().mockResolvedValue(claimedRewardsReturn),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;
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
    const l1Methods = makeMockL1Methods(receipt);
    const rewardClaimInput = makeRewardClaimInput(1000n);
    const rewardClaimContract = makeMockRewardClaimContract(1000n);
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
    const l1Methods = makeMockL1Methods(receipt);
    const rewardClaimInput = makeRewardClaimInput(1000n);
    const rewardClaimContract = makeMockRewardClaimContract(500n);
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
    const l1Methods = makeMockL1Methods(receipt);
    const rewardClaimInput = makeRewardClaimInput(1000n);
    const rewardClaimContract = makeMockRewardClaimContract(
      new Error('network error'),
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
    const l1Methods = {
      waitForTransactionReceipt: vi
        .fn()
        .mockRejectedValue(new Error('timeout')),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;
    const rewardClaimInput = makeRewardClaimInput(1000n);
    const rewardClaimContract = makeMockRewardClaimContract(1000n);
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

    expect(error).toBeInstanceOf(FailedtoReceiveReceipt);
  });

  it('re-throws as AlreadyClaimed when claimedRewards > lifetimeRewards', async () => {
    const receipt = makeRevertedReceipt();
    const l1Methods = makeMockL1Methods(receipt);
    const rewardClaimInput = makeRewardClaimInput(1000n);
    const rewardClaimContract = makeMockRewardClaimContract(2000n);
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
