import { AsyncRetriever } from '../../AsyncRetriever';
import { TransactionSummaryEntry } from '../transaction_summary/types';
export interface RollUpDetailEntry extends TransactionSummaryEntry {
}
export interface RollupDetailRequest {
    namespace: number;
    page: number;
    resultsPerPage: number;
}
export interface RollUpDetailAsyncRetriever extends AsyncRetriever<RollupDetailRequest, RollUpDetailEntry[]> {
}
