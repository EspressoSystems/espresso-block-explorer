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
  generateBoundingBoxFromBoundingBoxes,
} from './bounding_box';
import GeoJSONGeometry, { registerGeometryCodec } from './geometry';
import GeoJSONLineString from './line_string';
import { listListGeoJSONPositionCodec } from './position';

const kGeoJSONMultiLineStringType = 'MultiLineString';

/**
 * A GeoJSON MultiLineString geometry is a collection of line strings that are
 * used to define paths.
 */
export default class GeoJSONMultiLineString extends GeoJSONGeometry {
  readonly type = kGeoJSONMultiLineStringType;
  readonly coordinates: GeoJSONLineString[];
  readonly bbox: GeoJSONBoundingBox;

  constructor(coordinates: GeoJSONLineString[]) {
    super();
    this.coordinates = coordinates;
    this.bbox = generateBoundingBoxFromBoundingBoxes(coordinates);
  }

  [Symbol.iterator]() {
    return this.coordinates[Symbol.iterator]();
  }

  toJSON() {
    return geoJSONMultiLineStringCodec.encode(this);
  }
}

/**
 * A converter that can encode a GeoJSONMultiLineString into a GeoJSON object.
 */
class GeoJSONMultiLineStringEncoder implements Converter<GeoJSONMultiLineString> {
  readonly codec: Codec<LatLng<Degrees>[][], unknown>;
  constructor(codec: Codec<LatLng<Degrees>[][], unknown>) {
    this.codec = codec;
  }

  convert(input: GeoJSONMultiLineString) {
    return {
      type: input.type,
      coordinates: this.codec.encode(
        input.coordinates.map((line) => line.coordinates),
      ),
    } as const;
  }
}

/**
 * A converter that can decode a GeoJSON object into a GeoJSONMultiLineString.
 */
class GeoJSONMultiLineStringDecoder implements Converter<
  unknown,
  GeoJSONMultiLineString
> {
  readonly codec: Codec<LatLng<Degrees>[][], unknown>;
  constructor(codec: Codec<LatLng<Degrees>[][], unknown>) {
    this.codec = codec;
  }

  convert(input: unknown) {
    assertRecordWithKeys(input, 'type', 'coordinates');
    assertTypeCode(input, kGeoJSONMultiLineStringType);
    const lines = this.codec.decode(input.coordinates);
    return new GeoJSONMultiLineString(
      lines.map((line) => new GeoJSONLineString(line)),
    );
  }
}

/**
 * A codec that can encode and decode GeoJSONMultiLineString objects.
 */
class GeoJSONMultiLineStringCodec extends TypeCheckingCodec<
  GeoJSONMultiLineString,
  ReturnType<InstanceType<new () => GeoJSONMultiLineStringEncoder['convert']>>
> {
  readonly encoder = new GeoJSONMultiLineStringEncoder(
    listListGeoJSONPositionCodec,
  );
  readonly decoder = new GeoJSONMultiLineStringDecoder(
    listListGeoJSONPositionCodec,
  );
}

export const geoJSONMultiLineStringCodec = new GeoJSONMultiLineStringCodec();

registerGeometryCodec(kGeoJSONMultiLineStringType, geoJSONMultiLineStringCodec);
