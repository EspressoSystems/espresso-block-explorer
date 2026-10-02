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
 * roundToNiceValue rounds a number to the closest of 1, 2 or 5 times a power
 * of ten (0.5, 2, 10, 5000…) on a log scale, or down to one when `down` is
 * set. Zero and negative numbers become 0.
 */
export function roundToNiceValue(value: number, down = false): number {
  if (!(value > 0)) {
    return 0;
  }

  const power = 10 ** Math.floor(Math.log10(value));
  const fraction = value / power;
  // The log-scale midpoints between 1, 2, 5 and 10, or the values themselves.
  const [to2, to5, to10] = down
    ? [2, 5, 10]
    : [Math.SQRT2, Math.sqrt(10), Math.sqrt(50)];
  const nice =
    fraction < to2 ? 1 : fraction < to5 ? 2 : fraction < to10 ? 5 : 10;
  return nice * power;
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
    return super.transform(this.scaling.log(input));
  }

  /**
   * evenlySpacedGuideLines will return a list of numbers that represent an
   * evenly split distribution of samples in the logarithmic space, rounded to
   * round values, the top one down so it stays within the input range.  The
   * values returned will be in the input space.
   */
  evenlySpacedGuideLines(guideLineCount: number): number[] {
    const lines: number[] = [];
    const inputMax = this.originalInputMax;
    const inputMin = this.originalInputMin;

    const lMax = this.scaling.log(inputMax);
    const lMin = this.scaling.log(inputMin);
    const step = guideLineCount > 1 ? (lMax - lMin) / (guideLineCount - 1) : 0;

    for (let i = 0; i < guideLineCount; i++) {
      const value = roundToNiceValue(
        this.scaling.exp(lMin + step * i),
        i === guideLineCount - 1,
      );
      if (!lines.includes(value)) {
        lines.push(value);
      }
    }
    return lines;
  }
}
