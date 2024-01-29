import { TaggedBase64 } from '../..';
import { AsyncRetriever } from '../../AsyncRetriever';

export interface TransactionTreeData {
  readonly namespace: number;
  readonly data: ArrayBuffer;
}

export interface TransactionDetail {
  readonly block: number;
  readonly index: number;
  readonly total: number;
  readonly size: number;
  readonly hash: ArrayBuffer;
  readonly time: Date;
  readonly sender: TaggedBase64;

  readonly tree: TransactionTreeData[];
  // TODO: Sequencing Fees
}

export interface TransactionDetailAsyncRetriever
  extends AsyncRetriever<ArrayBuffer, TransactionDetail> {}
