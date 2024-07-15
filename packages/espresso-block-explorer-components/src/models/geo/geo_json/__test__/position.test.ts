import { describe, it } from 'vitest';
import Degrees from '../../units/Degrees';
import LatLng from '../../units/LatLng';
import Latitude from '../../units/Latitude';
import Longitude from '../../units/Longitude';
import {
  geoJSONPositionCodec,
  listGeoJSONPositionCodec,
  listListGeoJSONPositionCodec,
  listListListGeoJSONPositionCodec,
} from '../position';

describe('Position', () => {
  describe('Codec', () => {
    it('should encode to (lng, lat)', () => {
      const latLng = new LatLng(
        new Latitude(new Degrees(1)),
        new Longitude(new Degrees(2)),
      );

      expect(geoJSONPositionCodec.encode(latLng)).to.deep.equal([2, 1]);
    });

    it('should decode to a list', () => {
      const list = listGeoJSONPositionCodec.decode([
        [0, 0],
        [1, 1],
      ]);

      expect(list).length(2);
      expect(list[0]).instanceOf(LatLng);
      expect(list[1]).instanceOf(LatLng);
    });

    it('should decode to a list of lists', () => {
      const list = listListGeoJSONPositionCodec.decode([
        [
          [0, 0],
          [1, 1],
        ],
      ]);

      expect(list).length(1);
      expect(list[0]).instanceOf(Array);
      expect(list[0]).length(2);
      expect(list[0][0]).instanceOf(LatLng);
      expect(list[0][1]).instanceOf(LatLng);
    });

    it('should decode to a list of lists of lists', () => {
      const list = listListListGeoJSONPositionCodec.decode([
        [
          [
            [0, 0],
            [1, 1],
          ],
        ],
      ]);

      expect(list).length(1);
      expect(list[0]).instanceOf(Array);
      expect(list[0]).length(1);
      expect(list[0][0]).instanceOf(Array);
      expect(list[0][0]).length(2);
      expect(list[0][0][0]).instanceOf(LatLng);
      expect(list[0][0][1]).instanceOf(LatLng);
    });
  });
});
