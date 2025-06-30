import { Codec, Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec';
import { Degrees } from '../units';
import { default as LatLng } from '../units/LatLng';
import { default as GeoJSONBoundingBox } from './bounding_box';
import { default as GeoJSONGeometry } from './geometry';
/**
 * GeoJSONPoint represents a single point within the GeoJSON specification.
 */
export default class GeoJSONPoint extends GeoJSONGeometry {
    readonly type: "Point";
    readonly coordinates: LatLng<Degrees>;
    readonly bbox: GeoJSONBoundingBox;
    constructor(coordinates: LatLng<Degrees>);
    toJSON(): object;
}
/**
 * A converter that can encode a GeoJSONPoint into a GeoJSON object.
 */
declare class GeoJSONPointEncoder implements Converter<GeoJSONPoint> {
    readonly codec: Codec<LatLng<Degrees>, unknown>;
    constructor(codec: Codec<LatLng<Degrees>, unknown>);
    convert(input: GeoJSONPoint): {
        readonly type: "Point";
        readonly coordinates: unknown;
    };
}
/**
 * A converter that can decode a GeoJSON object into a GeoJSONPoint.
 */
declare class GeoJSONPointDecoder implements Converter<unknown, GeoJSONPoint> {
    readonly codec: Codec<LatLng<Degrees>, unknown>;
    constructor(codec: Codec<LatLng<Degrees>, unknown>);
    convert(input: unknown): GeoJSONPoint;
}
/**
 * A codec that can encode and decode GeoJSONPoint objects.
 */
declare class GeoJSONPointCodec extends TypeCheckingCodec<GeoJSONPoint, ReturnType<InstanceType<new () => GeoJSONPointEncoder['convert']>>> {
    readonly encoder: GeoJSONPointEncoder;
    readonly decoder: GeoJSONPointDecoder;
}
export declare const geoJSONPointCodec: GeoJSONPointCodec;
export {};
