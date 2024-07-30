import { default as React } from '../../../../../node_modules/react';

export interface ByteSizeTextProps {
    bytes: number;
}
/**
 * ByteSizeText is a simple Text element for rendering the bytes given
 * in a localized format.
 *
 * It achieves this by using the `bytes` formatter from the
 * `CurrencyNumberFormatters` context.
 */
declare const ByteSizeText: React.FC<ByteSizeTextProps>;
export default ByteSizeText;
