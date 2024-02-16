import { AsyncRetriever } from '../../AsyncRetriever';
import { TransactionDetailEntry } from '../transaction_detail/types';
export declare enum TransactionSummaryColumn {
    hash = "hash",
    rollup = "rollup",
    block = "block",
    time = "time"
}
export type TransactionSummaryEntry = Pick<TransactionDetailEntry, 'hash' | 'block' | 'time'> & {
    namespaces: number[];
};
export interface TransactionSummaryRequest {
    startAfterTransaction?: ArrayBuffer;
    transactionsPerPage: number;
}
export interface TransactionSummaryAsyncRetriever extends AsyncRetriever<TransactionSummaryRequest, TransactionSummaryEntry[]> {
}
