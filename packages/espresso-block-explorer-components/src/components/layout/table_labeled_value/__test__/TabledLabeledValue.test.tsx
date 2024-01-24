import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/TabledLabeledValue.stories';

const { TabledLabeledValue } = composeStories(stories);

describe('Text Component', () => {
  it('Should display the text that has been passed to it', () => {
    render(<TabledLabeledValue data-testid="1" label="hello" value="world" />);
    const text = screen.getByTestId('1');
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('helloworld');
  });
});
