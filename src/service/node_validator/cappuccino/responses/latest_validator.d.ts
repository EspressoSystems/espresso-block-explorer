import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { Validator } from '../../../../../../../../../../../../src/models/espresso/stake_table/validator';
import { default as CappuccinoNodeValidatorResponse } from './node_validator_response';
/**
 * Messages from the Cappuccino Node Validator take the form of:
 * { "MessageType": MessageType }
 */
/**
 * kCappuccinoLatestValidatorType is the type string for the
 * CappuccinoLatestValidator class.
 */
export declare const kCappuccinoLatestValidatorType: "LatestValidator";
/**
 * CappuccinoLatestValidator is a response from the Cappuccino node
 * validator that contains a real-time update for a Validator
 * in the network.
 */
export declare class CappuccinoLatestValidator extends CappuccinoNodeValidatorResponse {
    readonly validator: Validator;
    constructor(validator: Validator);
    toJSON(): {
        LatestValidator: unknown;
    };
}
declare class CappuccinoLatestValidatorDecoder implements Converter<unknown, CappuccinoLatestValidator> {
    convert(input: unknown): CappuccinoLatestValidator;
}
declare class CappuccinoLatestValidatorEncoder implements Converter<CappuccinoLatestValidator> {
    convert(input: CappuccinoLatestValidator): {
        LatestValidator: unknown;
    };
}
declare class CappuccinoLatestValidatorCodec extends TypeCheckingCodec<CappuccinoLatestValidator, ReturnType<InstanceType<new () => CappuccinoLatestValidatorEncoder>['convert']>> {
    readonly encoder: CappuccinoLatestValidatorEncoder;
    readonly decoder: CappuccinoLatestValidatorDecoder;
}
export declare const cappuccinoLatestValidatorCodec: CappuccinoLatestValidatorCodec;
export {};
