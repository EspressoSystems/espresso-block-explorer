import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import ByteSizeText from '../byte_size_text';

describe('Byte Size Text Component', () => {
  it('should format the value passed as a localized string', () => {
    render(
      <div data-testid="1">
        <ByteSizeText bytes={123456789} />
      </div>,
    );

    {
      const div = screen.getByTestId('1');
      expect(div).toBeInTheDocument();
      expect(div).toHaveTextContent('123,456,789 byte');
    }
  });
});
