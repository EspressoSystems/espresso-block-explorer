import { assertInstanceOf } from '@/assert/assert';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import { bigintCodec } from '@/convert/codec/bigint';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';

/**
 * RewardClaimInput represents the input needed in order to claim rewards
 * for a user from the ClaimRewards contract.
 */
export class RewardClaimInput {
  constructor(
    public readonly lifetimeRewards: bigint,
    public readonly authData: ArrayBuffer,
  ) {
    Object.freeze(this);
  }

  toJSON() {
    return rewardClaimInputCodec.encode(this);
  }
}

class RewardClaimInputDecoder implements Converter<unknown, RewardClaimInput> {
  convert(input: unknown): RewardClaimInput {
    assertRecordWithKeys(input, 'lifetime_rewards', 'auth_data');

    return new RewardClaimInput(
      bigintCodec.decode(input.lifetime_rewards),
      hexArrayBufferCodec.decode(input.auth_data),
    );
  }
}

class RewardClaimInputEncoder implements Converter<RewardClaimInput> {
  convert(input: RewardClaimInput) {
    assertInstanceOf(input, RewardClaimInput);

    return {
      lifetime_rewards: bigintCodec.encode(input.lifetimeRewards),
      auth_data: hexArrayBufferCodec.encode(input.authData),
    };
  }
}

class RewardClaimInputCodec extends TypeCheckingCodec<
  RewardClaimInput,
  ReturnType<InstanceType<new () => RewardClaimInputEncoder>['convert']>
> {
  readonly encoder = new RewardClaimInputEncoder();
  readonly decoder = new RewardClaimInputDecoder();
}

export const rewardClaimInputCodec = new RewardClaimInputCodec();
export const nullableRewardClaimInputCodec = new NullCodec(
  new NullDecoder(rewardClaimInputCodec),
  new NullEncoder(rewardClaimInputCodec),
);
