import { Milliseconds, RetryController } from './controller';
/**
 * createLinearBackOffRetryController takes a `RetryController` to dictate
 * the base retry logic, and returns a linear delay penalty based on the
 * attempt count.
 *
 * If `delayPenalty` or `maxPenalty` is not specified, defaults are utilized.
 */
export declare function createLinearBackOffRetryController(controller: RetryController, delayPenalty?: Milliseconds<number>, maxPenalty?: Milliseconds<number>): RetryController;
export declare function withLinearBackOffRetryController(delayPenalty?: Milliseconds<number>, maxPenalty?: Milliseconds<number>): (controller: RetryController) => RetryController;
