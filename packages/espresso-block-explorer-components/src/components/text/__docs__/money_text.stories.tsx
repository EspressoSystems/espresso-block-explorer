import { OverrideLocale } from '@/contexts/locale_provider';
import { ProvideDerivedNumberFormatters } from '@/contexts/number_formatters_provider';
import { bigintCodec } from '@/convert/codec/bigint';
import { currencyCodeCodec } from '@/models/block_explorer/currency_code';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import MoneyText from '../money_text';

interface ExampleProps {
  currency: string;
  amount: string;
  locale: string;
}
const Example: React.FC<ExampleProps> = (props) => (
  <OverrideLocale locale={props.locale}>
    <ProvideDerivedNumberFormatters>
      <MoneyText
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

export const Money: Story = {
  args: {
    locale: 'en-US',
    currency: 'ETH',
    amount: '1000000000000000000',
  },
};

export const USD: Story = {
  args: {
    locale: 'en-US',
    currency: 'USD',
    amount: '100',
  },
};

export const ETH: Story = {
  args: {
    locale: 'en-US',
    currency: 'ETH',
    amount: '1000000000000000000',
  },
};

export const XBT: Story = {
  args: {
    locale: 'en-US',
    currency: 'XBT',
    amount: '100000000',
  },
};

export const BTC: Story = {
  args: {
    locale: 'en-US',
    currency: 'BTC',
    amount: '100000000',
  },
};

export const ESP: Story = {
  args: {
    locale: 'en-US',
    currency: 'ESP',
    amount: '1000000000000000000',
  },
};

export const EUR: Story = {
  args: {
    locale: 'en-US',
    currency: 'EUR',
    amount: '100',
  },
};

export const JPY: Story = {
  args: {
    locale: 'en-US',
    currency: 'JPY',
    amount: '1',
  },
};

export const GBP: Story = {
  args: {
    locale: 'en-US',
    currency: 'GBP',
    amount: '100',
  },
};
