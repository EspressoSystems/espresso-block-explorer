import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../../src/convert/codec/null';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { BitVec } from './bit_vec';
/**
 * SimpleCertificateSignatures represents the signatures of a SimpleCertifcate.
 * These signatures are all of the same form.
 */
export declare class SimpleCertificateSignatures {
    readonly signature: TaggedBase64;
    readonly bitvec: BitVec;
    constructor(signature: TaggedBase64, bitvec: BitVec);
    toJSON(): (string | {
        order: string;
        head: {
            width: number;
            index: number;
        };
        bits: number;
        data: `0x${string}`[];
    })[];
}
export declare class SimpleCertificateSignaturesDecoder implements Converter<unknown, SimpleCertificateSignatures> {
    convert(input: unknown): SimpleCertificateSignatures;
}
export declare class SimpleCertificateSignaturesEncoder implements Converter<SimpleCertificateSignatures> {
    convert(input: SimpleCertificateSignatures): (string | {
        order: string;
        head: {
            width: number;
            index: number;
        };
        bits: number;
        data: `0x${string}`[];
    })[];
}
export declare class SimpleCertificateSignaturesCodec extends TypeCheckingCodec<SimpleCertificateSignatures, ReturnType<InstanceType<new () => SimpleCertificateSignaturesEncoder>['convert']>> {
    readonly encoder: SimpleCertificateSignaturesEncoder;
    readonly decoder: SimpleCertificateSignaturesDecoder;
}
export declare const simpleCertificateSignaturesCodec: SimpleCertificateSignaturesCodec;
export declare const nullableSimpleCertificateSignaturesCodec: NullCodec<SimpleCertificateSignatures, (string | {
    order: string;
    head: {
        width: number;
        index: number;
    };
    bits: number;
    data: `0x${string}`[];
})[]>;
