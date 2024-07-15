import { NumberLike } from '../../numeric/numeric';
import { default as LatLng } from '../units/LatLng';
import { GeodesicProjection } from './GeodesicProjection';

/**
 * ChainProjection is a class that represents a chain of two geodesic projections.
 * It is used to chain two projections together.
 *
 * Longer chains can be formed by chaining multiple ChainProjections together.
 */
export default class ChainProjection<Input1 extends NumberLike, Output1 extends NumberLike, Output2 extends NumberLike> implements GeodesicProjection<Input1, Output2> {
    private readonly projection1;
    private readonly projection2;
    get minInput(): LatLng<Input1>;
    get maxInput(): LatLng<Input1>;
    get minOutput(): LatLng<Output2>;
    get maxOutput(): LatLng<Output2>;
    constructor(projection1: GeodesicProjection<Input1, Output1>, projection2: GeodesicProjection<Output1, Output2>);
    project(point: LatLng<Input1>): LatLng<Output2>;
    inverseProject(point: LatLng<Output2>): LatLng<Input1>;
}
