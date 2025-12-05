import { default as Degrees } from '../units/degrees';
import { default as LatLng } from '../units/lat_lng';
import { default as Radians } from '../units/radians';
import { GeodesicProjection } from './geodesic_projection';
/**
 * DegreesRadiansProjection is a geodesic projection which converts between
 * latitude and longitude values in degrees and radians.
 */
export default class DegreesRadiansProjection implements GeodesicProjection<Degrees, Radians> {
    readonly minInput: LatLng<Degrees>;
    readonly maxInput: LatLng<Degrees>;
    readonly minOutput: LatLng<Radians>;
    readonly maxOutput: LatLng<Radians>;
    private projectLatitude;
    private convertDegreesToRadians;
    private convertRadiansToDegrees;
    private projectLongitude;
    private inverseProjectLatitude;
    private inverseProjectLongitude;
    project(point: LatLng<Degrees>): LatLng<Radians>;
    inverseProject(point: LatLng<Radians>): LatLng<Degrees>;
}
export declare const degreesRadiansProjection: DegreesRadiansProjection;
