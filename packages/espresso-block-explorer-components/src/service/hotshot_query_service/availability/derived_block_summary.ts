import { assertInstanceOf } from '@/assert/assert';
import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec/array';
import { backwardsCompatibleHexArrayBufferCodec } from '@/convert/codec/array_buffer_hex';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/tagged_base64';
import {
  AvailabilityAPIHeader,
  availabilityAPIHeaderCodec,
} from './block_header';

/**
 AvailabilityDerivedBlockSummary represents a block summary in that is derived
 * from other primitives in the Availability API.
 */
export class AvailabilityDerivedBlockSummary {
  constructor(
    public readonly header: AvailabilityAPIHeader,
    public readonly hash: TaggedBase64,
    public readonly size: number,
    public readonly num_transactions: number,
    public readonly proposer_id: ArrayBuffer[],
  ) {}

  toJSON() {
    return availabilityDerivedBlockSummaryCodec.encode(this);
  }
}

export class AvailabilityDerivedBlockSummaryDecoder implements Converter<
  unknown,
  AvailabilityDerivedBlockSummary
> {
  convert(input: unknown): AvailabilityDerivedBlockSummary {
    assertRecordWithKeys(
      input,
      'header',
      'hash',
      'size',
      'num_transactions',
      'proposer_id',
    );

    return new AvailabilityDerivedBlockSummary(
      availabilityAPIHeaderCodec.decode(input.header),
      taggedBase64Codec.decode(input.hash),
      numberCodec.decode(input.size),
      numberCodec.decode(input.num_transactions),
      backwardsCompatibleHexArrayBufferCodec.decode(input.proposer_id),
    );
  }
}

export class AvailabilityDerivedBlockSummaryEncoder implements Converter<AvailabilityDerivedBlockSummary> {
  convert(input: AvailabilityDerivedBlockSummary) {
    assertInstanceOf(input, AvailabilityDerivedBlockSummary);

    return {
      header: availabilityAPIHeaderCodec.encode(input.header),
      hash: taggedBase64Codec.encode(input.hash),
      size: numberCodec.encode(input.size),
      num_transactions: numberCodec.encode(input.num_transactions),
      proposer_id: backwardsCompatibleHexArrayBufferCodec.encode(
        input.proposer_id,
      ),
    };
  }
}

export class AvailabilityDerivedBlockSummaryCodec extends TypeCheckingCodec<
  AvailabilityDerivedBlockSummary,
  ReturnType<
    InstanceType<new () => AvailabilityDerivedBlockSummaryEncoder>['convert']
  >
> {
  readonly encoder = new AvailabilityDerivedBlockSummaryEncoder();
  readonly decoder = new AvailabilityDerivedBlockSummaryDecoder();
}

export const availabilityDerivedBlockSummaryCodec =
  new AvailabilityDerivedBlockSummaryCodec();

export const listAvailabilityDerivedBlockSummaryCodec = new ArrayCodec(
  new ArrayDecoder(availabilityDerivedBlockSummaryCodec),
  new ArrayEncoder(availabilityDerivedBlockSummaryCodec),
);
