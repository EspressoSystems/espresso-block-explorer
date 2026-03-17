// Tests for extendedFetch — a wrapper around the native fetch that converts
// non-ok responses and network failures into typed errors rather than returning
// them as raw Response objects.
//
// extendedFetch calls the global `fetch` internally, so we replace it with a
// vi.fn() mock at the module level.  No real network requests are made.

import BadResponseClientError from '@/errors/bad_response_client_error';
import BadResponseError from '@/errors/bad_response_error';
import BadResponseServerError from '@/errors/bad_response_server_error';
import FetchError from '@/errors/fetch_error';
import { describe, expect, it, vi } from 'vitest';
import { extendedFetch } from '../extended_fetch';

// Replace the global fetch so extendedFetch never reaches the network.
const mockFetch = vi.fn<typeof fetch>();
vi.stubGlobal('fetch', mockFetch);

function makeResponse(status: number): Response {
  return new Response(null, { status });
}

describe('extendedFetch', () => {
  it('returns the response unchanged for a 2xx status', async () => {
    mockFetch.mockResolvedValue(makeResponse(200));

    const response = await extendedFetch('https://example.com/api');

    expect(response.status).toBe(200);
  });

  it('throws BadResponseServerError for a 5xx status', async () => {
    mockFetch.mockResolvedValue(makeResponse(500));

    await expect(
      extendedFetch('https://example.com/api'),
    ).rejects.toBeInstanceOf(BadResponseServerError);
  });

  it('throws BadResponseServerError for any status in the 500–599 range', async () => {
    for (const status of [500, 503, 599]) {
      mockFetch.mockResolvedValue(makeResponse(status));
      await expect(
        extendedFetch('https://example.com/api'),
      ).rejects.toBeInstanceOf(BadResponseServerError);
    }
  });

  it('throws BadResponseClientError for a 4xx status', async () => {
    mockFetch.mockResolvedValue(makeResponse(400));

    await expect(
      extendedFetch('https://example.com/api'),
    ).rejects.toBeInstanceOf(BadResponseClientError);
  });

  it('throws BadResponseClientError for any status in the 400–499 range', async () => {
    for (const status of [400, 401, 403, 404, 422, 499]) {
      mockFetch.mockResolvedValue(makeResponse(status));
      await expect(
        extendedFetch('https://example.com/api'),
      ).rejects.toBeInstanceOf(BadResponseClientError);
    }
  });

  it('throws BadResponseError for a non-ok status outside 4xx and 5xx', async () => {
    // 3xx responses are not ok and do not fall into the 4xx or 5xx bands.
    mockFetch.mockResolvedValue(makeResponse(301));

    await expect(
      extendedFetch('https://example.com/api'),
    ).rejects.toBeInstanceOf(BadResponseError);
  });

  it('wraps a network-level exception in a FetchError', async () => {
    // Simulate a network failure (e.g. DNS error, connection refused) that
    // prevents fetch from returning a Response at all.
    mockFetch.mockRejectedValue(new TypeError('Failed to fetch'));

    await expect(
      extendedFetch('https://example.com/api'),
    ).rejects.toBeInstanceOf(FetchError);
  });

  it('re-throws typed errors (BaseError subclasses) without wrapping them', async () => {
    // If fetch itself somehow throws a BadResponseServerError (e.g. in a
    // custom fetch pipeline), extendedFetch should not double-wrap it.
    const original = new BadResponseServerError(500, null);
    mockFetch.mockRejectedValue(original);

    const caught = await extendedFetch('https://example.com/api').catch(
      (e) => e,
    );
    expect(caught).toBe(original);
  });

  it('forwards the input and init arguments to the underlying fetch', async () => {
    mockFetch.mockResolvedValue(makeResponse(200));
    const init: RequestInit = { method: 'POST', body: 'hello' };

    await extendedFetch('https://example.com/api', init);

    expect(mockFetch).toHaveBeenCalledWith('https://example.com/api', init);
  });
});
