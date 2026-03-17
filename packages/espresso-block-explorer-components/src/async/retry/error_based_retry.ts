import { RetryController, ShouldRetry, ShouldRetryResult } from './controller';

/**
 * ErrorInspection represents a function that will inspect the underlying
 * error and return whether the the error indicates whether a reattempt is
 * warrented or not.
 */
type ErrorInspection = (error: unknown) => boolean;

/**
 * ErrorBasedRetryController is a `RetryController` that will perform a
 * reattempt based on the specific error being inspected.
 */
class ErrorBasedRetryController implements RetryController {
  constructor(
    private readonly controller: RetryController,
    private readonly inspect: ErrorInspection,
  ) {
    Object.freeze(this);
  }

  shouldRetry(attempt: number, error: unknown): ShouldRetry {
    const result = this.controller.shouldRetry(attempt, error);
    if (result === ShouldRetryResult.no) {
      return result;
    }

    if (!this.inspect(error)) {
      return ShouldRetryResult.no;
    }

    return result;
  }
}

/**
 * createErrorBasedRetryController will create a `RetryController` that will
 * indicate that an attempt should be retried based on the result of an
 * error inspection.
 */
export function createErrorBasedRetryController(
  controller: RetryController,
  inspect: ErrorInspection,
): RetryController {
  return new ErrorBasedRetryController(controller, inspect);
}

export function withErrorBasedRetryController(inspect: ErrorInspection) {
  return (controller: RetryController) =>
    createErrorBasedRetryController(controller, inspect);
}
