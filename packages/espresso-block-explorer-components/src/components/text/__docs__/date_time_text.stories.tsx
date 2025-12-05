import { OverrideLocale } from '@/contexts/locale_provider';
import { ProvideDerivedNumberFormatters } from '@/contexts/number_formatters_provider';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import DateTimeText from '../date_time_text';

interface ExampleProps {
  locale: string;
  date: string;
}
const Example: React.FC<ExampleProps> = ({ locale, date }) => (
  <OverrideLocale locale={locale}>
    <ProvideDerivedNumberFormatters>
      <DateTimeText date={new Date(date)} />
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
  title: 'Components/Text/Date Time',
  component: Example,
  argTypes: {
    locale: {
      options: Object.values(Locales),
      mapping: Locales,
      control: {
        type: 'select',
        labels: Object.keys(Locales),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const DateTime: Story = {
  args: {
    date: new Date().toISOString(),
    locale: 'en-US',
  },
};
