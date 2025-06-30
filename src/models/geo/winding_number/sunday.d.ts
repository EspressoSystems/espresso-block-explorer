import { NumberLike } from '../../numeric/numeric';
import { default as LatLng } from '../units/LatLng';
import { EdgeFunction } from './edge_function';
import { WindingNumber } from './winding_number';
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
export declare function sundaysWindingAlgorithm<N extends NumberLike>(point: LatLng<N>, edgeFunction: EdgeFunction<N>, polygon: Iterable<LatLng<N>>): WindingNumber;
