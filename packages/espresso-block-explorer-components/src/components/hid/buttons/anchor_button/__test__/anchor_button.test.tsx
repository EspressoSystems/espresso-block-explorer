import Text from '@/text/text';
import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AnchorButton from '../anchor_button';

describe('Anchor Button Component', () => {
  it('should have a link specified', async () => {
    render(
      <AnchorButton href="https://example.com/">
        <Text text="Click Me" />
      </AnchorButton>,
    );

    const anchor = screen.getByRole('link');
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveTextContent('Click Me');
    expect(anchor).toHaveAttribute('href', 'https://example.com/');

    await act(() => fireEvent.click(anchor));
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
