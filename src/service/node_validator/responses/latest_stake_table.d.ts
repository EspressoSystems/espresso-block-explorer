import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { StakeTableEntryWrapper } from '../../../../../../../../../../../src/models/espresso/stake_table/stake_table_entry_wrapper';
import { default as NodeValidatorResponse } from './node_validator_response';
/**
 * Messages from the Node Validator take the form of:
 * { "MessageType": MessageType }
 */
/**
 * kLatestStakeTableType is the type string for the
 * LatestStakeTable class.
 */
export declare const kLatestStakeTableType: "LatestStakeTable";
/**
 * LatestNodeIdentity is a response from the node
 * validator that contains a real-time update for the Stake Table
 * in the network.
 */
export declare class LatestStakeTable extends NodeValidatorResponse {
    readonly stakeTable: StakeTableEntryWrapper[];
    constructor(stakeTable: StakeTableEntryWrapper[]);
    toJSON(): {
        LatestStakeTable: unknown[];
    };
}
declare class LatestStakeTableDecoder implements Converter<unknown, LatestStakeTable> {
    convert(input: unknown): LatestStakeTable;
}
declare class LatestStakeTableEncoder implements Converter<LatestStakeTable> {
    convert(input: LatestStakeTable): {
        LatestStakeTable: unknown[];
    };
}
declare class LatestStakeTableCodec extends TypeCheckingCodec<LatestStakeTable, ReturnType<InstanceType<new () => LatestStakeTableEncoder>['convert']>> {
    readonly encoder: LatestStakeTableEncoder;
    readonly decoder: LatestStakeTableDecoder;
}
export declare const latestStakeTableCodec: LatestStakeTableCodec;
export {};
