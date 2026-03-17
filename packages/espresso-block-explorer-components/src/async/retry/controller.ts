/**
 * NonNegativeInteger represents a non-negative non-fractional integer.
 */
export type NonNegativeInteger<T extends number> = number extends T
  ? never
  : `${T}` extends `-${string}` | `${string}.${string}`
    ? never
    : T;

/**
 * Milliseconds is a type placeholder utilized to indicate to the user that
 * this time frame is meant to be represented in milliseconds.
 */
export type Milliseconds<T extends number> = NonNegativeInteger<T>;

/**
 * ShouldRetryResult is a hard-coded enum with a single case.  That case is
 * meant to indicate to the user that the result is that a retry should
 * **NOT** be attempted.
 */
export enum ShouldRetryResult {
  no = -1,
}

/**
 * ShouldRetry is the sole results of the `RetryController`. It specifies
 * whether a reattempt should be performed or not, and if one should be
 * reattempted, the delay penalty to apply before the next attempt.
 */
export type ShouldRetry = ShouldRetryResult.no | Milliseconds<number>;

/**
 * RetryController is a class of behaviors that controls whether a reattempt
 * is attmepted or not. This being an implementation allows for the swapping
 * of specific delay behaviors, such as expotential back off, linear back off,
 * logging, error cause inspection, or others.
 */
export interface RetryController {
  shouldRetry(attempt: number, err: unknown): ShouldRetry;
}

export type RetryControllerOption = (
  controller: RetryController,
) => RetryController;

export function createRetryController(
  controller: RetryController,
  ...options: RetryControllerOption[]
): RetryController {
  let result = controller;
  for (const opt of options) {
    result = opt(result);
  }
  return result;
}
