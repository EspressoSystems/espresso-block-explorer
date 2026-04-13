import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import {
  arrayStakeTableEntryWrapperCodec,
  StakeTableEntryWrapper,
} from '@/models/espresso/stake_table/stake_table_entry_wrapper';
import { default as NodeValidatorResponse } from './node_validator_response';

/**
 * Messages from the Node Validator take the form of:
 * { "MessageType": MessageType }
 */

/**
 * kLatestStakeTableType is the type string for the
 * LatestStakeTable class.
 */
export const kLatestStakeTableType = 'LatestStakeTable' as const;

/**
 * LatestNodeIdentity is a response from the node
 * validator that contains a real-time update for the Stake Table
 * in the network.
 */
export class LatestStakeTable extends NodeValidatorResponse {
  constructor(public readonly stakeTable: StakeTableEntryWrapper[]) {
    super();
  }

  toJSON() {
    return latestStakeTableCodec.encode(this);
  }
}

class LatestStakeTableDecoder implements Converter<unknown, LatestStakeTable> {
  convert(input: unknown): LatestStakeTable {
    assertRecordWithKeys(input, kLatestStakeTableType);

    return new LatestStakeTable(
      arrayStakeTableEntryWrapperCodec.decode(input[kLatestStakeTableType]),
    );
  }
}

class LatestStakeTableEncoder implements Converter<LatestStakeTable> {
  convert(input: LatestStakeTable) {
    return {
      [kLatestStakeTableType]: arrayStakeTableEntryWrapperCodec.encode(
        input.stakeTable,
      ),
    };
  }
}

class LatestStakeTableCodec extends TypeCheckingCodec<
  LatestStakeTable,
  ReturnType<InstanceType<new () => LatestStakeTableEncoder>['convert']>
> {
  readonly encoder = new LatestStakeTableEncoder();
  readonly decoder = new LatestStakeTableDecoder();
}

export const latestStakeTableCodec = new LatestStakeTableCodec();
