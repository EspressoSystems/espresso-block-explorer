import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { StakeTableEntryWrapper } from '../../../../../../../../../../../../src/models/espresso/stake_table/stake_table_entry_wrapper';
import { default as CappuccinoNodeValidatorResponse } from './node_validator_response';
/**
 * Messages from the Cappuccino Node Validator take the form of:
 * { "MessageType": MessageType }
 */
/**
 * kCappuccinoStakeTableSnapshotType is the type string for the
 * CappuccinoStakeTableSnapshot class.
 */
export declare const kCappuccinoStakeTableSnapshotType: "StakeTableSnapshot";
/**
 * CappuccinoStakeTableSnapshot is a response from the Cappuccino node
 * validator that contains a snapshot of the StakeTable in the network.
 */
export declare class CappuccinoStakeTableSnapshot extends CappuccinoNodeValidatorResponse {
    readonly stakeTable: StakeTableEntryWrapper[];
    constructor(stakeTable: StakeTableEntryWrapper[]);
    toJSON(): {
        StakeTableSnapshot: unknown[];
    };
}
declare class CappuccinoStakeTableSnapshotDecoder implements Converter<unknown, CappuccinoStakeTableSnapshot> {
    convert(input: unknown): CappuccinoStakeTableSnapshot;
}
declare class CappuccinoStakeTableSnapshotEncoder implements Converter<CappuccinoStakeTableSnapshot> {
    convert(input: CappuccinoStakeTableSnapshot): {
        StakeTableSnapshot: unknown[];
    };
}
declare class CappuccinoStakeTableSnapshotCodec extends TypeCheckingCodec<CappuccinoStakeTableSnapshot, ReturnType<InstanceType<new () => CappuccinoStakeTableSnapshotEncoder>['convert']>> {
    readonly encoder: CappuccinoStakeTableSnapshotEncoder;
    readonly decoder: CappuccinoStakeTableSnapshotDecoder;
}
export declare const cappuccinoStakeTableSnapshotCodec: CappuccinoStakeTableSnapshotCodec;
export {};
