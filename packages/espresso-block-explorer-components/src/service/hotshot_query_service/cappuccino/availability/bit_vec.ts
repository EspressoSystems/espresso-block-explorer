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
 *
 * This BitVec implementation mirrors the cargo crate's implementation of
 * bit vectors: https://crates.io/crates/bitvec.
 *
 * A BitVec in general represents an arbitrary length of bits that are used
 * as an indicator of an index of an object in a collection being present or
 * not.
 *
 * This is used specifically in Espresso's block chain to record which `Node`s
 * contributed to the vote in our produced `Leaf`s.  These votes are stored
 * as a `BitVec`.
 *
 * A simple example. Let's say we have 8 nodes and we want to represent whether
 * they have voted or not. This can easily be done with a single byte:
 * 0b10110111 would indicate that each individual bit represents one single
 * node in our system. So if we read the byte from the left, that would
 * indicate that Nodes 0, 2, 3, 5, 6, and 7 all voted, but not Nodes 1, or 4.
 *
 * The issue comes down to how many nodes are in the system. In our case there
 * can be thousands, but we don't have the ability to create an integer
 * of arbitrary bit size. So the BitVec crate in rust,
 * https://crates.io/crates/bitvec, allows for the creation of arbitrarily
 * sized bit vectors and slices. Now there are different considerations and
 * flexibilities offered by the bitvec. The two main ones are the ability to
 * specify the underlying storage integer size, and how the bitvec is meant to
 * be interpreted. In general, Javascript doesn't really have integer support
 * for things above 32 bits, everything becomes a float at that point, so we
 * really want to avoid integers that are too large. Additionally, bitvec
 * allows for the for the interpretation of bit read order as either MSB0 or
 * LSB0 (Most Significant Bit is zero, or Least Significant Bit is zero).
 * In the case of our previous example, b10110111 MSB0 would read this from
 * left-to-right in this notation representation, and LSB0 would read it from
 * right-to-left.
 *
 * Originally I had thought that this had to do with the Endianess of the
 * machine in question. However, that seems to have no bearing on this
 * implementation. Instead, it has to do with bit order within the
 * collection of numbers provided by the serialized BitVec. So if the bitvec
 * data comes down as [1, 2, 3, 4], then I consider it to have 4 buckets,
 * where each bucket is of the size of the BitVec width. In this case it should
 * be 16. So We would interpret this as [0b00000000_00000001,
 * 0b00000000_00000010, 0b00000000_00000011, 0b00000000_00000100], and the
 * order of the bits depends on whether we are reading from left-to-right for
 * each bucket, or right-to-left.
 *
 * The final piece has to do with how many bits we're actively attempting to
 * represent. If we were attempting to represent say, 100 nodes, that's not an
 * even multiple of any bit width we could use. As such, it means we're going
 * to have more bits than we need. So we need a mechanism that indicates how
 * many of the bits to use. that's where the length comes into play.
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

/**
 * determineBitWidthShift simply returns the power of two that corresponds to
 * known bit widths. This will be the number of bits it takes to shift in
 * order to get to the power of two that corresponds to the bit width.
 *
 * Example:
 *   8 -> 3
 *
 * Another way to think of this is that bit shifting can be thought of as
 * multiplying or dividing by 2 raised to the number of times the bit has
 * been shifted.  Since all valid bit widths are of the form of 2^n, we can
 * simply return n.  In other words, it can be thought of as taking the log
 * base 2 of the bit width.
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
