import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ErrorPage, NotFoundPage } from '../message_page';

describe('NotFoundPage', () => {
  it('says the page was not found and links to the main pages', () => {
    render(<NotFoundPage />);
    expect(
      screen.getByRole('heading', { name: 'Page not found' }),
    ).toBeTruthy();
    expect(
      screen.getAllByRole('link').map((a) => a.getAttribute('href')),
    ).toEqual(expect.arrayContaining(['/', '/blocks', '/transactions']));
  });
});

describe('ErrorPage', () => {
  it('retries when "Try again" is pressed', () => {
    const onRetry = vi.fn();
    render(<ErrorPage onRetry={onRetry} />);
    fireEvent.click(screen.getByRole('button', { name: 'Try again' }));
    expect(onRetry).toHaveBeenCalledOnce();
  });
});
