import { describe, expect, it, vi } from 'vitest';
import {
  extractContractErrorName,
  FailedToPerformWriteToContract,
  FailedtoReceiveReceipt,
  performWriteTransaction,
  PerformWriteTransactionReceiptRetrieved,
  PerformWriteTransactionReceiptWaiting,
  PerformWriteTransactionStatus,
  PerformWriteTransactionSucceeded,
  PerformWriteTransactionWaiting,
  TransactionReverted,
} from '../perform_write_states';

const FAKE_TX_HASH =
  '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' as const;

function makeReceipt(status: 'success' | 'reverted') {
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
    status,
    to: null,
    transactionHash: '0x' as const,
    transactionIndex: 0,
    type: 'legacy' as const,
    chainId: 0,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function makeMockL1Methods(receipt: any) {
  return {
    waitForTransactionReceipt: vi.fn().mockResolvedValue(receipt),
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

describe('performWriteTransaction', () => {
  it('yields correct states for a successful transaction', async () => {
    const receipt = makeReceipt('success');
    const l1Methods = makeMockL1Methods(receipt);
    const writeToContract = vi.fn().mockResolvedValue(FAKE_TX_HASH);
    const resultCallback = vi.fn();

    const { values, error } = await collectAll(
      performWriteTransaction(l1Methods, writeToContract, resultCallback),
    );

    expect(error).toBeNull();
    expect(values).toHaveLength(4);
    expect(values[0]).toBeInstanceOf(PerformWriteTransactionWaiting);
    expect(values[1]).toBeInstanceOf(PerformWriteTransactionSucceeded);
    expect(values[2]).toBeInstanceOf(PerformWriteTransactionReceiptWaiting);
    expect(values[3]).toBeInstanceOf(PerformWriteTransactionReceiptRetrieved);
    expect(resultCallback).toHaveBeenCalledWith(null, receipt);
  });

  it('throws FailedToPerformWriteToContract when writeToContract rejects', async () => {
    const l1Methods = makeMockL1Methods(makeReceipt('success'));
    const writeToContract = vi
      .fn()
      .mockRejectedValue(new Error('user rejected'));
    const resultCallback = vi.fn();

    const { values, error } = await collectAll(
      performWriteTransaction(l1Methods, writeToContract, resultCallback),
    );

    expect(values).toHaveLength(1);
    expect(values[0]).toBeInstanceOf(PerformWriteTransactionWaiting);
    expect(error).toBeInstanceOf(FailedToPerformWriteToContract);
    expect(resultCallback).toHaveBeenCalledWith(
      expect.any(FailedToPerformWriteToContract),
      null,
    );
  });

  it('throws FailedtoReceiveReceipt when waitForTransactionReceipt rejects', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const l1Methods = {
      waitForTransactionReceipt: vi
        .fn()
        .mockRejectedValue(new Error('timeout')),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;
    const writeToContract = vi.fn().mockResolvedValue(FAKE_TX_HASH);
    const resultCallback = vi.fn();

    const { values, error } = await collectAll(
      performWriteTransaction(l1Methods, writeToContract, resultCallback),
    );

    expect(values).toHaveLength(3);
    expect(values[0]).toBeInstanceOf(PerformWriteTransactionWaiting);
    expect(values[1]).toBeInstanceOf(PerformWriteTransactionSucceeded);
    expect(values[2]).toBeInstanceOf(PerformWriteTransactionReceiptWaiting);
    expect(error).toBeInstanceOf(FailedtoReceiveReceipt);
    expect(resultCallback).toHaveBeenCalledWith(
      expect.any(FailedtoReceiveReceipt),
      null,
    );
  });

  it('should throw TransactionReverted for a reverted receipt', async () => {
    const receipt = makeReceipt('reverted');
    const l1Methods = makeMockL1Methods(receipt);
    const writeToContract = vi.fn().mockResolvedValue(FAKE_TX_HASH);
    const resultCallback = vi.fn();

    const { values, error } = await collectAll(
      performWriteTransaction(l1Methods, writeToContract, resultCallback),
    );

    const hasReceiptRetrieved = values.some(
      (v) => v.status === PerformWriteTransactionStatus.receiptRetrieved,
    );
    expect(hasReceiptRetrieved).toBe(false);
    expect(error).toBeInstanceOf(TransactionReverted);
    expect(resultCallback).toHaveBeenCalledWith(
      expect.any(TransactionReverted),
      null,
    );
  });
});

describe('extractContractErrorName', () => {
  it('extracts errorName from a nested viem ContractFunctionRevertedError', () => {
    const viemError = {
      name: 'ContractFunctionExecutionError',
      cause: {
        name: 'ContractFunctionRevertedError',
        data: { errorName: 'InvalidAuthRoot' },
      },
    };
    const wrapped = new FailedToPerformWriteToContract(viemError);
    expect(extractContractErrorName(wrapped)).toBe('InvalidAuthRoot');
  });

  it('returns null for a plain Error', () => {
    const wrapped = new FailedToPerformWriteToContract(new Error('boom'));
    expect(extractContractErrorName(wrapped)).toBeNull();
  });

  it('returns null for null input', () => {
    expect(extractContractErrorName(null)).toBeNull();
  });

  it('extracts errorName when passed the viem error directly', () => {
    const viemError = {
      name: 'ContractFunctionRevertedError',
      data: { errorName: 'AlreadyClaimed' },
    };
    expect(extractContractErrorName(viemError)).toBe('AlreadyClaimed');
  });
});
