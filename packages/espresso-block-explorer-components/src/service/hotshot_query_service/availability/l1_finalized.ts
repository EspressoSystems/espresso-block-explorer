import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import { numberCodec } from '@/convert/codec/number';
import { stringCodec } from '@/convert/codec/string';

/**
 * AvailabilityL1Finalized represents the finalized block for an L1.
 */
export class AvailabilityL1Finalized {
  constructor(
    public readonly number: number,
    public readonly timestamp: string,
    public readonly hash: string,
  ) {}

  toJSON() {
    return availabilityL1FinalizedCodec.encode(this);
  }
}

export class AvailabilityL1FinalizedDecoder implements Converter<
  unknown,
  AvailabilityL1Finalized
> {
  convert(input: unknown): AvailabilityL1Finalized {
    assertRecordWithKeys(input, 'number', 'timestamp', 'hash');

    return new AvailabilityL1Finalized(
      numberCodec.decode(input.number),
      stringCodec.decode(input.timestamp),
      stringCodec.decode(input.hash),
    );
  }
}

export class AvailabilityL1FinalizedEncoder implements Converter<AvailabilityL1Finalized> {
  convert(input: AvailabilityL1Finalized) {
    assertInstanceOf(input, AvailabilityL1Finalized);

    return {
      number: numberCodec.encode(input.number),
      timestamp: stringCodec.encode(input.timestamp),
      hash: stringCodec.encode(input.hash),
    };
  }
}

export class AvailaibilityL1FinalizedCodec extends TypeCheckingCodec<
  AvailabilityL1Finalized,
  ReturnType<InstanceType<new () => AvailabilityL1FinalizedEncoder>['convert']>
> {
  readonly encoder = new AvailabilityL1FinalizedEncoder();
  readonly decoder = new AvailabilityL1FinalizedDecoder();
}

export const availabilityL1FinalizedCodec = new AvailaibilityL1FinalizedCodec();
export const nullableAvailabilityL1FinalizedCodec = new NullCodec(
  new NullDecoder(availabilityL1FinalizedCodec),
  new NullEncoder(availabilityL1FinalizedCodec),
);
