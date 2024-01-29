import { AsyncRetriever } from '../../AsyncRetriever';
import { TransactionSummary } from '../transaction_summary/types';
export interface RollUpDetail extends TransactionSummary {
}
export interface RollupDetailRequest {
    namespace: number;
    page: number;
    resultsPerPage: number;
}
export interface RollUpDetailAsyncRetriever extends AsyncRetriever<RollupDetailRequest, RollUpDetail[]> {
}
