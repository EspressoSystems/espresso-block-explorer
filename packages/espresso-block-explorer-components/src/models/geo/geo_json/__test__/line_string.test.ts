import { describe, it } from 'vitest';
import Degrees from '../../units/degrees';
import LatLng from '../../units/lat_lng';
import Latitude from '../../units/latitude';
import Longitude from '../../units/longitude';
import GeoJSONLineString, { geoJSONLineStringCodec } from '../line_string';

describe('Line String', () => {
  describe('Codec', () => {
    it('should decode example into the correct value', () => {
      const raw = {
        type: 'LineString',
        coordinates: [
          [100.0, 0.0],
          [101.0, 1.0],
        ],
      };
      const lineString = geoJSONLineStringCodec.decode(raw);

      expect(lineString).deep.equals(
        new GeoJSONLineString([
          new LatLng(
            new Latitude(new Degrees(0)),
            new Longitude(new Degrees(100)),
          ),
          new LatLng(
            new Latitude(new Degrees(1)),
            new Longitude(new Degrees(101)),
          ),
        ]),
      );

      expect(lineString.toJSON()).deep.equals(raw);
    });

    it('should encode and decode to the same value shape', () => {
      const geoJSONLineString = new GeoJSONLineString([
        new LatLng(new Latitude(new Degrees(2)), new Longitude(new Degrees(1))),
        new LatLng(new Latitude(new Degrees(4)), new Longitude(new Degrees(3))),
      ]);

      expect(
        geoJSONLineStringCodec.decode(
          geoJSONLineStringCodec.encode(geoJSONLineString),
        ),
      ).deep.equals(geoJSONLineString);
    });
  });
});
