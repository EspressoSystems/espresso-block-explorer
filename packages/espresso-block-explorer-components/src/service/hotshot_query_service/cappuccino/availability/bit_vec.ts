import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '../../../../convert/codec/convert';
import {
  numberArrayCodec,
  numberCodec,
} from '../../../../convert/codec/number';
import { stringCodec } from '../../../../convert/codec/string';
import {
  CappuccinoAPIBitVecHead,
  cappuccinoAPIBitVecHeadCodec,
} from './bit_vec_head';

/**
 * CappuccinoAPIBitVec represents a bit vector in the Cappuccino API.
 * It contains the order, head, bits, and data of the bit vector.
 */
export class CappuccinoAPIBitVec {
  readonly order: string;
  readonly head: CappuccinoAPIBitVecHead;
  readonly bits: number;
  readonly data: number[];

  constructor(
    order: string,
    head: CappuccinoAPIBitVecHead,
    bits: number,
    data: number[],
  ) {
    this.order = order;
    this.head = head;
    this.bits = bits;
    this.data = data;
  }

  toJSON() {
    return cappuccinoAPIBitVecCodec.encode(this);
  }
}

export class CappuccinoAPIBitVecDecoder
  implements Converter<unknown, CappuccinoAPIBitVec>
{
  convert(input: unknown): CappuccinoAPIBitVec {
    assertRecordWithKeys(input, 'order', 'head', 'bits', 'data');

    return new CappuccinoAPIBitVec(
      stringCodec.decode(input.order),
      cappuccinoAPIBitVecHeadCodec.decode(input.head),
      numberCodec.decode(input.bits),
      numberArrayCodec.decode(input.data),
    );
  }
}

export class CappuccinoAPIBitVecEncoder
  implements Converter<CappuccinoAPIBitVec>
{
  convert(input: CappuccinoAPIBitVec) {
    return {
      order: stringCodec.encode(input.order),
      head: cappuccinoAPIBitVecHeadCodec.encode(input.head),
      bits: numberCodec.encode(input.bits),
      data: numberArrayCodec.encode(input.data),
    };
  }
}

export class CappuccinoAPIBitVecCodec extends TypeCheckingCodec<
  CappuccinoAPIBitVec,
  ReturnType<InstanceType<new () => CappuccinoAPIBitVecEncoder>['convert']>
> {
  readonly encoder = new CappuccinoAPIBitVecEncoder();
  readonly decoder = new CappuccinoAPIBitVecDecoder();
}

export const cappuccinoAPIBitVecCodec = new CappuccinoAPIBitVecCodec();
