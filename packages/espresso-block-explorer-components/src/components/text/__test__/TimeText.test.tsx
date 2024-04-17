import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/TimeText.stories';

const { Time } = composeStories(stories);

describe('Time Text Component', () => {
  it('should format time', () => {
    const date = '2024-01-01T17:10:12.123Z';
    render(
      <div data-testid="1">
        <Time date={date} locale="en-US" />
      </div>,
    );

    const text = screen.getByTestId('1');
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('5:10:12 PM UTC');
  });
});
