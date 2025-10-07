/**
 * OptimismSingularBatch represents a singular batch in Optimism.
 * It is based on the project's SingularBatch definition.  Based on
 * this definition:
 * https://github.com/ethereum-optimism/optimism/blob/09d9b1effeeb3b848c6a2e0b9d4a02ca327d37be/op-node/rollup/derive/singular_batch.go#L22
 */
export declare class OptimismSingularBatch {
    readonly parentHash: ArrayBuffer;
    readonly epochNum: bigint;
    readonly epochHash: ArrayBuffer;
    readonly timestamp: bigint;
    readonly transactions: ArrayBuffer[];
    constructor(parentHash: ArrayBuffer, epochNum: bigint, epochHash: ArrayBuffer, timestamp: bigint, transactions: ArrayBuffer[]);
}
/**
 * decodeOptimismSingularBatch decodes a SingularBatch from a byte array
 * using RLP deserialization.
 */
export declare function decodeOptimismSingularBatch(data: Uint8Array): OptimismSingularBatch;
