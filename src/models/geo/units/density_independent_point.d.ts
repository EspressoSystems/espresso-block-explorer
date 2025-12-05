import { BaseNumeric, NumberLike } from '../../numeric/numeric';
/**
 * DensityIndependentPoint is a class that represents that the numeric value
 * that is stored is meant to represent a density independent pixel value.
 */
export default class DensityIndependentPoint extends BaseNumeric<NumberLike> {
    toString(): string;
}
