import { AsyncRetriever } from '../../../../../../../../../../src/async/async_retriever';
import { TransactionSummaryEntry } from './transaction_summary';
export interface RollUpDetailEntry extends TransactionSummaryEntry {
}
export interface RollupDetailRequest {
    namespace: number;
    height?: number;
    offset?: number;
    transactionsPerPage?: number;
}
export interface RollUpDetailAsyncRetriever extends AsyncRetriever<RollupDetailRequest, RollUpDetailEntry[]> {
}
