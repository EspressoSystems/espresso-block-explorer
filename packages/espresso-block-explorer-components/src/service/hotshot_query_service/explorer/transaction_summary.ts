import { assertInstanceOf } from '@/assert/assert';
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
} from '@/models/espresso/tagged_base64/tagged_base64';

type NamespaceID = number;
const namespaceIDArrayCodec = numberArrayCodec;

/**
 * ExplorerTransactionSummary is a class that represents the summary of a
 * a single transaction within the Espresso Chain.
 */
export class ExplorerTransactionSummary {
  constructor(
    public readonly hash: TaggedBase64,
    public readonly rollups: NamespaceID[],
    public readonly height: number,
    public readonly time: Date,
    public readonly offset: number,
    public readonly numTransactions: number,
  ) {}

  toJSON() {
    return explorerTransactionSummaryCodec.encode(this);
  }
}

class ExplorerTransactionSummaryDecoder implements Converter<
  unknown,
  ExplorerTransactionSummary
> {
  convert(input: unknown): ExplorerTransactionSummary {
    assertRecordWithKeys(
      input,
      'hash',
      'rollups',
      'height',
      'time',
      'offset',
      'num_transactions',
    );

    return new ExplorerTransactionSummary(
      taggedBase64Codec.decode(input.hash),
      namespaceIDArrayCodec.decode(input.rollups),
      numberCodec.decode(input.height),
      rfc3999DateCodec.decode(input.time),
      numberCodec.decode(input.offset),
      numberCodec.decode(input.num_transactions),
    );
  }
}

class ExplorerTransactionSummaryEncoder implements Converter<ExplorerTransactionSummary> {
  convert(input: ExplorerTransactionSummary) {
    assertInstanceOf(input, ExplorerTransactionSummary);

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

class ExplorerTransactionSummaryCodec extends TypeCheckingCodec<
  ExplorerTransactionSummary,
  ReturnType<
    InstanceType<new () => ExplorerTransactionSummaryEncoder>['convert']
  >
> {
  readonly encoder = new ExplorerTransactionSummaryEncoder();
  readonly decoder = new ExplorerTransactionSummaryDecoder();
}

export const explorerTransactionSummaryCodec =
  new ExplorerTransactionSummaryCodec();
export const explorerTransactionSummaryArrayCodec = new ArrayCodec(
  new ArrayDecoder(explorerTransactionSummaryCodec),
  new ArrayEncoder(explorerTransactionSummaryCodec),
);
