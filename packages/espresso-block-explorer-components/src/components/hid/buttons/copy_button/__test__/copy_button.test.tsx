import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import CopyButton from '../copy_button';

describe('Copy Button Component', () => {
  it('should not copy when window is undefined', async () => {
    render(<CopyButton content="Hello, World!" />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    await act(() => fireEvent.click(button));
  });

  it('should be clickable successfully', async () => {
    const user = userEvent.setup();
    render(<CopyButton content="Hello, World!" />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    await act(() => user.click(button));
    const clipboardText = await navigator.clipboard.readText();
    expect(clipboardText).toBe('Hello, World!');

    const button1 = screen.getByRole('button');
    expect(button1).toBeInTheDocument();
    expect(button1).toHaveClass('copied');
  });
});
