import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec/array';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { TaggedBase64, taggedBase64Codec } from '@/models/espresso';
import { StakeTableEntry, stakeTableEntryCodec } from './stake_table_entry';

export class StakeTableField {
  constructor(
    public readonly stakeTableEntry: StakeTableEntry,
    public readonly stateVerKey: TaggedBase64,
  ) {
    Object.freeze(this);
  }
}

class StakeTableFieldDecoder implements Converter<unknown, StakeTableField> {
  convert(input: unknown): StakeTableField {
    assertRecordWithKeys(input, 'stake_table_entry', 'state_ver_key');

    return new StakeTableField(
      stakeTableEntryCodec.decode(input.stake_table_entry),
      taggedBase64Codec.decode(input.state_ver_key),
    );
  }
}

class StakeTableFieldEncoder implements Converter<StakeTableField> {
  convert(input: StakeTableField) {
    return {
      stake_table_entry: stakeTableEntryCodec.encode(input.stakeTableEntry),
      state_ver_key: taggedBase64Codec.encode(input.stateVerKey),
    };
  }
}

class StakeTableFieldCodec extends TypeCheckingCodec<
  StakeTableField,
  ReturnType<InstanceType<new () => StakeTableFieldEncoder>['convert']>
> {
  readonly encoder = new StakeTableFieldEncoder();
  readonly decoder = new StakeTableFieldDecoder();
}

export const stakeTableFieldCodec = new StakeTableFieldCodec();
export const stakeTableFieldArrayCodec = new ArrayCodec(
  new ArrayDecoder(stakeTableFieldCodec),
  new ArrayEncoder(stakeTableFieldCodec),
);
