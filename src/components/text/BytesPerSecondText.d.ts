import { default as React } from 'react';
export interface BytesPerSecondTextProps {
    bytesPerSecond: number;
}
/**
 * BytesPerSecondText attempts to render the given value as a quantity
 * of bytes per second.
 *
 * It achieves this by using the `bytesPerSecond` formatter from the
 * `CurrentNumberFormatters` context.
 */
declare const BytesPerSecondText: React.FC<BytesPerSecondTextProps>;
export default BytesPerSecondText;
