import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { CappuccinoAPILeaf } from './leaf';
import { CappuccinoAPIQuorumCertificate } from './quorum_certificate';
/**
 * CappuccinoAPILeafResponse represents a leaf response in the Cappuccino API.
 */
export declare class CappuccinoAPILeafResponse {
    readonly leaf: CappuccinoAPILeaf;
    readonly qc: CappuccinoAPIQuorumCertificate;
    constructor(leaf: CappuccinoAPILeaf, qc: CappuccinoAPIQuorumCertificate);
    toJSON(): {
        leaf: {
            view_number: number;
            justify_qc: {
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
        };
        qc: {
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
        };
        qc: {
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
