import { describe, it } from 'vitest';
import Degrees from '../../units/degrees';
import LatLng from '../../units/lat_lng';
import Latitude from '../../units/latitude';
import Longitude from '../../units/longitude';
import GeoJSONMultiPoint from '../multi_point';
import GeoJSONMultiPolygon, {
  geoJSONMultiPolygonCodec,
} from '../multi_polygon';
import GeoJSONPoint from '../point';
import GeoJSONPolygon from '../polygon';

describe('Multi Polygon', () => {
  describe('Codec', () => {
    it('should decode example into the correct value', () => {
      const raw = {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [102.0, 2.0],
              [103.0, 2.0],
              [103.0, 3.0],
              [102.0, 3.0],
              [102.0, 2.0],
            ],
          ],
          [
            [
              [100.0, 0.0],
              [101.0, 0.0],
              [101.0, 1.0],
              [100.0, 1.0],
              [100.0, 0.0],
            ],
            [
              [100.2, 0.2],
              [100.2, 0.8],
              [100.8, 0.8],
              [100.8, 0.2],
              [100.2, 0.2],
            ],
          ],
        ],
      };
      const multiPolygon = geoJSONMultiPolygonCodec.decode(raw);

      expect(multiPolygon).deep.equals(
        new GeoJSONMultiPolygon([
          new GeoJSONPolygon([
            new GeoJSONMultiPoint([
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(2)),
                  new Longitude(new Degrees(102)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(2)),
                  new Longitude(new Degrees(103)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(3)),
                  new Longitude(new Degrees(103)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(3)),
                  new Longitude(new Degrees(102)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(2)),
                  new Longitude(new Degrees(102)),
                ),
              ),
            ]),
          ]),

          new GeoJSONPolygon([
            new GeoJSONMultiPoint([
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(0)),
                  new Longitude(new Degrees(100)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(0)),
                  new Longitude(new Degrees(101)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(1)),
                  new Longitude(new Degrees(101)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(1)),
                  new Longitude(new Degrees(100)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(0)),
                  new Longitude(new Degrees(100)),
                ),
              ),
            ]),

            new GeoJSONMultiPoint([
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(0.2)),
                  new Longitude(new Degrees(100.2)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(0.8)),
                  new Longitude(new Degrees(100.2)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(0.8)),
                  new Longitude(new Degrees(100.8)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(0.2)),
                  new Longitude(new Degrees(100.8)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(0.2)),
                  new Longitude(new Degrees(100.2)),
                ),
              ),
            ]),
          ]),
        ]),
      );

      expect(multiPolygon.toJSON()).deep.equals(raw);
    });

    it('should encode and decode to the same value shape', () => {
      const geoJSONMultiPolygon = new GeoJSONMultiPolygon([
        new GeoJSONPolygon([
          new GeoJSONMultiPoint([
            new GeoJSONPoint(
              new LatLng(
                new Latitude(new Degrees(2)),
                new Longitude(new Degrees(1)),
              ),
            ),
            new GeoJSONPoint(
              new LatLng(
                new Latitude(new Degrees(4)),
                new Longitude(new Degrees(3)),
              ),
            ),
          ]),
        ]),
      ]);

      expect(
        geoJSONMultiPolygonCodec.decode(
          geoJSONMultiPolygonCodec.encode(geoJSONMultiPolygon),
        ),
      ).deep.equals(geoJSONMultiPolygon);
    });
  });
});
