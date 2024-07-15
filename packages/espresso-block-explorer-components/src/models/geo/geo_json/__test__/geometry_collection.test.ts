import { describe, it } from 'vitest';
import Degrees from '../../units/Degrees';
import LatLng from '../../units/LatLng';
import Latitude from '../../units/Latitude';
import Longitude from '../../units/Longitude';
import GeoJSONGeometryCollection, {
  geoJSONGeometryCollectionCodec,
} from '../geometry_collection';
import GeoJSONLineString from '../line_string';
import GeoJSONMultiPoint from '../multi_point';
import GeoJSONPoint from '../point';
import GeoJSONPolygon from '../polygon';

describe('Geometry Collection', () => {
  describe('Codec', () => {
    it('should decode example into the correct value', () => {
      const raw = {
        type: 'GeometryCollection',
        geometries: [
          {
            type: 'Point',
            coordinates: [100.0, 0.0],
          },
          {
            type: 'LineString',
            coordinates: [
              [101.0, 0.0],
              [102.0, 1.0],
            ],
          },
        ],
      };
      const geometryCollection = geoJSONGeometryCollectionCodec.decode(raw);

      expect(geometryCollection).deep.equals(
        new GeoJSONGeometryCollection([
          new GeoJSONPoint(
            new LatLng(
              new Latitude(new Degrees(0)),
              new Longitude(new Degrees(100)),
            ),
          ),

          new GeoJSONLineString([
            new LatLng(
              new Latitude(new Degrees(0)),
              new Longitude(new Degrees(101)),
            ),
            new LatLng(
              new Latitude(new Degrees(1)),
              new Longitude(new Degrees(102)),
            ),
          ]),
        ]),
      );

      expect(geometryCollection.toJSON()).deep.equals(raw);
    });

    it('should encode and decode to the same value shape', () => {
      const geoJSONGeometryCollection = new GeoJSONGeometryCollection([
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
        geoJSONGeometryCollectionCodec.decode(
          geoJSONGeometryCollectionCodec.encode(geoJSONGeometryCollection),
        ),
      ).deep.equals(geoJSONGeometryCollection);
    });
  });
});
