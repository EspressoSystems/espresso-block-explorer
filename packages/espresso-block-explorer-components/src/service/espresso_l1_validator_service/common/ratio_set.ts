import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import { nullableURLCodec, optionalURLCodec } from '@/convert/codec/url';

/**
 * RatioSet represents a set of URLs for different device pixel ratios.
 */
export class RatioSet {
  constructor(
    public readonly ratio1: null | URL,
    public readonly ratio2: null | URL,
    public readonly ratio3: null | URL,
  ) {
    Object.freeze(this);
  }

  toJSON() {
    return ratioSetJSONCodec.encode(this);
  }
}

class RatioSetJSONDecoder implements Converter<unknown, RatioSet> {
  convert(input: unknown): RatioSet {
    assertRecordWithKeys(input);

    return new RatioSet(
      optionalURLCodec.decode(input['@1x']) ?? null,
      optionalURLCodec.decode(input['@2x']) ?? null,
      optionalURLCodec.decode(input['@3x']) ?? null,
    );
  }
}

class RatioSetJSONEncoder implements Converter<RatioSet, unknown> {
  convert(input: RatioSet): unknown {
    return {
      '@1x': nullableURLCodec.encode(input.ratio1) ?? undefined,
      '@2x': nullableURLCodec.encode(input.ratio2) ?? undefined,
      '@3x': nullableURLCodec.encode(input.ratio3) ?? undefined,
    };
  }
}

class RatioSetJSONCodec extends TypeCheckingCodec<RatioSet, unknown> {
  readonly encoder = new RatioSetJSONEncoder();
  readonly decoder = new RatioSetJSONDecoder();
}

export const ratioSetJSONCodec = new RatioSetJSONCodec();
export const nullableRatioSetJSONCodec = new NullCodec(
  new NullDecoder(ratioSetJSONCodec),
  new NullEncoder(ratioSetJSONCodec),
);
