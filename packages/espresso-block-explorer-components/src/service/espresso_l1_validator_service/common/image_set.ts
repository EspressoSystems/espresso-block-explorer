import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import { RatioSet, ratioSetJSONCodec } from './ratio_set';

/**
 * ImageSet represents the same image represented in different sizes.
 */
export class ImageSet {
  constructor(
    public readonly small: RatioSet,
    public readonly large: RatioSet,
  ) {
    Object.freeze(this);
  }

  toJSON() {
    return imageSetJSONCodec.encode(this);
  }
}

class ImageSetJSONDecoder implements Converter<unknown, ImageSet> {
  convert(input: unknown): ImageSet {
    assertRecordWithKeys(input, '14x14', '24x24');

    return new ImageSet(
      ratioSetJSONCodec.decode(input['14x14']),
      ratioSetJSONCodec.decode(input['24x24']),
    );
  }
}

class ImageSetJSONEncoder implements Converter<ImageSet, unknown> {
  convert(input: ImageSet): unknown {
    return {
      '14x14': ratioSetJSONCodec.encode(input.small),
      '24x24': ratioSetJSONCodec.encode(input.large),
    };
  }
}

class ImageSetJSONCodec extends TypeCheckingCodec<ImageSet, unknown> {
  readonly encoder = new ImageSetJSONEncoder();
  readonly decoder = new ImageSetJSONDecoder();
}

export const imageSetJSONCodec = new ImageSetJSONCodec();
export const nullableImageSetJSONCodec = new NullCodec(
  new NullDecoder(imageSetJSONCodec),
  new NullEncoder(imageSetJSONCodec),
);
