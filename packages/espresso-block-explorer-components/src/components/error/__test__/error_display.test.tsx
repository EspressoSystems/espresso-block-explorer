import { ErrorContext } from '@/contexts/error_provider';
import { BadResponseClientError } from '@/errors/bad_response_client_error';
import { BadResponseServerError } from '@/errors/bad_response_server_error';
import { FetchError } from '@/errors/fetch_error';
import { WebWorkerErrorResponse } from '@/errors/web_worker_error_response';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ErrorDisplay } from '../error_display';

function renderError(error: unknown) {
  return render(
    <ErrorContext.Provider value={error}>
      <ErrorDisplay />
    </ErrorContext.Provider>,
  );
}

describe('ErrorDisplay', () => {
  it('shows nothing without an error', () => {
    const { container } = renderError(null);
    expect(container.children).toHaveLength(0);
  });

  it.each([
    [
      'a server error',
      new BadResponseServerError(503, null),
      'The Espresso query service is having trouble right now. Please try again in a moment.',
    ],
    [
      'a network failure',
      new FetchError({}),
      "Can't reach the Espresso query service. Check your connection and try again.",
    ],
    [
      'an error passed on by the web worker',
      new WebWorkerErrorResponse(new FetchError({})),
      "Can't reach the Espresso query service. Check your connection and try again.",
    ],
  ])('explains %s and offers to try again', (_, error, message) => {
    renderError(error);
    expect(screen.getByText(message)).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Try again' })).toBeTruthy();
  });

  it('says what was asked for does not exist, with nothing to retry', () => {
    renderError(new BadResponseClientError(404, null));
    expect(screen.getByText("This doesn't exist.")).toBeTruthy();
    expect(screen.queryByRole('button')).toBeNull();
  });

  it('falls back to a general message, logging the unexpected error', () => {
    const log = vi.spyOn(console, 'error').mockImplementation(() => {});
    renderError(new Error('unexpected'));
    expect(
      screen.getByText('Something went wrong while loading this data.'),
    ).toBeTruthy();
    expect(log).toHaveBeenCalled();
    log.mockRestore();
  });
});
