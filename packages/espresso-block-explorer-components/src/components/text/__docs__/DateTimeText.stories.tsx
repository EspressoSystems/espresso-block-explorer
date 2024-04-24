import { OverrideLocale } from '@/contexts/LocaleProvider';
import { ProvideDerivedNumberFormatters } from '@/contexts/NumberFormattersProvider';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import DateTimeText from '../DateTimeText';

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
