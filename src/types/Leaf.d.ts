import { BlockHeader } from './BlockHeader';
import { BlockPayload } from './BlockPayload';
import { QuorumCertificate } from './QuorumCertificate';
import { TaggedBase64 } from './TaggedBase64';
export declare class Leaf {
    readonly view_number: number;
    readonly justify_qc: QuorumCertificate;
    readonly parent_commitment: TaggedBase64;
    readonly block_header: BlockHeader;
    readonly block_payload: BlockPayload;
    readonly rejected: unknown[];
    readonly timestamp: bigint;
    readonly proposer_id: TaggedBase64;
    constructor(view_number: number, justify_qc: QuorumCertificate, parent_commitment: TaggedBase64, block_header: BlockHeader, block_payload: BlockPayload, rejected: unknown[], timestamp: bigint, proposer_id: TaggedBase64);
    static inflate(value: unknown): Leaf;
    toJSON(): {
        view_number: number;
        justify_qc: {
            data: {
                leaf_commit: string;
            };
            vote_commitment: string;
            view_number: number;
            signatures: import("./Signatures").Signatures;
            is_genesis: boolean;
        };
        parent_commitment: string;
        block_header: {
            height: number;
            timestamp: number;
            l1_head: number;
            l1_finalized: {
                number: number;
                timestamp: string;
                hash: string;
            };
            payload_commitment: number[];
            transactions_root: {
                root: number[];
            };
        };
        block_payload: {
            transaction_nmt: {
                vm: number;
                payload: unknown;
            };
        };
        rejected: unknown[];
        timestamp: bigint;
        proposer_id: string;
    };
}
