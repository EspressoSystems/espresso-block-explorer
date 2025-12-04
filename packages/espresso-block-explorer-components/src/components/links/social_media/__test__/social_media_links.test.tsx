import { composeStories } from '@storybook/react-vite';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/SocialMediaLinks.stories';

const { Links } = composeStories(stories);

describe('DataTable Component', async () => {
  it('should have a link specified', async () => {
    render(<Links data-testid="1" />);

    const links = screen.getByTestId('1');
    expect(links).toBeInTheDocument();
  });
});
