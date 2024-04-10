import { describe, expect, it } from 'vitest';
import {
  BTC,
  ESP,
  ETH,
  EUR,
  GBP,
  JPY,
  USD,
  XXX,
  currencyCodeCodec,
} from '../currency_code';

describe('CurrencyCode', () => {
  describe('codec', () => {
    it('should encode and decode correctly', () => {
      const cases = [
        ['JPY', JPY, true],
        ['GBP', GBP, true],
        ['USD', USD, true],
        ['EUR', EUR, true],
        ['ETH', ETH, true],
        ['BTC', BTC, false],
        ['XBT', BTC, true],
        ['XXX', XXX, true],
        ['ESP', ESP, true],
      ] as const;

      const l = cases.length;
      for (let i = 0; i < l; i++) {
        const [input, expected, shouldPass] = cases[i];
        const codec = currencyCodeCodec;
        expect(codec.decode(input)).toEqual(expected);
        if (shouldPass) {
          expect(codec.encode(expected)).toEqual(input);
        }
      }
    });
  });
});
