import { BaseNumeric, NumberLike } from '../../numeric/numeric';

/**
 * Longitude represents a numeric value that is meant to represent a latitude
 * value on a geodesic object.  The underlying unit is expected to be a
 * `Degrees` or a `Radians` value but can be any numeric value.
 */
export default class Longitude<Unit extends NumberLike> extends BaseNumeric<Unit> {
    toString(): string;
}
