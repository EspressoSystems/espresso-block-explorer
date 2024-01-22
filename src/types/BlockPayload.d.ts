import { NamespaceMerkleTree } from './NamespaceMerkleTree';
export declare class BlockPayload {
    readonly transaction_nmt: NamespaceMerkleTree;
    constructor(transaction_nmt: NamespaceMerkleTree);
    static inflate(value: unknown): BlockPayload;
    toJSON(): {
        transaction_nmt: {
            vm: number;
            payload: unknown;
        };
    };
}
