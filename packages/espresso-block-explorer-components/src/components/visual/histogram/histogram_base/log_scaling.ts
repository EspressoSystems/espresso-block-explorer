import { AffineTransform } from './affine_transform';
import { DimensionMapping } from './dimension_mapping';

/**
 * LogScaling is a utility class that provides an extended defintion for both
 * expoential and logarithmic scaling.  It is utilized to provide input
 * safe log function calls, and their inverses for properly scaling axises
 * of graphs.
 */
class LogScaling {
  private c: number;
  constructor(private base: number) {
    this.c = 1 / Math.log(base);
  }

  /**
   * log represents a method that extends the Math.log function to allow for
   * negatives values, 0, and others.
   *
   * The math behind it is taken from the Wikipedia article on Logarithmic
   * scaling defined here:
   * https://en.wikipedia.org/wiki/Logarithmic_scale#Extensions
   */
  log(input: number): number {
    const sign = input >= 0 ? 1 : -1;
    const value = Math.log(1 + Math.abs(input / this.c)) / Math.log(this.base);

    return sign * value;
  }

  /**
   * exp is calculated to be the inverse of the `log` method defined above.
   *
   */
  exp(input: number): number {
    const sign = input >= 0 ? 1 : -1;
    const exp = Math.pow(this.base, input);

    const value = (exp - 1) * this.c;

    return sign * value;
  }
}

/**
 * LogScalingMapping represents an extension to the AffineTransform which
 * first transforms the input space into using a logarithmic base.
 */
export class LogScalingMapping
  extends AffineTransform
  implements DimensionMapping
{
  constructor(
    private originalInputMin: number,
    private originalInputMax: number,
    outputMin: number,
    outputMax: number,
    private scaling = new LogScaling(2),
  ) {
    super(
      scaling.log(originalInputMin),
      scaling.log(originalInputMax),
      outputMin,
      outputMax,
    );
  }

  /**
   * transform will scale the input value utilizing the log scale provided, and
   * then perform an affine transform into the corresponding output space.
   */
  transform(input: number): number {
    // We want to Scale from inputMin to inputMax utilizing a log based
    // scaling factor.
    // We also need to avoid log values less than `1`, as that would be
    // negative.
    // Let's perform two separate transforms.  One to map the values starting
    // from a minimum of `1`, and then we can scale the resulting value in
    // a logarithmic way.  This allows us to avoid the issues with displaying
    // a logirthmic value.

    return super.transform(this.scaling.log(input));
  }

  /**
   * evenlySpacedGuideLines will return a list of numbers that represent an
   * evenly split distribution of samples in the logarithmic space.  The values
   * returned will be in the input space.
   */
  evenlySpacedGuideLines(guideLineCount: number): number[] {
    const lines: number[] = [];
    const inputMax = this.originalInputMax;
    const inputMin = this.originalInputMin;

    const lMax = this.scaling.log(inputMax);
    const lMin = this.scaling.log(inputMin);
    const step = (lMax - lMin) / (guideLineCount - 1);

    for (let i = 0; i < guideLineCount; i++) {
      const value = lMin + step * i;
      lines.push(this.scaling.exp(value));
    }
    return lines;
  }
}
