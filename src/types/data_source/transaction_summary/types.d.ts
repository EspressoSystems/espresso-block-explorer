import { SortDirection } from '../../../components/data/types';
import { AsyncRetriever } from '../../AsyncRetriever';
import { TransactionDetail } from '../transaction_detail/types';
export declare enum TransactionSummaryColumn {
    hash = "hash",
    rollup = "rollup",
    block = "block",
    time = "time"
}
export type TransactionSummary = Pick<TransactionDetail, 'hash' | 'block' | 'time'> & {
    namespaces: number[];
};
export interface TransactionSummaryRequest {
    page: number;
    resultsPerPage: number;
    sortColumn: TransactionSummaryColumn;
    sortDir: SortDirection;
}
export interface TransactionSummaryAsyncRetriever extends AsyncRetriever<TransactionSummaryRequest, TransactionSummary[]> {
}
