import { describe, expect, it } from 'vitest';
import LatLng from '../../units/lat_lng';
import Latitude from '../../units/latitude';
import Longitude from '../../units/longitude';
import { createEdgeFunction } from '../../winding_number/edge_function';
import { sundaysWindingAlgorithm } from '../../winding_number/sunday';

describe("Sunday's Winding Number Algorithm", () => {
  describe('inside', () => {
    it('should return an odd number', () => {
      const polygon = [
        new LatLng(new Latitude(-1), new Longitude(-1)),
        new LatLng(new Latitude(1), new Longitude(-1)),
        new LatLng(new Latitude(1), new Longitude(1)),
        new LatLng(new Latitude(-1), new Longitude(1)),
      ];

      const point = new LatLng(new Latitude(0), new Longitude(0));
      const edgeFunction = createEdgeFunction(
        point,
        new LatLng(new Latitude(10), point.lng),
      );

      const number = sundaysWindingAlgorithm(point, edgeFunction, polygon);

      expect(number).not.equals(0);
    });
  });

  describe('outside', () => {
    it('should return an even number', () => {
      const polygon = [
        new LatLng(new Latitude(-1), new Longitude(-1)),
        new LatLng(new Latitude(1), new Longitude(-1)),
        new LatLng(new Latitude(1), new Longitude(1)),
        new LatLng(new Latitude(-1), new Longitude(1)),
      ];

      const point = new LatLng(new Latitude(-2), new Longitude(0));
      const edgeFunction = createEdgeFunction(
        point,
        new LatLng(new Latitude(10), point.lng),
      );

      const number = sundaysWindingAlgorithm(point, edgeFunction, polygon);

      expect(number).equals(0);
    });
  });

  describe('Simple Convex Shape', () => {
    const polygon = [
      new LatLng(new Latitude(-1), new Longitude(0)),
      new LatLng(new Latitude(-0.5), new Longitude(-1)),
      new LatLng(new Latitude(0), new Longitude(0)),
      new LatLng(new Latitude(0.5), new Longitude(-1)),
      new LatLng(new Latitude(1), new Longitude(0)),
      new LatLng(new Latitude(1), new Longitude(1)),
      new LatLng(new Latitude(-1), new Longitude(1)),
    ];

    it('should be an even number (outside)', () => {
      const point = new LatLng(new Latitude(-2), new Longitude(-0.75));
      const edgeFunction = createEdgeFunction(
        point,
        new LatLng(new Latitude(10), point.lng),
      );

      const number = sundaysWindingAlgorithm(point, edgeFunction, polygon);

      expect(number).equals(0);
    });

    it('should be an odd number (inside)', () => {
      const point = new LatLng(new Latitude(-0.5), new Longitude(-0.75));
      const edgeFunction = createEdgeFunction(
        point,
        new LatLng(new Latitude(10), point.lng),
      );

      const number = sundaysWindingAlgorithm(point, edgeFunction, polygon);

      expect(number).equals(0);
    });
  });

  describe('Overlapping Shape', () => {
    const polygon = [
      new LatLng(new Latitude(0), new Longitude(0)),
      new LatLng(new Latitude(4), new Longitude(0)),
      new LatLng(new Latitude(4), new Longitude(3)),
      new LatLng(new Latitude(1), new Longitude(3)),
      new LatLng(new Latitude(1), new Longitude(2)),
      new LatLng(new Latitude(3), new Longitude(2)),
      new LatLng(new Latitude(3), new Longitude(1)),
      new LatLng(new Latitude(2), new Longitude(1)),
      new LatLng(new Latitude(2), new Longitude(4)),
      new LatLng(new Latitude(0), new Longitude(4)),
    ];

    it('should be inside wn = 1', () => {
      const point = new LatLng(new Latitude(0.5), new Longitude(0.5));
      const edgeFunction = createEdgeFunction(
        point,
        new LatLng(new Latitude(10), point.lng),
      );

      const number = sundaysWindingAlgorithm(point, edgeFunction, polygon);

      expect(number).equals(1);
    });

    it('should be outside wn = 0', () => {
      const point = new LatLng(new Latitude(2.5), new Longitude(1.5));
      const edgeFunction = createEdgeFunction(
        point,
        new LatLng(new Latitude(10), point.lng),
      );

      const number = sundaysWindingAlgorithm(point, edgeFunction, polygon);

      expect(number).equals(0);
    });

    it('should be outside wn = 2', () => {
      const point = new LatLng(new Latitude(1.5), new Longitude(2.5));
      const edgeFunction = createEdgeFunction(
        point,
        new LatLng(new Latitude(10), point.lng),
      );

      const number = sundaysWindingAlgorithm(point, edgeFunction, polygon);

      expect(number).equals(2);
    });
  });
});
