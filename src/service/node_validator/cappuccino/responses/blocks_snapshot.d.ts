import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { CappuccinoExplorerBlockDetail } from '../../../../../../../../../../../../src/service/hotshot_query_service';
import { default as CappuccinoNodeValidatorResponse } from './node_validator_response';
/**
 * Messages from the Cappuccino Node Validator take the form of:
 * { "MessageType": MessageType }
 */
/**
 * kCappuccinoBlocksSnapshotType is the type string for the
 * CappuccinoBlocksSnapshot class.
 */
export declare const kCappuccinoBlocksSnapshotType: "BlocksSnapshot";
/**
 * CappuccinoBlocksSnapshot is a response from the Cappuccino node
 * validator that contains a snapshot of the blocks in the network.
 */
export declare class CappuccinoBlocksSnapshot extends CappuccinoNodeValidatorResponse {
    readonly blocks: CappuccinoExplorerBlockDetail[];
    constructor(blocks: CappuccinoExplorerBlockDetail[]);
    toJSON(): {
        BlocksSnapshot: unknown[];
    };
}
declare class CappuccinoBlocksSnapshotDecoder implements Converter<unknown, CappuccinoBlocksSnapshot> {
    convert(input: unknown): CappuccinoBlocksSnapshot;
}
declare class CappuccinoBlocksSnapshotEncoder implements Converter<CappuccinoBlocksSnapshot> {
    convert(input: CappuccinoBlocksSnapshot): {
        BlocksSnapshot: unknown[];
    };
}
declare class CappuccinoBlocksSnapshotCodec extends TypeCheckingCodec<CappuccinoBlocksSnapshot, ReturnType<InstanceType<new () => CappuccinoBlocksSnapshotEncoder>['convert']>> {
    readonly encoder: CappuccinoBlocksSnapshotEncoder;
    readonly decoder: CappuccinoBlocksSnapshotDecoder;
}
export declare const cappuccinoBlocksSnapshotCodec: CappuccinoBlocksSnapshotCodec;
export {};
