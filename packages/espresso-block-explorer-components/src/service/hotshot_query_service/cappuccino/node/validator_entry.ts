import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import { bigintCodec } from '@/convert/codec/bigint';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import {
  MapObjectCodec,
  MapObjectDecoder,
  MapObjectEncoder,
} from '@/convert/codec/map';
import { stringCodec } from '@/convert/codec/string';
import {
  CommissionPercent,
  commissionPercentCodec,
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso';

export class ValidatorEntry {
  constructor(
    public readonly address: ArrayBuffer,
    public readonly stakeTableKey: TaggedBase64,
    public readonly stakeKey: TaggedBase64,
    public readonly stake: bigint,
    public readonly comission: CommissionPercent,
    public readonly delegators: Map<`0x${string}`, bigint>,
  ) {
    Object.freeze(this);
  }

  toJSON() {
    return validatorEntryCodec.encode(this);
  }
}

const delegatorsCodec = new MapObjectCodec(
  new MapObjectDecoder(
    stringCodec as TypeCheckingCodec<`0x${string}`, string>,
    bigintCodec,
  ),
  new MapObjectEncoder(
    stringCodec as TypeCheckingCodec<`0x${string}`, string>,
    bigintCodec,
  ),
);

class ValidatorEntryDecoder implements Converter<unknown, ValidatorEntry> {
  convert(input: unknown): ValidatorEntry {
    assertRecordWithKeys(
      input,
      'account',
      'stake_table_key',
      'state_ver_key',
      'stake',
      'commission',
      'delegators',
    );

    return new ValidatorEntry(
      hexArrayBufferCodec.decode(input.account),
      taggedBase64Codec.decode(input.stake_table_key),
      taggedBase64Codec.decode(input.state_ver_key),
      bigintCodec.decode(input.stake),
      commissionPercentCodec.decode(input.commission),
      delegatorsCodec.decode(input.delegators),
    );
  }
}

class ValidatorEntryEncoder implements Converter<ValidatorEntry> {
  convert(input: ValidatorEntry) {
    return {
      account: hexArrayBufferCodec.encode(input.address),
      stake_table_key: taggedBase64Codec.encode(input.stakeTableKey),
      state_ver_key: taggedBase64Codec.encode(input.stakeKey),
      stake: bigintCodec.encode(input.stake),
      commission: commissionPercentCodec.encode(input.comission),
      delegators: delegatorsCodec.encode(input.delegators),
    };
  }
}

class ValidatorEntryCodec extends TypeCheckingCodec<
  ValidatorEntry,
  ReturnType<InstanceType<new () => ValidatorEntryEncoder>['convert']>
> {
  readonly encoder = new ValidatorEntryEncoder();
  readonly decoder = new ValidatorEntryDecoder();
}

export const validatorEntryCodec = new ValidatorEntryCodec();
