// Tests for the auto-retry fetch utilities.
//
// This module contains two groups of concerns:
//
//   1. Error-classification helpers — `isNotFoundError`, `isGoneError`,
//      `isFetchError`, and `isARetryableError`.  These are pure predicates
//      that inspect an unknown thrown value and return a boolean.  They also
//      handle the WebWorkerErrorResponse wrapper transparently.
//
//   2. `createAutoRetryFetch` — wraps an arbitrary fetch function with
//      configurable retry logic.  All tests use a vi.fn() mock for the
//      underlying fetch so no real network requests are made.

import BadResponseClientError from '@/errors/bad_response_client_error';
import FetchError from '@/errors/fetch_error';
import WebWorkerErrorResponse from '@/errors/web_worker_error_response';
import { describe, expect, it, vi } from 'vitest';
import {
  createAutoRetryFetch,
  isARetryableError,
  isFetchError,
  isGoneError,
  isNotFoundError,
} from '../auto_retry_fetch';

function makeClientError(status: number): BadResponseClientError {
  return new BadResponseClientError(status, null);
}

function makeOkResponse(): Response {
  return new Response(null, { status: 200 });
}

describe('isNotFoundError', () => {
  it('returns true for a BadResponseClientError with status 404', () => {
    expect(isNotFoundError(makeClientError(404))).toBe(true);
  });

  it('returns false for a BadResponseClientError with a non-404 status', () => {
    expect(isNotFoundError(makeClientError(400))).toBe(false);
    expect(isNotFoundError(makeClientError(410))).toBe(false);
    expect(isNotFoundError(makeClientError(500))).toBe(false);
  });

  it('returns false for unrelated error types', () => {
    expect(isNotFoundError(new Error('generic'))).toBe(false);
    expect(isNotFoundError(new FetchError(new Error()))).toBe(false);
    expect(isNotFoundError(null)).toBe(false);
  });

  it('unwraps a WebWorkerErrorResponse and checks the inner error', () => {
    const inner404 = makeClientError(404);
    const wrapped = new WebWorkerErrorResponse(inner404);
    expect(isNotFoundError(wrapped)).toBe(true);

    const inner400 = makeClientError(400);
    expect(isNotFoundError(new WebWorkerErrorResponse(inner400))).toBe(false);
  });
});

describe('isGoneError', () => {
  it('returns true for a BadResponseClientError with status 410', () => {
    expect(isGoneError(makeClientError(410))).toBe(true);
  });

  it('returns false for a BadResponseClientError with a non-410 status', () => {
    expect(isGoneError(makeClientError(404))).toBe(false);
    expect(isGoneError(makeClientError(400))).toBe(false);
    expect(isGoneError(makeClientError(500))).toBe(false);
  });

  it('returns false for unrelated error types', () => {
    expect(isGoneError(new Error('generic'))).toBe(false);
    expect(isGoneError(new FetchError(new Error()))).toBe(false);
    expect(isGoneError(null)).toBe(false);
  });

  it('unwraps a WebWorkerErrorResponse and checks the inner error', () => {
    const inner410 = makeClientError(410);
    expect(isGoneError(new WebWorkerErrorResponse(inner410))).toBe(true);

    const inner404 = makeClientError(404);
    expect(isGoneError(new WebWorkerErrorResponse(inner404))).toBe(false);
  });
});

describe('isFetchError', () => {
  it('returns true for a FetchError', () => {
    expect(isFetchError(new FetchError(new Error('io')))).toBe(true);
  });

  it('returns false for non-FetchError values', () => {
    expect(isFetchError(new Error('generic'))).toBe(false);
    expect(isFetchError(makeClientError(500))).toBe(false);
    expect(isFetchError(null)).toBe(false);
    expect(isFetchError(undefined)).toBe(false);
  });

  it('unwraps a WebWorkerErrorResponse and checks the inner error', () => {
    const innerFetch = new FetchError(new Error('io'));
    expect(isFetchError(new WebWorkerErrorResponse(innerFetch))).toBe(true);

    expect(
      isFetchError(new WebWorkerErrorResponse(new Error('not a fetch error'))),
    ).toBe(false);
  });
});

