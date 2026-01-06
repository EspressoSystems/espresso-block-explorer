import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { CappuccinoAPIV0HeaderFields } from './block_header_v0';
import { WrappedVersion } from './version';
export interface CappuccinoAPIHeaderFields extends CappuccinoAPIV0HeaderFields {
}
export interface CappuccinoAPIHeader<F extends CappuccinoAPIHeaderFields = CappuccinoAPIHeaderFields> {
    readonly fields: F;
    readonly version: WrappedVersion;
}
export declare class AbstractCappuccinoAPIHeader<F extends CappuccinoAPIHeaderFields> implements CappuccinoAPIHeader<F> {
    readonly version: WrappedVersion;
    readonly fields: F;
    constructor(version: WrappedVersion, fields: F);
}
export declare class CappuccinoAPIHeaderImpl<F extends CappuccinoAPIHeaderFields> extends AbstractCappuccinoAPIHeader<F> {
    constructor(version: WrappedVersion, fields: F);
}
declare class CappuccinoAPIHeaderDecoder implements Converter<unknown, CappuccinoAPIHeader<CappuccinoAPIHeaderFields>> {
    convert(input: unknown): CappuccinoAPIHeader<CappuccinoAPIHeaderFields>;
}
declare class CappuccinoAPIHeaderEncoder implements Converter<CappuccinoAPIHeader<CappuccinoAPIHeaderFields>, unknown> {
    convert(input: CappuccinoAPIHeader<CappuccinoAPIHeaderFields>): unknown;
}
declare class CappuccinoAPIHeaderCodec extends TypeCheckingCodec<CappuccinoAPIHeader<CappuccinoAPIHeaderFields>, unknown> {
    readonly encoder: CappuccinoAPIHeaderEncoder;
    readonly decoder: CappuccinoAPIHeaderDecoder;
}
export declare const cappuccinoAPIHeaderCodec: CappuccinoAPIHeaderCodec;
export {};
