import { RetryController, ShouldRetry, ShouldRetryResult } from './controller';

/**
 * NeverRetryController is a `RetryController` that will indicate that another
 * attempt should never be attempted.
 */
class NeverRetryController implements RetryController {
  constructor() {
    Object.freeze(this);
  }

  shouldRetry(): ShouldRetry {
    return ShouldRetryResult.no;
  }
}

/**
 * createNeverRetryController will create a `RetryController` that indicates
 * that another attempt should **NEVER** be attempted.
 */
export function createNeverRetryController(): RetryController {
  return new NeverRetryController();
}
