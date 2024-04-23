import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '../../../../convert/codec/convert';
import { numberCodec } from '../../../../convert/codec/number';

/**
 * CappuccinoAPIBitVecHead represents the head of a bit vector in the Cappuccino API.
 */
export class CappuccinoAPIBitVecHead {
  readonly width: number;
  readonly index: number;

  constructor(width: number, index: number) {
    this.width = width;
    this.index = index;
  }

  toJSON() {
    return cappuccinoAPIBitVecHeadCodec.encode(this);
  }
}

export class CappuccinoAPIBitVecHeadDecoder
  implements Converter<unknown, CappuccinoAPIBitVecHead>
{
  convert(input: unknown): CappuccinoAPIBitVecHead {
    assertRecordWithKeys(input, 'width', 'index');

    return new CappuccinoAPIBitVecHead(
      numberCodec.decode(input.width),
      numberCodec.decode(input.index),
    );
  }
}

export class CappuccinoAPIBitVecHeadEncoder
  implements Converter<CappuccinoAPIBitVecHead>
{
  convert(input: CappuccinoAPIBitVecHead) {
    return {
      width: numberCodec.encode(input.width),
      index: numberCodec.encode(input.index),
    };
  }
}

export class CappuccinoAPIBitVecHeadCodec extends TypeCheckingCodec<
  CappuccinoAPIBitVecHead,
  ReturnType<InstanceType<new () => CappuccinoAPIBitVecHeadEncoder>['convert']>
> {
  readonly encoder = new CappuccinoAPIBitVecHeadEncoder();
  readonly decoder = new CappuccinoAPIBitVecHeadDecoder();
}

export const cappuccinoAPIBitVecHeadCodec = new CappuccinoAPIBitVecHeadCodec();
