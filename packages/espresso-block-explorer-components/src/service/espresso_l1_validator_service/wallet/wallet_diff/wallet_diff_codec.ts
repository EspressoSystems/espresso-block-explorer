import {
  ArrayCodec,
  ArrayDecoder,
  ArrayEncoder,
  assertRecordWithKeys,
  Converter,
  isRecordWithKeys,
  TypeCheckingCodec,
} from '@/convert/codec';
import InvalidTypeError from '@/errors/invalid_type_error';
import {
  ClaimedRewardsKey,
  WalletDiffClaimedRewards,
  walletDiffClaimedRewardsJSONCodec,
} from './claimed_rewards';
import {
  DelegatedToNodeKey,
  WalletDiffDelegatedToNode,
  walletDiffDelegatedToNodeJSONCodec,
} from './delegated_to_node';
import {
  NodeExitWithdrawalKey,
  WalletDiffNodeExitWithdrawal,
  walletDiffNodeExitWithdrawalJSONCodec,
} from './node_exit_withdrawal';
import {
  NodeExitedKey,
  WalletDiffNodeExited,
  walletDiffNodeExitedJSONCodec,
} from './node_exited';
import {
  UndelegatedFromNodeKey,
  WalletDiffUndelegatedFromNode,
  walletDiffUndelegatedFromNodeJSONCodec,
} from './undelegated_from_node';
import {
  UndelegationWithdrawalKey,
  WalletDiffUndelegationWithdrawal,
  walletDiffUndelegationWithdrawalJSONCodec,
} from './undelegation_withdrawal';
import { WalletDiff } from './wallet_diff';

/**
 * WalletDiffJSONDecoder decodes WalletDiff objects
 * from a JSON object.
 */
class WalletDiffJSONDecoder implements Converter<unknown, WalletDiff> {
  convert(input: unknown): WalletDiff {
    assertRecordWithKeys(input);

    if (isRecordWithKeys(input, ClaimedRewardsKey)) {
      return walletDiffClaimedRewardsJSONCodec.decode(input[ClaimedRewardsKey]);
    }

    if (isRecordWithKeys(input, DelegatedToNodeKey)) {
      return walletDiffDelegatedToNodeJSONCodec.decode(
        input[DelegatedToNodeKey],
      );
    }

    if (isRecordWithKeys(input, NodeExitWithdrawalKey)) {
      return walletDiffNodeExitWithdrawalJSONCodec.decode(
        input[NodeExitWithdrawalKey],
      );
    }

    if (isRecordWithKeys(input, NodeExitedKey)) {
      return walletDiffNodeExitedJSONCodec.decode(input[NodeExitedKey]);
    }

    if (isRecordWithKeys(input, UndelegatedFromNodeKey)) {
      return walletDiffUndelegatedFromNodeJSONCodec.decode(
        input[UndelegatedFromNodeKey],
      );
    }

    if (isRecordWithKeys(input, UndelegationWithdrawalKey)) {
      return walletDiffUndelegationWithdrawalJSONCodec.decode(
        input[UndelegationWithdrawalKey],
      );
    }

    const keys = Object.keys(input);

    if (keys.length <= 0) {
      throw new InvalidTypeError('Empty WalletDiff object', 'object');
    }

    const [key] = keys;

    throw new InvalidTypeError(
      key,
      `${ClaimedRewardsKey} | ${DelegatedToNodeKey} | ${NodeExitWithdrawalKey} | ${NodeExitedKey} | ${UndelegatedFromNodeKey} | ${UndelegationWithdrawalKey}`,
    );
  }
}

/**
 * WalletDiffJSONEncoder encodes WalletDiff objects
 * to a JSON object.
 */
class WalletDiffJSONEncoder implements Converter<WalletDiff, unknown> {
  convert(input: WalletDiff): unknown {
    if (input instanceof WalletDiffClaimedRewards) {
      return {
        [ClaimedRewardsKey]: walletDiffClaimedRewardsJSONCodec.encode(input),
      };
    }

    if (input instanceof WalletDiffDelegatedToNode) {
      return {
        [DelegatedToNodeKey]: walletDiffDelegatedToNodeJSONCodec.encode(input),
      };
    }

    if (input instanceof WalletDiffNodeExitWithdrawal) {
      return {
        [NodeExitWithdrawalKey]:
          walletDiffNodeExitWithdrawalJSONCodec.encode(input),
      };
    }

    if (input instanceof WalletDiffNodeExited) {
      return {
        [NodeExitedKey]: walletDiffNodeExitedJSONCodec.encode(input),
      };
    }

    if (input instanceof WalletDiffUndelegatedFromNode) {
      return {
        [UndelegatedFromNodeKey]:
          walletDiffUndelegatedFromNodeJSONCodec.encode(input),
      };
    }

    if (input instanceof WalletDiffUndelegationWithdrawal) {
      return {
        [UndelegationWithdrawalKey]:
          walletDiffUndelegationWithdrawalJSONCodec.encode(input),
      };
    }

    throw new InvalidTypeError(
      'Unrecognized EspressoMessage type',
      'Valid EspressoMessage Type',
    );
  }
}

/**
 * WalletDiffJSONCodec is a codec that encodes and decodes
 * WalletDiff objects to and from JSON.
 */
export class WalletDiffJSONCodec extends TypeCheckingCodec<
  WalletDiff,
  unknown
> {
  readonly encoder = new WalletDiffJSONEncoder();
  readonly decoder = new WalletDiffJSONDecoder();
}

/**
 * WalletDiffJSONCodec is a codec that encodes and decodes
 * WalletDiff objects to and from JSON.
 */
export const walletDiffJSONCodec = new WalletDiffJSONCodec();

/**
 * WalletDiffJSONCodec is a codec that encodes and decodes
 * arrays of WalletDiff objects to and from JSON.
 */
export const walletDiffArrayJSONCodec = new ArrayCodec(
  new ArrayDecoder(walletDiffJSONCodec),
  new ArrayEncoder(walletDiffJSONCodec),
);
