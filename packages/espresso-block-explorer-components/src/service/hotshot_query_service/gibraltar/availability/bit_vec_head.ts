import {
  Codec,
  Converter,
  InvalidInputError,
  isNumber,
  isRecord,
} from '../../../../convert/codec/convert';

export class GibraltarAPIBitVecHead {
  readonly width: number;
  readonly index: number;

  constructor(width: number, index: number) {
    this.width = width;
    this.index = index;
  }

  toJSON() {
    return gibraltarAPIBitVecHeadCodec.encode(this);
  }
}

export class GibraltarAPIBitVecHeadDecoder
  implements Converter<unknown, GibraltarAPIBitVecHead>
{
  convert(input: unknown): GibraltarAPIBitVecHead {
    if (
      !isRecord(input, 'width', isNumber) ||
      !isRecord(input, 'index', isNumber)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarAPIBitVecHead(input.width, input.index);
  }
}

export class GibraltarAPIBitVecHeadEncoder
  implements Converter<GibraltarAPIBitVecHead, unknown>
{
  convert(input: GibraltarAPIBitVecHead): unknown {
    return {
      width: input.width,
      index: input.index,
    };
  }
}

export class GibraltarAPIBitVecHeadCodec extends Codec<
  GibraltarAPIBitVecHead,
  unknown
> {
  readonly encoder = new GibraltarAPIBitVecHeadEncoder();
  readonly decoder = new GibraltarAPIBitVecHeadDecoder();
}

export const gibraltarAPIBitVecHeadCodec = new GibraltarAPIBitVecHeadCodec();
