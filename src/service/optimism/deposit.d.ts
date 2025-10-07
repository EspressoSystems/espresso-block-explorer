import { default as MonetaryValue } from '../../../../../../../../../../src/models/block_explorer/monetary_value';
import { default as WalletAddress } from '../../../../../../../../../../src/models/wallet_address/wallet_address';
import { EthTransaction, TxType } from '../ethereum/transaction';
/**
 * OptimismDepositTx represents a Deposit Transaction on the Optimism network.
 * This extends an operates within location of a normal Ethereum Transaction.
 */
export declare class OptimismDepositTx extends EthTransaction {
    readonly sourceHash: ArrayBuffer;
    readonly from: WalletAddress;
    readonly to: null | WalletAddress;
    readonly mint: null | MonetaryValue;
    readonly value: null | MonetaryValue;
    readonly gas: MonetaryValue;
    readonly isSystemTransaction: boolean;
    readonly data: ArrayBuffer;
    get txType(): TxType;
    constructor(sourceHash: ArrayBuffer, from: WalletAddress, to: null | WalletAddress, mint: null | MonetaryValue, value: null | MonetaryValue, gas: MonetaryValue, isSystemTransaction: boolean, data: ArrayBuffer);
}
/**
 * decodeDepositTransaction decodes a Deposit Transaction from the given payload
 * utilizing RLP deserialization.
 */
export declare function decodeDepositTransaction(payload: Uint8Array, mn: (b: bigint) => MonetaryValue): OptimismDepositTx;
/**
 * optimismTransactionExtension is a helper function to decode all Optimism
 * extensions to the normal Ethereum Transaction types.
 */
export declare function optimismTransactionExtension(payload: Uint8Array, mn?: (b: bigint) => MonetaryValue): OptimismDepositTx;
