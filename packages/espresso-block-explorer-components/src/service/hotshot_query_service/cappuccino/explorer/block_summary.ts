import { assertInstanceOf } from '@/assert/assert';
import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec/array';
import { backwardsCompatibleHexArrayBufferCodec } from '@/convert/codec/array_buffer';
import {
  Codec,
  Converter,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { rfc3999DateCodec } from '@/convert/codec/date';
import { numberCodec } from '@/convert/codec/number';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/tagged_base64';

export class CappuccinoExplorerBlockSummary {
  readonly hash: TaggedBase64;
  readonly height: number;
  readonly proposerID: ArrayBuffer[];
  readonly numTransactions: number;
  readonly size: number;
  readonly time: Date;

  constructor(
    hash: TaggedBase64,
    height: number,
    proposerID: ArrayBuffer[],
    numTransactions: number,
    size: number,
    time: Date,
  ) {
    this.hash = hash;
    this.height = height;
    this.proposerID = proposerID;
    this.numTransactions = numTransactions;
    this.size = size;
    this.time = time;
  }

  toJSON() {
    return cappuccinoExplorerBlockSummaryCodec.encode(this);
  }
}

class CappuccinoExplorerBlockSummaryDecoder implements Converter<
  unknown,
  CappuccinoExplorerBlockSummary
> {
  convert(input: unknown): CappuccinoExplorerBlockSummary {
    assertRecordWithKeys(
      input,
      'hash',
      'height',
      'proposer_id',
      'num_transactions',
      'size',
      'time',
    );

    return new CappuccinoExplorerBlockSummary(
      taggedBase64Codec.decode(input.hash),
      numberCodec.decode(input.height),
      backwardsCompatibleHexArrayBufferCodec.decode(input.proposer_id),
      numberCodec.decode(input.num_transactions),
      numberCodec.decode(input.size),
      rfc3999DateCodec.decode(input.time),
    );
  }
}

class CappuccinoExplorerBlockSummaryEncoder implements Converter<
  CappuccinoExplorerBlockSummary,
  unknown
> {
  convert(input: CappuccinoExplorerBlockSummary): unknown {
    assertInstanceOf(input, CappuccinoExplorerBlockSummary);

    return {
      hash: taggedBase64Codec.encode(input.hash),
      height: numberCodec.encode(input.height),
      proposer_id: backwardsCompatibleHexArrayBufferCodec.encode(
        input.proposerID,
      ),
      num_transactions: numberCodec.encode(input.numTransactions),
      size: numberCodec.encode(input.size),
      time: rfc3999DateCodec.encode(input.time),
    };
  }
}

class CappuccinoExplorerBlockSummaryCodec extends Codec<
  CappuccinoExplorerBlockSummary,
  unknown
> {
  readonly encoder = new CappuccinoExplorerBlockSummaryEncoder();
  readonly decoder = new CappuccinoExplorerBlockSummaryDecoder();
}

export const cappuccinoExplorerBlockSummaryCodec =
  new CappuccinoExplorerBlockSummaryCodec();

export const cappuccinoExplorerBlockSummaryArrayCodec = new ArrayCodec(
  new ArrayDecoder(cappuccinoExplorerBlockSummaryCodec),
  new ArrayEncoder(cappuccinoExplorerBlockSummaryCodec),
);
