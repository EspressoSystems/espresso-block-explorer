import { default as React } from 'react';
export interface HexTextProps {
    value: ArrayBuffer;
    leadingChars?: number;
    trailingChars?: number;
}
/**
 * HexText is a simple Text component that renders the given ArrayBuffer as
 * a hex string
 */
declare const HexText: React.FC<HexTextProps>;
export default HexText;
