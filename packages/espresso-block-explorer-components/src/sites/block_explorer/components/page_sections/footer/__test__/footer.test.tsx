import { composeStories } from '@storybook/react-vite';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/footer.stories';

const { Footer } = composeStories(stories);

describe('Footer component', () => {
  it('links to the Espresso Foundation and Espresso Systems', () => {
    render(<Footer />);
    expect(
      screen.getAllByRole('link').map((a) => a.getAttribute('href')),
    ).toEqual([
      'https://www.espresso.foundation/',
      'https://www.espressosys.com/',
    ]);
  });
});
