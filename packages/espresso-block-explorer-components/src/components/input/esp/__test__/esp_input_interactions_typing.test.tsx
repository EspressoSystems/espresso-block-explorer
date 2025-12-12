import { composeStories } from '@storybook/react-vite';
import '@testing-library/jest-dom';
import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it } from 'vitest';
import * as stories from '../__docs__/esp_input_interactions_typing.stories';

const {
  EnglishUS,
  EnglishGreatBritain,
  EnglishCanada,
  EnglishAustralia,
  SpanishSpain,
  SpanishMexico,
  SpanishArgentina,
  GermanGermany,
  GermanAustria,
  GermanSwitzerland,
  JapaneseJapan,
  FrenchFrance,
  FrenchCanada,
  PortugueseBrazil,
  RussianRussia,
  ItalianItaly,
  DutchNetherlands,
  SwedishSweden,
  ChineseChina,
  KoreanSouthKorea,
} = composeStories(stories);

describe('ESP Input:: Typing', async () => {
  const ComponentMap = {
    'English US': EnglishUS,
    'English GB': EnglishGreatBritain,
    'English CA': EnglishCanada,
    'English AU': EnglishAustralia,
    'Spanish ES': SpanishSpain,
    'Spanish MX': SpanishMexico,
    'Spanish AR': SpanishArgentina,
    'German DE': GermanGermany,
    'German AS': GermanAustria,
    'German CH': GermanSwitzerland,
    'Japanese JP': JapaneseJapan,
    'French FR': FrenchFrance,
    'French CA': FrenchCanada,
    'Portuguese BR': PortugueseBrazil,
    'Russian RS': RussianRussia,
    'Italian IT': ItalianItaly,
    'Dutch NL': DutchNetherlands,
    'Swedish SE': SwedishSweden,
    'Chinese CN': ChineseChina,
    'Korean KO': KoreanSouthKorea,
  };

  for (const [name, Component] of Object.entries(ComponentMap)) {
    it(`should work with ${name}`, async () => {
      const rendered = await act(async () => render(<Component />));
      await act(
        async () =>
          await Component.play!({
            canvasElement: rendered.container,
            userEvent: userEvent.setup(),
          }),
      );
    });
  }
});
