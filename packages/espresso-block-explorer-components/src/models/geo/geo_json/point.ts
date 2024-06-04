import {
  Codec,
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
  assertTypeCode,
} from '@/convert/codec';
import { Degrees } from '../units';
import LatLng, { latLngDegreesCodec } from '../units/LatLng';
import GeoJSONBoundingBox from './bounding_box';
import GeoJSONGeometry, { registerGeometryCodec } from './geometry';

const kGeoJSONPointType = 'Point' as const;

/**
 * GeoJSONPoint represents a single point within the GeoJSON specification.
 */
export default class GeoJSONPoint extends GeoJSONGeometry {
  readonly type = kGeoJSONPointType;
  readonly coordinates: LatLng<Degrees>;
  readonly bbox: GeoJSONBoundingBox;

  constructor(coordinates: LatLng<Degrees>) {
    super();
    this.coordinates = coordinates;
    this.bbox = new GeoJSONBoundingBox(this.coordinates, this.coordinates);
  }

  toJSON(): object {
    return geoJSONPointCodec.encode(this);
  }
}

/**
 * A converter that can encode a GeoJSONPoint into a GeoJSON object.
 */
class GeoJSONPointEncoder implements Converter<GeoJSONPoint> {
  readonly codec: Codec<LatLng<Degrees>, unknown>;
  constructor(codec: Codec<LatLng<Degrees>, unknown>) {
    this.codec = codec;
  }

  convert(input: GeoJSONPoint) {
    return {
      type: input.type,
      coordinates: this.codec.encode(input.coordinates),
    } as const;
  }
}

/**
 * A converter that can decode a GeoJSON object into a GeoJSONPoint.
 */
class GeoJSONPointDecoder implements Converter<unknown, GeoJSONPoint> {
  readonly codec: Codec<LatLng<Degrees>, unknown>;
  constructor(codec: Codec<LatLng<Degrees>, unknown>) {
    this.codec = codec;
  }

  convert(input: unknown) {
    assertRecordWithKeys(input, 'type', 'coordinates');
    assertTypeCode(input, kGeoJSONPointType);
    return new GeoJSONPoint(this.codec.decode(input.coordinates));
  }
}

/**
 * A codec that can encode and decode GeoJSONPoint objects.
 */
class GeoJSONPointCodec extends TypeCheckingCodec<
  GeoJSONPoint,
  ReturnType<InstanceType<new () => GeoJSONPointEncoder['convert']>>
> {
  readonly encoder = new GeoJSONPointEncoder(latLngDegreesCodec);
  readonly decoder = new GeoJSONPointDecoder(latLngDegreesCodec);
}

export const geoJSONPointCodec = new GeoJSONPointCodec();

registerGeometryCodec(kGeoJSONPointType, geoJSONPointCodec);
