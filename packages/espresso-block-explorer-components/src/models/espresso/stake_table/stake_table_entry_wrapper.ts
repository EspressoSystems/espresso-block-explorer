import { assertInstanceOf } from '@/assert/assert';
import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec/array';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import { TaggedBase64, taggedBase64Codec } from '../tagged_base64';
import { StakeTableEntry, stakeTableEntryCodec } from './stake_table_entry';

export class StakeTableEntryWrapper {
  public stakeTableEntry: StakeTableEntry;
  public stateVerKey: TaggedBase64;

  constructor(stakeTableEntry: StakeTableEntry, stateVerKey: TaggedBase64) {
    this.stakeTableEntry = stakeTableEntry;
    this.stateVerKey = stateVerKey;
  }
}

export class StakeTableEntryWrapperDecoder implements Converter<
  unknown,
  StakeTableEntryWrapper
> {
  convert(input: unknown): StakeTableEntryWrapper {
    assertRecordWithKeys(input, 'stake_table_entry', 'state_ver_key');

    return new StakeTableEntryWrapper(
      stakeTableEntryCodec.decode(input['stake_table_entry']),
      taggedBase64Codec.decode(input['state_ver_key']),
    );
  }
}

export class StakeTableEntryWrapperEncoder implements Converter<
  StakeTableEntryWrapper,
  Record<string, unknown>
> {
  convert(input: StakeTableEntryWrapper): Record<string, unknown> {
    assertInstanceOf(input, StakeTableEntryWrapper);

    return {
      stake_table_entry: stakeTableEntryCodec.encode(input.stakeTableEntry),
      state_ver_key: taggedBase64Codec.encode(input.stateVerKey),
    };
  }
}

export class StakeTableEntryWrapperCodec extends TypeCheckingCodec<StakeTableEntryWrapper> {
  encoder = new StakeTableEntryWrapperEncoder();
  decoder = new StakeTableEntryWrapperDecoder();
}

export const stakeTableEntryWrapperCodec = new StakeTableEntryWrapperCodec();

export const nullableStakeTableEntryWrapperCodec = new NullCodec(
  new NullDecoder(stakeTableEntryWrapperCodec),
  new NullEncoder(stakeTableEntryWrapperCodec),
);

export const arrayStakeTableEntryWrapperCodec = new ArrayCodec(
  new ArrayDecoder(stakeTableEntryWrapperCodec),
  new ArrayEncoder(stakeTableEntryWrapperCodec),
);
