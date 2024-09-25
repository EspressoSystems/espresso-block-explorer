import { NullCodec } from '../../../../../../../../../../../src/convert/codec';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { default as Degrees } from '../../../../../../../../../../../src/models/geo/units/Degrees';
import { default as LatLng } from '../../../../../../../../../../../src/models/geo/units/LatLng';

/**
 * CappuccinoLocationDetails represents the location details of a Cappuccino
 * node.  It contains details that represents an Alpha-2 ISO3166 country code
 * identity as well as a pair of latitude and longitude coordinates.
 */
export default class CappuccinoLocationDetails {
    readonly coords: null | LatLng<Degrees>;
    readonly country: null | string;
    constructor(coords: null | LatLng<Degrees>, country: null | string);
    toJSON(): unknown;
}
declare class CappuccinoLocationDetailsEncoder implements Converter<CappuccinoLocationDetails> {
    convert(input: CappuccinoLocationDetails): {
        coords: unknown;
        country: string | null;
    };
}
declare class CappuccinoLocationDetailsDecoder implements Converter<unknown, CappuccinoLocationDetails> {
    convert(input: unknown): CappuccinoLocationDetails;
}
declare class CappuccinoLocationDetailsCodec extends TypeCheckingCodec<CappuccinoLocationDetails> {
    readonly encoder: CappuccinoLocationDetailsEncoder;
    readonly decoder: CappuccinoLocationDetailsDecoder;
}
export declare const cappuccinoLocationDetailsCodec: CappuccinoLocationDetailsCodec;
export declare const nullableCappuccinoLocationDetailsCodec: NullCodec<CappuccinoLocationDetails, unknown>;
export {};
