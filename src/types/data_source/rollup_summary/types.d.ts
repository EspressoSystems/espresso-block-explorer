import { AsyncRetriever } from '../../AsyncRetriever';
export interface RollUpSummary {
    readonly namespace: number;
    readonly transactions: number;
}
export interface RollUpSummaryAsyncRetriever extends AsyncRetriever<number, RollUpSummary[]> {
}
