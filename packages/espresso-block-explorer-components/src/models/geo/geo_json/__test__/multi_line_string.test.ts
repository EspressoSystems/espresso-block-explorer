import { describe, it } from 'vitest';
import Degrees from '../../units/Degrees';
import LatLng from '../../units/LatLng';
import Latitude from '../../units/Latitude';
import Longitude from '../../units/Longitude';
import GeoJSONLineString from '../line_string';
import GeoJSONMultiLineString, {
  geoJSONMultiLineStringCodec,
} from '../multi_line_string';

describe('Multi Line String', () => {
  describe('Codec', () => {
    it('should decode example into the correct value', () => {
      const raw = {
        type: 'MultiLineString',
        coordinates: [
          [
            [100.0, 0.0],
            [101.0, 1.0],
          ],
          [
            [102.0, 2.0],
            [103.0, 3.0],
          ],
        ],
      };
      const multiLineString = geoJSONMultiLineStringCodec.decode(raw);

      expect(multiLineString).deep.equals(
        new GeoJSONMultiLineString([
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
          new GeoJSONLineString([
            new LatLng(
              new Latitude(new Degrees(2)),
              new Longitude(new Degrees(102)),
            ),
            new LatLng(
              new Latitude(new Degrees(3)),
              new Longitude(new Degrees(103)),
            ),
          ]),
        ]),
      );

      expect(multiLineString.toJSON()).deep.equals(raw);
    });

    it('should encode and decode to the same value shape', () => {
      const geoJSONMultiLineString = new GeoJSONMultiLineString([
        new GeoJSONLineString([
          new LatLng(
            new Latitude(new Degrees(2)),
            new Longitude(new Degrees(1)),
          ),
          new LatLng(
            new Latitude(new Degrees(4)),
            new Longitude(new Degrees(3)),
          ),
        ]),
        new GeoJSONLineString([
          new LatLng(
            new Latitude(new Degrees(6)),
            new Longitude(new Degrees(5)),
          ),
          new LatLng(
            new Latitude(new Degrees(8)),
            new Longitude(new Degrees(7)),
          ),
        ]),
      ]);

      expect(
        geoJSONMultiLineStringCodec.decode(
          geoJSONMultiLineStringCodec.encode(geoJSONMultiLineString),
        ),
      ).deep.equals(geoJSONMultiLineString);
    });
  });
});
