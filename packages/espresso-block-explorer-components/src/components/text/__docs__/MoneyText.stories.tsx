import { OverrideLocale } from '@/contexts/LocaleProvider';
import { ProvideDerivedNumberFormatters } from '@/contexts/NumberFormattersProvider';
import { currencyCodeCodec } from '@/models/block_explorer/currency_code';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import MoneyText from '../MoneyText';

interface ExampleProps {
  currency: string;
  amount: number;
  locale: string;
}
const Example: React.FC<ExampleProps> = (props) => (
  <OverrideLocale locale={props.locale}>
    <ProvideDerivedNumberFormatters>
      <MoneyText
        money={
          new MonetaryValue(
            currencyCodeCodec.decode(props.currency),
            BigInt(props.amount),
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
  'zh-CN': 'zh-CNx',
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
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Money: Story = {
  args: {
    locale: 'en-US',
    currency: 'ETH',
    amount: 1000000000000000000,
  },
};

export const USD: Story = {
  args: {
    locale: 'en-US',
    currency: 'USD',
    amount: 100,
  },
};

export const ETH: Story = {
  args: {
    locale: 'en-US',
    currency: 'ETH',
    amount: 1e18,
  },
};

export const XBT: Story = {
  args: {
    locale: 'en-US',
    currency: 'XBT',
    amount: 1e8,
  },
};

export const BTC: Story = {
  args: {
    locale: 'en-US',
    currency: 'BTC',
    amount: 1e8,
  },
};

export const ESP: Story = {
  args: {
    locale: 'en-US',
    currency: 'ESP',
    amount: 1e18,
  },
};

export const EUR: Story = {
  args: {
    locale: 'en-US',
    currency: 'EUR',
    amount: 100,
  },
};

export const JPY: Story = {
  args: {
    locale: 'en-US',
    currency: 'JPY',
    amount: 1,
  },
};

export const GBP: Story = {
  args: {
    locale: 'en-US',
    currency: 'GBP',
    amount: 100,
  },
};
