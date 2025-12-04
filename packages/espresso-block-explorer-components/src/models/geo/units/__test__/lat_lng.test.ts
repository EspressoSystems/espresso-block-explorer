import { describe, expect, it } from 'vitest';
import Degrees from '../degrees';
import LatLng, { latLngDegreesCodec, latLngRadiansCodec } from '../lat_lng';
import Latitude from '../latitude';
import Longitude from '../longitude';
import Radians from '../radians';

describe('LatLng', () => {
  describe('Degrees', () => {
    describe('toString', () => {
      it('should return the value with a "lng" suffix', () => {
        const latLng = new LatLng(
          new Latitude(new Degrees(0)),
          new Longitude(new Degrees(0)),
        );
        expect(latLng.toString()).equals('0° lat, 0° lng');
      });
    });

    describe('max', () => {
      it('should return the maximum value', () => {
        const p1 = new LatLng(
          new Latitude(new Degrees(0)),
          new Longitude(new Degrees(0)),
        );
        const p2 = new LatLng(
          new Latitude(new Degrees(1)),
          new Longitude(new Degrees(1)),
        );

        expect(p1.max(p2)).deep.equals(p2);
      });

      it('should only change the necessary value', () => {
        const p1 = new LatLng(
          new Latitude(new Degrees(1)),
          new Longitude(new Degrees(0)),
        );
        const p2 = new LatLng(
          new Latitude(new Degrees(0)),
          new Longitude(new Degrees(1)),
        );
        const p3 = new LatLng(p1.lat, p2.lng);

        expect(p1.max(p2)).deep.equals(p3);
      });
    });

    describe('min', () => {
      it('should return the minimum value', () => {
        const p1 = new LatLng(
          new Latitude(new Degrees(0)),
          new Longitude(new Degrees(0)),
        );
        const p2 = new LatLng(
          new Latitude(new Degrees(1)),
          new Longitude(new Degrees(1)),
        );

        expect(p1.min(p2)).deep.equals(p1);
      });

      it('should only change the necessary value', () => {
        const p1 = new LatLng(
          new Latitude(new Degrees(1)),
          new Longitude(new Degrees(0)),
        );
        const p2 = new LatLng(
          new Latitude(new Degrees(0)),
          new Longitude(new Degrees(1)),
        );
        const p3 = new LatLng(p2.lat, p1.lng);

        expect(p1.min(p2)).deep.equals(p3);
      });
    });

    describe('Codec', () => {
      it('should encode and decode the value', () => {
        const latLng = new LatLng(
          new Latitude(new Degrees(0)),
          new Longitude(new Degrees(0)),
        );
        const encoded = latLngDegreesCodec.encode(latLng);
        const decoded = latLngDegreesCodec.decode(encoded);
        expect(decoded).deep.equals(latLng);
      });

      it('should decode to the correct types', () => {
        const latLng = latLngDegreesCodec.decode([0, 0]);

        expect(latLng.lat).instanceOf(Latitude);
        expect(latLng.lng).instanceOf(Longitude);
        expect(latLng.lat.value).instanceOf(Degrees);
        expect(latLng.lng.value).instanceOf(Degrees);
      });

      it('should throw when not given an array', () => {
        expect(() => latLngDegreesCodec.decode(1)).to.throws();
        expect(() => latLngDegreesCodec.decode('')).to.throws();
        expect(() => latLngDegreesCodec.decode({})).to.throws();
        expect(() => latLngDegreesCodec.decode(null)).to.throws();
        expect(() => latLngDegreesCodec.decode(undefined)).to.throws();
      });

      it('should throw when not given an array two elements', () => {
        expect(() => latLngDegreesCodec.decode([])).to.throws();
        expect(() => latLngDegreesCodec.decode([1])).to.throws();
        expect(() => latLngDegreesCodec.decode([1, 2, 3])).to.throws();
      });
    });
  });

  describe('Radians', () => {
    describe('Codec', () => {
      it('should encode and decode the value', () => {
        const latLng = new LatLng(
          new Latitude(new Radians(0)),
          new Longitude(new Radians(0)),
        );
        const encoded = latLngRadiansCodec.encode(latLng);
        const decoded = latLngRadiansCodec.decode(encoded);
        expect(decoded).deep.equals(latLng);
      });

      it('should decode to the correct types', () => {
        const latLng = latLngRadiansCodec.decode([0, 0]);

        expect(latLng.lat).instanceOf(Latitude);
        expect(latLng.lng).instanceOf(Longitude);
        expect(latLng.lat.value).instanceOf(Radians);
        expect(latLng.lng.value).instanceOf(Radians);
      });
    });
  });
});
