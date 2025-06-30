import { ArrayCodec, Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec';
import { default as Degrees } from '../units/Degrees';
import { default as LatLng } from '../units/LatLng';
/**
 * So it turns out that in the GeoJSON specification, their minimum unit of
 * representation, called a "Position", supplies the longitude first rather
 * than the latitude.  This is the opposite order of what most libraries
 * provide when supplying these pairs.
 *
 * Reference:
 * https://datatracker.ietf.org/doc/html/rfc7946#section-3.1.1
 */
/**
 * A converter that can encode a LatLng into a GeoJSON Position representation.
 */
declare class GeoJSONPositionEncoder implements Converter<LatLng<Degrees>> {
    convert(input: LatLng<Degrees>): readonly [number, number];
}
/**
 * A converter that can decode a GeoJSON Position representation into a LatLng.
 */
declare class GeoJSONPositionDecoder implements Converter<unknown, LatLng<Degrees>> {
    convert(input: unknown): LatLng<Degrees>;
}
/**
 * A codec that can encode and decode GeoJSON Position representation.
 */
declare class GeoJSONPositionCodec extends TypeCheckingCodec<LatLng<Degrees>, ReturnType<InstanceType<new () => GeoJSONPositionEncoder['convert']>>> {
    readonly encoder: GeoJSONPositionEncoder;
    readonly decoder: GeoJSONPositionDecoder;
}
export declare const geoJSONPositionCodec: GeoJSONPositionCodec;
export declare const listGeoJSONPositionCodec: ArrayCodec<LatLng<Degrees>, readonly [number, number]>;
export declare const listListGeoJSONPositionCodec: ArrayCodec<LatLng<Degrees>[], (readonly [number, number])[]>;
export declare const listListListGeoJSONPositionCodec: ArrayCodec<LatLng<Degrees>[][], (readonly [number, number])[][]>;
export {};
