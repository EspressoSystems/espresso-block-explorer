import React from 'react';
import { TransactionSummaryAsyncRetriever } from '../../../types/data_source/transaction_summary/types';
export interface TransactionSummary {
    hash: ArrayBuffer;
    rollups: number[];
    block: number;
    time: Date;
}
export declare const RetrieverContext: React.Context<TransactionSummaryAsyncRetriever>;
declare const TransactionsSummary: React.FC;
export default TransactionsSummary;
