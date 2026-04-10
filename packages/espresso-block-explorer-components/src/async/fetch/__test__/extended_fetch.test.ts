// Tests for createExtendedFetch — a factory that wraps a fetch function and
// converts non-ok responses and network failures into typed errors rather than
// returning them as raw Response objects.
//
// The factory accepts an optional fetchFn parameter, so tests pass a vi.fn()
// directly and never touch the global fetch or require any stubbing.

import { BadResponseClientError } from '@/errors/bad_response_client_error';
import { BadResponseError } from '@/errors/bad_response_error';
import { BadResponseServerError } from '@/errors/bad_response_server_error';
import { FetchError } from '@/errors/fetch_error';
import { describe, expect, it, vi } from 'vitest';
import { createExtendedFetch } from '../extended_fetch';

function makeResponse(status: number): Response {
  return new Response(null, { status });
}

describe('createExtendedFetch', () => {
  it('returns the response unchanged for a 2xx status', async () => {
    const mockFetch = vi
      .fn<typeof fetch>()
      .mockResolvedValue(makeResponse(200));
    const fetch = createExtendedFetch(mockFetch);

    const response = await fetch('https://example.com/api');

    expect(response.status).toBe(200);
  });

  it('throws BadResponseServerError for a 5xx status', async () => {
    const mockFetch = vi
      .fn<typeof fetch>()
      .mockResolvedValue(makeResponse(500));
    const fetch = createExtendedFetch(mockFetch);

    await expect(fetch('https://example.com/api')).rejects.toBeInstanceOf(
      BadResponseServerError,
    );
  });

  it('throws BadResponseServerError for any status in the 500–599 range', async () => {
    for (const status of [500, 503, 599]) {
      const mockFetch = vi
        .fn<typeof fetch>()
        .mockResolvedValue(makeResponse(status));
      const fetch = createExtendedFetch(mockFetch);

      await expect(fetch('https://example.com/api')).rejects.toBeInstanceOf(
        BadResponseServerError,
      );
    }
  });

  it('throws BadResponseClientError for a 4xx status', async () => {
    const mockFetch = vi
      .fn<typeof fetch>()
      .mockResolvedValue(makeResponse(400));
    const fetch = createExtendedFetch(mockFetch);

    await expect(fetch('https://example.com/api')).rejects.toBeInstanceOf(
      BadResponseClientError,
    );
  });

  it('throws BadResponseClientError for any status in the 400–499 range', async () => {
    for (const status of [400, 401, 403, 404, 422, 499]) {
      const mockFetch = vi
        .fn<typeof fetch>()
        .mockResolvedValue(makeResponse(status));
      const fetch = createExtendedFetch(mockFetch);

      await expect(fetch('https://example.com/api')).rejects.toBeInstanceOf(
        BadResponseClientError,
      );
    }
  });

  it('throws BadResponseError for a non-ok status outside 4xx and 5xx', async () => {
    // 3xx responses are not ok and do not fall into the 4xx or 5xx bands.
    const mockFetch = vi
      .fn<typeof fetch>()
      .mockResolvedValue(makeResponse(301));
    const fetch = createExtendedFetch(mockFetch);

    await expect(fetch('https://example.com/api')).rejects.toBeInstanceOf(
      BadResponseError,
    );
  });

  it('wraps a network-level exception in a FetchError', async () => {
    // Simulate a network failure (e.g. DNS error, connection refused) that
    // prevents fetch from returning a Response at all.
    const mockFetch = vi
      .fn<typeof fetch>()
      .mockRejectedValue(new TypeError('Failed to fetch'));
    const fetch = createExtendedFetch(mockFetch);

    await expect(fetch('https://example.com/api')).rejects.toBeInstanceOf(
      FetchError,
    );
  });

  it('re-throws typed errors (BaseError subclasses) without wrapping them', async () => {
    // If fetchFn itself throws a typed error (e.g. in a composed fetch
    // pipeline), createExtendedFetch should not double-wrap it.
    const original = new BadResponseServerError(500, null);
    const mockFetch = vi.fn<typeof fetch>().mockRejectedValue(original);
    const fetch = createExtendedFetch(mockFetch);

    const caught = await fetch('https://example.com/api').catch((e) => e);
    expect(caught).toBe(original);
  });

  it('forwards the input and init arguments to the underlying fetchFn', async () => {
    const mockFetch = vi
      .fn<typeof fetch>()
      .mockResolvedValue(makeResponse(200));
    const fetch = createExtendedFetch(mockFetch);
    const init: RequestInit = { method: 'POST', body: 'hello' };

    await fetch('https://example.com/api', init);

    expect(mockFetch).toHaveBeenCalledWith('https://example.com/api', init);
  });
});
