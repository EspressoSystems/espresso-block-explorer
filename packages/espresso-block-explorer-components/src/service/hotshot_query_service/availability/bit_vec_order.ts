import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import { InvalidTypeError } from '@/errors/invalid_type_error';

/**
 * BitVecOrder represents an enumeration of the BitVector's order.
 *
 * Based on the ReadMe of the repo of the current inspected version:
 * https://github.com/ferrilab/bitvec/blob/5fb855073acc2ed045094ed89d8daf8c765f0135/README.md
 * Msb0 represents Big Endianness, and Lsb0 represents Little Endianness.
 */
export abstract class BitVecOrder {
  static get lsb0(): BitVecOrder {
    return lsb0;
  }
  static get msb0(): BitVecOrder {
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
 * BitVecOrderLsb0 represents an enumeration of the BitVector's
 * order.
 *
 * Lsb0 indicates that the least significant bit is at index 0.
 *
 * Based on the ReadMe of the repo of the current inspected version:
 * https://github.com/ferrilab/bitvec/blob/5fb855073acc2ed045094ed89d8daf8c765f0135/README.md
 * Msb0 represents Big Endianness, and Lsb0 represents Little Endianness.
 */
class BitVecOrderLsb0 extends BitVecOrder {
  toString() {
    return kBitVecOrderLsb0String;
  }
}

const lsb0 = new BitVecOrderLsb0();

/**
 * BitVecOrderMsb0 represents an enumeration of the BitVector's
 * order.
 *
 * Msb0 indicates that the most significant bit is at index 0.
 *
 * Based on the ReadMe of the repo of the current inspected version:
 * https://github.com/ferrilab/bitvec/blob/5fb855073acc2ed045094ed89d8daf8c765f0135/README.md
 * Msb0 represents Big Endianness, and Lsb0 represents Little Endianness.
 */
class BitVecOrderMsb0 extends BitVecOrder {
  toString() {
    return kBitVecOrderMsb0String;
  }
}

const msb0 = new BitVecOrderMsb0();

class BitVecOrderDecoder implements Converter<unknown, BitVecOrder> {
  convert(input: unknown): BitVecOrder {
    if (typeof input !== 'string') {
      throw new InvalidTypeError(typeof input, 'string');
    }
    switch (input) {
      case kBitVecOrderLsb0String:
        return BitVecOrder.lsb0;

      case kBitVecOrderMsb0String:
        return BitVecOrder.msb0;

      default:
        throw new InvalidTypeError(input, 'BitVecOrder');
    }
  }
}

class BitVecOrderEncoder implements Converter<BitVecOrder, string> {
  convert(input: BitVecOrder) {
    return input.toString();
  }
}

class BitVecOrderCodec extends TypeCheckingCodec<BitVecOrder, string> {
  readonly encoder = new BitVecOrderEncoder();
  readonly decoder = new BitVecOrderDecoder();
}

export const bitVecOrderCodec = new BitVecOrderCodec();
