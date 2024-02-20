import { AsyncRetriever } from '../../AsyncRetriever';
import { TaggedBase64 } from '../../TaggedBase64';

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
