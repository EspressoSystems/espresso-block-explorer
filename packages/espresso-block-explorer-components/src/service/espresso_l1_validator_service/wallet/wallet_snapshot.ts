import {
  assertRecordWithKeys,
  bigintCodec,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec';
import { Delegation, delegationArrayJSONCodec } from '../common/delegation';
import { L1BlockInfo, l1BlockInfoJSONCodec } from '../common/l1_block_info';
import {
  PendingWithdrawal,
  pendingWithdrawalArrayJSONCodec,
} from '../common/pending_withdrawal';

/**
 * WalletSnapshot represents a snapshot of a Wallet for a specific address
 * at a specific L1 Block.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e98094bedee1317fc03c8f
 */
export class WalletSnapshot {
  constructor(
    readonly nodes: Delegation[],
    readonly pendingUndelegations: PendingWithdrawal[],
    readonly pendingExits: PendingWithdrawal[],
    readonly claimedRewards: bigint,
    readonly l1Block: L1BlockInfo,
  ) {
    Object.freeze(this);
  }

  toJSON() {
    return walletSnapshotJSONCodec.encode(this);
  }
}

/**
 * WalletSnapshotJSONDecoder decodes WalletSnapshot
 * objects from a JSON object.
 */
class WalletSnapshotJSONDecoder implements Converter<unknown, WalletSnapshot> {
  convert(input: unknown): WalletSnapshot {
    assertRecordWithKeys(
      input,
      'nodes',
      'pending_undelegations',
      'pending_exits',
      'claimed_rewards',
      'l1_block',
    );

    return new WalletSnapshot(
      delegationArrayJSONCodec.decode(input.nodes),
      pendingWithdrawalArrayJSONCodec.decode(input.pending_undelegations),
      pendingWithdrawalArrayJSONCodec.decode(input.pending_exits),
      bigintCodec.decode(input.claimed_rewards),
      l1BlockInfoJSONCodec.decode(input.l1_block),
    );
  }
}

/**
 * WalletSnapshotJSONEncoder encodes WalletSnapshot
 * objects to a JSON object.
 */
class WalletSnapshotJSONEncoder implements Converter<WalletSnapshot, unknown> {
  convert(input: WalletSnapshot): unknown {
    return {
      nodes: delegationArrayJSONCodec.encode(input.nodes),
      pending_undelegations: pendingWithdrawalArrayJSONCodec.encode(
        input.pendingUndelegations,
      ),
      pending_exits: pendingWithdrawalArrayJSONCodec.encode(input.pendingExits),
      claimed_rewards: bigintCodec.encode(input.claimedRewards),
      l1_block: l1BlockInfoJSONCodec.encode(input.l1Block),
    };
  }
}

/**
 * WalletSnapshotJSONCodec is a codec that encodes and decodes
 * WalletSnapshot objects to and from JSON.
 */
class WalletSnapshotJSONCodec extends TypeCheckingCodec<
  WalletSnapshot,
  unknown
> {
  readonly encoder = new WalletSnapshotJSONEncoder();
  readonly decoder = new WalletSnapshotJSONDecoder();
}

/**
 * WalletSnapshotJSONCodec is a codec that encodes and decodes
 * WalletSnapshot objects to and from JSON.
 */
export const walletSnapshotJSONCodec = new WalletSnapshotJSONCodec();
