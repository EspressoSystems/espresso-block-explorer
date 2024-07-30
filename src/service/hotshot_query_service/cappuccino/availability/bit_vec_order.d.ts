import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';

/**
 * CappuccinoAPIBitVecOrder represents an enumeration of the BitVector's order.
 *
 * Based on the ReadMe of the repo of the current inspected version:
 * https://github.com/ferrilab/bitvec/blob/5fb855073acc2ed045094ed89d8daf8c765f0135/README.md
 * Msb0 represents Big Endianness, and Lsb0 represents Little Endianness.
 */
export declare abstract class CappuccinoAPIBitVecOrder {
    static get lsb0(): CappuccinoAPIBitVecOrder;
    static get msb0(): CappuccinoAPIBitVecOrder;
    valueOf(): string;
    toJSON(): string;
}
declare class CappuccinoAPIBitVecOrderDecoder implements Converter<unknown, CappuccinoAPIBitVecOrder> {
    convert(input: unknown): CappuccinoAPIBitVecOrder;
}
declare class CappuccinoAPIBitVecOrderEncoder implements Converter<CappuccinoAPIBitVecOrder, string> {
    convert(input: CappuccinoAPIBitVecOrder): string;
}
declare class CappuccinoAPIBitVecOrderCodec extends TypeCheckingCodec<CappuccinoAPIBitVecOrder, string> {
    readonly encoder: CappuccinoAPIBitVecOrderEncoder;
    readonly decoder: CappuccinoAPIBitVecOrderDecoder;
}
export declare const cappuccinoAPIBitVecOrderCodec: CappuccinoAPIBitVecOrderCodec;
export {};
