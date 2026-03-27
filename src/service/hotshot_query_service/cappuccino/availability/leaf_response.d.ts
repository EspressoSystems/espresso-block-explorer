import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { CappuccinoAPILeaf } from './leaf';
import { QuorumCertificateV1 } from './quorum_certificate_v1';
/**
 * CappuccinoAPILeafResponse represents a leaf response in the Cappuccino API.
 */
export declare class CappuccinoAPILeafResponse {
    readonly leaf: CappuccinoAPILeaf;
    readonly qc: QuorumCertificateV1;
    constructor(leaf: CappuccinoAPILeaf, qc: QuorumCertificateV1);
    toJSON(): {
        leaf: {
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
            upgrade_certificate: import('./simple_certificate').SimpleCertificate<import('./upgrade_proposal_data_v1').UpgradeProposalDataV1> | null;
            block_payload: {
                transaction_nmt: {
                    vm: number;
                    payload: number[];
                }[];
            };
        } | {
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
        qc: {
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
    };
}
export declare class CappuccinoAPILeafResponseDecoder implements Converter<unknown, CappuccinoAPILeafResponse> {
    convert(input: unknown): CappuccinoAPILeafResponse;
}
export declare class CappuccinoAPILeafResponseEncoder implements Converter<CappuccinoAPILeafResponse> {
    convert(input: CappuccinoAPILeafResponse): {
        leaf: {
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
            upgrade_certificate: import('./simple_certificate').SimpleCertificate<import('./upgrade_proposal_data_v1').UpgradeProposalDataV1> | null;
            block_payload: {
                transaction_nmt: {
                    vm: number;
                    payload: number[];
                }[];
            };
        } | {
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
        qc: {
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
    };
}
export declare class CappuccinoAPILeafResponseCodec extends TypeCheckingCodec<CappuccinoAPILeafResponse, ReturnType<InstanceType<new () => CappuccinoAPILeafResponseEncoder>['convert']>> {
    readonly encoder: CappuccinoAPILeafResponseEncoder;
    readonly decoder: CappuccinoAPILeafResponseDecoder;
}
export declare const cappuccinoAPILeafResponseCodec: CappuccinoAPILeafResponseCodec;
