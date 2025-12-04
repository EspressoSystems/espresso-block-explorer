import Text from '@/text/Text';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import {
  EgressLink,
  InternalLink,
  InternalLinkAnchorComponentContext,
} from '../Link';

describe('EgressLink Component', () => {
  it('should be in the document', () => {
    render(
      <EgressLink data-testid="1" href="https://example.com/">
        <Text text="Click Me!" />
      </EgressLink>,
    );

    const link = screen.getByTestId('1');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('link');
    expect(link).toHaveAttribute('href', 'https://example.com/');
    expect(link).toHaveTextContent('Click Me!');
  });
});

describe('InternalLink Component', () => {
  describe('Default anchor component', () => {
    it('should be in the document', () => {
      render(
        <InternalLink data-testid="1" href="https://example.com/">
          <Text text="Click Me!" />
        </InternalLink>,
      );

      const link = screen.getByTestId('1');
      expect(link).toBeInTheDocument();
      expect(link).toHaveClass('link');
      expect(link).toHaveAttribute('href', 'https://example.com/');
      expect(link).toHaveTextContent('Click Me!');
    });
  });

  describe('Replace component used', () => {
    it('should be in the document', () => {
      const CustomAnchor: React.FC<
        React.AnchorHTMLAttributes<HTMLAnchorElement>
      > = (props) => {
        return <a {...props} data-custom={1} />;
      };

      render(
        <InternalLinkAnchorComponentContext.Provider value={CustomAnchor}>
          <InternalLink data-testid="1" href="https://example.com/">
            <Text text="Click Me!" />
          </InternalLink>
          ,
        </InternalLinkAnchorComponentContext.Provider>,
      );

      const link = screen.getByTestId('1');
      expect(link).toBeInTheDocument();
      expect(link).toHaveClass('link');
      expect(link).toHaveAttribute('href', 'https://example.com/');
      expect(link).toHaveAttribute('data-custom', '1');
      expect(link).toHaveTextContent('Click Me!');
    });
  });
});
