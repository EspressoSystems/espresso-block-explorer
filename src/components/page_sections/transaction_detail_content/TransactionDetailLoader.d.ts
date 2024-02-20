import React from 'react';
import { TransactionDetailAsyncRetriever, TransactionDetailEntry } from '../../../types/data_source/transaction_detail/types';
/**
 * TransactionCommitContext represents the current hash for a Transaction.
 */
export declare const TransactionCommitContext: React.Context<ArrayBuffer>;
/**
 * TransactionOffsetContext represents the current offset for this Transaction
 * within a block.
 */
export declare const TransactionOffsetContext: React.Context<number>;
/**
 * TransactionDetailContext is a context that indicates the current
 * TransactionDetail to make available to the descendants of the component
 * tree.
 */
export declare const TransactionDetailContext: React.Context<TransactionDetailEntry>;
/**
 * RetrieverContext is a context for retrieving the TransactionDetail
 * response.
 */
export declare const TransactionDetailAsyncRetrieverContext: React.Context<TransactionDetailAsyncRetriever>;
export interface TransactionDetailContentLoaderProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * TransactionDetailContent uses the retriever from the RetrieverContext
 * to retrieve the data using the hash retrieved from the
 * TransactionCommitContext
 */
export declare const TransactionDetailContentLoader: React.FC<TransactionDetailContentLoaderProps>;
