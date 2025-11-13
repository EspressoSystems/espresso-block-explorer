import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import {
  PendingWithdrawal,
  pendingWithdrawalJSONCodec,
} from '../../common/pending_withdrawal';
import { WalletDiff } from './wallet_diff';

/**
 */
export class WalletDiffNodeExited extends WalletDiff {
  constructor(public readonly pendingWithdrawal: PendingWithdrawal) {
    super();
    Object.freeze(this);
  }

  toJSON() {
    return walletDiffNodeExitedJSONCodec.encode(this);
  }
}

/**
 * WalletDiffNodeExitedJSONDecoder decodes WalletDiffNodeExited
 * objects from a JSON object.
 */
class WalletDiffNodeExitedJSONDecoder
  implements Converter<unknown, WalletDiffNodeExited>
{
  convert(input: unknown): WalletDiffNodeExited {
    return new WalletDiffNodeExited(pendingWithdrawalJSONCodec.decode(input));
  }
}

/**
 * WalletDiffNodeExitedJSONEncoder encodes WalletDiffNodeExited
 * objects to a JSON object.
 */
class WalletDiffNodeExitedJSONEncoder
  implements Converter<WalletDiffNodeExited, unknown>
{
  convert(input: WalletDiffNodeExited): unknown {
    return pendingWithdrawalJSONCodec.encode(input.pendingWithdrawal);
  }
}

/**
 * WalletDiffNodeExitedJSONCodec is a codec that encodes and decodes
 * WalletDiffNodeExited objects to and from JSON.
 */
class WalletDiffNodeExitedJSONCodec extends TypeCheckingCodec<
  WalletDiffNodeExited,
  unknown
> {
  readonly encoder = new WalletDiffNodeExitedJSONEncoder();
  readonly decoder = new WalletDiffNodeExitedJSONDecoder();
}

/**
 * NodeExitedKey is the key used to identify the
 * WalletDiffNodeExited object in the validator set diff JSON
 * representation.
 */
export const NodeExitedKey = 'NodeExited';

/**
 * walletDiffNodeExitedJSONCodec is a codec that encodes and decodes
 * WalletDiffNodeExited objects to and from JSON.
 */
export const walletDiffNodeExitedJSONCodec =
  new WalletDiffNodeExitedJSONCodec();
