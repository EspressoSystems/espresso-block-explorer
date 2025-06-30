import { NumberLike } from '../../numeric/numeric';
import { default as LatLng } from '../units/LatLng';
import { default as Radians } from '../units/Radians';
import { GeodesicProjection } from './GeodesicProjection';
/**
 * MercatorProjection is a geodesic projection which favors maintaining
 * parallel lines of latitude and longitude.  This is the most common type
 * of geodesic projection that the average person is familiar with.
 *
 * It should be noted that the actual Mercator Projection would result in
 * a representation of infinity at the poles.  This implementation attempts
 * to avoid that consequence by using some variation representations.
 * Additionally, it has maximum and minimum bounds for the longitudes.
 *
 * Furthermore, for convenience of calculation, the latitude and longitude
 * values are meant to be provided in Radians.
 *
 * Implementation details are taken from the Wikipedia page on the Mercator
 * Projection.
 * https://en.wikipedia.org/wiki/Mercator_projection
 */
export default class MercatorProjection implements GeodesicProjection<Radians, NumberLike> {
    static min: LatLng<Radians>;
    static max: LatLng<Radians>;
    static minProjection: LatLng<NumberLike>;
    static maxProjection: LatLng<NumberLike>;
    readonly minInput: LatLng<Radians>;
    readonly maxInput: LatLng<Radians>;
    readonly minOutput: LatLng<NumberLike>;
    readonly maxOutput: LatLng<NumberLike>;
    private static projectLongitude;
    /**
     * ensureLongitudeBounds ensures that the longitude value is within the
     * bounds of the Mercator Projection.
     */
    private static ensureLatitudeBounds;
    private static projectLatitude;
    private static inverseProjectLongitude;
    private static inverseProjectLatitude;
    private static staticProject;
    project(point: LatLng<Radians>): LatLng<NumberLike>;
    private static staticInverseProject;
    inverseProject(point: LatLng<NumberLike>): LatLng<Radians>;
}
export declare const mercatorProjection: MercatorProjection;
