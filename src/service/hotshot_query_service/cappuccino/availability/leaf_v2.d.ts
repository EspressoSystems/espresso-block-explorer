import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { CappuccinoAPIHeader } from './block_header';
import { CappuccinoAPIPayload } from './payload';
import { QuorumCertificateV2 } from './quorum_certificate_v2';
import { UpgradeCertificateV1 } from './upgrade_certificate_v1';
import { ViewChangeEvidenceV2 } from './view_change_evidence_v2';
/**
 * LeafV2 represents the version 2 of a Leaf within Espresso HotShot Query
 * Service availability API.
 */
export declare class LeafV2 {
    readonly view_number: number;
    readonly justify_qc: QuorumCertificateV2;
    readonly next_epoch_justify_qc: null | QuorumCertificateV2;
    readonly parent_commitment: TaggedBase64;
    readonly block_header: CappuccinoAPIHeader;
    readonly upgrade_certificate: null | UpgradeCertificateV1;
    readonly block_payload: null | CappuccinoAPIPayload;
    readonly view_change_evidence: null | ViewChangeEvidenceV2;
    readonly next_drb_result: null | Uint8Array;
    readonly with_epoch: boolean;
    constructor(view_number: number, justify_qc: QuorumCertificateV2, next_epoch_justify_qc: null | QuorumCertificateV2, parent_commitment: TaggedBase64, block_header: CappuccinoAPIHeader, upgrade_certificate: null | UpgradeCertificateV1, block_payload: null | CappuccinoAPIPayload, view_change_evidence: null | ViewChangeEvidenceV2, next_drb_result: null | Uint8Array, with_epoch: boolean);
    toJSON(): {
        view_number: number;
        justify_qc: import('./simple_certificate').SimpleCertificate<import('./quorum_data_v2').QuorumDataV2>;
        next_epoch_justify_qc: import('./simple_certificate').SimpleCertificate<import('./quorum_data_v2').QuorumDataV2> | null;
        parent_commitment: string;
        block_header: unknown;
        upgrade_certificate: import('./simple_certificate').SimpleCertificate<import('./upgrade_proposal_data_v1').UpgradeProposalDataV1> | null;
        block_payload: {
            transaction_nmt: {
                vm: number;
                payload: number[];
            }[];
        } | null;
        view_change_evidence: unknown;
        next_drb_result: `0x${string}` | null;
        with_epoch: boolean;
    };
}
export declare class LeafV2Decoder implements Converter<unknown, LeafV2> {
    convert(input: unknown): LeafV2;
}
export declare class LeafV2Encoder implements Converter<LeafV2> {
    convert(input: LeafV2): {
        view_number: number;
        justify_qc: import('./simple_certificate').SimpleCertificate<import('./quorum_data_v2').QuorumDataV2>;
        next_epoch_justify_qc: import('./simple_certificate').SimpleCertificate<import('./quorum_data_v2').QuorumDataV2> | null;
        parent_commitment: string;
        block_header: unknown;
        upgrade_certificate: import('./simple_certificate').SimpleCertificate<import('./upgrade_proposal_data_v1').UpgradeProposalDataV1> | null;
        block_payload: {
            transaction_nmt: {
                vm: number;
                payload: number[];
            }[];
        } | null;
        view_change_evidence: unknown;
        next_drb_result: `0x${string}` | null;
        with_epoch: boolean;
    };
}
export declare class LeafV2Codec extends TypeCheckingCodec<LeafV2, ReturnType<InstanceType<new () => LeafV2Encoder>['convert']>> {
    readonly encoder: LeafV2Encoder;
    readonly decoder: LeafV2Decoder;
}
export declare const leafV2Codec: LeafV2Codec;
