import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
/**
 * CappuccinoVersion represents an Espresso version in the Cappuccino API.
 */
export declare class CappuccinoVersion {
    readonly major: number;
    readonly minor: number;
    constructor(major: number, minor: number);
    toJSON(): unknown;
}
declare class CappuccinoVersionDecoder implements Converter<unknown, CappuccinoVersion> {
    convert(input: unknown): CappuccinoVersion;
}
declare class CappuccinoVersionEncoder implements Converter<CappuccinoVersion, unknown> {
    convert(input: CappuccinoVersion): unknown;
}
declare class CappuccinoVersionCodec extends TypeCheckingCodec<CappuccinoVersion, unknown> {
    readonly encoder: CappuccinoVersionEncoder;
    readonly decoder: CappuccinoVersionDecoder;
}
export declare const cappuccinoVersionCodec: CappuccinoVersionCodec;
export declare class WrappedVersion {
    readonly version: CappuccinoVersion;
    constructor(version: CappuccinoVersion);
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
