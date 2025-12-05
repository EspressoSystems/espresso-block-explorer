import { ProvideDerivedDateTimeFormatters } from '@/contexts/date_time_formatters_provider';
import { OverrideLocale } from '@/contexts/locale_provider';
import { ProvideTickEverySecond } from '@/contexts/now_provider';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import RelativeTimeSinceDateText from '../relative_time_since_date_text';

interface ExampleProps {
  locale: string;
  date: string;
}
const Example: React.FC<ExampleProps> = ({ locale, date }) => (
  <ProvideTickEverySecond>
    <OverrideLocale locale={locale}>
      <ProvideDerivedDateTimeFormatters>
        <RelativeTimeSinceDateText date={new Date(date)} />
      </ProvideDerivedDateTimeFormatters>
    </OverrideLocale>
  </ProvideTickEverySecond>
);

const Locales = {
  'en-US': 'en-US',
  'fr-FR': 'fr-FR',
  'de-DE': 'de-DE',
  hi: 'hi',
};

const meta: Meta<typeof Example> = {
  title: 'Components/Text/Relative Time',
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

export const RelativeTime: Story = {
  args: {
    date: new Date().toISOString(),
    locale: 'en-US',
  },
};
