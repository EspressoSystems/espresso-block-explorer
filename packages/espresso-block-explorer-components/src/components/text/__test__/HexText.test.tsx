import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import HexText from '../HexText';

describe('Hex Text Component', () => {
  it('should format the value as a hex string, with truncation if it is too long', () => {
    const { rerender } = render(
      <div data-testid="1">
        <HexText
          value={
            new Uint8Array([
              0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef, 0xfe, 0xdc, 0xba,
              0x98, 0x76, 0x54, 0x32, 0x10,
            ]).buffer
          }
        />
      </div>,
    );

    {
      const div = screen.getByTestId('1');
      expect(div).toBeInTheDocument();
      expect(div).toHaveTextContent('0x012345...543210');
    }

    rerender(
      <div data-testid="1">
        <HexText
          value={new Uint8Array([0x01, 0x23, 0x45, 0x67, 0x89]).buffer}
        />
      </div>,
    );

    {
      const div = screen.getByTestId('1');
      expect(div).toBeInTheDocument();
      expect(div).toHaveTextContent('0x0123456789');
    }
  });
});
