import { composeStories } from '@storybook/react-vite';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/Headings.stories';

const { Headings } = composeStories(stories);

describe('Heading Components', () => {
  it('should have the classes, tag, and text expected', async () => {
    const { rerender } = render(
      <Headings data-testid="1" heading="h1" text="Heading" />,
    );

    {
      const heading = screen.getByTestId('1');
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Heading');
      expect(heading.tagName).equals('H1');
      expect(heading).toHaveClass('type--ui--text-100');
    }

    rerender(<Headings data-testid="1" heading="h2" text="Sub Heading" />);
    {
      const heading = screen.getByTestId('1');
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Sub Heading');
      expect(heading.tagName).equals('H2');
      expect(heading).toHaveClass('type--ui--text-300');
    }
  });
});
