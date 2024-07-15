import { NumberLike } from '../../numeric/numeric';
import { default as DensityIndependentPoint } from '../units/DensityIndependentPoint';
import { default as LatLng } from '../units/LatLng';
import { default as Radians } from '../units/Radians';
import { GeodesicProjection } from './GeodesicProjection';

/**
 * CoordinateSpaceProjection is a geodesic projection which converts between
 * latitude and longitude values in radians and density independent points of
 * the resolution of the targeted area.
 */
export default class CoordinateSpaceProjection<N extends NumberLike> implements GeodesicProjection<NumberLike, DensityIndependentPoint> {
    readonly minInput: LatLng<N>;
    readonly maxInput: LatLng<N>;
    readonly minOutput: LatLng<DensityIndependentPoint>;
    readonly maxOutput: LatLng<DensityIndependentPoint>;
    private horizontalAffine;
    private inverseHorizontalAffine;
    private verticalAffine;
    private inverseVerticalAffine;
    constructor(projectionMin: LatLng<N>, projectionMax: LatLng<N>, coordinateMin: LatLng<DensityIndependentPoint>, coordinateMax: LatLng<DensityIndependentPoint>);
    project(point: LatLng<Radians>): LatLng<DensityIndependentPoint>;
    inverseProject(point: LatLng<DensityIndependentPoint>): LatLng<Radians>;
}
