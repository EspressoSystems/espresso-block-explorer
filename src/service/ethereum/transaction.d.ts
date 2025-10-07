import { default as MonetaryValue } from '../../../../../../../../../../src/models/block_explorer/monetary_value';
/**
/**
 * EthTransaction represents an Ethereum Transaction without specifying its
 * actual implementation.  It is essentially here for adherence to a type
 * hierarchy and convenience.
 * https://github.com/ethereum/go-ethereum/blob/1e4b39ed122f475ac3f776ae66c8d065e845a84e/core/types/transaction.go#L57
 */
export declare abstract class EthTransaction {
    abstract get txType(): TxType;
}
/**
 * TxType represents the numeric value of Ethereum transactions. The base types
 * are defined here:
 * https://github.com/ethereum/go-ethereum/blob/1e4b39ed122f475ac3f776ae66c8d065e845a84e/core/types/transaction.go#L49-L53
 *
 * Extended types are defined separately from these base types as necessary.
 */
export declare enum TxType {
    AccessList = 1,
    DynamicFee = 2,
    Blob = 3,
    SetCode = 4
}
/**
 * decodeEthTransaction decodes an Ethereum transaction from the given byte
 * based on the leading byte which indicates the transaction type.
 */
export declare function decodeEthTransaction(data: Uint8Array, mn?: (n: bigint) => MonetaryValue, extension?: (data: Uint8Array, mn: (n: bigint) => MonetaryValue) => EthTransaction): EthTransaction;
