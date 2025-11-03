import { ArrayCodec } from '../../../../../../../../../../../../src/convert/codec';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { FullNodeSetDiff } from './full_node_set_diff';
/**
 * FullNodeSetDiffJSONDecoder decodes FullNodeSetDiff objects
 * from a JSON object.
 */
declare class FullNodeSetDiffJSONDecoder implements Converter<FullNodeSetDiff, unknown> {
    convert(input: unknown): FullNodeSetDiff;
}
/**
 * FullNodeSetDiffJSONEncoder encodes FullNodeSetDiff objects
 * to a JSON object.
 */
declare class FullNodeSetDiffJSONEncoder implements Converter<FullNodeSetDiff, unknown> {
    convert(input: FullNodeSetDiff): unknown;
}
/**
 * FullNodeSetDiffJSONCodec is a codec that encodes and decodes
 * FullNodeSetDiff objects to and from JSON.
 */
export declare class FullNodeSetDiffJSONCodec extends TypeCheckingCodec<FullNodeSetDiff, unknown> {
    readonly encoder: FullNodeSetDiffJSONEncoder;
    readonly decoder: FullNodeSetDiffJSONDecoder;
}
/**
 * fullNodeSetDiffJSONCodec is a codec that encodes and decodes
 * FullNodeSetDiff objects to and from JSON.
 */
export declare const fullNodeSetDiffJSONCodec: FullNodeSetDiffJSONCodec;
/**
 * fullNodeSetDiffArrayJSONCodec is a codec that encodes and decodes
 * arrays of FullNodeSetDiff objects to and from JSON.
 */
export declare const fullNodeSetDiffArrayJSONCodec: ArrayCodec<FullNodeSetDiff, unknown>;
export {};
