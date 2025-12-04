import { AsyncRetriever } from '@/async/async_retriever';

export interface RollUpSummaryEntry {
  readonly namespace: number;
  readonly transactions: number;
}

export interface RollUpSummaryAsyncRetriever extends AsyncRetriever<
  void,
  RollUpSummaryEntry[]
> {}
