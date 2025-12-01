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
export declare const MoneyTextFull: React.FC<MoneyTextProps>;
interface SpecificCodeProps {
    value: number | bigint | Intl.StringNumericLiteral;
}
/**
 * ETHText is a component that will render a value in Gwei and ETH.  It is
 * used for the ETH currency code.
 */
export declare const ETHTextFull: React.FC<SpecificCodeProps>;
/**
 * ESPText is a component that will render a value in Gwei and ESP.  It is
 * used for the ESP currency code.
 */
export declare const ESPTextFull: React.FC<SpecificCodeProps>;
export {};
