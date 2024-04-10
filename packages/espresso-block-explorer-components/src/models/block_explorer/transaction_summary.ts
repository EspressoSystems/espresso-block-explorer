import { AsyncRetriever } from '../../async/AsyncRetriever';
import { TransactionDetailEntry } from './transaction_detail';

export enum TransactionSummaryColumn {
  hash = 'hash',
  rollup = 'rollup',
  block = 'block',
  time = 'time',
}

export type TransactionSummaryEntry = Pick<
  TransactionDetailEntry,
  'hash' | 'block' | 'time'
> & { offset: number; namespaces: number[] };

export interface TransactionSummaryRequest {
  startAtBlock?: number;
  offset?: number;
  transactionsPerPage?: number;
}

export interface TransactionSummaryAsyncRetriever
  extends AsyncRetriever<
    TransactionSummaryRequest,
    TransactionSummaryEntry[]
  > {}
