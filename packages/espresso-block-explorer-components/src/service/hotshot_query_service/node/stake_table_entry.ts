import { bigintCodec } from '@/convert/codec/bigint';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { TaggedBase64, taggedBase64Codec } from '@/models/espresso';

export class StakeTableEntry {
  constructor(
    public readonly stakeKey: TaggedBase64,
    public readonly stakeAmount: bigint,
  ) {
    Object.freeze(this);
  }

  toJSON() {
    return stakeTableEntryCodec.encode(this);
  }
}

class StakeTableEntryDecoder implements Converter<unknown, StakeTableEntry> {
  convert(input: unknown): StakeTableEntry {
    assertRecordWithKeys(input, 'stake_key', 'stake_amount');

    return new StakeTableEntry(
      taggedBase64Codec.decode(input.stake_key),
      bigintCodec.decode(input.stake_amount),
    );
  }
}

class StakeTableEntryEncoder implements Converter<StakeTableEntry> {
  convert(input: StakeTableEntry) {
    return {
      stake_key: taggedBase64Codec.encode(input.stakeKey),
      stake_amount: bigintCodec.encode(input.stakeAmount),
    };
  }
}

class StakeTableEntryCodec extends TypeCheckingCodec<
  StakeTableEntry,
  ReturnType<InstanceType<new () => StakeTableEntryEncoder>['convert']>
> {
  readonly encoder = new StakeTableEntryEncoder();
  readonly decoder = new StakeTableEntryDecoder();
}

export const stakeTableEntryCodec = new StakeTableEntryCodec();
