import { composeStories } from '@storybook/react-vite';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/footer.stories';

const { Footer } = composeStories(stories);

describe('Footer component', () => {
  it('should render the Icon Button normally', async () => {
    render(<Footer data-testid="1" />);
    const footer = screen.getByRole('button');
    expect(footer).toBeInTheDocument();
  });
});
