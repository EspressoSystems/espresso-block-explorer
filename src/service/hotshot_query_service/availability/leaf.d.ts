import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { AvailabilityAPIHeader } from './block_header';
import { AvailabilityAPIPayload } from './payload';
import { SimpleCertificate } from './simple_certificate';
/**
 * AvailabilityAPILeaf represents a leaf in the Availability API.
 */
export interface AvailabilityAPILeaf {
    readonly view_number: number;
    readonly justify_qc: SimpleCertificate<unknown>;
    readonly parent_commitment: TaggedBase64;
    readonly block_header: AvailabilityAPIHeader;
    readonly block_payload: null | AvailabilityAPIPayload;
}
export declare class AvailabilityAPILeafDecoder implements Converter<unknown, AvailabilityAPILeaf> {
    convert(input: unknown): AvailabilityAPILeaf;
}
export declare class AvailabilityAPILeafEncoder implements Converter<AvailabilityAPILeaf> {
    convert(input: AvailabilityAPILeaf): {
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
export declare class AvailabilityAPILeafCodec extends TypeCheckingCodec<AvailabilityAPILeaf, ReturnType<InstanceType<new () => AvailabilityAPILeafEncoder>['convert']>> {
    readonly encoder: AvailabilityAPILeafEncoder;
    readonly decoder: AvailabilityAPILeafDecoder;
}
export declare const availabilityAPILeafCodec: AvailabilityAPILeafCodec;
