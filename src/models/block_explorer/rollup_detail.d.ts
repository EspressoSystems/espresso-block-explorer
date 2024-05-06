import { TransactionSummaryEntry } from './transaction_summary';
import { AsyncRetriever } from '../../../../../../../../../../src/async/AsyncRetriever';

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
