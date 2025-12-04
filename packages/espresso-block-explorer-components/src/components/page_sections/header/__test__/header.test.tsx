import { composeStories } from '@storybook/react-vite';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/Header.stories';

const { Header } = composeStories(stories);

describe('Nav Bar Component', () => {
  it('should be in the document', () => {
    render(<Header data-testid="1" />);

    const header = screen.getByTestId('1');
    expect(header).toBeInTheDocument();
  });
});
