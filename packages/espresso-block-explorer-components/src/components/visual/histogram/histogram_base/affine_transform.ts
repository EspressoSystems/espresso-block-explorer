/**
 * AffineTransform is a simple class that represents a linear transformation
 * from one range to another.
 */
export class AffineTransform {
  private inputRangeInv: number;
  private outputRange: number;

  constructor(
    public readonly inputMin: number,
    public readonly inputMax: number,
    public readonly outputMin: number,
    public readonly outputMax: number,
  ) {
    this.inputRangeInv = 1 / (this.inputMax - this.inputMin);
    this.outputRange = this.outputMax - this.outputMin;
  }

  /**
   * transform performs a linear translation between the relevant input max
   * and min, scaled to the output max and min.
   */
  transform(input: number): number {
    return (
      (input - this.inputMin) * this.inputRangeInv * this.outputRange +
      this.outputMin
    );
  }

  /**
   * evenlySpacedGuideLines will return a list of numbers that represent the
   * input range from min to max evenly spaced by the number of guide line
   * counts.
   */
  evenlySpacedGuideLines(guideLineCount: number): number[] {
    const lines: number[] = [];
    const inputMax = this.inputMax;
    const step = inputMax / guideLineCount;
    for (let i = 0; i <= inputMax && step > 0; i += step) {
      lines.push(i);
    }

    return lines;
  }

  static identity = new AffineTransform(0, 1, 0, 1);
}
