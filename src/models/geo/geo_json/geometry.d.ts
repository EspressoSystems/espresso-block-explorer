import { ArrayCodec, Codec, Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec';
import { default as GeoJSONBoundingBox } from './bounding_box';
/**
 * GeoJSONGeometry is a parent class of the different types of geometries
 * represented within the GeoJSON specification.
 */
export default abstract class GeoJSONGeometry {
    abstract get type(): string;
    abstract get bbox(): GeoJSONBoundingBox;
    abstract toJSON(): object;
}
/**
 * registerGeometryCodec registers a codec to be used to encode and decode a
 * specific type of GeoJSONGeometry object.
 */
export declare function registerGeometryCodec<S extends string, C extends Codec<GeoJSONGeometry>>(key: S, codec: C): void;
/**
 * lookupGeometryCodec looks up a codec by its identifying string to be used to
 * encode and decode a specific type of GeoJSONGeometry object.
 */
export declare function lookupGeometryCodec<S extends string>(key: S): Codec<GeoJSONGeometry>;
/**
 * GeoJSONGeometryCodec is a codec for GeoJSONGeometry objects.
 * This class uses the GeoJSONGeometryEncoder and GeoJSONGeometryDecoder to
 * encode and decode the object.
 * This class is ultimately backed by the geometry codec registry.
 */
declare class GeoJSONGeometryCodec extends TypeCheckingCodec<GeoJSONGeometry> {
    readonly encoder: Converter<GeoJSONGeometry>;
    readonly decoder: Converter<unknown, GeoJSONGeometry>;
    constructor();
}
export declare const geoJSONGeometryCodec: GeoJSONGeometryCodec;
export declare const listGeoJsonGeometryCodec: ArrayCodec<GeoJSONGeometry, unknown>;
export {};
