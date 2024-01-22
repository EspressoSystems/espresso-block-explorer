import { AsyncRetriever } from '../../AsyncRetriever';
import { RollUpEntry } from '../rollup_entry/types';
import { TransactionSummary } from '../transaction_summary/types';
export interface RollUpDetail {
    readonly rollup: RollUpEntry;
    readonly transactions: number;
    readonly transactions_summary: TransactionSummary[];
}
export interface RollUpDetailAsyncRetriever extends AsyncRetriever<number, RollUpDetail> {
}
