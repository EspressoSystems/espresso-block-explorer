import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import AnchorButton from '../AnchorButton';
import Text from '../../../../text/Text';

describe('Anchor Button Component', () => {
  it('should have a link specified', () => {
    render(
      <AnchorButton href="https://example.com/">
        <Text text="Click Me" />
      </AnchorButton>,
    );

    const anchor = screen.getByRole('link');
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveTextContent('Click Me');
    expect(anchor).toHaveAttribute('href', 'https://example.com/');

    fireEvent.click(anchor);
  });

  it('should prevent href from being populated when disabled', () => {
    render(
      <AnchorButton data-testid="1" disabled href="https://example.com/">
        <Text text="Click Me" />
      </AnchorButton>,
    );

    const anchor = screen.getByTestId('1');
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveTextContent('Click Me');
    expect(anchor).not.toHaveAttribute('href', 'https://example.com/');
  });
});
