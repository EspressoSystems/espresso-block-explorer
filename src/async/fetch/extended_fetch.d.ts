/**
 * createExtendedFetch is a function that creates a wrapper around the fetch
 * function which throws errors when the response is not `ok`.  It will also
 * wrap any error encountered while calling the given `fetchFn` with a
 * `FetchError`, for easier detection (should it not be a better class of
 * error already)
 */
export declare const createExtendedFetch: (fetchFn?: typeof fetch) => typeof fetch;
