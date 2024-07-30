import { ArrayCodec } from '../../../../../../../../../../../../src/convert/codec';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { CappuccinoAPIBitVecHead } from './bit_vec_head';
import { CappuccinoAPIBitVecOrder } from './bit_vec_order';

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
export declare class CappuccinoAPIBitVec implements Iterable<boolean> {
    readonly order: CappuccinoAPIBitVecOrder;
    readonly head: CappuccinoAPIBitVecHead;
    readonly bits: number;
    readonly data: number[];
    constructor(order: CappuccinoAPIBitVecOrder, head: CappuccinoAPIBitVecHead, bits: number, data: number[]);
    private getBitVecIndexIterable;
    [Symbol.iterator](): Iterator<boolean>;
    toJSON(): {
        order: string;
        head: {
            width: number;
            index: number;
        };
        bits: number;
        data: number[];
    };
}
export declare class CappuccinoAPIBitVecDecoder implements Converter<unknown, CappuccinoAPIBitVec> {
    convert(input: unknown): CappuccinoAPIBitVec;
}
export declare class CappuccinoAPIBitVecEncoder implements Converter<CappuccinoAPIBitVec> {
    convert(input: CappuccinoAPIBitVec): {
        order: string;
        head: {
            width: number;
            index: number;
        };
        bits: number;
        data: number[];
    };
}
export declare class CappuccinoAPIBitVecCodec extends TypeCheckingCodec<CappuccinoAPIBitVec, ReturnType<InstanceType<new () => CappuccinoAPIBitVecEncoder>['convert']>> {
    readonly encoder: CappuccinoAPIBitVecEncoder;
    readonly decoder: CappuccinoAPIBitVecDecoder;
}
export declare const cappuccinoAPIBitVecCodec: CappuccinoAPIBitVecCodec;
export declare const cappuccinoAPIBitVecArrayCodec: ArrayCodec<CappuccinoAPIBitVec, {
    order: string;
    head: {
        width: number;
        index: number;
    };
    bits: number;
    data: number[];
}>;
