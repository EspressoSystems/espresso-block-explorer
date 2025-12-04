import { describe, expect, it } from 'vitest';
import { DensityIndependentPoint } from '../../units';
import LatLng from '../../units/LatLng';
import Latitude from '../../units/Latitude';
import Longitude from '../../units/Longitude';
import Radians from '../../units/Radians';
import CoordinateSpaceProjection from '../CoordinateSpaceProjection';

describe('Coordinate Space Projection', () => {
  const projection = new CoordinateSpaceProjection(
    new LatLng(
      new Latitude(new Radians(-Math.PI / 2)),
      new Longitude(new Radians(-Math.PI)),
    ),
    new LatLng(
      new Latitude(new Radians(Math.PI / 2)),
      new Longitude(new Radians(Math.PI)),
    ),
    new LatLng(
      new Latitude(new DensityIndependentPoint(0)),
      new Longitude(new DensityIndependentPoint(0)),
    ),
    new LatLng(
      new Latitude(new DensityIndependentPoint(100)),
      new Longitude(new DensityIndependentPoint(100)),
    ),
  );

  describe('project', () => {
    it('should map 0,0 to 50,50', () => {
      const result = projection.project(
        new LatLng(new Latitude(new Radians(0)), new Longitude(new Radians(0))),
      );

      const epsilon = 0.000000001;

      expect(Number(result.lat)).closeTo(50, epsilon);
      expect(Number(result.lng)).closeTo(50, epsilon);
    });

    it('should map -PI,-PI/2 to 0,0', () => {
      const epsilon = 0.000000001;
      const result = projection.project(
        new LatLng(
          new Latitude(new Radians(-Math.PI / 2)),
          new Longitude(new Radians(-Math.PI)),
        ),
      );

      expect(Number(result.lat)).closeTo(Number(0), epsilon);
      expect(Number(result.lng)).closeTo(Number(0), epsilon);
    });

    it('should map PI,PI/2 to 100,100', () => {
      const result = projection.project(
        new LatLng(
          new Latitude(new Radians(Math.PI / 2)),
          new Longitude(new Radians(Math.PI)),
        ),
      );

      const epsilon = 0.000000001;

      expect(Number(result.lat)).closeTo(Number(100), epsilon);
      expect(Number(result.lng)).closeTo(Number(100), epsilon);
    });
  });

  describe('inverseProject', () => {
    it('should map 50,50 to 0,0', () => {
      const epsilon = 1e-9;
      const result = projection.inverseProject(
        new LatLng(
          new Latitude(new DensityIndependentPoint(50)),
          new Longitude(new DensityIndependentPoint(50)),
        ),
      );

      expect(Number(result.lat)).closeTo(0, epsilon);
      expect(Number(result.lng)).closeTo(0, epsilon);
    });

    it('should map 0,0 to -PI,-PI/2', () => {
      const epsilon = 1e-9;
      const result = projection.inverseProject(
        new LatLng(
          new Latitude(new DensityIndependentPoint(0)),
          new Longitude(new DensityIndependentPoint(0)),
        ),
      );

      expect(Number(result.lat)).closeTo(
        Number(new Radians(-Math.PI / 2)),
        epsilon,
      );
      expect(Number(result.lng)).closeTo(
        Number(new Radians(-Math.PI)),
        epsilon,
      );
    });

    it('should map 100,100 to PI,PI/2', () => {
      const epsilon = 1e-9;
      const result = projection.inverseProject(
        new LatLng(
          new Latitude(new DensityIndependentPoint(100)),
          new Longitude(new DensityIndependentPoint(100)),
        ),
      );

      expect(Number(result.lat)).closeTo(
        Number(new Radians(Math.PI / 2)),
        epsilon,
      );
      expect(Number(result.lng)).closeTo(Number(new Radians(Math.PI)), epsilon);
    });
  });

  describe('project and inverseProject', () => {
    it('should return value close to the original input', () => {
      const N = 100;
      const epsilon = Math.sqrt(1e-9);

      for (
        let y = Number(new Radians(-Math.PI / 2));
        y < Number(new Radians(Math.PI / 2));
        y += Math.PI / N
      ) {
        for (
          let x = Number(new Radians(-Math.PI));
          x < Number(new Radians(Math.PI));
          x += (2 * Math.PI) / N
        ) {
          const p0 = new LatLng(
            new Latitude(new Radians(y)),
            new Longitude(new Radians(x)),
          );

          const p1 = projection.project(p0);
          const p2 = projection.inverseProject(p1);

          expect(Number(p0.lat)).closeTo(Number(p2.lat), epsilon);
          expect(Number(p0.lng)).closeTo(Number(p2.lng), epsilon);
        }
      }
    });
  });
});
