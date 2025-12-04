import { OverrideLocale } from '@/contexts/locale_provider';
import { ProvideDerivedNumberFormatters } from '@/contexts/number_formatters_provider';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import ByteSizeText from '../byte_size_text';

interface ExampleProps {
  locale: string;
  bytes: number;
}
const Example: React.FC<ExampleProps> = (props) => (
  <OverrideLocale locale={props.locale}>
    <ProvideDerivedNumberFormatters>
      <ByteSizeText bytes={props.bytes} />
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
  title: 'Components/Text/Bytes',
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

export const SmallBytes: Story = {
  args: {
    bytes: 200,
    locale: 'en-US',
  },
};

export const NormalBytes: Story = {
  args: {
    bytes: 2048,
    locale: 'en-US',
  },
};

export const LargeBytes: Story = {
  args: {
    bytes: 4096 * 1024,
    locale: 'en-US',
  },
};
