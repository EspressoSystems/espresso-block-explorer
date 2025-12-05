/**
 * AffineTransform is a simple class that represents a linear transformation
 * from one range to another.
 */
export declare class AffineTransform {
    readonly inputMin: number;
    readonly inputMax: number;
    readonly outputMin: number;
    readonly outputMax: number;
    private inputRangeInv;
    private outputRange;
    constructor(inputMin: number, inputMax: number, outputMin: number, outputMax: number);
    transform(input: number): number;
    static identity: AffineTransform;
}
