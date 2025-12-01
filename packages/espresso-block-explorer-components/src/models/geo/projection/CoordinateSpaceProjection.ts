import { AffineTransform } from '@/components/visual/histogram/histogram_base/AffineTransform';
import { NumberLike } from '../../numeric/numeric';
import DensityIndependentPoint from '../units/DensityIndependentPoint';
import LatLng from '../units/LatLng';
import Latitude from '../units/Latitude';
import Longitude from '../units/Longitude';
import Radians from '../units/Radians';
import { GeodesicProjection } from './GeodesicProjection';

/**
 * CoordinateSpaceProjection is a geodesic projection which converts between
 * latitude and longitude values in radians and density independent points of
 * the resolution of the targeted area.
 */
export default class CoordinateSpaceProjection<
  N extends NumberLike,
> implements GeodesicProjection<NumberLike, DensityIndependentPoint> {
  readonly minInput: LatLng<N>;
  readonly maxInput: LatLng<N>;
  readonly minOutput: LatLng<DensityIndependentPoint>;
  readonly maxOutput: LatLng<DensityIndependentPoint>;

  private horizontalAffine: AffineTransform;
  private inverseHorizontalAffine: AffineTransform;
  private verticalAffine: AffineTransform;
  private inverseVerticalAffine: AffineTransform;
  constructor(
    projectionMin: LatLng<N>,
    projectionMax: LatLng<N>,
    coordinateMin: LatLng<DensityIndependentPoint>,
    coordinateMax: LatLng<DensityIndependentPoint>,
  ) {
    this.minInput = projectionMin;
    this.maxInput = projectionMax;
    this.minOutput = coordinateMin;
    this.maxOutput = coordinateMax;
    this.horizontalAffine = new AffineTransform(
      Number(projectionMin.lat),
      Number(projectionMax.lat),
      Number(coordinateMin.lat),
      Number(coordinateMax.lat),
    );
    this.inverseHorizontalAffine = new AffineTransform(
      Number(coordinateMin.lat),
      Number(coordinateMax.lat),
      Number(projectionMin.lat),
      Number(projectionMax.lat),
    );

    this.verticalAffine = new AffineTransform(
      Number(projectionMin.lng),
      Number(projectionMax.lng),
      Number(coordinateMin.lng),
      Number(coordinateMax.lng),
    );
    this.inverseVerticalAffine = new AffineTransform(
      Number(coordinateMin.lng),
      Number(coordinateMax.lng),
      Number(projectionMin.lng),
      Number(projectionMax.lng),
    );
  }

  project(point: LatLng<Radians>): LatLng<DensityIndependentPoint> {
    return new LatLng(
      new Latitude(
        new DensityIndependentPoint(
          this.horizontalAffine.transform(Number(point.lat)),
        ),
      ),
      new Longitude(
        new DensityIndependentPoint(
          this.verticalAffine.transform(Number(point.lng)),
        ),
      ),
    );
  }

  inverseProject(point: LatLng<DensityIndependentPoint>): LatLng<Radians> {
    const latitudeRadians = new Radians(
      this.inverseHorizontalAffine.transform(Number(point.lat)),
    );
    const longitudeRadians = new Radians(
      this.inverseVerticalAffine.transform(Number(point.lng)),
    );

    return new LatLng(
      new Latitude(latitudeRadians),
      new Longitude(longitudeRadians),
    );
  }
}
