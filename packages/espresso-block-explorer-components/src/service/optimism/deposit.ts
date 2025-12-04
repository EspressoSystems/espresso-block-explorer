import { uint8ArrayToArrayBufferCodec } from '@/convert/codec/uint8_array';
import { createBufferedDataView } from '@/convert/data_view/buffered_data_view';
import { Endianess } from '@/convert/data_view/endianess';
import { createRLPDeserializer } from '@/convert/rlp/rlp';
import UnimplementedError from '@/errors/unimplemented_error';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import WalletAddress from '@/models/wallet_address/wallet_address';
import { EthTransaction, TxType } from '../ethereum/transaction';

/**
 * TxTypeDeposit is an extension to the Ethereum TxType for a custom
 * Transaction type for Optimism, which represents a Deposit.
 */
const TxTypeDeposit = 0x7e;

/**
 * OptimismDepositTx represents a Deposit Transaction on the Optimism network.
 * This extends an operates within location of a normal Ethereum Transaction.
 */
export class OptimismDepositTx extends EthTransaction {
  readonly sourceHash: ArrayBuffer;
  readonly from: WalletAddress;
  readonly to: null | WalletAddress;
  readonly mint: null | MonetaryValue;
  readonly value: null | MonetaryValue;
  readonly gas: MonetaryValue;
  readonly isSystemTransaction: boolean;
  readonly data: ArrayBuffer;

  get txType(): TxType {
    return TxTypeDeposit as TxType;
  }

  constructor(
    sourceHash: ArrayBuffer,
    from: WalletAddress,
    to: null | WalletAddress,
    mint: null | MonetaryValue,
    value: null | MonetaryValue,
    gas: MonetaryValue,
    isSystemTransaction: boolean,
    data: ArrayBuffer,
  ) {
    super();
    this.sourceHash = sourceHash;
    this.from = from;
    this.to = to;
    this.mint = mint;
    this.value = value;
    this.gas = gas;
    this.isSystemTransaction = isSystemTransaction;
    this.data = data;
  }
}

/**
 * decodeDepositTransaction decodes a Deposit Transaction from the given payload
 * utilizing RLP deserialization.
 */
export function decodeDepositTransaction(
  payload: Uint8Array,
  mn: (b: bigint) => MonetaryValue,
): OptimismDepositTx {
  const deserializer0 = createRLPDeserializer(
    createBufferedDataView(new Uint8Array(payload).buffer, Endianess.big),
  );

  const rawBytes = deserializer0.deserializeBytes();
  const deserializer = createRLPDeserializer(
    createBufferedDataView(new Uint8Array(rawBytes).buffer, Endianess.big),
  );

  // Placeholder for Deposit Transaction decoding logic
  // This should be implemented based on the actual structure of a Deposit Transaction

  const sourceHash = deserializer.deserializeBytes();
  const from = deserializer.deserializeBytes();
  const to = deserializer.deserializeBytes();
  const mint = deserializer.deserializeUint128();
  const value = deserializer.deserializeUint128();
  const gas = deserializer.deserializeUint64();
  const isSystemTransaction = deserializer.deserializeBoolean();
  const data = deserializer.deserializeBytes();

  return new OptimismDepositTx(
    uint8ArrayToArrayBufferCodec.encode(sourceHash),
    new WalletAddress(uint8ArrayToArrayBufferCodec.encode(from)),
    to.length > 0
      ? new WalletAddress(uint8ArrayToArrayBufferCodec.encode(to))
      : null,
    mn(mint),
    mn(value),
    mn(gas),
    isSystemTransaction,
    uint8ArrayToArrayBufferCodec.encode(data),
  );
}

/**
 * optimismTransactionExtension is a helper function to decode all Optimism
 * extensions to the normal Ethereum Transaction types.
 */
export function optimismTransactionExtension(
  payload: Uint8Array,
  mn: (b: bigint) => MonetaryValue = MonetaryValue.ETH,
) {
  const type = payload[0];

  switch (type) {
    case TxTypeDeposit:
      return decodeDepositTransaction(payload.subarray(1), mn);
    default:
      throw new UnimplementedError(
        `Unsupported Optimism Transaction Type: ${type}`,
      );
  }
}
