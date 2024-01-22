import { AsyncRetriever } from '../../AsyncRetriever';
import { RollUpEntry } from '../rollup_entry/types';
export interface RollUpSummary {
    readonly rollup: RollUpEntry;
    readonly transactions: number;
}
export interface RollUpSummaryAsyncRetriever extends AsyncRetriever<number, RollUpSummary> {
}
