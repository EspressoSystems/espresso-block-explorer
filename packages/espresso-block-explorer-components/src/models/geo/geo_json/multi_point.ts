import {
  Codec,
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
  assertTypeCode,
} from '@/convert/codec/convert';
import { Degrees } from '../units';
import LatLng from '../units/LatLng';
import GeoJSONBoundingBox, {
  generateBoundingBoxFromBoundingBoxes,
} from './bounding_box';
import GeoJSONGeometry, { registerGeometryCodec } from './geometry';
import GeoJSONPoint from './point';
import { listGeoJSONPositionCodec } from './position';

const kGeoJSONMultiPointType = 'MultiPoint' as const;
/**
 * GeoJSONMultiPoint represents a collection of points within the GeoJSON
 * specification.
 */
export default class GeoJSONMultiPoint extends GeoJSONGeometry {
  readonly type = kGeoJSONMultiPointType;
  readonly coordinates: GeoJSONPoint[];
  readonly bbox: GeoJSONBoundingBox;

  constructor(coordinates: GeoJSONPoint[]) {
    super();
    this.coordinates = coordinates;
    this.bbox = generateBoundingBoxFromBoundingBoxes(coordinates);
  }

  [Symbol.iterator]() {
    return this.coordinates[Symbol.iterator]();
  }

  toJSON() {
    return geoJSONMultiPointCodec.encode(this);
  }
}

/**
 * A converter that can encode a GeoJSONMultiPoint into a GeoJSON object.
 */
class GeoJSONMultiPointEncoder implements Converter<GeoJSONMultiPoint> {
  readonly codec: Codec<LatLng<Degrees>[], unknown>;
  constructor(codec: Codec<LatLng<Degrees>[], unknown>) {
    this.codec = codec;
  }

  convert(input: GeoJSONMultiPoint) {
    return {
      type: input.type,
      coordinates: this.codec.encode(
        input.coordinates.map((point) => point.coordinates),
      ),
    } as const;
  }
}

/**
 * A converter that can decode a GeoJSON object into a GeoJSONMultiPoint.
 */
class GeoJSONMultiPointDecoder implements Converter<
  unknown,
  GeoJSONMultiPoint
> {
  readonly codec: Codec<LatLng<Degrees>[], unknown>;
  constructor(codec: Codec<LatLng<Degrees>[], unknown>) {
    this.codec = codec;
  }

  convert(input: unknown) {
    assertRecordWithKeys(input, 'type', 'coordinates');
    assertTypeCode(input, kGeoJSONMultiPointType);
    const points = this.codec.decode(input.coordinates);
    return new GeoJSONMultiPoint(
      points.map((point) => new GeoJSONPoint(point)),
    );
  }
}

/**
 * A codec that can encode and decode GeoJSONMultiPoint objects.
 */
class GeoJSONMultiPointCodec extends TypeCheckingCodec<
  GeoJSONMultiPoint,
  ReturnType<InstanceType<new () => GeoJSONMultiPointEncoder['convert']>>
> {
  readonly encoder = new GeoJSONMultiPointEncoder(listGeoJSONPositionCodec);
  readonly decoder = new GeoJSONMultiPointDecoder(listGeoJSONPositionCodec);
}

export const geoJSONMultiPointCodec = new GeoJSONMultiPointCodec();

registerGeometryCodec(kGeoJSONMultiPointType, geoJSONMultiPointCodec);
