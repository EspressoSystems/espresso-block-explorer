export declare class BitVecHead {
    readonly width: number;
    readonly index: number;
    constructor(width: number, index: number);
    static inflate(value: unknown): BitVecHead;
    toJSON(): {
        width: number;
        index: number;
    };
}
export declare function isBitVecHead(a: unknown): a is BitVecHead;
