import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';

/**
 * BitVecHead represents the head of a bit vector in the Availability API.
 */
export class BitVecHead {
  constructor(
    public readonly width: number,
    public readonly index: number,
  ) {}

  toJSON() {
    return bitVecHeadCodec.encode(this);
  }
}

export class BitVecHeadDecoder implements Converter<unknown, BitVecHead> {
  convert(input: unknown): BitVecHead {
    assertRecordWithKeys(input, 'width', 'index');

    return new BitVecHead(
      numberCodec.decode(input.width),
      numberCodec.decode(input.index),
    );
  }
}

export class BitVecHeadEncoder implements Converter<BitVecHead> {
  convert(input: BitVecHead) {
    assertInstanceOf(input, BitVecHead);

    return {
      width: numberCodec.encode(input.width),
      index: numberCodec.encode(input.index),
    };
  }
}

export class BitVecHeadCodec extends TypeCheckingCodec<
  BitVecHead,
  ReturnType<InstanceType<new () => BitVecHeadEncoder>['convert']>
> {
  readonly encoder = new BitVecHeadEncoder();
  readonly decoder = new BitVecHeadDecoder();
}

export const bitVecHeadCodec = new BitVecHeadCodec();
