import { Codec, Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { default as GeoJSONFeature } from './feature';

/**
 * A GeoJSON Feature Collection is a collection of GeoJSON features.  This is
 * the top level object that is used to represent a collection of features.
 */
export default class GeoJSONFeatureCollection {
    readonly features: GeoJSONFeature[];
    get type(): "FeatureCollection";
    constructor(features: GeoJSONFeature[]);
    toJSON(): {
        readonly type: "FeatureCollection";
        readonly features: unknown;
    };
}
/**
 * GeoJSONFeatureCollectionEncoder is a class that encodes a
 * GeoJSONFeatureCollection object into a JSON compatible object.
 */
declare class GeoJSONFeatureCollectionEncoder implements Converter<GeoJSONFeatureCollection> {
    readonly codec: Codec<GeoJSONFeature[]>;
    constructor(codec: Codec<GeoJSONFeature[]>);
    convert(input: GeoJSONFeatureCollection): {
        readonly type: "FeatureCollection";
        readonly features: unknown;
    };
}
/**
 * GeoJSONFeatureCollectionDecoder is a class that decodes a JSON compatible
 * object into a GeoJSONFeatureCollection object.
 */
declare class GeoJSONFeatureCollectionDecoder implements Converter<unknown, GeoJSONFeatureCollection> {
    readonly codec: Codec<GeoJSONFeature[]>;
    constructor(codec: Codec<GeoJSONFeature[]>);
    convert(input: unknown): GeoJSONFeatureCollection;
}
/**
 * GeoJSONFeatureCollectionCodec is a codec that can encode and decode
 * GeoJSONFeatureCollection objects.
 */
declare class GeoJSONFeatureCollectionCodec extends TypeCheckingCodec<GeoJSONFeatureCollection, ReturnType<InstanceType<new () => GeoJSONFeatureCollectionEncoder['convert']>>> {
    readonly encoder: GeoJSONFeatureCollectionEncoder;
    readonly decoder: GeoJSONFeatureCollectionDecoder;
}
/**
 * geoJSONFeatureCollectionCodec is a codec for GeoJSONFeatureCollection objects.
 */
export declare const geoJSONFeatureCollectionCodec: GeoJSONFeatureCollectionCodec;
export {};
