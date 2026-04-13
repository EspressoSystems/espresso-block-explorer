import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * AvailabilityBuilderSignature represents the signature of a builder in the
 * Availability API.
 */
export declare class AvailabilityBuilderSignature {
    readonly r: ArrayBuffer;
    readonly s: ArrayBuffer;
    readonly v: number;
    constructor(r: ArrayBuffer, s: ArrayBuffer, v: number);
    toJSON(): {
        r: `0x${string}`;
        s: `0x${string}`;
        v: number;
    };
}
declare class AvailabilityBuilderSignatureDecoder implements Converter<unknown, AvailabilityBuilderSignature> {
    convert(input: unknown): AvailabilityBuilderSignature;
}
declare class AvailabilityBuilderSignatureEncoder implements Converter<AvailabilityBuilderSignature> {
    convert(input: AvailabilityBuilderSignature): {
        r: `0x${string}`;
        s: `0x${string}`;
        v: number;
    };
}
declare class AvailabilityBuilderSignatureCodec extends TypeCheckingCodec<AvailabilityBuilderSignature, ReturnType<InstanceType<new () => AvailabilityBuilderSignatureEncoder>['convert']>> {
    readonly encoder: AvailabilityBuilderSignatureEncoder;
    readonly decoder: AvailabilityBuilderSignatureDecoder;
}
export declare const availabilityBuilderSignatureCodec: AvailabilityBuilderSignatureCodec;
export {};
