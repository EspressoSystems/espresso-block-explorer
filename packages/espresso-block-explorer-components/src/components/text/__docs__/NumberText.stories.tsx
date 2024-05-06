import { OverrideLocale } from '@/contexts/LocaleProvider';
import { ProvideDerivedNumberFormatters } from '@/contexts/NumberFormattersProvider';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import NumberText from '../NumberText';

interface ExampleProps {
  locale: string;
  number: number;
}
const Example: React.FC<ExampleProps> = ({ locale, number }) => (
  <OverrideLocale locale={locale}>
    <ProvideDerivedNumberFormatters>
      <NumberText number={number} />
    </ProvideDerivedNumberFormatters>
  </OverrideLocale>
);

const Locales = {
  'en-US': 'en-US',
  'fr-FR': 'fr-FR',
  'de-DE': 'de-DE',
  hi: 'hi',
};

const meta: Meta<typeof Example> = {
  title: 'Components/Text/Number',
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
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const SmallNumber: Story = {
  args: {
    number: 0.04824,
    locale: 'en-US',
  },
};

export const NormalNumber: Story = {
  args: {
    number: 6.25,
    locale: 'en-US',
  },
};

export const LargeNumber: Story = {
  args: {
    number: 123456789.05,
    locale: 'en-US',
  },
};
