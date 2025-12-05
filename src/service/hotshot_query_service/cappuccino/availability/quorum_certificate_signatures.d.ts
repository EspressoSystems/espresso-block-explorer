import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../../../src/convert/codec/null';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { CappuccinoAPIBitVec } from './bit_vec';
/**
 * CappuccinoAPIQuorumCertificateSignatures represents the signatures of a
 * quorum certificate in the Cappuccino API.
 */
export declare class CappuccinoAPIQuorumCertificateSignatures {
    readonly signature: TaggedBase64;
    readonly bitvec: CappuccinoAPIBitVec;
    constructor(signature: TaggedBase64, bitvec: CappuccinoAPIBitVec);
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
export declare class CappuccinoAPIQuorumCertificateSignaturesDecoder implements Converter<unknown, CappuccinoAPIQuorumCertificateSignatures> {
    convert(input: unknown): CappuccinoAPIQuorumCertificateSignatures;
}
export declare class CappuccinoAPIQuorumCertificateSignaturesEncoder implements Converter<CappuccinoAPIQuorumCertificateSignatures> {
    convert(input: CappuccinoAPIQuorumCertificateSignatures): (string | {
        order: string;
        head: {
            width: number;
            index: number;
        };
        bits: number;
        data: `0x${string}`[];
    })[];
}
export declare class CappuccinoAPIQuorumCertificateSignaturesCodec extends TypeCheckingCodec<CappuccinoAPIQuorumCertificateSignatures, ReturnType<InstanceType<new () => CappuccinoAPIQuorumCertificateSignaturesEncoder>['convert']>> {
    readonly encoder: CappuccinoAPIQuorumCertificateSignaturesEncoder;
    readonly decoder: CappuccinoAPIQuorumCertificateSignaturesDecoder;
}
export declare const cappuccinoAPIQuorumCertificateSignaturesCodec: CappuccinoAPIQuorumCertificateSignaturesCodec;
export declare const nullableCappuccinoAPIQuorumCertificateSignaturesCodec: NullCodec<CappuccinoAPIQuorumCertificateSignatures, (string | {
    order: string;
    head: {
        width: number;
        index: number;
    };
    bits: number;
    data: `0x${string}`[];
})[]>;
