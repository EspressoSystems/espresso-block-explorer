import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';

/**
 * CappuccinoBuilderSignature represents the signature of a builder in the
 * Cappuccino API.
 */
export declare class CappuccinoBuilderSignature {
    readonly r: ArrayBuffer;
    readonly s: ArrayBuffer;
    readonly v: number;
    constructor(r: ArrayBuffer, s: ArrayBuffer, v: number);
    toJSON(): {
        r: string;
        s: string;
        v: number;
    };
}
declare class CappuccinoBuilderSignatureDecoder implements Converter<unknown, CappuccinoBuilderSignature> {
    convert(input: unknown): CappuccinoBuilderSignature;
}
declare class CappuccinoBuilderSignatureEncoder implements Converter<CappuccinoBuilderSignature> {
    convert(input: CappuccinoBuilderSignature): {
        r: string;
        s: string;
        v: number;
    };
}
declare class CappuccinoBuilderSignatureCodec extends TypeCheckingCodec<CappuccinoBuilderSignature, ReturnType<InstanceType<new () => CappuccinoBuilderSignatureEncoder>['convert']>> {
    readonly encoder: CappuccinoBuilderSignatureEncoder;
    readonly decoder: CappuccinoBuilderSignatureDecoder;
}
export declare const cappuccinoBuilderSignatureCodec: CappuccinoBuilderSignatureCodec;
export {};
