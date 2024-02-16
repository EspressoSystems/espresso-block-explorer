import { TaggedBase64 } from '../..';
import { AsyncRetriever } from '../../AsyncRetriever';

export interface BlockDetailEntry {
  readonly height: number;
  readonly time: Date;
  readonly transactions: number;
  readonly proposer: TaggedBase64;
  readonly size: number;

  // TODO: Sequencing Fees
}

export interface BlockDetailAsyncRetriever
  extends AsyncRetriever<number, BlockDetailEntry> {}
