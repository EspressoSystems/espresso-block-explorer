import { ArrayCodec } from '../../../../../../../../../../../../src/convert/codec';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { FullValidatorSetDiff } from './full_validator_set_diff';
/**
 * FullValidatorSetDiffJSONDecoder decodes FullValidatorSetDiff objects
 * from a JSON object.
 */
declare class FullValidatorSetDiffJSONDecoder implements Converter<FullValidatorSetDiff, unknown> {
    convert(input: unknown): FullValidatorSetDiff;
}
/**
 * FullValidatorSetDiffJSONEncoder encodes FullValidatorSetDiff objects
 * to a JSON object.
 */
declare class FullValidatorSetDiffJSONEncoder implements Converter<FullValidatorSetDiff, unknown> {
    convert(input: FullValidatorSetDiff): unknown;
}
/**
 * FullValidatorSetDiffJSONCodec is a codec that encodes and decodes
 * FullValidatorSetDiff objects to and from JSON.
 */
export declare class FullValidatorSetDiffJSONCodec extends TypeCheckingCodec<FullValidatorSetDiff, unknown> {
    readonly encoder: FullValidatorSetDiffJSONEncoder;
    readonly decoder: FullValidatorSetDiffJSONDecoder;
}
/**
 * fullValidatorSetDiffJSONCodec is a codec that encodes and decodes
 * FullValidatorSetDiff objects to and from JSON.
 */
export declare const fullValidatorSetDiffJSONCodec: FullValidatorSetDiffJSONCodec;
/**
 * fullValidatorSetDiffArrayJSONCodec is a codec that encodes and decodes
 * arrays of FullValidatorSetDiff objects to and from JSON.
 */
export declare const fullValidatorSetDiffArrayJSONCodec: ArrayCodec<FullValidatorSetDiff, unknown>;
export {};
