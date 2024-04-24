import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec/array';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { rfc3999DateCodec } from '@/convert/codec/date';
import { numberArrayCodec, numberCodec } from '@/convert/codec/number';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/TaggedBase64';

type NamespaceID = number;
const namespaceIDArrayCodec = numberArrayCodec;

export class CappuccinoExplorerTransactionSummary {
  readonly hash: TaggedBase64;
  readonly rollups: NamespaceID[];
  readonly height: number;
  readonly time: Date;
  readonly offset: number;
  readonly numTransactions: number;

  constructor(
    hash: TaggedBase64,
    rollups: NamespaceID[],
    height: number,
    time: Date,
    offset: number,
    numTransactions: number,
  ) {
    this.hash = hash;
    this.rollups = rollups;
    this.height = height;
    this.time = time;
    this.offset = offset;
    this.numTransactions = numTransactions;
  }

  toJSON() {
    return cappuccinoExplorerTransactionSummaryCodec.encode(this);
  }
}

class CappuccinoExplorerTransactionSummaryDecoder
  implements Converter<unknown, CappuccinoExplorerTransactionSummary>
{
  convert(input: unknown): CappuccinoExplorerTransactionSummary {
    assertRecordWithKeys(
      input,
      'hash',
      'rollups',
      'height',
      'time',
      'offset',
      'num_transactions',
    );

    return new CappuccinoExplorerTransactionSummary(
      taggedBase64Codec.decode(input.hash),
      namespaceIDArrayCodec.decode(input.rollups),
      numberCodec.decode(input.height),
      rfc3999DateCodec.decode(input.time),
      numberCodec.decode(input.offset),
      numberCodec.decode(input.num_transactions),
    );
  }
}

class CappuccinoExplorerTransactionSummaryEncoder
  implements Converter<CappuccinoExplorerTransactionSummary>
{
  convert(input: CappuccinoExplorerTransactionSummary) {
    return {
      hash: taggedBase64Codec.encode(input.hash),
      rollups: namespaceIDArrayCodec.encode(input.rollups),
      height: numberCodec.encode(input.height),
      time: rfc3999DateCodec.encode(input.time),
      offset: numberCodec.encode(input.offset),
      num_transactions: numberCodec.encode(input.numTransactions),
    };
  }
}

class CappuccinoExplorerTransactionSummaryCodec extends TypeCheckingCodec<
  CappuccinoExplorerTransactionSummary,
  ReturnType<
    InstanceType<
      new () => CappuccinoExplorerTransactionSummaryEncoder
    >['convert']
  >
> {
  readonly encoder = new CappuccinoExplorerTransactionSummaryEncoder();
  readonly decoder = new CappuccinoExplorerTransactionSummaryDecoder();
}

export const cappuccinoExplorerTransactionSummaryCodec =
  new CappuccinoExplorerTransactionSummaryCodec();
export const cappuccinoExplorerTransactionSummaryArrayCodec = new ArrayCodec(
  new ArrayDecoder(cappuccinoExplorerTransactionSummaryCodec),
  new ArrayEncoder(cappuccinoExplorerTransactionSummaryCodec),
);
