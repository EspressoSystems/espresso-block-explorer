import { AsyncRetriever } from '../../AsyncRetriever';
import { TransactionSummaryEntry } from '../transaction_summary/types';
export interface RollUpDetailEntry extends TransactionSummaryEntry {
}
export interface RollupDetailRequest {
    namespace: number;
    height?: number;
    offset?: number;
    transactionsPerPage: number;
}
export interface RollUpDetailAsyncRetriever extends AsyncRetriever<RollupDetailRequest, RollUpDetailEntry[]> {
}
