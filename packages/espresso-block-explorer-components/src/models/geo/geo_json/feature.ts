import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec';
import {
  Codec,
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
  assertTypeCode,
} from '@/convert/codec/convert';
import GeoJSONGeometry, { geoJSONGeometryCodec } from './geometry';

const kGeoJSONFeatureType = 'Feature' as const;

/**
 * A GeoJSON Feature is a single feature in a GeoJSON object.  This is the
 * object that represents a single feature in a GeoJSON object.
 * The underlying geometry can be any GeoJSONGeometry object.
 */
export default class GeoJSONFeature {
  readonly geometry: GeoJSONGeometry;
  readonly properties: unknown;

  get type() {
    return kGeoJSONFeatureType;
  }

  constructor(geometry: GeoJSONGeometry, properties: unknown) {
    this.geometry = geometry;
    this.properties = properties;
  }

  toJSON() {
    return geoJSONFeatureCodec.encode(this);
  }
}

/**
 * GeoJSONFeatureEncoder is a class that encodes a GeoJSONFeature object into
 * a JSON object.
 */
class GeoJSONFeatureEncoder implements Converter<GeoJSONFeature> {
  readonly geometryCodec: Codec<GeoJSONGeometry>;
  constructor(geometryCodec: Codec<GeoJSONGeometry>) {
    this.geometryCodec = geometryCodec;
  }

  convert(input: GeoJSONFeature) {
    return {
      type: input.type,
      geometry: this.geometryCodec.encode(input.geometry),
      properties: input.properties,
    } as const;
  }
}

/**
 * GeoJSONFeatureDecoder is a class that decodes a GeoJSONFeature object from
 * a JSON object.
 */
class GeoJSONFeatureDecoder implements Converter<unknown, GeoJSONFeature> {
  readonly geometryCodec: Codec<GeoJSONGeometry>;
  constructor(geometryCodec: Codec<GeoJSONGeometry>) {
    this.geometryCodec = geometryCodec;
  }

  convert(input: unknown) {
    assertRecordWithKeys(input, 'type', 'geometry');
    assertTypeCode(input, kGeoJSONFeatureType);
    return new GeoJSONFeature(
      this.geometryCodec.decode(input.geometry),
      'properties' in input ? input.properties : null,
    );
  }
}

/**
 * GeoJSONFeatureCodec is a codec for GeoJSONFeature objects.
 */
class GeoJSONFeatureCodec extends TypeCheckingCodec<
  GeoJSONFeature,
  ReturnType<InstanceType<new () => GeoJSONFeatureEncoder['convert']>>
> {
  readonly encoder = new GeoJSONFeatureEncoder(geoJSONGeometryCodec);
  readonly decoder = new GeoJSONFeatureDecoder(geoJSONGeometryCodec);
}

/**
 * geoJSONFeatureCodec is a codec for GeoJSONFeature objects, created so
 * multiple instances of the codec do not need to exist.
 */
export const geoJSONFeatureCodec = new GeoJSONFeatureCodec();

/**
 * listGeoJSONFeatureCodec is a codec for lists of GeoJSONFeature objects.
 */
export const listGeoJSONFeatureCodec = new ArrayCodec(
  new ArrayDecoder(geoJSONFeatureCodec),
  new ArrayEncoder(geoJSONFeatureCodec),
);
