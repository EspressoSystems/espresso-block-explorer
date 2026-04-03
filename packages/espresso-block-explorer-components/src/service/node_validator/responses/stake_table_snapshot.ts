import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import {
  arrayStakeTableEntryWrapperCodec,
  StakeTableEntryWrapper,
} from '@/models/espresso/stake_table/stake_table_entry_wrapper';
import NodeValidatorResponse from './node_validator_response';

/**
 * Messages from the Node Validator take the form of:
 * { "MessageType": MessageType }
 */

/**
 * kStakeTableSnapshotType is the type string for the
 * StakeTableSnapshot class.
 */
export const kStakeTableSnapshotType = 'StakeTableSnapshot' as const;

/**
 * StakeTableSnapshot is a response from the node
 * validator that contains a snapshot of the StakeTable in the network.
 */
export class StakeTableSnapshot extends NodeValidatorResponse {
  constructor(public readonly stakeTable: StakeTableEntryWrapper[]) {
    super();
  }

  toJSON() {
    return stakeTableSnapshotCodec.encode(this);
  }
}

class StakeTableSnapshotDecoder implements Converter<
  unknown,
  StakeTableSnapshot
> {
  convert(input: unknown): StakeTableSnapshot {
    assertRecordWithKeys(input, kStakeTableSnapshotType);

    const list = input[kStakeTableSnapshotType];
    return new StakeTableSnapshot(
      arrayStakeTableEntryWrapperCodec.decode(list),
    );
  }
}

class StakeTableSnapshotEncoder implements Converter<StakeTableSnapshot> {
  convert(input: StakeTableSnapshot) {
    return {
      [kStakeTableSnapshotType]: arrayStakeTableEntryWrapperCodec.encode(
        input.stakeTable,
      ),
    };
  }
}

class StakeTableSnapshotCodec extends TypeCheckingCodec<
  StakeTableSnapshot,
  ReturnType<InstanceType<new () => StakeTableSnapshotEncoder>['convert']>
> {
  readonly encoder = new StakeTableSnapshotEncoder();
  readonly decoder = new StakeTableSnapshotDecoder();
}

export const stakeTableSnapshotCodec = new StakeTableSnapshotCodec();
