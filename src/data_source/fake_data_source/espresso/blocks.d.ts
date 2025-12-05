import { default as MonetaryValue } from '../../../../../../../../../../../src/models/block_explorer/monetary_value';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { PseudoRandomNumberGenerator } from '../prng';
/**
 * createGenesisBlock will create the genesis block for the blockchain.  This
 * block will have no transactions, and will have a hash of all zeros.
 */
export declare function createGenesisEspressoBlock(): GeneratedEspressoBlock;
/**
 * generateAllBlocks will generate all of the fake blocks for the blockchain.
 * This will generate the genesis block, and then all of the blocks up to the
 * current time.
 */
export declare function generateAllEspressoBlocks(prng?: PseudoRandomNumberGenerator, now?: number): AsyncGenerator<GeneratedEspressoBlock>;
/**
 * streamNewBlocks will generate new blocks as they are generated.  This will
 * keep generating blocks until the end of time.
 */
export declare function streamNewEspressoBlocks(prng: PseudoRandomNumberGenerator, incomingTime: number, incomingHeight: number, shouldSleep?: boolean): AsyncGenerator<GeneratedEspressoBlock>;
export type GeneratedEspressoBlock = {
    hash: TaggedBase64;
    height: number;
    time: Date;
    genTime: number;
    transactions: AsyncIterable<GeneratedEspressoTransaction>;
    numTransactions: number;
    proposer: ArrayBuffer[];
    size: number;
    fees: MonetaryValue[];
};
/**
 * generateIndividualBlock will generate a single block for the blockchain.
 * This will generate a block with a random number of transactions, and a random
 * size.  The block will have a random proposer, and will have a random
 * generation time.
 */
export declare function generateIndividualEspressoBlock(prng: PseudoRandomNumberGenerator, height: number, start: number, end: number): GeneratedEspressoBlock;
export type GeneratedEspressoTransaction = {
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
export declare function generateTransactionsForEspressoBlock(prng: PseudoRandomNumberGenerator, height: number, start: number, end: number, numTransactions: number): AsyncGenerator<GeneratedEspressoTransaction>;
