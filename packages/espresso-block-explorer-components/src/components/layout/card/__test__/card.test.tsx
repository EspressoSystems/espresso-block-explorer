import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Card from '../card';

describe('Card Component', () => {
  it('should contain the name', () => {
    render(<Card data-testid="1"></Card>);

    const card = screen.getByTestId('1');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('card');
  });
});
