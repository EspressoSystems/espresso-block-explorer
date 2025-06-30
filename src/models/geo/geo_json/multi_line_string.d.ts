import { Codec, Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { Degrees } from '../units';
import { default as LatLng } from '../units/LatLng';
import { default as GeoJSONBoundingBox } from './bounding_box';
import { default as GeoJSONGeometry } from './geometry';
import { default as GeoJSONLineString } from './line_string';
/**
 * A GeoJSON MultiLineString geometry is a collection of line strings that are
 * used to define paths.
 */
export default class GeoJSONMultiLineString extends GeoJSONGeometry {
    readonly type = "MultiLineString";
    readonly coordinates: GeoJSONLineString[];
    readonly bbox: GeoJSONBoundingBox;
    constructor(coordinates: GeoJSONLineString[]);
    [Symbol.iterator](): ArrayIterator<GeoJSONLineString>;
    toJSON(): {
        readonly type: "MultiLineString";
        readonly coordinates: unknown;
    };
}
/**
 * A converter that can encode a GeoJSONMultiLineString into a GeoJSON object.
 */
declare class GeoJSONMultiLineStringEncoder implements Converter<GeoJSONMultiLineString> {
    readonly codec: Codec<LatLng<Degrees>[][], unknown>;
    constructor(codec: Codec<LatLng<Degrees>[][], unknown>);
    convert(input: GeoJSONMultiLineString): {
        readonly type: "MultiLineString";
        readonly coordinates: unknown;
    };
}
/**
 * A converter that can decode a GeoJSON object into a GeoJSONMultiLineString.
 */
declare class GeoJSONMultiLineStringDecoder implements Converter<unknown, GeoJSONMultiLineString> {
    readonly codec: Codec<LatLng<Degrees>[][], unknown>;
    constructor(codec: Codec<LatLng<Degrees>[][], unknown>);
    convert(input: unknown): GeoJSONMultiLineString;
}
/**
 * A codec that can encode and decode GeoJSONMultiLineString objects.
 */
declare class GeoJSONMultiLineStringCodec extends TypeCheckingCodec<GeoJSONMultiLineString, ReturnType<InstanceType<new () => GeoJSONMultiLineStringEncoder['convert']>>> {
    readonly encoder: GeoJSONMultiLineStringEncoder;
    readonly decoder: GeoJSONMultiLineStringDecoder;
}
export declare const geoJSONMultiLineStringCodec: GeoJSONMultiLineStringCodec;
export {};
