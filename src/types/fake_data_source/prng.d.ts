export declare class PseudoRandomNumberGenerator {
    private state;
    constructor(seed?: number);
    nextInt(): number;
    nextFloat(): number;
    nextRange(start: number, end: number): number;
    fillBytes(n: number): ArrayBuffer;
}
