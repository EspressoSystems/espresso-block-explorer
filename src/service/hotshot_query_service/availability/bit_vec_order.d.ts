import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * BitVecOrder represents an enumeration of the BitVector's order.
 *
 * Based on the ReadMe of the repo of the current inspected version:
 * https://github.com/ferrilab/bitvec/blob/5fb855073acc2ed045094ed89d8daf8c765f0135/README.md
 * Msb0 represents Big Endianness, and Lsb0 represents Little Endianness.
 */
export declare abstract class BitVecOrder {
    static get lsb0(): BitVecOrder;
    static get msb0(): BitVecOrder;
    valueOf(): string;
    toJSON(): string;
}
declare class BitVecOrderDecoder implements Converter<unknown, BitVecOrder> {
    convert(input: unknown): BitVecOrder;
}
declare class BitVecOrderEncoder implements Converter<BitVecOrder, string> {
    convert(input: BitVecOrder): string;
}
declare class BitVecOrderCodec extends TypeCheckingCodec<BitVecOrder, string> {
    readonly encoder: BitVecOrderEncoder;
    readonly decoder: BitVecOrderDecoder;
}
export declare const bitVecOrderCodec: BitVecOrderCodec;
export {};
