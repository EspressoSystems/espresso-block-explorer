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
import GeoJSONMultiPoint from './multi_point';
import GeoJSONPoint from './point';
import GeoJSONPolygon from './polygon';
import { listListListGeoJSONPositionCodec } from './position';
const kGeoJSONMultiPolygonType = 'MultiPolygon';

/**
 * A GeoJSON MultiPolygon geometry is a collection of polygons that are
 * used to define bounding areas.
 */
export default class GeoJSONMultiPolygon extends GeoJSONGeometry {
  readonly type = kGeoJSONMultiPolygonType;
  readonly coordinates: GeoJSONPolygon[];
  readonly bbox: GeoJSONBoundingBox;

  constructor(coordinates: GeoJSONPolygon[]) {
    super();
    this.coordinates = coordinates;
    this.bbox = generateBoundingBoxFromBoundingBoxes(coordinates);
  }

  [Symbol.iterator]() {
    return this.coordinates[Symbol.iterator]();
  }

  toJSON() {
    return geoJSONMultiPolygonCodec.encode(this);
  }
}

/**
 * A converter that can encode a GeoJSONMultiPolygon into a GeoJSON object.
 */
class GeoJSONMultiPolygonEncoder implements Converter<GeoJSONMultiPolygon> {
  readonly codec: Codec<LatLng<Degrees>[][][], unknown>;
  constructor(codec: Codec<LatLng<Degrees>[][][], unknown>) {
    this.codec = codec;
  }

  convert(input: GeoJSONMultiPolygon) {
    return {
      type: input.type,
      coordinates: this.codec.encode(
        input.coordinates.map((polygon) =>
          polygon.coordinates.map((multiPoint) =>
            multiPoint.coordinates.map((point) => point.coordinates),
          ),
        ),
      ),
    } as const;
  }
}

/**
 * A converter that can decode a GeoJSON object into a GeoJSONMultiPolygon.
 */
class GeoJSONMultiPolygonDecoder
  implements Converter<unknown, GeoJSONMultiPolygon>
{
  readonly codec: Codec<LatLng<Degrees>[][][], unknown>;
  constructor(codec: Codec<LatLng<Degrees>[][][], unknown>) {
    this.codec = codec;
  }

  convert(input: unknown) {
    assertRecordWithKeys(input, 'type', 'coordinates');
    assertTypeCode(input, kGeoJSONMultiPolygonType);
    const multiPolygons = this.codec.decode(input.coordinates);

    return new GeoJSONMultiPolygon(
      multiPolygons.map(
        (polygon) =>
          new GeoJSONPolygon(
            polygon.map(
              (multiPoint) =>
                new GeoJSONMultiPoint(
                  multiPoint.map((point) => new GeoJSONPoint(point)),
                ),
            ),
          ),
      ),
    );
  }
}

/**
 * A codec that can encode and decode GeoJSONMultiPolygon objects.
 */
class GeoJSONMultiPolygonCodec extends TypeCheckingCodec<
  GeoJSONMultiPolygon,
  ReturnType<InstanceType<new () => GeoJSONMultiPolygonEncoder['convert']>>
> {
  readonly encoder = new GeoJSONMultiPolygonEncoder(
    listListListGeoJSONPositionCodec,
  );
  readonly decoder = new GeoJSONMultiPolygonDecoder(
    listListListGeoJSONPositionCodec,
  );
}

export const geoJSONMultiPolygonCodec = new GeoJSONMultiPolygonCodec();

registerGeometryCodec(kGeoJSONMultiPolygonType, geoJSONMultiPolygonCodec);
