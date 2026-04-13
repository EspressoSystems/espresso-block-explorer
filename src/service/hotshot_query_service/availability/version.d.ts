import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * AvailabilityVersion represents an Espresso version in the Availablity API.
 */
export declare class AvailabilityVersion {
    readonly major: number;
    readonly minor: number;
    constructor(major: number, minor: number);
    toJSON(): unknown;
}
declare class AvailabilitytVersionDecodert implements Converter<unknown, AvailabilityVersion> {
    convert(input: unknown): AvailabilityVersion;
}
declare class AvailabilityVersionEncoder implements Converter<AvailabilityVersion, unknown> {
    convert(input: AvailabilityVersion): unknown;
}
declare class AvailabilityVersionCodec extends TypeCheckingCodec<AvailabilityVersion, unknown> {
    readonly encoder: AvailabilityVersionEncoder;
    readonly decoder: AvailabilitytVersionDecodert;
}
export declare const availabilityVersionCodec: AvailabilityVersionCodec;
export declare class WrappedVersion {
    readonly version: AvailabilityVersion;
    constructor(version: AvailabilityVersion);
    toJSON(): unknown;
}
declare class WrappedVersionDecoder implements Converter<unknown, WrappedVersion> {
    convert(input: unknown): WrappedVersion;
}
declare class WrappedVersionEncoder implements Converter<WrappedVersion, unknown> {
    convert(input: WrappedVersion): unknown;
}
declare class WrappedVersionCodec extends TypeCheckingCodec<WrappedVersion, unknown> {
    readonly encoder: WrappedVersionEncoder;
    readonly decoder: WrappedVersionDecoder;
}
export declare const wrappedVersionCodec: WrappedVersionCodec;
export {};
