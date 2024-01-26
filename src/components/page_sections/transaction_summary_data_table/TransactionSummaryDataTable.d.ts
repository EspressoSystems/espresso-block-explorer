import React from 'react';
import { TransactionSummaryAsyncRetriever } from '../../../types/data_source/transaction_summary/types';
export interface TransactionSummary {
    hash: ArrayBuffer;
    rollups: number[];
    block: number;
    time: Date;
}
/**
 * RetrieverContext is a React Context that holds a reference to a
 * TransactionSummaryAsyncRetriever
 */
export declare const RetrieverContext: React.Context<TransactionSummaryAsyncRetriever>;
interface TransactionsSummaryProps {
}
/**
 * TransactionsSummary component shows the Transaction Summary Data Table
 * with fetched data.
 */
declare const TransactionsSummary: React.FC<TransactionsSummaryProps>;
export default TransactionsSummary;
