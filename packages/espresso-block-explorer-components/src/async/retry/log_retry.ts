import { RetryController, ShouldRetry } from './controller';

/**
 * LogRetryController is a `RetryController` that will automatically log
 * every call to `shouldRetry` utilizing the given `logger` which is a
 * function that adheres to the signature of `console.log`.
 */
class LogRetryController implements RetryController {
  constructor(
    private readonly controller: RetryController,
    private readonly logger: typeof console.log,
  ) {
    Object.freeze(this);
  }

  shouldRetry(attempt: number, error: unknown): ShouldRetry {
    this.logger(
      'retry controller encountered error',
      'error',
      error,
      'attempt',
      attempt,
    );
    const result = this.controller.shouldRetry(attempt, error);
    return result;
  }
}

/**
 * createLogRetryController takes a `RetryController` and will log all retry
 * queries for it utilizing the given logger.
 */
export function createLogRetryController(
  controller: RetryController,
  logger: typeof console.log,
): RetryController {
  return new LogRetryController(controller, logger);
}

export function withLogRetryController(logger: typeof console.log) {
  return (controller: RetryController) =>
    createLogRetryController(controller, logger);
}
