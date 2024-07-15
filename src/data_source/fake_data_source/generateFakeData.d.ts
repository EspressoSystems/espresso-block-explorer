import { default as MonetaryValue } from '../../../../../../../../../../src/models/block_explorer/monetary_value';
import { TaggedBase64 } from '../../../../../../../../../../src/models/espresso/tagged_base64/TaggedBase64';
import { PseudoRandomNumberGenerator } from './prng';

export declare function getStartingSeed(): number;
/**
 * createGenesisBlock will create the genesis block for the blockchain.  This
 * block will have no transactions, and will have a hash of all zeros.
 */
export declare function createGenesisBlock(): GeneratedBlock;
/**
 * generateAllBlocks will generate all of the fake blocks for the blockchain.
 * This will generate the genesis block, and then all of the blocks up to the
 * current time.
 */
export declare function generateAllBlocks(prng?: PseudoRandomNumberGenerator): AsyncGenerator<GeneratedBlock>;
/**
 * streamNewBlocks will generate new blocks as they are generated.  This will
 * keep generating blocks until the end of time.
 */
export declare function streamNewBlocks(prng: PseudoRandomNumberGenerator, incomingTime: number, incomingHeight: number): AsyncGenerator<GeneratedBlock>;
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
/**
 * generateIndividualBlock will generate a single block for the blockchain.
 * This will generate a block with a random number of transactions, and a random
 * size.  The block will have a random proposer, and will have a random
 * generation time.
 */
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
export type GeneratedNodeIdentityInformation = {
    pubkey: TaggedBase64;
    address: ArrayBuffer;
    name: string;
    company: {
        name: string;
        website: string;
    };
    location: {
        coords: [number, number];
        country: string;
    };
    operatingSystem: string;
    networkType: string;
    nodeType: string;
};
export declare function generateAllNodeIdentityInformationData(): Generator<GeneratedNodeIdentityInformation>;
export declare const nodeList: GeneratedNodeIdentityInformation[];
