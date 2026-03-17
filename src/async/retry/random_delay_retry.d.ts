import { Milliseconds, RetryController } from './controller';
/**
 * createRandomDelayRetryController takes a `RetryController` and will will
 * return a `RetryController` that will add a random delay to the returned
 * result.
 */
export declare function createRandomDelayRetryController(controller: RetryController, maxDelay?: Milliseconds<number>): RetryController;
export declare function withRandomDelayRetryController(maxDelay?: Milliseconds<number>): (controller: RetryController) => RetryController;
