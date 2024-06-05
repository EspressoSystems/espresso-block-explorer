import { describe, expect, it } from 'vitest';
import LatLng from '../../units/LatLng';
import Latitude from '../../units/Latitude';
import Longitude from '../../units/Longitude';
import { EdgeCrossing, createEdgeFunction } from '../edge_function';

describe('Edge Function', () => {
  describe('Up', () => {
    const point = new LatLng(new Latitude(0), new Longitude(-1));
    const end = new LatLng(new Latitude(0), new Longitude(1));
    const edgeFunction = createEdgeFunction(point, end);

    it('should return left', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(-1), new Longitude(0))),
      ).equals(EdgeCrossing.left);
    });

    it('should return right', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(1), new Longitude(0))),
      ).equals(EdgeCrossing.right);
    });

    it('should return onEdge', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(0), new Longitude(0))),
      ).equals(EdgeCrossing.onEdge);
    });
  });

  describe('down', () => {
    const point = new LatLng(new Latitude(0), new Longitude(1));
    const end = new LatLng(new Latitude(0), new Longitude(-1));
    const edgeFunction = createEdgeFunction(point, end);

    it('should return right', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(-1), new Longitude(0))),
      ).equals(EdgeCrossing.right);
    });

    it('should return left', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(1), new Longitude(0))),
      ).equals(EdgeCrossing.left);
    });

    it('should return onEdge', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(0), new Longitude(0))),
      ).equals(EdgeCrossing.onEdge);
    });
  });

  describe('Left', () => {
    const point = new LatLng(new Latitude(1), new Longitude(0));
    const end = new LatLng(new Latitude(-1), new Longitude(0));
    const edgeFunction = createEdgeFunction(point, end);

    it('should return right', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(0), new Longitude(1))),
      ).equals(EdgeCrossing.right);
    });

    it('should return left', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(0), new Longitude(-1))),
      ).equals(EdgeCrossing.left);
    });

    it('should return onEdge', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(0), new Longitude(0))),
      ).equals(EdgeCrossing.onEdge);
    });
  });

  describe('Right', () => {
    const point = new LatLng(new Latitude(-1), new Longitude(0));
    const end = new LatLng(new Latitude(1), new Longitude(0));
    const edgeFunction = createEdgeFunction(point, end);

    it('should return right', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(0), new Longitude(-1))),
      ).equals(EdgeCrossing.right);
    });

    it('should return left', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(0), new Longitude(1))),
      ).equals(EdgeCrossing.left);
    });

    it('should return onEdge', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(0), new Longitude(0))),
      ).equals(EdgeCrossing.onEdge);
    });
  });

  describe('Top Right', () => {
    const point = new LatLng(new Latitude(-1), new Longitude(-1));
    const end = new LatLng(new Latitude(1), new Longitude(1));
    const edgeFunction = createEdgeFunction(point, end);

    it('should return right', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(1), new Longitude(-1))),
      ).equals(EdgeCrossing.right);
    });

    it('should return left', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(-1), new Longitude(1))),
      ).equals(EdgeCrossing.left);
    });

    it('should return onEdge', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(0), new Longitude(0))),
      ).equals(EdgeCrossing.onEdge);
    });
  });
});
