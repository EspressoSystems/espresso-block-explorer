import {
  Milliseconds,
  RetryController,
  ShouldRetry,
  ShouldRetryResult,
} from './controller';

/**
 * DEFAULT_RANDOM_DELAY_MAX is the default random delay penalty to choose
 * from.
 */
const DEFAULT_RANDOM_DELAY_MAX = 250;

/**
 */
class RandomDelayRetryController implements RetryController {
  constructor(
    private readonly controller: RetryController,
    private readonly randomDelayMax: Milliseconds<number>,
  ) {
    Object.freeze(this);
  }

  shouldRetry(attempt: number, error: unknown): ShouldRetry {
    const result = this.controller.shouldRetry(attempt, error);

    if (result === ShouldRetryResult.no) {
      return result;
    }

    // Apply a random roll for the delay, truncated.
    const rand = Math.floor(Math.random() * this.randomDelayMax);
    return result + rand;
  }
}

/**
 * createRandomDelayRetryController takes a `RetryController` and will will
 * return a `RetryController` that will add a random delay to the returned
 * result.
 */
export function createRandomDelayRetryController(
  controller: RetryController,
  maxDelay: Milliseconds<number> = DEFAULT_RANDOM_DELAY_MAX as Milliseconds<number>,
): RetryController {
  return new RandomDelayRetryController(controller, maxDelay);
}

export function withRandomDelayRetryController(
  maxDelay?: Milliseconds<number>,
) {
  return (controller: RetryController) =>
    createRandomDelayRetryController(controller, maxDelay);
}
