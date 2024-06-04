import { describe, it } from 'vitest';
import Degrees from '../../units/Degrees';
import LatLng from '../../units/LatLng';
import Latitude from '../../units/Latitude';
import Longitude from '../../units/Longitude';
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
                  new Latitude(new Degrees(102)),
                  new Longitude(new Degrees(2)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(103)),
                  new Longitude(new Degrees(2)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(103)),
                  new Longitude(new Degrees(3)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(102)),
                  new Longitude(new Degrees(3)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(102)),
                  new Longitude(new Degrees(2)),
                ),
              ),
            ]),
          ]),

          new GeoJSONPolygon([
            new GeoJSONMultiPoint([
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(100)),
                  new Longitude(new Degrees(0)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(101)),
                  new Longitude(new Degrees(0)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(101)),
                  new Longitude(new Degrees(1)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(100)),
                  new Longitude(new Degrees(1)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(100)),
                  new Longitude(new Degrees(0)),
                ),
              ),
            ]),

            new GeoJSONMultiPoint([
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(100.2)),
                  new Longitude(new Degrees(0.2)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(100.2)),
                  new Longitude(new Degrees(0.8)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(100.8)),
                  new Longitude(new Degrees(0.8)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(100.8)),
                  new Longitude(new Degrees(0.2)),
                ),
              ),
              new GeoJSONPoint(
                new LatLng(
                  new Latitude(new Degrees(100.2)),
                  new Longitude(new Degrees(0.2)),
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
                new Latitude(new Degrees(1)),
                new Longitude(new Degrees(2)),
              ),
            ),
            new GeoJSONPoint(
              new LatLng(
                new Latitude(new Degrees(3)),
                new Longitude(new Degrees(4)),
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
