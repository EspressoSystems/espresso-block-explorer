import { AsyncRetriever } from '../../../../../../../../../../src/async/AsyncRetriever';

export interface RollUpSummaryEntry {
    readonly namespace: number;
    readonly transactions: number;
}
export interface RollUpSummaryAsyncRetriever extends AsyncRetriever<void, RollUpSummaryEntry[]> {
}
