import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { StakeTableEntryWrapper } from '../../../../../../../../../../../src/models/espresso/stake_table/stake_table_entry_wrapper';
import { default as NodeValidatorResponse } from './node_validator_response';
/**
 * Messages from the Node Validator take the form of:
 * { "MessageType": MessageType }
 */
/**
 * kStakeTableSnapshotType is the type string for the
 * StakeTableSnapshot class.
 */
export declare const kStakeTableSnapshotType: "StakeTableSnapshot";
/**
 * StakeTableSnapshot is a response from the node
 * validator that contains a snapshot of the StakeTable in the network.
 */
export declare class StakeTableSnapshot extends NodeValidatorResponse {
    readonly stakeTable: StakeTableEntryWrapper[];
    constructor(stakeTable: StakeTableEntryWrapper[]);
    toJSON(): {
        StakeTableSnapshot: unknown[];
    };
}
declare class StakeTableSnapshotDecoder implements Converter<unknown, StakeTableSnapshot> {
    convert(input: unknown): StakeTableSnapshot;
}
declare class StakeTableSnapshotEncoder implements Converter<StakeTableSnapshot> {
    convert(input: StakeTableSnapshot): {
        StakeTableSnapshot: unknown[];
    };
}
declare class StakeTableSnapshotCodec extends TypeCheckingCodec<StakeTableSnapshot, ReturnType<InstanceType<new () => StakeTableSnapshotEncoder>['convert']>> {
    readonly encoder: StakeTableSnapshotEncoder;
    readonly decoder: StakeTableSnapshotDecoder;
}
export declare const stakeTableSnapshotCodec: StakeTableSnapshotCodec;
export {};
