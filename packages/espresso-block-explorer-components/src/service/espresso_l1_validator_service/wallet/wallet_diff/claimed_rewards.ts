import { bigintCodec } from '@/convert/codec';
import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import { WalletDiff } from './wallet_diff';

/**
 */
export class WalletDiffClaimedRewards extends WalletDiff {
  constructor(public readonly claimedRewards: bigint) {
    super();
    Object.freeze(this);
  }

  toJSON() {
    return walletDiffClaimedRewardsJSONCodec.encode(this);
  }
}

/**
 * WalletDiffClaimedRewardsJSONDecoder decodes WalletDiffClaimedRewards
 * objects from a JSON object.
 */
class WalletDiffClaimedRewardsJSONDecoder
  implements Converter<unknown, WalletDiffClaimedRewards>
{
  convert(input: unknown): WalletDiffClaimedRewards {
    return new WalletDiffClaimedRewards(bigintCodec.decode(input));
  }
}

/**
 * WalletDiffClaimedRewardsJSONEncoder encodes WalletDiffClaimedRewards
 * objects to a JSON object.
 */
class WalletDiffClaimedRewardsJSONEncoder
  implements Converter<WalletDiffClaimedRewards, unknown>
{
  convert(input: WalletDiffClaimedRewards): unknown {
    return bigintCodec.encode(input.claimedRewards);
  }
}

/**
 * WalletDiffClaimedRewardsJSONCodec is a codec that encodes and decodes
 * WalletDiffClaimedRewards objects to and from JSON.
 */
class WalletDiffClaimedRewardsJSONCodec extends TypeCheckingCodec<
  WalletDiffClaimedRewards,
  unknown
> {
  readonly encoder = new WalletDiffClaimedRewardsJSONEncoder();
  readonly decoder = new WalletDiffClaimedRewardsJSONDecoder();
}

/**
 * ClaimedRewardsKey is the key used to identify the
 * WalletDiffClaimedRewards object in the validator set diff JSON
 * representation.
 */
export const ClaimedRewardsKey = 'ClaimedRewards';

/**
 * walletDiffClaimedRewardsJSONCodec is a codec that encodes and decodes
 * WalletDiffClaimedRewards objects to and from JSON.
 */
export const walletDiffClaimedRewardsJSONCodec =
  new WalletDiffClaimedRewardsJSONCodec();
