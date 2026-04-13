import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { nullableNumberCodec, numberCodec } from '@/convert/codec/number';

/**
 * ViewSyncFinalizeDataV2 data used for a finalize vote.
 */
export class ViewSyncFinalizeDataV2 {
  constructor(
    public readonly relay: number,
    public readonly round: number,
    public readonly epoch: null | number,
  ) {}

  toJSON() {
    return viewSyncFinalizeDataV2Codec.encode(this);
  }
}

export class ViewSyncFinalizeDataV2Decoder implements Converter<
  unknown,
  ViewSyncFinalizeDataV2
> {
  convert(input: unknown): ViewSyncFinalizeDataV2 {
    assertRecordWithKeys(input, 'relay', 'round', 'epoch');

    return new ViewSyncFinalizeDataV2(
      numberCodec.decode(input.relay),
      numberCodec.decode(input.round),
      nullableNumberCodec.decode(input.epoch),
    );
  }
}

export class ViewSyncFinalizeDataV2Encoder implements Converter<ViewSyncFinalizeDataV2> {
  convert(input: ViewSyncFinalizeDataV2) {
    assertInstanceOf(input, ViewSyncFinalizeDataV2);

    return {
      relay: numberCodec.encode(input.relay),
      round: numberCodec.encode(input.round),
      epoch: nullableNumberCodec.encode(input.epoch),
    };
  }
}

export class ViewSyncFinalizeDataV2Codec extends TypeCheckingCodec<
  ViewSyncFinalizeDataV2,
  ReturnType<InstanceType<new () => ViewSyncFinalizeDataV2Encoder>['convert']>
> {
  readonly encoder = new ViewSyncFinalizeDataV2Encoder();
  readonly decoder = new ViewSyncFinalizeDataV2Decoder();
}

export const viewSyncFinalizeDataV2Codec = new ViewSyncFinalizeDataV2Codec();
