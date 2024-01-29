import React from 'react';
import { TransactionDetailAsyncRetriever } from '../../../types/data_source/transaction_detail/types';
/**
 * TransactionCommitContext represents the current hash for a Transaction.
 */
export declare const TransactionCommitContext: React.Context<ArrayBuffer>;
/**
 * TransactionSubHeading represents a sub heading for the Transaction Detail
 * Header.
 */
export declare const TransactionSubHeading: React.FC;
/**
 * RetrieverContext is a context for retrieving the TransactionDetail
 * response.
 */
export declare const RetrieverContext: React.Context<TransactionDetailAsyncRetriever>;
export interface TransactionDetailContentProps {
}
/**
 * TransactionDetailContent uses the retriever from the RetrieverContext
 * to retrieve the data using the hash retrieved from the
 * TransactionCommitContext
 */
declare const TransactionDetailContent: React.FC<TransactionDetailContentProps>;
export default TransactionDetailContent;
