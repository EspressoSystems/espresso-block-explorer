import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { Validator } from '../../../../../../../../../../../src/models/espresso/stake_table/validator';
import { default as NodeValidatorResponse } from './node_validator_response';
/**
 * Messages from the Node Validator take the form of:
 * { "MessageType": MessageType }
 */
/**
 * kLatestValidatorType is the type string for the
 * LatestValidator class.
 */
export declare const kLatestValidatorType: "LatestValidator";
/**
 * LatestValidator is a response from the node
 * validator that contains a real-time update for a Validator
 * in the network.
 */
export declare class LatestValidator extends NodeValidatorResponse {
    readonly validator: Validator;
    constructor(validator: Validator);
    toJSON(): {
        LatestValidator: unknown;
    };
}
declare class LatestValidatorDecoder implements Converter<unknown, LatestValidator> {
    convert(input: unknown): LatestValidator;
}
declare class LatestValidatorEncoder implements Converter<LatestValidator> {
    convert(input: LatestValidator): {
        LatestValidator: unknown;
    };
}
declare class LatestValidatorCodec extends TypeCheckingCodec<LatestValidator, ReturnType<InstanceType<new () => LatestValidatorEncoder>['convert']>> {
    readonly encoder: LatestValidatorEncoder;
    readonly decoder: LatestValidatorDecoder;
}
export declare const latestValidatorCodec: LatestValidatorCodec;
export {};
