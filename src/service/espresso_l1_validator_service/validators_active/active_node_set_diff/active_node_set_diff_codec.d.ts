import { ArrayCodec, Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec';
import { ActiveNodeSetDiff } from './active_node_set_diff';
/**
 * ActiveNodeSetDiffJSONDecoder decodes ActiveNodeSetDiff objects
 * from a JSON object.
 */
declare class ActiveNodeSetDiffJSONDecoder implements Converter<unknown, ActiveNodeSetDiff> {
    convert(input: unknown): ActiveNodeSetDiff;
}
/**
 * ActiveNodeSetDiffJSONEncoder encodes ActiveNodeSetDiff objects
 * to a JSON object.
 */
declare class ActiveNodeSetDiffJSONEncoder implements Converter<ActiveNodeSetDiff, unknown> {
    convert(input: ActiveNodeSetDiff): unknown;
}
/**
 * ActiveNodeSetDiffJSONCodec is a codec that encodes and decodes
 * ActiveNodeSetDiff objects to and from JSON.
 */
export declare class ActiveNodeSetDiffJSONCodec extends TypeCheckingCodec<ActiveNodeSetDiff, unknown> {
    readonly encoder: ActiveNodeSetDiffJSONEncoder;
    readonly decoder: ActiveNodeSetDiffJSONDecoder;
}
/**
 * activeNodeSetDiffJSONCodec is a codec that encodes and decodes
 * ActiveNodeSetDiff objects to and from JSON.
 */
export declare const activeNodeSetDiffJSONCodec: ActiveNodeSetDiffJSONCodec;
/**
 * activeNodeSetDiffJSONCodec is a codec that encodes and decodes
 * arrays of ActiveNodeSetDiff objects to and from JSON.
 */
export declare const activeNodeSetDiffArrayJSONCodec: ArrayCodec<ActiveNodeSetDiff, unknown>;
export {};
