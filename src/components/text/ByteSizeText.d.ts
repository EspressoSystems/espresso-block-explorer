import React from 'react';
export interface ByteSizeTextProps {
    bytes: number;
}
/**
 * ByteSizeText is a simple Text element for rendering the bytes given
 * in a localized format.
 */
declare const ByteSizeText: React.FC<ByteSizeTextProps>;
export default ByteSizeText;
