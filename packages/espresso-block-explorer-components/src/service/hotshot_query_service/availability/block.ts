import { assertInstanceOf } from '@/assert/assert';
import {
  Codec,
  Converter,
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
import { AvailabilityAPIPayload, availabilityAPIPayloadCodec } from './payload';

/**
 * AvailabilityAPIBlock represents a block in the Availability API.
 */
export class AvailabilityAPIBlock {
  constructor(
    public readonly header: AvailabilityAPIHeader,
    public readonly payload: AvailabilityAPIPayload,
    public readonly hash: TaggedBase64,
    public readonly size: number,
    public readonly numTransactions: number,
  ) {}

  toJSON() {
    return availabilityAPIBlockCodec.encode(this);
  }
}

export class AvailabilityAPIBlockDecode implements Converter<
  unknown,
  AvailabilityAPIBlock
> {
  convert(input: unknown): AvailabilityAPIBlock {
    assertRecordWithKeys(
      input,
      'header',
      'payload',
      'hash',
      'size',
      'num_transactions',
    );

    return new AvailabilityAPIBlock(
      availabilityAPIHeaderCodec.decode(input.header),
      availabilityAPIPayloadCodec.decode(input.payload),
      taggedBase64Codec.decode(input.hash),
      numberCodec.decode(input.size),
      numberCodec.decode(input.num_transactions),
    );
  }
}

export class AvailabilityAPIBlockEncoder implements Converter<
  AvailabilityAPIBlock,
  unknown
> {
  convert(input: AvailabilityAPIBlock): unknown {
    assertInstanceOf(input, AvailabilityAPIBlock);

    return {
      header: availabilityAPIHeaderCodec.encode(input.header),
      payload: availabilityAPIPayloadCodec.encode(input.payload),
      hash: taggedBase64Codec.encode(input.hash),
      size: numberCodec.encode(input.size),
      num_transactions: numberCodec.encode(input.numTransactions),
    };
  }
}

export class AvailabilityAPIBlockCodec extends Codec<
  AvailabilityAPIBlock,
  unknown
> {
  readonly encoder = new AvailabilityAPIBlockEncoder();
  readonly decoder = new AvailabilityAPIBlockDecode();
}

export const availabilityAPIBlockCodec = new AvailabilityAPIBlockCodec();
