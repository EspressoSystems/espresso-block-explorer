import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { AvailabilityAPIV0HeaderFields } from './block_header_v0';
import { WrappedVersion } from './version';
export interface AvailabilityAPIHeaderFields extends AvailabilityAPIV0HeaderFields {
}
export interface AvailabilityAPIHeader<F extends AvailabilityAPIHeaderFields = AvailabilityAPIHeaderFields> {
    readonly fields: F;
    readonly version: WrappedVersion;
}
export declare class AbstractAvailabilityAPIHeader<F extends AvailabilityAPIHeaderFields> implements AvailabilityAPIHeader<F> {
    readonly version: WrappedVersion;
    readonly fields: F;
    constructor(version: WrappedVersion, fields: F);
}
export declare class AvailabilityAPIHeaderImpl<F extends AvailabilityAPIHeaderFields> extends AbstractAvailabilityAPIHeader<F> {
    constructor(version: WrappedVersion, fields: F);
}
declare class AvailabilityAPIHeaderDecoder implements Converter<unknown, AvailabilityAPIHeader<AvailabilityAPIHeaderFields>> {
    convert(input: unknown): AvailabilityAPIHeader<AvailabilityAPIHeaderFields>;
}
declare class AvailabilityAPIHeaderEncoder implements Converter<AvailabilityAPIHeader<AvailabilityAPIHeaderFields>, unknown> {
    convert(input: AvailabilityAPIHeader<AvailabilityAPIHeaderFields>): unknown;
}
declare class AvailabilityAPIHeaderCodec extends TypeCheckingCodec<AvailabilityAPIHeader<AvailabilityAPIHeaderFields>, unknown> {
    readonly encoder: AvailabilityAPIHeaderEncoder;
    readonly decoder: AvailabilityAPIHeaderDecoder;
}
export declare const availabilityAPIHeaderCodec: AvailabilityAPIHeaderCodec;
export {};
