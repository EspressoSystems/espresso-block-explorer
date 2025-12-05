import { NumberLike } from '../../numeric/numeric';
import { default as LatLng } from '../units/lat_lng';
/**
 * EdgeCrossing is a type that represents the possible relative positions of
 * a point to a line made between a starting point and an end.  It is helpful
 * to note that these directions are relative to the direction of the line
 * as considered from a top-down perspective.
 *
 * Example:
 *         p1
 *
 * p0 -------------> end
 *
 * would indicate that the point, p1, was to the left of the the line made
 * by p0 and end.
 *
 * Example:
 * p0 -------------> end
 *
 *        p1
 *
 * would indicate that the point, p1, was to the right of the line made by
 * p0 and end.
 *
 * Example:
 * p0 -----p1------> end
 *
 * would indicate that the point, p1, was on the line made by p0 and end.
 *
 */
export declare enum EdgeCrossing {
    onEdge = 0,
    left = -1,
    right = 1
}
/**
 * An EdgeFunction is a prebuilt function that only takes a single point as
 * an input and it returns an EdgeCrossing value.  It is used to determine
 * if a point is on the left or right side of the line that this function
 * is describing the edge of.
 */
export type EdgeFunction<N extends NumberLike> = (point: LatLng<N>) => EdgeCrossing;
export declare function createEdgeFunction<N extends NumberLike>(p0: LatLng<N>, p1: LatLng<N>): EdgeFunction<N>;
