import Degrees from '../units/Degrees';
import LatLng from '../units/LatLng';
import Latitude from '../units/Latitude';
import Longitude from '../units/Longitude';
import Radians from '../units/Radians';
import { GeodesicProjection } from './GeodesicProjection';

/**
 * DegreesRadiansProjection is a geodesic projection which converts between
 * latitude and longitude values in degrees and radians.
 */
export default class DegreesRadiansProjection
  implements GeodesicProjection<Degrees, Radians>
{
  readonly minInput = new LatLng(
    new Latitude(new Degrees(-90)),
    new Longitude(new Degrees(-180)),
  );
  readonly maxInput = new LatLng(
    new Latitude(new Degrees(90)),
    new Longitude(new Degrees(180)),
  );
  readonly minOutput = new LatLng(
    new Latitude(new Radians(-Math.PI / 2)),
    new Longitude(new Radians(-Math.PI)),
  );
  readonly maxOutput = new LatLng(
    new Latitude(new Radians(Math.PI / 2)),
    new Longitude(new Radians(Math.PI)),
  );

  private projectLatitude(lat: Latitude<Degrees>): Latitude<Radians> {
    return new Latitude(this.convertDegreesToRadians(lat));
  }

  private convertDegreesToRadians(degrees: Degrees): Radians {
    return new Radians(Number(degrees) * (Math.PI / 180));
  }

  private convertRadiansToDegrees(radians: Radians): Degrees {
    return new Degrees(Number(radians) * (180 / Math.PI));
  }

  private projectLongitude(long: Longitude<Degrees>): Longitude<Radians> {
    return new Longitude(this.convertDegreesToRadians(long));
  }

  private inverseProjectLatitude(lat: Latitude<Radians>): Latitude<Degrees> {
    return new Latitude(this.convertRadiansToDegrees(lat));
  }

  private inverseProjectLongitude(
    long: Longitude<Radians>,
  ): Longitude<Degrees> {
    return new Longitude(this.convertRadiansToDegrees(long));
  }

  project(point: LatLng<Degrees>): LatLng<Radians> {
    return new LatLng(
      this.projectLatitude(point.lat),
      this.projectLongitude(point.lng),
    );
  }

  inverseProject(point: LatLng<Radians>): LatLng<Degrees> {
    return new LatLng(
      this.inverseProjectLatitude(point.lat),
      this.inverseProjectLongitude(point.lng),
    );
  }
}

export const degreesRadiansProjection = new DegreesRadiansProjection();
