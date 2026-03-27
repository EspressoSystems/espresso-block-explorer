import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';

/**
 * ViewSyncFinalizeDataV1 data used for a finalize vote.
 */
export class ViewSyncFinalizeDataV1 {
  constructor(
    public readonly relay: number,
    public readonly round: number,
  ) {}

  toJSON() {
    return viewSyncFinalizeDataV1Codec.encode(this);
  }
}

export class ViewSyncFinalizeDataV1Decoder implements Converter<
  unknown,
  ViewSyncFinalizeDataV1
> {
  convert(input: unknown): ViewSyncFinalizeDataV1 {
    assertRecordWithKeys(input, 'relay', 'round');

    return new ViewSyncFinalizeDataV1(
      numberCodec.decode(input.relay),
      numberCodec.decode(input.round),
    );
  }
}

export class ViewSyncFinalizeDataV1Encoder implements Converter<ViewSyncFinalizeDataV1> {
  convert(input: ViewSyncFinalizeDataV1) {
    assertInstanceOf(input, ViewSyncFinalizeDataV1);

    return {
      relay: numberCodec.encode(input.relay),
      round: numberCodec.encode(input.round),
    };
  }
}

export class ViewSyncFinalizeDataV1Codec extends TypeCheckingCodec<
  ViewSyncFinalizeDataV1,
  ReturnType<InstanceType<new () => ViewSyncFinalizeDataV1Encoder>['convert']>
> {
  readonly encoder = new ViewSyncFinalizeDataV1Encoder();
  readonly decoder = new ViewSyncFinalizeDataV1Decoder();
}

export const viewSyncFinalizeDataV1Codec = new ViewSyncFinalizeDataV1Codec();
