import { L1Methods } from '../../../contracts/l1/l1_interface';
import { fakeData } from '../../../../../../../../../../../src/models/config/storybook/wagmi';
import { default as React } from 'react';
import { BlockTag } from 'viem';
import { GetBalanceParameters, GetBlockParameters, GetBlockReturnType, GetTransactionParameters, GetTransactionReceiptParameters, GetTransactionReturnType } from 'wagmi/actions';
type Config = typeof fakeData;
type ChainID = Config['chains'][0]['id'];
interface UnderlyingTransaction {
    contractAddress: undefined | `0x${string}`;
    from: `0x${string}`;
    to: `0x${string}`;
    value: bigint;
    gas: bigint;
    hash(): `0x${string}`;
}
interface Transaction {
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
    transactions: Transaction[];
}
export declare class MockL1MethodsImpl implements L1Methods<Config, ChainID> {
    private storage;
    readonly accountAddress: `0x${string}` | null;
    constructor(storage: MockL1State, accountAddress?: `0x${string}` | null);
    replaceAccountAddress(accountAddress: `0x${string}` | null): MockL1MethodsImpl;
    getBalance(parameters: GetBalanceParameters<Config>): Promise<{
        decimals: number;
        formatted: string;
        symbol: string;
        value: bigint;
    }>;
    estimateGas(): Promise<bigint>;
    receiptFromTransactionAndBlock(tx: Transaction, block: Block): {
        chainId: number;
        blockHash: `0x${string}`;
        blockNumber: bigint;
        contractAddress: `0x${string}` | undefined;
        cumulativeGasUsed: bigint;
        cumulativeGasPrice: bigint;
        effectiveGasPrice: bigint;
        from: `0x${string}`;
        gasUsed: bigint;
        logs: never[];
        logsBloom: string;
        status: number;
        to: `0x${string}`;
        transactionHash: `0x${string}`;
        transactionIndex: number;
        type: number;
    };
    getTransactionReceipt(parameters: GetTransactionReceiptParameters<Config, ChainID>): Promise<{
        chainId: number;
        blockHash: `0x${string}`;
        blockNumber: bigint;
        contractAddress: `0x${string}` | undefined;
        cumulativeGasUsed: bigint;
        cumulativeGasPrice: bigint;
        effectiveGasPrice: bigint;
        from: `0x${string}`;
        gasUsed: bigint;
        logs: never[];
        logsBloom: string;
        status: number;
        to: `0x${string}`;
        transactionHash: `0x${string}`;
        transactionIndex: number;
        type: number;
    }>;
    transactionFromTransactionAndBlock(txn: Transaction, block: Block): GetTransactionReturnType<Config, ChainID>;
    transactionFromTransactionAndBlock(txn: Transaction, block: null): Omit<GetTransactionReturnType<Config, ChainID>, 'blockNumber' | 'blockHash' | 'transactionIndex'>;
    getTransaction(parameters: GetTransactionParameters<Config, ChainID>): Promise<Omit<GetTransactionReturnType<import('wagmi').Config<readonly [import('viem').Chain, ...import('viem').Chain[]], Record<number, import('wagmi').Transport<string, Record<string, any>, import('viem').EIP1193RequestFn>>, readonly import('wagmi').CreateConnectorFn[]>, number>, "blockNumber" | "blockHash" | "transactionIndex">>;
    blockHeightFromTag(blockTag?: BlockTag): bigint;
    blockHeightFromGetBlockParameters<includeTransactions extends boolean = false, blockTag extends BlockTag = 'latest'>(parameters?: GetBlockParameters<includeTransactions, blockTag, Config, ChainID>): bigint;
    blockFromBlock(block: Block, includeTransactions?: true): GetBlockReturnType<true, BlockTag, Config, ChainID>;
    blockFromBlock(block: Block, includeTransactions?: false): GetBlockReturnType<false, BlockTag, Config, ChainID>;
    blockFromBlock(block: Block, includeTransactions?: boolean): GetBlockReturnType<boolean, BlockTag, Config, ChainID>;
    getBlock<includeTransactions extends boolean = false, blockTag extends BlockTag = 'latest'>(parameters?: GetBlockParameters<includeTransactions, blockTag, Config, ChainID>): Promise<{
        number: bigint | null;
        nonce: `0x${string}` | null;
        size: bigint;
        hash: `0x${string}` | null;
        timestamp: bigint;
        blobGasUsed: bigint;
        gasUsed: bigint;
        logsBloom: `0x${string}` | null;
        baseFeePerGas: bigint | null;
        difficulty: bigint;
        excessBlobGas: bigint;
        extraData: import('viem').Hex;
        gasLimit: bigint;
        miner: import('abitype').Address;
        mixHash: import('viem').Hash;
        parentBeaconBlockRoot?: `0x${string}` | undefined;
        parentHash: import('viem').Hash;
        receiptsRoot: import('viem').Hex;
        sealFields: import('viem').Hex[];
        sha3Uncles: import('viem').Hash;
        stateRoot: import('viem').Hash;
        totalDifficulty: bigint | null;
        transactionsRoot: import('viem').Hash;
        uncles: import('viem').Hash[];
        withdrawals?: import('viem').Withdrawal[] | undefined | undefined;
        withdrawalsRoot?: `0x${string}` | undefined;
        transactions: `0x${string}`[] | ({
            type: "legacy";
            value: bigint;
            input: import('viem').Hex;
            s: import('viem').Hex;
            from: import('abitype').Address;
            r: import('viem').Hex;
            to: import('abitype').Address | null;
            nonce: number;
            hash: import('viem').Hash;
            v: bigint;
            gas: bigint;
            blobVersionedHashes?: undefined | undefined;
            gasPrice: bigint;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            chainId?: number | undefined;
            yParity?: undefined | undefined;
            typeHex: import('viem').Hex | null;
            blockNumber: bigint | null;
            blockHash: `0x${string}` | null;
            transactionIndex: number | null;
        } | {
            type: "eip2930";
            value: bigint;
            input: import('viem').Hex;
            s: import('viem').Hex;
            from: import('abitype').Address;
            r: import('viem').Hex;
            to: import('abitype').Address | null;
            nonce: number;
            hash: import('viem').Hash;
            v: bigint;
            gas: bigint;
            blobVersionedHashes?: undefined | undefined;
            gasPrice: bigint;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
            accessList: import('viem').AccessList;
            authorizationList?: undefined | undefined;
            chainId: number;
            yParity: number;
            typeHex: import('viem').Hex | null;
            blockNumber: bigint | null;
            blockHash: `0x${string}` | null;
            transactionIndex: number | null;
        } | {
            type: "eip1559";
            value: bigint;
            input: import('viem').Hex;
            s: import('viem').Hex;
            from: import('abitype').Address;
            r: import('viem').Hex;
            to: import('abitype').Address | null;
            nonce: number;
            hash: import('viem').Hash;
            v: bigint;
            gas: bigint;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            accessList: import('viem').AccessList;
            authorizationList?: undefined | undefined;
            chainId: number;
            yParity: number;
            typeHex: import('viem').Hex | null;
            blockNumber: bigint | null;
            blockHash: `0x${string}` | null;
            transactionIndex: number | null;
        } | {
            type: "eip4844";
            value: bigint;
            input: import('viem').Hex;
            s: import('viem').Hex;
            from: import('abitype').Address;
            r: import('viem').Hex;
            to: import('abitype').Address | null;
            nonce: number;
            hash: import('viem').Hash;
            v: bigint;
            gas: bigint;
            blobVersionedHashes: readonly import('viem').Hex[];
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            accessList: import('viem').AccessList;
            authorizationList?: undefined | undefined;
            chainId: number;
            yParity: number;
            typeHex: import('viem').Hex | null;
            blockNumber: bigint | null;
            blockHash: `0x${string}` | null;
            transactionIndex: number | null;
        } | {
            type: "eip7702";
            value: bigint;
            input: import('viem').Hex;
            s: import('viem').Hex;
            from: import('abitype').Address;
            r: import('viem').Hex;
            to: import('abitype').Address | null;
            nonce: number;
            hash: import('viem').Hash;
            v: bigint;
            gas: bigint;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            accessList: import('viem').AccessList;
            authorizationList: import('viem').SignedAuthorizationList;
            chainId: number;
            yParity: number;
            typeHex: import('viem').Hex | null;
            blockNumber: bigint | null;
            blockHash: `0x${string}` | null;
            transactionIndex: number | null;
        })[];
        chainId: number;
    }>;
    getBlockNumber<includeTransactions extends boolean = false, blockTag extends BlockTag = 'latest'>(parameters?: GetBlockParameters<includeTransactions, blockTag, Config, ChainID>): Promise<bigint>;
    mockWriteContractStorage<T>(key: symbol, value: T): void;
    mockReadContractStorage<T>(key: symbol): T | undefined;
    mockWriteTransaction(tx: UnderlyingTransaction): void;
    mockAdvanceBlock(): void;
}
export interface MockL1State {
    balances: Map<`0x${string}`, bigint>;
    transactions: Map<`0x${string}`, Transaction>;
    accountAddress: `0x${string}` | null;
    pendingBlockHeight: bigint;
    pendingTransactions: Transaction[];
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
