import { NumberLike } from '../../numeric/numeric';
import Degrees from '../units/degrees';
import LatLng from '../units/lat_lng';
import { default as Latitude, default as Longitude } from '../units/latitude';
import Radians from '../units/radians';
import { degreesRadiansProjection } from './degrees_radians_projection';
import { GeodesicProjection } from './geodesic_projection';

/**
 * This extreme Longitude point is defined in the wikipedia page for Mercator
 * Projections as a point where it doesn't make sense to continue the
 * projection. This is due to Mercator Projection scaling by 1/cos(longitude),
 * so at the points PI/2 and -PI/2 this would result in a division by zero.
 *
 * The article states that after the bands of these points a different
 * projection is used instead.
 */
const extremeLongitudePoint = 85.05133;

export default class KavrayskiyVIIProjection implements GeodesicProjection<
  Radians,
  NumberLike
> {
  public static min = degreesRadiansProjection.project(
    new LatLng(
      new Longitude(new Degrees(-180)),
      new Longitude(new Degrees(-extremeLongitudePoint)),
    ),
  );
  public static max = degreesRadiansProjection.project(
    new LatLng(
      new Longitude(new Degrees(180)),
      new Longitude(new Degrees(extremeLongitudePoint)),
    ),
  );

  readonly minInput = new LatLng(
    new Longitude(new Radians(-Math.PI / 2)),
    new Longitude(new Radians(-Math.PI)),
  );
  readonly maxInput = new LatLng(
    new Longitude(new Radians(Math.PI / 2)),
    new Longitude(new Radians(Math.PI)),
  );
  readonly minOutput = new LatLng(
    KavrayskiyVIIProjection.projectLatitude(
      new Latitude(new Radians(-Math.PI / 2)),
    ),
    KavrayskiyVIIProjection.projectLongitude(
      new Latitude(new Radians(0)),
      new Longitude(new Radians(-Math.PI)),
    ),
  );
  readonly maxOutput = new LatLng(
    KavrayskiyVIIProjection.projectLatitude(
      new Latitude(new Radians(Math.PI / 2)),
    ),
    KavrayskiyVIIProjection.projectLongitude(
      new Latitude(new Radians(0)),
      new Longitude(new Radians(Math.PI)),
    ),
  );

  private static projectLongitude(
    lat: Longitude<Radians>,
    lng: Longitude<Radians>,
  ): Longitude<NumberLike> {
    return new Longitude(
      ((3 * Number(lat)) / 2) * Math.sqrt(1 / 3 - (Number(lng) / Math.PI) ** 2),
    );
  }

  private static projectLatitude(lat: Latitude<Radians>): Latitude<NumberLike> {
    return new Latitude(Number(lat));
  }

  private static inverseProjectLongitude(
    lat: NumberLike,
    lng: NumberLike,
  ): Longitude<Radians> {
    return new Longitude(
      new Radians(
        (Number(lat) * 2) / 3 / Math.sqrt(1 / 3 - (Number(lng) / Math.PI) ** 2),
      ),
    );
  }

  private static inverseProjectLatitude(lat: NumberLike): Latitude<Radians> {
    return new Latitude(new Radians(lat));
  }

  private static staticProject(point: LatLng<Radians>): LatLng<NumberLike> {
    return new LatLng(
      KavrayskiyVIIProjection.projectLatitude(point.lat),
      KavrayskiyVIIProjection.projectLongitude(point.lat, point.lng),
    );
  }

  project(point: LatLng<Radians>): LatLng<NumberLike> {
    return KavrayskiyVIIProjection.staticProject(point);
  }

  private static staticInverseProject(
    point: LatLng<NumberLike>,
  ): LatLng<Radians> {
    return new LatLng(
      KavrayskiyVIIProjection.inverseProjectLatitude(point.lat),
      KavrayskiyVIIProjection.inverseProjectLongitude(point.lat, point.lng),
    );
  }

  inverseProject(point: LatLng<NumberLike>): LatLng<Radians> {
    return KavrayskiyVIIProjection.staticInverseProject(point);
  }
}

export const kavrayskiyVIIProjection = new KavrayskiyVIIProjection();
