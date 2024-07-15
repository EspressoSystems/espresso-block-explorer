import {
  ArrayCodec,
  ArrayDecoder,
  ArrayEncoder,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec';
import InvalidTypeError from '@/errors/InvalidTypeError';
import Degrees from '../units/Degrees';
import LatLng from '../units/LatLng';
import Latitude from '../units/Latitude';
import Longitude from '../units/Longitude';

/**
 * So it turns out that in the GeoJSON specification, their minimum unit of
 * representation, called a "Position", supplies the longitude first rather
 * than the latitude.  This is the opposite order of what most libraries
 * provide when supplying these pairs.
 *
 * Reference:
 * https://datatracker.ietf.org/doc/html/rfc7946#section-3.1.1
 */

/**
 * A converter that can encode a LatLng into a GeoJSON Position representation.
 */
class GeoJSONPositionEncoder implements Converter<LatLng<Degrees>> {
  convert(input: LatLng<Degrees>) {
    return [Number(input.lng), Number(input.lat)] as const;
  }
}

/**
 * A converter that can decode a GeoJSON Position representation into a LatLng.
 */
class GeoJSONPositionDecoder implements Converter<unknown, LatLng<Degrees>> {
  convert(input: unknown) {
    if (!(input instanceof Array)) {
      throw new InvalidTypeError(typeof input, 'Array');
    }

    if (input.length !== 2) {
      throw new TypeError(`Expected array of length 2, got ${input.length}`);
    }

    return new LatLng(
      new Latitude(new Degrees(input[1])),
      new Longitude(new Degrees(input[0])),
    );
  }
}

/**
 * A codec that can encode and decode GeoJSON Position representation.
 */
class GeoJSONPositionCodec extends TypeCheckingCodec<
  LatLng<Degrees>,
  ReturnType<InstanceType<new () => GeoJSONPositionEncoder['convert']>>
> {
  readonly encoder = new GeoJSONPositionEncoder();
  readonly decoder = new GeoJSONPositionDecoder();
}

export const geoJSONPositionCodec = new GeoJSONPositionCodec();
export const listGeoJSONPositionCodec = new ArrayCodec(
  new ArrayDecoder(geoJSONPositionCodec),
  new ArrayEncoder(geoJSONPositionCodec),
);
export const listListGeoJSONPositionCodec = new ArrayCodec(
  new ArrayDecoder(listGeoJSONPositionCodec),
  new ArrayEncoder(listGeoJSONPositionCodec),
);
export const listListListGeoJSONPositionCodec = new ArrayCodec(
  new ArrayDecoder(listListGeoJSONPositionCodec),
  new ArrayEncoder(listListGeoJSONPositionCodec),
);
