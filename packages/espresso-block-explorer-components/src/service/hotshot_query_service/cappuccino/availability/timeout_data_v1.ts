import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';

/**
 * TimeoutDataV1 represents the v1 evidence provided for a view timeout.
 */
export class TimeoutDataV1 {
  constructor(public readonly view: number) {}

  toJSON() {
    return timeoutDataV1Codec.encode(this);
  }
}

export class TimeoutDataV1Decoder implements Converter<unknown, TimeoutDataV1> {
  convert(input: unknown): TimeoutDataV1 {
    assertRecordWithKeys(input, 'view');

    return new TimeoutDataV1(numberCodec.decode(input.view));
  }
}

export class TimeoutDataV1Encoder implements Converter<TimeoutDataV1> {
  convert(input: TimeoutDataV1) {
    assertInstanceOf(input, TimeoutDataV1);

    return {
      view: numberCodec.encode(input.view),
    };
  }
}

export class TimeoutDataV1Codec extends TypeCheckingCodec<
  TimeoutDataV1,
  ReturnType<InstanceType<new () => TimeoutDataV1Encoder>['convert']>
> {
  readonly encoder = new TimeoutDataV1Encoder();
  readonly decoder = new TimeoutDataV1Decoder();
}

export const timeoutDataV1Codec = new TimeoutDataV1Codec();
