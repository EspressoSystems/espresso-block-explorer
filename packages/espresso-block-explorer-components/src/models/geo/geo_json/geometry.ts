import {
  ArrayCodec,
  ArrayDecoder,
  ArrayEncoder,
  Codec,
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
  isString,
} from '@/convert/codec';
import InvalidTypeError from '@/errors/invalid_type_error';
import NoCodecFoundError from '@/errors/no_codec_found_error';
import GeoJSONBoundingBox from './bounding_box';

/**
 * GeoJSONGeometry is a parent class of the different types of geometries
 * represented within the GeoJSON specification.
 */
export default abstract class GeoJSONGeometry {
  abstract get type(): string;
  abstract get bbox(): GeoJSONBoundingBox;

  abstract toJSON(): object;
}

/**
 * geometryCodecs is a collection of codecs registered by their identifying
 * string to be used to encode and decode GeoJSONGeometry objects.
 */
const geometryCodecs: Map<string, Codec<GeoJSONGeometry>> = new Map();

/**
 * registerGeometryCodec registers a codec to be used to encode and decode a
 * specific type of GeoJSONGeometry object.
 */
export function registerGeometryCodec<
  S extends string,
  C extends Codec<GeoJSONGeometry>,
>(key: S, codec: C) {
  geometryCodecs.set(key, codec);
}

/**
 * lookupGeometryCodec looks up a codec by its identifying string to be used to
 * encode and decode a specific type of GeoJSONGeometry object.
 */
export function lookupGeometryCodec<S extends string>(
  key: S,
): Codec<GeoJSONGeometry> {
  const codec = geometryCodecs.get(key);
  if (!codec) {
    throw new NoCodecFoundError(key);
  }

  return codec;
}

/**
 * GeoJSONGeometryEncoder is a class that encodes a GeoJSONGeometry object into
 * a JSON compatible object.
 * This class uses the codecs stored within the registry to encode the object.
 */
class GeoJSONGeometryEncoder implements Converter<GeoJSONGeometry, unknown> {
  convert(input: GeoJSONGeometry) {
    const codec = lookupGeometryCodec(input.type);
    return codec.encode(input);
  }
}

/**
 * GeoJSONGeometryDecoder is a class that decodes a JSON compatible object into
 * a GeoJSONGeometry object.
 * This class uses the codecs stored within the registry to decode the object.
 */
class GeoJSONGeometryDecoder implements Converter<unknown, GeoJSONGeometry> {
  convert(input: unknown) {
    assertRecordWithKeys(input, 'type', 'coordinates');
    if (!isString(input.type)) {
      throw new InvalidTypeError(typeof input.type, 'string');
    }

    const codec = lookupGeometryCodec(input.type);
    return codec.decode(input);
  }
}

/**
 * GeoJSONGeometryCodec is a codec for GeoJSONGeometry objects.
 * This class uses the GeoJSONGeometryEncoder and GeoJSONGeometryDecoder to
 * encode and decode the object.
 * This class is ultimately backed by the geometry codec registry.
 */
class GeoJSONGeometryCodec extends TypeCheckingCodec<GeoJSONGeometry> {
  readonly encoder: Converter<GeoJSONGeometry>;
  readonly decoder: Converter<unknown, GeoJSONGeometry>;
  constructor() {
    super();
    this.encoder = new GeoJSONGeometryEncoder();
    this.decoder = new GeoJSONGeometryDecoder();
  }
}

export const geoJSONGeometryCodec = new GeoJSONGeometryCodec();
export const listGeoJsonGeometryCodec = new ArrayCodec(
  new ArrayDecoder(geoJSONGeometryCodec),
  new ArrayEncoder(geoJSONGeometryCodec),
);
