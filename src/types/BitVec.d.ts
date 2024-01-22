import { BitVecHead } from './BitVecHead';
export declare class BitVec {
    readonly order: string;
    readonly head: BitVecHead;
    readonly bits: number;
    readonly data: number[];
    constructor(order: string, head: BitVecHead, bits: number, data: number[]);
    static inflate(value: unknown): BitVec;
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
export declare function isBitVec(a: unknown): a is BitVec;
