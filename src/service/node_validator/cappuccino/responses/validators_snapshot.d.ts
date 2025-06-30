import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { Validator } from '../../../../../../../../../../../../src/models/espresso/stake_table/validator';
import { default as CappuccinoNodeValidatorResponse } from './node_validator_response';
/**
 * Messages from the Cappuccino Node Validator take the form of:
 * { "MessageType": MessageType }
 */
/**
 * kCappuccinoValidatorsSnapshotType is the type string for the
 * CappuccinoValidatorsSnapshot class.
 */
export declare const kCappuccinoValidatorsSnapshotType: "ValidatorsSnapshot";
/**
 * CappuccinoValidatorsSnapshot is a response from the Cappuccino node
 * validator that contains a snapshot of the validators in the network.
 */
export declare class CappuccinoValidatorsSnapshot extends CappuccinoNodeValidatorResponse {
    readonly validators: Validator[];
    constructor(validators: Validator[]);
    toJSON(): {
        ValidatorsSnapshot: unknown[];
    };
}
declare class CappuccinoValidatorsSnapshotDecoder implements Converter<unknown, CappuccinoValidatorsSnapshot> {
    convert(input: unknown): CappuccinoValidatorsSnapshot;
}
declare class CappuccinoValidatorsSnapshotEncoder implements Converter<CappuccinoValidatorsSnapshot> {
    convert(input: CappuccinoValidatorsSnapshot): {
        ValidatorsSnapshot: unknown[];
    };
}
declare class CappuccinoValidatorsSnapshotCodec extends TypeCheckingCodec<CappuccinoValidatorsSnapshot, ReturnType<InstanceType<new () => CappuccinoValidatorsSnapshotEncoder>['convert']>> {
    readonly encoder: CappuccinoValidatorsSnapshotEncoder;
    readonly decoder: CappuccinoValidatorsSnapshotDecoder;
}
export declare const cappuccinoValidatorsSnapshotCodec: CappuccinoValidatorsSnapshotCodec;
export {};
