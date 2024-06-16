import { NumberLike, greaterThan, lessThan } from '../../numeric/numeric';
import Degrees from '../units/Degrees';
import LatLng from '../units/LatLng';
import Latitude from '../units/Latitude';
import Longitude from '../units/Longitude';
import Radians from '../units/Radians';
import { degreesRadiansProjection } from './DegreesRadiansProjection';
import { GeodesicProjection } from './GeodesicProjection';

/**
 * extremeLongitudePoint is the maximum value for the longitude in the
 * Mercator Projection.  This value is used to prevent the projection from
 * reaching infinity at the poles.
 *
 * This value is taken from the Wikipedia page on the Mercator Projection.
 * https://en.wikipedia.org/wiki/Mercator_projection.
 *
 * Actual real-world uses of the Mercator projection tend to swap out the
 * projection model after these points are reached for a different projection.
 */
const extremeLatitudePoint = 85.05133;

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
export default class MercatorProjection
  implements GeodesicProjection<Radians, NumberLike>
{
  public static min = degreesRadiansProjection.project(
    new LatLng(
      new Latitude(new Degrees(-extremeLatitudePoint)),
      new Longitude(new Degrees(-180)),
    ),
  );
  public static max = degreesRadiansProjection.project(
    new LatLng(
      new Latitude(new Degrees(extremeLatitudePoint)),
      new Longitude(new Degrees(180)),
    ),
  );

  public static minProjection = MercatorProjection.staticProject(
    MercatorProjection.min,
  );
  public static maxProjection = MercatorProjection.staticProject(
    MercatorProjection.max,
  );

  readonly minInput = MercatorProjection.min;
  readonly maxInput = MercatorProjection.max;
  readonly minOutput = MercatorProjection.minProjection;
  readonly maxOutput = MercatorProjection.maxProjection;

  private static projectLongitude(
    lng: Longitude<Radians>,
  ): Longitude<NumberLike> {
    return new Longitude(Number(lng));
  }

  /**
   * ensureLongitudeBounds ensures that the longitude value is within the
   * bounds of the Mercator Projection.
   */
  private static ensureLatitudeBounds(
    lat: Latitude<Radians>,
  ): Latitude<Radians> {
    if (greaterThan(lat, MercatorProjection.max.lat)) {
      return MercatorProjection.max.lat;
    }

    if (lessThan(lat, MercatorProjection.min.lat)) {
      return MercatorProjection.min.lat;
    }

    return lat;
  }

  private static projectLatitude(
    long: Latitude<Radians>,
  ): Latitude<NumberLike> {
    return new Latitude(
      Math.log(
        Math.tan(Math.PI / 4 + Number(this.ensureLatitudeBounds(long)) / 2),
      ),
    );
  }

  private static inverseProjectLongitude(lat: NumberLike): Longitude<Radians> {
    return new Longitude(new Radians(Number(lat)));
  }

  private static inverseProjectLatitude(long: NumberLike): Latitude<Radians> {
    return new Latitude(
      new Radians(2 * Math.atan(Math.exp(Number(long))) - Math.PI / 2),
    );
  }

  private static staticProject(point: LatLng<Radians>): LatLng<NumberLike> {
    return new LatLng(
      this.projectLatitude(point.lat),
      this.projectLongitude(point.lng),
    );
  }

  project(point: LatLng<Radians>): LatLng<NumberLike> {
    return MercatorProjection.staticProject(point);
  }

  private static staticInverseProject(
    point: LatLng<NumberLike>,
  ): LatLng<Radians> {
    return new LatLng(
      this.inverseProjectLatitude(point.lat),
      this.inverseProjectLongitude(point.lng),
    );
  }

  inverseProject(point: LatLng<NumberLike>): LatLng<Radians> {
    return MercatorProjection.staticInverseProject(point);
  }
}

export const mercatorProjection = new MercatorProjection();
