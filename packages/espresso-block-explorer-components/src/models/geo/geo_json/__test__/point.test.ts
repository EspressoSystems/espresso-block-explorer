import { describe, it } from 'vitest';
import Degrees from '../../units/degrees';
import LatLng from '../../units/lat_lng';
import Latitude from '../../units/latitude';
import Longitude from '../../units/longitude';
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
            new Latitude(new Degrees(0)),
            new Longitude(new Degrees(100)),
          ),
        ),
      );

      expect(point.toJSON()).deep.equals(raw);
    });

    it('should encode and decode to the same value shape', () => {
      const geoJSONPoint = new GeoJSONPoint(
        new LatLng(new Latitude(new Degrees(2)), new Longitude(new Degrees(1))),
      );

      expect(
        geoJSONPointCodec.decode(geoJSONPointCodec.encode(geoJSONPoint)),
      ).deep.equals(geoJSONPoint);
    });
  });
});
