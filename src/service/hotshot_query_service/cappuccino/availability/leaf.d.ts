import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { CappuccinoAPIHeader } from './block_header';
import { CappuccinoAPIPayload } from './payload';
import { CappuccinoAPIQuorumCertificate } from './quorum_certificate';
/**
 * CappuccinoAPILeaf represents a leaf in the Cappuccino API.
 */
export declare class CappuccinoAPILeaf {
    readonly view_number: number;
    readonly justify_qc: CappuccinoAPIQuorumCertificate;
    readonly parent_commitment: TaggedBase64;
    readonly block_header: CappuccinoAPIHeader;
    readonly block_payload: CappuccinoAPIPayload;
    readonly rejected: number[];
    readonly timestamp: number;
    readonly proposer_id: ArrayBuffer;
    constructor(view_number: number, justify_qc: CappuccinoAPIQuorumCertificate, parent_commitment: TaggedBase64, block_header: CappuccinoAPIHeader, block_payload: CappuccinoAPIPayload, rejected: number[], timestamp: number, proposer_id: ArrayBuffer);
    toJSON(): {
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
        block_header: {
            readonly height: number;
            readonly timestamp: number;
            readonly l1_head: number;
            readonly l1_finalized: {
                number: number;
                timestamp: string;
                hash: string;
            } | null;
            readonly payload_commitment: number[];
            readonly ns_table: {
                bytes: string;
            };
            readonly block_merkle_root: string;
            readonly fee_merkle_root: string;
            readonly builder_signature: {
                r: `0x${string}`;
                s: `0x${string}`;
                v: number;
            };
            readonly fee_info: {
                account: `0x${string}`;
                amount: `0x${string}`;
            };
        };
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
}
export declare class CappuccinoAPILeafDecoder implements Converter<unknown, CappuccinoAPILeaf> {
    convert(input: unknown): CappuccinoAPILeaf;
}
export declare class CappuccinoAPILeafEncoder implements Converter<CappuccinoAPILeaf> {
    convert(input: CappuccinoAPILeaf): {
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
        block_header: {
            readonly height: number;
            readonly timestamp: number;
            readonly l1_head: number;
            readonly l1_finalized: {
                number: number;
                timestamp: string;
                hash: string;
            } | null;
            readonly payload_commitment: number[];
            readonly ns_table: {
                bytes: string;
            };
            readonly block_merkle_root: string;
            readonly fee_merkle_root: string;
            readonly builder_signature: {
                r: `0x${string}`;
                s: `0x${string}`;
                v: number;
            };
            readonly fee_info: {
                account: `0x${string}`;
                amount: `0x${string}`;
            };
        };
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
}
export declare class CappuccinoAPILeafCodec extends TypeCheckingCodec<CappuccinoAPILeaf, ReturnType<InstanceType<new () => CappuccinoAPILeafEncoder>['convert']>> {
    readonly encoder: CappuccinoAPILeafEncoder;
    readonly decoder: CappuccinoAPILeafDecoder;
}
export declare const cappuccinoAPILeafCodec: CappuccinoAPILeafCodec;
