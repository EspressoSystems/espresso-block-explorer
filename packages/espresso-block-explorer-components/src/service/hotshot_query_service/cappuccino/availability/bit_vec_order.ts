import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import InvalidTypeError from '@/errors/InvalidTypeError';

/**
 * CappuccinoAPIBitVecOrder represents an enumeration of the BitVector's order.
 *
 * Based on the ReadMe of the repo of the current inspected version:
 * https://github.com/ferrilab/bitvec/blob/5fb855073acc2ed045094ed89d8daf8c765f0135/README.md
 * Msb0 represents Big Endianness, and Lsb0 represents Little Endianness.
 */
export abstract class CappuccinoAPIBitVecOrder {
  static get lsb0(): CappuccinoAPIBitVecOrder {
    return lsb0;
  }
  static get msb0(): CappuccinoAPIBitVecOrder {
    return msb0;
  }

  valueOf() {
    return this.toString();
  }

  toJSON() {
    return this.toString();
  }
}

const kBitVecOrderLsb0String = 'bitvec::order::Lsb0';
const kBitVecOrderMsb0String = 'bitvec::order::Msb0';

/**
 * CappuccinoAPIBitVecOrderLsb0 represents an enumeration of the BitVector's
 * order.
 *
 * Lsb0 indicates that the least significant bit is at index 0.
 *
 * Based on the ReadMe of the repo of the current inspected version:
 * https://github.com/ferrilab/bitvec/blob/5fb855073acc2ed045094ed89d8daf8c765f0135/README.md
 * Msb0 represents Big Endianness, and Lsb0 represents Little Endianness.
 */
class CappuccinoAPIBitVecOrderLsb0 extends CappuccinoAPIBitVecOrder {
  toString() {
    return kBitVecOrderLsb0String;
  }
}

const lsb0 = new CappuccinoAPIBitVecOrderLsb0();

/**
 * CappuccinoAPIBitVecOrderMsb0 represents an enumeration of the BitVector's
 * order.
 *
 * Msb0 indicates that the most significant bit is at index 0.
 *
 * Based on the ReadMe of the repo of the current inspected version:
 * https://github.com/ferrilab/bitvec/blob/5fb855073acc2ed045094ed89d8daf8c765f0135/README.md
 * Msb0 represents Big Endianness, and Lsb0 represents Little Endianness.
 */
class CappuccinoAPIBitVecOrderMsb0 extends CappuccinoAPIBitVecOrder {
  toString() {
    return kBitVecOrderMsb0String;
  }
}

const msb0 = new CappuccinoAPIBitVecOrderMsb0();

class CappuccinoAPIBitVecOrderDecoder implements Converter<
  unknown,
  CappuccinoAPIBitVecOrder
> {
  convert(input: unknown): CappuccinoAPIBitVecOrder {
    if (typeof input !== 'string') {
      throw new InvalidTypeError(typeof input, 'string');
    }
    switch (input) {
      case kBitVecOrderLsb0String:
        return CappuccinoAPIBitVecOrder.lsb0;

      case kBitVecOrderMsb0String:
        return CappuccinoAPIBitVecOrder.msb0;

      default:
        throw new InvalidTypeError(input, 'CappuccinoAPIBitVecOrder');
    }
  }
}

class CappuccinoAPIBitVecOrderEncoder implements Converter<
  CappuccinoAPIBitVecOrder,
  string
> {
  convert(input: CappuccinoAPIBitVecOrder) {
    return input.toString();
  }
}

class CappuccinoAPIBitVecOrderCodec extends TypeCheckingCodec<
  CappuccinoAPIBitVecOrder,
  string
> {
  readonly encoder = new CappuccinoAPIBitVecOrderEncoder();
  readonly decoder = new CappuccinoAPIBitVecOrderDecoder();
}

export const cappuccinoAPIBitVecOrderCodec =
  new CappuccinoAPIBitVecOrderCodec();
