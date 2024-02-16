import { AsyncRetriever } from '../../AsyncRetriever';
export interface RollUpSummaryEntry {
    readonly namespace: number;
    readonly transactions: number;
}
export interface RollUpSummaryAsyncRetriever extends AsyncRetriever<number, RollUpSummaryEntry[]> {
}
