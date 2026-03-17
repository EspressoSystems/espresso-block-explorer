import { Milliseconds, RetryController, ShouldRetry } from './controller';

const NoDelay: Milliseconds<0> = 0;

/**
 * AlwaysRetryController is a `RetryController` that will indicate that the
 * attempt should *ALWAYS* be reattempted with no delay penalty.
 */
class AlwaysRetryController implements RetryController {
  constructor() {
    Object.freeze(this);
  }

  shouldRetry(): ShouldRetry {
    return NoDelay as ShouldRetry;
  }
}

/**
 * createAlwaysRetryController will return a `RetryController` that will
 * return that an attempt should **ALWAYS** be retried with no delay.
 */
export function createAlwaysRetryController(): RetryController {
  return new AlwaysRetryController();
}
