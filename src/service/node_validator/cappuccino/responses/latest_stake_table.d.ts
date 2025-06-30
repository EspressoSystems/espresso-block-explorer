import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { StakeTableEntryWrapper } from '../../../../../../../../../../../../src/models/espresso/stake_table/stake_table_entry_wrapper';
import { default as CappuccinoNodeValidatorResponse } from './node_validator_response';
/**
 * Messages from the Cappuccino Node Validator take the form of:
 * { "MessageType": MessageType }
 */
/**
 * kCappuccinoLatestStakeTableType is the type string for the
 * CappuccinoLatestStakeTable class.
 */
export declare const kCappuccinoLatestStakeTableType: "LatestStakeTable";
/**
 * CappuccinoLatestNodeIdentity is a response from the Cappuccino node
 * validator that contains a real-time update for the Stake Table
 * in the network.
 */
export declare class CappuccinoLatestStakeTable extends CappuccinoNodeValidatorResponse {
    readonly stakeTable: StakeTableEntryWrapper[];
    constructor(stakeTable: StakeTableEntryWrapper[]);
    toJSON(): {
        LatestStakeTable: unknown[];
    };
}
declare class CappuccinoLatestStakeTableDecoder implements Converter<unknown, CappuccinoLatestStakeTable> {
    convert(input: unknown): CappuccinoLatestStakeTable;
}
declare class CappuccinoLatestStakeTableEncoder implements Converter<CappuccinoLatestStakeTable> {
    convert(input: CappuccinoLatestStakeTable): {
        LatestStakeTable: unknown[];
    };
}
declare class CappuccinoLatestStakeTableCodec extends TypeCheckingCodec<CappuccinoLatestStakeTable, ReturnType<InstanceType<new () => CappuccinoLatestStakeTableEncoder>['convert']>> {
    readonly encoder: CappuccinoLatestStakeTableEncoder;
    readonly decoder: CappuccinoLatestStakeTableDecoder;
}
export declare const cappuccinoLatestStakeTableCodec: CappuccinoLatestStakeTableCodec;
export {};
