import { default as React } from 'react';
/**
 * CopyAsHex is a convenience component that provides a button to copy
 * data as a Hex string.
 */
export declare const CopyAsHex: React.FC<{
    data: ArrayBufferLike;
}>;
/**
 * CopyAsBase64 is a convenience component that provides a button to copy
 * data as a Base64 string.
 */
export declare const CopyAsBase64: React.FC<{
    data: ArrayBufferLike;
}>;
/**
 * HexDumpAndCopyButtons is a convenience component that provides aHexDump
 * and CopyAsHex and CopyAsBase64 buttons for the provided data.
 */
export declare const HexDumpAndCopyButtons: React.FC<{
    data: ArrayBufferLike;
}>;
