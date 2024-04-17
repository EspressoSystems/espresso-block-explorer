import { describe, expect, it } from 'vitest';
import { USD } from '../currency_code';
import MonetaryValue, { monetaryValueCodec } from '../monetary_value';

describe('Monetary Value', () => {
  describe('codec', () => {
    it('should encode and decode correctly', () => {
      {
        const cases = [
          'USD 100.00',
          'USD 100,00',
          'USD 100 00',
          'USD 100',
          '100.00 USD',
          '100,00 USD',
          '100 00 USD',
          '100 USD',
        ];

        const l = cases.length;
        for (let i = 0; i < l; i++) {
          const c = cases[i];
          const decoded = monetaryValueCodec.decode(c);
          expect(decoded.value).toEqual(BigInt(10000));
          expect(decoded.currency).toEqual(USD);
        }
      }

      {
        const cases = [
          'USD 100000',
          'USD 100,000.00',
          'USD 100.000,00',
          'USD 100 000,00',
          'USD 1,00,000.00',
        ];

        const l = cases.length;
        for (let i = 0; i < l; i++) {
          const c = cases[i];
          const decoded = monetaryValueCodec.decode(c);
          expect(decoded.value).toEqual(BigInt(10000000));
          expect(decoded.currency).toEqual(USD);
        }
      }

      {
        const cases = [
          [MonetaryValue.USD(0n), 'USD 0'],
          [MonetaryValue.USD(-100n), 'USD -1'],
          [MonetaryValue.USD(123n), 'USD 1.23'],
          [MonetaryValue.USD(50n), 'USD 0.50'],
          [MonetaryValue.ETH(1000000000n), 'ETH 0.000000001000000000'],
          [MonetaryValue.ETH(1n), 'ETH 0.000000000000000001'],
          [MonetaryValue.ETH(1000000000000000000n), 'ETH 1'],
          [MonetaryValue.BTC(1n), 'XBT 0.00000001'],
          [MonetaryValue.JPY(1n), 'JPY 1'],
        ] as const;

        const l = cases.length;
        for (let i = 0; i < l; i++) {
          const c = cases[i];
          const [value, expected] = c;
          const encoded = monetaryValueCodec.encode(value);
          expect(encoded).toEqual(value.toString());
          expect(encoded).toEqual(value.toJSON());
          expect(encoded).toEqual(expected);
        }
      }

      {
        const cases = [
          ['USD 0.00', MonetaryValue.USD(0n)],
          ['USD -1.00', MonetaryValue.USD(-100n)],
          ['USD -1', MonetaryValue.USD(-100n)],
          ['USD 1.23', MonetaryValue.USD(123n)],
          ['USD 0.50', MonetaryValue.USD(50n)],
          ['ETH 0.000000001000000000', MonetaryValue.ETH(1000000000n)],
          ['ETH 0.000000000000000001', MonetaryValue.ETH(1n)],
          ['ETH 1.000000000000000000', MonetaryValue.ETH(1000000000000000000n)],
          ['XBT 0.00000001', MonetaryValue.BTC(1n)],
        ] as const;

        const l = cases.length;
        for (let i = 0; i < l; i++) {
          const c = cases[i];
          const decoded = monetaryValueCodec.decode(c[0]);
          expect(decoded.value).toEqual(c[1].value);
          expect(decoded.currency).toEqual(c[1].currency);
        }
      }
    });

    it('should throw when an unsupported currency code is given', () => {
      expect(() => monetaryValueCodec.decode('USD 1.00')).throws();
    });

    it('should throw when not given a string', () => {
      expect(() => monetaryValueCodec.decode(1)).throws();
    });
  });
});
