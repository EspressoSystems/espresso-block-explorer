import {
  Milliseconds,
  RetryController,
  ShouldRetry,
  ShouldRetryResult,
} from './controller';

/**
 * DEFAULT_DELAY_PENALTY is the default maximum linear time delay penalty to
 * apply for a linear back-off retry strategy.
 */
const DEFAULT_MAX_PENALTY = 2000;

/**
 * DEFAULT_DELAY_PENALTY is the default delay penalty to apply to a given
 * attempt count.
 */
const DEFAULT_DELAY_PENALTY = 250;

/**
 * LinearBackOffRetryController is a `RetryController` that handles the
 * delay penalty of a failure back-off in a linear fashion, applying a linear
 * delayt penalty based on the attempt count, up to a maximum penalty.
 */
class LinearBackOffRetryController implements RetryController {
  constructor(
    private readonly controller: RetryController,
    private readonly delayPenalty: Milliseconds<number>,
    private readonly maxPenalty: Milliseconds<number>,
  ) {
    Object.freeze(this);
  }

  shouldRetry(attempt: number, err: unknown): ShouldRetry {
    const result = this.controller.shouldRetry(attempt, err);

    if (result === ShouldRetryResult.no) {
      return result;
    }

    // We augment the returned delay with our applied penalty, so we don't
    // just ignore the penalty outright.

    const additionalDelay = Math.min(
      attempt * this.delayPenalty,
      this.maxPenalty,
    );

    return additionalDelay + result;
  }
}

/**
 * createLinearBackOffRetryController takes a `RetryController` to dictate
 * the base retry logic, and returns a linear delay penalty based on the
 * attempt count.
 *
 * If `delayPenalty` or `maxPenalty` is not specified, defaults are utilized.
 */
export function createLinearBackOffRetryController(
  controller: RetryController,
  delayPenalty: Milliseconds<number> = DEFAULT_DELAY_PENALTY as Milliseconds<number>,
  maxPenalty: Milliseconds<number> = DEFAULT_MAX_PENALTY as Milliseconds<number>,
): RetryController {
  return new LinearBackOffRetryController(controller, delayPenalty, maxPenalty);
}

export function withLinearBackOffRetryController(
  delayPenalty?: Milliseconds<number>,
  maxPenalty?: Milliseconds<number>,
) {
  return (controller: RetryController) =>
    createLinearBackOffRetryController(controller, delayPenalty, maxPenalty);
}
