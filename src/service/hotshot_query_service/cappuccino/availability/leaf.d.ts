import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { CappuccinoAPIHeader } from './block_header';
import { CappuccinoAPIPayload } from './payload';
import { SimpleCertificate } from './simple_certificate';
/**
 * CappuccinoAPILeaf represents a leaf in the Cappuccino API.
 */
export interface CappuccinoAPILeaf {
    readonly view_number: number;
    readonly justify_qc: SimpleCertificate<unknown>;
    readonly parent_commitment: TaggedBase64;
    readonly block_header: CappuccinoAPIHeader;
    readonly block_payload: null | CappuccinoAPIPayload;
}
export declare class CappuccinoAPILeafDecoder implements Converter<unknown, CappuccinoAPILeaf> {
    convert(input: unknown): CappuccinoAPILeaf;
}
export declare class CappuccinoAPILeafEncoder implements Converter<CappuccinoAPILeaf> {
    convert(input: CappuccinoAPILeaf): {
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
        block_payload: {
            transaction_nmt: {
                vm: number;
                payload: number[];
            }[];
        };
        rejected: number[];
        timestamp: number;
        proposer_id: `0x${string}`;
    } | {
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
        upgrade_certificate: SimpleCertificate<import('./upgrade_proposal_data_v1').UpgradeProposalDataV1> | null;
        block_payload: {
            transaction_nmt: {
                vm: number;
                payload: number[];
            }[];
        };
    } | {
        view_number: number;
        justify_qc: SimpleCertificate<import('./quorum_data_v2').QuorumDataV2>;
        next_epoch_justify_qc: SimpleCertificate<import('./quorum_data_v2').QuorumDataV2> | null;
        parent_commitment: string;
        block_header: unknown;
        upgrade_certificate: SimpleCertificate<import('./upgrade_proposal_data_v1').UpgradeProposalDataV1> | null;
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
export declare class CappuccinoAPILeafCodec extends TypeCheckingCodec<CappuccinoAPILeaf, ReturnType<InstanceType<new () => CappuccinoAPILeafEncoder>['convert']>> {
    readonly encoder: CappuccinoAPILeafEncoder;
    readonly decoder: CappuccinoAPILeafDecoder;
}
export declare const cappuccinoAPILeafCodec: CappuccinoAPILeafCodec;
