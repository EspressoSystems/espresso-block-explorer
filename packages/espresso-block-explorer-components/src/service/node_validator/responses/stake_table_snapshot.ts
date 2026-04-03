import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import {
  arrayStakeTableEntryWrapperCodec,
  StakeTableEntryWrapper,
} from '@/models/espresso/stake_table/stake_table_entry_wrapper';
import CappuccinoNodeValidatorResponse from './node_validator_response';

/**
 * Messages from the Cappuccino Node Validator take the form of:
 * { "MessageType": MessageType }
 */

/**
 * kCappuccinoStakeTableSnapshotType is the type string for the
 * CappuccinoStakeTableSnapshot class.
 */
export const kCappuccinoStakeTableSnapshotType = 'StakeTableSnapshot' as const;

/**
 * CappuccinoStakeTableSnapshot is a response from the Cappuccino node
 * validator that contains a snapshot of the StakeTable in the network.
 */
export class CappuccinoStakeTableSnapshot extends CappuccinoNodeValidatorResponse {
  readonly stakeTable: StakeTableEntryWrapper[];

  constructor(stakeTable: StakeTableEntryWrapper[]) {
    super();
    this.stakeTable = stakeTable;
  }

  toJSON() {
    return cappuccinoStakeTableSnapshotCodec.encode(this);
  }
}

class CappuccinoStakeTableSnapshotDecoder implements Converter<
  unknown,
  CappuccinoStakeTableSnapshot
> {
  convert(input: unknown): CappuccinoStakeTableSnapshot {
    assertRecordWithKeys(input, kCappuccinoStakeTableSnapshotType);

    const list = input[kCappuccinoStakeTableSnapshotType];
    return new CappuccinoStakeTableSnapshot(
      arrayStakeTableEntryWrapperCodec.decode(list),
    );
  }
}

class CappuccinoStakeTableSnapshotEncoder implements Converter<CappuccinoStakeTableSnapshot> {
  convert(input: CappuccinoStakeTableSnapshot) {
    return {
      [kCappuccinoStakeTableSnapshotType]:
        arrayStakeTableEntryWrapperCodec.encode(input.stakeTable),
    };
  }
}

class CappuccinoStakeTableSnapshotCodec extends TypeCheckingCodec<
  CappuccinoStakeTableSnapshot,
  ReturnType<
    InstanceType<new () => CappuccinoStakeTableSnapshotEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoStakeTableSnapshotEncoder();
  readonly decoder = new CappuccinoStakeTableSnapshotDecoder();
}

export const cappuccinoStakeTableSnapshotCodec =
  new CappuccinoStakeTableSnapshotCodec();
