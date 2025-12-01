import { OverrideLocale } from '@/contexts/LocaleProvider';
import { ProvideDerivedNumberFormatters } from '@/contexts/NumberFormattersProvider';
import { bigintCodec } from '@/convert/codec/bigint';
import { currencyCodeCodec } from '@/models/block_explorer/currency_code';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { MoneyTextFull } from '../money_text_full';

interface ExampleProps {
  currency: string;
  amount: string;
  locale: string;
}
const Example: React.FC<ExampleProps> = (props) => (
  <OverrideLocale locale={props.locale}>
    <ProvideDerivedNumberFormatters>
      <MoneyTextFull
        money={
          new MonetaryValue(
            currencyCodeCodec.decode(props.currency),
            bigintCodec.decode(props.amount),
          )
        }
      />
    </ProvideDerivedNumberFormatters>
  </OverrideLocale>
);

const Locales = {
  'en-US': 'en-US',
  'fr-FR': 'fr-FR',
  'de-DE': 'de-DE',
  hi: 'hi',
  'zh-CN': 'zh-CN',
  'ar-EG': 'ar-EG',
};

const meta: Meta<typeof Example> = {
  title: 'Components/Text/Money',
  component: Example,
  argTypes: {
    locale: {
      options: Object.keys(Locales),
      mapping: Locales,
      control: {
        type: 'select',
        labels: Locales,
      },
    },
    currency: {
      options: ['USD', 'ETH', 'XBT', 'ESP', 'EUR', 'JPY', 'GBP'],
      mapping: {
        USD: 'USD',
        ETH: 'ETH',
        XBT: 'XBT',
        ESP: 'ESP',
        EUR: 'EUR',
        JPY: 'JPY',
        GBP: 'GBP',
        CNY: 'CNY',
      },
      control: {
        type: 'select',
        labels: ['USD', 'ETH', 'XBT', 'ESP', 'EUR', 'JPY', 'GBP'],
      },
    },
    amount: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const ETHFull: Story = {
  args: {
    locale: 'en-US',
    currency: 'ETH',
    amount: '1000000000000000000',
  },
};

export const XBTFull: Story = {
  args: {
    locale: 'en-US',
    currency: 'XBT',
    amount: '100000000',
  },
};

export const BTCFull: Story = {
  args: {
    locale: 'en-US',
    currency: 'BTC',
    amount: '100000000',
  },
};

export const ESPFull: Story = {
  args: {
    locale: 'en-US',
    currency: 'ESP',
    amount: '1000000000000000000',
  },
};
