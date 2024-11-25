import { Codec, Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { Degrees } from '../units';
import { default as LatLng } from '../units/LatLng';
import { default as GeoJSONBoundingBox } from './bounding_box';
import { default as GeoJSONGeometry } from './geometry';
import { default as GeoJSONPolygon } from './polygon';

/**
 * A GeoJSON MultiPolygon geometry is a collection of polygons that are
 * used to define bounding areas.
 */
export default class GeoJSONMultiPolygon extends GeoJSONGeometry {
    readonly type = "MultiPolygon";
    readonly coordinates: GeoJSONPolygon[];
    readonly bbox: GeoJSONBoundingBox;
    constructor(coordinates: GeoJSONPolygon[]);
    [Symbol.iterator](): ArrayIterator<GeoJSONPolygon>;
    toJSON(): {
        readonly type: "MultiPolygon";
        readonly coordinates: unknown;
    };
}
/**
 * A converter that can encode a GeoJSONMultiPolygon into a GeoJSON object.
 */
declare class GeoJSONMultiPolygonEncoder implements Converter<GeoJSONMultiPolygon> {
    readonly codec: Codec<LatLng<Degrees>[][][], unknown>;
    constructor(codec: Codec<LatLng<Degrees>[][][], unknown>);
    convert(input: GeoJSONMultiPolygon): {
        readonly type: "MultiPolygon";
        readonly coordinates: unknown;
    };
}
/**
 * A converter that can decode a GeoJSON object into a GeoJSONMultiPolygon.
 */
declare class GeoJSONMultiPolygonDecoder implements Converter<unknown, GeoJSONMultiPolygon> {
    readonly codec: Codec<LatLng<Degrees>[][][], unknown>;
    constructor(codec: Codec<LatLng<Degrees>[][][], unknown>);
    convert(input: unknown): GeoJSONMultiPolygon;
}
/**
 * A codec that can encode and decode GeoJSONMultiPolygon objects.
 */
declare class GeoJSONMultiPolygonCodec extends TypeCheckingCodec<GeoJSONMultiPolygon, ReturnType<InstanceType<new () => GeoJSONMultiPolygonEncoder['convert']>>> {
    readonly encoder: GeoJSONMultiPolygonEncoder;
    readonly decoder: GeoJSONMultiPolygonDecoder;
}
export declare const geoJSONMultiPolygonCodec: GeoJSONMultiPolygonCodec;
export {};
