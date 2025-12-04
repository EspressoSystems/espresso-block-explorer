import { describe, it } from 'vitest';
import Degrees from '../../units/degrees';
import LatLng from '../../units/lat_lng';
import Latitude from '../../units/latitude';
import Longitude from '../../units/longitude';
import GeoJSONFeature from '../feature';
import GeoJSONFeatureCollection, {
  geoJSONFeatureCollectionCodec,
} from '../feature_collection';
import GeoJSONLineString from '../line_string';
import GeoJSONMultiPoint from '../multi_point';
import GeoJSONPoint from '../point';
import GeoJSONPolygon from '../polygon';

describe('Feature Collection', () => {
  describe('Codec', () => {
    it('should decode example into the correct value', () => {
      const raw = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [102.0, 0.5],
            },
            properties: {
              prop0: 'value0',
            },
          },
          {
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: [
                [102.0, 0.0],
                [103.0, 1.0],
                [104.0, 0.0],
                [105.0, 1.0],
              ],
            },
            properties: {
              prop0: 'value0',
              prop1: 0.0,
            },
          },
          {
            type: 'Feature',
            geometry: {
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
            },
            properties: {
              prop0: 'value0',
              prop1: {
                this: 'that',
              },
            },
          },
        ],
      };

      const featureCollection = geoJSONFeatureCollectionCodec.decode(raw);

      expect(featureCollection).deep.equals(
        new GeoJSONFeatureCollection([
          new GeoJSONFeature(
            new GeoJSONPoint(
              new LatLng(
                new Latitude(new Degrees(0.5)),
                new Longitude(new Degrees(102)),
              ),
            ),
            { prop0: 'value0' },
          ),
          new GeoJSONFeature(
            new GeoJSONLineString([
              new LatLng(
                new Latitude(new Degrees(0)),
                new Longitude(new Degrees(102)),
              ),
              new LatLng(
                new Latitude(new Degrees(1)),
                new Longitude(new Degrees(103)),
              ),
              new LatLng(
                new Latitude(new Degrees(0)),
                new Longitude(new Degrees(104)),
              ),
              new LatLng(
                new Latitude(new Degrees(1)),
                new Longitude(new Degrees(105)),
              ),
            ]),
            { prop0: 'value0', prop1: 0 },
          ),
          new GeoJSONFeature(
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
            { prop0: 'value0', prop1: { this: 'that' } },
          ),
        ]),
      );

      expect(featureCollection.toJSON()).deep.equals(raw);
    });

    it('should encode and decode to the same value shape', () => {
      const geoJSONFeatureCollection = new GeoJSONFeatureCollection([
        new GeoJSONFeature(
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
          {},
        ),
      ]);

      expect(
        geoJSONFeatureCollectionCodec.decode(
          geoJSONFeatureCollectionCodec.encode(geoJSONFeatureCollection),
        ),
      ).deep.equals(geoJSONFeatureCollection);
    });
  });
});
