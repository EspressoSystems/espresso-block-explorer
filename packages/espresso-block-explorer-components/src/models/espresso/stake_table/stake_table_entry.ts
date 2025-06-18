import { assertInstanceOf } from '@/assert/assert';
import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec/array';
import { bigintCodec } from '@/convert/codec/bigint';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import { TaggedBase64, taggedBase64Codec } from '../tagged_base64';

export class StakeTableEntry {
  public stakeKey: TaggedBase64;
  public stakeAmount: bigint;

  constructor(stakeKey: TaggedBase64, stakeAmount: bigint) {
    this.stakeKey = stakeKey;
    this.stakeAmount = stakeAmount;
  }
}

export class StakeTableEntryDecoder
  implements Converter<unknown, StakeTableEntry>
{
  convert(input: unknown): StakeTableEntry {
    assertRecordWithKeys(input, 'stake_key', 'stake_amount');

    return new StakeTableEntry(
      taggedBase64Codec.decode(input['stake_key']),
      bigintCodec.decode(input['stake_amount']),
    );
  }
}

export class StakeTableEntryEncoder
  implements Converter<StakeTableEntry, Record<string, unknown>>
{
  convert(input: StakeTableEntry): Record<string, unknown> {
    assertInstanceOf(input, StakeTableEntry);

    return {
      stake_key: taggedBase64Codec.encode(input.stakeKey),
      stake_amount: bigintCodec.encode(input.stakeAmount),
    };
  }
}

export class StakeTableEntryCodec extends TypeCheckingCodec<StakeTableEntry> {
  encoder = new StakeTableEntryEncoder();
  decoder = new StakeTableEntryDecoder();
}

export const stakeTableEntryCodec = new StakeTableEntryCodec();

export const nullableStakeTableEntryCodec = new NullCodec(
  new NullDecoder(stakeTableEntryCodec),
  new NullEncoder(stakeTableEntryCodec),
);

export const arrayStakeTableEntryCodec = new ArrayCodec(
  new ArrayDecoder(stakeTableEntryCodec),
  new ArrayEncoder(stakeTableEntryCodec),
);
