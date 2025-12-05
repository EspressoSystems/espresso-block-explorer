import { NumberLike } from '../../numeric/numeric';
import { default as LatLng } from '../units/lat_lng';
/**
 * GeodesicProjection is an interface that represents a geodesic projection
 * which converts between latitude and longitude values in different units.
 */
export interface GeodesicProjection<Input extends NumberLike, Output extends NumberLike = Input> {
    readonly minInput: LatLng<Input>;
    readonly maxInput: LatLng<Input>;
    readonly minOutput: LatLng<Output>;
    readonly maxOutput: LatLng<Output>;
    project(input: LatLng<Input>): LatLng<Output>;
    inverseProject(output: LatLng<Output>): LatLng<Input>;
}
