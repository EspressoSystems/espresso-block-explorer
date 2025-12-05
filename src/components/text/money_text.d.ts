import { default as MonetaryValue } from '../../../../../../../../../../src/models/block_explorer/monetary_value';
import { default as React } from 'react';
export interface MoneyTextProps {
    money: MonetaryValue;
}
/**
 * MoneyText is a component that will render a MonetaryValue in a localized
 * manner for the given currency type.  It supports non-standard ISO 4217
 * currency codes such as ETH and ESP.
 *
 * It achieves this by having specific implementations for the necessary
 * currency types.
 */
declare const MoneyText: React.FC<MoneyTextProps>;
export default MoneyText;
