import { NullCodec } from '../../../../../../../../../../../src/convert/codec';
import { Codec, Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { NumberLike } from '../../numeric/numeric';
import { default as Latitude } from './latitude';
import { default as Longitude } from './longitude';
import { GenericLATLNG } from './latlng_interface';
/**
 * LatLng represents a tuple of latitude and longitude values.
 * It exists for convenience and type safety.
 *
 * `LatLng` is used instead of `LatitudeLongitude` for convenience and
 * quicker typing.
 */
export default class LatLng<Unit extends NumberLike> implements GenericLATLNG<Latitude<Unit>, Longitude<Unit>> {
    readonly lat: Latitude<Unit>;
    readonly lng: Longitude<Unit>;
    constructor(lat: Latitude<Unit>, lng: Longitude<Unit>);
    min(o: LatLng<Unit>): LatLng<Unit>;
    max(o: LatLng<Unit>): LatLng<Unit>;
    toString(): string;
}
export declare class LatLngEncoder<Unit extends NumberLike> implements Converter<LatLng<Unit>, [
    number,
    number
]> {
    readonly unitCodec: Codec<Unit, number, unknown>;
    constructor(unitCodec: Codec<Unit, number, unknown>);
    convert(input: LatLng<Unit>): [number, number];
}
export declare class LatLngDecoder<Unit extends NumberLike> implements Converter<unknown, LatLng<Unit>> {
    readonly unitCodec: Codec<Unit, number, unknown>;
    constructor(unitCodec: Codec<Unit, number, unknown>);
    convert(input: unknown): LatLng<Unit>;
}
export declare class LatLngCodec<Unit extends NumberLike> extends TypeCheckingCodec<LatLng<Unit>, unknown> {
    readonly encoder: Converter<LatLng<Unit>, [number, number]>;
    readonly decoder: Converter<unknown, LatLng<Unit>>;
    constructor(unitCodec: Codec<Unit, number, unknown>);
}
export declare const latLngDegreesCodec: LatLngCodec<import('./degrees').default>;
export declare const latLngRadiansCodec: LatLngCodec<import('./radians').default>;
export declare const nullableLatLngDegreesCodec: NullCodec<LatLng<import('./degrees').default>, unknown>;
export declare const nullableLatLngRadiansCodec: NullCodec<LatLng<import('./radians').default>, unknown>;
