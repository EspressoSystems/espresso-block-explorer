import { RainbowKitAccountAddressContext } from '@/components/rainbowkit/contexts/contexts';
import { L1Methods } from '@/contracts/l1/l1_interface';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import { createKeccakHash } from '@/crypto/keccak/family';
import { fakeData } from '@/models/config/storybook/wagmi';
import React from 'react';
import { BlockTag } from 'viem';
import {
  EstimateFeesPerGasReturnType,
  GetBalanceParameters,
  GetBalanceReturnType,
  GetBlockParameters,
  GetBlockReturnType,
  GetTransactionParameters,
  GetTransactionReceiptParameters,
  GetTransactionReceiptReturnType,
  GetTransactionReturnType,
} from 'wagmi/actions';
import { L1MethodsContext } from '../contexts/l1_methods_context';

type Config = typeof fakeData;
type ChainID = Config['chains'][0]['id'];

export interface UnderlyingTransaction {
  contractAddress: undefined | `0x${string}`;
  from: `0x${string}`;
  to: `0x${string}`;
  value: bigint;
  gas: bigint;

  hash(): `0x${string}`;
}

export interface L1Transaction {
  hash: `0x${string}`;
  from: `0x${string}`;
  to: `0x${string}`;
  value: bigint;
  gas: bigint;

  blockHeight: bigint;
  contractAddress?: `0x${string}`;
  transaction: UnderlyingTransaction;
}

interface Block {
  hash: `0x${string}`;
  height: bigint;
  timestamp: bigint;
  transactions: L1Transaction[];
}

function hashFromBlockParts(
  height: bigint,
  timestamp: bigint,
  transactions: L1Transaction[],
): `0x${string}` {
  const hasher = createKeccakHash('keccak256');
  const textEncoder = new TextEncoder();
  hasher.update(textEncoder.encode('Transfer').buffer);
  hasher.update(textEncoder.encode(String(height)).buffer);
  hasher.update(textEncoder.encode(String(timestamp)).buffer);
  for (const tx of transactions) {
    hasher.update(textEncoder.encode(tx.hash).buffer);
  }
  return hexArrayBufferCodec.encode(hasher.digest());
}

export interface L1TransactionCallback {
  l1Transaction(action: UnderlyingTransaction): void;
}

export class MockL1MethodsImpl implements L1Methods<Config, ChainID> {
  constructor(
    private storage: MockL1State,
    public accountAddress: `0x${string}` | null = null,
  ) {}

  replaceAccountAddress(
    accountAddress: `0x${string}` | null,
  ): MockL1MethodsImpl {
    return new MockL1MethodsImpl(this.storage, accountAddress);
  }

  setAccountAddress(accountAddress: `0x${string}` | null) {
    this.accountAddress = accountAddress;
  }

  async getBalance(parameters: GetBalanceParameters<Config>) {
    // Get the balance...
    const address = parameters.address;
    const balance = this.storage.balances.get(address) ?? 0n;
    return {
      decimals: 18,
      formatted: String(balance),
      symbol: 'ESP',
      value: balance,
    } as const satisfies GetBalanceReturnType;
  }

  async estimateFeesPerGas(): Promise<EstimateFeesPerGasReturnType> {
    return {
      maxPriorityFeePerGas: 1_000_000_000n,
      maxFeePerGas: 15_000_000_000n,
      formatted: {
        maxPriorityFeePerGas: '1',
        maxFeePerGas: '15',
      },
    };
  }

  async estimateGas() {
    return 1_000_000_000n;
  }

  receiptFromTransactionAndBlock(tx: L1Transaction, block: Block) {
    const gas = block.transactions.reduce((acc, tx) => acc + tx.gas, 0n);
    return {
      chainId: 31337,
      blockHash: block.hash,
      blockNumber: block.height,
      contractAddress: tx.contractAddress,
      cumulativeGasUsed: gas,
      effectiveGasPrice: 1n,
      from: tx.transaction.from,
      gasUsed: gas,
      logs: [],
      logsBloom: `0x`,
      status: 'success',
      to: tx.transaction.to,
      transactionHash: tx.hash,
      transactionIndex: block.transactions.findIndex((t) => t.hash === tx.hash),
      type: 'legacy',
    } as const satisfies GetTransactionReceiptReturnType<Config>;
  }

