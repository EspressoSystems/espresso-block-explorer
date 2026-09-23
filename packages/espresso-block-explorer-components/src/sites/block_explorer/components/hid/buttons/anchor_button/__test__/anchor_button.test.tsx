import { default as Text } from '@/text/text';
import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { default as React } from 'react';
import { describe, expect, it } from 'vitest';
import { InternalLinkAnchorComponentContext } from '../../../../links/link/link';
import { default as AnchorButton } from '../anchor_button';

// Stands in for Next's Link, marking the anchors it renders.
const ClientLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (
  props,
) => <a {...props} data-client-link="" />;

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

  it('should navigate with the provided link component', () => {
    render(
      <InternalLinkAnchorComponentContext.Provider value={ClientLink}>
        <AnchorButton data-testid="1" href="/blocks">
          <Text text="Older" />
        </AnchorButton>
      </InternalLinkAnchorComponentContext.Provider>,
    );

    const anchor = screen.getByTestId('1');
    expect(anchor).toHaveAttribute('data-client-link');
    expect(anchor).toHaveAttribute('href', '/blocks');
    expect(anchor).toHaveClass('btn');
  });

  it('should stay a plain anchor when disabled', () => {
    render(
      <InternalLinkAnchorComponentContext.Provider value={ClientLink}>
        <AnchorButton data-testid="1" disabled href="/blocks">
          <Text text="Older" />
        </AnchorButton>
      </InternalLinkAnchorComponentContext.Provider>,
    );

    const anchor = screen.getByTestId('1');
    expect(anchor).not.toHaveAttribute('data-client-link');
    expect(anchor).not.toHaveAttribute('href');
  });
});
