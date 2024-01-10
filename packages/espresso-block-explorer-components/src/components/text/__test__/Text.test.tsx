import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import Text from '../Text';

describe('Text Component', () => {
  it('Should display the text that has been passed to it', () => {
    render(
      <div data-testid="1">
        <Text text="Hello" />
      </div>
    );
    const text = screen.getByTestId('1');
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('Hello');
  });
});
