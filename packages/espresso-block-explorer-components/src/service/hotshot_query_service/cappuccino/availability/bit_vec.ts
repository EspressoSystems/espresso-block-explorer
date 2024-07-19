import { assert, assertInstanceOf } from '@/assert/assert';
import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { numberArrayCodec, numberCodec } from '@/convert/codec/number';
import UnimplementedError from '@/errors/UnimplementedError';
import { mapIterable } from '@/functional/functional';
import {
  CappuccinoAPIBitVecHead,
  cappuccinoAPIBitVecHeadCodec,
} from './bit_vec_head';
import {
  CappuccinoAPIBitVecOrder,
  cappuccinoAPIBitVecOrderCodec,
} from './bit_vec_order';

/**
 * CappuccinoAPIBitVec represents a bit vector in the Cappuccino API.
 * It contains the order, head, bits, and data of the bit vector.
 */
export class CappuccinoAPIBitVec implements Iterable<boolean> {
  readonly order: CappuccinoAPIBitVecOrder;
  readonly head: CappuccinoAPIBitVecHead;
  readonly bits: number;
  readonly data: number[];

  constructor(
    order: CappuccinoAPIBitVecOrder,
    head: CappuccinoAPIBitVecHead,
    bits: number,
    data: number[],
  ) {
    this.order = order;
    this.head = head;
    this.bits = bits;
    this.data = data;
  }

  private getBitVecIndexIterable(): Iterable<BitVecIndex> {
    if (this.order === CappuccinoAPIBitVecOrder.lsb0) {
      return new Lsb0BitVecIndexIterable(this.head.width, this.bits);
    }

    return new Msb0BitVecINdexIterable(this.head.width, this.bits);
  }

  [Symbol.iterator](): Iterator<boolean> {
    const indexIterable = this.getBitVecIndexIterable();
    return mapIterable(indexIterable, (index) =>
      readBitAtIndex(this.data, index),
    )[Symbol.iterator]();
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
      cappuccinoAPIBitVecOrderCodec.decode(input.order),
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
    assertInstanceOf(input, CappuccinoAPIBitVec);

    return {
      order: cappuccinoAPIBitVecOrderCodec.encode(input.order),
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
export const cappuccinoAPIBitVecArrayCodec = new ArrayCodec(
  new ArrayDecoder(cappuccinoAPIBitVecCodec),
  new ArrayEncoder(cappuccinoAPIBitVecCodec),
);

function readBitAtIndex(data: number[], index: BitVecIndex): boolean {
  return ((data[index.bucket] >> index.bitOffset) & 0x01) === 0x01;
}

// An index indicates the position of the specific bit within the BitVec.
// As such, it is a combination of the bucket, and the bit offset into that
// bucket.
class BitVecIndex {
  readonly bucket: number;
  readonly bitOffset: number;

  constructor(bucket: number, bitOffset: number) {
    this.bucket = bucket;
    this.bitOffset = bitOffset;
  }
}

// The header indicates the width of the storage structures.  This **should**
// correspond to the typical bit-widths of 8, 16, 32, 64, or even 128.
// Javascript can only support up to 32 bits in this case, sadly, and even then
// the it would be the signed variant.

// The order indicates which bit is the first bit in each bucket of the bit vector.
// This doesn't align with Endianess representations.
// This is most noticeable when we are dealing with bit width of 8.  In Endianess
// the order of these bits is the same as far as system architecture is concerned.

// I'm not certain how Endianess is handled within these structures.

// 0b 00000000 00001000

/**
 * determineBitWidthShift simply returns the power of two that corresponds to
 * known bit widths.
 */
function determineBitWidthShift(bitWidth: number): number {
  assert(
    bitWidth === 8 || bitWidth === 16 || bitWidth === 32,
    'bit width should be a power of two that is supported',
  );

  switch (bitWidth) {
    case 8:
      return 3;

    case 16:
      return 4;

    case 32:
      return 5;

    default:
      throw new UnimplementedError();
  }
}

/**
 * Lsb0BitVecIndexIterator is an iterator that iterates over the bits of a bit
 * vector in least significant bit order.
 */
class Lsb0BitVecIndexIterator implements Iterator<BitVecIndex> {
  private readonly totalBits: number;

  // Utility properties for quicker computations
  private readonly bitWidthMask: number;
  private readonly bitWidthShift: number;
  // We are starting at the back, and moving towards the front

  private offset: number = 0;

  constructor(bitWidth: number, totalBits: number) {
    this.totalBits = totalBits;

    const bitWidthShift = determineBitWidthShift(bitWidth);
    this.bitWidthMask = bitWidth - 1;
    this.bitWidthShift = bitWidthShift;
  }

  next(): IteratorResult<BitVecIndex> {
    if (this.offset >= this.totalBits) {
      return { done: true, value: undefined };
    }

    const bucket = this.offset >> this.bitWidthShift;
    const bitOffset = this.offset & this.bitWidthMask;

    this.offset += 1;
    return { done: false, value: new BitVecIndex(bucket, bitOffset) };
  }
}

class Lsb0BitVecIndexIterable implements Iterable<BitVecIndex> {
  private readonly bitWidth: number;
  private readonly totalBits: number;

  constructor(bitWidth: number, totalBits: number) {
    this.bitWidth = bitWidth;
    this.totalBits = totalBits;
  }

  [Symbol.iterator](): Iterator<BitVecIndex> {
    return new Lsb0BitVecIndexIterator(this.bitWidth, this.totalBits);
  }
}

/**
 * Msb0BitVecIndexIterator is an iterator that iterates over the bits of a bit
 * vector in most significant bit order.
 */
class Msb0BitVecIndexIterator implements Iterator<BitVecIndex> {
  // So we are starting at the back, and we are going to go to 0.
  private readonly bitWidth: number;
  private readonly totalBits: number;

  // Utility properties for quicker computations
  private readonly bitWidthMask: number;
  private readonly bitWidthShift: number;
  // We are starting at the back, and moving towards the front

  private offset: number = 0;

  constructor(bitWidth: number, totalBits: number) {
    this.bitWidth = bitWidth;
    this.totalBits = totalBits;

    const bitWidthShift = determineBitWidthShift(bitWidth);
    this.bitWidthMask = bitWidth - 1;
    this.bitWidthShift = bitWidthShift;
  }

  next(): IteratorResult<BitVecIndex> {
    if (this.offset >= this.totalBits) {
      return { done: true, value: undefined };
    }

    const bucket = this.offset >> this.bitWidthShift;
    const bitOffset = this.bitWidth - 1 - (this.offset & this.bitWidthMask);

    this.offset += 1;
    return { done: false, value: new BitVecIndex(bucket, bitOffset) };
  }
}

class Msb0BitVecINdexIterable implements Iterable<BitVecIndex> {
  private readonly bitWidth: number;
  private readonly totalBits: number;

  constructor(bitWidth: number, totalBits: number) {
    this.bitWidth = bitWidth;
    this.totalBits = totalBits;
  }

  [Symbol.iterator](): Iterator<BitVecIndex> {
    return new Msb0BitVecIndexIterator(this.bitWidth, this.totalBits);
  }
}
