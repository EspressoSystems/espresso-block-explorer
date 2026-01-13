import { default as React } from 'react';
export interface HexDumpProps {
    className?: string;
    value: ArrayBufferLike;
}
/**
 * HexDump is a component that will display the data content of an
 * ArrayBuffer represented as hexadecimal.  It's format emulates
 * the hexdump binary for alignment, formatting and display.
 */
declare const HexDump: React.FC<HexDumpProps>;
export default HexDump;
