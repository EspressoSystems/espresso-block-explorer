import { Milliseconds } from '../retry';
/**
 * isNotFoundError is a helper function to determine if an error
 * is, or has, an underlying error that whose result is a 404 server response.
 */
export declare function isNotFoundError(error: unknown): boolean;
/**
 * isGoneError is a helper function to determine if an error is, or has, an
 * underlying error whose result is a 410 server response.
 */
export declare function isGoneError(error: unknown): boolean;
/**
 * isFetchError is a helper function to determine if an error is, or has, an
 * underlying error that results from a failure during a `fetch` call.
 *
 * NOTE: Ideally, we would inspect the nature of the specific `fetch` failure
 * in order to determine whether the failure is a recoverable `fetch` failure
 * or not.  However, the specifics of this error are opaque and hide the
 * details of the underlying cause.  So the best we can do is just treat every
 * `FetchError` as retryable.
 */
export declare function isFetchError(error: unknown): boolean;
export declare function isARetryableError(err: unknown): boolean;
/**
 * FetchRetryConfig is the configuration for the auto retry fetch function.
 * It specifies the timing, attempts, criteria, and error inspection
 * properties of the implementation.
 */
export interface FetchRetryConfig {
    maxRetries?: number;
    maxPenaltyMs?: Milliseconds<number>;
    retryPenaltyMs?: Milliseconds<number>;
    maxRandomDelayMs?: Milliseconds<number>;
    isRetryableFetchError?: (err: unknown) => boolean;
}
export declare function createAutoRetryFetch(config: FetchRetryConfig, fetchFn: typeof fetch): typeof fetch;
