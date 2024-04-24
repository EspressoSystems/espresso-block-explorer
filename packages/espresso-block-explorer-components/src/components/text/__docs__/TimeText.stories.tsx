import { ProvideDerivedDateTimeFormatters } from '@/contexts/DateTimeFormattersProvider';
import { OverrideLocale } from '@/contexts/LocaleProvider';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TimeText from '../TimeText';

interface ExampleProps {
  locale: string;
  date: string;
}
const Example: React.FC<ExampleProps> = ({ locale, date }) => (
  <OverrideLocale locale={locale}>
    <ProvideDerivedDateTimeFormatters>
      <TimeText date={new Date(date)} />
    </ProvideDerivedDateTimeFormatters>
  </OverrideLocale>
);

const Locales = {
  'en-US': 'en-US',
  'fr-FR': 'fr-FR',
  'de-DE': 'de-DE',
  hi: 'hi',
};

const meta: Meta<typeof Example> = {
  title: 'Components/Text/Time',
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

export const Time: Story = {
  args: {
    date: new Date().toISOString(),
    locale: 'en-US',
  },
};