  async getTransactionReceipt(
    parameters: GetTransactionReceiptParameters<Config, ChainID>,
  ) {
    const txHash = parameters.hash;
    const tx = this.storage.transactions.get(txHash);
    if (!tx) {
      throw new Error('Transaction not found');
    }

    const blockHeight = this.storage.transactionToBlockMap.get(txHash) ?? null;
    if (!blockHeight) {
      throw new Error('Block height not found');
    }
    const block = this.storage.blocks[Number(blockHeight)];
    if (!block) {
      throw new Error('Block not found');
    }
    return this.receiptFromTransactionAndBlock(tx, block);
  }

  transactionFromTransactionAndBlock(
    txn: L1Transaction,
    block: Block,
  ): GetTransactionReturnType<Config, ChainID>;
  transactionFromTransactionAndBlock(
    txn: L1Transaction,
    block: null,
  ): Omit<
    GetTransactionReturnType<Config, ChainID>,
    'blockNumber' | 'blockHash' | 'transactionIndex'
  >;
  transactionFromTransactionAndBlock(
    tx: L1Transaction,
    block: null | Block,
  ): Omit<
    GetTransactionReturnType<Config, ChainID>,
    'blockNumber' | 'blockHash' | 'transactionIndex'
  > &
    Partial<
      Pick<
        GetTransactionReturnType<Config, ChainID>,
        'blockNumber' | 'blockHash' | 'transactionIndex'
      >
    > {
    if (!block) {
      return {
        chainId: 31337,
        gasPrice: 1n,
        from: this.accountAddress ?? `0x00000000000000000000000000000000`,
        to: tx.contractAddress ?? `0x00000000000000000000000000000000`,
        gas: tx.gas,
        hash: tx.hash,
        input: `0x`,
        nonce: 0,
        r: `0x`,
        s: `0x`,
        v: 0n,
        type: 'legacy',
        typeHex: `0x1`,
        value: tx.value,
      } satisfies Omit<
        GetTransactionReturnType<Config, ChainID>,
        'blockNumber' | 'blockHash' | 'transactionIndex'
      >;
    }

    return {
      chainId: 31337,
      gasPrice: 1n,
      blockNumber: tx.blockHeight,
      blockHash: block.hash,
      transactionIndex: block.transactions.findIndex((t) => t.hash === tx.hash),
      from: this.accountAddress ?? `0x00000000000000000000000000000000`,
      to: tx.contractAddress ?? `0x00000000000000000000000000000000`,
      gas: tx.gas,
      hash: tx.hash,
      input: `0x`,
      nonce: 0,
      r: `0x`,
      s: `0x`,
      v: 0n,
      type: 'legacy',
      typeHex: `0x1`,
      value: tx.value,
    } satisfies GetTransactionReturnType<Config, ChainID>;
  }

  async getTransaction(
    parameters: GetTransactionParameters<Config, ChainID>,
  ): Promise<GetTransactionReturnType<Config, ChainID>> {
    const txHash = parameters.hash;
    if (!txHash) {
      throw new Error('Transaction hash is required');
    }

    const tx = this.storage.transactions.get(txHash);
    if (!tx) {
      const pendingTx = this.storage.pendingTransactions.find(
        (t) => t.hash === txHash,
      );

      if (!pendingTx) {
        throw new Error('Transaction not found');
      }

      return this.transactionFromTransactionAndBlock(
        pendingTx,
        null,
      ) as GetTransactionReturnType<Config, ChainID>;
    }

    const block = this.storage.blocks[Number(tx.blockHeight)];
    return this.transactionFromTransactionAndBlock(tx, block);
  }

