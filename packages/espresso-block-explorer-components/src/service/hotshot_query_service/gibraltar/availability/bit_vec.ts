import {
  Codec,
  Converter,
  InvalidInputError,
  isNumber,
  isRecord,
  isString,
  isUnknown,
} from '../../../../convert/codec/convert';
import { isNumberArray } from '../../../../convert/codec/number';
import {
  GibraltarAPIBitVecHead,
  gibraltarAPIBitVecHeadCodec,
} from './bit_vec_head';

export class GibraltarAPIBitVec {
  readonly order: string;
  readonly head: GibraltarAPIBitVecHead;
  readonly bits: number;
  readonly data: number[];

  constructor(
    order: string,
    head: GibraltarAPIBitVecHead,
    bits: number,
    data: number[],
  ) {
    this.order = order;
    this.head = head;
    this.bits = bits;
    this.data = data;
  }

  toJSON() {
    return gibraltarAPIBitVecCodec.encode(this);
  }
}

export class GibraltarAPIBitVecDecoder
  implements Converter<unknown, GibraltarAPIBitVec>
{
  convert(input: unknown): GibraltarAPIBitVec {
    if (
      !isRecord(input, 'order', isString) ||
      !isRecord(input, 'head', isUnknown) ||
      !isRecord(input, 'bits', isNumber) ||
      !isRecord(input, 'data', isNumberArray)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarAPIBitVec(
      input.order,
      gibraltarAPIBitVecHeadCodec.decode(input.head),
      input.bits,
      input.data,
    );
  }
}

export class GibraltarAPIBitVecEncoder
  implements Converter<GibraltarAPIBitVec, unknown>
{
  convert(input: GibraltarAPIBitVec): unknown {
    return {
      order: input.order,
      head: gibraltarAPIBitVecHeadCodec.encode(input.head),
      bits: input.bits,
      data: input.data,
    };
  }
}

export class GibraltarAPIBitVecCodec extends Codec<
  GibraltarAPIBitVec,
  unknown
> {
  readonly encoder = new GibraltarAPIBitVecEncoder();
  readonly decoder = new GibraltarAPIBitVecDecoder();
}

export const gibraltarAPIBitVecCodec = new GibraltarAPIBitVecCodec();
