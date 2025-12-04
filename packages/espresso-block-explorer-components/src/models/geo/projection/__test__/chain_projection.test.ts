import { describe, expect, it } from 'vitest';
import LatLng from '../../units/LatLng';
import Latitude from '../../units/Latitude';
import Longitude from '../../units/Longitude';
import ChainProjection from '../ChainProjection';
import { GeodesicProjection } from '../GeodesicProjection';

class DoubleProjection implements GeodesicProjection<number, number> {
  project(point: LatLng<number>): LatLng<number> {
    return new LatLng(
      new Latitude(Number(point.lat) * 2),
      new Longitude(Number(point.lng) * 2),
    );
  }

  inverseProject(output: LatLng<number>): LatLng<number> {
    return new LatLng(
      new Latitude(Number(output.lat) / 2),
      new Longitude(Number(output.lng) / 2),
    );
  }
}

const doubleProjection = new DoubleProjection();

describe('Chain Projection', () => {
  const testProjection = new ChainProjection(
    doubleProjection,
    doubleProjection,
  );

  describe('project', () => {
    it('should map 0,0 to 0,0', () => {
      const result = testProjection.project(
        new LatLng(new Latitude(0), new Longitude(0)),
      );

      const epsilon = 0.000000001;

      expect(Number(result.lat)).closeTo(0, epsilon);
      expect(Number(result.lng)).closeTo(0, epsilon);
    });

    it('should map 1,1 to 4,4', () => {
      const result = testProjection.project(
        new LatLng(new Latitude(1), new Longitude(1)),
      );

      const epsilon = 0.000000001;

      expect(Number(result.lat)).closeTo(4, epsilon);
      expect(Number(result.lng)).closeTo(4, epsilon);
    });
  });

  describe('inverseProject', () => {
    it('should map 0,0 to 0,0', () => {
      const result = testProjection.inverseProject(
        new LatLng(new Latitude(0), new Longitude(0)),
      );

      const epsilon = 0.000000001;

      expect(Number(result.lat)).closeTo(0, epsilon);
      expect(Number(result.lng)).closeTo(0, epsilon);
    });

    it('should map 1,1 to 4,4', () => {
      const result = testProjection.inverseProject(
        new LatLng(new Latitude(4), new Longitude(4)),
      );

      const epsilon = 0.000000001;

      expect(Number(result.lat)).closeTo(1, epsilon);
      expect(Number(result.lng)).closeTo(1, epsilon);
    });
  });
});
