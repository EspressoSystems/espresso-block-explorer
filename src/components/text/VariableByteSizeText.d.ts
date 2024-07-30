import { default as React } from '../../../../../node_modules/react';

export interface VariableByteSizeTextProps {
    bytes: number;
}
/**
 * VariableByteSizeText is a simple Text element for rendering the bytes given
 * in a localized format that can support variable notation for the bytes.
 *
 * It achieves this by using the `variableBytes` formatter from the
 * `CurrencyNumberFormatters` context.
 */
declare const VariableByteSizeText: React.FC<VariableByteSizeTextProps>;
export default VariableByteSizeText;
