import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec/array';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/TaggedBase64';
import { CappuccinoAPIHeader, cappuccinoAPIHeaderCodec } from './block_header';

/**
 * CappuccinoDerivedBlockSummary represents a block summary in that is derived
 * from other primitives in the Cappuccino API.
 */
export class CappuccinoDerivedBlockSummary {
  readonly header: CappuccinoAPIHeader;
  readonly hash: TaggedBase64;
  readonly size: number;
  readonly num_transactions: number;
  readonly proposer_id: ArrayBuffer;

  constructor(
    header: CappuccinoAPIHeader,
    hash: TaggedBase64,
    size: number,
    num_transactions: number,
    proposer_id: ArrayBuffer,
  ) {
    this.header = header;
    this.hash = hash;
    this.size = size;
    this.num_transactions = num_transactions;
    this.proposer_id = proposer_id;
  }

  toJSON() {
    return cappuccinoDerivedBlockSummaryCodec.encode(this);
  }
}

export class CappuccinoDerivedBlockSummaryDecoder
  implements Converter<unknown, CappuccinoDerivedBlockSummary>
{
  convert(input: unknown): CappuccinoDerivedBlockSummary {
    assertRecordWithKeys(
      input,
      'header',
      'hash',
      'size',
      'num_transactions',
      'proposer_id',
    );

    return new CappuccinoDerivedBlockSummary(
      cappuccinoAPIHeaderCodec.decode(input.header),
      taggedBase64Codec.decode(input.hash),
      numberCodec.decode(input.size),
      numberCodec.decode(input.num_transactions),
      hexArrayBufferCodec.decode(input.proposer_id),
    );
  }
}

export class CappuccinoDerivedBlockSummaryEncoder
  implements Converter<CappuccinoDerivedBlockSummary>
{
  convert(input: CappuccinoDerivedBlockSummary) {
    return {
      header: cappuccinoAPIHeaderCodec.encode(input.header),
      hash: taggedBase64Codec.encode(input.hash),
      size: numberCodec.encode(input.size),
      num_transactions: numberCodec.encode(input.num_transactions),
      proposer_id: hexArrayBufferCodec.encode(input.proposer_id),
    };
  }
}

export class CappuccinoDerivedBlockSummaryCodec extends TypeCheckingCodec<
  CappuccinoDerivedBlockSummary,
  ReturnType<
    InstanceType<new () => CappuccinoDerivedBlockSummaryEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoDerivedBlockSummaryEncoder();
  readonly decoder = new CappuccinoDerivedBlockSummaryDecoder();
}

export const cappuccinoDerivedBlockSummaryCodec =
  new CappuccinoDerivedBlockSummaryCodec();

export const listCappuccinoDerivedBlockSummaryCodec = new ArrayCodec(
  new ArrayDecoder(cappuccinoDerivedBlockSummaryCodec),
  new ArrayEncoder(cappuccinoDerivedBlockSummaryCodec),
);
