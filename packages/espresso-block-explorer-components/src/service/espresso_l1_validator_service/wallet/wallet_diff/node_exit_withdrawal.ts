import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import { Withdrawal, withdrawalJSONCodec } from '../../common/withdrawal';
import { WalletDiff } from './wallet_diff';

/**
 */
export class WalletDiffNodeExitWithdrawal extends WalletDiff {
  constructor(public readonly withdrawal: Withdrawal) {
    super();
    Object.freeze(this);
  }

  toJSON() {
    return walletDiffNodeExitWithdrawalJSONCodec.encode(this);
  }
}

/**
 * WalletDiffNodeExitWithdrawalJSONDecoder decodes WalletDiffNodeExitWithdrawal
 * objects from a JSON object.
 */
class WalletDiffNodeExitWithdrawalJSONDecoder implements Converter<
  unknown,
  WalletDiffNodeExitWithdrawal
> {
  convert(input: unknown): WalletDiffNodeExitWithdrawal {
    return new WalletDiffNodeExitWithdrawal(withdrawalJSONCodec.decode(input));
  }
}

/**
 * WalletDiffNodeExitWithdrawalJSONEncoder encodes WalletDiffNodeExitWithdrawal
 * objects to a JSON object.
 */
class WalletDiffNodeExitWithdrawalJSONEncoder implements Converter<
  WalletDiffNodeExitWithdrawal,
  unknown
> {
  convert(input: WalletDiffNodeExitWithdrawal): unknown {
    return withdrawalJSONCodec.encode(input.withdrawal);
  }
}

/**
 * WalletDiffNodeExitWithdrawalJSONCodec is a codec that encodes and decodes
 * WalletDiffNodeExitWithdrawal objects to and from JSON.
 */
class WalletDiffNodeExitWithdrawalJSONCodec extends TypeCheckingCodec<
  WalletDiffNodeExitWithdrawal,
  unknown
> {
  readonly encoder = new WalletDiffNodeExitWithdrawalJSONEncoder();
  readonly decoder = new WalletDiffNodeExitWithdrawalJSONDecoder();
}

/**
 * NodeExitWithdrawalKey is the key used to identify the
 * WalletDiffNodeExitWithdrawal object in the validator set diff JSON
 * representation.
 */
export const NodeExitWithdrawalKey = 'NodeExitWithdrawal';

/**
 * walletDiffNodeExitWithdrawalJSONCodec is a codec that encodes and decodes
 * WalletDiffNodeExitWithdrawal objects to and from JSON.
 */
export const walletDiffNodeExitWithdrawalJSONCodec =
  new WalletDiffNodeExitWithdrawalJSONCodec();
