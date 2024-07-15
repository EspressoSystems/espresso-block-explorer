import { Codec, Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { Degrees } from '../units';
import { default as LatLng } from '../units/LatLng';
import { default as GeoJSONBoundingBox } from './bounding_box';
import { default as GeoJSONGeometry } from './geometry';

/**
 * A GeoJSON LineString geometry is a collection of points that are
 * used to define paths.
 */
export default class GeoJSONLineString extends GeoJSONGeometry {
    readonly type = "LineString";
    readonly coordinates: LatLng<Degrees>[];
    readonly bbox: GeoJSONBoundingBox;
    constructor(coordinates: LatLng<Degrees>[]);
    [Symbol.iterator](): IterableIterator<LatLng<Degrees>>;
    toJSON(): {
        readonly type: "LineString";
        readonly coordinates: unknown;
    };
}
/**
 * A converter that can encode a GeoJSONLineString into a GeoJSON object.
 */
declare class GeoJSONLineStringEncoder implements Converter<GeoJSONLineString> {
    readonly codec: Codec<LatLng<Degrees>[], unknown>;
    constructor(codec: Codec<LatLng<Degrees>[], unknown>);
    convert(input: GeoJSONLineString): {
        readonly type: "LineString";
        readonly coordinates: unknown;
    };
}
/**
 * A converter that can decode a GeoJSON object into a GeoJSONLineString.
 */
declare class GeoJSONLineStringDecoder implements Converter<unknown, GeoJSONLineString> {
    readonly codec: Codec<LatLng<Degrees>[], unknown>;
    constructor(codec: Codec<LatLng<Degrees>[], unknown>);
    convert(input: unknown): GeoJSONLineString;
}
/**
 * A codec for encoding and decoding GeoJSONLineString objects.
 */
declare class GeoJSONLineStringCodec extends TypeCheckingCodec<GeoJSONLineString, ReturnType<InstanceType<new () => GeoJSONLineStringEncoder['convert']>>> {
    readonly encoder: GeoJSONLineStringEncoder;
    readonly decoder: GeoJSONLineStringDecoder;
}
export declare const geoJSONLineStringCodec: GeoJSONLineStringCodec;
export {};
