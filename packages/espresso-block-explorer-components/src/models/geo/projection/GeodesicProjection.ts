import { NumberLike } from '../../numeric/numeric';
import LatLng from '../units/LatLng';

/**
 * GeodesicProjection is an interface that represents a geodesic projection
 * which converts between latitude and longitude values in different units.
 */
export interface GeodesicProjection<
  Input extends NumberLike,
  Output extends NumberLike = Input,
> {
  project(input: LatLng<Input>): LatLng<Output>;
  inverseProject(output: LatLng<Output>): LatLng<Input>;
}
