import BadResponseClientError from '@/errors/bad_response_client_error';
import FetchError from '@/errors/fetch_error';
import WebWorkerErrorResponse from '@/errors/web_worker_error_response';
import { createRetryController, Milliseconds, retry } from '../retry';
import { createAlwaysRetryController } from '../retry/always_retry';
import { withErrorBasedRetryController as withErrorBased } from '../retry/error_based_retry';
import { withLinearBackOffRetryController as withLinearBackOff } from '../retry/linear_back_off';
import { withMaxAttemptsRetryController as withMaxAttempts } from '../retry/max_attempts';
import { withRandomDelayRetryController as withRandomDelay } from '../retry/random_delay_retry';

const HTTP_STATUS_CODE_NOT_FOUND = 404;

/**
 * isNotFoundError is a helper function to determine if an error
 * is, or has, an underlying error that whose result is a 404 server response.
 */
export function isNotFoundError(error: unknown) {
  let localError: unknown = error;
  if (error instanceof WebWorkerErrorResponse) {
    // We have a WebWorkerErrorResponse, we can inspect the underlying
    localError = error.error;
  }

  if (
    localError instanceof BadResponseClientError &&
    localError.status === HTTP_STATUS_CODE_NOT_FOUND
  ) {
    // This likely means that the active validator set is not yet
    // available.  We can just return the previous state.
    return true;
  }

  return false;
}

const HTTP_STATUS_CODE_GONE = 410;

/**
 * isGoneError is a helper function to determine if an error is, or has, an
 * underlying error whose result is a 410 server response.
 */
export function isGoneError(error: unknown) {
  let localError: unknown = error;
  if (error instanceof WebWorkerErrorResponse) {
    // We have a WebWorkerErrorResponse, we can inspect the underlying
    localError = error.error;
  }

  if (
    localError instanceof BadResponseClientError &&
    localError.status === HTTP_STATUS_CODE_GONE
  ) {
    // This likely means that the active validator set is not yet
    // available.  We can just return the previous state.
    return true;
  }

  return false;
}

/**
 * isFetchError is a helper function to determine if an error is, or has, an
 * underlying error that results from a failure during a `fetch` call.
 *
 * NOTE: Ideally, we would inspect the nature of the specific `fetch` failure
 * in order to determine whether the failure is a recoverable `feetch` failure
 * or not.  However, the specifics of this error are opaque and hide the
 * details of the underlying cause.  So the best we can do is just treat every
 * `FetchError` as retryable.
 */
export function isFetchError(error: unknown) {
  let localError: unknown = error;
  if (error instanceof WebWorkerErrorResponse) {
    // We have a WebWorkerErrorResponse, we can inspect the underlying error.
    localError = error.error;
  }

  return localError instanceof FetchError;
}

export function isARetryableError(err: unknown): boolean {
  return isFetchError(err);
}

function defaultIsRetryableFetchErrror(err: unknown): boolean {
  return isARetryableError(err);
}
/**
 * FetchRetryConfig is the configuration for the auto retry fetch function.
 * It specifies the timing, attempts, criteria, and error inspection
 * properties of the implementation.
 */
export interface FetchRetryConfig {
  maxRetries?: number;
  maxPenaltyMs?: Milliseconds<number>;
  retryPenalityMs?: Milliseconds<number>;
  maxRandomDelayMs?: Milliseconds<number>;
  isRetryableFetchErrror?: (err: unknown) => boolean;
}

export function createAutoRetryFetch(
  config: FetchRetryConfig,
  fetchFn: typeof fetch,
): typeof fetch {
  const {
    maxRetries,
    maxPenaltyMs,
    retryPenalityMs,
    maxRandomDelayMs,
    isRetryableFetchErrror = defaultIsRetryableFetchErrror,
  } = config;

  return async (
    input: Parameters<typeof fetch>[0],
    init?: Parameters<typeof fetch>[1],
  ) => {
    const controller = createRetryController(
      createAlwaysRetryController(),
      withErrorBased(isRetryableFetchErrror),
      withMaxAttempts(maxRetries),
      withLinearBackOff(retryPenalityMs, maxPenaltyMs),
      withRandomDelay(maxRandomDelayMs),
    );

    const fn = async () => fetchFn(input, init);
    return retry(controller, fn);
  };
}
