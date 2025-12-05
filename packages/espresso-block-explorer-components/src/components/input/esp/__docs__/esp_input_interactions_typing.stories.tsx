import { CurrentLocale } from '@/components/contexts/locale_provider';
import {
  createDefaultNumberFormatters,
  ProvideDerivedNumberFormatters,
} from '@/components/contexts/number_formatters_provider';
import { MoneyTextFull } from '@/components/text/money_text_full';
import {
  getStartingSeed,
  PseudoRandomNumberGenerator,
} from '@/data_source/fake_data_source';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { InputContainer } from '../../container/container';
import { interactionsTypeValue } from '../__shared__/esp_input_shared';
import { ESPInput as ESPInputComponent } from '../esp_input';

interface ExampleProps {
  initialValue?: null | MonetaryValue;
  locale: string;
}

const Example: React.FC<ExampleProps> = (props) => {
  const { initialValue = null, locale } = props;
  const [state, setState] = React.useState(initialValue);
  return (
    <CurrentLocale.Provider value={locale}>
      <ProvideDerivedNumberFormatters>
        <InputContainer>
          <ESPInputComponent
            id="stake-amount"
            value={state}
            onChange={(_, value) => {
              setState(value);
            }}
          />
        </InputContainer>
        <br />
        <MoneyTextFull money={state ?? MonetaryValue.ESP(0n)} />
      </ProvideDerivedNumberFormatters>
    </CurrentLocale.Provider>
  );
};

const locales = [
  'en-US',
  'en-GB',
  'en-CA',
  'en-AU',
  'es-ES',
  'es-MX',
  'es-AR',
  'de-DE',
  'de-AT',
  'de-CH',
  'ja-JP',
  'fr-FR',
  'fr-CA',
  'pt-PT',
  'pt-BR',
  'ru-RU',
  'it-IT',
  'nl-NL',
  'nl-BE',
  'sv-SE',
  'sv-FI',
  'zh-CN',
  'zh-TW',
  'ko-KR',
];

const meta: Meta<typeof Example> = {
  title: 'Components/HID/Inputs/ESPInput/Interactions/Typing',
  component: Example,
  args: {
    locale: 'en-US',
  },
  argTypes: {
    locale: {
      control: { type: 'select' },
      options: locales,
    },
  },
  async play({ canvasElement, step, userEvent, args }) {
    const prng = new PseudoRandomNumberGenerator(getStartingSeed());
    const value = prng.nextRangeBigInt(
      10000000000000000n,
      123456789000000000000000000n,
    );
    const monetaryValue = MonetaryValue.ESP(value);
    const numberFormatters = createDefaultNumberFormatters(args.locale);
    const toType = numberFormatters.ESPFull.format(
      monetaryValue.toNumericLiteralString(),
    )
      .replace(/ESP/gi, '')
      .replace(/\u00A0/gi, '');
    const expectedValue = numberFormatters.ESPFull.format(
      monetaryValue.toNumericLiteralString(),
    );
    const parts = numberFormatters.ESPFull.formatToParts(
      monetaryValue.toNumericLiteralString(),
    );

    const [first] = parts;
    const discountCursorPosition = first.type === 'currency' ? 0 : 4;

    await interactionsTypeValue(
      canvasElement,
      step,
      userEvent,
      toType,
      expectedValue,
      expectedValue.length - discountCursorPosition,
    );
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const EnglishUS: Story = {
  args: {
    locale: 'en-US',
  },
};

export const EnglishGreatBritain: Story = {
  args: {
    locale: 'en-GB',
  },
};

export const EnglishCanada: Story = {
  args: {
    locale: 'en-CA',
  },
};

export const EnglishAustralia: Story = {
  args: {
    locale: 'en-AU',
  },
};

export const SpanishSpain: Story = {
  args: {
    locale: 'es-ES',
  },
};

export const SpanishMexico: Story = {
  args: {
    locale: 'es-MX',
  },
};

export const SpanishArgentina: Story = {
  args: {
    locale: 'es-AR',
  },
};

export const GermanGermany: Story = {
  args: {
    locale: 'de-DE',
  },
};

export const GermanAustria: Story = {
  args: {
    locale: 'de-AT',
  },
};

export const GermanSwitzerland: Story = {
  args: {
    locale: 'de-CH',
  },
};

export const JapaneseJapan: Story = {
  args: {
    locale: 'ja-JP',
  },
};

export const FrenchFrance: Story = {
  args: {
    locale: 'fr-FR',
  },
};

export const FrenchCanada: Story = {
  args: {
    locale: 'fr-CA',
  },
};

export const PortugueseBrazil: Story = {
  args: {
    locale: 'pt-BR',
  },
};

export const RussianRussia: Story = {
  args: {
    locale: 'ru-RU',
  },
};

export const ItalianItaly: Story = {
  args: {
    locale: 'it-IT',
  },
};

export const DutchNetherlands: Story = {
  args: {
    locale: 'nl-NL',
  },
};

export const SwedishSweden: Story = {
  args: {
    locale: 'sv-SE',
  },
};

export const ChineseChina: Story = {
  args: {
    locale: 'zh-CN',
  },
};

export const KoreanSouthKorea: Story = {
  args: {
    locale: 'ko-KR',
  },
};

// export const ArabicEgypt: Story = {
//   args: {
//     locale: 'ar-EG',
//   },
// };
