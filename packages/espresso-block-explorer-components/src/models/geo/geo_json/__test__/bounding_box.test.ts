import { describe, it } from 'vitest';
import Degrees from '../../units/degrees';
import LatLng from '../../units/lat_lng';
import Latitude from '../../units/latitude';
import Longitude from '../../units/longitude';
import GeoJSONBoundingBox, {
  generateBoundingBoxFromBoundingBoxes,
  generateBoundingBoxFromMinMaxes,
} from '../bounding_box';

describe('Bounding Box', () => {
  describe('contains', () => {
    it('should contain the point', () => {
      const bbox = new GeoJSONBoundingBox(
        new LatLng(new Latitude(new Degrees(0)), new Longitude(new Degrees(0))),
        new LatLng(new Latitude(new Degrees(2)), new Longitude(new Degrees(2))),
      );

      expect(
        bbox.contains(
          new LatLng(
            new Latitude(new Degrees(1)),
            new Longitude(new Degrees(1)),
          ),
        ),
      ).toBe(true);
    });

    it('should not contain the point', () => {
      const bbox = new GeoJSONBoundingBox(
        new LatLng(new Latitude(new Degrees(0)), new Longitude(new Degrees(0))),
        new LatLng(new Latitude(new Degrees(2)), new Longitude(new Degrees(2))),
      );

      expect(
        bbox.contains(
          new LatLng(
            new Latitude(new Degrees(4)),
            new Longitude(new Degrees(4)),
          ),
        ),
      ).toBe(false);
    });

    it('should contain only the point', () => {
      const bbox = new GeoJSONBoundingBox(
        new LatLng(new Latitude(new Degrees(0)), new Longitude(new Degrees(0))),
        new LatLng(new Latitude(new Degrees(0)), new Longitude(new Degrees(0))),
      );

      expect(
        bbox.contains(
          new LatLng(
            new Latitude(new Degrees(0)),
            new Longitude(new Degrees(0)),
          ),
        ),
      ).toBe(true);

      expect(
        bbox.contains(
          new LatLng(
            new Latitude(new Degrees(0)),
            new Longitude(new Degrees(1)),
          ),
        ),
      ).toBe(false);
    });
  });

  describe('generateBoundingBoxFromBoundingBoxes', () => {
    it('should match expectation', () => {
      expect(
        generateBoundingBoxFromBoundingBoxes([
          {
            bbox: new GeoJSONBoundingBox(
              new LatLng(
                new Latitude(new Degrees(0)),
                new Longitude(new Degrees(0)),
              ),
              new LatLng(
                new Latitude(new Degrees(1)),
                new Longitude(new Degrees(1)),
              ),
            ),
          },
          {
            bbox: new GeoJSONBoundingBox(
              new LatLng(
                new Latitude(new Degrees(1)),
                new Longitude(new Degrees(1)),
              ),
              new LatLng(
                new Latitude(new Degrees(2)),
                new Longitude(new Degrees(2)),
              ),
            ),
          },
        ]),
      ).deep.equals(
        new GeoJSONBoundingBox(
          new LatLng(
            new Latitude(new Degrees(0)),
            new Longitude(new Degrees(0)),
          ),
          new LatLng(
            new Latitude(new Degrees(2)),
            new Longitude(new Degrees(2)),
          ),
        ),
      );
    });
  });

  describe('generateBoundingBoxFromMinMaxes', () => {
    it('should match expectation', () => {
      expect(
        generateBoundingBoxFromMinMaxes([
          new LatLng(
            new Latitude(new Degrees(0)),
            new Longitude(new Degrees(0)),
          ),
          new LatLng(
            new Latitude(new Degrees(1)),
            new Longitude(new Degrees(1)),
          ),
          new LatLng(
            new Latitude(new Degrees(1)),
            new Longitude(new Degrees(1)),
          ),
          new LatLng(
            new Latitude(new Degrees(2)),
            new Longitude(new Degrees(2)),
          ),
        ]),
      ).deep.equals(
        new GeoJSONBoundingBox(
          new LatLng(
            new Latitude(new Degrees(0)),
            new Longitude(new Degrees(0)),
          ),
          new LatLng(
            new Latitude(new Degrees(2)),
            new Longitude(new Degrees(2)),
          ),
        ),
      );
    });
  });
});
