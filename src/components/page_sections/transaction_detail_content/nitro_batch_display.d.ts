import { NitroL1IncomingMessage } from '../../../../../../../../../../../src/service/abritrum_nitro/l1_incoming_message';
import { default as React } from 'react';
/**
 * NitroMessageWithMetadata represents a Nitro Message with metadata
 * that is stored as part of a batch submitted for Nitro integration projects.
 *
 * This layout is adapted from the Nitro's code base:
 * https://github.com/EspressoSystems/nitro-espresso-integration/blob/828cc2a47358a8aac2a4931fe087f07037351164/arbos/arbostypes/messagewithmeta.go#L17-L20
 */
export declare class NitroMessageWithMetadata {
    readonly message: NitroL1IncomingMessage;
    readonly delayedMessagesRead: bigint;
    constructor(message: NitroL1IncomingMessage, delayedMessagesRead: bigint);
}
/**
 * decodeNitroMessageWithMetadata attempts to decode a Nitro Message with
 * metadata from the provided data.
 *
 * This data is RLP encoded.
 */
export declare function decodeNitroMessageWithMetadata(data: Uint8Array): null | NitroMessageWithMetadata;
/**
 * NitroMessageV0 represents an opaque Nitro Message that is stored as part of a
 * batch submitted for Nitro integration projects that are submitted to
 * Espresso.
 */
export declare class NitroMessageV0 {
    readonly index: bigint;
    readonly length: bigint;
    readonly contents: ArrayBuffer;
    readonly messageWithMetadata: null | NitroMessageWithMetadata;
    constructor(index: bigint, length: bigint, contents: ArrayBuffer, messageWithMetadata: null | NitroMessageWithMetadata);
}
/**
 * NitroBatchV0 represents a Nitro Batch that is submitted to Espresso.
 * It contains a signature and a list of NitroMessages.
 */
export declare class NitroBatchV0 {
    readonly signature: ArrayBuffer;
    readonly messages: NitroMessageV0[];
    constructor(signature: ArrayBuffer, messages: NitroMessageV0[]);
}
/**
 * extractNitroBatch extracts a Nitro Batch from the provided payload.
 */
export declare function extractNitroBatch(payload: Uint8Array): null | NitroBatchV0;
/**
 * NitroBatchDisplay is a component that displays the Nitro Batch
 * information successfully parsed from data stored within a
 * TransactionDetail.
 */
export declare const NitroBatchDetectAndDisplay: React.FC;
/**
 * NitroBatchContext is a React Context that contains the Nitro Batch
 * information.
 */
export declare const NitroBatchContext: React.Context<NitroBatchV0 | null>;
/**
 * NitroBatchDisplay is a component that displays the Nitro Batch detail contained
 * within the NitroBatchContext.
 */
export declare const NitroBatchDisplay: React.FC;
/**
 * NitroMessageContext is a React Context that contains the Nitro Message
 * information.
 */
export declare const NitroMessageContext: React.Context<NitroMessageV0 | null>;
/**
 * NitroMessageIndexContext is a React Context that contains the index offset of
 * the Nitro Message within the batch.
 */
export declare const NitroMessageIndexContext: React.Context<number>;
/**
 * NitroMessageDisplay is a component that displays the Nitro Message
 * information successfully parsed from data.
 */
export declare const NitroMessageDisplay: React.FC;
export interface NitroMessageWithMetadataDisplayProps {
    data: null | NitroMessageWithMetadata;
}
/**
 * NitroMessageWithMetadataDisplay is a component that displays the Nitro
 * Message with Metadata information successfully parsed from data stored
 * within a TransactionDetail.
 */
export declare const NitroMessageWithMetadataDisplay: React.FC<NitroMessageWithMetadataDisplayProps>;
