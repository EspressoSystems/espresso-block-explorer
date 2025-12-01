import {
  Codec,
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
  assertTypeCode,
} from '@/convert/codec/convert';
import GeoJSONBoundingBox, {
  generateBoundingBoxFromBoundingBoxes,
} from './bounding_box';
import GeoJSONGeometry, {
  listGeoJsonGeometryCodec,
  registerGeometryCodec,
} from './geometry';

const kGeoJSONGeometryCollectionType = 'GeometryCollection';

/**
 * A GeoJSON Geometry Collection is a collection of GeoJSON geometries.  This is
 * the top level object that is used to represent a collection of geometries.
 */
export default class GeoJSONGeometryCollection extends GeoJSONGeometry {
  readonly type = kGeoJSONGeometryCollectionType;
  readonly geometries: GeoJSONGeometry[];
  readonly bbox: GeoJSONBoundingBox;

  constructor(geometries: GeoJSONGeometry[]) {
    super();
    this.geometries = geometries;
    this.bbox = generateBoundingBoxFromBoundingBoxes(geometries);
  }

  toJSON() {
    return geoJSONGeometryCollectionCodec.encode(this);
  }
}

/**
 * GeoJSONGeometryCollectionEncoder is a class that encodes a
 * GeoJSONGeometryCollection object into a JSON compatible object.
 */
class GeoJSONGeometryCollectionEncoder implements Converter<GeoJSONGeometryCollection> {
  readonly listGeometryCodec: Codec<GeoJSONGeometry[]>;
  constructor(listGeometryCodec: Codec<GeoJSONGeometry[]>) {
    this.listGeometryCodec = listGeometryCodec;
  }

  convert(input: GeoJSONGeometryCollection) {
    return {
      type: input.type,
      geometries: this.listGeometryCodec.encode(input.geometries),
    } as const;
  }
}

/**
 * GeoJSONGeometryCollectionDecoder is a class that decodes a JSON compatible
 * object into a GeoJSONGeometryCollection object.
 */
class GeoJSONGeometryCollectionDecoder implements Converter<
  unknown,
  GeoJSONGeometryCollection
> {
  readonly listGeometryCodec: Codec<GeoJSONGeometry[]>;
  constructor(listGeometryCodec: Codec<GeoJSONGeometry[]>) {
    this.listGeometryCodec = listGeometryCodec;
  }

  convert(input: unknown) {
    assertRecordWithKeys(input, 'type', 'geometries');
    assertTypeCode(input, kGeoJSONGeometryCollectionType);

    return new GeoJSONGeometryCollection(
      this.listGeometryCodec.decode(input.geometries),
    );
  }
}

/**
 * A codec that can encode and decode GeoJSONGeometryCollection objects.
 * This codec is registered with the geometry registry.
 */
class GeoJSONGeometryCollectionCodec extends TypeCheckingCodec<
  GeoJSONGeometryCollection,
  ReturnType<
    InstanceType<new () => GeoJSONGeometryCollectionEncoder['convert']>
  >
> {
  readonly encoder = new GeoJSONGeometryCollectionEncoder(
    listGeoJsonGeometryCodec,
  );
  readonly decoder = new GeoJSONGeometryCollectionDecoder(
    listGeoJsonGeometryCodec,
  );
}

export const geoJSONGeometryCollectionCodec =
  new GeoJSONGeometryCollectionCodec();

registerGeometryCodec(
  kGeoJSONGeometryCollectionType,
  geoJSONGeometryCollectionCodec,
);
