import { Codec, Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { default as GeoJSONBoundingBox } from './bounding_box';
import { default as GeoJSONGeometry } from './geometry';

/**
 * A GeoJSON Geometry Collection is a collection of GeoJSON geometries.  This is
 * the top level object that is used to represent a collection of geometries.
 */
export default class GeoJSONGeometryCollection extends GeoJSONGeometry {
    readonly type = "GeometryCollection";
    readonly geometries: GeoJSONGeometry[];
    readonly bbox: GeoJSONBoundingBox;
    constructor(geometries: GeoJSONGeometry[]);
    toJSON(): {
        readonly type: "GeometryCollection";
        readonly geometries: unknown;
    };
}
/**
 * GeoJSONGeometryCollectionEncoder is a class that encodes a
 * GeoJSONGeometryCollection object into a JSON compatible object.
 */
declare class GeoJSONGeometryCollectionEncoder implements Converter<GeoJSONGeometryCollection> {
    readonly listGeometryCodec: Codec<GeoJSONGeometry[]>;
    constructor(listGeometryCodec: Codec<GeoJSONGeometry[]>);
    convert(input: GeoJSONGeometryCollection): {
        readonly type: "GeometryCollection";
        readonly geometries: unknown;
    };
}
/**
 * GeoJSONGeometryCollectionDecoder is a class that decodes a JSON compatible
 * object into a GeoJSONGeometryCollection object.
 */
declare class GeoJSONGeometryCollectionDecoder implements Converter<unknown, GeoJSONGeometryCollection> {
    readonly listGeometryCodec: Codec<GeoJSONGeometry[]>;
    constructor(listGeometryCodec: Codec<GeoJSONGeometry[]>);
    convert(input: unknown): GeoJSONGeometryCollection;
}
/**
 * A codec that can encode and decode GeoJSONGeometryCollection objects.
 * This codec is registered with the geometry registry.
 */
declare class GeoJSONGeometryCollectionCodec extends TypeCheckingCodec<GeoJSONGeometryCollection, ReturnType<InstanceType<new () => GeoJSONGeometryCollectionEncoder['convert']>>> {
    readonly encoder: GeoJSONGeometryCollectionEncoder;
    readonly decoder: GeoJSONGeometryCollectionDecoder;
}
export declare const geoJSONGeometryCollectionCodec: GeoJSONGeometryCollectionCodec;
export {};
