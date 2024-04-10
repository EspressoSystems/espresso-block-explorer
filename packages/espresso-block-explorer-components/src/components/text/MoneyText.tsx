import React from 'react';
import MonetaryValue from '../../models/block_explorer/monetary_value';
import { CurrentNumberFormatters } from '../contexts/NumberFormattersProvider';
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

const DefaultMoneyText: React.FC<DefaultMoneyTextProps> = (props) => {
  const formatters = React.useContext(CurrentNumberFormatters);
  const money = props.money;
  const value =
    Number(money.value) / Number(money.currency.significantDigitsMultiplier);

  return formatters.default.format(value);
};

interface SpecificCodeProps {
  value: number;
}

const ETHText: React.FC<SpecificCodeProps> = (props) => {
  const formatters = React.useContext(CurrentNumberFormatters);
  return (
    <>
      <GweiText value={props.value * 1e9} /> (
      {formatters.ETH.format(props.value)})
    </>
  );
};

const ESPText: React.FC<SpecificCodeProps> = (props) => {
  const formatters = React.useContext(CurrentNumberFormatters);
  return (
    <>
      <GweiText value={props.value * 1e9} /> (
      {formatters.ESP.format(props.value)})
    </>
  );
};

const GweiText: React.FC<SpecificCodeProps> = (props) => {
  const formatters = React.useContext(CurrentNumberFormatters);
  const parts = formatters.gwei.formatToParts(props.value);
  const transformed = parts.map((part) =>
    part.type === 'currency' ? { ...part, value: 'Gwei' } : part,
  );

  return transformed.map((value) => value.value).join('');
};

export default MoneyText;
