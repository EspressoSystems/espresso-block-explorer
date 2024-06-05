import { NumberLike } from '../../numeric/numeric';
import LatLng from '../units/LatLng';
import { GeodesicProjection } from './GeodesicProjection';

/**
 * ChainProjection is a class that represents a chain of two geodesic projections.
 * It is used to chain two projections together.
 *
 * Longer chains can be formed by chaining multiple ChainProjections together.
 */
export default class ChainProjection<
  Input1 extends NumberLike,
  Output1 extends NumberLike,
  Output2 extends NumberLike,
> implements GeodesicProjection<Input1, Output2>
{
  constructor(
    private readonly projection1: GeodesicProjection<Input1, Output1>,
    private readonly projection2: GeodesicProjection<Output1, Output2>,
  ) {
    this.projection1 = projection1;
    this.projection2 = projection2;
  }

  project(point: LatLng<Input1>): LatLng<Output2> {
    return this.projection2.project(this.projection1.project(point));
  }

  inverseProject(point: LatLng<Output2>): LatLng<Input1> {
    return this.projection1.inverseProject(
      this.projection2.inverseProject(point),
    );
  }
}
