import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../../src/convert/codec/null';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { QuorumDataV1 } from './quorum_data_v1';
import { SimpleCertificate } from './simple_certificate';
import { SimpleCertificateSignatures } from './simple_certificate_signatures';
/**
 * QuorumCertificateV1 represents a Simple Ceritifcate of QuorumDataV1
 * retrieved from the HotShot Query Service's Availability API.
 */
export declare class QuorumCertificateV1 extends SimpleCertificate<QuorumDataV1> {
    constructor(data: QuorumDataV1, vote_commitment: TaggedBase64, view_number: number, signatures: null | SimpleCertificateSignatures, is_genesis: boolean, _pd: null);
    toJSON(): {
        data: unknown;
        vote_commitment: string;
        view_number: number;
        signatures: (string | {
            order: string;
            head: {
                width: number;
                index: number;
            };
            bits: number;
            data: `0x${string}`[];
        })[] | null;
        is_genesis: boolean;
        _pd: null;
    };
}
export declare class QuorumCertificateV1Decoder implements Converter<unknown, QuorumCertificateV1> {
    convert(input: unknown): QuorumCertificateV1;
}
export declare class QuorumCertificateV1Encoder implements Converter<QuorumCertificateV1> {
    convert(input: QuorumCertificateV1): {
        data: unknown;
        vote_commitment: string;
        view_number: number;
        signatures: (string | {
            order: string;
            head: {
                width: number;
                index: number;
            };
            bits: number;
            data: `0x${string}`[];
        })[] | null;
        is_genesis: boolean;
        _pd: null;
    };
}
export declare class QuorumCertificateV1Codec extends TypeCheckingCodec<QuorumCertificateV1, ReturnType<InstanceType<new () => QuorumCertificateV1Encoder>['convert']>> {
    readonly encoder: QuorumCertificateV1Encoder;
    readonly decoder: QuorumCertificateV1Decoder;
}
export declare const quorumCertificateV1Codec: QuorumCertificateV1Codec;
export declare const nullableQuorumCertificateV1Codec: NullCodec<QuorumCertificateV1, {
    data: unknown;
    vote_commitment: string;
    view_number: number;
    signatures: (string | {
        order: string;
        head: {
            width: number;
            index: number;
        };
        bits: number;
        data: `0x${string}`[];
    })[] | null;
    is_genesis: boolean;
    _pd: null;
}>;
