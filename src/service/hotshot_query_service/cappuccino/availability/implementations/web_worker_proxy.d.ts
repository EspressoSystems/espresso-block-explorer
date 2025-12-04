import { WebWorkerRequest } from '../../../../../../../../../../../../../src/service/hotshot_query_service/web_worker_types';
import { CappuccinoHotShotQueryServiceAvailabilityAPI } from '../availability_api';
export type AvailabilityRequest<Method extends keyof CappuccinoHotShotQueryServiceAvailabilityAPI = keyof CappuccinoHotShotQueryServiceAvailabilityAPI> = WebWorkerRequest<'availability', Method, Parameters<CappuccinoHotShotQueryServiceAvailabilityAPI[Method]>>;
export declare class WebWorkerProxyAvailabilityAPI {
    private service;
    constructor(service: CappuccinoHotShotQueryServiceAvailabilityAPI);
    getLeafFromHeight(height: number): Promise<{
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
    }>;
    getTransactionFromHeightAndOffset(height: number, index: number): Promise<{
        transaction: {
            vm: number;
            payload: number[];
        };
        block_hash: string;
        proof: {
            pos: string;
            proof: ("Empty" | {
                readonly Leaf: {
                    readonly value: string;
                    readonly pos: string;
                    readonly elem: string;
                };
            } | {
                readonly ForgettenSubtree: {
                    readonly value: string;
                };
            } | {
                readonly Branch: {
                    readonly value: string;
                    readonly children: unknown[];
                };
            })[];
        };
        height: number;
        hash: string;
    }>;
    getBlockFromHeight(height: number): Promise<unknown>;
    getBlockSummaries(from: number, until: number): Promise<{
        header: {
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
        hash: string;
        size: number;
        num_transactions: number;
        proposer_id: unknown;
    }[]>;
    getTransactionSummaryRange(height: number, offset: number, limit: number): Promise<{
        hash: string;
        header: {
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
        offset: number;
        transaction: {
            vm: number;
            payload: number[];
        };
    }[]>;
    getTransactionSummaryRangeForRollup(namespace: number, height: number, offset: number, limit: number): Promise<{
        hash: string;
        header: {
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
        offset: number;
        transaction: {
            vm: number;
            payload: number[];
        };
    }[]>;
    handleRequest(request: AvailabilityRequest): Promise<unknown>;
}
