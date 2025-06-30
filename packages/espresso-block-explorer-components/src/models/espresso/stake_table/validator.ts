import { assertInstanceOf } from '@/assert/assert';
import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec/array';
import { bigintCodec } from '@/convert/codec/bigint';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { MapObjectCodec } from '@/convert/codec/map';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import WalletAddress, {
  walletAddressCodec,
} from '@/models/wallet_address/wallet_address';
import { TaggedBase64, taggedBase64Codec } from '../tagged_base64';
import {
  CommissionPercent,
  commissionPercentCodec,
} from './commission_percent';

const stringToStakeCodec = MapObjectCodec.keyStringCodec(bigintCodec);

export class Validator {
  public account: WalletAddress;
  public stakeTableKey: TaggedBase64;
  public stateVerKey: TaggedBase64;
  public stake: bigint;
  public commission: CommissionPercent;
  public delegators: Map<string, bigint>;

  constructor(
    account: WalletAddress,
    stakeTableKey: TaggedBase64,
    stateVerKey: TaggedBase64,
    stake: bigint,
    commission: CommissionPercent,
    delegators: Map<string, bigint>,
  ) {
    this.account = account;
    this.stakeTableKey = stakeTableKey;
    this.stateVerKey = stateVerKey;
    this.stake = stake;
    this.commission = commission;
    this.delegators = delegators;
  }
}

export class ValidatorDecoder implements Converter<unknown, Validator> {
  convert(input: unknown): Validator {
    assertRecordWithKeys(
      input,
      'account',
      'stake_table_key',
      'state_ver_key',
      'stake',
      'commission',
      'delegators',
    );

    return new Validator(
      walletAddressCodec.decode(input['account']),
      taggedBase64Codec.decode(input['stake_table_key']),
      taggedBase64Codec.decode(input['state_ver_key']),
      bigintCodec.decode(input['stake']),
      commissionPercentCodec.decode(input['commission']),
      stringToStakeCodec.decode(input['delegators']),
    );
  }
}

export class ValidatorEncoder
  implements Converter<Validator, Record<string, unknown>>
{
  convert(input: Validator): Record<string, unknown> {
    assertInstanceOf(input, Validator);

    return {
      account: walletAddressCodec.encode(input.account),
      stake_table_key: taggedBase64Codec.encode(input.stakeTableKey),
      state_ver_key: taggedBase64Codec.encode(input.stateVerKey),
      stake: bigintCodec.encode(input.stake),
      commission: commissionPercentCodec.encode(input.commission),
      delegators: stringToStakeCodec.encode(input.delegators),
    };
  }
}

export class ValidatorCodec extends TypeCheckingCodec<Validator> {
  encoder = new ValidatorEncoder();
  decoder = new ValidatorDecoder();
}

export const validatorCodec = new ValidatorCodec();

export const nullableValidatorCodec = new NullCodec(
  new NullDecoder(validatorCodec),
  new NullEncoder(validatorCodec),
);

export const arrayValidatorCodec = new ArrayCodec(
  new ArrayDecoder(validatorCodec),
  new ArrayEncoder(validatorCodec),
);
