import { composeStories } from '@storybook/react-vite';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/NavBar.stories';

const { NavBar } = composeStories(stories);

describe('Nav Bar Component', () => {
  it('should be in the document', () => {
    render(<NavBar data-testid="1" />);

    const navBar = screen.getByTestId('1');

    expect(navBar).toBeInTheDocument();
  });
});
