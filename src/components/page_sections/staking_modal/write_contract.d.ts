import { AsyncSnapshot } from '../../../../../../../../../../../src/components/data/async_data/AsyncSnapshot';
import { default as React } from 'react';
import { Config } from 'wagmi';
import { getTransaction, getTransactionReceipt } from 'wagmi/actions';
export declare const TransactionHashText: React.FC;
export declare const TransactionReceiptText: React.FC;
export declare const TransactionText: React.FC;
export declare function createWriteContractAsyncHandler(wagmiConfig: Config, state: WriteContractAsyncState, setState: (state: WriteContractAsyncState) => void, trigger: () => Promise<TransactionHash>, onSuccess?: (hash: TransactionHash, receipt: TransactionReceipt, tx: Transaction) => void): () => Promise<void>;
export type TransactionHash = `0x${string}`;
export type TransactionReceipt = Awaited<ReturnType<typeof getTransactionReceipt>>;
export type Transaction = Awaited<ReturnType<typeof getTransaction>>;
/**
 * We want to handle generic writeContract operations in more-or-less the
 * same way.  That way our processing logic can be shared, and have a
 * consistent unified representation that makes it easier to follow.
 */
export declare class WriteContractAsyncState {
    readonly transactionHash: AsyncSnapshot<TransactionHash>;
    readonly receipt: AsyncSnapshot<TransactionReceipt>;
    readonly transaction: AsyncSnapshot<Transaction>;
    private constructor();
    static withNothing(): WriteContractAsyncState;
    private with;
    withTransactionHash(transactionHash: AsyncSnapshot<TransactionHash>): WriteContractAsyncState;
    withTransactionReceipt(receipt: AsyncSnapshot<TransactionReceipt>): WriteContractAsyncState;
    withTransaction(transaction: AsyncSnapshot<Transaction>): WriteContractAsyncState;
}
export declare const WriteContractAsyncStateContext: React.Context<WriteContractAsyncState>;
export declare const WriteContractAsyncComponentIdleContext: React.Context<React.FC<{}>>;
export declare const WriteContractAsyncSetStateContext: React.Context<React.Dispatch<React.SetStateAction<WriteContractAsyncState>>>;
export declare const WriteContractAsyncComponentInvokingContext: React.Context<React.FC<{}>>;
export declare const WriteContractAsyncComponentReceiptContext: React.Context<React.FC<{}>>;
export declare const WriteContractAsyncComponentTransactionContext: React.Context<React.FC<{}>>;
interface WriteContractAsyncProps {
    initialState?: WriteContractAsyncState;
}
export declare const WriteContractAsync: React.FC<WriteContractAsyncProps>;
export {};
