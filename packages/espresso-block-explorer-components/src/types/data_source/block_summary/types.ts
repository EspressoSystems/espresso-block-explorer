import { SortDirection } from '../../../components/data/types';
import { AsyncRetriever } from '../../AsyncRetriever';
import { BlockDetail } from '../block_detail/types';

export type BlockSummary = Pick<
  BlockDetail,
  'height' | 'proposer' | 'size' | 'time' | 'transactions'
>;

export enum BlockSummaryColumn {
  height = 'height',
  proposer = 'proposer',
  size = 'size',
  time = 'time',
  transactions = 'transaction',
}

export interface BlockSummaryRequest {
  page: number;
  resultsPerPage: number;
  sortColumn: BlockSummaryColumn;
  sortDir: SortDirection;
}

export interface BlockSummaryAsyncRetriever
  extends AsyncRetriever<BlockSummaryRequest, BlockSummary[]> {}
