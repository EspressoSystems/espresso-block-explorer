import { L1Methods } from '../../../contracts/l1/l1_interface';
import { fakeData } from '../../../../../../../../../../../src/models/config/storybook/wagmi';
import { default as React } from 'react';
import { BlockTag } from 'viem';
import { EstimateFeesPerGasReturnType, GetBalanceParameters, GetBlockParameters, GetBlockReturnType, GetTransactionParameters, GetTransactionReceiptParameters, GetTransactionReturnType } from 'wagmi/actions';
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
export interface L1TransactionCallback {
    l1Transaction(action: UnderlyingTransaction): void;
}
export declare class MockL1MethodsImpl implements L1Methods<Config, ChainID> {
    private storage;
    accountAddress: `0x${string}` | null;
    constructor(storage: MockL1State, accountAddress?: `0x${string}` | null);
    replaceAccountAddress(accountAddress: `0x${string}` | null): MockL1MethodsImpl;
    setAccountAddress(accountAddress: `0x${string}` | null): void;
    getBalance(parameters: GetBalanceParameters<Config>): Promise<{
        readonly decimals: 18;
        readonly formatted: string;
        readonly symbol: "ESP";
        readonly value: bigint;
    }>;
    estimateFeesPerGas(): Promise<EstimateFeesPerGasReturnType>;
    estimateGas(): Promise<bigint>;
    receiptFromTransactionAndBlock(tx: L1Transaction, block: Block): {
        readonly chainId: 31337;
        readonly blockHash: `0x${string}`;
        readonly blockNumber: bigint;
        readonly contractAddress: `0x${string}` | undefined;
        readonly cumulativeGasUsed: bigint;
        readonly effectiveGasPrice: 1n;
        readonly from: `0x${string}`;
        readonly gasUsed: bigint;
        readonly logs: [];
        readonly logsBloom: "0x";
        readonly status: "success";
        readonly to: `0x${string}`;
        readonly transactionHash: `0x${string}`;
        readonly transactionIndex: number;
        readonly type: "legacy";
    };
    getTransactionReceipt(parameters: GetTransactionReceiptParameters<Config, ChainID>): Promise<{
        readonly chainId: 31337;
        readonly blockHash: `0x${string}`;
        readonly blockNumber: bigint;
        readonly contractAddress: `0x${string}` | undefined;
        readonly cumulativeGasUsed: bigint;
        readonly effectiveGasPrice: 1n;
        readonly from: `0x${string}`;
        readonly gasUsed: bigint;
        readonly logs: [];
        readonly logsBloom: "0x";
        readonly status: "success";
        readonly to: `0x${string}`;
        readonly transactionHash: `0x${string}`;
        readonly transactionIndex: number;
        readonly type: "legacy";
    }>;
    transactionFromTransactionAndBlock(txn: L1Transaction, block: Block): GetTransactionReturnType<Config, ChainID>;
    transactionFromTransactionAndBlock(txn: L1Transaction, block: null): Omit<GetTransactionReturnType<Config, ChainID>, 'blockNumber' | 'blockHash' | 'transactionIndex'>;
    getTransaction(parameters: GetTransactionParameters<Config, ChainID>): Promise<GetTransactionReturnType<Config, ChainID>>;
    blockHeightFromTag(blockTag?: BlockTag): bigint;
    blockHeightFromGetBlockParameters<includeTransactions extends boolean = false, blockTag extends BlockTag = 'latest'>(parameters?: GetBlockParameters<includeTransactions, blockTag, Config, ChainID>): bigint;
    blockFromBlock(block: Block, includeTransactions?: true): GetBlockReturnType<true, BlockTag, Config, ChainID>;
    blockFromBlock(block: Block, includeTransactions?: false): GetBlockReturnType<false, BlockTag, Config, ChainID>;
    blockFromBlock(block: Block, includeTransactions?: boolean): GetBlockReturnType<boolean, BlockTag, Config, ChainID>;
    getBlock<includeTransactions extends boolean = false, blockTag extends BlockTag = 'latest'>(parameters?: GetBlockParameters<includeTransactions, blockTag, Config, ChainID>): Promise<GetBlockReturnType<includeTransactions, blockTag, Config, ChainID>>;
    getBlockNumber<includeTransactions extends boolean = false, blockTag extends BlockTag = 'latest'>(parameters?: GetBlockParameters<includeTransactions, blockTag, Config, ChainID>): Promise<bigint>;
    private transactionCallBack;
    setTransactionCallback(transactionCallBack: null | L1TransactionCallback): void;
    mockWriteContractStorage<T>(key: symbol, value: T): void;
    mockReadContractStorage<T>(key: symbol): T | undefined;
    mockWriteTransaction(tx: UnderlyingTransaction): void;
    mockAdvanceBlock(): void;
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
 * MockESPTokenContract is a React component that provides
 * a mock ESPTokenContract implementation via context for
 * testing and development purposes.
 *
 * It will overwrite the ESPTokenContractContext with a mock
 * implementation that simulates the behavior of an actual
 * ESPTokenContract.
 */
export declare const MockL1Methods: React.FC<React.PropsWithChildren>;
export {};
