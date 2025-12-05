import { NumberLike } from '../../numeric/numeric';
import { default as LatLng } from '../units/lat_lng';
import { default as Radians } from '../units/radians';
import { GeodesicProjection } from './geodesic_projection';
export default class KavrayskiyVIIProjection implements GeodesicProjection<Radians, NumberLike> {
    static min: LatLng<Radians>;
    static max: LatLng<Radians>;
    readonly minInput: LatLng<Radians>;
    readonly maxInput: LatLng<Radians>;
    readonly minOutput: LatLng<NumberLike>;
    readonly maxOutput: LatLng<NumberLike>;
    private static projectLongitude;
    private static projectLatitude;
    private static inverseProjectLongitude;
    private static inverseProjectLatitude;
    private static staticProject;
    project(point: LatLng<Radians>): LatLng<NumberLike>;
    private static staticInverseProject;
    inverseProject(point: LatLng<NumberLike>): LatLng<Radians>;
}
export declare const kavrayskiyVIIProjection: KavrayskiyVIIProjection;
