import {
  Codec,
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
  assertTypeCode,
} from '@/convert/codec/convert';
import { Degrees } from '../units';
import LatLng from '../units/lat_lng';
import GeoJSONBoundingBox, {
  generateBoundingBoxFromMinMaxes,
} from './bounding_box';
import GeoJSONGeometry, { registerGeometryCodec } from './geometry';
import { listGeoJSONPositionCodec } from './position';

const kGeoJSONLineStringType = 'LineString';

/**
 * A GeoJSON LineString geometry is a collection of points that are
 * used to define paths.
 */
export default class GeoJSONLineString extends GeoJSONGeometry {
  readonly type = kGeoJSONLineStringType;
  readonly coordinates: LatLng<Degrees>[];
  readonly bbox: GeoJSONBoundingBox;

  constructor(coordinates: LatLng<Degrees>[]) {
    super();
    this.coordinates = coordinates;
    this.bbox = generateBoundingBoxFromMinMaxes(coordinates);
  }

  [Symbol.iterator]() {
    return this.coordinates[Symbol.iterator]();
  }

  toJSON() {
    return geoJSONLineStringCodec.encode(this);
  }
}

/**
 * A converter that can encode a GeoJSONLineString into a GeoJSON object.
 */
class GeoJSONLineStringEncoder implements Converter<GeoJSONLineString> {
  readonly codec: Codec<LatLng<Degrees>[], unknown>;
  constructor(codec: Codec<LatLng<Degrees>[], unknown>) {
    this.codec = codec;
  }

  convert(input: GeoJSONLineString) {
    return {
      type: input.type,
      coordinates: this.codec.encode(input.coordinates),
    } as const;
  }
}

/**
 * A converter that can decode a GeoJSON object into a GeoJSONLineString.
 */
class GeoJSONLineStringDecoder implements Converter<
  unknown,
  GeoJSONLineString
> {
  readonly codec: Codec<LatLng<Degrees>[], unknown>;
  constructor(codec: Codec<LatLng<Degrees>[], unknown>) {
    this.codec = codec;
  }

  convert(input: unknown) {
    assertRecordWithKeys(input, 'type', 'coordinates');
    assertTypeCode(input, kGeoJSONLineStringType);
    const points = this.codec.decode(input.coordinates);
    return new GeoJSONLineString(points);
  }
}

/**
 * A codec for encoding and decoding GeoJSONLineString objects.
 */
class GeoJSONLineStringCodec extends TypeCheckingCodec<
  GeoJSONLineString,
  ReturnType<InstanceType<new () => GeoJSONLineStringEncoder['convert']>>
> {
  readonly encoder = new GeoJSONLineStringEncoder(listGeoJSONPositionCodec);
  readonly decoder = new GeoJSONLineStringDecoder(listGeoJSONPositionCodec);
}

export const geoJSONLineStringCodec = new GeoJSONLineStringCodec();

registerGeometryCodec(kGeoJSONLineStringType, geoJSONLineStringCodec);
