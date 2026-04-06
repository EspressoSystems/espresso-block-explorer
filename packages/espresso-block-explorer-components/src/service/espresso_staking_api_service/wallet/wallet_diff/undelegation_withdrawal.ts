import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import { Withdrawal, withdrawalJSONCodec } from '../../common/withdrawal';
import { WalletDiff } from './wallet_diff';

/**
 */
export class WalletDiffUndelegationWithdrawal extends WalletDiff {
  constructor(public readonly withdrawal: Withdrawal) {
    super();
    Object.freeze(this);
  }

  toJSON() {
    return walletDiffUndelegationWithdrawalJSONCodec.encode(this);
  }
}

/**
 * WalletDiffUndelegationWithdrawalJSONDecoder decodes WalletDiffUndelegationWithdrawal
 * objects from a JSON object.
 */
class WalletDiffUndelegationWithdrawalJSONDecoder implements Converter<
  unknown,
  WalletDiffUndelegationWithdrawal
> {
  convert(input: unknown): WalletDiffUndelegationWithdrawal {
    return new WalletDiffUndelegationWithdrawal(
      withdrawalJSONCodec.decode(input),
    );
  }
}

/**
 * WalletDiffUndelegationWithdrawalJSONEncoder encodes WalletDiffUndelegationWithdrawal
 * objects to a JSON object.
 */
class WalletDiffUndelegationWithdrawalJSONEncoder implements Converter<
  WalletDiffUndelegationWithdrawal,
  unknown
> {
  convert(input: WalletDiffUndelegationWithdrawal): unknown {
    return withdrawalJSONCodec.encode(input.withdrawal);
  }
}

/**
 * WalletDiffUndelegationWithdrawalJSONCodec is a codec that encodes and decodes
 * WalletDiffUndelegationWithdrawal objects to and from JSON.
 */
class WalletDiffUndelegationWithdrawalJSONCodec extends TypeCheckingCodec<
  WalletDiffUndelegationWithdrawal,
  unknown
> {
  readonly encoder = new WalletDiffUndelegationWithdrawalJSONEncoder();
  readonly decoder = new WalletDiffUndelegationWithdrawalJSONDecoder();
}

/**
 * UndelegationWithdrawalKey is the key used to identify the
 * WalletDiffUndelegationWithdrawal object in the validator set diff JSON
 * representation.
 */
export const UndelegationWithdrawalKey = 'UndelegationWithdrawal';

/**
 * walletDiffUndelegationWithdrawalJSONCodec is a codec that encodes and decodes
 * WalletDiffUndelegationWithdrawal objects to and from JSON.
 */
export const walletDiffUndelegationWithdrawalJSONCodec =
  new WalletDiffUndelegationWithdrawalJSONCodec();
