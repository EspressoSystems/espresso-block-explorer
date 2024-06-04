import { describe, it } from 'vitest';
import Degrees from '../../units/Degrees';
import LatLng from '../../units/LatLng';
import Latitude from '../../units/Latitude';
import Longitude from '../../units/Longitude';
import GeoJSONPoint, { geoJSONPointCodec } from '../point';

describe('Point', () => {
  describe('Codec', () => {
    it('should decode example into the correct value', () => {
      const raw = {
        type: 'Point',
        coordinates: [100.0, 0.0],
      };
      const point = geoJSONPointCodec.decode(raw);

      expect(point).deep.equals(
        new GeoJSONPoint(
          new LatLng(
            new Latitude(new Degrees(100)),
            new Longitude(new Degrees(0)),
          ),
        ),
      );

      expect(point.toJSON()).deep.equals(raw);
    });

    it('should encode and decode to the same value shape', () => {
      const geoJSONPoint = new GeoJSONPoint(
        new LatLng(new Latitude(new Degrees(1)), new Longitude(new Degrees(2))),
      );

      expect(
        geoJSONPointCodec.decode(geoJSONPointCodec.encode(geoJSONPoint)),
      ).deep.equals(geoJSONPoint);
    });
  });
});
