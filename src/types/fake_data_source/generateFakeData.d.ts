import { TaggedBase64 } from '../TaggedBase64';
import { PseudoRandomNumberGenerator } from './prng';
export declare function generateAllBlocks(): AsyncGenerator<GeneratedBlock>;
type GeneratedBlock = {
    height: number;
    time: Date;
    transactions: AsyncIterable<GeneratedTransaction>;
    numTransactions: number;
    proposer: TaggedBase64;
    size: number;
};
export declare function generateIndividualBlock(prng: PseudoRandomNumberGenerator, height: number, start: number, end: number): GeneratedBlock;
type GeneratedTransaction = {
    block: number;
    index: number;
    size: number;
    hash: ArrayBuffer;
    time: Date;
    sender: TaggedBase64;
    tree: {
        namespace: number;
        data: ArrayBuffer;
    }[];
};
export declare function generateTransactionsForBlock(prng: PseudoRandomNumberGenerator, height: number, start: number, end: number, numTransactions: number): AsyncGenerator<GeneratedTransaction>;
export {};
