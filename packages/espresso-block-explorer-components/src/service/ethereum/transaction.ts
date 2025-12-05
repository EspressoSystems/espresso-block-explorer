import UnimplementedError from '@/errors/unimplemented_error';
import MonetaryValue from '@/models/block_explorer/monetary_value';

/**
/**
 * EthTransaction represents an Ethereum Transaction without specifying its
 * actual implementation.  It is essentially here for adherence to a type
 * hierarchy and convenience.
 * https://github.com/ethereum/go-ethereum/blob/1e4b39ed122f475ac3f776ae66c8d065e845a84e/core/types/transaction.go#L57
 */
export abstract class EthTransaction {
  abstract get txType(): TxType;
}

/**
 * TxType represents the numeric value of Ethereum transactions. The base types
 * are defined here:
 * https://github.com/ethereum/go-ethereum/blob/1e4b39ed122f475ac3f776ae66c8d065e845a84e/core/types/transaction.go#L49-L53
 *
 * Extended types are defined separately from these base types as necessary.
 */
export enum TxType {
  AccessList = 0x01,
  DynamicFee = 0x02,
  Blob = 0x03,
  SetCode = 0x04,
}

function defaultExtension(): EthTransaction {
  throw new UnimplementedError();
}

/**
 * decodeEthTransaction decodes an Ethereum transaction from the given byte
 * based on the leading byte which indicates the transaction type.
 */
export function decodeEthTransaction(
  data: Uint8Array,
  mn: (n: bigint) => MonetaryValue = MonetaryValue.ETH,
  extension: (
    data: Uint8Array,
    mn: (n: bigint) => MonetaryValue,
  ) => EthTransaction = defaultExtension,
): EthTransaction {
  const type: TxType = data[0];
  switch (type) {
    case TxType.AccessList:
    case TxType.DynamicFee:
    case TxType.Blob:
    case TxType.SetCode:
      throw new UnimplementedError();

    default:
      return extension(data, mn);
  }
}
