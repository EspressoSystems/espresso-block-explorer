import {
  Codec,
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
  assertTypeCode,
} from '@/convert/codec/convert';
import { Degrees } from '../units';
import LatLng, { listListLatLngDegreesCodec } from '../units/LatLng';
import GeoJSONBoundingBox, {
  generateBoundingBoxFromBoundingBoxes,
} from './bounding_box';
import GeoJSONGeometry, { registerGeometryCodec } from './geometry';
import GeoJSONMultiPoint from './multi_point';
import GeoJSONPoint from './point';

const kGeoJSONPolygonType = 'Polygon';

/**
 * A GeoJSON Polygon geometry is a collection of linear rings that are
 * used to define bounding areas.  The polygons are meant to define
 * areas that will either be cut out, or added in depending on the
 * direction in which they are defined.  Clockwise polygons are
 * additive, counter-clockwise polygons are subtractive.
 */
export default class GeoJSONPolygon extends GeoJSONGeometry {
  readonly type = kGeoJSONPolygonType;
  readonly coordinates: GeoJSONMultiPoint[];
  readonly bbox: GeoJSONBoundingBox;

  constructor(coordinates: GeoJSONMultiPoint[]) {
    super();
    this.coordinates = coordinates;
    this.bbox = generateBoundingBoxFromBoundingBoxes(coordinates);
  }

  [Symbol.iterator]() {
    return this.coordinates[Symbol.iterator]();
  }

  toJSON() {
    return geoJSONPolygonCodec.encode(this);
  }
}

/**
 * A converter that can encode a GeoJSONPolygon into a GeoJSON object.
 */
class GeoJSONPolygonEncoder implements Converter<GeoJSONPolygon> {
  readonly codec: Codec<LatLng<Degrees>[][], unknown>;
  constructor(codec: Codec<LatLng<Degrees>[][], unknown>) {
    this.codec = codec;
  }

  convert(input: GeoJSONPolygon) {
    return {
      type: input.type,
      coordinates: this.codec.encode(
        input.coordinates.map((multipoint) =>
          multipoint.coordinates.map((point) => point.coordinates),
        ),
      ),
    } as const;
  }
}

/**
 * A converter that can decode a GeoJSON object into a GeoJSONPolygon.
 */
class GeoJSONPolygonDecoder implements Converter<unknown, GeoJSONPolygon> {
  readonly codec: Codec<LatLng<Degrees>[][], unknown>;
  constructor(codec: Codec<LatLng<Degrees>[][], unknown>) {
    this.codec = codec;
  }

  convert(input: unknown) {
    assertRecordWithKeys(input, 'type', 'coordinates');
    assertTypeCode(input, kGeoJSONPolygonType);
    const multiPoints = this.codec.decode(input.coordinates);

    return new GeoJSONPolygon(
      multiPoints.map(
        (multiPoint) =>
          new GeoJSONMultiPoint(
            multiPoint.map((point) => new GeoJSONPoint(point)),
          ),
      ),
    );
  }
}

/**
 * A codec that can encode and decode GeoJSONPolygon objects.
 */
class GeoJSONPolygonCodec extends TypeCheckingCodec<
  GeoJSONPolygon,
  ReturnType<InstanceType<new () => GeoJSONPolygonEncoder['convert']>>
> {
  readonly encoder = new GeoJSONPolygonEncoder(listListLatLngDegreesCodec);
  readonly decoder = new GeoJSONPolygonDecoder(listListLatLngDegreesCodec);
}

export const geoJSONPolygonCodec = new GeoJSONPolygonCodec();

registerGeometryCodec(kGeoJSONPolygonType, geoJSONPolygonCodec);
