import { firstIterator } from '@/functional/functional';
import { NumberLike, lessThan } from '../../numeric/numeric';
import LatLng from '../units/LatLng';
import { EdgeCrossing, EdgeFunction } from './edge_function';
import { WindingNumber } from './winding_number';

/**
 * compareCrossingsAndPoints performs the actual comparison of the the crossings
 * and the points.  It does the heavy lifting so-to-speak.
 *
 * It may need to be re-evaluated for the onEdge cases.  However, for
 * our current use of projecting the path of the world map, it is not
 * likely to be an issue.
 */
function compareCrossingsAndPoints<N extends NumberLike>(
  currentCrossing: EdgeCrossing,
  previousCrossing: EdgeCrossing,
  currentPoint: LatLng<N>,
  previousPoint: LatLng<N>,
): number {
  if (currentCrossing === previousCrossing) {
    return 0;
  }

  // We ignore crossing that occur to the "left" of our point.
  if (lessThan(currentPoint.lat, previousPoint.lat)) {
    return 0;
  }

  if (currentCrossing === EdgeCrossing.onEdge) {
    // This is a weird case. It isn't likely to occur, and there will likely
    // be further points in the polygon.  Thus we'll ignore it for now.
    return 0;
  }

  if (currentCrossing === EdgeCrossing.right) {
    // This implies that the point is going "up" compared to our line.
    return 1;
  }

  return -1;
}

/**
 * sundaysWindingAlgorithm is an implementation of Sunday's Winding Number
 * Algorithm.  It is a simple algorithm that counts the number of times a point
 * crosses the edges of a polygon.  It is used to determine if a point is inside
 * or outside of a polygon.
 *
 * It is more optimal than a generalized ray casting based winding algorithm
 * because it does not require the calculation of the intersection point of the
 * ray with the polygon.  Used in conjunction with an edge function, which
 * determines whether a point is to the left, right, or on a line, it can
 * be used to efficiently calculate the winding number.
 *
 * Mentioned in https://en.wikipedia.org/wiki/Winding_number.
 * Only exists on the Wayback machine these days:
 * https://web.archive.org/web/20130126163405/http://geomalgorithms.com/a03-_inclusion.html
 *
 */
export function sundaysWindingAlgorithm<N extends NumberLike>(
  point: LatLng<N>,
  edgeFunction: EdgeFunction<N>,
  polygon: Iterable<LatLng<N>>,
): WindingNumber {
  let wn = 0;

  // We need a sufficiently "line for the point.  We'll pick a point that is
  // outside of the range, in order to ensure that it is always beyond the
  // bounds of the point.

  // We want to count the crossings of the point with the polygon.
  const iterator = polygon[Symbol.iterator]();
  const p0 = firstIterator(iterator);
  const firstCrossing = edgeFunction(p0);
  let lastCrossing = firstCrossing;
  for (let next = iterator.next(); !next.done; next = iterator.next()) {
    const pi = next.value;
    const crossing = edgeFunction(pi);
    wn += compareCrossingsAndPoints(crossing, lastCrossing, pi, point);
    lastCrossing = crossing;
  }

  // We assume that the path may not end where it began, and in such a case
  // we need to re-evaluate the first crossing again.
  if (firstCrossing !== lastCrossing) {
    wn += compareCrossingsAndPoints(firstCrossing, lastCrossing, p0, point);
  }

  return Math.abs(wn);
}
