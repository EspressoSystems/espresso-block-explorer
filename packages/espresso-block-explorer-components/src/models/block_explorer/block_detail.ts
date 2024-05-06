import { AsyncRetriever } from '@/async/AsyncRetriever';
import { TaggedBase64 } from '../espresso/tagged_base64/TaggedBase64';
import MonetaryValue from './monetary_value';

export interface BlockDetailEntry {
  readonly hash: TaggedBase64;
  readonly height: number;
  readonly time: Date;
  readonly transactions: number;
  readonly proposer: ArrayBuffer;
  readonly recipient: ArrayBuffer;
  readonly size: number;
  readonly rewards: MonetaryValue[];
}

export interface BlockDetailAsyncRetriever
  extends AsyncRetriever<number, BlockDetailEntry> {}
