import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import NumberText from '../NumberText';
import { OverrideLocale } from '../../contexts/LocaleProvider';
import { ProvideDerivedNumberFormatters } from '../../contexts/NumberFormattersProvider';

interface ExampleProps {
  locale: string;
  number: number;
}
const Example: React.FC<ExampleProps> = (props) => (
  <OverrideLocale locale={props.locale}>
    <ProvideDerivedNumberFormatters>
      <NumberText number={props.number} />
    </ProvideDerivedNumberFormatters>
  </OverrideLocale>
);

const Locales = {
  'en-US': 'en-US',
  'en-FR': 'en-FR',
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
