import { Converter, TypeCheckingCodec } from '../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../src/convert/codec/null';
import { default as Degrees } from '../../../../../../../../../../src/models/geo/units/degrees';
import { default as LatLng } from '../../../../../../../../../../src/models/geo/units/lat_lng';
/**
 * LocationDetails represents the location details of an Espresso
 * node.  It contains details that represents an Alpha-2 ISO3166 country code
 * identity as well as a pair of latitude and longitude coordinates.
 */
export default class LocationDetails {
    readonly coords: null | LatLng<Degrees>;
    readonly country: null | string;
    constructor(coords: null | LatLng<Degrees>, country: null | string);
    toJSON(): unknown;
}
declare class LocationDetailsEncoder implements Converter<LocationDetails> {
    convert(input: LocationDetails): {
        coords: unknown;
        country: string | null;
    };
}
declare class LocationDetailsDecoder implements Converter<unknown, LocationDetails> {
    convert(input: unknown): LocationDetails;
}
declare class LocationDetailsCodec extends TypeCheckingCodec<LocationDetails> {
    readonly encoder: LocationDetailsEncoder;
    readonly decoder: LocationDetailsDecoder;
}
export declare const locationDetailsCodec: LocationDetailsCodec;
export declare const nullableLocationDetailsCodec: NullCodec<LocationDetails, unknown>;
export {};
