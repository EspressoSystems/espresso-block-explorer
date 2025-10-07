import { default as MonetaryValue } from '../../../../../../../../../../src/models/block_explorer/monetary_value';
/**
 * ETHHeader represents an Ethereum block header as defined within the
 * go-ethereum project:
 * https://github.com/ethereum/go-ethereum/blob/1e4b39ed122f475ac3f776ae66c8d065e845a84e/core/types/block.go#L75
 */
export declare class EthHeader {
    readonly parentHash: ArrayBuffer;
    readonly shas3Uncles: ArrayBuffer;
    readonly miner: ArrayBuffer;
    readonly stateRoot: ArrayBuffer;
    readonly transactionsRoot: ArrayBuffer;
    readonly receiptsRoot: ArrayBuffer;
    readonly logsBloom: ArrayBuffer;
    readonly difficulty: bigint;
    readonly number: bigint;
    readonly gasLimit: MonetaryValue;
    readonly gasUsed: MonetaryValue;
    readonly timestamp: bigint;
    readonly extra: ArrayBuffer;
    readonly mixDigest: ArrayBuffer;
    readonly nonce: bigint;
    readonly baseFeePerGas: null | bigint;
    readonly withdrawalsRoot: null | ArrayBuffer;
    readonly blobGasUsed: null | bigint;
    readonly excessBlobGas: null | bigint;
    readonly parentBeaconBlockRoot: null | ArrayBuffer;
    readonly requestHash: null | ArrayBuffer;
    constructor(parentHash: ArrayBuffer, shas3Uncles: ArrayBuffer, miner: ArrayBuffer, stateRoot: ArrayBuffer, transactionsRoot: ArrayBuffer, receiptsRoot: ArrayBuffer, logsBloom: ArrayBuffer, difficulty: bigint, number: bigint, gasLimit: MonetaryValue, gasUsed: MonetaryValue, timestamp: bigint, extra: ArrayBuffer, mixDigest: ArrayBuffer, nonce: bigint, baseFeePerGas: null | bigint, withdrawalsRoot: null | ArrayBuffer, blobGasUsed: null | bigint, excessBlobGas: null | bigint, parentBeaconBlockRoot: null | ArrayBuffer, requestHash: null | ArrayBuffer);
}
/**
 * decodeEthHeader decodes an Ethereum block Header from the given byte array
 * utilizing RLP deserialization.
 */
export declare function decodeEthHeader(data: Uint8Array, mn?: (n: bigint) => MonetaryValue): EthHeader;
