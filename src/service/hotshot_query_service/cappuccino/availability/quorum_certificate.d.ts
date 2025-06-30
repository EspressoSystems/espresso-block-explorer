import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/TaggedBase64';
import { CappuccinoAPIBQuorumCertificateData } from './quorum_certificate_data';
import { CappuccinoAPIQuorumCertificateSignatures } from './quorum_certificate_signatures';
/**
 * CappuccinoAPIQuorumCertificate represents a quorum certificate in the
 * Cappuccino API.
 */
export declare class CappuccinoAPIQuorumCertificate {
    readonly data: CappuccinoAPIBQuorumCertificateData;
    readonly vote_commitment: TaggedBase64;
    readonly view_number: number;
    readonly signatures: null | CappuccinoAPIQuorumCertificateSignatures;
    readonly is_genesis: boolean;
    readonly _pd: null;
    constructor(data: CappuccinoAPIBQuorumCertificateData, vote_commitment: TaggedBase64, view_number: number, signatures: null | CappuccinoAPIQuorumCertificateSignatures, is_genesis: boolean, _pd: null);
    toJSON(): {
        data: {
            leaf_commit: string;
        };
        vote_commitment: string;
        view_number: number;
        signatures: (string | {
            order: string;
            head: {
                width: number;
                index: number;
            };
            bits: number;
            data: number[];
        })[] | null;
        is_genesis: boolean;
        _pd: null;
    };
}
export declare class CappuccinoAPIQuorumCertificateDecoder implements Converter<unknown, CappuccinoAPIQuorumCertificate> {
    convert(input: unknown): CappuccinoAPIQuorumCertificate;
}
export declare class CappuccinoAPIQuorumCertificateEncoder implements Converter<CappuccinoAPIQuorumCertificate> {
    convert(input: CappuccinoAPIQuorumCertificate): {
        data: {
            leaf_commit: string;
        };
        vote_commitment: string;
        view_number: number;
        signatures: (string | {
            order: string;
            head: {
                width: number;
                index: number;
            };
            bits: number;
            data: number[];
        })[] | null;
        is_genesis: boolean;
        _pd: null;
    };
}
export declare class CappuccinoAPIQuorumCertificateCodec extends TypeCheckingCodec<CappuccinoAPIQuorumCertificate, ReturnType<InstanceType<new () => CappuccinoAPIQuorumCertificateEncoder>['convert']>> {
    readonly encoder: CappuccinoAPIQuorumCertificateEncoder;
    readonly decoder: CappuccinoAPIQuorumCertificateDecoder;
}
export declare const cappuccinoAPIQuorumCertificateCodec: CappuccinoAPIQuorumCertificateCodec;
