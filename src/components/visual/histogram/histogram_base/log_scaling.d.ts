import { AffineTransform } from './affine_transform';
import { DimensionMapping } from './dimension_mapping';
/**
 * LogScaling is a utility class that provides an extended defintion for both
 * expoential and logarithmic scaling.  It is utilized to provide input
 * safe log function calls, and their inverses for properly scaling axises
 * of graphs.
 */
declare class LogScaling {
    private base;
    private c;
    constructor(base: number);
    /**
     * log represents a method that extends the Math.log function to allow for
     * negatives values, 0, and others.
     *
     * The math behind it is taken from the Wikipedia article on Logarithmic
     * scaling defined here:
     * https://en.wikipedia.org/wiki/Logarithmic_scale#Extensions
     */
    log(input: number): number;
    /**
     * exp is calculated to be the inverse of the `log` method defined above.
     *
     */
    exp(input: number): number;
}
/**
 * LogScalingMapping represents an extension to the AffineTransform which
 * first transforms the input space into using a logarithmic base.
 */
export declare class LogScalingMapping extends AffineTransform implements DimensionMapping {
    private originalInputMin;
    private originalInputMax;
    private scaling;
    constructor(originalInputMin: number, originalInputMax: number, outputMin: number, outputMax: number, scaling?: LogScaling);
    /**
     * transform will scale the input value utilizing the log scale provided, and
     * then perform an affine transform into the corresponding output space.
     */
    transform(input: number): number;
    /**
     * evenlySpacedGuideLines will return a list of numbers that represent an
     * evenly split distribution of samples in the logarithmic space.  The values
     * returned will be in the input space.
     */
    evenlySpacedGuideLines(guideLineCount: number): number[];
}
export {};
