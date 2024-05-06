import { PseudoRandomNumberGenerator } from './prng';
import { TaggedBase64 } from '../../../../../../../../../../src/models/espresso/tagged_base64/TaggedBase64';
import { default as MonetaryValue } from '../../../../../../../../../../src/models/block_explorer/monetary_value';

export declare function generateAllBlocks(): AsyncGenerator<GeneratedBlock>;
export type GeneratedBlock = {
    hash: TaggedBase64;
    height: number;
    time: Date;
    genTime: number;
    transactions: AsyncIterable<GeneratedTransaction>;
    numTransactions: number;
    proposer: ArrayBuffer;
    size: number;
    fees: MonetaryValue[];
};
export declare function generateIndividualBlock(prng: PseudoRandomNumberGenerator, height: number, start: number, end: number): GeneratedBlock;
export type GeneratedTransaction = {
    block: number;
    index: number;
    size: number;
    hash: TaggedBase64;
    time: Date;
    sender: TaggedBase64;
    tree: {
        namespace: number;
        data: ArrayBuffer;
    };
};
export declare function generateTransactionsForBlock(prng: PseudoRandomNumberGenerator, height: number, start: number, end: number, numTransactions: number): AsyncGenerator<GeneratedTransaction>;
