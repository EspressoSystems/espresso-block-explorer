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
    constructor(min: LatLng<Degrees>, max: LatLng<Degrees>);
    contains(point: LatLng<Degrees>): boolean;
}
/**
 * generateBoundingBoxFromBoundingBoxes generates a bounding box from a list of
 * other bounding boxes.  This box will be the smallest box that contains all
 * of the other boxes.
 */
export declare function generateBoundingBoxFromBoundingBoxes(iterable: Iterable<{
    bbox: GeoJSONBoundingBox;
}>): GeoJSONBoundingBox;
/**
 * generateBoundingBoxesFromMinMaxes generates a bounding box from a list of
 * values that have the ability generate min and max values from their points.
 * This box will be the smallest box that contains all of the points.
 */
export declare function generateBoundingBoxFromMinMaxes(iterable: Iterable<GenericLATLNG<Latitude<Degrees>, Longitude<Degrees>>>): GeoJSONBoundingBox;
