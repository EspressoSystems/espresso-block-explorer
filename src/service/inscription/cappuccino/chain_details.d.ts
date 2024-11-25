import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';

/**
 * ChainDetails represents the block and offset of a specific transaction
 * within the chain.
 */
export default class ChainDetails {
    readonly block: number;
    readonly offset: number;
    constructor(block: number, offset: number);
    toJSON(): unknown;
}
/**
 * ChainDetailsEncoder is a Converter that converts an ChainDetails into a
 * JSON object that can be used to represent the ChainDetails.
 */
declare class ChainDetailsEncoder implements Converter<ChainDetails> {
    convert(input: ChainDetails): {
        block: number;
        offset: number;
    };
}
/**
 * ChainDetailsDecoder is a Converter that converts a JSON object into an
 * ChainDetails.
 */
declare class ChainDetailsDecoder implements Converter<unknown, ChainDetails> {
    convert(input: unknown): ChainDetails;
}
/**
 * ChainDetailsCodec is a TypeCheckingCodec for ChainDetails.
 */
declare class ChainDetailsCodec extends TypeCheckingCodec<ChainDetails> {
    readonly encoder: ChainDetailsEncoder;
    readonly decoder: ChainDetailsDecoder;
}
/**
 * chainDetailsCodec is an instance of ChainDetailsCodec.
 */
export declare const chainDetailsCodec: ChainDetailsCodec;
export {};
