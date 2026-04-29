/**
 * DimensionMapping represents a mapping from an input number to an output
 * mapping.
 *
 * These mappings are meant to be used to help represent the nature of various
 * scaling based transformations.
 */
export interface DimensionMapping {
  readonly inputMax: number;
  readonly inputMin: number;
  readonly outputMin: number;
  readonly outputMax: number;

  /**
   * transform will transform the given input value into the corresponding
   * output space.
   */
  transform(input: number): number;

  /**
   * evenlySpacedGuideLines will return a list of numbers that represent the
   * an evenly spaced set of guide lines in the input space.
   *
   * These guide lines should strive for an even spacing in the output space,
   * but will provide the value that corresponds to the input space.
   */
  evenlySpacedGuideLines(guideLineCount: number): number[];
}