  blockHeightFromTag(blockTag: BlockTag = 'latest') {
    switch (blockTag) {
      case 'latest':
        return this.storage.pendingBlockHeight - 1n;
      case 'earliest':
        return 0n;
      case 'pending':
        return this.storage.pendingBlockHeight;
      case 'safe':
        if (this.storage.pendingBlockHeight > 30n) {
          return 0n;
        }

        return this.storage.pendingBlockHeight - 30n;

      case 'finalized':
        if (this.storage.pendingBlockHeight > 60n) {
          return 0n;
        }

        return this.storage.pendingBlockHeight - 60n;

      default:
        throw new Error('Unsupported blockTag');
    }
  }

  blockHeightFromGetBlockParameters<
    includeTransactions extends boolean = false,
    blockTag extends BlockTag = 'latest',
  >(
    parameters?: GetBlockParameters<
      includeTransactions,
      blockTag,
      Config,
      ChainID
    >,
  ) {
    const blockHeight = parameters?.blockNumber ?? null;
    if (blockHeight !== null) {
      return blockHeight;
    }

    return this.blockHeightFromTag(parameters?.blockTag ?? 'latest');
  }

  blockFromBlock(
    block: Block,
    includeTransactions?: true,
  ): GetBlockReturnType<true, BlockTag, Config, ChainID>;
  blockFromBlock(
    block: Block,
    includeTransactions?: false,
  ): GetBlockReturnType<false, BlockTag, Config, ChainID>;
  blockFromBlock(
    block: Block,
    includeTransactions?: boolean,
  ): GetBlockReturnType<boolean, BlockTag, Config, ChainID>;
  blockFromBlock(
    block: Block,
    includeTransactions: boolean = false,
  ): GetBlockReturnType<boolean, BlockTag, Config, ChainID> {
    const gas = block.transactions.reduce((acc, tx) => acc + tx.gas, 0n);
    const transactions = includeTransactions
      ? block.transactions.map((tx) =>
          this.transactionFromTransactionAndBlock(tx, block),
        )
      : block.transactions.map((tx) => tx.hash);

    return {
      chainId: 31337,
      baseFeePerGas: 1n,
      blobGasUsed: 0n,
      excessBlobGas: 0n,
      difficulty: 0n,
      extraData: `0x`,
      logsBloom: `0x`,
      gasLimit: gas,
      gasUsed: gas,
      miner: `0x`,
      mixHash: `0x`,
      number: block.height,
      hash: block.hash,
      nonce: `0x`,
      parentHash: `0x`,
      receiptsRoot: `0x`,
      sealFields: [],
      sha3Uncles: `0x`,
      size: 0n,
      stateRoot: `0x`,
      timestamp: block.timestamp,
      totalDifficulty: null,
      transactions,
      transactionsRoot: `0x`,
      uncles: [],
      withdrawals: [],
    } as const satisfies GetBlockReturnType<boolean, BlockTag, Config, ChainID>;
  }

  async getBlock<
    includeTransactions extends boolean = false,
    blockTag extends BlockTag = 'latest',
  >(
    parameters?: GetBlockParameters<
      includeTransactions,
      blockTag,
      Config,
      ChainID
    >,
  ): Promise<
    GetBlockReturnType<includeTransactions, blockTag, Config, ChainID>
  > {
    const height = this.blockHeightFromGetBlockParameters(parameters);
    const block = this.storage.blocks[Number(height)];

    if (!block) {
      throw new Error('Block not found');
    }

    return this.blockFromBlock(
      block,
      parameters?.includeTransactions,
    ) as GetBlockReturnType<includeTransactions, blockTag, Config, ChainID>;
  }

  async getBlockNumber<
    includeTransactions extends boolean = false,
    blockTag extends BlockTag = 'latest',
  >(
    parameters?: GetBlockParameters<
      includeTransactions,
      blockTag,
      Config,
      ChainID
    >,
  ) {
    return this.blockHeightFromTag(parameters?.blockTag);
  }

  // Mock specific methods

  private transactionCallBack: null | L1TransactionCallback = null;
  setTransactionCallback(transactionCallBack: null | L1TransactionCallback) {
    this.transactionCallBack = transactionCallBack;
  }

  mockWriteContractStorage<T>(key: symbol, value: T) {
    this.storage.contractStorage.set(key, value);
  }

