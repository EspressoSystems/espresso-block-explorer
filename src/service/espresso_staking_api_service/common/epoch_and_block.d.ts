import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * computeEpochByBlockAndBlocksPerEpoch computes the epoch number given a
 * block number and the number of blocks per epoch.
 */
export declare function computeEpochByBlockAndBlocksPerEpoch(blockNum: bigint, blocksPerEpoch: bigint): bigint;
/**
 * EpochAndBlock represents an epoch and block number pair with a timestamp.
 *
 * The EpochAndBlock type is defined by the Espresso L1 Validator Service API.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2942431b68e98026a30aca437cc81769
 * This is defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/common.rs#L81-L90
 */
export declare class EpochAndBlock {
    readonly epoch: bigint;
    readonly block: bigint;
    readonly timestamp: Date;
    constructor(epoch: bigint, block: bigint, timestamp: Date);
    static determineEpoch(block: bigint, blocksPerEpoch: bigint): bigint;
    /**
     * blocksPerEpoch computes the number of blocks per epoch based on the
     * epoch and block numbers.
     *
     * NOTE: This is a best effort solution, as there are a few factors that
     * make this impossible to determine the "blocksPerEpoch" uniquely. These
     * scenarios have to do with the conversion using truncation to determine
     * a resulting integer number of epochs.  Due to this, we may not achieve
     * a 1:1 mapping between epoch/block and blocksPerEpoch in some edge cases.
     *
     * Examples of such edge cases include:
     * - Epoch 0: This is an invalid state, and indicates 0 blocks per epoch.
     * - Epoch 1: We cannot determine blocks per epoch uniquely from a single
     *  block number in epoch 1, as all blocks from 0 to blocksPerEpoch - 1
     * belong to epoch 1.
     * - Cases where the block number is exactly divisible by the epoch, which
     * can lead to ambiguity in determining the correct blocks per epoch.
     *
     * @deprecated In general this function is meant to serve as a helper for quick
     * calculations, but should ultimately not be utilized.
     */
    get blocksPerEpoch(): bigint;
    toJSON(): unknown;
}
/**
 * EpochAndBlockNumberJSONDecoder decodes EpochAndBlock objects from a JSON
 * object.
 */
declare class EpochAndBlockNumberJSONDecoder implements Converter<unknown, EpochAndBlock> {
    convert(input: unknown): EpochAndBlock;
}
/**
 * EpochAndBlockNumberJSONEncoder encodes EpochAndBlock objects to a JSON
 * object.
 */
declare class EpochAndBlockNumberJSONEncoder implements Converter<EpochAndBlock, unknown> {
    convert(input: EpochAndBlock): unknown;
}
/**
 * EpochAndBlockNumberJSONCodec is a codec that encodes and decodes
 * EpochAndBlock objects to and from JSON.
 */
declare class EpochAndBlockNumberJSONCodec extends TypeCheckingCodec<EpochAndBlock, unknown> {
    readonly encoder: EpochAndBlockNumberJSONEncoder;
    readonly decoder: EpochAndBlockNumberJSONDecoder;
}
/**
 * epochAndBlockNumberJSONCodec is a codec that encodes and decodes
 * EpochAndBlock objects to and from JSON.
 */
export declare const epochAndBlockNumberJSONCodec: EpochAndBlockNumberJSONCodec;
export {};
