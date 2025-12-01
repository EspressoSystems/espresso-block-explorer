import { AsyncRetriever } from '@/async/AsyncRetriever';
import { TransactionSummaryEntry } from './transaction_summary';

export interface RollUpDetailEntry extends TransactionSummaryEntry {}

export interface RollupDetailRequest {
  namespace: number;
  height?: number;
  offset?: number;
  transactionsPerPage?: number;
}

export interface RollUpDetailAsyncRetriever extends AsyncRetriever<
  RollupDetailRequest,
  RollUpDetailEntry[]
> {}
