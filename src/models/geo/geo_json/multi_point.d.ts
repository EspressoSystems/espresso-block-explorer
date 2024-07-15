import { Codec, Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { Degrees } from '../units';
import { default as LatLng } from '../units/LatLng';
import { default as GeoJSONBoundingBox } from './bounding_box';
import { default as GeoJSONGeometry } from './geometry';
import { default as GeoJSONPoint } from './point';

/**
 * GeoJSONMultiPoint represents a collection of points within the GeoJSON
 * specification.
 */
export default class GeoJSONMultiPoint extends GeoJSONGeometry {
    readonly type: "MultiPoint";
    readonly coordinates: GeoJSONPoint[];
    readonly bbox: GeoJSONBoundingBox;
    constructor(coordinates: GeoJSONPoint[]);
    [Symbol.iterator](): IterableIterator<GeoJSONPoint>;
    toJSON(): {
        readonly type: "MultiPoint";
        readonly coordinates: unknown;
    };
}
/**
 * A converter that can encode a GeoJSONMultiPoint into a GeoJSON object.
 */
declare class GeoJSONMultiPointEncoder implements Converter<GeoJSONMultiPoint> {
    readonly codec: Codec<LatLng<Degrees>[], unknown>;
    constructor(codec: Codec<LatLng<Degrees>[], unknown>);
    convert(input: GeoJSONMultiPoint): {
        readonly type: "MultiPoint";
        readonly coordinates: unknown;
    };
}
/**
 * A converter that can decode a GeoJSON object into a GeoJSONMultiPoint.
 */
declare class GeoJSONMultiPointDecoder implements Converter<unknown, GeoJSONMultiPoint> {
    readonly codec: Codec<LatLng<Degrees>[], unknown>;
    constructor(codec: Codec<LatLng<Degrees>[], unknown>);
    convert(input: unknown): GeoJSONMultiPoint;
}
/**
 * A codec that can encode and decode GeoJSONMultiPoint objects.
 */
declare class GeoJSONMultiPointCodec extends TypeCheckingCodec<GeoJSONMultiPoint, ReturnType<InstanceType<new () => GeoJSONMultiPointEncoder['convert']>>> {
    readonly encoder: GeoJSONMultiPointEncoder;
    readonly decoder: GeoJSONMultiPointDecoder;
}
export declare const geoJSONMultiPointCodec: GeoJSONMultiPointCodec;
export {};
