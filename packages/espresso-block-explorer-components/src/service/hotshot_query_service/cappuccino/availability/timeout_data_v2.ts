import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { nullableNumberCodec, numberCodec } from '@/convert/codec/number';

/**
 * TimeoutDataV2 represents the v2 evidence provided for a view timeout.
 */
export class TimeoutDataV2 {
  constructor(
    public readonly view: number,
    public readonly epoch: null | number,
  ) {}

  toJSON() {
    return timeoutDataV2Codec.encode(this);
  }
}

export class TimeoutDataV2Decoder implements Converter<unknown, TimeoutDataV2> {
  convert(input: unknown): TimeoutDataV2 {
    assertRecordWithKeys(input, 'view', 'epoch');

    return new TimeoutDataV2(
      numberCodec.decode(input.view),
      nullableNumberCodec.decode(input.epoch),
    );
  }
}

export class TimeoutDataV2Encoder implements Converter<TimeoutDataV2> {
  convert(input: TimeoutDataV2) {
    assertInstanceOf(input, TimeoutDataV2);

    return {
      view: numberCodec.encode(input.view),
      epoch: nullableNumberCodec.encode(input.epoch),
    };
  }
}

export class TimeoutDataV2Codec extends TypeCheckingCodec<
  TimeoutDataV2,
  ReturnType<InstanceType<new () => TimeoutDataV2Encoder>['convert']>
> {
  readonly encoder = new TimeoutDataV2Encoder();
  readonly decoder = new TimeoutDataV2Decoder();
}

export const timeoutDataV2Codec = new TimeoutDataV2Codec();
