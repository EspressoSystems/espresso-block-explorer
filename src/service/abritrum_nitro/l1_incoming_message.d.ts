import { default as WalletAddress } from '../../../../../../../../../../src/models/wallet_address/wallet_address';
/**
 * L1MessageType represents the type of an L1 message.
 *
 * This enum is adapted from the Nitro's code base:
 * https://github.com/OffchainLabs/nitro/blob/52a6bd81a304053f003ec0b3995e9fedca2f8eee/arbos/arbostypes/incomingmessage.go#L23-L34
 */
export declare enum L1MessageType {
    l2Message = 3,
    endOfBlock = 6,
    l2FundedByL1 = 7,
    rollupEvent = 8,
    submitRetryable = 9,
    batchForGasEstimation = 10,
    initialize = 11,
    ethDeposit = 12,
    batchPostingReport = 13,
    invalid = 255
}
/**
 * NitroL1IncomingMessageHeader represents the header of a Nitro L1
 * Incoming Message.
 *
 * This layout is adapted from the Nitro's code base:
 * https://github.com/OffchainLabs/nitro/blob/52a6bd81a304053f003ec0b3995e9fedca2f8eee/arbos/arbostypes/incomingmessage.go#L38-L45
 */
export declare class NitroL1IncomingMessageHeader {
    readonly kind: number;
    readonly poster: WalletAddress;
    readonly blockNumber: bigint;
    readonly timestamp: bigint;
    readonly requestID: null | ArrayBuffer;
    readonly l1BaseFee: null | bigint;
    constructor(kind: number, poster: WalletAddress, blockNumber: bigint, timestamp: bigint, requestID?: null | ArrayBuffer, l1BaseFee?: null | bigint);
}
/**
 * decodeNitroL1IncomingMessageHeader attempts to decode a Nitro L1
 * Incoming Message Header from the provided data.
 *
 * This data is RLP encoded.
 */
export declare function decodeNitroL1IncomingMessageHeader(data: Uint8Array): null | NitroL1IncomingMessageHeader;
/**
 * NitroL1IncomingMessage represents a Nitro L1 Incoming Message.
 *
 * This layout is adapted from the Nitro's code base:
 * https://github.com/OffchainLabs/nitro/blob/52a6bd81a304053f003ec0b3995e9fedca2f8eee/arbos/arbostypes/incomingmessage.go#L63-L71
 */
export declare class NitroL1IncomingMessage {
    readonly header: NitroL1IncomingMessageHeader;
    readonly l2Msg: ArrayBuffer;
    readonly batchGasCost: null | bigint;
    constructor(header: NitroL1IncomingMessageHeader, l2Msg: ArrayBuffer, batchGasCost?: null | bigint);
}
/**
 * decodeNitroL1IncomingMessage attempts to decode a Nitro L1
 * Incoming Message from the provided data.
 *
 * This data is RLP encoded.
 */
export declare function decodeNitroL1IncomingMessage(data: Uint8Array): null | NitroL1IncomingMessage;
