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
    /**
     * transform performs a linear translation between the relevant input max
     * and min, scaled to the output max and min.
     */
    transform(input: number): number;
    /**
     * evenlySpacedGuideLines will return a list of numbers that represent the
     * input range from min to max evenly spaced by the number of guide line
     * counts.
     */
    evenlySpacedGuideLines(guideLineCount: number): number[];
    static identity: AffineTransform;
}