  mockReadContractStorage<T>(key: symbol): T | undefined {
    return this.storage.contractStorage.get(key) as T | undefined;
  }

  mockWriteTransaction(tx: UnderlyingTransaction) {
    const hash = tx.hash();
    const txn = {
      hash,
      blockHeight: this.storage.pendingBlockHeight,
      transaction: tx,
      from: tx.from,
      to: tx.to,
      value: tx.value,
      gas: tx.gas,
    };

    this.storage.transactions.set(hash, txn);
    this.storage.pendingTransactions.push(txn);
  }

  mockAdvanceBlock() {
    const timestamp = BigInt(Math.floor(Date.now() / 1000));
    const height = this.storage.pendingBlockHeight;
    const hash = hashFromBlockParts(
      height,
      timestamp,
      this.storage.pendingTransactions,
    );

    const pendingTransactions = this.storage.pendingTransactions;
    this.storage.pendingBlockHeight++;
    this.storage.pendingTransactions = [];

    const newBlock: Block = {
      hash,
      height,
      timestamp,
      transactions: pendingTransactions,
    };

    this.storage.blocks.push(newBlock);

    for (const tx of newBlock.transactions) {
      this.storage.transactionToBlockMap.set(tx.hash, newBlock.height);
      if (this.transactionCallBack) {
        this.transactionCallBack.l1Transaction(tx.transaction);
      }
    }
  }
}

export interface MockL1State {
  balances: Map<`0x${string}`, bigint>;
  transactions: Map<`0x${string}`, L1Transaction>;
  accountAddress: `0x${string}` | null;
  pendingBlockHeight: bigint;
  pendingTransactions: L1Transaction[];
  transactionToBlockMap: Map<`0x${string}`, bigint>;
  blocks: Block[];

  contractStorage: Map<symbol, unknown>;
}

/**
 * useMockL1State is a custom React hook that initializes
 * and returns the state for the MockESPTokenContract.
 */
function useMockL1State(initialState: Partial<MockL1State> = {}) {
  const [state] = React.useState<MockL1State>({
    balances: initialState.balances ?? new Map(),
    transactions: initialState.transactions ?? new Map(),
    accountAddress: initialState.accountAddress ?? null,
    pendingBlockHeight: initialState.pendingBlockHeight ?? 1n,
    pendingTransactions: initialState.pendingTransactions ?? [],
    transactionToBlockMap: initialState.transactionToBlockMap ?? new Map(),
    blocks: initialState.blocks ?? [
      {
        hash: `0x0`,
        height: 0n,
        transactions: [],
        timestamp: 0n,
      },
    ],
    contractStorage: initialState.contractStorage ?? new Map(),
  });
  return state;
}

interface AutoAdvanceL1MethodsProps {
  interval?: number;
}

const AutoAdvanceL1Methods: React.FC<AutoAdvanceL1MethodsProps> = (props) => {
  const interval = props.interval ?? 12000;
  const l1Methods = React.useContext(L1MethodsContext);
  React.useEffect(() => {
    if (!(l1Methods instanceof MockL1MethodsImpl)) {
      return;
    }

    const intervalHandle = setInterval(() => {
      l1Methods.mockAdvanceBlock();
    }, interval);

    return () => clearInterval(intervalHandle);
  }, [l1Methods, interval]);

  return null;
};

/**
 * MockESPTokenContract is a React component that provides
 * a mock ESPTokenContract implementation via context for
 * testing and development purposes.
 *
 * It will overwrite the ESPTokenContractContext with a mock
 * implementation that simulates the behavior of an actual
 * ESPTokenContract.
 */
export const MockL1Methods: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const mockState = useMockL1State();
  const [l1Methods] = React.useState(new MockL1MethodsImpl(mockState));
  const accountAddress = React.useContext(RainbowKitAccountAddressContext);

  React.useEffect(() => {
    l1Methods.setAccountAddress(accountAddress as null | `0x${string}`);
    return () => {};
  }, [l1Methods, accountAddress]);

  return (
    <L1MethodsContext.Provider value={l1Methods}>
      <AutoAdvanceL1Methods />
      {children}
    </L1MethodsContext.Provider>
  );
};
