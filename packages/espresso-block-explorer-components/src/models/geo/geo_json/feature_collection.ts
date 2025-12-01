import {
  Codec,
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
  assertTypeCode,
} from '@/convert/codec/convert';
import GeoJSONFeature, { listGeoJSONFeatureCodec } from './feature';

const kGeoJSONFeatureCollectionType = 'FeatureCollection' as const;

/**
 * A GeoJSON Feature Collection is a collection of GeoJSON features.  This is
 * the top level object that is used to represent a collection of features.
 */
export default class GeoJSONFeatureCollection {
  readonly features: GeoJSONFeature[];

  get type() {
    return kGeoJSONFeatureCollectionType;
  }

  constructor(features: GeoJSONFeature[]) {
    this.features = features;
  }

  toJSON() {
    return geoJSONFeatureCollectionCodec.encode(this);
  }
}

/**
 * GeoJSONFeatureCollectionEncoder is a class that encodes a
 * GeoJSONFeatureCollection object into a JSON compatible object.
 */
class GeoJSONFeatureCollectionEncoder implements Converter<GeoJSONFeatureCollection> {
  readonly codec: Codec<GeoJSONFeature[]>;
  constructor(codec: Codec<GeoJSONFeature[]>) {
    this.codec = codec;
  }

  convert(input: GeoJSONFeatureCollection) {
    return {
      type: input.type,
      features: this.codec.encode(input.features),
    } as const;
  }
}

/**
 * GeoJSONFeatureCollectionDecoder is a class that decodes a JSON compatible
 * object into a GeoJSONFeatureCollection object.
 */
class GeoJSONFeatureCollectionDecoder implements Converter<
  unknown,
  GeoJSONFeatureCollection
> {
  readonly codec: Codec<GeoJSONFeature[]>;
  constructor(codec: Codec<GeoJSONFeature[]>) {
    this.codec = codec;
  }

  convert(input: unknown) {
    assertRecordWithKeys(input, 'type', 'features');
    assertTypeCode(input, kGeoJSONFeatureCollectionType);
    return new GeoJSONFeatureCollection(this.codec.decode(input.features));
  }
}

/**
 * GeoJSONFeatureCollectionCodec is a codec that can encode and decode
 * GeoJSONFeatureCollection objects.
 */
class GeoJSONFeatureCollectionCodec extends TypeCheckingCodec<
  GeoJSONFeatureCollection,
  ReturnType<InstanceType<new () => GeoJSONFeatureCollectionEncoder['convert']>>
> {
  readonly encoder = new GeoJSONFeatureCollectionEncoder(
    listGeoJSONFeatureCodec,
  );
  readonly decoder = new GeoJSONFeatureCollectionDecoder(
    listGeoJSONFeatureCodec,
  );
}

/**
 * geoJSONFeatureCollectionCodec is a codec for GeoJSONFeatureCollection objects.
 */
export const geoJSONFeatureCollectionCodec =
  new GeoJSONFeatureCollectionCodec();
