import { default as React } from 'react';
/**
 * TransactionCommitContext represents the current hash for a Transaction.
 */
export declare const TransactionCommitContext: React.Context<ArrayBuffer>;
/**
 * TransactionOffsetContext represents the current offset for this Transaction
 * within a block.
 */
export declare const TransactionOffsetContext: React.Context<number>;
export interface TransactionDetailContentLoaderProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * TransactionDetailContent uses the retriever from the RetrieverContext
 * to retrieve the data using the hash retrieved from the
 * TransactionCommitContext
 */
export declare const TransactionDetailContentLoader: React.FC<TransactionDetailContentLoaderProps>;
