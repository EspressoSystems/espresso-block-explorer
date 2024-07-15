import { firstIterator, foldRIterator } from '@/functional/functional';
import { greaterThan, lessThan } from '@/models/numeric/numeric';
import { Degrees, LatLng, Latitude, Longitude } from '../units';
import { GenericLATLNG } from '../units/latlng_interface';

/**
 * GeoJSONBoundingBox is a class that represents a bounding box for a GeoJSON
 * object.  These are incredibly useful for quickly ruling out if a point needs
 * to be tested against a more complex polygon by checking to see if it is
 * event within the general area that the polygon takes up.
 */
export default class GeoJSONBoundingBox {
  readonly min: LatLng<Degrees>;
  readonly max: LatLng<Degrees>;

  constructor(min: LatLng<Degrees>, max: LatLng<Degrees>) {
    this.min = min;
    this.max = max;
  }

  contains(point: LatLng<Degrees>): boolean {
    if (
      lessThan(point.lat, this.min.lat) ||
      greaterThan(point.lat, this.max.lat)
    ) {
      return false;
    }

    if (
      lessThan(point.lng, this.min.lng) ||
      greaterThan(point.lng, this.max.lng)
    ) {
      return false;
    }

    return true;
  }
}

/**
 * generateBoundingBoxFromBoundingBoxes generates a bounding box from a list of
 * other bounding boxes.  This box will be the smallest box that contains all
 * of the other boxes.
 */
export function generateBoundingBoxFromBoundingBoxes(
  iterable: Iterable<{ bbox: GeoJSONBoundingBox }>,
): GeoJSONBoundingBox {
  const it = iterable[Symbol.iterator]();
  const first = firstIterator(it);
  const [min, max] = foldRIterator(
    ([min, max], object) => [
      min.min(object.bbox.min),
      max.max(object.bbox.max),
    ],
    [first.bbox.min, first.bbox.max],
    it,
  );

  return new GeoJSONBoundingBox(min, max);
}

/**
 * generateBoundingBoxesFromMinMaxes generates a bounding box from a list of
 * values that have the ability generate min and max values from their points.
 * This box will be the smallest box that contains all of the points.
 */
export function generateBoundingBoxFromMinMaxes(
  iterable: Iterable<GenericLATLNG<Latitude<Degrees>, Longitude<Degrees>>>,
): GeoJSONBoundingBox {
  const it = iterable[Symbol.iterator]();
  const first = firstIterator(it);
  const [min, max] = foldRIterator(
    ([min, max], object) => [min.min(object), max.max(object)],
    [first, first],
    it,
  );

  return new GeoJSONBoundingBox(min, max);
}
