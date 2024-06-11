import { describe, it } from 'vitest';
import Degrees from '../../units/Degrees';
import LatLng from '../../units/LatLng';
import Latitude from '../../units/Latitude';
import Longitude from '../../units/Longitude';
import GeoJSONMultiPoint, { geoJSONMultiPointCodec } from '../multi_point';
import GeoJSONPoint from '../point';

describe('Multi Point', () => {
  describe('Codec', () => {
    it('should decode example into the correct value', () => {
      const raw = {
        type: 'MultiPoint',
        coordinates: [
          [100.0, 0.0],
          [101.0, 1.0],
        ],
      };
      const multiPoint = geoJSONMultiPointCodec.decode(raw);

      expect(multiPoint).deep.equals(
        new GeoJSONMultiPoint([
          new GeoJSONPoint(
            new LatLng(
              new Latitude(new Degrees(0)),
              new Longitude(new Degrees(100)),
            ),
          ),
          new GeoJSONPoint(
            new LatLng(
              new Latitude(new Degrees(1)),
              new Longitude(new Degrees(101)),
            ),
          ),
        ]),
      );

      expect(multiPoint.toJSON()).deep.equals(raw);
    });

    it('should encode and decode to the same value shape', () => {
      const geoJSONMultiPoint = new GeoJSONMultiPoint([
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
      ]);

      expect(
        geoJSONMultiPointCodec.decode(
          geoJSONMultiPointCodec.encode(geoJSONMultiPoint),
        ),
      ).deep.equals(geoJSONMultiPoint);
    });
  });
});
