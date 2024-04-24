import Text from '@/text/Text';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Link from '../Link';

describe('Link Component', () => {
  it('should be in the document', () => {
    render(
      <Link data-testid="1" href="https://example.com/">
        <Text text="Click Me!" />
      </Link>,
    );

    const link = screen.getByTestId('1');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('link');
    expect(link).toHaveAttribute('href', 'https://example.com/');
    expect(link).toHaveTextContent('Click Me!');
  });
});
