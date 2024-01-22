import { L1Finalized } from './L1Finalized';
import { TransactionsRoot } from './TransactionsRoot';
export declare class BlockHeader {
    readonly height: number;
    readonly timestamp: number;
    readonly l1_head: number;
    readonly l1_finalized: L1Finalized;
    readonly payload_commitment: number[];
    readonly transactions_root: TransactionsRoot;
    constructor(height: number, timestamp: number, l1_head: number, l1_finalized: L1Finalized, payload_commitment: number[], transactions_root: TransactionsRoot);
    static inflate(value: unknown): BlockHeader;
    toJSON(): {
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
}
