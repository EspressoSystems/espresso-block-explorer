import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/DateTimeText.stories';

const { DateTime } = composeStories(stories);

describe('Date Time Text Component', () => {
  it('should format format', () => {
    const date = '2024-01-02T17:10:12.123Z';
    render(
      <div data-testid="1">
        <DateTime date={date} locale="en-US" />
      </div>,
    );

    {
      const text = screen.getByTestId('1');
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent('1/2/2024, 5:10:12 PM UTC');
    }
  });
});
