import { CurrentNumberFormatters } from '@/contexts/NumberFormattersProvider';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import './inline.css';

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
const MoneyText: React.FC<MoneyTextProps> = (props) => {
  const money = props.money;
  const value =
    Number(money.value) / Number(money.currency.significantDigitsMultiplier);

  switch (money.currency.alpha3Code) {
    case 'ETH':
      return <ETHText value={value} />;

    case 'ESP':
      return <ESPText value={value} />;

    default:
      return <DefaultMoneyText money={money} />;
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
const DefaultMoneyText: React.FC<DefaultMoneyTextProps> = (props) => {
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
  value: number | bigint;
}

/**
 * ETHText is a component that will render a value in Gwei and ETH.  It is
 * used for the ETH currency code.
 */
const ETHText: React.FC<SpecificCodeProps> = (props) => {
  const formatters = React.useContext(CurrentNumberFormatters);
  return <>{formatters.ETH.format(props.value)}</>;
};

/**
 * ESPText is a component that will render a value in Gwei and ESP.  It is
 * used for the ESP currency code.
 */
const ESPText: React.FC<SpecificCodeProps> = (props) => {
  const formatters = React.useContext(CurrentNumberFormatters);
  return <>{formatters.ESP.format(props.value)}</>;
};

/**
 * GweiText is a component that will render a value in Gwei. It is used when
 * currencies have a large amount of precision to display currency in terms
 * that do not require as much precision.
 */
const GweiText: React.FC<SpecificCodeProps> = (props) => {
  const formatters = React.useContext(CurrentNumberFormatters);
  const parts = formatters.gwei.formatToParts(props.value);
  const transformed = parts.map((part) =>
    part.type === 'currency' ? { ...part, value: 'Gwei' } : part,
  );

  return transformed.map((value) => value.value).join('');
};

export default MoneyText;
