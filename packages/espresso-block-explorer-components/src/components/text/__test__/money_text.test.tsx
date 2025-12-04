import {
  BTC,
  ESP,
  ETH,
  EUR,
  GBP,
  JPY,
  USD,
} from '@/models/block_explorer/currency_code';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import MoneyText from '../MoneyText';

describe('Money Text Component', () => {
  it('should format with the correct string', () => {
    const cases = new Map([
      [new MonetaryValue(ESP, BigInt(1e18 * 1e6)), 'ESP 1,000,000'],
      [new MonetaryValue(ETH, BigInt(1e18 * 1e6)), 'ETH 1,000,000'],
      [new MonetaryValue(BTC, BigInt(1e8 * 1e6)), 'BTC 1,000,000'],
      [new MonetaryValue(USD, BigInt(100 * 1e6)), '$1'],
      [new MonetaryValue(GBP, BigInt(100 * 1e6)), '£1'],
      [new MonetaryValue(EUR, BigInt(100 * 1e6)), '€1'],
      [new MonetaryValue(JPY, BigInt(100 * 1e6)), '¥1'],
    ]);

    const { rerender } = render(<div data-testid={1}></div>);

    for (const [money, want] of cases) {
      rerender(
        <div data-testid={1}>
          <MoneyText money={money} />
        </div>,
      );

      const text = screen.getByTestId(1);
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent(want);
    }
  });
});
