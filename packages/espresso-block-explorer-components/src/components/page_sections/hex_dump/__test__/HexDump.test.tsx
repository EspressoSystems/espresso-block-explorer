import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HexDump from '../HexDump';

describe('Hex Dump Component', () => {
  it('displays the bytes correctly', async () => {
    const { rerender } = render(
      <HexDump
        data-testid="1"
        value={new Uint8Array([0xab, 0xbc, 0xcd, 0xde])}
      />,
    );

    {
      const hexDump = screen.getByTestId('1');
      expect(hexDump).toBeInTheDocument();
      expect(hexDump.tagName).equals('DIV');
      expect(hexDump).toHaveTextContent('000000abbc cdde');
    }

    rerender(
      <HexDump
        data-testid="1"
        value={
          new Uint8Array([
            0xab, 0xbc, 0xcd, 0xde, 0xef, 0xf0, 0x01, 0x12, 0x23, 0x34, 0x45,
            0x56, 0x67, 0x78, 0x89, 0x9a, 0xab, 0xbc, 0xcd, 0xde, 0xef, 0xf0,
          ])
        }
      />,
    );

    {
      const hexDump = screen.getByTestId('1');
      expect(hexDump).toBeInTheDocument();
      expect(hexDump.tagName).equals('DIV');
      expect(hexDump).toHaveTextContent(
        '000000 000010abbc cdde eff0 0112 2334 4556 6778 899a abbc cdde eff0',
      );
    }
  });
});
