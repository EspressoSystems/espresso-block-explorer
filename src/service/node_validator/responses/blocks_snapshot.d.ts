import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { ExplorerBlockDetail } from '../../../../../../../../../../../src/service/hotshot_query_service';
import { default as NodeValidatorResponse } from './node_validator_response';
/**
 * Messages from the Node Validator take the form of:
 * { "MessageType": MessageType }
 */
/**
 * kBlocksSnapshotType is the type string for the
 * BlocksSnapshot class.
 */
export declare const kBlocksSnapshotType: "BlocksSnapshot";
/**
 * BlocksSnapshot is a response from the node
 * validator that contains a snapshot of the blocks in the network.
 */
export declare class BlocksSnapshot extends NodeValidatorResponse {
    readonly blocks: ExplorerBlockDetail[];
    constructor(blocks: ExplorerBlockDetail[]);
    toJSON(): {
        BlocksSnapshot: unknown[];
    };
}
declare class BlocksSnapshotDecoder implements Converter<unknown, BlocksSnapshot> {
    convert(input: unknown): BlocksSnapshot;
}
declare class BlocksSnapshotEncoder implements Converter<BlocksSnapshot> {
    convert(input: BlocksSnapshot): {
        BlocksSnapshot: unknown[];
    };
}
declare class BlocksSnapshotCodec extends TypeCheckingCodec<BlocksSnapshot, ReturnType<InstanceType<new () => BlocksSnapshotEncoder>['convert']>> {
    readonly encoder: BlocksSnapshotEncoder;
    readonly decoder: BlocksSnapshotDecoder;
}
export declare const blocksSnapshotCodec: BlocksSnapshotCodec;
export {};
