import { default as React } from 'react';
/**
 * NitroL1IncomingMessageHeader represents the header of a Nitro L1
 * Incoming Message.
 *
 * This layout is adapted from the Nitro's code base:
 * https://github.com/EspressoSystems/nitro-espresso-integration/blob/828cc2a47358a8aac2a4931fe087f07037351164/arbos/arbostypes/incomingmessage.go#L38-L45
 */
interface NitroL1IncomingMessageHeader {
    readonly kind: number;
    readonly poster: Uint8Array;
    readonly blockNumber: bigint;
    readonly timestamp: bigint;
    readonly requestID: null | Uint8Array;
    readonly l1BaseFee: null | bigint;
}
/**
 * NitroL1IncomingMessage represents a Nitro L1 Incoming Message.
 *
 * This layout is adapted from the Nitro's code base:
 * https://github.com/EspressoSystems/nitro-espresso-integration/blob/828cc2a47358a8aac2a4931fe087f07037351164/arbos/arbostypes/incomingmessage.go#L58-L64
 */
interface NitroL1IncomingMessage {
    readonly header: NitroL1IncomingMessageHeader;
    readonly l2Msg: Uint8Array;
    readonly batchGasCost: null | bigint;
}
/**
 * NitroMessageWithMetadata represents a Nitro Message with metadata
 * that is stored as part of a batch submitted for Nitro integration projects.
 *
 * This layout is adapted from the Nitro's code base:
 * https://github.com/EspressoSystems/nitro-espresso-integration/blob/828cc2a47358a8aac2a4931fe087f07037351164/arbos/arbostypes/messagewithmeta.go#L17-L20
 */
interface NitroMessageWithMetadata {
    readonly message: NitroL1IncomingMessage;
    readonly delayedMessagesRead: bigint;
}
/**
 * NitroBatchDisplay is a component that displays the Nitro Batch
 * information successfully parsed from data stored within a
 * TransactionDetail.
 */
export declare const NitroBatchDisplay: React.FC;
export interface NitroMessageWithMetadataDisplayProps {
    data: null | NitroMessageWithMetadata;
}
/**
 * NitroMessageWithMetadataDisplay is a component that displays the Nitro
 * Message with Metadata information successfully parsed from data stored
 * within a TransactionDetail.
 */
export declare const NitroMessageWithMetadataDisplay: React.FC<NitroMessageWithMetadataDisplayProps>;
export {};