describe('isARetryableError', () => {
  it('returns true for a FetchError (retryable)', () => {
    expect(isARetryableError(new FetchError(new Error()))).toBe(true);
  });

  it('returns false for non-retryable error types', () => {
    // BadResponseClientError (4xx) should not be retried by default.
    expect(isARetryableError(makeClientError(404))).toBe(false);
    expect(isARetryableError(new Error('generic'))).toBe(false);
    expect(isARetryableError(null)).toBe(false);
  });
});

describe('createAutoRetryFetch', () => {
  // sleep is called between retries; mock it to avoid real delays.
  vi.mock('@/async/sleep', () => ({
    sleep: vi.fn().mockResolvedValue(undefined),
  }));

  it('returns the response when the fetch mock succeeds on the first attempt', async () => {
    const mockFetch = vi.fn().mockResolvedValue(makeOkResponse());
    const autoRetry = createAutoRetryFetch({}, mockFetch);

    const response = await autoRetry('https://example.com/api');

    expect(response.status).toBe(200);
    expect(mockFetch).toHaveBeenCalledOnce();
  });

  it('forwards the input and init arguments to the underlying fetch', async () => {
    const mockFetch = vi.fn().mockResolvedValue(makeOkResponse());
    const autoRetry = createAutoRetryFetch({}, mockFetch);
    const init: RequestInit = { method: 'POST', body: 'payload' };

    await autoRetry('https://example.com/api', init);

    expect(mockFetch).toHaveBeenCalledWith('https://example.com/api', init);
  });

  it('retries when the fetch mock throws a FetchError', async () => {
    const fetchError = new FetchError(new Error('network failure'));
    const mockFetch = vi
      .fn()
      .mockRejectedValueOnce(fetchError)
      .mockResolvedValue(makeOkResponse());

    const autoRetry = createAutoRetryFetch({ maxRetries: 3 }, mockFetch);
    const response = await autoRetry('https://example.com/api');

    expect(response.status).toBe(200);
    expect(mockFetch).toHaveBeenCalledTimes(2);
  });

  it('does not retry when the fetch mock throws a non-retryable error', async () => {
    // BadResponseClientError is not retryable by default; the call should
    // propagate immediately without a second attempt.
    const clientError = makeClientError(400);
    const mockFetch = vi.fn().mockRejectedValue(clientError);

    const autoRetry = createAutoRetryFetch({ maxRetries: 3 }, mockFetch);

    await expect(autoRetry('https://example.com/api')).rejects.toThrow(
      BadResponseClientError,
    );
    expect(mockFetch).toHaveBeenCalledOnce();
  });

  it('stops retrying after maxRetries is exhausted and re-throws the last error', async () => {
    const fetchError = new FetchError(new Error('persistent failure'));
    const mockFetch = vi.fn().mockRejectedValue(fetchError);

    // maxRetries=2 means the controller allows attempts 1 and 2, then blocks
    // on attempt 3 (>= maxRetries), so mockFetch is called 2 times total.
    const autoRetry = createAutoRetryFetch({ maxRetries: 2 }, mockFetch);

    await expect(autoRetry('https://example.com/api')).rejects.toThrow(
      FetchError,
    );
    expect(mockFetch).toHaveBeenCalledTimes(2);
  });

  it('uses a custom isRetryableFetchErrror predicate to gate retries', async () => {
    // Supply a predicate that considers every error retryable, then verify
    // that a normally non-retryable error is retried.
    const clientError = makeClientError(400);
    const mockFetch = vi
      .fn()
      .mockRejectedValueOnce(clientError)
      .mockResolvedValue(makeOkResponse());

    const autoRetry = createAutoRetryFetch(
      { maxRetries: 3, isRetryableFetchError: () => true },
      mockFetch,
    );

    const response = await autoRetry('https://example.com/api');
    expect(response.status).toBe(200);
    expect(mockFetch).toHaveBeenCalledTimes(2);
  });
});
