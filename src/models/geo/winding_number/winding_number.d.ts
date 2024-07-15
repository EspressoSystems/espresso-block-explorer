/**
 * A winding number is a number that represents the number of times a point
 * crosses a polygon.  It is used to determine if a point is inside or outside
 * of a polygon.  It is primarily used in computer graphics for fill algorithms.
 * However, it can also be used in collision detection algorithms.
 *
 * In particular is is used to keep track of the number of times a point is
 * encircled by a path in order to generate a count of the number of revolutions
 * a polygon has made around the point.
 *
 * https://en.wikipedia.org/wiki/Winding_number
 */
export type WindingNumber = number;
