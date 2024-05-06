import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/IconAnchorButton.stories';

const { IconAnchorButton } = composeStories(stories);

describe('Icon Button component', () => {
  it('should render the Icon Button normally', async () => {
    render(<IconAnchorButton data-testid="1" href="https://example.com/" />);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com/');

    await act(() => userEvent.click(link));
  });

  it('should render Icon Button disabled', async () => {
    render(
      <IconAnchorButton data-testid="1" disabled href="https://example.com/" />,
    );
    const link = screen.getByTestId('1');
    expect(link).toBeInTheDocument();
    expect(link).not.toHaveAttribute('href');

    await act(() => userEvent.click(link));
  });
});
