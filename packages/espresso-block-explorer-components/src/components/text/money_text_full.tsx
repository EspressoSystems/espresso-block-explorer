import { CurrentNumberFormatters } from '@/contexts/NumberFormattersProvider';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import './inline.css';

export interface MoneyTextProps {
  money: MonetaryValue;
}

function padStart(str: string, length: number, padChar: string): string {
  while (str.length < length) {
    str = padChar + str;
  }
  return str;
}

function determineValue(money: MonetaryValue): Intl.StringNumericLiteral {
  // We want the full value, and we want to be precise.
  // So let's craft a simple basic string format for precision.

  const wholeValue = money.value / money.currency.significantDigitsMultiplier;
  const fractionalValue =
    money.value % money.currency.significantDigitsMultiplier;

  return `${wholeValue}.${padStart(String(fractionalValue), money.currency.significantDigits, '0')}` as Intl.StringNumericLiteral;
}

/**
 * MoneyText is a component that will render a MonetaryValue in a localized
 * manner for the given currency type.  It supports non-standard ISO 4217
 * currency codes such as ETH and ESP.
 *
 * It achieves this by having specific implementations for the necessary
 * currency types.
 */
export const MoneyTextFull: React.FC<MoneyTextProps> = (props) => {
  const money = props.money;
  const value = determineValue(money);

  switch (money.currency.alpha3Code) {
    case 'ETH':
      return <ETHTextFull value={value} />;

    case 'ESP':
      return <ESPTextFull value={value} />;

    default:
      return <DefaultMoneyTextFull money={money} />;
  }
};

interface DefaultMoneyTextProps {
  money: MonetaryValue;
}

/**
 * DefaultMoneyText is the default implementation of the MoneyText component.
 * It is used when there is not a special case for a specific currency code.
 * By default, it will attempt to use any pre-defined currency formatter for
 * the currency stored within the `CurrentNumberFormatters` context.  If none
 * is found, it will fallback to the `DefaultFormatterMoneyText` component.
 */
const DefaultMoneyTextFull: React.FC<DefaultMoneyTextProps> = (props) => {
  const formatters = React.useContext(CurrentNumberFormatters);
  const money = props.money;
  const formatter =
    formatters[money.currency.alpha3Code as keyof typeof formatters];
  if (formatter === null) {
    return <DefaultFormatterMoneyText money={props.money} />;
  }

  const value =
    Number(money.value) / Number(money.currency.significantDigitsMultiplier);
  return formatter.format(value);
};

/**
 * DefaultFormatterMoneyText component is a component that is used when a more
 * specific case for a MonetaryValue is not found.  It will use the default
 * number formatter to format the value. The default number formatter is
 * determined by the `CurrentNumberFormatters` context.
 */
const DefaultFormatterMoneyText: React.FC<DefaultMoneyTextProps> = (props) => {
  const formatters = React.useContext(CurrentNumberFormatters);
  const money = props.money;
  const value =
    Number(money.value) / Number(money.currency.significantDigitsMultiplier);

  return formatters.default.format(value);
};

interface SpecificCodeProps {
  value: number | bigint | Intl.StringNumericLiteral;
}

/**
 * ETHText is a component that will render a value in Gwei and ETH.  It is
 * used for the ETH currency code.
 */
export const ETHTextFull: React.FC<SpecificCodeProps> = (props) => {
  const formatters = React.useContext(CurrentNumberFormatters);
  return <>{formatters.ETHFull.format(props.value)}</>;
};

/**
 * ESPText is a component that will render a value in Gwei and ESP.  It is
 * used for the ESP currency code.
 */
export const ESPTextFull: React.FC<SpecificCodeProps> = (props) => {
  const formatters = React.useContext(CurrentNumberFormatters);
  return <>{formatters.ESPFull.format(props.value)}</>;
};
