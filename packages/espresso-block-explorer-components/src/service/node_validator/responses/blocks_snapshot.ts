import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  ExplorerBlockDetail,
  explorerBlockDetailArrayCodec,
} from '@/service/hotshot_query_service';
import NodeValidatorResponse from './node_validator_response';

/**
 * Messages from the Node Validator take the form of:
 * { "MessageType": MessageType }
 */

/**
 * kBlocksSnapshotType is the type string for the
 * BlocksSnapshot class.
 */
export const kBlocksSnapshotType = 'BlocksSnapshot' as const;

/**
 * BlocksSnapshot is a response from the node
 * validator that contains a snapshot of the blocks in the network.
 */
export class BlocksSnapshot extends NodeValidatorResponse {
  readonly blocks: ExplorerBlockDetail[];

  constructor(blocks: ExplorerBlockDetail[]) {
    super();
    this.blocks = blocks;
  }

  toJSON() {
    return blocksSnapshotCodec.encode(this);
  }
}

class BlocksSnapshotDecoder implements Converter<unknown, BlocksSnapshot> {
  convert(input: unknown): BlocksSnapshot {
    assertRecordWithKeys(input, kBlocksSnapshotType);

    const list = input[kBlocksSnapshotType];
    return new BlocksSnapshot(explorerBlockDetailArrayCodec.decode(list));
  }
}

class BlocksSnapshotEncoder implements Converter<BlocksSnapshot> {
  convert(input: BlocksSnapshot) {
    return {
      [kBlocksSnapshotType]: explorerBlockDetailArrayCodec.encode(input.blocks),
    };
  }
}

class BlocksSnapshotCodec extends TypeCheckingCodec<
  BlocksSnapshot,
  ReturnType<InstanceType<new () => BlocksSnapshotEncoder>['convert']>
> {
  readonly encoder = new BlocksSnapshotEncoder();
  readonly decoder = new BlocksSnapshotDecoder();
}

export const blocksSnapshotCodec = new BlocksSnapshotCodec();
