import { WebWorkerRequest } from '../../../../../../../../../../../../src/service/hotshot_query_service/web_worker_types';
import { HotShotQueryServiceAvailabilityAPI } from '../availability_api';
export type AvailabilityRequest<Method extends keyof HotShotQueryServiceAvailabilityAPI = keyof HotShotQueryServiceAvailabilityAPI> = WebWorkerRequest<'availability', Method, Parameters<HotShotQueryServiceAvailabilityAPI[Method]>>;
export declare class WebWorkerProxyAvailabilityAPI {
    private service;
    constructor(service: HotShotQueryServiceAvailabilityAPI);
    getLeafFromHeight(height: number): Promise<{
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
            upgrade_certificate: import('..').SimpleCertificate<import('../upgrade_proposal_data_v1').UpgradeProposalDataV1> | null;
            block_payload: {
                transaction_nmt: {
                    vm: number;
                    payload: number[];
                }[];
            };
        } | {
            view_number: number;
            justify_qc: import('..').SimpleCertificate<import('..').QuorumDataV2>;
            next_epoch_justify_qc: import('..').SimpleCertificate<import('..').QuorumDataV2> | null;
            parent_commitment: string;
            block_header: unknown;
            upgrade_certificate: import('..').SimpleCertificate<import('../upgrade_proposal_data_v1').UpgradeProposalDataV1> | null;
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
        header: unknown;
        hash: string;
        size: number;
        num_transactions: number;
        proposer_id: unknown;
    }[]>;
    getTransactionSummaryRange(height: number, offset: number, limit: number): Promise<{
        hash: string;
        header: unknown;
        offset: number;
        transaction: {
            vm: number;
            payload: number[];
        };
    }[]>;
    getTransactionSummaryRangeForRollup(namespace: number, height: number, offset: number, limit: number): Promise<{
        hash: string;
        header: unknown;
        offset: number;
        transaction: {
            vm: number;
            payload: number[];
        };
    }[]>;
    getHeader(height: number): Promise<unknown>;
    handleRequest(request: AvailabilityRequest): Promise<unknown>;
}
