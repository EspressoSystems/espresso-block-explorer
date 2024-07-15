import { describe, expect, it } from 'vitest';
import LatLng from '../../units/LatLng';
import Latitude from '../../units/Latitude';
import Longitude from '../../units/Longitude';
import { EdgeCrossing, createEdgeFunction } from '../edge_function';

describe('Edge Function', () => {
  describe('Right', () => {
    const point = new LatLng(new Latitude(0), new Longitude(-1));
    const end = new LatLng(new Latitude(0), new Longitude(1));
    const edgeFunction = createEdgeFunction(point, end);

    /*
      We are pointing from (-1, 0) to (1, 0).
      It should look like this:

      *----------->

    */

    it('(0, -1) should return right', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(-1), new Longitude(0))),
      ).equals(EdgeCrossing.right);
    });

    it('(0, 1) should return left', () => {
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

  describe('left', () => {
    const point = new LatLng(new Latitude(0), new Longitude(1));
    const end = new LatLng(new Latitude(0), new Longitude(-1));
    const edgeFunction = createEdgeFunction(point, end);

    /*
      We are pointing from (1, 0) to (-1, 0).
      It should look like this:

      <-----------*

    */

    it('(0, -1) should return left', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(-1), new Longitude(0))),
      ).equals(EdgeCrossing.left);
    });

    it('(0, 1) should return right', () => {
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

  describe('Down', () => {
    const point = new LatLng(new Latitude(1), new Longitude(0));
    const end = new LatLng(new Latitude(-1), new Longitude(0));
    const edgeFunction = createEdgeFunction(point, end);

    /*
      We are pointing from (0, 1) to (0, -1).
      It should look like this:

      *
      |
      |
      V

    */

    it('(1, 0) should return left', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(0), new Longitude(1))),
      ).equals(EdgeCrossing.left);
    });

    it('(-1, 0) should return right', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(0), new Longitude(-1))),
      ).equals(EdgeCrossing.right);
    });

    it('should return onEdge', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(0), new Longitude(0))),
      ).equals(EdgeCrossing.onEdge);
    });
  });

  describe('Up', () => {
    const point = new LatLng(new Latitude(-1), new Longitude(0));
    const end = new LatLng(new Latitude(1), new Longitude(0));
    const edgeFunction = createEdgeFunction(point, end);

    /*
      We are pointing from (0, -1) to (0, 1).
      It should look like this:

      ^
      |
      |
      *
    */

    it('(-1, 0) should return left', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(0), new Longitude(-1))),
      ).equals(EdgeCrossing.left);
    });

    it('(1, 0) should return right', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(0), new Longitude(1))),
      ).equals(EdgeCrossing.right);
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

    /*
      We are pointing from (-1, -1) to (1, 1).
      It should look like this:
        %
       /
      *
    */

    it('(-1, 1) should return left', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(1), new Longitude(-1))),
      ).equals(EdgeCrossing.left);
    });

    it('(1, -1) should return right', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(-1), new Longitude(1))),
      ).equals(EdgeCrossing.right);
    });

    it('should return onEdge', () => {
      expect(
        edgeFunction(new LatLng(new Latitude(0), new Longitude(0))),
      ).equals(EdgeCrossing.onEdge);
    });
  });
});
