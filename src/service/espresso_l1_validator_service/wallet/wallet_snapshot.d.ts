import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec';
import { Delegation } from '../common/delegation';
import { L1BlockInfo } from '../common/l1_block_info';
import { PendingWithdrawal } from '../common/pending_withdrawal';
/**
 * WalletSnapshot represents a snapshot of a Wallet for a specific address
 * at a specific L1 Block.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e98094bedee1317fc03c8f
 */
export declare class WalletSnapshot {
    readonly nodes: Delegation[];
    readonly pendingUndelegations: PendingWithdrawal[];
    readonly pendingExits: PendingWithdrawal[];
    readonly claimedRewards: bigint;
    readonly l1Block: L1BlockInfo;
    constructor(nodes: Delegation[], pendingUndelegations: PendingWithdrawal[], pendingExits: PendingWithdrawal[], claimedRewards: bigint, l1Block: L1BlockInfo);
    toJSON(): unknown;
}
/**
 * WalletSnapshotJSONDecoder decodes WalletSnapshot
 * objects from a JSON object.
 */
declare class WalletSnapshotJSONDecoder implements Converter<unknown, WalletSnapshot> {
    convert(input: unknown): WalletSnapshot;
}
/**
 * WalletSnapshotJSONEncoder encodes WalletSnapshot
 * objects to a JSON object.
 */
declare class WalletSnapshotJSONEncoder implements Converter<WalletSnapshot, unknown> {
    convert(input: WalletSnapshot): unknown;
}
/**
 * WalletSnapshotJSONCodec is a codec that encodes and decodes
 * WalletSnapshot objects to and from JSON.
 */
declare class WalletSnapshotJSONCodec extends TypeCheckingCodec<WalletSnapshot, unknown> {
    readonly encoder: WalletSnapshotJSONEncoder;
    readonly decoder: WalletSnapshotJSONDecoder;
}
/**
 * WalletSnapshotJSONCodec is a codec that encodes and decodes
 * WalletSnapshot objects to and from JSON.
 */
export declare const walletSnapshotJSONCodec: WalletSnapshotJSONCodec;
export {};
