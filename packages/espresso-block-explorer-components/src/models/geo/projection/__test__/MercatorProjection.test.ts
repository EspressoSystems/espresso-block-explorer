import { describe, expect, it } from 'vitest';
import LatLng from '../../units/LatLng';
import Latitude from '../../units/Latitude';
import Longitude from '../../units/Longitude';
import Radians from '../../units/Radians';
import MercatorProjection, { mercatorProjection } from '../MercatorProjection';

describe('Mercator Projection', () => {
  describe('project', () => {
    it('should map 0,0 to 0,0', () => {
      const result = mercatorProjection.project(
        new LatLng(new Latitude(new Radians(0)), new Longitude(new Radians(0))),
      );

      const epsilon = 0.000000001;

      expect(Number(result.lat)).closeTo(0, epsilon);
      expect(Number(result.lng)).closeTo(0, epsilon);
    });

    it('should map -PI,-PI/2 to -PI,-2PI', () => {
      const epsilon = 0.000000001;
      const result = mercatorProjection.project(
        new LatLng(MercatorProjection.min.lat, MercatorProjection.min.lng),
      );

      expect(Number(result.lat)).closeTo(
        Number(MercatorProjection.minProjection.lat),
        epsilon,
      );
      expect(Number(result.lng)).closeTo(
        Number(MercatorProjection.minProjection.lng),
        epsilon,
      );
    });

    it('should map PI,PI/2 to PI,2PI', () => {
      const result = mercatorProjection.project(
        new LatLng(MercatorProjection.max.lat, MercatorProjection.max.lng),
      );

      const epsilon = 0.000000001;

      expect(Number(result.lat)).closeTo(
        Number(MercatorProjection.maxProjection.lat),
        epsilon,
      );
      expect(Number(result.lng)).closeTo(
        Number(MercatorProjection.maxProjection.lng),
        epsilon,
      );
    });

    describe('outside of extreme bounds for longitude', () => {
      it('should result in the same value as the extreme bounds', () => {
        const resultN = mercatorProjection.project(
          new LatLng(
            new Latitude(new Radians(-Math.PI / 2)),
            new Longitude(new Radians(-Math.PI)),
          ),
        );

        const epsilon = 1e-9;
        expect(Number(resultN.lng)).closeTo(
          Number(MercatorProjection.minProjection.lng),
          epsilon,
        );

        const resultX = mercatorProjection.project(
          new LatLng(
            new Latitude(new Radians(Math.PI / 2)),
            new Longitude(new Radians(Math.PI)),
          ),
        );

        expect(Number(resultX.lng)).closeTo(
          Number(MercatorProjection.maxProjection.lng),
          epsilon,
        );
      });
    });
  });

  describe('inverseProject', () => {
    it('should map 0,0 to 0,0', () => {
      const epsilon = 1e-9;
      const result = mercatorProjection.inverseProject(
        new LatLng(new Latitude(new Radians(0)), new Longitude(new Radians(0))),
      );

      expect(Number(result.lat)).closeTo(0, epsilon);
      expect(Number(result.lng)).closeTo(0, epsilon);
    });

    it('should map -PI,-2PI to -PI,-PI/2', () => {
      const epsilon = 1e-9;
      const result = mercatorProjection.inverseProject(
        new LatLng(
          MercatorProjection.minProjection.lat,
          MercatorProjection.minProjection.lng,
        ),
      );

      expect(Number(result.lat)).closeTo(
        Number(MercatorProjection.min.lat),
        epsilon,
      );
      expect(Number(result.lng)).closeTo(
        Number(MercatorProjection.min.lng),
        epsilon,
      );
    });

    it('should map PI,2PI to PI,PI/2', () => {
      const epsilon = 1e-9;
      const result = mercatorProjection.inverseProject(
        new LatLng(
          MercatorProjection.maxProjection.lat,
          MercatorProjection.maxProjection.lng,
        ),
      );

      expect(Number(result.lat)).closeTo(
        Number(MercatorProjection.max.lat),
        epsilon,
      );
      expect(Number(result.lng)).closeTo(
        Number(MercatorProjection.max.lng),
        epsilon,
      );
    });
  });

  describe('project and inverseProject', () => {
    it('should return value close to the original input', () => {
      const N = 100;
      const epsilon = Math.sqrt(1e-9);

      for (
        let x = Number(MercatorProjection.min.lng);
        x < Number(MercatorProjection.max.lng);
        x += (2 * Math.PI) / N
      ) {
        for (
          let y = Number(MercatorProjection.min.lat);
          y < Number(MercatorProjection.max.lat);
          y += Math.PI / N
        ) {
          const p0 = new LatLng(
            new Latitude(new Radians(y)),
            new Longitude(new Radians(x)),
          );

          const p1 = mercatorProjection.project(p0);
          const p2 = mercatorProjection.inverseProject(p1);

          expect(Number(p0.lat)).closeTo(Number(p2.lat), epsilon);
          expect(Number(p0.lng)).closeTo(Number(p2.lng), epsilon);
        }
      }
    });
  });
});
