import { ArrayCodec, Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec';
import { ActiveValidatorSetDiff } from './active_validator_set_diff';
/**
 * ActiveValidatorSetDiffJSONDecoder decodes ActiveValidatorSetDiff objects
 * from a JSON object.
 */
declare class ActiveValidatorSetDiffJSONDecoder implements Converter<unknown, ActiveValidatorSetDiff> {
    convert(input: unknown): ActiveValidatorSetDiff;
}
/**
 * ActiveValidatorSetDiffJSONEncoder encodes ActiveValidatorSetDiff objects
 * to a JSON object.
 */
declare class ActiveValidatorSetDiffJSONEncoder implements Converter<ActiveValidatorSetDiff, unknown> {
    convert(input: ActiveValidatorSetDiff): unknown;
}
/**
 * ActiveValidatorSetDiffJSONCodec is a codec that encodes and decodes
 * ActiveValidatorSetDiff objects to and from JSON.
 */
export declare class ActiveValidatorSetDiffJSONCodec extends TypeCheckingCodec<ActiveValidatorSetDiff, unknown> {
    readonly encoder: ActiveValidatorSetDiffJSONEncoder;
    readonly decoder: ActiveValidatorSetDiffJSONDecoder;
}
/**
 * activeValidatorsSetDiffJSONCodec is a codec that encodes and decodes
 * ActiveValidatorSetDiff objects to and from JSON.
 */
export declare const activeValidatorsSetDiffJSONCodec: ActiveValidatorSetDiffJSONCodec;
/**
 * activeValidatorsSetDiffArrayJSONCodec is a codec that encodes and decodes
 * arrays of ActiveValidatorSetDiff objects to and from JSON.
 */
export declare const activeValidatorsSetDiffArrayJSONCodec: ArrayCodec<ActiveValidatorSetDiff, unknown>;
export {};
