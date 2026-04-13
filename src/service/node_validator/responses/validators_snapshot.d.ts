import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { Validator } from '../../../../../../../../../../../src/models/espresso/stake_table/validator';
import { default as NodeValidatorResponse } from './node_validator_response';
/**
 * Messages from the Node Validator take the form of:
 * { "MessageType": MessageType }
 */
/**
 * kValidatorsSnapshotType is the type string for the
 * ValidatorsSnapshot class.
 */
export declare const kValidatorsSnapshotType: "ValidatorsSnapshot";
/**
 * ValidatorsSnapshot is a response from the node
 * validator that contains a snapshot of the validators in the network.
 */
export declare class ValidatorsSnapshot extends NodeValidatorResponse {
    readonly validators: Validator[];
    constructor(validators: Validator[]);
    toJSON(): {
        ValidatorsSnapshot: unknown[];
    };
}
declare class ValidatorsSnapshotDecoder implements Converter<unknown, ValidatorsSnapshot> {
    convert(input: unknown): ValidatorsSnapshot;
}
declare class ValidatorsSnapshotEncoder implements Converter<ValidatorsSnapshot> {
    convert(input: ValidatorsSnapshot): {
        ValidatorsSnapshot: unknown[];
    };
}
declare class ValidatorsSnapshotCodec extends TypeCheckingCodec<ValidatorsSnapshot, ReturnType<InstanceType<new () => ValidatorsSnapshotEncoder>['convert']>> {
    readonly encoder: ValidatorsSnapshotEncoder;
    readonly decoder: ValidatorsSnapshotDecoder;
}
export declare const validatorsSnapshotCodec: ValidatorsSnapshotCodec;
export {};
