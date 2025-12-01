import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import {
  PendingWithdrawal,
  pendingWithdrawalJSONCodec,
} from '../../common/pending_withdrawal';
import { WalletDiff } from './wallet_diff';

/**
 */
export class WalletDiffUndelegatedFromNode extends WalletDiff {
  constructor(public readonly pendingWithdrawal: PendingWithdrawal) {
    super();
    Object.freeze(this);
  }

  toJSON() {
    return walletDiffUndelegatedFromNodeJSONCodec.encode(this);
  }
}

/**
 * WalletDiffUndelegatedFromNodeJSONDecoder decodes WalletDiffUndelegatedFromNode
 * objects from a JSON object.
 */
class WalletDiffUndelegatedFromNodeJSONDecoder implements Converter<
  unknown,
  WalletDiffUndelegatedFromNode
> {
  convert(input: unknown): WalletDiffUndelegatedFromNode {
    return new WalletDiffUndelegatedFromNode(
      pendingWithdrawalJSONCodec.decode(input),
    );
  }
}

/**
 * WalletDiffUndelegatedFromNodeJSONEncoder encodes WalletDiffUndelegatedFromNode
 * objects to a JSON object.
 */
class WalletDiffUndelegatedFromNodeJSONEncoder implements Converter<
  WalletDiffUndelegatedFromNode,
  unknown
> {
  convert(input: WalletDiffUndelegatedFromNode): unknown {
    return pendingWithdrawalJSONCodec.encode(input.pendingWithdrawal);
  }
}

/**
 * WalletDiffUndelegatedFromNodeJSONCodec is a codec that encodes and decodes
 * WalletDiffUndelegatedFromNode objects to and from JSON.
 */
class WalletDiffUndelegatedFromNodeJSONCodec extends TypeCheckingCodec<
  WalletDiffUndelegatedFromNode,
  unknown
> {
  readonly encoder = new WalletDiffUndelegatedFromNodeJSONEncoder();
  readonly decoder = new WalletDiffUndelegatedFromNodeJSONDecoder();
}

/**
 * UndelegatedFromNodeKey is the key used to identify the
 * WalletDiffUndelegatedFromNode object in the validator set diff JSON
 * representation.
 */
export const UndelegatedFromNodeKey = 'UndelegatedFromNode';

/**
 * walletDiffUndelegatedFromNodeJSONCodec is a codec that encodes and decodes
 * WalletDiffUndelegatedFromNode objects to and from JSON.
 */
export const walletDiffUndelegatedFromNodeJSONCodec =
  new WalletDiffUndelegatedFromNodeJSONCodec();
