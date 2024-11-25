import { Codec, Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { Degrees } from '../units';
import { default as LatLng } from '../units/LatLng';
import { default as GeoJSONBoundingBox } from './bounding_box';
import { default as GeoJSONGeometry } from './geometry';
import { default as GeoJSONMultiPoint } from './multi_point';

/**
 * A GeoJSON Polygon geometry is a collection of linear rings that are
 * used to define bounding areas.  The polygons are meant to define
 * areas that will either be cut out, or added in depending on the
 * direction in which they are defined.  Clockwise polygons are
 * additive, counter-clockwise polygons are subtractive.
 */
export default class GeoJSONPolygon extends GeoJSONGeometry {
    readonly type = "Polygon";
    readonly coordinates: GeoJSONMultiPoint[];
    readonly bbox: GeoJSONBoundingBox;
    constructor(coordinates: GeoJSONMultiPoint[]);
    [Symbol.iterator](): ArrayIterator<GeoJSONMultiPoint>;
    toJSON(): {
        readonly type: "Polygon";
        readonly coordinates: unknown;
    };
}
/**
 * A converter that can encode a GeoJSONPolygon into a GeoJSON object.
 */
declare class GeoJSONPolygonEncoder implements Converter<GeoJSONPolygon> {
    readonly codec: Codec<LatLng<Degrees>[][], unknown>;
    constructor(codec: Codec<LatLng<Degrees>[][], unknown>);
    convert(input: GeoJSONPolygon): {
        readonly type: "Polygon";
        readonly coordinates: unknown;
    };
}
/**
 * A converter that can decode a GeoJSON object into a GeoJSONPolygon.
 */
declare class GeoJSONPolygonDecoder implements Converter<unknown, GeoJSONPolygon> {
    readonly codec: Codec<LatLng<Degrees>[][], unknown>;
    constructor(codec: Codec<LatLng<Degrees>[][], unknown>);
    convert(input: unknown): GeoJSONPolygon;
}
/**
 * A codec that can encode and decode GeoJSONPolygon objects.
 */
declare class GeoJSONPolygonCodec extends TypeCheckingCodec<GeoJSONPolygon, ReturnType<InstanceType<new () => GeoJSONPolygonEncoder['convert']>>> {
    readonly encoder: GeoJSONPolygonEncoder;
    readonly decoder: GeoJSONPolygonDecoder;
}
export declare const geoJSONPolygonCodec: GeoJSONPolygonCodec;
export {};
