/**
 * AffineTransform is a simple class that represents a linear transformation
 * from one range to another.
 */
export class AffineTransform {
  readonly inputMin: number;
  readonly inputMax: number;
  readonly outputMin: number;
  readonly outputMax: number;

  private inputRangeInv: number;
  private outputRange: number;

  constructor(
    inputMin: number,
    inputMax: number,
    outputMin: number,
    outputMax: number,
  ) {
    this.inputMin = inputMin;
    this.inputMax = inputMax;
    this.outputMin = outputMin;
    this.outputMax = outputMax;

    this.inputRangeInv = 1 / (this.inputMax - this.inputMin);
    this.outputRange = this.outputMax - this.outputMin;
  }

  transform(input: number): number {
    return (
      (input - this.inputMin) * this.inputRangeInv * this.outputRange +
      this.outputMin
    );
  }

  static identity = new AffineTransform(0, 1, 0, 1);
}
