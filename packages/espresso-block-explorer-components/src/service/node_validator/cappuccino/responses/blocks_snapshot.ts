import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  CappuccinoExplorerBlockDetail,
  cappuccinoExplorerBlockDetailArrayCodec,
} from '@/service/hotshot_query_service';
import CappuccinoNodeValidatorResponse from './node_validator_response';

/**
 * Messages from the Cappuccino Node Validator take the form of:
 * { "MessageType": MessageType }
 */

/**
 * kCappuccinoBlocksSnapshotType is the type string for the
 * CappuccinoBlocksSnapshot class.
 */
export const kCappuccinoBlocksSnapshotType = 'BlocksSnapshot' as const;

/**
 * CappuccinoBlocksSnapshot is a response from the Cappuccino node
 * validator that contains a snapshot of the blocks in the network.
 */
export class CappuccinoBlocksSnapshot extends CappuccinoNodeValidatorResponse {
  readonly blocks: CappuccinoExplorerBlockDetail[];

  constructor(blocks: CappuccinoExplorerBlockDetail[]) {
    super();
    this.blocks = blocks;
  }

  toJSON() {
    return cappuccinoBlocksSnapshotCodec.encode(this);
  }
}

class CappuccinoBlocksSnapshotDecoder implements Converter<
  unknown,
  CappuccinoBlocksSnapshot
> {
  convert(input: unknown): CappuccinoBlocksSnapshot {
    assertRecordWithKeys(input, kCappuccinoBlocksSnapshotType);

    const list = input[kCappuccinoBlocksSnapshotType];
    return new CappuccinoBlocksSnapshot(
      cappuccinoExplorerBlockDetailArrayCodec.decode(list),
    );
  }
}

class CappuccinoBlocksSnapshotEncoder implements Converter<CappuccinoBlocksSnapshot> {
  convert(input: CappuccinoBlocksSnapshot) {
    return {
      [kCappuccinoBlocksSnapshotType]:
        cappuccinoExplorerBlockDetailArrayCodec.encode(input.blocks),
    };
  }
}

class CappuccinoBlocksSnapshotCodec extends TypeCheckingCodec<
  CappuccinoBlocksSnapshot,
  ReturnType<InstanceType<new () => CappuccinoBlocksSnapshotEncoder>['convert']>
> {
  readonly encoder = new CappuccinoBlocksSnapshotEncoder();
  readonly decoder = new CappuccinoBlocksSnapshotDecoder();
}

export const cappuccinoBlocksSnapshotCodec =
  new CappuccinoBlocksSnapshotCodec();
