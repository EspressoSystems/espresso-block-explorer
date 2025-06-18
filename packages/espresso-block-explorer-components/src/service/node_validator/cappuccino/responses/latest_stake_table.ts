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
 * kCappuccinoLatestStakeTableType is the type string for the
 * CappuccinoLatestStakeTable class.
 */
export const kCappuccinoLatestStakeTableType = 'LatestStakeTable' as const;

/**
 * CappuccinoLatestNodeIdentity is a response from the Cappuccino node
 * validator that contains a real-time update for the Stake Table
 * in the network.
 */
export class CappuccinoLatestStakeTable extends CappuccinoNodeValidatorResponse {
  readonly stakeTable: StakeTableEntryWrapper[];

  constructor(stakeTable: StakeTableEntryWrapper[]) {
    super();
    this.stakeTable = stakeTable;
  }

  toJSON() {
    return cappuccinoLatestStakeTableCodec.encode(this);
  }
}

class CappuccinoLatestStakeTableDecoder
  implements Converter<unknown, CappuccinoLatestStakeTable>
{
  convert(input: unknown): CappuccinoLatestStakeTable {
    assertRecordWithKeys(input, kCappuccinoLatestStakeTableType);

    return new CappuccinoLatestStakeTable(
      arrayStakeTableEntryWrapperCodec.decode(
        input[kCappuccinoLatestStakeTableType],
      ),
    );
  }
}

class CappuccinoLatestStakeTableEncoder
  implements Converter<CappuccinoLatestStakeTable>
{
  convert(input: CappuccinoLatestStakeTable) {
    return {
      [kCappuccinoLatestStakeTableType]:
        arrayStakeTableEntryWrapperCodec.encode(input.stakeTable),
    };
  }
}

class CappuccinoLatestStakeTableCodec extends TypeCheckingCodec<
  CappuccinoLatestStakeTable,
  ReturnType<
    InstanceType<new () => CappuccinoLatestStakeTableEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoLatestStakeTableEncoder();
  readonly decoder = new CappuccinoLatestStakeTableDecoder();
}

export const cappuccinoLatestStakeTableCodec =
  new CappuccinoLatestStakeTableCodec();
