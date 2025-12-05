import { NumberLike } from '../../numeric/numeric';
import LatLng from '../units/lat_lng';

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
export enum EdgeCrossing {
  onEdge = 0,
  left = -1,
  right = 1,
}

/**
 * An EdgeFunction is a prebuilt function that only takes a single point as
 * an input and it returns an EdgeCrossing value.  It is used to determine
 * if a point is on the left or right side of the line that this function
 * is describing the edge of.
 */
export type EdgeFunction<N extends NumberLike> = (
  point: LatLng<N>,
) => EdgeCrossing;

/*
 * edgeFunction determines if a point is on the left or right side of a line.
 * It is based on an algorithm from Juan Pienada:
 * https://www.cs.drexel.edu/~david/Classes/Papers/comp175-06-pineda.pdf
 *
 * Referenced on Wikipedia:
 * https://en.wikipedia.org/wiki/Point_in_polygon
 */
export function createEdgeFunction<N extends NumberLike>(
  p0: LatLng<N>,
  p1: LatLng<N>,
): EdgeFunction<N> {
  const dx = Number(p1.lng) - Number(p0.lng);
  const dy = Number(p1.lat) - Number(p0.lat);
  const X = Number(p0.lng);
  const Y = Number(p0.lat);

  return (point: LatLng<N>) => {
    const x = Number(point.lng);
    const y = Number(point.lat);
    const value = (x - X) * dy - (y - Y) * dx;

    if (value < 0) {
      return EdgeCrossing.left;
    }

    if (value > 0) {
      return EdgeCrossing.right;
    }

    return EdgeCrossing.onEdge;
  };
}
