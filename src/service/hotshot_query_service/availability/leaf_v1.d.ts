import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { AvailabilityAPIHeader } from './block_header';
import { AvailabilityAPIPayload } from './payload';
import { QuorumCertificateV1 } from './quorum_certificate_v1';
import { UpgradeCertificateV1 } from './upgrade_certificate_v1';
/**
 * LeafV1 represents the version 1 of a Leaf within Espresso HotShot Query
 * Availability API.
 */
export declare class LeafV1 {
    readonly view_number: number;
    readonly justify_qc: QuorumCertificateV1;
    readonly parent_commitment: TaggedBase64;
    readonly block_header: AvailabilityAPIHeader;
    readonly upgrade_certificate: null | UpgradeCertificateV1;
    readonly block_payload: AvailabilityAPIPayload;
    constructor(view_number: number, justify_qc: QuorumCertificateV1, parent_commitment: TaggedBase64, block_header: AvailabilityAPIHeader, upgrade_certificate: null | UpgradeCertificateV1, block_payload: AvailabilityAPIPayload);
    toJSON(): {
        view_number: number;
        justify_qc: {
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
        parent_commitment: string;
        block_header: unknown;
        upgrade_certificate: import('./simple_certificate').SimpleCertificate<import('./upgrade_proposal_data_v1').UpgradeProposalDataV1> | null;
        block_payload: {
            transaction_nmt: {
                vm: number;
                payload: number[];
            }[];
        };
    };
}
export declare class LeafV1Decoder implements Converter<unknown, LeafV1> {
    convert(input: unknown): LeafV1;
}
export declare class LeafV1Encoder implements Converter<LeafV1> {
    convert(input: LeafV1): {
        view_number: number;
        justify_qc: {
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
        parent_commitment: string;
        block_header: unknown;
        upgrade_certificate: import('./simple_certificate').SimpleCertificate<import('./upgrade_proposal_data_v1').UpgradeProposalDataV1> | null;
        block_payload: {
            transaction_nmt: {
                vm: number;
                payload: number[];
            }[];
        };
    };
}
export declare class LeafV1Codec extends TypeCheckingCodec<LeafV1, ReturnType<InstanceType<new () => LeafV1Encoder>['convert']>> {
    readonly encoder: LeafV1Encoder;
    readonly decoder: LeafV1Decoder;
}
export declare const leafV1Codec: LeafV1Codec;
