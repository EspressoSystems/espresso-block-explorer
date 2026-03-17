import { RetryController, ShouldRetry, ShouldRetryResult } from './controller';

/**
 * DEFAULT_MAX_ATTEMPTS represents the default maximum  number of attempts the
 * max attempts retry controller will attempt to utilize.
 */
const DEFAULT_MAX_ATTEMPTS = 3;

/**
 * MaxAttemptsRetryController is a `RetryController` that only allows for
 * a maximum number of attempts to be performed.
 */
class MaxAttemptsRetryController implements RetryController {
  constructor(
    private readonly controller: RetryController,
    private readonly maxAttempts: number,
  ) {
    Object.freeze(this);
  }

  shouldRetry(attempt: number, err: unknown): ShouldRetry {
    if (attempt >= this.maxAttempts) {
      return ShouldRetryResult.no;
    }

    return this.controller.shouldRetry(attempt, err);
  }
}

/**
 * createMaxAttemptsRetryController takes a `RetryController` and a maximum
 * number of attempts, and will return a `RetryController` that will instruct
 * not to retry after the max attempts has been reached.
 */
export function createMaxAttemptsRetryController(
  controller: RetryController,
  maxAttempts: number = DEFAULT_MAX_ATTEMPTS,
): RetryController {
  return new MaxAttemptsRetryController(controller, maxAttempts);
}

export function withMaxAttemptsRetryController(maxAttempts?: number) {
  return (controller: RetryController) =>
    createMaxAttemptsRetryController(controller, maxAttempts);
}
