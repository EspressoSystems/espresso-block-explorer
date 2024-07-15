import { describe, it } from 'vitest';
import Degrees from '../../units/Degrees';
import LatLng from '../../units/LatLng';
import Latitude from '../../units/Latitude';
import Longitude from '../../units/Longitude';
import GeoJSONMultiPoint from '../multi_point';
import GeoJSONPoint from '../point';
import GeoJSONPolygon, { geoJSONPolygonCodec } from '../polygon';

describe('Polygon', () => {
  describe('Codec', () => {
    it('should decode example into the correct value', () => {
      const raw = {
        type: 'Polygon',
        coordinates: [
          [
            [100.0, 0.0],
            [101.0, 0.0],
            [101.0, 1.0],
            [100.0, 1.0],
            [100.0, 0.0],
          ],
        ],
      };
      const polygon = geoJSONPolygonCodec.decode(raw);

      expect(polygon).deep.equals(
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
        ]),
      );

      expect(polygon.toJSON()).deep.equals(raw);
    });

    it('should encode and decode to the same value shape', () => {
      const geoJSONPolygon = new GeoJSONPolygon([
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
      ]);

      expect(
        geoJSONPolygonCodec.decode(geoJSONPolygonCodec.encode(geoJSONPolygon)),
      ).deep.equals(geoJSONPolygon);
    });
  });
});
