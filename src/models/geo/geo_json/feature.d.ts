import { ArrayCodec } from '../../../../../../../../../../../src/convert/codec';
import { Codec, Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { default as GeoJSONGeometry } from './geometry';
/**
 * A GeoJSON Feature is a single feature in a GeoJSON object.  This is the
 * object that represents a single feature in a GeoJSON object.
 * The underlying geometry can be any GeoJSONGeometry object.
 */
export default class GeoJSONFeature {
    readonly geometry: GeoJSONGeometry;
    readonly properties: unknown;
    get type(): "Feature";
    constructor(geometry: GeoJSONGeometry, properties: unknown);
    toJSON(): {
        readonly type: "Feature";
        readonly geometry: unknown;
        readonly properties: unknown;
    };
}
/**
 * GeoJSONFeatureEncoder is a class that encodes a GeoJSONFeature object into
 * a JSON object.
 */
declare class GeoJSONFeatureEncoder implements Converter<GeoJSONFeature> {
    readonly geometryCodec: Codec<GeoJSONGeometry>;
    constructor(geometryCodec: Codec<GeoJSONGeometry>);
    convert(input: GeoJSONFeature): {
        readonly type: "Feature";
        readonly geometry: unknown;
        readonly properties: unknown;
    };
}
/**
 * GeoJSONFeatureDecoder is a class that decodes a GeoJSONFeature object from
 * a JSON object.
 */
declare class GeoJSONFeatureDecoder implements Converter<unknown, GeoJSONFeature> {
    readonly geometryCodec: Codec<GeoJSONGeometry>;
    constructor(geometryCodec: Codec<GeoJSONGeometry>);
    convert(input: unknown): GeoJSONFeature;
}
/**
 * GeoJSONFeatureCodec is a codec for GeoJSONFeature objects.
 */
declare class GeoJSONFeatureCodec extends TypeCheckingCodec<GeoJSONFeature, ReturnType<InstanceType<new () => GeoJSONFeatureEncoder['convert']>>> {
    readonly encoder: GeoJSONFeatureEncoder;
    readonly decoder: GeoJSONFeatureDecoder;
}
/**
 * geoJSONFeatureCodec is a codec for GeoJSONFeature objects, created so
 * multiple instances of the codec do not need to exist.
 */
export declare const geoJSONFeatureCodec: GeoJSONFeatureCodec;
/**
 * listGeoJSONFeatureCodec is a codec for lists of GeoJSONFeature objects.
 */
export declare const listGeoJSONFeatureCodec: ArrayCodec<GeoJSONFeature, {
    readonly type: "Feature";
    readonly geometry: unknown;
    readonly properties: unknown;
}>;
export {};
